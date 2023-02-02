<template>
  <div class="search-keywords">
    <el-input v-model="keywords" :placeholder="searchPlaceholder" v-bind="$props" clearable />
    <el-button class="search-btn" icon="el-icon-search" @click="handleClick" />
  </div>
</template>

<script>
  export default {
    props: {
      placeholder: {
        type: String,
      },
      defaultValue: String,
    },
    data() {
      return {
        keywords: '',
      };
    },
    computed: {
      searchPlaceholder() {
        if (this.placeholder) {
          return this.placeholder;
        }
        return this.$t('commonLang.filter_text');
      },
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
    border: 1px solid var(--primary-color);
    border-radius: 2px;
    background-color: var(--primary-color);
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
      background-color: var(--primary-color);
      color: #fff;
      padding: 0;
      border: 0;
    }
  }
</style>
