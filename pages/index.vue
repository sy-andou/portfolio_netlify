<template>
  <div>
    <main class="content">
      <!-- mv -->
      <div class="mv">
        <div class="mv-container">
          <p class="mv-title">Web App Enginner</p>
          <p class="mv-subtitle">SHO AND</p>
          <p class="mv-text">
            お客様自身も気づかない課題を探し出し、<br />
            心から満足いただけるアプリケーションを開発いたします。<br />
          </p>
        </div>
      </div>
      <!-- /mv -->
      <!-- works -->
      <section class="works section" id="works">
        <div class="container">
          <h2 class="title">WORKS</h2>
          <div class="works-list">
            <NuxtLink
              v-bind:to="{
                name: 'detail-workId',
                params: { workId: workList.id },
              }"
              v-for="workList in $store.state.works.workLists"
              v-bind:key="workList.id"
              class="works-item"
            >
              <div class="works-img">
                <img v-bind:src="workList.images[0]" />
              </div>
              <p class="works-name">{{ workList.title }}</p>
              <p class="works-info">Design / Coding(Responsive)</p>
            </NuxtLink>
          </div>
        </div>
      </section>
      <!-- /works -->
      <!-- skill -->
      <section class="skill section" id="skill">
        <div class="container">
          <h2 class="title">SKILL</h2>
          <div class="skill-list">
            <div
              v-for="skillList in $store.state.skills.skillLists"
              v-bind:key="skillList.id"
              class="skill-item"
            >
              <p class="skill-img"><img v-bind:src="skillList.img_pass" /></p>
              <div class="skill-body">
                <h3 class="skill-name">{{ skillList.name }}</h3>
              </div>
            </div>
          </div>
        </div>
      </section>
      <!-- /skill -->

      <!-- about -->
      <section class="about section" id="about">
        <div class="container">
          <h2 class="title">ABOUT</h2>
          <div class="profile">
            <p class="profile-img">
              <img src="img/profile.jpg" alt="" />
            </p>
            <div class="profile-body">
              <h5>SHO AND</h5>
              <p>
                WEBアプリケーション開発エンジニア。2021年6月よりプログラミング学習開始。現在は副業としてアプリケーションを開発中。自分の描いたコードの妥当性が気になり他の方と一緒にプログラミングを実施したいという思いから、プログラミングを本業にしたいと考え転職活動中。
              </p>
              <p>
                フロントエンド、バックエンドをそれぞれNuxt.jsおよびLaravelで開発し、APIを用いたSingle
                Page Applicationを作成しております。
              </p>
            </div>
          </div>
        </div>
      </section>
      <!-- /about -->

      <!-- contact -->
      <section class="contact section" id="contact">
        <div class="container">
          <h2 class="title">CONTACT</h2>
          <p class="lead">
            お問い合わせは、<br class="sp-only" />メールにてお願いいたします。
          </p>
          <div class="contact-list">
            <span class="contact-item">kakeru.the.solo@gmail.com</span>
          </div>
        </div>
      </section>
      <!-- /contact -->
    </main>
  </div>
</template>

<script>
export default {
  created() {},
};
</script>
<style scoped>
/*レイアウト*/
.wrapper {
}

.section {
  max-width: 960px;
  margin: 0 auto;
  padding: 90px 0;
}

.section:nth-of-type(odd) {
  background-color: #f7f7f7;
}

.container {
  max-width: 1340px;
  margin: 0 auto;
  padding: 0 40px;
}

/*見出し*/
.title {
  font-size: 50px;
  font-weight: normal;
  font-family: Courier New;
  line-height: 1;
  margin-bottom: 40px;
  text-align: center;
  letter-spacing: 0.05em;
  color: #333;
}

.lead {
  font-size: 16px;
  line-height: 1.8;
  margin-bottom: 30px;
}

/*メインビジュアル*/
.mv {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 85vh;
  text-align: center;
  background-image: url(./static/img/top-img.jpg);
}

.mv-container {
  padding: 0 40px;
}

.mv-title {
  font-size: 60px;
  font-weight: bold;
  line-height: 1.2;
  margin-bottom: 5px;
  letter-spacing: 0.1em;
  text-shadow: 2px 2px 4px gray;
}
.mv-subtitle {
  font-size: 20px;
  font-weight: bold;
  line-height: 1;
  margin-bottom: 40px;
  letter-spacing: 0.08em;
  text-shadow: 2px 2px 4px gray;
}

.mv-text {
  font-size: 16px;
  line-height: 1.8;
  text-shadow: 2px 2px 4px gray;
}

/*Works*/
.works-list {
  display: flex;
  flex-wrap: wrap;
  margin-bottom: -40px;
}

.works-item {
  width: 31.74603%;
  margin-right: 1.5873%;
  margin-bottom: 40px;
  color: #333;
}

.works-item:hover {
  opacity: 0.9;
}

.works-item:nth-of-type(3n) {
  margin-right: 0;
}

.works-img img {
  border: 1px solid #e6e6e6;
}

.works-name {
  font-size: 12px;
  font-weight: bold;
  margin-top: 8px;
}

.works-info {
  font-size: 10px;
  margin-top: 5px;
}
/*Skill*/
.skill-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  width: 100%;
  margin: 0 auto -50px auto;
}
.skill-item {
  display: flex;
  align-items: center;
  width: 33%;
  margin: 0 0 50px 0;
}
.skill-img {
  display: inline-block;
  width: 30%;
  height: auto;
  margin: 0 20px;
}
.skill-body {
  flex: 1;
}
.skill-name {
  width: auto;
  text-align: center;
  margin-bottom: 10px;
}
/*About*/
.profile {
  display: flex;
  flex-wrap: wrap;
  max-width: 800px;
  margin: 0 auto;
}
.profile-img {
  width: 20%;
  margin-right: 30px;
  border-radius: 50%;
}
.profile-img img {
  border-radius: 50%;
}
.profile-body {
  flex: 1;
}

.profile-body p {
  font-size: 15px;
  line-height: 1.8;
}

.profile-body p:not(:last-child) {
  margin-bottom: 30px;
}

/*Contact*/
.contact {
  text-align: center;
}

.contact-item:not(:last-child) {
  margin-right: 10px;
}

.contact-text {
  margin-top: 10px;
}
/*ページトップ*/
.page-top {
  font-weight: bold;
  padding: 10px;
  cursor: pointer;
  text-align: center;
  background-color: #4c4c4c;
}

.page-top .material-icons-outlined {
  vertical-align: bottom;
  color: #fff;
}
@media screen and (max-width: 400px) {
  .mv {
    height: 50vh;
  }
  .works-list {
    flex-direction: column;
  }
  .works-item {
    width: 100%;
    margin-right: 0;
  }
  .skill-list {
    flex-direction: column;
    width: 100%;
    margin: 0 auto -50px auto;
  }
  .skill-item {
    width: 100%;
    margin: 0 0 50px 0;
  }
  .profile {
    flex-direction: column;
  }
  .profile-img {
    width: 80%;
    margin: 0 auto;
  }
  .profile-body h5 {
    margin: 20px 0 30px 0;
    text-align: center;
  }
}
</style>
