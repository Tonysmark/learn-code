<template>
  <div id="todos">
    <h2>todos</h2>
    <div class="section">
      <div class="row">
        <div class="col s6" v-for="todo in getAllTodos" :key="todo.id">
          <div class="card" :class="{red:!todo.completed}">
            <div class="card-content" @dblclick="onDblClick(todo)">
              <!-- <i class="material-icons">edit</i> -->
              <p class="title">{{todo.id}} | {{todo.title}}</p>
              <p class="right" @click="deleteTodo(todo.id)">
                <i class="material-icons black-text">delete</i>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "todos",
  methods: {
    ...mapActions(["fetchTodos", "deleteTodo", "updateTodo"]), // 只是映射出来 fetchTodos
    onDblClick(todo) {
      console.log(todo);
      const updTodo = {
        // 这里的数据作为put方法的第二参数传上去
        id: todo.id,
        title: todo.title,
        completed: !todo.completed
      };
      this.updateTodo(updTodo);
    }
  },
  computed: {
    ...mapGetters(["getAllTodos"])
  },
  created() {
    this.fetchTodos(); // 页面加载的时候 在这里调用 fetchTodos
  }
};
</script>
<style lang="less" scoped>
.card-content {
  cursor: pointer;
  user-select: none;
}
.title {
  display: inline;
}
.right .material-icons {
  cursor: pointer;
}
</style>

