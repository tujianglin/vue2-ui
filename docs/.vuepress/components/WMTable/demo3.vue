<template>
  <div>
    <WMTable :data="tableData" :columns="columns" row-key="id" lazy :load="load" :tree-props="{ children: 'children', hasChildren: 'hasChildren' }"></WMTable>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        tableData: [
          {
            id: 1,
            date: '2016-05-02',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄',
          },
          {
            id: 2,
            date: '2016-05-04',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1517 弄',
          },
          {
            id: 3,
            date: '2016-05-01',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1519 弄',
            hasChildren: true,
          },
          {
            id: 4,
            date: '2016-05-03',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1516 弄',
          },
        ],
      };
    },
    computed: {
      columns() {
        return [
          {
            type: 'selection',
            width: 50,
            align: 'center',
          },
          {
            prop: 'date',
            label: '日期',
          },
          {
            prop: 'name',
            label: '姓名',
          },
          {
            prop: 'address',
            label: '地址',
          },
        ];
      },
    },
    methods: {
      load(tree, treeNode, resolve) {
        setTimeout(() => {
          resolve([
            {
              id: 31,
              date: '2016-05-01',
              name: '王小虎',
              address: '上海市普陀区金沙江路 1519 弄',
            },
            {
              id: 32,
              date: '2016-05-01',
              name: '王小虎',
              address: '上海市普陀区金沙江路 1519 弄',
            },
          ]);
        }, 1000);
      },
    },
  };
</script>

<style></style>
