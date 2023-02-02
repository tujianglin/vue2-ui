<template>
  <WMSearch :option="searchOption" @update="handleUpdate">
    <template #param2> <el-button type="primary" size="mini">查询</el-button> </template>
  </WMSearch>
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
              type: 'custom',
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
