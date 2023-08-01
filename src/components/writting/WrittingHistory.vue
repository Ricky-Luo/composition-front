<template>
  <v-container fluid style="max-width:980px;">
    <v-card elevation="0" color="#f5f5f7">
      <v-card-title
        >我的写作记录
      </v-card-title>
      <v-card-text style="overflow: scroll">
        <v-data-table
          :headers="compositionsHeaders"
          :items="historyData"
          :items-per-page="15"
        >
          <template v-slot:item.action="{ items }">
            <a @click="goToDetail(items)">
              查看
            </a>
          </template>
        </v-data-table>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
import dataInterface from "../../utils/httpUtils";
export default {
  name: "writtingHistory",
  data: () => ({
    fullHeight: 700,
    showExpandButton: true,
    compositionCategories: [],
    compositionsByCategory: {},
    compositionsHeaders: [
      {
        text: "题目",
        sortable: false,
        value: "compositionEnglishTitle",
      },
      {
        text: "类型",
        sortable: false,
        value: "compositionType",
      },
      {
        text: "得分",
        sortable: false,
        value: "score",
      },
      {
        text: "作文反馈",
        sortable: false,
        value: "action",
      },
    ],
    historyData: [
      {
        compositionChineseTitle: "lalal lalal lalal lalal lalal lalal",
        compositionEnglishTitle: "最佳教育方式",
        score: "8",
      },
      {
        compositionChineseTitle: "lalal lalal lalal lalal lalal lalal",
        compositionEnglishTitle: "最佳教育方式",
        score: "未批改",
      },
      {
        compositionChineseTitle: "lalal lalal lalal lalal lalal lalal",
        compositionEnglishTitle: "最佳教育方式",
        score: "8",
      },
      {
        compositionChineseTitle: "lalal lalal lalal lalal lalal lalal",
        compositionEnglishTitle: "最佳教育方式",
        score: "8",
      },
      {
        compositionChineseTitle: "lalal lalal lalal lalal lalal lalal",
        compositionEnglishTitle: "最佳教育方式",
        score: "8",
      },{
        compositionChineseTitle: "lalal lalal lalal lalal lalal lalal",
        compositionEnglishTitle: "最佳教育方式",
        score: "8",
      },{
        compositionChineseTitle: "lalal lalal lalal lalal lalal lalal",
        compositionEnglishTitle: "最佳教育方式",
        score: "8",
      },{
        compositionChineseTitle: "lalal lalal lalal lalal lalal lalal",
        compositionEnglishTitle: "最佳教育方式",
        score: "8",
      },{
        compositionChineseTitle: "lalal lalal lalal lalal lalal lalal",
        compositionEnglishTitle: "最佳教育方式",
        score: "8",
      },{
        compositionChineseTitle: "lalal lalal lalal lalal lalal lalal",
        compositionEnglishTitle: "最佳教育方式",
        score: "8",
      },{
        compositionChineseTitle: "lalal lalal lalal lalal lalal lalal",
        compositionEnglishTitle: "最佳教育方式",
        score: "8",
      },{
        compositionChineseTitle: "lalal lalal lalal lalal lalal lalal",
        compositionEnglishTitle: "最佳教育方式",
        score: "8",
      },{
        compositionChineseTitle: "lalal lalal lalal lalal lalal lalal",
        compositionEnglishTitle: "最佳教育方式",
        score: "8",
      },{
        compositionChineseTitle: "lalal lalal lalal lalal lalal lalal",
        compositionEnglishTitle: "最佳教育方式",
        score: "8",
      },{
        compositionChineseTitle: "lalal lalal lalal lalal lalal lalal",
        compositionEnglishTitle: "最佳教育方式",
        score: "8",
      },{
        compositionChineseTitle: "lalal lalal lalal lalal lalal lalal",
        compositionEnglishTitle: "最佳教育方式",
        score: "8",
      },{
        compositionChineseTitle: "lalal lalal lalal lalal lalal lalal",
        compositionEnglishTitle: "最佳教育方式",
        score: "8",
      },{
        compositionChineseTitle: "lalal lalal lalal lalal lalal lalal",
        compositionEnglishTitle: "最佳教育方式",
        score: "8",
      },{
        compositionChineseTitle: "lalal lalal lalal lalal lalal lalal",
        compositionEnglishTitle: "最佳教育方式",
        score: "8",
      },
    ],
  }),
  mounted() {
    this.fullHeight = window.screen.height - 174;
    // this.getCompositionTopic();
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
      console.log(card);
      window.open("/writting.html/#/writtingResult");
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
              compositionsByCategory[e.compositionTypeName].push(e);
            } else {
              compositionsByCategory[e.compositionTypeName] = [];
              compositionCategories.push(e.compositionTypeName);
              compositionsByCategory[e.compositionTypeName].push(e);
            }
          });
          _self.compositionsByCategory = compositionsByCategory;
          _self.compositionCategories = compositionCategories;
        });
    },
    // 去到作文详情页面
    goToDetail(item) {
      console.log(item);
    },
    // 滚动到右边
    scrollToRight(id, i) {
      console.log(document.getElementById(id));
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
      console.log(document.getElementById(id));
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
</style>
