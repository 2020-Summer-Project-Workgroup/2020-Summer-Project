<template>
  <div id="container">
    <div id="CommentPage">
      <div id="top">
        <Edit></Edit>
      </div>
    
      <div id="middle">
        <span id="font_comment">
          评论
        </span>
        <br />
        <div id="CommentEditPage">
          <textarea name="reworkmes" cols="70" rows="3" id="TextareaComment" placeholder="请输入评论" v-model="commentInput"></textarea>
        </div>
        <div id="sendBut">
          <a href="">发送</a>
        </div>
      </div>
      <br />
    
      <div id="bottom">
        <div id="comments" v-for="comment in comments" :key="comment">
          <el-avatar id="avatar" :src="comment.avatar + '.jpg'"></el-avatar>
          <div id="content">
            <div id="commentText">
              {{ comment.name }}
              : {{ comment.text }}
            </div>
            <div id="date">
              <i class="el-icon-delete-solid" @click="del"></i>
              {{ comment.time }}
            </div>
            <br />
            <el-divider></el-divider>
          </div>
        </div>
      </div>
    </div>  
  </div>
</template>

<script>
import Edit from '../fileEdit/Edit.vue'
export default {
  name: "Comment",
  components: {
    Edit,
  },
  data() {
    return {
      showDel: false,
      commentInput: "",
      comments: [{
        avatar: "头像",
        name: "LSS",
        time: "2020-8-19 09:41",
        text: "【文档提交】提交代码时可以前后端分为两部分吗是必须分为两部分，并且每个组都需要有前端和后端两个git仓库，即前端后端在代码提交和修改上完全分离，并且注意在上传git上代码时不应该提交依赖包内容；然后在具体展示时可以放在同一个服务器上展示，前后端也可以有交互，例如后端对前端数据的渲染，这是完全没问题的。"
      },
      {avatar: "头像",
        name: "LSS",
        time: "2020-8-19 09:41",
        text: "【文档提交】提交代码时可以前后端分为两部分吗是必须分为两部分，并且每个组都需要有前端和后端两个git仓库，即前端后端在代码提交和修改上完全分离，并且注意在上传git上代码时不应该提交依赖包内容；然后在具体展示时可以放在同一个服务器上展示，前后端也可以有交互，例如后端对前端数据的渲染，这是完全没问题的。"
      },
      {avatar: "头像",
        name: "LSS",
        time: "2020-8-19 09:41",
        text: "【文档提交】提交代码时可以前后端分为两部分吗是必须分为两部分，并且每个组都需要有前端和后端两个git仓库，即前端后端在代码提交和修改上完全分离，并且注意在上传git上代码时不应该提交依赖包内容；然后在具体展示时可以放在同一个服务器上展示，前后端也可以有交互，例如后端对前端数据的渲染，这是完全没问题的。"
      }
      ]
    }
  },
  methods: {
    del: function() {
      // let index = this.comments.indexOf(comment);
      // if(index != -1){
      //   this.comments.splice(index,1);
      // }
      console.log("Delete！");
    }
  }
}
</script>

<style scoped>
a:hover {color: #616161}

a:link {color: #FFFFFF}

a {
  color: #ffffff;
  text-decoration: none;
  font-family: "Microsoft YaHei", "微软雅黑";
  font-size: 20px;
}

#CommentPage {
  display: -webkit-flex;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  position: absolute;
  /* top: 138px; */
  width: 50%;
  height: 92%;
  background: #FFFFFF;
  /* padding-top: 4.61vh;
  padding-left: 4.53vw; */
  overflow-y: auto;
}

#top {
  flex-shrink: 1;
  width: 100%;
  height: 84%;
}

#middle {
  display: -webkit-flex;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin-top: 48rem;
  width: 90%;
}

#font_comment {
  font-family: Microsoft YaHei;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 32px;
  /* 浅灰 */
  color: #CFCFCF;
}

#comments {
  display: -webkit-flex;
  display: flex;
  flex-direction: row;
  flex-basis: 95%;
  flex-wrap: nowrap;
  width: 95%;
}

#avatar {
  flex-shrink: 0;
}

#content {
  display: -webkit-flex;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  flex-shrink: 1;
}

#commentText {
  flex-shrink: 1;
  color: #616161;
  font-family: "Microsoft YaHei", "微软雅黑";
  font-size: 20px;
}

#date {
  align-self: flex-end;
  color: #616161;
  font-family: "Microsoft YaHei", "微软雅黑";
  font-size: 16px;
}
#sendBut {
  display: -webkit-flex;
  display: flex;
  flex-direction: column;
  align-self: flex-end;
  justify-content: center;
  align-items: center;
  width: 8rem;
  height: 2.25rem;
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0) 100%), #54A293;
  border-radius: 5px;
}

#TextareaComment {
  resize:none;
  BACKGROUND: #FFFFFF;
  BORDER-TOP: #CFCFCF 1px solid;
  BORDER-LEFT: #CFCFCF 1px solid;
  BORDER-RIGHT: #CFCFCF 1px solid;
  BORDER-BOTTOM: #CFCFCF 1px solid;
  font-family: Microsoft YaHei;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 26px;
  /* 深灰 */
  color: #616161;
}

#bottom {
  display: -webkit-flex;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
}
</style>
