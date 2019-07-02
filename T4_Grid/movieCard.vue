<template>
  <div>
    <div class="swipe-slide">
      <div class="card">
        <div class="card-image">
          <img src="http://vorcdn.xiaodutv.com/9cb932b8ee02b0d73b63cfe9f2e562b5" alt>
        </div>
        <div class="card-content">
          <div class="floating-btn" @click="onMore">
            <div class="btn">
              <img src="./add to.svg" alt>
            </div>
          </div>
          <div class="card-title">无双</div>
          <div class="informs">
            <table class="table">
              <tr>
                <td class="table-title">评分</td>
                <td class="table-content">
                  <img src="./star.svg" alt>
                  <span>86</span>
                </td>
              </tr>
              <tr>
                <td class="table-title">演员</td>
                <td class="table-content">
                  <span>周润发</span>
                  <span>郭富城</span>
                  <span>张静初</span>
                  <span>庄文强</span>
                </td>
              </tr>
              <tr>
                <td class="table-title">导演</td>
                <td class="table-content">
                  <span>庄文强</span>
                </td>
              </tr>
            </table>
            <div class="more-info">
              <div class="title">故事梗概：</div>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad, facere molestiae? Quos qui cupiditate esse eius corrupti pariatur molestiae debitis eveniet distinctio voluptatibus necessitatibus magni, aliquid beatae a voluptatum molestias!Totam libero asperiores dicta quos iusto assumenda a similique, quia atque, at veniam sapiente! Laudantium eius perferendis eveniet vel numquam ad neque possimus est. Debitis eveniet aut maxime voluptates ipsam.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      clicked: false
    };
  },
  methods: {
    onMore() {
      if (!this.clicked) {
        document.querySelector(".card-image").style.height = "70px";
        document.querySelector(".floating-btn .btn img").style.transform =
          "rotate(44deg)";
      } else {
        document.querySelector(".card-image").style.height = "412px";
        document.querySelector(".floating-btn .btn img").style.transform =
          "rotate(0deg)";
      }
      this.clicked = !this.clicked;
    }
  }
};
</script>

<style>
body {
  background-color: #ccc;
}
.swipe-slide {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.card {
  height: 614px;
  width: 364px;
  border-radius: 2px;
  overflow: hidden;
}
.card-image {
  transition: ease-in-out 0.2s;
  height: 412px;
  /* height: 70px; */
  overflow: hidden;
}
.card-image img {
  margin-top: -30px;
  width: 100%;
}
.card-content {
  transition: ease-in-out 0.2s;
  /* height: 100vh; */
  background-color: #fff;
  padding: 24px;
  font-size: 24px;
  font-weight: lighter;
  position: relative;
}
.floating-btn {
  position: absolute;
  top: -28px;
  right: 20px;
}
.floating-btn .btn {
  cursor: pointer;
  transition: ease-in-out 0.2s;
  background: #2d8cf0;
  border-radius: 50px;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14),
    0 3px 1px -2px rgba(0, 0, 0, 0.12), 0 1px 5px 0 rgba(0, 0, 0, 0.2);
}
.floating-btn .btn img {
  transition: ease-in-out 0.2s;
  width: 16px;
  padding: 20px;
  vertical-align: middle;
}
.card-title {
  margin-bottom: 20px;
}
.table {
  font-size: 16px;
}
.table tr {
  line-height: 2;
}
.table-content img {
  width: 16px;
  padding-right: 5px;
}
.table-content span {
  padding-right: 10px;
}
.table-title {
  padding-right: 20px;
}
.floating-btn .btn:hover {
  transform: scale(1.1);
}
.more-info {
  margin-top: 20px;
}
.more-info p {
  font-size: 15px;
}
</style>
