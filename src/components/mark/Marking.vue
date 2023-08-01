<template>
  <v-container
    fluid
    style="
      height: 100%;
      padding: 0px;
      width:1500px;
      overflow-y: scroll;
          overflow-x: visible;
    "
  >
    <v-card elevation="0">
      <v-card-title>
        Step 1: {{ currentTitle }}
      </v-card-title>
      <v-card-text>
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
            style="width: 500px; background: transparent"
            height="100%"
          >
            <v-card-subtitle
              >You should spend about 20 minutes on this task.</v-card-subtitle
            >
            <v-card-text>
              <p style="font-weight: bold; color: black">
                The graph below shows the demand for electricity in England
                during typical days in winter and summer. The pie chart shows
                how electricity is used in an average English home.
              </p>
              <p style="font-weight: bold; color: black">
                Summarise the information by selecting and reporting the main
                features, and make comparisons where relevant.
              </p>
            </v-card-text>
            <v-card-subtitle> Write at least 150 words. </v-card-subtitle>
            <v-card-text>
              <v-card elevation="0">
                <v-card-title>
                  Typical daily demand for electricity
                </v-card-title>
                <v-card-text
                  ><v-img src="../../assets/mimic1.png"></v-img
                ></v-card-text>
              </v-card>
              <v-card style="margin-top: 12px" elevation="0">
                <v-card-title class="text-h6">
                  What the electricity is used for:
                </v-card-title>
                <v-card-text>
                  <v-img src="../../assets/mimic2.png"></v-img>
                </v-card-text>
              </v-card>
            </v-card-text>
          </v-card>
          <v-card
            elevation="0"
            style="
              background: transparent;
              width: calc(100% - 500px);
              border-radius: 0px;
            "
            height="100%"
          >
            <v-row>
              <v-col cols="8">
                <div id="editor" style="width: 100%"></div>
              </v-col>
              <v-col cols="4">
                <div
                  class="sidebar"
                  style="
                    width: 100%;
                    height: 100%;
                    overflow-y: scroll;
                    overflow-x: hidden;
                    padding-right: 12px;
                  "
                ></div>
              </v-col>
            </v-row>
          </v-card>
        </div>
      </v-card-text>
    </v-card>
    <div style="width: 100%;display:flex;justify-content:center;">
      <v-card style="margin-top: 12px; margin-bottom: 12px; width: 980px" elevation="0">
        <v-card-title>
          Step 2: Summarising
        </v-card-title>
        <v-card-text>
          <textarea
            id="writtingArea"
            v-model="content"
            :style="'height:' + summariseAreaHeight + 'px'"
            
          >
          </textarea>
          <!-- border-top:1px solid #d2d2d7; -->
          <div style="margin-top: 8px">
            <span style="color: #68cc45; font-size: 12px; float: right"
              ><v-icon small color="#68cc45">done_all</v-icon> saved</span
            >
          </div>
          <div style="    display: flex;justify-content: flex-start;">
            <div style="width: 180px">
            <v-text-field
              label="Total Mark"
            ></v-text-field>
            </div>
            <v-btn rounded color="primary"  small style="margin-left:12px;margin-top:14px;">
              <v-icon left> done </v-icon>
              Done
            </v-btn>
          </div>
        </v-card-text>
      </v-card>
    </div>
  </v-container>
</template>

<script>
// import ckeditor from "../../utils/ckeditor/classic-editor-with-track-changes";
export default {
  name: "Marking",
  data: () => ({
    fullHeight: 700,
    timeoutInstance: null,
    content: "",
    wordsCount: 0,
    step: 1,
    correctingContent: "",
    init: {},
    summariseAreaHeight: 300,
  }),
  computed: {
    currentTitle() {
      switch (this.step) {
        case 1:
          return "Correcting the Composition";
        case 2:
          return "Summarising";
        default:
          return "Summarising";
      }
    },
  },
  mounted() {
    var _self = this;
    this.fullHeight = window.screen.height - 174;
    // this.summariseAreaHeight = this.fullHeight - 300;
    _self.initEditor();
  },
  methods: {
    initEditor() {
      const licenseKey =
        "atdiixukSmYUEc4rPd1GkuiirHBohFL4rcs+sG9xFeGhKDL5qzvSvpkFYg==";

      // Application data will be available under a global variable `appData`.
      const appData = {};

      // Users data.
      appData.users = [
        {
          id: "user-1",
          name: "Joe Doe",
          // Note that the avatar is optional.
          avatar: "https://randomuser.me/api/portraits/thumb/men/26.jpg",
        },
        {
          id: "user-2",
          name: "Ella Harper",
          avatar: "https://randomuser.me/api/portraits/thumb/women/65.jpg",
        },
      ];

      // The ID of the current user.
      appData.userId = "user-1";

      // Comment threads data.
      appData.suggestions = [
        {
          id: "suggestion-1",
          type: "insertion",
          authorId: "user-2",
          createdAt: new Date(2019, 1, 13, 11, 20, 48),
        },
        {
          id: "suggestion-2",
          type: "deletion",
          authorId: "user-1",
          createdAt: new Date(2019, 1, 14, 12, 7, 20),
        },
        {
          id: "suggestion-3",
          type: "insertion",
          authorId: "user-1",
          createdAt: new Date(2019, 1, 14, 12, 7, 20),
        },
        {
          id: "suggestion-4",
          type: "deletion",
          authorId: "user-1",
          createdAt: new Date(2019, 1, 15, 8, 44, 1),
        },
        {
          id: "suggestion-5",
          type: "formatInline:886cqig6g8rf",
          authorId: "user-2",
          createdAt: new Date(2019, 2, 8, 10, 2, 7),
          data: {
            commandName: "bold",
            commandParams: [{ forceValue: true }],
          },
        },
        {
          id: "suggestion-6",
          type: "formatBlock:698dn3otqzd6",
          authorId: "user-2",
          createdAt: new Date(2019, 2, 8, 10, 2, 10),
          data: {
            commandName: "heading",
            commandParams: [{ value: "heading2" }],
            formatGroupId: "blockName",
            multipleBlocks: false,
          },
        },
        {
          id: "e3157f571d4a7b5d21a8876aec1a60b1c",
          type: "formatBlock:mergeTableCells",
          authorId: "user-1",
          createdAt: new Date(2019, 2, 8, 10, 2, 10),
          data: {
            commandName: "mergeTableCells",
            commandParams: [],
            formatGroupId: "mergeTableCells",
            multipleBlocks: false,
          },
        },
        {
          id: "ecbdfcf1052e0c6e6c756b095765560c8",
          type: "deletion:tableColumn",
          authorId: "user-1",
          createdAt: new Date(2019, 1, 15, 8, 44, 1),
        },
      ];

      // Comment threads data.
      appData.commentThreads = [
        {
          threadId: "suggestion-1",
          comments: [
            {
              commentId: "comment-1",
              authorId: "user-1",
              content: "<p>Are you sure it will fit here?</p>",
              createdAt: new Date("09/20/2018 14:21:53"),
            },
            {
              commentId: "comment-2",
              authorId: "user-2",
              content: "<p>I think so...</p>",
              createdAt: new Date("09/21/2018 08:17:01"),
            },
          ],
        },
      ];

      appData.initialData = `<h2>
				Bilingual Personality Disorder
			</h2>
			<figure class="image image-style-side">
				<img src="https://c.cksource.com/a/1/img/docs/sample-image-bilingual-personality-disorder.jpg" srcset="https://c.cksource.com/a/1/img/docs/sample-image-bilingual-personality-disorder.jpg, https://c.cksource.com/a/1/img/docs/sample-image-bilingual-personality-disorder_2x.jpg 2x">
				<figcaption>
					One language, one person.
				</figcaption>
			</figure>
			<p>
				This may be the first time you hear about this made-up disorder but it
				<suggestion-start name="insertion:suggestion-1:user-2"></suggestion-start>actually<suggestion-end name="insertion:suggestion-1:user-2"></suggestion-end>
				isn’t so far from the truth. Even the studies that were conducted almost half a century show
				that <strong>the language you speak has more effects on you than you realize</strong>.
			</p>
			<p>
				One of the very first experiments conducted on this topic dates back to 1964.
				<a href="https://www.researchgate.net/publication/9440038_Language_and_TAT_content_in_bilinguals">In the experiment</a>
				designed by linguist Ervin-Tripp who is an
				<suggestion-start name="deletion:suggestion-2:user-1"></suggestion-start>
				authority<suggestion-end name="deletion:suggestion-2:user-1">
				</suggestion-end>
				<suggestion-start name="insertion:suggestion-3:user-1"></suggestion-start>
				expert<suggestion-end name="insertion:suggestion-3:user-1"></suggestion-end>
				in psycholinguistic and sociolinguistic studies, adults who are bilingual
				in English in French were showed series of pictures and were asked to create 3-minute stories.
				In the end participants emphasized
				drastically different dynamics for stories in English and French.
			</p>
			<p>
				Another ground-breaking experiment which included bilingual Japanese women married to American men
				<suggestion-start name="deletion:suggestion-4:user-1"></suggestion-start>in San
				Francisco <suggestion-end name="deletion:suggestion-4:user-1">
				</suggestion-end>were
				asked to complete sentences. The goal of the experiment was to investigate whether or not human
				feelings and thoughts
				are expressed differently in <strong>different language mindsets</strong>.
			</p>
			<p data-suggestion-start-before="formatBlock:698dn3otqzd6:suggestion-6:user-2">
				Here is a sample from the the experiment:
				<suggestion-end name="formatBlock:698dn3otqzd6:suggestion-6:user-2"></suggestion-end>
			</p>
			<table>
				<thead>
					<tr>
						<th>&nbsp;</th>
						<th data-suggestion-start-before="deletion:tableColumn:ecbdfcf1052e0c6e6c756b095765560c8:user-1:afb3c" data-suggestion-end-after="deletion:tableColumn:ecbdfcf1052e0c6e6c756b095765560c8:user-1:afb3c">English</th>
						<th>Japanese</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>Real friends should</td>
						<td data-suggestion-start-before="deletion:tableColumn:ecbdfcf1052e0c6e6c756b095765560c8:user-1:ad447,formatBlock:mergeTableCells:e3157f571d4a7b5d21a8876aec1a60b1c:user-1:c048f" data-suggestion-end-after="deletion:tableColumn:ecbdfcf1052e0c6e6c756b095765560c8:user-1:ad447,formatBlock:mergeTableCells:e3157f571d4a7b5d21a8876aec1a60b1c:user-1:c048f">Be very frank</td>
						<td>Help each other</td>
					</tr>
					<tr>
						<td>I will <suggestion-start name="formatInline:886cqig6g8rf:suggestion-5:user-2"></suggestion-start>probably<suggestion-end name="formatInline:886cqig6g8rf:suggestion-5:user-2"></suggestion-end> become</td>
						<td data-suggestion-start-before="deletion:tableColumn:ecbdfcf1052e0c6e6c756b095765560c8:user-1:4e1f8,formatBlock:mergeTableCells:e3157f571d4a7b5d21a8876aec1a60b1c:user-1:c7778" data-suggestion-end-after="deletion:tableColumn:ecbdfcf1052e0c6e6c756b095765560c8:user-1:4e1f8,formatBlock:mergeTableCells:e3157f571d4a7b5d21a8876aec1a60b1c:user-1:c7778">A teacher</td>
						<td>A housewife</td>
					</tr>
					<tr>
						<td>When there is a conflict with family</td>
						<td data-suggestion-start-before="deletion:tableColumn:ecbdfcf1052e0c6e6c756b095765560c8:user-1:fff44" data-suggestion-end-after="deletion:tableColumn:ecbdfcf1052e0c6e6c756b095765560c8:user-1:fff44">I do what I want</td>
						<td>It's a time of great unhappiness</td>
					</tr>
				</tbody>
			</table>
			<p>
				More recent <a href="https://books.google.pl/books?id=1LMhWGHGkRUC">studies</a> show, the
				language a person speaks affects
				their cognition, behavior, emotions and hence <strong>their personality</strong>.
				This shouldn’t come as a surprise
				<a href="https://en.wikipedia.org/wiki/Lateralization_of_brain_function">since we already know</a>
				that different regions of the brain become more active depending on the person’s activity at hand.
				The structure, information and especially <strong>the culture</strong> of languages varies
				substantially and the language a person speaks is an essential element of daily life.
			</p>`;

      class TrackChangesIntegration {
        constructor(editor) {
          this.editor = editor;
        }

        init() {
          const usersPlugin = this.editor.plugins.get("Users");
          const trackChangesPlugin = this.editor.plugins.get("TrackChanges");
          const commentsRepositoryPlugin =
            this.editor.plugins.get("CommentsRepository");

          // Load the users data.
          for (const user of appData.users) {
            usersPlugin.addUser(user);
          }

          // Set the current user.
          usersPlugin.defineMe(appData.userId);

          // Load the comment threads data.
          for (const commentThread of appData.commentThreads) {
            commentThread.isFromAdapter = true;

            commentsRepositoryPlugin.addCommentThread(commentThread);
          }

          // Load the suggestions data.
          for (const suggestion of appData.suggestions) {
            trackChangesPlugin.addSuggestion(suggestion);
          }
        }
      }

      const { ClassicEditorWithTrackChanges, EditorWatchdog } =
        window.ClassicEditor;
      const watchdog = new EditorWatchdog();

      window.watchdog = watchdog;

      watchdog.setCreator((el, config) => {
        return ClassicEditorWithTrackChanges.create(el, config).then(
          (editor) => {
            // Make the track changes mode the "default" state by turning it on just after the editor initializes.
            editor.execute("trackChanges");

            // After the editor is initialized, add an action to be performed after a button is clicked.

            // Switch between inline, narrow sidebar and wide sidebar according to the window size.
            const annotationsUIs = editor.plugins.get("AnnotationsUIs");
            const sidebarElement = document.querySelector(".sidebar");

            function refreshDisplayMode() {
              if (window.innerWidth < 1070) {
                sidebarElement.classList.remove("narrow");
                sidebarElement.classList.add("hidden");
                annotationsUIs.switchTo("inline");
              } else if (window.innerWidth < 1300) {
                sidebarElement.classList.remove("hidden");
                sidebarElement.classList.add("narrow");
                annotationsUIs.switchTo("narrowSidebar");
              } else {
                sidebarElement.classList.remove("hidden", "narrow");
                annotationsUIs.switchTo("wideSidebar");
              }
            }

            // Prevent closing the tab when any action is pending.
            editor.ui.view.listenTo(window, "beforeunload", (evt, domEvt) => {
              if (editor.plugins.get("PendingActions").hasAny) {
                domEvt.preventDefault();
                domEvt.returnValue = true;
              }
            });

            editor.ui.view.listenTo(window, "resize", refreshDisplayMode);
            refreshDisplayMode();

            return editor;
          }
        );
      });

      watchdog.setDestructor((editor) => editor.destroy());

      watchdog.create(document.querySelector("#editor"), {
        initialData: appData.initialData,
        extraPlugins: [TrackChangesIntegration],
        licenseKey,
        sidebar: {
          container: document.querySelector(".sidebar"),
        },
        trackChangesData: {
          editorCreator: (config, createElement) => {
            config.plugins = config.plugins.filter(
              (plugin) => plugin != TrackChangesIntegration
            );

            return ClassicEditorWithTrackChanges.create(
              createElement(),
              config
            );
          },
        },
      });
    },
    // 计算字数并且自动保存
    saveContent() {
      if (this.content) {
        this.wordsCount = this.content.split(" ").length;
      } else {
        this.wordsCount = 0;
      }
    },
  },
  watch: {
    content() {
      clearTimeout(this.timeoutInstance);
      var _self = this;
      this.timeoutInstance = window.setTimeout(function () {
        _self.saveContent();
      }, 1500);
    },
  },
};
</script>
<style scoped>
#writtingArea {
  width: 100%;
  resize: none;
  border: solid 2px gray;
  /* #007bff */
  background: white;
  padding: 12px;
  font-size: 14px;
  border-radius: 5px;
}
#writtingArea:focus {
  border: 0;
}
</style>
