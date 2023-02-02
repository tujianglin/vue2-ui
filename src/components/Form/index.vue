<template>
  <div class="design-form">
    <el-row :gutter="option.gutter">
      <el-form ref="wmForm" :model="ruleForm" v-bind="omit(option, 'columns', 'gutter')" v-on="omit($listeners)">
        <template v-for="(item, index) in columns">
          <el-col :key="index" :span="item.span">
            <el-form-item v-bind="omit(item, 'type', 'fieldOption')">
              <!-- 单选框 -->
              <el-radio-group v-if="item.type === 'radio'" v-bind="omit(item.fieldOption, 'dicData')" v-model="ruleForm[item.prop]" v-on="item.fieldOption && item.fieldOption.on">
                <el-radio v-for="radio in item.fieldOption.dicData" :key="radio.value" v-bind="omit(radio, 'label', 'value')" :label="radio.value">
                  {{ radio.label }}
                </el-radio>
              </el-radio-group>
              <!-- 多选框 -->
              <el-checkbox-group v-else-if="item.type === 'checkbox'" v-bind="omit(item.fieldOption, 'dicData')" v-model="ruleForm[item.prop]" v-on="item.fieldOption && item.fieldOption.on">
                <el-checkbox v-for="checkbox in item.fieldOption.dicData" :key="checkbox.value" v-bind="omit(checkbox, 'label', 'value')" :label="checkbox.value">
                  {{ checkbox.label }}
                </el-checkbox>
              </el-checkbox-group>
              <!-- 下拉选择 -->
              <el-select v-else-if="item.type === 'select'" style="width: 100%" v-bind="omit(item.fieldOption, 'dicData')" v-on="item.fieldOption && item.fieldOption.on" v-model="ruleForm[item.prop]">
                <el-option v-for="(select, selectIndex) in item.fieldOption.dicData" :key="selectIndex" v-bind="select" />
              </el-select>
              <!-- 下拉数选择 -->
              <TreeSelect ref="treeSelectRef" v-else-if="item.type === 'treeSelect'" style="width: 100%" v-bind="item.fieldOption" v-on="item.fieldOption && item.fieldOption.on" v-model="ruleForm[item.prop]" />
              <!-- 纯文本 -->
              <span v-else-if="item.type === 'text'">
                {{ ruleForm[item.prop] || '-' }}
              </span>
              <!-- 其他 -->
              <slot v-else-if="item.type === 'custom'" :name="item.prop" v-bind="item.fieldOption"></slot>
              <!-- input -->
              <components v-else style="width: 100%" :is="`el-${item.type}`" v-bind="omit(item.fieldOption, 'dicData')" v-on="item.fieldOption && item.fieldOption.on" v-model="ruleForm[item.prop]" />
            </el-form-item>
          </el-col>
        </template>
      </el-form>
    </el-row>
  </div>
</template>

<script>
  import TreeSelect from 'el-select-tree';
  import { omit, pick } from 'lodash';

  export default {
    name: 'WMForm',
    components: { TreeSelect },
    props: {
      value: {
        type: Object,
        default: () => {},
      },
      option: {
        type: Object,
        default: () => {
          return {
            columns: [],
          };
        },
      },
    },
    data() {
      return {
        ruleForm: {},
        columns: [],
      };
    },
    watch: {
      option: {
        handler(val) {
          const res = val?.columns?.filter((i) => !i.hide);
          this.columns = res;
        },
        immediate: true,
        deep: true,
      },
      value: {
        handler(val) {
          this.ruleForm = val;
        },
        immediate: true,
        deep: true,
      },
    },
    methods: {
      omit,
      pick,
    },
  };
</script>
<style lang="scss" scoped>
  .design-form {
    ::v-deep .el-form {
      display: flex;
      flex-wrap: wrap;
      .el-form-item--small.el-form-item {
        margin-bottom: 0;
      }

      .el-form-item {
        width: 100%;

        .error-tip {
          position: absolute;
          right: 6px;
          top: 0;
          transition: 0.2s;
        }

        .el-form-item__content {
          word-break: break-all;
        }
      }
      .el-form-item.is-error {
        .error-tip {
          color: #f74439;
        }

        .el-form-item__content .el-select + .error-tip {
          right: 26px;
        }
      }

      &.el-form--inline {
        display: flex;
        align-items: center;
      }
    }
  }
</style>
