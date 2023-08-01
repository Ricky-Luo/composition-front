<template>
  <v-container fluid style="max-width: 980px">
    <v-card elevation="0" dark style="margin-left:16px;" rounded="xl">
      <v-img src="../../assets/climber.jpg" cover class="align-center  text-white">
        <v-card-title style="color:white;" class="justify-center text-h2">
        一次练习，一次进步。
        </v-card-title>
        <v-card-subtitle style="display:flex;" class="justify-center text-h6">
          有效的反馈使写作进步更快<a style="margin-top:-2px;" href="../../../introduce.html" target="_blank"><v-icon color="var(--v-anchor-base)"> arrow_forward</v-icon></a>
        </v-card-subtitle>
    </v-img>
   
    </v-card>
    <v-row>
      <v-col
        v-for="(categoryName, i) in compositionCategories"
        :key="categoryName"
        cols="12"
      >
        <v-card
          elevation="0"
          :ref="'articleTypeCollectionCard' + i"
          color="#f5f5f7"
        >
          <v-card-title>{{ categoryName }}</v-card-title>
          <v-card-text
            style="overflow: scroll"
            :id="'noScrollBar' + i"
            @scroll="loadMore(categoryName, 'noScrollBar' + i)"
          >
            <div
              style="
                position: absolute;
                z-index: 2;
                display: none;
                flex-direction: column;
                justify-content: center;
                align-content: center;
                align-items: flex-start;
                height: 190px;
                padding-left: 18px;
              "
              :id="'controlLeftButton' + i"
            >
              <v-btn
                fab
                elevation="0"
                small
                style="
                  background-color: #e9e9eb;
                  color: rgba(134, 134, 139, 0.8);
                "
                transition="fade-transition"
                @click="scrollToLeft('noScrollBar' + i, i)"
              >
                <v-icon> arrow_back_ios </v-icon>
              </v-btn>
            </div>
            <div
              style="
                position: absolute;
                z-index: 2;
                right: 18px;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-content: center;
                align-items: flex-start;
                height: 190px;
              "
            >
              <v-btn
                fab
                elevation="0"
                small
                style="
                  background-color: #e9e9eb;
                  color: rgba(134, 134, 139, 0.8);
                "
                @click="scrollToRight('noScrollBar' + i, i)"
              >
                <v-icon> arrow_forward_ios </v-icon>
              </v-btn>
            </div>
            <div style="width: max-content">
              <template
                v-for="(composition, index) in compositionsByCategory[
                  categoryName
                ]['data']"
              >
                <v-hover :key="index">
                  <template v-slot="{ hover }">
                    <v-card
                      elevation="0"
                      height="190px"
                      style="
                        width: 188px;
                        margin-right: 10px;
                        margin-bottom: 20px;
                        float: left;
                        cursor:pointer;
                        transition: background 0.2s linear;
                      "
                      :class="hover ? 'single-task-hover' : 'single-task'"
                      @click="goToWritting(composition)"
                      rounded="xl"
                    >
                      <v-card-subtitle>{{
                        composition.compositionChineseTitle
                      }}</v-card-subtitle>
                      <v-card-text class="text-h6" style="color: #385f73">{{
                        composition.compositionEnglishTitle
                      }}</v-card-text>
                      <v-card-actions>
                        <v-spacer></v-spacer>
                        <!-- <v-btn
                          fab
                          x-small
                          :style="hover ? 'color:white;' : 'color:transparent;'"
                          :color="hover ? 'orange' : 'transparent'"
                          :elevation="hover ? 8 : 0"
                          @click="goToWritting(composition)"
                        >
                          <v-icon>create</v-icon>
                        </v-btn> -->
                      </v-card-actions>
                    </v-card>
                  </template>
                </v-hover>
              </template>
            </div>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import dataInterface from "../../utils/httpUtils";
export default {
  name: "WrittingTasks",
  data: () => ({
    cards: ["小作文", "大作文", "书信", "日常描述训练"],
    fullHeight: 700,
    showExpandButton: true,
    compositionCategories: [],
    compositionsByCategory: {},
    scrollAdjust: true,
  }),
  mounted() {
    this.fullHeight = window.screen.height - 174;
    this.getCompositionTopic();
  },
  methods: {
    expandArticleTypeCard(cardName) {
      console.log(this.$refs[cardName]);
      this.$refs[cardName][0].$el.style.height = this.fullHeight + "px";
      this.showExpandButton = false;
    },
    closeArticleTypeCard(cardName) {
      this.$refs[cardName][0].$el.style.height = 500 + "px";
      this.showExpandButton = true;
    },
    goToWritting(card) {
      window.open("/writting.html/#/writting?id=" + card.id);
    },
    // 获取作文集合
    getCompositionTopic() {
      var _self = this;
      // 正确的接口应该是这个，但是sql现在还没有写好。getCompositionsByUser
      dataInterface
        .postWithURL("/composition/getCompositionList")
        .then((res) => {
          var compositionsByCategory = {};
          var compositionCategories = [];
          res.data.forEach((e) => {
            if (compositionsByCategory[e.compositionTypeName]) {
              compositionsByCategory[e.compositionTypeName].data.push(e);
            } else {
              compositionsByCategory[e.compositionTypeName] = {
                startPosition: 20,
                data: []
              };
              compositionCategories.push(e.compositionTypeName);
              //记录
              compositionsByCategory[e.compositionTypeName].data.push(e);
            }
          });
          _self.compositionsByCategory = compositionsByCategory;
          _self.compositionCategories = compositionCategories;
        });
    },
    // 滚动到右边
    scrollToRight(id, i) {
      document.getElementById(id).scrollBy({
        top: 0,
        left: 600,
        behavior: "smooth",
      });
      var _self = this;
      setTimeout(() => {
        _self.showOrHideControlLeftButton(id, i);
      }, 500);
    },
    // 滚动到左边
    scrollToLeft(id, i) {
      document.getElementById(id).scrollBy({
        top: 0,
        left: -600,
        behavior: "smooth",
      });
      var _self = this;
      setTimeout(() => {
        _self.showOrHideControlLeftButton(id, i);
      }, 500);
    },
    // 单列加载更多
    loadMore(categoryName, divId) {
      if (
        this.scrollAdjust &&
        document.getElementById(divId).scrollLeft +
          5 +
          document.getElementById(divId).offsetWidth >
          document.getElementById(divId).scrollWidth
      ) {
        // 查询单个类别
        var _self = this;
        dataInterface
          .postWithURL("/composition/getCompositionsTopicsByTypeId", {
            typeId: this.compositionsByCategory[categoryName]['data'][0].compositionTypeId + '',
            startPosition: this.compositionsByCategory[categoryName].startPosition,
            endPosition: this.compositionsByCategory[categoryName].startPosition + 20,
          })
          .then((res) => {
            // 跟新相应的类别查询位置
            if (res.data.length > 0) {
              _self.compositionsByCategory[categoryName].data = _self.compositionsByCategory[categoryName].data.concat(res.data);
              _self.compositionsByCategory[categoryName].startPosition = _self.compositionsByCategory[categoryName].startPosition + 20;
            }
          });

        this.scrollAdjust = false;
        setTimeout(() => {
          _self.scrollAdjust = true;
        }, 1000);
      }
    },
    // 是否展示左边控制按钮
    showOrHideControlLeftButton(id, i) {
      if (document.getElementById(id).scrollLeft <= 0) {
        document.getElementById("controlLeftButton" + i).style.display = "none";
      } else {
        document.getElementById("controlLeftButton" + i).style.display = "flex";
      }
    },
  },
};
</script>
<style scoped>
/*定义滚动条高宽及背景*/
#noScrollBar0::-webkit-scrollbar {
  width: 0px;
  height: 0px;
  background-color: transparent;
}
/*定义滚动条*/
#noScrollBar0::-webkit-scrollbar-thumb {
  width: 0px;
  height: 0px;
  background-color: red;
  border-radius: 0px;
}
/*定义滚动条高宽及背景*/
#noScrollBar1::-webkit-scrollbar {
  width: 0px;
  height: 0px;
  background-color: transparent;
}
/*定义滚动条*/
#noScrollBar1::-webkit-scrollbar-thumb {
  width: 0px;
  height: 0px;
  background-color: red;
  border-radius: 0px;
}
/*定义滚动条高宽及背景*/
#noScrollBar2::-webkit-scrollbar {
  width: 0px;
  height: 0px;
  background-color: transparent;
}
/*定义滚动条*/
#noScrollBar2::-webkit-scrollbar-thumb {
  width: 0px;
  height: 0px;
  background-color: red;
  border-radius: 0px;
}
/*定义滚动条高宽及背景*/
#noScrollBar3::-webkit-scrollbar {
  width: 0px;
  height: 0px;
  background-color: transparent;
}
/*定义滚动条*/
#noScrollBar3::-webkit-scrollbar-thumb {
  width: 0px;
  height: 0px;
  background-color: red;
  border-radius: 0px;
}
/*定义滚动条高宽及背景*/
#noScrollBar4::-webkit-scrollbar {
  width: 0px;
  height: 0px;
  background-color: transparent;
}
/*定义滚动条*/
#noScrollBar4::-webkit-scrollbar-thumb {
  width: 0px;
  height: 0px;
  background-color: red;
  border-radius: 0px;
}
/*定义滚动条高宽及背景*/
#noScrollBar5::-webkit-scrollbar {
  width: 0px;
  height: 0px;
  background-color: transparent;
}
/*定义滚动条*/
#noScrollBar5::-webkit-scrollbar-thumb {
  width: 0px;
  height: 0px;
  background-color: red;
  border-radius: 0px;
}
/*定义滚动条高宽及背景*/
#noScrollBar6::-webkit-scrollbar {
  width: 0px;
  height: 0px;
  background-color: transparent;
}
/*定义滚动条*/
#noScrollBar6::-webkit-scrollbar-thumb {
  width: 0px;
  height: 0px;
  background-color: red;
  border-radius: 0px;
}
.single-task-hover{
  background: #e9e9eb !important;
}
.single-task{
  background: white;
}
</style>
