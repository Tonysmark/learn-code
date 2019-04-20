<template>
  <div>
    <h2>V-if 控制流</h2>
    <div class="content">
      <div v-if="role=='admin'">
        管理员模式
      </div>
      <div v-else-if="role=='hr'">
        带查看建立列表
      </div>
      <div v-else>
        fuck off
      </div>
      <input type="text" v-model.lazy='role'>
    </div>
  </div>
</template>
<script>
export default {
  data(){
    return{
      role:'admin'
    }
  }
}
</script>
