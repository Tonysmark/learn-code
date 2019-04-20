<template>
  <div class="content">
    <div class="card">
      <div class="cover-wrapper">
        <img :src="movie.CoverUrl" alt>
        <div class="star">⭐ 8.2</div>
      </div>
      <div class="card-infos">
        <h2>{{movie.title}}</h2>
      </div>
    </div>
    <div class="card">
      <div class="cover-wrapper">
        <img :src="movie.CoverUrl" alt>
        <div class="star">⭐ 8.2</div>
      </div>
      <div class="card-infos">
        <h2>{{movie.title}}</h2>
      </div>
    </div>
    <div class="card">
      <div class="cover-wrapper">
        <img :src="movie.CoverUrl" alt>
        <div class="star">⭐ 8.2</div>
      </div>
      <div class="card-infos">
        <h2>{{movie.title}}</h2>
      </div>
    </div>
    <div class="card">
      <div class="cover-wrapper">
        <img :src="movie.CoverUrl" alt>
        <div class="star">⭐ 8.2</div>
      </div>
      <div class="card-infos">
        <h2>{{movie.title}}</h2>
      </div>
    </div>
    <div class="card">
      <div class="cover-wrapper">
        <img :src="movie.CoverUrl" alt>
        <div class="star">⭐ 8.2</div>
      </div>
      <div class="card-infos">
        <h2>{{movie.title}}</h2>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      movie: {
        id: "27202819",
        title: "反贪风暴4",
        score: "6.3",
        star: "35",
        release: "2019",
        duration: "100分钟",
        region: "香港 中国大陆",
        director: "林德禄 ",
        actors: "古天乐 / 郑嘉颖 / 林峯",
        CoverUrl:
          "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2551353482.jpg"
      }
    };
  },
  methods: {}
};
</script>

<style>
body {
  height: 100vh;
  background-color: #eff3f5;
}
.content {
  justify-content: center;
  display: flex;
  flex-direction: row;
  position: absolute;
  flex-wrap: wrap;
}
.card {
  margin: 0 3rem;
  width: 270px;
  transition: 0.2s;
  display: flex;
  flex-direction: row;
  overflow: hidden;
}
.cover-wrapper {
  min-width: 270px;
  height: 380px;
  overflow: hidden;
  border-radius: 5px;
  position: relative;
  transition: 0.3s;
}
.card:hover .cover-wrapper {
  transform: scale(0.9);
}
.star {
  position: absolute;
  top: 5px;
  right: 5px;
  background-color: rgba(255, 255, 255, 0.8);
  padding: 3px 5px;
  border-radius: 5px;
}
img {
  transition: 0.3s;
}
.card-infos {
  min-width: 300px;
}
</style>
