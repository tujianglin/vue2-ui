<template>
  <div class="wm-tree">
    <el-input v-if="searchShow" class="filter-input" :placeholder="placeholder" v-model="filterText" />
    <el-tree class="wm-tree-body" :style="{ '--height': searchShow ? '36px' : '0px' }" ref="wmTree" v-bind="$props" v-on="$listeners" :filterNodeMethod="filterNode">
      <template #default="{ node, data: nodeData }">
        <span :title="node.label">
          <span :class="[{ 'disabled-color': node.disabled }, { 'text-disabled': nodeData.textDisabled }]">
            <slot name="prefix" :node="node" :data="nodeData"></slot>
            <slot v-if="$scopedSlots.default" :node="node" :data="nodeData"></slot>
            <template v-else
              ><span>{{ node.label }}</span></template
            >
            <slot name="suffix" :node="node" :data="nodeData"></slot>
          </span>
          <span v-if="node.disabled || nodeData.textDisabled" class="disabled" @click.stop> </span>
        </span>
      </template>
    </el-tree>
  </div>
</template>

<script>
  export default {
    name: 'WmTree',
    props: {
      /* 是否需要搜索 */
      searchShow: Boolean,
      /* 查询提示文案 */
      placeholder: String,
      data: {
        type: Array,
      },
      emptyText: {
        type: String,
        default() {
          return '';
        },
      },
      renderAfterExpand: {
        type: Boolean,
        default: true,
      },
      nodeKey: String,
      checkStrictly: Boolean,
      defaultExpandAll: Boolean,
      expandOnClickNode: {
        type: Boolean,
        default: true,
      },
      checkOnClickNode: Boolean,
      checkDescendants: {
        type: Boolean,
        default: false,
      },
      autoExpandParent: {
        type: Boolean,
        default: true,
      },
      defaultCheckedKeys: Array,
      defaultExpandedKeys: Array,
      currentNodeKey: [String, Number],
      showCheckbox: {
        type: Boolean,
        default: false,
      },
      draggable: {
        type: Boolean,
        default: false,
      },
      allowDrag: Function,
      allowDrop: Function,
      props: {
        default() {
          return {
            children: 'children',
            label: 'label',
            disabled: 'disabled',
          };
        },
      },
      lazy: {
        type: Boolean,
        default: false,
      },
      highlightCurrent: {
        type: Boolean,
        default: true,
      },
      load: Function,
      filterNodeMethod: Function,
      accordion: Boolean,
      indent: {
        type: Number,
        default: 18,
      },
      iconClass: String,
    },
    data() {
      return {
        filterText: '',
      };
    },
    watch: {
      filterText(val) {
        this.$refs.wmTree.filter(val);
      },
    },
    methods: {
      filterNode(value, data) {
        if (!value) return true;
        return data[this.props['label']]?.indexOf(value) !== -1;
      },
    },
  };
</script>

<style lang="scss" scoped>
  .wm-tree {
    padding: 8px;
    overflow-y: auto;
    height: calc(100% - 16px);

    .el-tree ::v-deep {
      // 改变三角icon
      .el-tree-node__expand-icon.expanded {
        -webkit-transform: rotate(0deg) !important;
        transform: rotate(0deg) !important;
      }
      .el-icon-caret-right:before {
        font-family: 'peacock9' !important;
        font-size: 16px;
        font-style: normal;
        content: '\e811' !important;
      }
      .expanded:before {
        font-family: 'peacock9' !important;
        font-size: 16px;
        font-style: normal;
        content: '\e812' !important;
      }
      .is-leaf.el-tree-node__expand-icon.el-icon-caret-right:before {
        content: '' !important;
        font-size: 16px;
      }
    }

    &-body {
      height: calc(100% - var(--height));
      overflow-y: auto;
    }

    .filter-input {
      margin-bottom: 8px;
    }

    ::v-deep .el-tree-node.is-current > .el-tree-node__content {
      background: var(--color-primary-light-8, #d8e8e8);
    }

    ::v-deep .el-tree-node__content {
      font-size: 14px;
      position: relative;
      display: block;
      align-items: center;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      line-height: 26px;
      padding-left: 0 !important;

      .el-checkbox {
        position: relative;
        z-index: 3;
      }

      .el-tree-node__expand-icon {
        position: relative;
        z-index: 3;
        color: #000;
      }

      .is-leaf {
        color: transparent;
      }

      .disabled-color {
        color: rgba($color: #000, $alpha: 0.25);
      }

      .text-disabled {
        color: rgba($color: #000, $alpha: 0.25);
      }

      .disabled {
        cursor: not-allowed;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: 2;
      }
    }
  }

  .el-tree {
    ::v-deep .el-tree-node {
      position: relative;
      padding-left: 0; // 缩进量
    }
    ::v-deep .el-tree-node__children {
      padding-left: 16px; // 缩进量
    }
    // 竖线
    ::v-deep .el-tree-node::before {
      content: '';
      height: 100%;
      width: 1px;
      position: absolute;
      left: -3px;
      top: -26px;
      border-width: 1px;
      border-left: 1px solid #b5c0cd;
    }
    // 当前层最后⼀个节点的竖线⾼度固定
    ::v-deep .el-tree-node:last-child::before {
      height: 38px; // 可以⾃⼰调节到合适数值
    }
    // 横线
    ::v-deep .el-tree-node::after {
      content: '';
      width: 10px;
      height: 20px;
      position: absolute;
      left: -3px;
      top: 12px;
      border-width: 1px;
      border-top: 1px solid #b5c0cd;
    }
    // 去掉最顶层的虚线，放最下⾯样式才不会被上⾯的覆盖了
    & > ::v-deep .el-tree-node::after {
      border-top: none;
    }
    & > ::v-deep .el-tree-node::before {
      border-left: none;
    }
  }
</style>
