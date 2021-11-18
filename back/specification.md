---
sidebarDepth: 3
---

# 规范

::: info 介绍
项目遵从规范，约定。
:::

## 技术开发规范

### 一、命名规范

我自己非常注重搭建项目结构的起步过程，应用命名规范、模块的划分、目录（包）的命名，我觉得非常重要，如果做的足够好，别人导入项目后可能只需要10分钟就可以大概了解系统结构。

具体规范包括包命名、类的命名、接口命名、方法命名、变量命名、常量命名。

### 二、统一IDE代码模板

约定了IDEA/Eclipse IDE代码的统一模板，代码风格一定要统一，避免不同开发人员使用不同模板带来的差异化以及代码merge成本。使用IDEA的同学可以安装Eclipse Code
Formatter插件，和Eclipse统一代码模板。

### 三、Maven使用规范

所有二方库、三方库的版本统一定义到parent pom里，这样来所有业务应用工程统一继承parent pom里所指定的二方库、三方库的版本，统一框架与工具的版本(Spring、Apache
commons工具类、日志组件、JSON处理、数据库连接池等)，同时要求生产环境禁用SNAPSHOT版本。这样以来升级通用框架与工具的版本，只需要应用工程升级parent pom即可。

### 四、代码Commit规范

基于Angular Commit Message规范生成统一的ChangeLog，这样一来对于每次发布release tag非常清晰，Mac下都需要安装对应的插件，IDEA也有对应的插件，具体可以参考阮一峰老师的《Commit
message 和 Change log 编写指南》。代码的commit的规范对团队非常重要，清晰的commit信息生成的release tag，对于生产环境的故障回滚业非常关键，能够提供一些有价值的信息。

### 五、统一API规范

统一Rpc服务接口的返回值ApiResult,具体代码如下

success代表接口处理响应结果成功还是失败，code、message表示返回错误码和错误消息，module表示返回结果集，把ApiResult定义到serein-common顶层二方库，这样以来各个应用不需要来回转换返回结果。

Http Rest接口规范约定同ApiResult相差无几，需要额外关注一下加解密规范和签名规范、版本管理规范。

### 六、异常处理规范

异常处理不仅仅是狭义上遇到了Exception怎么去处理，还有各种业务逻辑遇到错误的时候我们怎么去处理。service服务层捕获的异常主要包括BusinessException(业务异常)、RetriableException (
可重试异常) 到 common-api，定义一个公共异常拦截器，对业务异常、重试异常进行统一处理，对于可重试的异常调用的服务接口需要保证其幂等性。

另外其他业务层有些特殊异常不需要拦截器统一处理，内部可以进行自我消化处理掉，根据场景对应的处理原则主要包括：

直接返回

抛出异常

重试处理

熔断处理

降级处理

这又涉及到了弹力设计的话题，我们的系统往往会对接各种依赖外部服务、Api，大部分服务都不会有SLA，即使有在大并发下我们也需要考虑外部服务不可用对自己的影响，会不会把自己拖死。我们总是希望：

尽可能以小的代价通过尝试让业务可以完成；

如果外部服务基本不可用，而我们又同步调用外部服务的话，我们需要进行自我保护直接熔断，否则在持续的并发的情况下自己就会垮了；

如果外部服务特别重要，我们往往会考虑引入多个同类型的服务，根据价格、服务标准做路由，在出现问题的时候自动降级。

推荐使用Netflix开源的hystrix容灾框架，主要解决当外部依赖出现故障时拖垮业务系统、甚至引起雪崩的问题。目前我团队也在使用，能够很好的解决异常熔断、超时熔断、基于并发数限流熔断的降级处理。

### 七、分支开发规范

早期的时候源码的版本管理基于 svn，后来逐步切换到 git，分支如何管理每一个公司（在Gitflow的基础上）都会略有不同。

针对分支开发规范，指定如下标准：

分支的定义（master、develop、release、hotfix、feature）

分支命名规范

checkout、merge request流程

提测流程

上线流程

Hotfix流程

虽然这个和代码质量和架构无关，按照这一套标准执行下来，能够给整个研发团队带领很大的便利：

减少甚至杜绝代码管理导致的线上事故；

提高开发和测试的工作效率，人多也乱；

减少甚至杜绝代码管理导致的线上事故；

方便运维处理发布和回滚；

让项目的开发可以灵活适应多变的需求，多人协同开发。

### 八、统一日志规范

日志是产品必不可少的一个功能，具备可回溯性、能够抓取问题现场信息是其独一无二的优点，尤其在生产系统上问题定位等方面具有不可替代的作用。

这里着重强调一下针对异常的日志规范：

WARN和ERROR的选择需要好好考虑，WARN一般我倾向于记录可自恢复但值得关注的错误，ERROR代表了不能自己恢复的错误。对于业务处理遇到问题用ERROR不合理，对于catch到了异常也不是全用ERROR。

记录哪些信息，最好打印一定的上下文（链路TraceId、用户Id、订单Id、外部传来的关键数据）而不仅仅是打印线程栈。

记录了上下问信息，是否要考虑日志脱敏问题？可以在框架层面实现，比如自定义实现logback的ClassicConverter。

正确合理的使用日志，能够指引开发人员快速查找错误、定位问题，因此约定了一套日志使用标准规范，现在可以更多的参考《阿里经济体开发规约——日志规约》。

### 九、统一MYSQL开发规范

表的设计和 Api 的定义类似，属于那种开头没有开好，以后改变需要花10x代价的，我知道，一开始在业务不明确的情况下，设计出良好的一步到位的表结构很困难，但是至少我们可以做的是有一个好的标准。

### 十、统一工具与框架

对开发过程中所用到的公共组件进行了统一抽象与封装，包括 dao 层框架jpa、cache 组件 redis、guava组件、hutool-all (公共工具)，
同时抽取出全局唯一ID、分布式锁、幂等等公共组件，把以上公共组件进行集成到各个应用，进行统一升级、维护，这样以来方便大家将更多的精力集中到业务开发上。

## RESTful API 规范

RESTful 是目前最流行的 API 设计规范，用于 Web 数据接口的设计。

它的大原则容易把握，但是细节不容易做对。本文总结 RESTful 的设计细节，介绍如何设计出易于理解和使用的 API。

### 一、协议

API与客户端用户的通信协议，总是使用HTTPS协议，以确保交互数据的传输安全。

### 二、域名

应该尽量将API部署在专用域名之下。

> https://api.example.com

如果确定API很简单，不会有进一步扩展，可以考虑放在主域名下。

> https://example.org/api/

### 三、版本

应该将API的版本号放入URL。

> https://api.example.com/v1/

另一种做法是，将版本号放在HTTP头信息中，但不如放入URL方便和直观。Github采用这种做法：

> https://api.example.com/v{n}

1、应该将API的版本号放入URL。

2、采用多版本并存，增量发布的方式。

3、n代表版本号，分为整型和浮点型

整型： 大功能版本， 如v1、v2、v3 ... <br>
浮点型： 补充功能版本， 如v1.1、v1.2、v2.1、v2.2 ...

4、对于一个 API 或服务，应在生产中最多保留 3 个最详细的版本 <br>

### 四、路径

路径又称"终点"（end point），表示API的具体网址。

1、在RESTful架构中，每个网址代表一种资源(resource),所以网址中不能有动词，只能有名词。 【所用的名词往往与数据库的表格名对应】

2、数据库中的表一般都是同种记录的"集合"(collection),所以API中的名词也应该使用复数。

例子:
> https://api.example.com/v1/products <br>
https://api.example.com/v1/users <br>
https://api.example.com/v1/employees <br>

### 五、请求方式

对于资源的具体操作类型，由HTTP动词表示。

有些客户端只能使用GET和POST这两种方法。服务器必须接受POST模拟其他三个方法（PUT、PATCH、DELETE）。 这时，客户端发出的 HTTP
请求，要加上X-HTTP-Method-Override属性，告诉服务器应该使用哪一个动词，覆盖POST方法。

> POST /api/Person/4 HTTP/1.1 <br>
X-HTTP-Method-Override: PUT

上面代码中，X-HTTP-Method-Override指定本次请求的方法是PUT，而不是POST。

常用的HTTP动词有下面五个（括号里是对应的SQL命令）。

> GET（SELECT）：从服务器取出资源（一项或多项）。 <br>
POST（CREATE）：在服务器新建一个资源。 <br>
PUT（UPDATE）：在服务器更新资源（客户端提供改变后的完整资源）。 <br>
DELETE（DELETE）：从服务器删除资源。 <br>

例子：
> GET /v1/products 获取所有商品 <br>
GET /v1/products/ID 获取某个指定商品的信息 <br>
POST /v1/products 新建一个商品 <br>
PUT /v1/products/ID 更新某个指定商品的信息 <br>
DELETE /v1/products/ID 删除某个商品,更合理的设计详见【9、非RESTful API的需求】<br>
GET /v1/products/ID/purchases 列出某个指定商品的所有投资者 <br>
GET /v1/products/ID/purchases/ID 获取某个指定商品的指定投资者信息 <br>


复数 URL 既然 URL 是名词，那么应该使用复数，还是单数？ 这没有统一的规定，但是常见的操作是读取一个集合，比如GET /products（读取所有动物园），这里明显应该是复数。 为了统一起见，建议都使用复数 URL，比如GET
/products/2要好于GET /zoo/2。

宾语就是 API 的 URL，是 HTTP 动词作用的对象。它应该是名词，不能是动词。比如，/products URL 就是正确的，而下面的 URL 不是名词，所以都是错误的。
> /getAllProducts
> /getProducts

<br>
避免多级 URL
常见的情况是，资源需要多级分类，因此很容易写出多级的 URL，比如获取某个作者的某一类商品。

> GET /products/12/brand/2

这种 URL 不利于扩展，语义也不明确，往往要想一会，才能明白含义。

更好的做法是，除了第一级，其他级别都用查询字符串表达。

> GET /products/12?brand=2

下面是另一个例子，查询已发布的商品。你可能会设计成下面的 URL。

> GET /products/purchases

查询字符串的写法明显更好。


> GET /products?purchases=true

```json
HTTP/1.1 200 OK
Content-Type: application/json

{
  "code": "-1",
  "message": "failure",
  "data": {
    "error": "Expected at least two items in list."
  }
}
```

上面代码中，解析数据体以后，才能得知操作失败。

这张做法实际上取消了状态码，这是完全不可取的。正确的做法是，状态码反映发生的错误，具体的错误信息放在数据体里面返回。下面是一个例子。

```json
HTTP/1.1 400 Bad Request
Content-Type: application/json

{
  "code": "400",
  "message": "failure",
  "detail": {
     "surname": "This field is required."
  }
}
```

### 六、过滤信息

若记录数量很多，服务器不可能返回全部记录给用户。 API应该提供分页参数及其它筛选参数，过滤返回结果。

下面是一些常见的参数。
> /v1/products?page=1&pageSize=20 指定第几页，以及每页的记录数。 <br>
/v1/products?sortBy=name&order=asc 指定返回结果按照哪个属性排序，以及排序顺序。

### 七、传入参数

传入参数分为4种类型：

1、cookie： 一般用于OAuth认证

2、request header： 一般用于OAuth认证

3、请求body数据：

4、地址栏参数：

1）restful 地址栏参数 /v1/products/ID ID为产品编号，获取产品编号为ID的信息 <br>
2）get方式的查询字段 见【六、过滤信息】<br>

### 八、响应参数

 ```json
  response：
 ----------------------------------------
 {
    code: 200,               // 详见【code】
    data: {
       ...                   // 其它参数，如 total【总记录数】等
    },
    message: '成功',          // 存放响应信息提示,显示给客户端用户【须语义化中文提示】
 }
 ----------------------------------------
 【status】:
            200: OK       400: Bad Request        500：Internal Server Error       
                          401：Unauthorized
                          403：Forbidden
                          404：Not Found
 
 【code】:
          1: 获取数据成功 | 操作成功             0：获取数据失败 | 操作失败
```

### 九、状态码

服务器向用户返回的状态码和提示信息，常见的有以下一些（方括号中是该状态码对应的HTTP动词）。

> 200 OK - [GET]：服务器成功返回用户请求的数据，该操作是幂等的（Idempotent）。 <br>
201 CREATED - [POST/PUT/PATCH]：用户新建或修改数据成功。 <br>
202 Accepted - [*]：表示一个请求已经进入后台排队（异步任务） <br>
204 NO CONTENT - [DELETE]：用户删除数据成功。 <br>
400 INVALID REQUEST - [POST/PUT/PATCH]：用户发出的请求有错误，服务器没有进行新建或修改数据的操作，该操作是幂等的。 <br>
401 Unauthorized - [*]：表示用户没有权限（令牌、用户名、密码错误）。 <br>
403 Forbidden - [*] 表示用户得到授权（与401错误相对），但是访问是被禁止的。 <br>
404 NOT FOUND - [*]：用户发出的请求针对的是不存在的记录，服务器没有进行操作，该操作是幂等的。 <br>
406 Not Acceptable - [GET]：用户请求的格式不可得（比如用户请求JSON格式，但是只有XML格式）。 <br>
410 Gone -[GET]：用户请求的资源被永久删除，且不会再得到的。 <br>
422 Unprocesable entity - [POST/PUT/PATCH] 当创建一个对象时，发生一个验证错误。 <br>
500 INTERNAL SERVER ERROR - [*]：服务器发生错误，用户将无法判断发出的请求是否成功。 <br>

状态码的完全列表参见[这里](https://www.w3.org/使用HTTPS协议。Protocols/rfc2616/rfc2616-sec10.html)。

### 十、错误处理

如果状态码是4xx，就应该向用户返回出错信息。一般来说，返回的信息中将error作为键名，出错信息作为键值即可。

```json
{
    error: "Invalid API key"
}
```

不要返回纯本文 API 返回的数据格式，不应该是纯文本，而应该是一个 JSON 对象，因为这样才能返回标准的结构化数据。所以，服务器回应的 HTTP 头的Content-Type属性要设为application/json。

客户端请求时，也要明确告诉服务器，可以接受 JSON 格式，即请求的 HTTP 头的ACCEPT属性也要设成application/json。下面是一个例子。


> GET /orders/2 HTTP/1.1
> Accept: application/json

发生错误时，不要返回 200 状态码 有一种不恰当的做法是，即使发生错误，也返回200状态码，把错误信息放在数据体里面，就像下面这样。

### 十一、返回结果（Return）

针对不同操作，服务器向用户返回的结果应该符合以下规范。

GET /collection：返回资源对象的列表（数组） GET /collection/resource：返回单个资源对象 POST /collection：返回新生成的资源对象 PUT
/collection/resource：返回完整的资源对象 PATCH /collection/resource：返回完整的资源对象 DELETE /collection/resource：返回一个空文档

### 十二、Hypermedia API

RESTful API最好做到Hypermedia，即返回结果中提供链接，连向其他API方法，使得用户不查文档，也知道下一步应该做什么。

比如，当用户向api.example.com的根目录发出请求，会得到这样一个文档。

```json
{
  "link": {
    "rel": "collection https://www.example.com/products",
    "href": "https://api.example.com/products",
    "title": "List of products",
    "type": "application/vnd.yourformat+json"
  }
}
```

上面代码表示，文档中有一个link属性，用户读取这个属性就知道下一步该调用什么API了。rel表示这个API与当前网址的关系（collection关系，并给出该collection的网址），href表示API的路径，title表示API的标题，type表示返回类型。

Hypermedia API的设计被称为HATEOAS。Github的API就是这种设计，访问api.github.com会得到一个所有可用API的网址列表。

```json
{
  "current_user_url": "https://api.github.com/user",
  "authorizations_url": "https://api.github.com/authorizations",
  // ...
}
```

从上面可以看到，如果想获取当前用户的信息，应该去访问api.github.com/user，然后就得到了下面结果。

```json
{
  "message": "Requires authentication",
  "documentation_url": "https://developer.github.com/v3"
}
```

上面代码表示，服务器给出了提示信息，以及文档的网址。

### 十三、非RESTful API的需求

1、实际业务开展过程中，可能会出现各种的api不是简单的restful 规范能实现的。 2、需要有一些api突破restful规范原则。 3、特别是移动互联网的api设计，更需要有一些特定的api来优化数据请求的交互。

1)、删除单个 | 批量删除 ： DELETE /v1/product body参数{ids：[]} 2)、页面级API           :  把当前页面中需要用到的所有数据通过一个接口一次性返回全部数据

### 十四、一致性原则

1、前端需要哪些字段，API接口应该返回哪些字段，字段不多也不少。

2、更新功能尽量做到：初次返回的原始数据参数与提交更新的数据参数结构一致。

3、时间参数，尽量以一致格式的字符串传递， 如：

'2019-01' |      '2019/01' <br>
'2019-01-01' |      '2019/01/01' <br>
'2019-01-01 12:12:12' |      '2019/01/01 12:12:12' <br>

4、其它参数【待更新】

### 十五、接口文档

1、尽量采用自动化接口文档，可以做到在线测试，同步更新。

2、应包含：接口BASE地址、接口版本、接口模块分类等。

3、每个接口应包含：

接口地址：不包含接口BASE地址。 <br>
请求方式: get、post、put、delete等。 <br>
请求参数：数据格式【默认JSON、可选form data】、数据类型、是否必填、中文描述。 <br>
响应参数：类型、中文描述。 <br>

### 十六、接口规范示例

RESTFUL URL命名原则

URL命名通常有三种，驼峰命名法(serverAddress)，蛇形命名法(server_address)，脊柱命名法(server-address)
。由于URL是大小写敏感的，如果用驼峰命名在输入的时候就要求区分大小写，一个是增加输入难度，另外也容易输错，报404。

### 1. URL命名原则

1、URL请求采用小写字母，数字，部分特殊符号（非制表符）组成。 2、URL请求中不采用大小写混合的驼峰命名方式，尽量采用全小写单词，如果需要连接多个单词，则采用连接符“_”连接单词

### 2. URL分级

第一级Pattern为模块,比如用户管理/users, 网格化：/grid 第二级Pattern为资源分类或者功能请求，优先采用资源分类

### 3. CRUD请求定义规范（RESTful）

如果为资源分类，则按照RESTful的方式定义第三级Pattern， RESTful规范中，资源必须采用资源的名词复数定义。

| 名称 | 方法 | 说明 |
| ------------- |:-------------| :------------- |
| /users         | GET      | 获取成员列表  |
| /users/120         | GET      | 获取单个成员  |
| /users         | POST      | 创建成员  |
| /users/120         | PUT      | 修改成员  |
| /users         | PUT      | 批量修改  |
| /users/120         | PATCH      | 修改成员的部分属性  |
| /users/120         | DELETE      | 删除成员  |

### 4. 复杂查询请求定义规范（RESTful）

| 名称 | 方法 | 说明 |
| ------------- |:-------------| :------------- |
| /users?state=open         | GET      | 过滤  |
| /users?sort=-priority         | GET      | 排序  |
| /users?sort=-priority,created_at         | GET      | 排序  |
| /users?sort=-updated_at	GET         | GET      | 排序  |
| /users?state=closed&sort=-updated_at         | GET      | 过滤+排序  |
| /users?q=return&state=open&sort=-priority,created_at         | GET      | 搜索+过滤+排序  |
| /users/recently_closed         | GET      | 一般数据请求  |
| /users?fields=id,subject,customer_name,updated_at&state=open&sort=-updated_at         | GET      | 指定返回列  |
| /users?offset=10&limit=5         | GET      | 分页  |

### 5. 特定请求

- 资源的特定请求 采用在资源下面定义特定的请求pattern，见如下示例 /users/recently_closed 备注：此情况下需要区分/users/{id}，要避免URL无法区分，通用的配置请求要具备优先适配能力。
- 非特定资源类 请求URL采用如下形式: /users/buy_tickets
- 页面View请求URL规范 页面URL仅定义在第二级，例如/users/xxx，xxx为users模块的视图名称名称。

## Git Flow工作流

### 一、简介

Git Flow定义了一个项目发布的分支模型，为管理具有预定发布周期的大型项目提供了一个健壮的框架。

### 二、安装

#### a、window安装

- 安装Git Flow在git bash中输入

```shell
$ git clone --recursive git://github.com/nvie/gitflow.git
```

- 进入gitflow\contrib路径

```shell
$ msysgit-install.cmd d:\git（git的安装目录）
```

- 验证执行git flow

```shell
$ git flow version
```

#### b、mac安装

- 安装

```shell
$ brew install git-flow-avh
```

- 查看版本

```shell
$ git flow version
```

### 二、流程解析

> Master 这个分支最近发布到生产环境的代码，最近发布的Release， 这个分支只能从其他分支合并，不能在这个分支直接修改

> Develop 这个分支是我们是我们的主开发分支，包含所有要发布到下一个Release的代码，这个主要合并与其他分支，比如Feature分支

> Feature 这个分支主要是用来开发一个新的功能，一旦开发完成，我们合并回Develop分支进入下一个Release

> Release 当你需要一个发布一个新Release的时候，我们基于Develop分支创建一个Release分支，完成Release后，我们合并到Master和Develop分支

> Hotfix 当我们在Production发现新的Bug时候，我们需要创建一个Hotfix, 完成Hotfix后，我们合并回Master和Develop分支，所以Hotfix的改动会进入下一个Release

### 三、Git Flow如何工作

#### a、初始分支

所有在Master分支上的Commit应该Tag

![初始分支](/back/images/specification-master.png)

#### b、Feature 分支

分支名 feature

Feature分支做完后，必须合并回Develop分支, 合并完分支后一般会删点这个Feature分支，但是我们也可以保留

![初始分支](/back/images/specification-feature.png)

#### c、Release分支

分支名 release

Release分支基于Develop分支创建，打完Release分之后，我们可以在这个Release分支上测试，修改Bug等。同时，其它开发人员可以基于开发新的Feature (
记住：一旦打了Release分支之后不要从Develop分支上合并新的改动到Release分支)

发布Release分支时，合并Release到Master和Develop， 同时在Master分支上打个Tag记住Release版本号，然后可以删除Release分支了。

![初始分支](/back/images/specification-release.png)

#### d、维护分支 Hotfix

hotfix分支基于Master分支创建，开发完后需要合并回Master和Develop分支，同时在Master上打一个tag

![初始分支](/back/images/specification-hotfix.png)

### 四、Git Flow代码示例

#### a. 创建develop分支

```shell
git branch develop
git push -u origin develop  
```

#### b. 开始新Feature开发

```shell
git checkout -b some-feature develop
# Optionally, push branch to origin:
git push -u origin some-feature    

# 做一些改动    
git status
git add some-file
git commit   
```

#### c. 完成Feature

```shell
git pull origin develop
git checkout develop
git merge --no-ff some-feature
git push origin develop

git branch -d some-feature

# If you pushed branch to origin:
git push origin --delete some-feature   
```

#### d. 开始Relase

```shell
git checkout -b release-0.1.0 develop

# Optional: Bump version number, commit
# Prepare release, commit
```

#### e. 完成Release

```shell
git checkout master
git merge --no-ff release-0.1.0
git push

git checkout develop
git merge --no-ff release-0.1.0
git push

git branch -d release-0.1.0

# If you pushed branch to origin:
git push origin --delete release-0.1.0   


git tag -a v0.1.0 master
git push --tags
## f. 开始Hotfix

git checkout -b hotfix-0.1.1 master  
```

#### g. 完成Hotfix

```shell
git checkout master
git merge --no-ff hotfix-0.1.1
git push


git checkout develop
git merge --no-ff hotfix-0.1.1
git push

git branch -d hotfix-0.1.1

git tag -a v0.1.1 master
git push --tags
```

### 五、开发工作流程

#### a、新功能工作流程

新功能开发(登录功能)中，各角色的工作流程

##### 前置阶段(新功能启动)

- 开发组长 基于master主干创建一个develop分支

> 现有主干分支: master、develop

##### 开发阶段(开始开发)

- 程序猿 基于develop分支创建一个feature_login(语义化)分支 在feature_login分支上开发新功能 测试新功能完成以后，在git上发起Pull request把代码合并到到develop分支上(
  千万不要提交合并到master)

- 开发组长 确认代码没问题，通过该合并请求

> 现有主干分支: master、develop、feature_login

##### 测试阶段(开发完毕)

- 开发组长 基于develop分支创建一个分支名为release-1.0.0的预发布版本
- 测试 对release-1.0.0分支的代码进行测试 测试通过在git发起Pull request把release-1.0.0代码合并到到master分支上

> 现有主干分支: master、develop、feature_login、release-1.0.0

##### 发布阶段(测试通过)

- 开发组长 基于master分支创建一个里程碑版本(tag)名为1.0.0-Release 删除完成使命的其他分支:feature_login、release-1.0.0

> 现有主干分支: master、develop、1.0.0-Release(tag)

#### b、线上bug时工作流程

线上代码出现bug时，各角色的工作流程

##### 前置阶段(提交bug)

- 用户或者测试 基于1.0.0-Release里程碑版本在git上新建一个issue

> 现有主干分支: master、develop、1.0.0-Release(tag)

##### 修复阶段(开始修复bug)

- 程序猿 基于1.0.0-Releasetag创建一个hotfix_0001(该issue序号)分支 在hotfix_0001分支上修复bug 测试代码没问题，在git上发起Pull request把代码合并到到master主干上

- 开发组长 确认代码没问题，通过该合并请求

> 现有主干分支: master、develop、1.0.0-Release(tag)、hotfix_0001

##### 测试阶段(bug修复完毕)

- 测试 对master分支的代码进行测试

> 现有主干分支: master、develop、1.0.0-Release(tag)、hotfix_0001

#### 发布阶段(测试通过)

- 开发组长 基于master分支创建一个里程碑修复版本(tag)名为1.0.1-Release 删除完成使命的其他分支:hotfix_0001

> 现有主干分支: master、develop、1.0.0-Release(tag)、1.0.1-Release(tag)

### 六、Git 提交规范

```lua
feat 增加新功能
fix 修复问题/BUG
style 代码风格相关无影响运行结果的
perf 优化/性能提升
refactor 重构
revert 撤销修改
test 测试相关
docs 文档/注释
chore 依赖更新/脚手架配置修改等
workflow 工作流改进
ci 持续集成
mod 不确定分类的修改
wip 开发中
types 类型修改
```