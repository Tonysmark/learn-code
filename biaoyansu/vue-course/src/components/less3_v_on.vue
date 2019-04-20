<template>
  <div>
    <h2>V-on => @</h2>
    <div class="content">
      <button @click="onClick">点我</button>
      <form v-on:submit.prevent="onSubmit">
        <input type="text">
        <button v-on:keyup.enter="onSubmit" type="submit">提交表单</button>
      </form>
      <div>:submit.prevent 就是e.preventDefault() 这个VUE个封装好了的</div>
      <div>:submit.stop 就是停止冒泡事件(stop stoppropagation 虽然我从未见到过)</div>
      <div>:keyup 监听键盘事件  :keyup.enter 就仅仅是回车键才行</div>
    </div>
  </div>
</template>
<script>
export default {
  name: "less3_v_on",
  methods: {
    onClick: () => {
      alert("点击");
    },
    onSubmit: () => {
      alert('提交');
    }
  }
};
</script>
<style lang="less" scoped>
</style>
