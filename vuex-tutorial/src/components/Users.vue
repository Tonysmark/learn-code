<template>
  <div>
    <h2>用户组件</h2>
    <p>
      {{getUser}}
    </p>
    <p>
      <input type="text" @change="changeName" v-model="name">
    </p>
  </div>
</template>

<script>
import {mapGetters,mapMutations} from 'vuex'
export default {
  computed:{  // 调用store中方法
    ...mapGetters(['getUser'])
  },
  // 修改调用methods
  methods:{
    changeName(){
      this.$store.commit('changeUserName',this.name)
    }
  },
  data(){
    return{
      name:''
    }
  }
}
</script>

<style>

</style>
