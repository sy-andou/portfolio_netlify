<template>
  <main class="content">
    <article class="article">
      <div class="article-container">
        <h2 class="article-title">{{ workList.title }}</h2>
        <div class="article-body">
          <div class="img-container">
            <div
              v-show="index === imgPage"
              v-on:click="nextPage"
              v-for="(img, index) in workList.images"
              v-bind:key="index"
              class="works-img"
            >
              <img v-bind:src="img" />
            </div>
            <div v-on:click="nextPage" class="nextPage-btn">></div>
            <div v-on:click="prevPage" class="prevPage-btn"><</div>
            <div class="swiper-container">
              <span
                v-for="n in 5"
                v-on:click="changePage(n - 1)"
                v-bind:class="{ black: imgPage == n - 1 }"
                class="swiper-page-bullet"
              ></span>
            </div>
          </div>
          <div class="container">
            <p>{{ workList.detail }}</p>
          </div>
          <div class="container">
            <h3>URL</h3>
            <div>
              <a v-bind:href="workList.URL" target="_blank" rel="noopener">{{
                workList.URL
              }}</a>
            </div>
          </div>
          <div class="container">
            <h3>担当</h3>
            <div>
              <p>デザイン・DB設計・コーディング</p>
            </div>
          </div>
          <div class="container">
            <h3>言語・フレームワーク・インフラ</h3>
            <span
              v-for="(technology, index) in workList.technologies"
              v-bind:key="index"
            >
              <span>{{ technology }}、</span>
            </span>
          </div>
          <div class="container">
            <h3>githubリポジトリ</h3>
            <div>
              <p>フロントエンド</p>
              <a v-bind:href="workList.github_1">{{ workList.github_1 }}</a>
            </div>
            <div>
              <p>バックエンド</p>
              <a v-bind:href="workList.github_2">{{ workList.github_2 }}</a>
            </div>
          </div>
        </div>
        <div class="home-link">
          <NuxtLink to="/#works">Works一覧へ</NuxtLink>
        </div>
      </div>
    </article>
  </main>
</template>
<script>
export default {
  data() {
    return {
      workList: {},
      imgPage: 0,
    };
  },
  methods: {
    getWorkList() {
      this.workList = this.$store.state.works.workLists.find((workList) => {
        return workList.id == this.$route.params.workId;
      });
    },
    nextPage() {
      if (this.imgPage + 1 >= this.workList.images.length) {
        this.imgPage = 0;
      } else {
        this.imgPage++;
      }
    },
    prevPage() {
      if (this.imgPage <= 0) {
        this.imgPage = this.workList.images.length - 1;
      } else {
        this.imgPage--;
      }
    },
    changePage(number) {
      this.imgPage = number;
    },
  },
  created() {
    this.getWorkList();
  },
};
</script>
<style scoped>
.img-container {
  position: relative;
  max-width: 960px;
  max-height: 720px;
  margin: 0 auto;
  text-align: center;
}
.img-container img {
  height: 80%;
  width: 85%;
  cursor: pointer;
}
.nextPage-btn {
  position: absolute;
  top: 40%;
  right: 0;
  font-size: 50px;
  opacity: 0.7;
  cursor: pointer;
}
.prevPage-btn {
  position: absolute;
  top: 40%;
  left: 0;
  font-size: 50px;
  opacity: 0.7;
  cursor: pointer;
}
.swiper-container {
  margin: 20px auto;
}
.swiper-page-bullet {
  display: inline-block;
  height: 5px;
  width: 50px;
  margin: 0 10px;
  background-color: black;
  opacity: 0.4;
  cursor: pointer;
}
.black {
  opacity: 1;
}
.article {
  padding: 80px 0;
}

.article-container {
  max-width: 1040px;
  margin: 0 auto;
  padding: 0 20px;
}

.article-title {
  font-size: 40px;
  margin-bottom: 30px;
  text-align: center;
}

.article-body {
  max-width: 720px;
  margin: 0 auto;
  margin-bottom: 80px;
}
.container {
  margin: 50px 0;
}
.container > div {
  margin: 20px 0;
}
.container > span {
  display: inline-block;
  margin: 20px 0;
}
.article-body h3 {
  position: relative;
  font-size: 18px;
  margin-bottom: 5px;
  padding-left: 1em;
}

.article-body h3:not(:first-child) {
  margin-top: 50px;
}

.article-body h3::before {
  position: absolute;
  top: 0;
  left: 0;
  width: 4px;
  height: 100%;
  content: "";
  border-radius: 3px;
  background-color: #333;
}

.article-body p {
  font-size: 15px;
  line-height: 1.8;
}

.home-link {
  text-align: center;
}
@media screen and (max-width: 767px) {
  .article {
    padding: 50px 0;
  }

  .article-body h3 {
    font-size: 16px;
    padding-left: 0.8em;
  }

  .article-body h3:not(:first-child) {
    margin-top: 30px;
  }

  .article-body p {
    font-size: 14px;
    line-height: 1.7;
    margin-bottom: 20px;
  }
}
@media screen and (max-width: 400px) {
  .swiper-page-bullet {
    height: 3px;
    width: 20px;
    margin: 0 5px;
  }
  .nextPage-btn {
    position: absolute;
    top: 30%;
    right: 0;
    font-size: 30px;
  }
  .prevPage-btn {
    position: absolute;
    top: 30%;
    left: 0;
    font-size: 30px;
  }
}
</style>
