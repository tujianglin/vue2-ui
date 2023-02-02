<template>
  <div class="title-box">
    <div class="title">
      {{ title }}
    </div>
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'WMTitle',
    props: {
      title: String,
    },
  };
</script>

<style scoped lang="scss">
  .title-box {
    padding: 8px;
    display: inline-flex;
    align-items: center;
  }

  .title {
    padding-left: 8px;
    border-left: 3px solid var(--primary-color, #3b8e8e);
    font-size: 16px;
    color: #333;
    line-height: 16px;
    font-weight: 900;
  }
</style>
