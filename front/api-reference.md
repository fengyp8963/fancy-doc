---
sidebarDepth: 3
---
## 自定义组件

### 导入导出打印功能组件

将组件导入到要使用的文件中

```md
<script setup >
  import IepButtonGroups from '/@/views/components/IepButtonGroups.vue';
</script>

# 使用组件

<IepButtonGroups :actionParams="actionParams" />

``` 

参数注解如图:

![img.png](/front/images/api-reference-001.png)

### 树组件

将组件导入到要使用的文件中

```md
<script setup >
  import { reactive } from 'vue';
  import TreeView from '../../components/TreeView.vue';
</script>

# 使用组件

 <TreeView class="w-1/4 xl:w-1/5" @select="" :treeMsg="treeMsg" />

 # 参数定义

 const treeMsg = reactive({
    name: '名称', 
    requestApi: 'api接口路径', 
 });

```

