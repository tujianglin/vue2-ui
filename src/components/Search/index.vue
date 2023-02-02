<template>
  <el-form ref="ruleForm" class="wm-search" :model="ruleForm" v-bind="omit(option, 'columns', 'immediate')" v-on="omit($listeners, 'update')">
    <el-form-item v-for="(item, index) in option.columns" :key="index" :class="{ 'el-form-custom': item.type === 'custom' }" v-bind="omit(item, 'type', 'fieldOption')">
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
      <el-select v-else-if="item.type === 'select'" v-bind="omit(item.fieldOption, 'dicData')" v-on="item.fieldOption && item.fieldOption.on" v-model="ruleForm[item.prop]">
        <el-option v-for="select in item.fieldOption.dicData" :key="select.value" v-bind="select" />
      </el-select>
      <!-- 下拉数选择 -->
      <TreeSelect v-else-if="item.type === 'treeSelect'" v-bind="item.fieldOption" v-on="item.fieldOption && item.fieldOption.on" v-model="ruleForm[item.prop]" />
      <!-- 自定义 -->
      <template v-else-if="item.type === 'custom'">
        <slot :name="item.type"></slot>
      </template>
      <!-- input -->
      <components v-else :is="`el-${item.type}`" v-bind="omit(item.fieldOption, 'dicData')" v-on="item.fieldOption && item.fieldOption.on" v-model="ruleForm[item.prop]" />
    </el-form-item>
  </el-form>
</template>

<script>
  import { omit, pick, isEqual } from 'lodash';
  import TreeSelect from 'el-select-tree';

  export default {
    name: 'WMSearch',
    components: { TreeSelect },
    props: {
      option: {
        type: Object,
        default: () => ({
          columns: [],
        }),
      },
    },
    data() {
      return {
        ruleForm: {},
      };
    },
    watch: {
      option: {
        handler(val) {
          const { columns = [] } = val;
          const resultObj = {};
          columns?.map((i) => {
            switch (i.dataType) {
              case 'array':
                resultObj[i.prop] = i.defaultValue || [];
                break;
              case 'number':
                resultObj[i.prop] = i.defaultValue || null;
                break;
              default:
                resultObj[i.prop] = i.defaultValue || '';;
                break;
            }
          });
          if (!isEqual(this.ruleForm, resultObj)) {
            this.ruleForm = resultObj;
          }
        },
        immediate: true,
        deep: true,
      },
      ruleForm: {
        handler(val) {
          this.$emit('update', val);
        },
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
  .wm-search {
    ::v-deep .el-form-item {
      margin-bottom: 0;
      border: 1px solid var(--primary-color, #3b8e8e);
      border-radius: 2px;
      display: inline-flex;
      align-items: center;
      height: 26px;
      margin-right: 8px;
      .el-date-editor--date {
        padding-left: 30px;
      }
      .el-form-item__label {
        padding: 0 12px;
        color: var(--primary-color, #3b8e8e);
        font-size: 12px;
      }

      .el-form-item__content {
        display: flex;
        align-items: center;
      }

      .el-input__inner {
        border: transparent;
        font-size: 12px;
        padding: 0;
        height: 24px;
        background: transparent;
      }

      .el-date-editor--date {
        padding-left: 30px;
      }

      .el-select__input {
        margin-left: 0;
      }

      .el-select__tags {
        white-space: nowrap;
        flex-wrap: unset;
        overflow: auto;

        &::-webkit-scrollbar {
          display: none;
        }
      }

      &:last-child {
        margin-right: 0;
      }

      .ant-select-selection--single {
        height: 24px;
        background: transparent;
        border: none;

        .ant-select-selection__rendered {
          line-height: 24px;
        }
      }

      .ant-select-open .ant-select-selection {
        box-shadow: none;
      }

      .ant-select-focused .ant-select-selection,
      .ant-select-selection:focus,
      .ant-select-selection:active {
        box-shadow: none;
      }
    }
  }
</style>
