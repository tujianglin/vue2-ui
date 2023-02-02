<template>
  <div class="search-keywords">
    <el-input v-model="keywords" :placeholder="placeholder" v-bind="$props" clearable />
    <el-button class="search-btn" icon="el-icon-search" @click="handleClick" />
  </div>
</template>

<script>
  export default {
    name: 'WMSearchInput',
    props: {
      placeholder: {
        type: String,
        default: '',
      },
      defaultValue: String,
    },
    data() {
      return {
        keywords: '',
      };
    },
    watch: {
      defaultValue: {
        handler(val) {
          this.keywords = val;
        },
      },
    },
    methods: {
      handleClick() {
        this.$emit('search', this.keywords);
      },
    },
  };
</script>

<style lang="scss" scoped>
  .search-keywords {
    display: flex;
    margin-left: 8px;
    border: 1px solid var(--primary-color, #3b8e8e);
    border-radius: 2px;
    background-color: var(--primary-color, #3b8e8e);
    display: flex;
    align-items: center;

    ::v-deep .el-input {
      input {
        border-color: transparent;
        height: 26px;
        padding: 0 12px;
        border-radius: initial;
      }
    }

    .search-btn {
      min-height: initial;
      min-width: 30px;
      background-color: var(--primary-color, #3b8e8e);
      color: #fff;
      padding: 0;
      border: 0;
    }
  }
</style>
