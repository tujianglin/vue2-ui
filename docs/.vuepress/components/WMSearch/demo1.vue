<template>
  <WMSearch :option="searchOption" @update="handleUpdate"></WMSearch>
</template>

<script>
  export default {
    computed: {
      searchOption() {
        return {
          columns: [
            {
              prop: 'param1',
              type: 'input',
              label: '输入框',
              defaultValue: 'hello world',
            },
            {
              prop: 'param2',
              type: 'select',
              label: '选择框',
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

