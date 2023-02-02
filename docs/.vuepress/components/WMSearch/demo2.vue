<template>
  <WMSearch :option="searchOption" @update="handleUpdate"></WMSearch>
</template>

<script>
  export default {
    data() {
      return {
        searchForm: {
          param1: '',
          param2: '',
        },
      };
    },
    computed: {
      searchOption() {
        return {
          columns: [
            {
              prop: 'param1',
              type: 'select',
              label: '选择框',
              defaultValue: this.searchForm.param1,
              fieldOption: {
                dicData: [
                  {
                    label: '是',
                    value: '1',
                  },
                  {
                    label: '否',
                    value: '0',
                  },
                ],
                on: {
                  change: (val) => {
                    this.searchForm.param1 = val;
                    this.searchForm.param2 = val;
                  },
                },
              },
            },
            {
              prop: 'param2',
              type: 'input',
              label: '输入框',
              defaultValue: this.searchForm.param2,
            },
          ],
        };
      },
    },
    methods: {
      handleUpdate(val) {
        console.log(val);
      },
    },
  };
</script>
