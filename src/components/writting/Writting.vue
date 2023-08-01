<template>
  <v-container fluid style="width: 980px; height: 100%; padding: 0px">
    <v-card elevation="0" height="100%" style="background: transparent;">
      <div
        style="
          width: 100%;
          height: 100%;
          display: flex;
          flex-direction: row;
          justify-content: space-between;
        "
      >
        <v-card
          elevation="0"
          style="width: 50%; background: transparent;overflow-y:scroll;height:calc(100% - 62px)"
          rounded="sm"
        >
          <v-card-subtitle
            >You should spend about 20 minutes on this task.</v-card-subtitle
          >
          <v-card-text>
            <p style="font-weight: bold; color: black" v-html="task.taskDetail">
            </p>
          </v-card-text>
          <v-card-subtitle> Write at least 150 words. </v-card-subtitle>
          <v-card-text>
            <v-card elevation="0" rounded="xl">
              <v-card-title>
                {{task.compositionGraphTitleOne}}
              </v-card-title>
              <v-card-text
                ><v-img :src="task.compositionGraphOne"></v-img
              >
              </v-card-text>
            </v-card>
            <v-card style="margin-top: 12px"  rounded="xl" elevation="0">
              <v-card-title class="text-h6">
                {{task.compositionGraphTitleTwo}}
              </v-card-title>
              <v-card-text style="padding-bottom:0px;">
                <v-img :src="task.compositionGraphTwo"></v-img>
              </v-card-text>
            </v-card>
          </v-card-text>
        </v-card>
        <v-card
          elevation="0"
          style="background: transparent; width: 50%;margin-left:16px;"
          height="100%"
        >
          <textarea id="writtingArea" v-model="content"> </textarea>
          <!-- border-top:1px solid #d2d2d7; -->
          <div style="height: 50px; margin-top: 8px">
            <span style="color: #1d1d1f; font-size: 12px"
              >共{{ wordsCount }}词。</span
            >
            <span :style="saveStatus === '保存成功。' ? 'color:#68cc45' : 'color:grey'" class="save-status-info"
              ><v-icon small :color="saveStatus === '保存成功。' ? '#68cc45' : 'grey'">done_all</v-icon> {{saveStatus}}</span
            >
            <v-scroll-x-transition>
              <span
                style="color: black; font-size: 12px; display: block"
                v-show="wordsCount > 150"
                >保持好习惯，记得检查拼写、时态、单复数等错误哦。</span
              >
            </v-scroll-x-transition>
          </div>
        </v-card>
      </div>
    </v-card>
  </v-container>
</template>

<script>
import dataInterface from "../../utils/httpUtils";
export default {
  name: "Writting",
  data: () => ({
    fullHeight: 700,
    timeoutInstance: null,
    content: "",
    wordsCount: 0,
    task: {
      taskDetail: "",
      compositionChineseTitle: "",
      compositionEnglishTitle: "",
      compositionGraphTwo: "",
      compositionTypeId: "",
      compositionTypeName: "",
      compositionGraphOne: "",
      compostionGraphThree: "",
      id: "",
      compositionGraphTitleOne: "",
      compositionGraphTitleTwo: "",
    },
    contentId:'',
    saveStatus: '开始撰写吧！'
  }),
  mounted() {
    var index = window.location.href.indexOf("id=");
    var id = window.location.href.slice(index + 3, window.location.href.length);
    this.getCompositionDetail(id);
    document.getElementById("writtingArea").focus();
  },
  methods: {
    // 计算字数并且自动保存
    saveContent() {
      if (this.content) {
        this.wordsCount = this.content.split(" ").length;
      } else {
        this.wordsCount = 0;
      }
      var _self = this;
      dataInterface
        .postWithURL("/composition/addOrUpdateCompositionContent", {
          id:this.contentId,
          userId: '1',
          compositionId:this.task.id,
          compositionContent:this.content
        })
        .then((res) => {
          console.log(res);
          _self.saveStatus = '保存成功。'
        });
    },
    getCompositionDetail(id) {
      var _self = this;
      dataInterface
        .postWithURL("/composition/getCompositionsTopicsById", {
          Id: id,
        })
        .then((res) => {
          if (res.data.length > 0) {
            _self.task = res.data[0];
          }
        });
    },

  },
  watch: {
    content() {
      console.log('看看你要来几次');
      this.saveStatus= '正在保存...';
      clearTimeout(this.timeoutInstance);
      var _self = this;
      this.timeoutInstance = window.setTimeout(function () {
        _self.saveContent();
      }, 3000);
    },
  },
};
</script>
<style scoped>
#writtingArea {
  height: calc(100% - 62px);
  width: 100%;
  resize: none;
  border: 0;
  background: white;
  padding: 12px;
  font-size: 14px;
  border-radius: 18px;
}
#writtingArea:focus {
  border: 0;
}
.save-status-info{
  font-size: 12px; float: right;
}
</style>
