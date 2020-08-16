<template>
  <div id="follow-template" >
    <div class="head-style">
      <span class="head" >
        按模板创建
      </span>
    </div>
    <hr id="line" color="#cfcfcf" size="1px" width="100%" />
    <img id="icon1" src="../../assets/模板-工作安排.jpg" alt="IMG"/>
    <img id="icon2" src="../../assets/模板-工作计划.jpg" alt="IMG"/>
    <img id="icon3" src="../../assets/模板-任务列表.jpg" alt="IMG"/>

  </div>
</template>

<script>
export default {
name: "FollowTemplate"
}
</script>

<style scoped>
#follow-template {
  display: -webkit-flex;
  flex-direction: column;
  position: absolute;
  top: 68px;
  bottom: 0;
  left: 17.6%;
  right: 23.49%;
  padding-top: 45px;
  padding-left: 113px;
  background: #FFFFFF;
}
.head{
  font-family: Microsoft YaHei;
  font-style: normal;
  font-weight: normal;
  font-size: 28px;
  line-height: 37px;
  /* 深灰 */
  color: #616161;
}
#line{
  position: absolute;
  width: 983.04px;
  height: 0px;
  left: 95.98px;
  bottom: 708.38px;
  top:89.62px;
  /* 浅灰 */
  background: #CFCFCF;
  /* 浅灰 */
  border: 1px solid #CFCFCF;
}
#icon1{
  position: absolute;
  width: 170px;
  height: 228px;
  left: 162px;
  top: 149px;
  /* 浅绿 */
  background: #F2F4F4;
}
#icon2{
  position: absolute;
  width: 170px;
  height: 228px;
  left: 505px;
  top: 149px;
}
#icon3{
  position: absolute;
  width: 170px;
  height: 228px;
  left:854px;
  top:149px;
}
</style>