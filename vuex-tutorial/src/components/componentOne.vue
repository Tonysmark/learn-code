<template>
  <div class="section">
    <h4>我是子组件一</h4>
    <p>{{getUsername}}</p>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name:'cp1',
  computed: {
    ...mapGetters(["getUsername"])
  }
};
</script>

<style>
</style>
