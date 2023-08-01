<template>
  <v-app>
    <v-main style="background: #f5f5f7">
      <nav
        id="ac-globalnav"
        role="navigation"
        aria-label="全部网站"
        data-hires="false"
        data-analytics-region="global nav"
        lang="zh-CN"
        dir="ltr"
      >
        <div class="ac-gn-content">
          <ul class="ac-gn-list">
            <li class="ac-gn-item ac-gn-item-menu ac-gn-store">
              <a
                class="ac-gn-link ac-gn-link-store"
                href="/index"
                data-analytics-title="store"
              >
                <img style="width:36px; margin-top:4px; border-radius:12px; margin-left:-24px;" src="../src/assets/logo.png">
              </a>
            </li>

            <li class="ac-gn-item ac-gn-item-menu ac-gn-store">
              <a
                class="ac-gn-link ac-gn-link-store"
                href="/index"
                data-analytics-title="store"
              >
                <span class="ac-gn-link-text">题库</span>
              </a>
            </li>
            <li class="ac-gn-item ac-gn-item-menu ac-gn-mac">
              <a
                class="ac-gn-link ac-gn-link-mac"
                href="/WrittingHistory"
                data-analytics-title="mac"
              >
                <span class="ac-gn-link-text">写作记录</span>
              </a>
            </li>
            <li class="ac-gn-item ac-gn-item-menu ac-gn-mac">
              <a
                class="ac-gn-link ac-gn-link-mac"
                href="/CompositionsForMark"
                data-analytics-title="mac"
              >
                <span class="ac-gn-link-text">批改</span>
              </a>
            </li>
            <li class="ac-gn-item ac-gn-item-menu ac-gn-ipad">
              <a
                class="ac-gn-link ac-gn-link-ipad"
                href="/ipad/"
                data-analytics-title="ipad"
              >
                <span class="ac-gn-link-text">发现</span>
              </a>
            </li>
            <li class="ac-gn-item ac-gn-item-menu ac-gn-iphone">
              <a
                class="ac-gn-link ac-gn-link-iphone"
                href="/iphone/"
                data-analytics-title="iphone"
              >
                <span class="ac-gn-link-text">商城</span>
              </a>
            </li>
            <li class="ac-gn-item ac-gn-item-menu ac-gn-watch">
              <a
                class="ac-gn-link ac-gn-link-watch"
                href="/watch/"
                data-analytics-title="watch"
              >
                <span class="ac-gn-link-text">我</span>
              </a>
            </li>
          </ul>
        </div>
      </nav>

      <v-container fluid style="margin-top: 45px;">
        <keep-alive>
          <router-view> </router-view>
        </keep-alive>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
// import HelloWorld from './components/HelloWorld';

export default {
  name: "App",

  components: {
    // HelloWorld,
  },

  data: () => ({
    cards: ["Today", "Yesterday"],
    drawer: null,
    links: [
      ["mdi-inbox-arrow-down", "练习"],
      ["mdi-send", "成长"],
      // ['mdi-delete', 'Trash'],
      // ['mdi-alert-octagon', 'Spam'],
    ],
  }),
};
</script>
<style scoped>
#ac-globalnav {
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  z-index: 9999;
  display: block;
  margin: 0;
  width: 100%;
  min-width: 1024px;
  height: 48px;
  max-height: 44px;
  background: rgba(0, 0, 0, 0.8);
  font-size: 17px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
#ac-globalnav .ac-gn-content {
  margin: 0 auto;
  max-width: 980px;
  padding: 0 22px;
  position: relative;
  z-index: 2;
  padding-left: max(22px, env(safe-area-inset-left));
  padding-right: max(22px, env(safe-area-inset-right));
}
#ac-globalnav .ac-gn-header {
  display: none;
  position: absolute;
  z-index: 5;
  top: 0;
  left: 0;
  width: 100%;
  height: 48px;
  overflow: hidden;
}
#ac-globalnav .ac-gn-list {
  cursor: default;
  margin: 0 -8px;
  width: auto;
  height: 44px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: flex-start;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
#ac-globalnav .ac-gn-item {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  display: inline-block;
  position: relative;
  height: 44px;
  z-index: 1;
  vertical-align: top;
}
#ac-globalnav .ac-gn-link {
  font-size: 12px;
  line-height: 3.66667;
  font-weight: 400;
  letter-spacing: -0.01em;
  font-family: "SF Pro Text", "Myriad Set Pro", "SF Pro Icons", "Helvetica Neue",
    "Helvetica", "Arial", sans-serif;
  color: #f5f5f7;
  position: relative;
  z-index: 1;
  display: inline-block;
  padding: 0 16px;
  height: 44px;
  opacity: 0.8;
  background: no-repeat;
  text-decoration: none;
  white-space: nowrap;
  -webkit-transition: opacity 0.3s cubic-bezier(0.25, 0.1, 0.25, 1);
  transition: opacity 0.3s cubic-bezier(0.25, 0.1, 0.25, 1);
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  outline-offset: -7px;
}
</style>