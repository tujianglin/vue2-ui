<template>
  <div>
    <WMForm ref="formRef" :option="formOption" v-model="ruleForm"></WMForm>
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
          param3: 1,
          param4: [],
          param5: 0,
          param6: '',
          param7: '',
          param8: false,
          param9: '',
          param10: '',
          param11: '',
          param12: [],
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
              rules: [{ required: true, message: '请输入', trigger: 'blur' }],
              span: 12,
              fieldOption: {
                placeholder: '请输入',
              },
            },
            {
              prop: 'param2',
              label: '文本框',
              type: 'input',
              rules: [{ required: true, message: '请输入', trigger: 'blur' }],
              span: 12,
              fieldOption: {
                placeholder: '请输入',
                type: 'textarea',
              },
            },
            {
              prop: 'param3',
              label: '单选',
              type: 'radio',
              rules: [{ required: true, message: '请选择', trigger: 'change' }],
              span: 12,
              fieldOption: {
                dicData: [
                  {
                    label: '是',
                    value: 1,
                  },
                  {
                    label: '否',
                    value: 0,
                  },
                ],
              },
            },
            {
              prop: 'param4',
              label: '多选',
              type: 'checkbox',
              rules: [{ required: true, message: '请选择', trigger: 'change' }],
              span: 12,
              fieldOption: {
                dicData: [
                  {
                    label: '苏州',
                    value: '1',
                  },
                  {
                    label: '无锡',
                    value: '2',
                  },
                  {
                    label: '常州',
                    value: '3',
                  },
                ],
              },
            },
            {
              prop: 'param5',
              label: '计数器',
              type: 'input-number',
              rules: [{ required: true, message: '请输入', trigger: ['change', 'blur'] }],
              span: 12,
            },
            {
              prop: 'param6',
              label: '选择器',
              type: 'select',
              rules: [{ required: true, message: '请选择', trigger: 'change' }],
              span: 12,
              fieldOption: {
                dicData: [
                  {
                    label: '是',
                    value: 1,
                  },
                  {
                    label: '否',
                    value: 0,
                  },
                ],
              },
            },
            {
              prop: 'param7',
              label: '级联选择器',
              type: 'cascader',
              span: 12,
              rules: [{ required: true, message: '请选择', trigger: 'change' }],
              fieldOption: {
                options: [
                  {
                    value: 'zhinan',
                    label: '指南',
                    children: [
                      {
                        value: 'shejiyuanze',
                        label: '设计原则',
                        children: [
                          {
                            value: 'yizhi',
                            label: '一致',
                          },
                          {
                            value: 'fankui',
                            label: '反馈',
                          },
                        ],
                      },
                      {
                        value: 'daohang',
                        label: '导航',
                        children: [
                          {
                            value: 'cexiangdaohang',
                            label: '侧向导航',
                          },
                          {
                            value: 'dingbudaohang',
                            label: '顶部导航',
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
            },
            {
              prop: 'param8',
              label: '开关',
              type: 'switch',
              span: 12,
              rules: [{ required: true, message: '请选择', trigger: 'change' }],
            },
            {
              prop: 'param9',
              label: '时间选择器',
              type: 'time-picker',
              span: 12,
              rules: [{ required: true, message: '请选择', trigger: 'change' }],
              fieldOption: {
                'is-range': true,
                'range-separator': '至',
                'start-placeholder': '开始时间',
                'end-placeholder': '结束时间',
              },
            },
            {
              prop: 'param10',
              label: '日期选择器',
              type: 'date-picker',
              span: 12,
              rules: [{ required: true, message: '请选择', trigger: 'change' }],
              fieldOption: {
                type: 'daterange',
                'range-separator': '至',
                'start-placeholder': '开始时间',
                'end-placeholder': '结束时间',
              },
            },
            {
              prop: 'param11',
              label: '日期时间选择器',
              type: 'date-picker',
              span: 12,
              rules: [{ required: true, message: '请选择', trigger: 'change' }],
              fieldOption: {
                type: 'datetimerange',
                'range-separator': '至',
                'start-placeholder': '开始时间',
                'end-placeholder': '结束时间',
              },
            },
            {
              prop: 'param12',
              label: '下拉树',
              type: 'treeSelect',
              span: 12,
              rules: [{ required: true, message: '请选择', trigger: 'change' }],
              fieldOption: {
                data: [
                  {
                    label: '乌鲁木齐市',
                    value: '2',
                    children: [
                      { label: '达坂城区', value: '7' },
                      { label: '头屯河区', value: '8' },
                      { label: '乌鲁木齐县', value: '9' },
                    ],
                  },
                ],
                'check-strictly': true,
                'show-checkbox': true,
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
