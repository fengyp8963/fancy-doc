import{_ as s,o as a,c as n,V as l}from"./chunks/framework.580080a9.js";const F=JSON.parse('{"title":"配置","description":"","frontmatter":{},"headers":[],"relativePath":"back/config.md","filePath":"back/config.md","lastUpdated":1688972433000}'),p={name:"back/config.md"},o=l(`<h1 id="配置" tabindex="-1">配置 <a class="header-anchor" href="#配置" aria-label="Permalink to &quot;配置&quot;">​</a></h1><div class="tip custom-block"><p class="custom-block-title">提示</p><p><code>fancy-config</code>配置中心服务，系统所有服务都通过它进行配置，<code>fancy-common-*.yml</code>为公共配置文件；配置文件分为： <code>dev</code>、<code>test</code>、<code>prod</code> 四个环境。</p></div><h2 id="host文件" tabindex="-1">Host文件 <a class="header-anchor" href="#host文件" aria-label="Permalink to &quot;Host文件&quot;">​</a></h2><h3 id="安装switchhosts" tabindex="-1">安装SwitchHosts <a class="header-anchor" href="#安装switchhosts" aria-label="Permalink to &quot;安装SwitchHosts&quot;">​</a></h3><h3 id="环境地址配置" tabindex="-1">环境地址配置 <a class="header-anchor" href="#环境地址配置" aria-label="Permalink to &quot;环境地址配置&quot;">​</a></h3><h4 id="default-hosts" tabindex="-1">Default Hosts <a class="header-anchor" href="#default-hosts" aria-label="Permalink to &quot;Default Hosts&quot;">​</a></h4><div class="language-text"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">#fancy项目</span></span>
<span class="line"><span style="color:#A6ACCD;">#redis</span></span>
<span class="line"><span style="color:#A6ACCD;">127.0.0.1 outside-agent-redis</span></span>
<span class="line"><span style="color:#A6ACCD;">#mysql</span></span>
<span class="line"><span style="color:#A6ACCD;">127.0.0.1 outside-agent-mysql</span></span>
<span class="line"><span style="color:#A6ACCD;">#logstashs</span></span>
<span class="line"><span style="color:#A6ACCD;">127.0.0.1 outside-agent-elk</span></span>
<span class="line"><span style="color:#A6ACCD;">#elasticsearch</span></span>
<span class="line"><span style="color:#A6ACCD;">127.0.0.1 outside-agent-elk</span></span>
<span class="line"><span style="color:#A6ACCD;">#rabbitmq</span></span>
<span class="line"><span style="color:#A6ACCD;">127.0.0.1 outside-agent-rabbitmq</span></span>
<span class="line"><span style="color:#A6ACCD;">#seate</span></span>
<span class="line"><span style="color:#A6ACCD;">127.0.0.1 outside-agent-seata-server</span></span></code></pre></div><h4 id="dev-hosts" tabindex="-1">Dev Hosts <a class="header-anchor" href="#dev-hosts" aria-label="Permalink to &quot;Dev Hosts&quot;">​</a></h4><div class="language-text"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">#fancy项目</span></span>
<span class="line"><span style="color:#A6ACCD;">#redis</span></span>
<span class="line"><span style="color:#A6ACCD;">127.0.0.1 outside-agent-redis</span></span>
<span class="line"><span style="color:#A6ACCD;">#mysql</span></span>
<span class="line"><span style="color:#A6ACCD;">127.0.0.1 outside-agent-mysql</span></span>
<span class="line"><span style="color:#A6ACCD;">#logstashs</span></span>
<span class="line"><span style="color:#A6ACCD;">127.0.0.1 outside-agent-elk</span></span>
<span class="line"><span style="color:#A6ACCD;">#elasticsearch</span></span>
<span class="line"><span style="color:#A6ACCD;">127.0.0.1 outside-agent-elk</span></span>
<span class="line"><span style="color:#A6ACCD;">#rabbitmq</span></span>
<span class="line"><span style="color:#A6ACCD;">127.0.0.1 outside-agent-rabbitmq</span></span>
<span class="line"><span style="color:#A6ACCD;">#seate</span></span>
<span class="line"><span style="color:#A6ACCD;">127.0.0.1 outside-agent-seata-server</span></span></code></pre></div><h4 id="test-hosts" tabindex="-1">Test Hosts <a class="header-anchor" href="#test-hosts" aria-label="Permalink to &quot;Test Hosts&quot;">​</a></h4><div class="language-text"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">#fancy项目</span></span>
<span class="line"><span style="color:#A6ACCD;">#redis</span></span>
<span class="line"><span style="color:#A6ACCD;">127.0.0.1 outside-agent-redis</span></span>
<span class="line"><span style="color:#A6ACCD;">#mysql</span></span>
<span class="line"><span style="color:#A6ACCD;">127.0.0.1 outside-agent-mysql</span></span>
<span class="line"><span style="color:#A6ACCD;">#logstashs</span></span>
<span class="line"><span style="color:#A6ACCD;">127.0.0.1 outside-agent-elk</span></span>
<span class="line"><span style="color:#A6ACCD;">#elasticsearch</span></span>
<span class="line"><span style="color:#A6ACCD;">127.0.0.1 outside-agent-elk</span></span>
<span class="line"><span style="color:#A6ACCD;">#rabbitmq</span></span>
<span class="line"><span style="color:#A6ACCD;">127.0.0.1 outside-agent-rabbitmq</span></span>
<span class="line"><span style="color:#A6ACCD;">#seate</span></span>
<span class="line"><span style="color:#A6ACCD;">127.0.0.1 outside-agent-seata-server</span></span></code></pre></div><h2 id="项目配置" tabindex="-1">项目配置 <a class="header-anchor" href="#项目配置" aria-label="Permalink to &quot;项目配置&quot;">​</a></h2><h3 id="各环境配置示图" tabindex="-1">各环境配置示图 <a class="header-anchor" href="#各环境配置示图" aria-label="Permalink to &quot;各环境配置示图&quot;">​</a></h3><h3 id="local-yml示例" tabindex="-1">local.yml示例 <a class="header-anchor" href="#local-yml示例" aria-label="Permalink to &quot;local.yml示例&quot;">​</a></h3><div class="language-yml"><button title="Copy Code" class="copy"></button><span class="lang">yml</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F07178;">spring</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">redis</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">host</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">outside-agent-redis</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">password</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">\${fancy.password}</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">data</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">elasticsearch</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#F07178;">repositories</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#F07178;">enabled</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FF9CAC;">true</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">elasticsearch</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">rest</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#F07178;">uris</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">outside-agent-elk:9200</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#F07178;">username</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">\${fancy.username}</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#F07178;">password</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">\${fancy.password}</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">logger</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">enabled</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FF9CAC;">true</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">driver-class-name</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">\${fancy.datasource.default.driver-class-name}</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">jdbc-url</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">\${fancy.datasource.default.url}</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">username</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">\${fancy.datasource.default.username}</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">password</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">\${fancy.datasource.default.password}</span></span>
<span class="line"><span style="color:#F07178;">fancy</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">host</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">localhost</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">username</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">*</span><span style="color:#A6ACCD;">*****</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">password</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">*</span><span style="color:#A6ACCD;">*****</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">datasource</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">default</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#F07178;">url</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">jdbc:mysql://outside-agent-mysql:3306/fancy?useUnicode=true&amp;characterEncoding=utf8&amp;serverTimezone=Asia/Shanghai</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#F07178;">driver-class-name</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">com.mysql.cj.jdbc.Driver</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#F07178;">username</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">\${fancy.username}</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#F07178;">password</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">\${fancy.password}</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">login</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">single</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FF9CAC;">true</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">cache</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FF9CAC;">true</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">tenant</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FF9CAC;">true</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">uid</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">type</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">HU_TOOL</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">social</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">vue</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#F07178;">url</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">http://\${fancy.host}:3100</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">log</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">enabled</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FF9CAC;">true</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">log-save-types</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">DB</span></span></code></pre></div><h2 id="存储配置" tabindex="-1">存储配置 <a class="header-anchor" href="#存储配置" aria-label="Permalink to &quot;存储配置&quot;">​</a></h2><p><code>fancy-component</code> 组件服务加入以下配置：</p><div class="language-yaml"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F07178;">fancy</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">oss</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">endpoint</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">oss-cn-shenzhen.aliyuncs.com</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">#对象存储服务的URL</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">custom-domain</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">#自定义域名</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">path-style-access</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FF9CAC;">true</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">#反向代理和S3默认支持</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">enabled</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FF9CAC;">false</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">#是否启用</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">endpoints-web-enabled</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FF9CAC;">false</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">#是否暴露web端口</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">region</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">shenzhen</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">#区域</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">access-key-id</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">Access-key-Id</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">#Access key Id 就像用户ID，可以唯一标识你的账户</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">access-key-secret</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">Access-key-Secret</span><span style="color:#A6ACCD;">  </span><span style="color:#676E95;font-style:italic;">#Access key Secret 是你账户的密码</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">bucket-name</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">fancy</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">#默认的存储桶名称</span></span></code></pre></div><h2 id="短信配置" tabindex="-1">短信配置 <a class="header-anchor" href="#短信配置" aria-label="Permalink to &quot;短信配置&quot;">​</a></h2><p><code>fancy-component</code> 组件服务加入以下配置：</p><div class="language-yaml"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F07178;">spring</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">jackieonway</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">sms</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#F07178;">sms-type</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">ali</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">#可以不填，默认是ali</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#F07178;">security-key</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">security-key</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;"># 短信的私钥</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#F07178;">appid</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">appid</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;"># 短信的应用id</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#F07178;">limit</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#F07178;">enable</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FF9CAC;">true</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;"># 允许限制 默认: false</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#F07178;">limit-time</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">60000</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;"># 一次请求限制1分钟 默认: 一分钟</span></span></code></pre></div>`,21),e=[o];function t(c,r,y,C,i,A){return a(),n("div",null,e)}const d=s(p,[["render",t]]);export{F as __pageData,d as default};
