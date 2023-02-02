<template>
  <div class="box">
    <WMForm ref="formRef" :option="formOption" v-model="ruleForm"></WMForm>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        ruleForm: {
          param1: '麻子',
          param2: '120岁',
          param3: '哈哈哈哈哈哈',
        },
      };
    },
    computed: {
      formOption() {
        return {
          labelWidth: '40px',
          size: 'mini',
          columns: [
            {
              prop: 'param1',
              label: '姓名',
              type: 'text',
              span: 8,
            },
            {
              prop: 'param2',
              label: '年龄',
              type: 'text',
              span: 8,
            },
            {
              prop: 'param3',
              label: '地址',
              type: 'text',
              span: 8,
            },
            {
              prop: 'param1',
              label: '姓名',
              type: 'text',
              span: 8,
            },
            {
              prop: 'param2',
              label: '年龄',
              type: 'text',
              span: 8,
            },
            {
              prop: 'param3',
              label: '地址',
              type: 'text',
              span: 8,
            },
          ],
        };
      },
    },
  };
</script>

<style lang="scss" scoped>
.box {
  background: #ccc;
  padding: 8px;
}
</style>
