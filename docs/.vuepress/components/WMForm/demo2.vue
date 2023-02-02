<template>
  <div>
    <WMForm ref="formRef" :option="formOption" v-model="ruleForm">
      <template #param3>
        <el-input v-model="ruleForm.param3" placeholder="请输入"></el-input>
      </template>
    </WMForm>
    <div class="form-fotter">
      <el-button @click="reset">重置</el-button>
      <el-button type="primary" @click="save">保存</el-button>
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
          param3: '',
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
            {
              prop: 'param3',
              label: '自定义',
              type: 'custom',
              rules: [{ required: true, message: '请输入', trigger: 'blur' }],
            },
          ],
        };
      },
    },
    methods: {
      reset() {
        this.$refs.formRef.$refs.wmForm.resetFields();
      },
      save() {
        this.$refs.formRef.$refs.wmForm.validate((valid) => {
          if (valid) {
          }
        });
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
