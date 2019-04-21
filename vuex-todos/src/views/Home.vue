<template>
  <div class="home">
    <AddTodo></AddTodo>
    <FilterTodos></FilterTodos>
    <Todos></Todos>
  </div>
</template>

<script>
import Todos from "../components/Todos";
import AddTodo from "../components/AddTodos";
import FilterTodos from "../components/FilterTodos";
export default {
  name: "home",
  components: {
    Todos,
    AddTodo,
    FilterTodos
  }
};
</script>
