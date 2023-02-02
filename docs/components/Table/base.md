# Table 表格

## 基础使用

<Demo-index>
::: slot source
<WMTable-demo1></WMTable-demo1>
:::

<<< @/docs/.vuepress/components/WMTable/demo1.vue

</Demo-index>

## 分页使用

<Demo-index>
::: slot source
<WMTable-demo2></WMTable-demo2>
:::

<<< @/docs/.vuepress/components/WMTable/demo2.vue

</Demo-index>

## 懒加载使用

<Demo-index>
::: slot source
<WMTable-demo3></WMTable-demo3>
:::

<<< @/docs/.vuepress/components/WMTable/demo3.vue

</Demo-index>

## 自定义表头

<Demo-index>
::: slot source
<WMTable-demo4></WMTable-demo4>
:::

<<< @/docs/.vuepress/components/WMTable/demo4.vue

</Demo-index>

## 自定义列

<Demo-index>
::: slot source
<WMTable-demo5></WMTable-demo5>
:::

<<< @/docs/.vuepress/components/WMTable/demo5.vue

</Demo-index>

## 行拖拽

<Demo-index>
::: slot source
<WMTable-demo6></WMTable-demo6>
:::

<<< @/docs/.vuepress/components/WMTable/demo6.vue

</Demo-index>

## Table Attributes

| 参数             | 说明           | 类型    | 默认值 |
| ---------------- | -------------- | ------- | ------ |
| data             | 显示的数据     | array   | []     |
| columns          | 表头信息       | array   | []     |
| isLoad           | 是否立即请求   | boolean | true   |
| pagination       | 是否展示分页   | boolean | true   |
| paginationOption | 分页选项       | object  | {}     |
| isEmpty          | 是否显示缺省图 | boolean | true   |

## Table Events

| 事件名 | 说明         | 参数 |
| ------ | ------------ | ---- |
| load   | 请求表格数据 | -    |

## Table-column Scoped Slot

| name         | 说明                                         |
| ------------ | -------------------------------------------- |
| `prop`Header | 自定义表头内容, prop 对应的是表头信息的 prop |

## DragTable 

| 参数    | 说明             | 类型   | 默认值 |
| ------- | ---------------- | ------ | ------ |
| handle  | 定义拖拽元素     | string | ''     |
| animate | 拖拽动画过渡时间 | number | 100ms  |

| 事件名 | 说明         | 参数                                       |
| ------ | ------------ | ------------------------------------------ |
| drag   | 拖拽开始事件 | -                                          |
| drop   | 拖拽结束事件 | {target: 当前选中节点, list: 完成后的数据列表} |

## 其他属性

[element-ui](https://element.eleme.io/#/zh-CN/component/table)
