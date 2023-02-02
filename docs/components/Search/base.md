# Seach 查询

## 基础使用

<Demo-index>
::: slot source
<WMSearch-demo1></WMSearch-demo1>
:::

<<< @/docs/.vuepress/components/WMSearch/demo1.vue

</Demo-index>

## 查询联动

<Demo-index>
::: slot source
<WMSearch-demo2></WMSearch-demo2>
:::

<<< @/docs/.vuepress/components/WMSearch/demo2.vue

</Demo-index>

## 自定义查询项

<Demo-index>
::: slot source
<WMSearch-demo3></WMSearch-demo3>
:::

<<< @/docs/.vuepress/components/WMSearch/demo3.vue

</Demo-index>

## Search Attributes

| 参数   | 说明     | 类型   | 默认值 |
| ------ | -------- | ------ | ------ |
| option | 表单配置 | object | {}     |

## Search Events

| 事件名 | 说明             | 参数 |
| ------ | ---------------- | ---- |
| update | 动态获取查询对象 | {}   |

## Search Option

`option 属性配置, 包含 element ui 原始属性 `

| 参数    | 说明   | 类型  | 默认值 |
| ------- | ------ | ----- | ------ |
| columns | 表单项 | array | []     |

## Option columns

| 参数         | 说明                   | 类型            | 默认值 |
| ------------ | ---------------------- | --------------- | ------ |
| prop         | 标签文本的内容属性名称 | string          | ''     |
| label        | 标签文本的内容         | string          | ''     |
| type         | 控件类型               | string          | ''     |
| dataType     | 默认值类型             | [array, number] | ''     |
| defaultValue | 默认值                 | any             | ''     |
| fieldOption  | 控件配置               | object          | {}     |

## Columns fieldOption

`fieldOption 的配置包含当前控件类型的所有属性`

| 参数    | 说明                       | 类型   | 默认值 |
| ------- | -------------------------- | ------ | ------ |
| dicData | 数据字典值(下拉,单选,多选) | array  | []     |
| data    | 数据字典值(下拉树)         | array  | []     |
| on      | 控件事件                   | object | {}     |
