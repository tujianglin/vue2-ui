<template>
  <div>
    <el-button @click="handleOpen">打开抽屉</el-button>
    <WMDrawer ref="drawerRef" title="抽屉" icon="peacock9 icon-add-rectangle">
      内容部分
      <template #footer>
        <el-button @click="cancel">取消</el-button>
        <el-button type="primary">保存</el-button>
      </template>
    </WMDrawer>
  </div>
</template>

<script>
  export default {
    methods: {
      handleOpen() {
        this.$refs.drawerRef.show();
      },
      cancel() {
        this.$refs.drawerRef.close();
      },
    },
  };
</script>
