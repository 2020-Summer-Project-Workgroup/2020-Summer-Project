<template>
  <div id="CommentPage">
    <div class="Document" >
      <tr>aaaa</tr>
      <tr>aaaa</tr>
      <tr>aaaa</tr>
      <tr>aaaa</tr>
      <tr>aaaa</tr>
      <tr>aaaa</tr>
      <tr>aaaa</tr>
      <tr>aaaa</tr>
      <tr>aaaa</tr>
      <tr>aaaa</tr>
      <tr>aaaa</tr>
      <tr>aaaa</tr>
      <tr>aaaa</tr>
      <tr>aaaa</tr>
      <tr>aaaa</tr>
    </div>
    <span class="font_comment">
      评论
    </span>
    <div class="CommentEditPage">
      <textarea name="reworkmes" cols="70" rows="3" class="TextareaComment" >请输入评论</textarea>
    </div>
    <div class="button greenButton" id="newFile" @click="cl1" :style="newStyle">
      <span class="text">发送</span>
    </div>
    <div class="CommentAppearance">
        <div class="OneComment">
          <div class="CommentFont">
            <span class="UserName">
              这是昵称：
            </span>
            <span class="CommentAppearanceFont">
              这是评论内容这是评论内容这是评论内容这是评论内容这是评论内容这是评论内容这是评论内容这是评论内容这是评论内容这是评论内容这是评论内容
            </span>
          </div>
          <div class="DeleteAndTime">
            <i class="el-icon-delete"></i>
            8月16日 9：26
          </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Comment"
}
</script>

<style scoped>
#CommentPage{
  display: -webkit-flex;
  flex-direction: column;
  position: absolute;
  top: 138px;
  bottom: 0;
  left: 17.6%;
  right: 23.49%;
  background: #FFFFFF;
  padding-top: 4.61vh;
  padding-left: 4.53vw;
}

.Document{
  height: 29.63vh;
  width: 41.45vw;
  position: absolute;
  font-family: Microsoft YaHei;
  font-style: normal;
  font-weight: normal;
  font-size: 25px;
  line-height: 43px;
  color: #616161;
  overflow-y: auto;
}
.font_comment{
  margin-top: 30.41vh;
  font-family: Microsoft YaHei;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 32px;
  /* 浅灰 */
  color: #CFCFCF;
}
.CommentEditPage{
  height: 11.54vh;
  margin-top: 1vh;
  border-radius: 5px;
  border-color: #CFCFCF;
}
.TextareaComment{
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
.button {
  width: 6.66vw;
  height: 4.15vh;
  border-radius: 5px;
}
.greenButton {
  position: absolute;
  width: 6.66vw;
  height: 4.15vh;
  left: 46.5vw;
  top: 53vh;
  /* 按钮绿_渐变 */
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0) 100%), #54A293;
  border-radius: 5px;
}
#newFile {
  font-family: SimHei;
  font-style: normal;
  font-weight: normal;
  font-size: 22px;
  line-height: 25px;
  text-align: center;
  color: rgb(255, 255, 255);
}
.CommentAppearance{
  top: 59vh;
  height: 20vh;
  width: 48.7vw;
  position: absolute;
  font-family: Microsoft YaHei;
  font-style: normal;
  font-weight: normal;
  font-size: 25px;
  line-height: 43px;
  color: #616161;
  overflow-y: auto;
}
.OneComment{
  position: absolute;
  top:0.5vh;
  height: 10vh;
  width: 48.7vw;
}
.CommentFont{
  height: 9vh;
  width: 44.7vw;
  left:4vw;
  position: absolute;
  font-family: Microsoft YaHei;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 26px;
  /* 深灰 */
  color: #616161;
  overflow-y: auto;
}
.UserName{
  font-family: Microsoft YaHei;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 26px;
  color: #54A293;
}
.CommentAppearanceFont{
  font-family: Microsoft YaHei;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 26px;
  color: #616161;
}
.DeleteAndTime{
  position: absolute;
  top:9vh;
  height: 1vh;
  right: 0.52vw;
  font-family: Microsoft YaHei;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 26px;
  color: #616161;
}
</style>