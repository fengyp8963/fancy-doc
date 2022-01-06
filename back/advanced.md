# 进阶

::: info 简介 构建分布式系统不应该是复杂的，SpringCloud对常见的分布式系统模式提供了简单易用的编程模型，帮助开发者构建弹性、可靠、协调的应用程序；
SpringCloud是在SpringBoot的基础上构建的，使开发者可以轻松入门并快速提高工作效率。
:::

## Tenant 租户模式

- 多租户技术，是一种架构模式，是实现如何在多用户环境下共用相同的系统或程序组件，并且达到各用户间数据的“独立”的技术；

```yaml
serein:
  login:
    tenant: true
```

## Swagger接口文档

- SwaggerConfiguration 类配置
- 本文主要讲解serein cloud是如何通过整合Swagger-UI来实现一份相当完善的在线API文档的。
- Swagger-UI是HTML, Javascript, CSS的一个集合，可以动态地根据注解生成在线API文档。

```java
/**
 * Swagger配置类，提供给WEB服务使用
 */
@RequiredArgsConstructor
@Configuration
@EnableOpenApi
@Profile({ "!prod" })
@ConditionalOnProperty(prefix = "serein.swagger", name = "enabled", havingValue = "true", matchIfMissing = true)
@Import(BeanValidatorPluginsConfiguration.class)
public class SwaggerConfiguration {

	private final SereinProperties sereinProperties;

	@Bean(value = "userApi")
	@Order(value = 1)
	public Docket createRestApi() {
		return new Docket(DocumentationType.OAS_30).directModelSubstitute(LocalDate.class, String.class)
				.directModelSubstitute(LocalTime.class, String.class)
				.directModelSubstitute(LocalDateTime.class, String.class)
				.directModelSubstitute(ZonedDateTime.class, String.class)
				// 通过swagger 的host 配置手动维护一个前缀
				// .host("主机名：端口：服务前缀") //注意这里的主机名：端口是网关的地址和端口
				.apiInfo(groupApiInfo())
				// 支持的通讯协议集合
				.protocols(Set.of("https", "http"))
				.securitySchemes(Collections.singletonList(HttpAuthenticationScheme.JWT_BEARER_BUILDER
						// 显示用
						.name("JWT").build()))
				.securityContexts(Collections.singletonList(SecurityContext.builder()
						.securityReferences(Collections.singletonList(
								SecurityReference.builder().scopes(new AuthorizationScope[0]).reference("JWT").build()))
						// 声明作用域
						.operationSelector(o -> o.requestMappingPattern().matches("/.*")).build()))
				.select().apis(RequestHandlerSelectors.basePackage("com.serein"))
				// .apis(RequestHandlerSelectors.any())
				// .apis(RequestHandlerSelectors.withMethodAnnotation(ApiOperation.class))
				.paths(PathSelectors.any()).build().pathMapping("/");
	}

	private ApiInfo groupApiInfo() {
		SwaggerProperties swagger = sereinProperties.getSwagger();
		return new ApiInfoBuilder().title(swagger.getTitle()).description(swagger.getDescription())
				.license(swagger.getLicense()).licenseUrl(swagger.getLicenseUrl())
				.termsOfServiceUrl(swagger.getTermsOfServiceUrl()).version(swagger.getVersion())
				.contact(new Contact(swagger.getName(), swagger.getUrl(), swagger.getEmail())).build();
	}

}
```

## Oauth2 授权认证

- UserPrincipalService 配置

```java
@Slf4j
@RequiredArgsConstructor
@Service
@Transactional
public class UserPrincipalService implements IUserPrincipalService {

	private final IUserProvider userProvider;

	private final IMemberProvider memberProvider;

	@Override
	public UserPrincipal loadUserByUsername(String username) {
		PrincipalDto principalDto;
		String clientId = OAuth2ClientAuthenticationUtil.getClientId();
		if (Oauth2Constant.SEREIN_CLIENT_ID.equals(clientId)) {
			principalDto = userProvider.getByUsername(username).getData();
		}
		else {
			principalDto = memberProvider.getByUsername(username).getData();
		}
		if (principalDto == null) {
			throw new UsernameNotFoundException("该用户：" + username + "不存在");
		}
		principalDto.setClientId(clientId);
		principalDto.setLoginType(Oauth2Constant.LOGIN_USERNAME_TYPE);
		principalDto.setPassword("{bcrypt}" + principalDto.getPassword());
		return getUserDetails(principalDto);
	}

	@Override
	public UserPrincipal loadUserByMobile(String mobile) throws UsernameNotFoundException {
		PrincipalDto principalDto;
		String clientId = OAuth2ClientAuthenticationUtil.getClientId();
		if (Oauth2Constant.SEREIN_CLIENT_ID.equals(clientId)) {
			principalDto = userProvider.getByMobile(mobile).getData();
		}
		else {
			principalDto = memberProvider.getByMobile(mobile).getData();
		}
		if (principalDto == null) {
			throw new UsernameNotFoundException("该用户：" + mobile + "不存在");
		}
		principalDto.setClientId(clientId);
		principalDto.setLoginType(Oauth2Constant.LOGIN_MOBILE_TYPE);
		return getUserDetails(principalDto);
	}

	@Override
	public UserPrincipal loadUserBySocial(String openId) throws UsernameNotFoundException {
		PrincipalDto principalDto;
		String clientId = OAuth2ClientAuthenticationUtil.getClientId();
		if (Oauth2Constant.SEREIN_CLIENT_ID.equals(clientId)) {
			principalDto = userProvider.getByOpenId(openId).getData();
		}
		else {
			principalDto = memberProvider.getByOpenId(openId).getData();
		}
		if (principalDto == null) {
			throw new UsernameNotFoundException("该用户：" + openId + "不存在");
		}
		principalDto.setClientId(clientId);
		principalDto.setLoginType(Oauth2Constant.LOGIN_OPENID_TYPE);
		return getUserDetails(principalDto);
	}

	private UserPrincipal getUserDetails(PrincipalDto principalDto) {
		principalDto.setTenantId(100000L);
		if (ObjectUtils.isEmpty(principalDto)) {
			log.info("该用户：{} 不存在！", principalDto.getUsername());
			throw new UsernameNotFoundException("该用户：" + principalDto.getUsername() + "不存在");
		}
		else if (!Boolean.TRUE.equals(principalDto.getEnabled())) {
			log.info("该用户：{} 已被停用!", principalDto.getUsername());
			throw new ApiException("对不起，您的账号：" + principalDto.getUsername() + " 已停用");
		}
		log.info("用户名：{}", principalDto.getUsername());
		// 保存到redis中，网关统一认证需要用到
		List<String> roles = principalDto.getRoles().stream().map(CommonDto::getCode).collect(Collectors.toList());
		Collection<? extends GrantedAuthority> authorities = AuthorityUtils
				.createAuthorityList(roles.toArray(String[]::new));
		log.info("authorities: {}", authorities);
		Map<String, Object> auths = Map.of("auths", List.of());
		// 授权认证额外参数
		return new UserPrincipal(principalDto.getId(), principalDto.getClientId(), principalDto.getAvatar(),
				principalDto.getLoginType(), principalDto.getTenantId(), auths, principalDto.getUsername(),
				principalDto.getPassword(), Boolean.TRUE.equals(principalDto.getEnabled()), Boolean.TRUE, Boolean.TRUE,
				Boolean.TRUE, authorities);
	}

}
```

## XxlJob 定时任务

- serein-cloud-xxljob 配置

```yaml
xxl:
  job:
    accessToken: ''
    i18n: zh_CN
    logretentiondays: 30
    triggerpool:
      fast:
        max: 200
      slow:
        max: 100
```

- serein-cloud-xxljob 配置

```yaml
server:
  port: 8100
xxl:
  job:
    accessToken: ''
    admin:
      addresses: http://${serein.host}:8099
    executor:
      address: ''
      appname: serein-cloud-xxljob-executor
      ip: ''
      logpath: ./logs/app/${spring.application.name}
      logretentiondays: 30
      port: 9999
```

## Oss 文件上传下载

```yaml
---
serein:
  oss:
    endpoint: oss-cn-shenzhen.aliyuncs.com #对象存储服务的URL
    custom-domain: #自定义域名
    path-style-access: true #反向代理和S3默认支持
    enabled: false #是否启用
    endpoints-web-enabled: false #是否暴露web端口
    region: shenzhen #区域
    access-key-id: LTAI5tA9jRsfTiZFN1k2PCy5 #Access key Id 就像用户ID，可以唯一标识你的账户
    access-key-secret: h4tZ4xH8M74rVhNaC0dJ6H49jN5Hnz  #Access key Secret 是你账户的密码
    bucket-name: serein-cloud #默认的存储桶名称
---

```

## Redis 缓存配置

- @EnableCaching注解是spring framework中的注解驱动的缓存管理功能。自spring版本3.1起加入了该注解。如果你使用了这个注解， 那么你就不需要在XML文件中配置cache manager了。
- 当你在配置类(@Configuration)上使用@EnableCaching注解时，会触发一个post processor，这会扫描每一个spring bean，
- 查看是否已经存在注解对应的缓存。如果找到了，就会自动创建一个代理拦截方法调用，使用缓存的bean执行处理。

```java
/**
 * 设置缓存时间
 */
@Configuration
@EnableCaching
@ConditionalOnClass(RedisOperations.class)
@EnableConfigurationProperties(RedisProperties.class)
@RequiredArgsConstructor
public class CacheConfig {

    @Bean
    public CacheManager cacheManager(RedisConnectionFactory redisConnectionFactory) {
        return new RedisCacheManager(RedisCacheWriter.nonLockingRedisCacheWriter(redisConnectionFactory),
                this.getRedisCacheConfigurationWithTtl(2 * 60 * 60), // 默认策略，未配置的key会使用这个
                this.getRedisCacheConfigurationMap() // 指定 key 策略
        );
    }

    private Map<String, RedisCacheConfiguration> getRedisCacheConfigurationMap() {
        Map<String, RedisCacheConfiguration> redisCacheConfigurationMap = new HashMap<>();
        // DefaultCache和EnterpriseApiCache进行过期时间配置
        redisCacheConfigurationMap.put("DefaultCache", this.getRedisCacheConfigurationWithTtl(24 * 60 * 60));
        return redisCacheConfigurationMap;
    }

    private RedisCacheConfiguration getRedisCacheConfigurationWithTtl(Integer seconds) {
        Jackson2JsonRedisSerializer<Object> jackson2JsonRedisSerializer = new Jackson2JsonRedisSerializer<>(
                Object.class);
        jackson2JsonRedisSerializer.setObjectMapper(JsonUtil.getInstance());
        RedisCacheConfiguration redisCacheConfiguration = RedisCacheConfiguration.defaultCacheConfig();
        redisCacheConfiguration = redisCacheConfiguration
                .serializeValuesWith(
                        RedisSerializationContext.SerializationPair.fromSerializer(jackson2JsonRedisSerializer))
                .entryTtl(Duration.ofSeconds(seconds)).computePrefixWith(cacheKeyPrefix());
        return redisCacheConfiguration;
    }

    @Bean
    public CacheKeyPrefix cacheKeyPrefix() {
        return cacheName -> {
            String headerTenantId = String.valueOf(TenantContextHolder.getTenantId());
            if (headerTenantId.equals("null")) {
                headerTenantId = SereinConstant.SEREIN_TENANT_ID_DEFAULT;
            }
            StringBuilder sBuilder = new StringBuilder(100);
            // 此方法需要自己实现，获取租户编码
            sBuilder.append("serein").append(":").append(headerTenantId).append(":")
                    .append(SereinConstant.SEREIN_CACHE_NAMES_PREFIX);
            sBuilder.append(cacheName).append(":");
            return sBuilder.toString();
        };
    }

    @Bean
    public KeyGenerator keyGenerator() {
        return (target, method, params) -> {
            if (params.length == 0 || params[0] == null) {
                return "";
            }
            String join = Arrays.stream(params).map(param -> {
                try {
                    return JsonUtil.writeValueAsString(param);
                }
                catch (JsonProcessingException e) {
                    return param.toString();
                }
            }).collect(Collectors.joining("&"));
            String format = String.format("%s{%s}", target.getClass().getName() + "." + method.getName(), join);
            return DigestUtils.sha256Hex(format);
        };
    }

}
```

- 缓存使用方法

```java
/**
 * <p>
 * 部门表 服务实现类
 * </p>
 */
@RequiredArgsConstructor
@Service
@CacheConfig(cacheNames = "depart", keyGenerator = "keyGenerator")
@Transactional(rollbackFor = Exception.class)
public class DepartService implements IDepartService {

	private final DepartRepository departRepository;

	private final DepartMapper departMapper;

	@Override
	public Handle<Depart, DepartDto, DepartTreeNode, DepartPOI, Long> getHandle() {
		return new Handle<>(departRepository, departMapper);
	}

	@Cacheable
	@Override
	public DepartDto get(Long aLong) {
		return IDepartService.super.get(aLong);
	}

	@CacheEvict(allEntries = true)
	@Override
	public DepartDto save(DepartDto dto) {
		return IDepartService.super.save(dto);
	}

	@CacheEvict(allEntries = true)
	@Override
	public DepartDto update(DepartDto dto) {
		return IDepartService.super.update(dto);
	}

	@CacheEvict(allEntries = true)
	@Override
	public void updateDeletedTrue(Long aLong) {
		IDepartService.super.updateDeletedTrue(aLong);
	}

	@Cacheable
	@Override
	public Page<DepartDto> findAll(Specification<Depart> spec, Pageable pageable) {
		return IDepartService.super.findAll(spec, pageable);
	}

	@Cacheable
	@Override
	public List<DepartTreeNode> trees(Specification<Depart> spec, Sort sort, boolean lazied) {
		return IDepartService.super.trees(spec, sort, lazied);
	}

}
```
