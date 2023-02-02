<template>
  <div>
    <WMDragTable handle=".move" @drop="dropEnd">
      <WMTable :data="tableData" :columns="columns">
        <template #move>
          <i class="move iconfont el-icon-rank" style="cursor: move"></i>
        </template>
      </WMTable>
    </WMDragTable>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        value: '',
        tableData: [
          {
            date: '2016-05-02',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄',
          },
          {
            date: '2016-05-04',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1517 弄',
          },
          {
            date: '2016-05-01',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1519 弄',
          },
          {
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
            prop: 'move',
            width: 50,
            align: 'center',
            slot: true,
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
      dropEnd({ list }) {
        console.log(list);
      },
    },
  };
</script>

