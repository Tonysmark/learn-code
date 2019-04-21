import axios from "axios";
const baseURL = "http://jsonplaceholder.typicode.com/todos";
//模块内部也是四大基本核心部件
const state = {
  // 数据放在这里
  todos: []
};
const getters = {
  // 获取所有todo信息
  getAllTodos: state => state.todos
};
const actions = {
  // 获取网络流的请求 组件中调用
  async fetchTodos({ commit }) {
    // commit 解构赋值  这里现在还不知道是什么 因为还没有从mutation提交

    const response = await axios.get(baseURL);
    // 向mutaition提交数据
    commit("setTodos", response.data);
  },

  async addTodo({ commit }, title) {
    // 添加新的todo组件中调用
    // 这里的 title 在组件中调用, 从组件中 data 里获取
    const response = await axios.post(baseURL, { title, completed: false });
    commit("newTODOS", response.data);
  },
  async deleteTodo({ commit }, id) {
    await axios.delete(`${baseURL}/${id}`);
    commit("removeTodo", id);
  },
  async filterTodos({ commit }, e) {
    let value = e.target.options[e.target.options.selectedIndex].value;
    let limited = parseInt(value);
    const response = await axios.get(`${baseURL}?_limit=${limited}`);
    commit("filterTodos", response.data);
  },
  async updateTodo({ commit }, updTodo) {
    const response = await axios.put(`${baseURL}/${updTodo.id}`, updTodo);
    commit("updTodo", response.data);
  }
};
// 当数据加载完毕了  这时候就要停止(mutate)行为,然后将数据保存在state中
const mutations = {
  setTodos: (state, todosData) => (state.todos = todosData),
  newTODOS: (state, todo) => state.todos.unshift(todo),
  removeTodo: (state, id) =>
    (state.todos = state.todos.filter(todo => todo.id != id)),
  filterTodos: (state, limit) => (state.todos = limit),
  updTodo: (state, upd) => {
    const index = state.todos.findIndex(todo => todo.id === upd.id);
    console.log(index);
    if (index !== -1) {
      state.todos.splice(index, 1, upd);
    }
  }
};
export default {
  state,
  getters,
  mutations,
  actions
};
// 这个模块运行机制和store.js基本上可以说完全一样了
