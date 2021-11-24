---
sidebarDepth: 3
---

# 权限

## 菜单配置
 
1. 系统设置-菜单管理-新增目录,如图:

![img.png](/front/images/advanced-001.png)

 - **目录级的路由地址格式：/+目录名（项目文件目录名保持一致）**

2. 系统设置-菜单管理-新增菜单,如图:

![img.png](/front/images/advanced-002.png)

 - **菜单级的路由地址格式：菜单名（项目文件菜单名保持一致）**
 - **组件路径格式：/+目录名+菜单名+index**

 ## 按钮配置
 
 按钮配置统一如图: 

 ![img.png](/front/images/advanced-004.png)

 - **按钮权限标识格式：目录名:菜单名:find/save/update/delete/import/export/print**

## 角色权限配置

 系统设置-角色管理-菜单分配

 ![img.png](/front/images/advanced-003.png)

 **清空缓存 重新登录**

## 后台动态获取

**实现原理:** 是通过接口动态生成路由表，且遵循一定的数据结构返回。前端根据需要处理该数据为可识别的结构，再通过 `router.addRoutes` 添加到路由实例，实现权限的动态生成。

## 动态更换菜单

```ts
import { usePermission } from '/@/hooks/web/usePermission';
import { RoleEnum } from '/@/enums/roleEnum';

export default defineComponent({
  setup() {
    let routeList: AppRouteRecordRaw[] = [];
    // 动态菜单 缓存取
    routeList = (Persistent.getLocal(USER_INFO_KEY)?.resources ??
      []) as AppRouteRecordRaw[];
  },
});
```

## 细粒度权限

**函数方式**

[usePermission](https://github.com/anncwb/vue-vben-admin/tree/main/src/hooks/web/usePermission.ts) 还提供了按钮级别的权限控制。

```vue
<template>
  <a-button v-if="hasPermission(['20000', '2000010'])" color="error" class="mx-4">
    拥有[20000,2000010]code可见
  </a-button>
</template>
<script lang="ts">
  import { usePermission } from '/@/hooks/web/usePermission';
  import { RoleEnum } from '/@/enums/roleEnum';

  export default defineComponent({
    setup() {
      const { hasPermission } = usePermission();
      return { hasPermission };
    },
  });
</script>
```

### 如何初始化 code

通常，如需做按钮级别权限，后台会提供相应的 code，或者类型的判断标识。这些编码只需要在登录后获取一次即可。

```ts
import { useUserStore } from './user';

const userStore = useUserStore();
const codeList = userStore.getUserInfo?.permissions;
this.setPermCodeList(codeList);

setPermCodeList(codeList: string[]) {
  this.permCodeList = codeList;
},
```

## 代码生成

开发运维-代码生成-配置 (**找到对应的表名**)

- 生成配置,如图:

  ![img.png](/front/images/advanced-005.png)

- 字段配置,如图:

  ![img.png](/front/images/advanced-006.png)

 列表只与列表的表格列数据显示有关; 表单、必填、表单类型与弹窗的表单字段有关; 查看弹窗的字段与表单列的配置是否显示同步。

 - 配置完成可预览或下载查看源码并应用到项目中

  **代码生成只提供基础的代码模版,包含: 列表表格,弹框,数据定义,数据类型定义,多语言,api 文件; 可根据需求自行修改生成的代码模版。**
    



