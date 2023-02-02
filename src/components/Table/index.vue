<template>
  <div class="wm-table">
    <el-table ref="wmTable" :border="border" size="mini" v-bind="omit($props, 'columns', 'isLoad')" @header-dragend="headerDragend" v-on="omit($listeners, 'load')">
      <el-table-column v-for="(item, index) in columns" showOverflowTooltip v-bind="omit(item, 'slot')" :prop="dropCol[index].prop" :key="index">
        <template v-if="item.headerSlot" #header="scope">
          <slot :name="`${item.prop}Header`" v-bind="scope"></slot>
        </template>
        <template v-if="item.slot" #default="scope">
          <slot :name="item.prop" v-bind="scope"></slot>
        </template>
      </el-table-column>
      <template #empty>
        <slot name="empty"></slot>
      </template>
    </el-table>
    <el-pagination
      v-if="!isEmpty(paginationOption)"
      class="wm-table-pagination"
      v-bind="pageOption"
      @size-change="sizeChange"
      @current-change="currentChange"
      v-on="pick(pageOption, 'size-change', 'current-change', 'prev-click', 'next-click')"
    />
  </div>
</template>

<script>
  import { cloneDeep, omit, pick, assign, isEmpty } from 'lodash';

  export default {
    name: 'WMTable',
    props: {
      /* 是否立即请求 */
      isLoad: {
        type: Boolean,
        default: true,
      },
      /* 表格数据 */
      data: {
        type: Array,
        default: function () {
          return [];
        },
      },
      /* 表头 */
      columns: {
        type: Array,
        default: function () {
          return [];
        },
      },
      /* 是否展示分页 */
      pagination: {
        type: Boolean,
        default: true,
      },
      /* 分页选项 */
      paginationOption: {
        type: Object,
        default: () => ({}),
      },
      size: String,
      width: [String, Number],
      height: {
        type: [String, Number],
        default: 36,
      },
      maxHeight: [String, Number],
      fit: {
        type: Boolean,
        default: true,
      },
      stripe: Boolean,
      border: {
        type: Boolean,
        default: true,
      },
      rowKey: [String, Function],
      context: {},
      showHeader: {
        type: Boolean,
        default: true,
      },
      showSummary: Boolean,
      sumText: String,
      summaryMethod: Function,
      rowClassName: [String, Function],
      rowStyle: [Object, Function],
      cellClassName: [String, Function],
      cellStyle: [Object, Function],
      headerRowClassName: [String, Function],
      headerRowStyle: [Object, Function],
      headerCellClassName: [String, Function],
      headerCellStyle: [Object, Function],
      highlightCurrentRow: Boolean,
      currentRowKey: [String, Number],
      emptyText: String,
      expandRowKeys: Array,
      defaultExpandAll: Boolean,
      defaultSort: Object,
      tooltipEffect: String,
      spanMethod: Function,
      selectOnIndeterminate: {
        type: Boolean,
        default: true,
      },
      indent: {
        type: Number,
        default: 16,
      },
      treeProps: {
        type: Object,
        default() {
          return {
            hasChildren: 'hasChildren',
            children: 'children',
          };
        },
      },
      lazy: Boolean,
      load: Function,
    },
    data() {
      return {
        pageOption: {
          background: true,
          currentPage: 1,
          pageSizes: [15, 50, 100],
          pageSize: 15,
          layout: 'total, sizes, prev, pager, next, jumper',
          total: 0,
        },
      };
    },
    computed: {
      dropCol() {
        return cloneDeep(this.columns);
      },
    },
    watch: {
      paginationOption: {
        handler(val) {
          this.pageOption = omit(
            assign(this.pageOption, val, {
              currentPage: val.current,
              pageSize: val.size,
            }),
            'current',
            'size',
          );
        },
        immediate: true,
        deep: true,
      },
    },
    mounted() {
      if (this.isLoad) {
        this.onLoad();
      }
    },
    methods: {
      omit,
      pick,
      isEmpty,
      /* 加载表格数据 */
      onLoad() {
        this.$listeners?.load?.();
      },
      /* 分页数量变化 */
      sizeChange(e) {
        this.pageOption.pageSize = e;
        this.$emit(
          'update:paginationOption',
          omit(
            assign(this.pageOption, {
              current: 1,
              size: this.pageOption.pageSize,
            }),
            'currentPage',
            'pageSize',
            'pageSizes',
            'layout',
            'pageSizes',
            'background',
          ),
        );
        this.onLoad();
      },
      /* 分页页数变化 */
      currentChange(e) {
        this.pageOption.currentPage = e;
        this.$emit(
          'update:paginationOption',
          omit(
            assign(this.pageOption, {
              current: this.pageOption.currentPage,
              size: this.pageOption.pageSize,
            }),
            'currentPage',
            'pageSize',
            'pageSizes',
            'layout',
            'pageSizes',
            'background',
          ),
        );
        this.onLoad();
      },
      /* 表头宽度优化 */
      headerDragend(newW, _, row) {
        const minW = row.minWidth;
        if (newW < minW) {
          row.width = minW;
        } else {
          row.width = newW;
        }
        // 改变宽度重新布局
        this.$nextTick(() => {
          this.$refs.wmTable.doLayout();
        });
      },
    },
  };
</script>

<style lang="scss" scoped>
  .wm-table {
    display: flex;
    flex-direction: column;
    height: 100%;

    .empty-img {
      width: 300px;
      height: 300px;
    }

    &-pagination {
      height: 28px;
      padding: 8px;
      text-align: right;
    }

    ::v-deep .el-form-item {
      margin-bottom: 0 !important;

      &__content {
        display: flex;
      }
    }

    ::v-deep .el-table {
      .el-button {
        min-height: initial;
      }
    }
  }
</style>
