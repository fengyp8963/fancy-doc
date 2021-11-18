# 进阶

::: info 简介
VitePress provides a homepage layout. To use it, specify `home: true` plus some other metadata in your root `index.md`'s [YAML frontmatter](/front/frontmatter). This is an example of how it works:
:::

## Swagger接口文档

- SwaggerConfiguration 类配置

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
