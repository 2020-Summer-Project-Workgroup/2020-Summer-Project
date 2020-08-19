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
        <div id="sendBut" @click="sendComment">
          <a>发送</a>
        </div>
      </div>
      <br />
    
      <div id="bottom">
        <div id="comments" v-for="comment in comments" :key="comment">
          <div id="oneComment" v-show="flag">
            <i class="el-icon-s-custom" id="avatar"></i>
            <div id="content">
            <div id="commentText">
              {{ comment.name }}
              : {{ comment.text }}
            </div>
            <div id="date">
              <i class="el-icon-delete-solid" @click.prevent="delComment(comment.id)"></i>
              {{ comment.time }}
            </div>
            <br />
            <el-divider></el-divider>
          </div>
          </div>
          
        </div>
      </div>
    </div>  
  </div>
</template>

<script>
import Edit from '../fileEdit/Edit.vue'
// import addComment from '../../network/edit.js'
// import deleteComment from '../../network/edit.js'

export default {
  name: "Comment",
  components: {
    Edit,
  },
  data() {
    return {
      flag: true,
      editorData: 'lss<div id="sendBut"><a href="">发送</a></div>',
      title: "",
      num: 3,
      showDel: false,
      commentInput: "评论",
      comments: [
        {name: "李书实", text: "编辑器会自动进行上传，其需要服务器返回一个JSON数组，包含两个字段：uploaded(true / false)和url(相对路径)。举个例子如下。若没有返回内容或返回内容uploaded不为true，则会出现上传失败的情况。", time: "2020-08-19", id: 1},
        {name: "吕俊洋", text: "一个线程访问数据库的时候，在成功获取到一个可用数据库连接之前的最长等待时间为2分钟这里比较危险，如果超过maxWaitTime都没有获取到这个连接的话，该线程就会抛出Exception故这里设置的maxWaitTime应该足够大，以免由于排队线程过多造成的数据库访问失败", time: "2020-08-20", id: 2},
        {name: "韩子尧", text: "1.@RequestPart这个注解用在multipart/form-data表单提交请求的方法上。2.支持的请求方法的方式MultipartFile，属于Spring的MultipartResolver类。这个请求是通过http协议传输的。", time: "2020-08-11", id: 3}
      ]
    }
  },
  methods: {
    delComment(index) {
      this.comments.splice(index,1);
      console.log("Delete!");
    },
    sendComment() {
      // this.flag=true;
      this.num++;
      this.comments.push({name: "LSS", text: this.commentInput, time: new Date().toLocaleString(), id: this.num})
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
  align-items: flex-start;
  position: absolute;
  /* top: 138px; */
  width: 50%;
  height: 92%;
  background: #FFFFFF;
  /* padding-top: 4.61vh;
  padding-left: 4.53vw; */
  overflow-y: auto;
  position: absolute;
  left:17.6vw;
  bottom: 0;
  width: 62.5vw;
  height: calc(100vh - 68px);
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
  position: relative;
  margin-top: 50rem;
  left: 25px;
  width: 80%;
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
  font-size: 2rem;
}

#content {
  display: -webkit-flex;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  flex-basis: 100%;
  flex-shrink: 0;
}

#commentText {
  flex-shrink: 1;
  color: #616161;
  font-family: "Microsoft YaHei", "微软雅黑";
  width: 100%;
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
