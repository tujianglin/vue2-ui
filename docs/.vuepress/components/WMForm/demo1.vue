<template>
  <div>
    <WMForm ref="formRef" :option="formOption" v-model="ruleForm"></WMForm>
    <div class="form-fotter">
      <el-button @click="reset">重置</el-button>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        ruleForm: {
          param1: '',
          param2: '',
        },
      };
    },
    computed: {
      formOption() {
        return {
          labelWidth: '130px',
          size: 'mini',
          columns: [
            {
              prop: 'param1',
              label: '输入框',
              type: 'input',
              fieldOption: {
                placeholder: '请输入',
              },
            },
            {
              prop: 'param2',
              label: '文本框',
              type: 'input',
              fieldOption: {
                placeholder: '请输入',
                type: 'textarea',
              },
            },
          ],
        };
      },
    },
    methods: {
      reset() {
        this.$refs.formRef.$refs.wmForm.resetFields();
      },
    },
  };
</script>

<style>
  .form-fotter {
    display: flex;
    justify-content: flex-end;
  }
</style>
