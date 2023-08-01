<template>
  <v-app >
    <v-main style="background: #f5f5f7;">
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
                href="/"
                data-analytics-title="store"
              >
                <span class="ac-gn-link-text">已用时：{{time}} &nbsp; min</span>
              </a>
            </li>
            <li class="ac-gn-item ac-gn-item-menu ac-gn-watch" style="    display: flex;flex-direction: column;justify-content: center;">
              <v-btn right rounded color="primary" dark small> 
                发送给老师批改
                <v-icon small right>send</v-icon>
                  </v-btn>
            </li>
          </ul>
        </div>
      </nav>
      <v-expand-transition>
              <div v-show="showTips" style="width:100%;height:34px;background:#0071e3;color:white;text-align:center;line-height:34px;font-size:14px;">
        <span>写作内容会被实时保存至云端，安全可靠。</span>
        <a style="color:white;margin-left:12px;margin-right:12px;text-decoration:underline;" @click="NoFurtherRemind">不再提示</a>
        <v-icon small color="white" @click="closeTips" >close</v-icon>
      </div>
            </v-expand-transition>
      <v-container fluid id="container">
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
  name: "AppForWritting",

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
    time:0,
    showTips:false,
  }),
  mounted() {
    document.getElementById("container").style.height = document.body.clientHeight - 45 + 'px';
    this.calTime();
    var _self = this;
    setTimeout(() => {
      _self.showTips = true;  
    }, 1000);
  },
  methods: {
    // 计时
    calTime() {
      var _self = this;
      setInterval(() => {
        _self.time++;
      }, 60000);
    },
    // 关闭提示
    closeTips() {
      this.showTips = false;
    },
    // 不再提醒
    NoFurtherRemind() {

    }
  }
};
</script>
<style scoped>
.v-application ul {
  padding-left: 0px;
}
#ac-globalnav {
  /* position: absolute; */
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