<template>
  <WmTree :data="treeData" searchShow placeholder="请输入">
    <template #prefix> 前- </template>
    <template #suffix> -后 </template>
  </WmTree>
</template>

<script>
  export default {
    data() {
      return {
        treeData: [
          {
            label: '一级 1',
            children: [
              {
                label: '二级 1-1',
                children: [
                  {
                    label: '三级 1-1-1',
                  },
                ],
              },
            ],
          },
        ],
      };
    },
  };
</script>

<style></style>
