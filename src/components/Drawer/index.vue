<template>
  <el-drawer :visible.sync="drawer" customClass="wm-drawer" v-bind="omit($props, ['title', 'icon'])" v-on="$listeners">
    <template #title>
      <i v-if="icon" :class="['iconfont', icon]"></i>
      <span>{{ title }}</span>
    </template>
    <div class="wm-drawer__content">
      <div class="content">
        <slot></slot>
      </div>
      <div v-if="$scopedSlots.footer" class="wm-drawer__footer">
        <slot name="footer"></slot>
      </div>
    </div>
  </el-drawer>
</template>

<script>
  import { omit } from 'lodash';
  export default {
    name: 'WMDrawer',
    props: {
      icon: String,
      appendToBody: {
        type: Boolean,
        default: false,
      },
      beforeClose: {
        type: Function,
      },
      customClass: {
        type: String,
        default: '',
      },
      closeOnPressEscape: {
        type: Boolean,
        default: true,
      },
      destroyOnClose: {
        type: Boolean,
        default: false,
      },
      modal: {
        type: Boolean,
        default: true,
      },
      direction: {
        type: String,
        default: 'rtl',
        validator(val) {
          return ['ltr', 'rtl', 'ttb', 'btt'].indexOf(val) !== -1;
        },
      },
      modalAppendToBody: {
        type: Boolean,
        default: true,
      },
      showClose: {
        type: Boolean,
        default: true,
      },
      size: {
        type: [Number, String],
        default: '30%',
      },
      title: {
        type: String,
        default: '',
      },
      wrapperClosable: {
        type: Boolean,
        default: true,
      },
      withHeader: {
        type: Boolean,
        default: true,
      },
    },
    data() {
      return {
        drawer: false,
      };
    },
    methods: {
      omit,
      show() {
        this.drawer = true;
      },
      close() {
        this.drawer = false;
      },
    },
  };
</script>

<style lang="scss">
  .wm-drawer {
    .el-drawer__header {
      padding: 20px;
      margin: 0;
      font-weight: 900;
      color: #333;
      display: inline-flex;
      align-items: center;
      border-bottom: 1px solid var(--color-primary-light-9, #ebf4f4);

      span {
        width: 100%;
      }

      .iconfont {
        font-size: 20px;
        color: var(--primary-color, #3b8e8e);
        margin-right: 16px;
      }
    }
    &__content {
      height: 100%;
      .content {
        position: relative;
        height: calc(100% - 132px);
        overflow-y: auto;
      }
    }
    &__footer {
      position: absolute;
      bottom: 0;
      right: 0;
      width: 100%;
      display: flex;
      justify-content: flex-end;
      padding: 12px 20px;
      border-top: 1px solid var(--color-primary-light-9, #ebf4f4);
    }
  }
</style>
