<template>
  <div id="create" >
    <div id="list">
      <table id="form">
        <tr id="head-row">
          <th id="head1" align="left">
            我创建的
            <img id="icon" src="../../assets/收藏.png" alt="IMG"/>
          </th>
          <th id="head2" align="left">
            创建者
          </th>
          <th id="head3" align="left">
            修改时间
          </th>
          <th id="head4" align="left">
            
          </th>
        </tr>
        <tr>
          <td colspan="4">
            <hr size="1px" color="#CFCFCF" width="100%"/>
          </td>
        </tr>
        <tr id="body-row" v-for="file in files" :key="file.name">
          <td id="blank1"><a href="" >{{ file.name }}</a></td>
          <td id="blank2"><a href="">{{ file.writter }}</a> </td>
          <td id="blank3">{{ file.time }}</td>
          <td id="blank4"><a href="" >删除</a></td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name:"create",
  data: function () {
    return {
      files:[
        {name:"这是一个示例文档", writter:"李书实", time:"2020-08-12"},
        {name:"这是一个示例文档", writter:"李书实", time:"2020-08-12"},
        {name:"这是一个示例文档有很长的标题，没错很长的标题", writter:"李书实", time:"2020-08-12"},
        {name:"这是一个示例文档", writter:"李书实", time:"2020-08-12"},
        {name:"这是一个示例文档", writter:"李书实", time:"2020-08-12"},
        {name:"这是一个示例文档有很长的标题，没错很长的标题", writter:"李书实", time:"2020-08-12"},
        {name:"这是一个示例文档", writter:"李书实", time:"2020-08-12"},
        {name:"这是一个示例文档", writter:"李书实", time:"2020-08-12"},
        {name:"这是一个示例文档有很长的标题，没错很长的标题", writter:"李书实", time:"2020-08-12"},
        {name:"这是一个示例文档", writter:"李书实", time:"2020-08-12"},
        {name:"这是一个示例文档", writter:"李书实", time:"2020-08-12"},
        {name:"这是一个示例文档有很长的标题，没错很长的标题", writter:"李书实", time:"2020-08-12"},
        {name:"这是一个示例文档", writter:"李书实", time:"2020-08-12"},
      ]
    }	
  }
}
</script>

<style>
a:hover {color: #54A193}

a:link {color: #FFFFFF}

a {
  color: #616161;
  text-decoration: none;
}

#collect {
  display: -webkit-flex;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-end;
  width: 75rem;
  height: 49.875rem;
  overflow-y: auto;
  background-color: #e5e5e5;
}

#list {
  width: 95%;
  height: 100%;
}

#head-row {
  height: 3rem;
  align: center;
  valign: bottom;
}

#body-row {
  height: 3rem;
  valign: bottom;
}

#blank1 {
  font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB",
    "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 25px;
  line-height: 33px;
  color: rgba(97, 97, 97, 1);
}

#blank2 {
  font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB",
    "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 26px;
  color: rgba(97, 97, 97, 1);
}

#blank3 {
  font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB",
    "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 1.25rem;
  line-height: 1.625rem;
  color: rgba(97, 97, 97, 1);
}

#blank4 {
  font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB",
    "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 1rem;
  line-height: 1.625rem;
  color: #54A193;
}

#head1 {
  width: 43.75rem;
  font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 1.75rem;
  color: rgba(97, 97, 97, 1);
}

#head2 {
  width: 15.625rem;
  font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  color: #CFCFCF;
}

#head3 {
  width: 9.375rem;
  font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  color: #CFCFCF;
}

#head4 {
  width: 7rem;
  font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  color: #CFCFCF;
}
</style>
