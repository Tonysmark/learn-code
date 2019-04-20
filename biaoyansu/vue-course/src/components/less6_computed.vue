<template>
  <div>
    <h2>Computed 计算属性</h2>
  
  <div class="content">
    <table>
      <th>学科</th>
      <th>成绩</th>
      <tr>
        <td>数学</td>
        <td><input type="text" v-model.number="math"></td>
      </tr>
      <tr>
        <td>物理</td>
        <td><input type="text" v-model.number="physics"></td>
      </tr>
      <tr>
        <td>英语</td>
        <td><input type="text" v-model.number="english"></td>
      </tr>
      <tr>
        <td>总分</td>
        <td>{{sum}}</td>
      </tr>
      <tr>
        <td>均分</td>
        <td>
          {{ave}}
        </td>
      </tr>
    </table>
  </div>
  </div>
</template>
<script>
export default {
  data(){
    return{
      math:90,
      physics:80,
      english:90,
    }
  }
  ,computed:{
    sum:function(){
      return this.math+this.physics+this.english
    },
    ave:function(){
      return Math.round(this.sum/3)
    }
  }
};
</script>
<style lang="less">
table{
  text-align: center;
}
</style>