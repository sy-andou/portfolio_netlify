<template>
  <header class="header">
    <div class="container">
      <h1 class="header-logo">
        <NuxtLink to="/">SHO AND</NuxtLink>
      </h1>
      <nav class="gnav">
        <ul class="gnav-list">
          <li class="gnav-item">
            <NuxtLink v-if="$route.path !== '/'" to="/#works">Works</NuxtLink>
            <NuxtLink v-else to="#works">Works</NuxtLink>
          </li>
          <li class="gnav-item">
            <NuxtLink v-if="$route.path !== '/'" to="/#skill">Skill</NuxtLink>
            <NuxtLink v-else to="#skill">Skill</NuxtLink>
          </li>
          <li class="gnav-item">
            <NuxtLink v-if="$route.path !== '/'" to="/#about">About</NuxtLink
            ><NuxtLink v-else to="#about">About</NuxtLink>
          </li>
          <li class="gnav-item">
            <NuxtLink v-if="$route.path !== '/'" to="/#contact"
              >Contact</NuxtLink
            ><NuxtLink v-else to="#contact">Contact</NuxtLink>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>
<script></script>
<style scoped>
.header {
  position: relative;
  height: 270px;
  max-width: 960px;
  margin: 0 auto;
  background-color: #fff;
  box-shadow: 0 5px 10px -6px rgba(0, 0, 0, 0.1);
}
.header-logo {
  position: absolute;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
}
.header-logo a {
  font-size: 50px;
  font-weight: bold;
  font-family: Arial;
  line-height: 1.2;
  letter-spacing: 0.1em;
  color: #333;
}
.header-logo:after {
  display: inline-block;
  content: "portfolio";
  font-size: 15px;
  font-family: Comic Sans MS;
  transform: rotate(-25deg);
  transform-origin: -20px 30px;
  padding: 5px 10px;
  border-bottom: 1px solid aquamarine;
}
.gnav {
  position: absolute;
  right: 0px;
  bottom: 30px;
  width: 360px;
}
.gnav-list {
  display: flex;
  justify-content: space-between;
  list-style: none;
}
.gnav-item:not(:last-child) {
  margin-right: 20px;
}
.gnav-item a {
  position: relative;
  font-size: 15px;
  font-family: Courier New;
  display: inline-block;
  padding: 5px 0;
  transition: 0.3s;
  letter-spacing: 0.05em;
  color: #333;
}
.gnav-item a:after {
  position: absolute;
  bottom: 0;
  left: 50%;
  width: 0;
  height: 3px;
  content: "";
  transition: 0.3s;
  -webkit-transform: translateX(-50%);
  transform: translateX(-50%);
  background-color: #333;
}

.gnav-item a:hover:after {
  width: 100%;
}
@media screen and (max-width: 400px) {
  .header {
    height: 120px;
  }
  .header-logo a {
    font-size: 40px;
  }
  .header-logo:after {
    font-size: 12px;
  }
  .gnav {
    max-width: 320px;
    width: 90%;
    bottom: 10px;
  }
  .gnav-item:not(:last-child) {
    margin-right: 5px;
  }
}
</style>
