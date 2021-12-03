<template>
  <div class="common-table">
    <!-- <el-table
      id="table"
      :data="tableData"
      v-loading="loading"
      element-loading-text="加载中"
      style="width: 100%"
      :header-cell-style="{ 'text-align': 'center', 'background-color': '#ebeef5', color: '#333333' }">
      <el-table-column
        v-for="(item, index) in column"
        :key="index"
        :align="item.align || 'left'"
        v-bind="item">
      </el-table-column>
    </el-table> -->

    <el-table
      id="table"
      ref="mutipleTable"
      size="medium"
      :data="tableData"
      @select="onSelect"
      @select-all="onSelect"
      @row-click="onRowClick"
      style="width: 100%"
      highlight-current-row
      v-loading="isLoading"
      :stripe="stripe">
      <el-table-column v-for="(item, index) in columnOptions" :key="index" v-bind="item"></el-table-column>
      <slot></slot>
    </el-table>
  </div>
</template>

<script>
export default {
  name: 'TableColumn',
  data() {
    return {};
  },
  props: {
    tableData: {
      type: Array,
      default: []
    },
    columnOptions: {
      type: Array,
      default: []
    },
    isLoading: {
      type: Boolean,
      default: false
    },
    stripe: {
      type: Boolean,
      default: true
    }
  },
  methods: {
    // 获取选中的行
    onSelect: function (val) {
      this.$emit('getSelect', val);
    }
  }
};
</script>

<style lang="scss" scoped>
// ::v-deep .el-table {
//   background: transparent;
// }
// ::v-deep .el-table__body {
//   background: transparent;
//   border-collapse: separate; 
//   border-spacing: 0 12px;
// }
// ::v-deep .el-table th {
//   color: #303133;
//   background-color:#EBEEF5;
// }
// ::v-deep .el-table__body tr {
//   border-radius: 10px;
//   background: #fff;
// }
</style>
