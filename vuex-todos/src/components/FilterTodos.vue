<template>
  <div id="filter-todos">
    <h2>Filter</h2>
    <div class="row">
      <div class="col s3">
        <div class="btn legend white black-text">双击完成</div>
        <div class="btn legend white black-text">未完成</div>
        <div class="btn legend red">完成</div>
      </div>
      <div class="col s9">
        <div class="input-filed">
          <select @change="filterTodos($event)">
            <option value="200">200</option>
            <option value="100">100</option>
            <option value="50">50</option>
            <option value="10">10</option>
          </select>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  methods: {
    ...mapActions(["filterTodos"])
  }
};
</script>

<style lang="less" scoped>
.legend {
  margin-right: 20px;
}
</style>
