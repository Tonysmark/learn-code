<template>
  <div class="container">
    <div class="card">
      <img class="cover" src="../assets/3a836076b5227ef5a2059d9844a26098517279.jpg" alt>
      <div class="infos">
        <div class="title">
          <h1>雷霆沙赞！</h1>
          <span class="sub-title">SHEZAM!</span>
          <span class="time">104分钟</span>
        </div>
        <div class="content">
          <div class="douban align-content">
            <img src="../assets/svgs/douban.svg" alt>
            <span class="rate">
              <Rate allow-half disabled show-text v-model="doubanRate"/>
            </span>
            <span class="rating-people">10万用户评分</span>
          </div>
          <div class="maoyan align-content">
            <img src="../assets/svgs/icon_24-猫眼电影.svg" alt>
            <span class="rate">
              <Rate allow-half disabled show-text v-model="maoyanRate"/>
            </span>
            <span class="rating-people">10万用户评分</span>
          </div>
          <div class="imdb align-content">
            <img src="../assets/svgs/imdb.svg" alt>
            <span class="rate">
              <Rate allow-half disabled show-text v-model="imdbRate"/>
            </span>
            <span class="rating-people">10万用户评分</span>
          </div>
          <div class="type align-content">
            <img src="../assets/svgs/type.svg" alt>
            <span class="info-text">动作，冒险，科幻，3D</span>
          </div>
          <div class="release-date align-content">
            <img src="../assets/svgs/time.svg" alt>
            <span class="info-text">2017-03-18</span>
          </div>
        </div>
      </div>
      <div class="comments">
        <Carousel loop>
          <CarouselItem v-for="comment in comments" :key="comment.id">
            <div class="carousel-content">
              <div class="content">{{comment.short}}</div>
            </div>
          </CarouselItem>
        </Carousel>
      </div>
    </div>
    <div class="report-card">
      <div class="title">
        <h2>剧情介绍</h2>
        <div class="report-content">{{reports}}</div>
      </div>
    <ul v-for="comment in comments" :key="comment.id">
      <li>
        {{comment.full==null?comment.short:comment.full}}
      </li>
    </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      doubanRate: 4.5,
      maoyanRate: 3.7,
      imdbRate: 4,
      comments: [
        {
          id: 0,
          full:
            "谁能想到索尼居然在2018年的最后一个月用一部超级英雄动画挑战了迪士尼在动画奖项上的霸权？\n虽然主题上还是老调重弹，但动画在内容和形式上的选择远比真人影片自由。漫画式的视觉呈现，极具个性的色彩搭配，诞生了最贴近漫画原作的蜘蛛侠作品。六个蜘蛛侠各具特色（其实不止六个），但颓废版的Peter Parker无疑是我的最爱：一个步入中年，陷入人生低谷，却依然有着自我牺牲精神的英雄。哪怕嘴里说着不要让我听到“能力越大，责任越大”，却还是身体力行地实践着这句话，蜘蛛侠精神的最完美体现。\n最佳蜘蛛侠电影！最佳斯坦李彩蛋！最佳片尾彩蛋！"
        },
        {
          id: 1,
          full:
            "每一分钟都是惊喜！爸爸我爱你、零鸭蛋、卖蜘蛛服的收银员斯坦·李、“让他良心不安！”、穿斗篷的蜘蛛侠、有肚腩的中年发福版蜘蛛侠、蜘猪侠…哈哈，先笑一会儿…“知道自己不是一个人的感觉真是太棒了” 整个观影心情就是：新奇-大笑-感动，此起彼伏接连不断。“最让我们难受的是，你不能每次都救得了人” 机甲蜘蛛侠装备损坏时的那个“爱你”，是堪比《月球》Gerty机器人出现落泪表情的感动瞬间。爸爸的那句 “有时候人和人的关系会变得疏远，但我不希望这发生在我和你身上” 简直让人暴毙。这部电影就连剪辑、配乐等技术都是动画里的一流，2018年度动画最佳！"
        },
        {
          id: 2,
          full:
            "1.电影讲述男孩迈尔斯被受到辐射的杨永信咬了，变成磁爆步兵、雷电法王，获得“电击疗法”的技能，从而打败敌人的故事。\n2.白人、黑人、男人、女人、大人、小孩，甚至猪都当了蜘蛛侠，唯独没有中国人，建议封杀。\n3.从《独立日2》到《毒液》再到《蜘蛛侠：平行宇宙》，QQ的业务已经拓展到了外国、月球，以及其它宇宙，腾讯已经称霸银河系，成为宇宙第一企业。\n4.电影很戳泪点。\n号称“最屌丝”的超级英雄都穿上了OW联名AJ1，我看着自己的阿迪王默默哭出了声。\n5.一年死两次彼得·帕克，每次都有新感觉。\n【内地版片尾无彩蛋】\n"
        },
        { id: 3, short: "今年最好看的商业动画片，美漫改编电影的最完美形态。" },
        {
          id: 4,
          short:
            "已经对这种超级英雄寻找个人存在价值和成长蜕变的剧情产生免疫了，看着好累。"
        }
      ],
      reports:
        "印度影片《调音师》改编自2010年的同名法国高分悬疑短片。故事讲述了一直假装盲人的钢琴调音师阿卡什（Akash），在意外成为一起凶杀案的唯一“目击证人”后，所遭遇的种种出其不意的经历。影片故事波折惊奇，反转不断，是2018年度IMDb评分最高的印度影片。"
    };
  }
};
</script>

<style scoped lang="less">
.container {
  padding: 3rem;
  width: 80%;
  margin: 0 auto;
  height: 100vh;
  border: 1px solid #eee;
  .card {
    align-items: center;
    display: flex;
    flex-direction: row;
    padding: 5px;
    border-radius: 10px;
    // backdrop-filter: blur(15px);
    background-color: rgba(255, 255, 255, 0.8);
    margin: 0 auto;
    width: 90%;
    min-height: 300px;
    box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14),
      0 3px 1px -2px rgba(0, 0, 0, 0.12), 0 1px 5px 0 rgba(0, 0, 0, 0.2);
    .cover {
      border-radius: 10px;
      width: 15%;
      height: 15%;
      margin-right: 15px;
    }
    .infos {
      .title {
        h1 {
          color: #000;
          display: inline;
        }
        .sub-title {
          margin-right: 5px;
          font-size: 20px;
        }
        .time {
          font-size: 17px;
        }
      }
      .content {
        .ivu-rate,
        .ivu-rate-text {
          margin-left: 0;
          font-size: 25px;
        }
        .align-content {
          display: flex;
          align-items: center;
          img {
            width: 30px;
            margin-right: 10px;
          }
          .info-text {
            margin-left: 7px;
            font-size: 14px;
            margin-bottom: -5px;
          }
          .rating-people {
            margin-left: 10px;
            margin-bottom: -5px;
            font-size: 14px;
          }
        }
        .douban,
        .maoyan,
        .imdb {
          margin-top: 5px;
        }
        .type,
        .release-date {
          margin: 14px 0;
        }
      }
    }
    .ivu-carousel {
      margin-left: 2rem;
      padding-left: 2rem;
      border-left: 1px solid #ccc;
      width: 600px;
      .carousel-content {
        min-height: 260px;
        display: flex;
        justify-content: center;
        align-items: center;
        .content {
          text-align: center;
        }
      }
    }
  }
  .report-card {
    padding: 15px 20px;
    border-radius: 10px;
    background-color: #fff;
    margin: 20px auto;
    width: 90%;
    h2 {
      padding: 5px 0;
      border-bottom: 1px solid #ccc;
    }
    .report-content {
      margin-top: 1rem;
    }
  }
}
</style>
