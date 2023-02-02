# Form 表单组件

## 基础使用

<Demo-index>
::: slot source
<WMForm-demo1></WMForm-demo1>
:::

<<< @/docs/.vuepress/components/WMForm/demo1.vue

</Demo-index>

## 自定义表单项

<Demo-index>
::: slot source
<WMForm-demo2></WMForm-demo2>
:::

<<< @/docs/.vuepress/components/WMForm/demo2.vue

</Demo-index>

## 完整示例

<Demo-index>
::: slot source
<WMForm-demo3></WMForm-demo3>
:::

<<< @/docs/.vuepress/components/WMForm/demo3.vue

</Demo-index>

## Form Attributes

| 参数           | 说明         | 类型   | 默认值        |
| -------------- | ------------ | ------ | ------------- |
| value(v-model) | 表单数据对象 | object | {}            |
| option         | 表单配置     | object | {columns: []} |

## Form Option

`option 属性配置, 包含 element ui 原始属性 `

| 参数    | 说明     | 类型   | 默认值 |
| ------- | -------- | ------ | ------ |
| gutter  | 栅格间隔 | number | 0      |
| columns | 表单项   | array  | []     |

## Option columns

| 参数        | 说明                   | 类型   | 默认值 |
| ----------- | ---------------------- | ------ | ------ |
| prop        | 标签文本的内容属性名称 | string | ''     |
| label       | 标签文本的内容         | string | ''     |
| span        | 栅格占据的列数         | number | ''     |
| type        | 控件类型               | string | ''     |
| rules       | 校验规则               | array  | []     |
| fieldOption | 控件配置               | object | {}     |

## Columns fieldOption

`fieldOption 的配置包含当前控件类型的所有属性`

| 参数    | 说明                       | 类型  | 默认值 |
| ------- | -------------------------- | ----- | ------ |
| dicData | 数据字典值(下拉,单选,多选) | array | []     |
| data    | 数据字典值(下拉树)         | array | []     |
