<template>
  <div id="add-todos">
    <h2>Add Todo</h2>
    <form class="row" @submit.prevent="onSubmit">
      <div class="col s10 input-filed">
        <input id="last_name" type="text" v-model="title" placeholder="添加代办事项...">
      </div>
      <input type="submit" value="添加" class="col s2 btn light-green">
    </form>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "addtodo",
  data() {
    return {
      title: ""
    };
  },
  methods: {
    ...mapActions(['addTodo']),
    onSubmit(){
      this.addTodo(this.title)
    }
  }
};
</script>

<style lang="less" scoped>
</style>

