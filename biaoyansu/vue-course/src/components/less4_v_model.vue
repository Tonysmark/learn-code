<template>
  <div>
    <h2>V-model</h2>
    <div class="content">
      <h4>获取用户输入</h4>
      <input type="text" v-model="name">
      {{name}}
      <div>这里双向绑定的数据,必须在data里有默认值</div>
      <div>model.lazy 当输入框blur的时候才会更新</div>
      <div>model.trim 清除输入框空格</div>
      <div>model.number 字符串转整型</div>
      <label>
        男
        <input type="radio" v-model="sex" value="male">
      </label>
      <label>
        女
        <input v-model="sex" value="female" type="radio">
      </label>
      {{sex}}
      <div>你来自哪里???</div>
      <select v-model="from">
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
      </select>
      {{from}}
      <div>你要去哪里???</div>
      <select v-model="dest" multiple>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
      </select>
      {{dest}}
    </div>
  </div>
</template>
<script>
export default {
  name: "less4",
  data() {
    return {
      name: "王花花",
      sex: "female",
      from: null,
      dest:[]
    };
  }
};
</script>
