<template>
  <div>
    <h2>父子通信</h2>
    <div class="content">
      <div>组件标签向组件本身传递消息</div>
      <button @click="onClick">点我</button>
      {{msg}}
      <div>
        <a :href="'/user/'+username">@{{username}}</a>
      </div>
    </div>
    <h2>子父通信</h2>
    <div class="content">
      <div></div>
      <button @click="balance">显示余额</button>
    </div>
  </div>
</template>
<script>
export default {
  props: ["msg", "username"],
  methods: {
    onClick: function() {
      alert(this.msg);
    },
    balance:function(){
      // 子组件向父级组件喊话
      this.$emit('show-balance',{a:1})
    }
  }
};
</script>
<style lang="less" scoped>
</style>
