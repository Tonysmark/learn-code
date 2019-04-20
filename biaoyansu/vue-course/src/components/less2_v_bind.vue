<template>
  <div>
    <h2>V-bind 指令 => :</h2>
    <div class="content">
      <span>V-bind 主要就是绑定数据用的 </span>
      <a :href="url">点击跳转百度</a>
    </div>
  </div>
</template>
<script>
export default {
  name: "less2_v_bind",
  data() {
    return {
      url: "https://baidu.com",
    };
  }
};
</script>