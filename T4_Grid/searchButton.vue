<template>
  <div class="search-box">
    <input class="search-text" type="text" placeholder="搜索喜爱电影....">
    <a class="search-btn">
      <i class="fa fa-search" aria-hidden="true"></i>
    </a>
  </div>
</template>

<script>
export default {

}
</script>

<style>
@import url('https://cdn.bootcss.com/font-awesome/5.8.1/css/all.css');
.search-box{
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-70%,0); 
  /* NOTE: translate 抵消元素本身宽度 */
  background-color: #03A9F4;
  height: 40px;
  border-radius: 40px;
  padding: 10px;
}
.search-box:hover > .search-text{
  width: 240px;

}
.search-box:hover > .search-btn{
  scale: (0.95);
  box-shadow: 0 5px 10px rgba(0,0,0,0.2);
}
.search-btn{
  transition: 0.4s;
  text-decoration: none;
  color: #fff;
  width: 40px;
  height: 40px;
  float: right;
  border-radius: 50%;
  background-color: #03A9F4;
  display: flex;
  justify-content: center;
  align-items: center;
}
.search-text{
  color: #fff;
  border: none;
  background: none;
  outline: none;
  float: left;
  padding: 0;
  font-size: 16px;
  transition: 0.4s;
  line-height: 40px;
  width:0;
}
</style>
