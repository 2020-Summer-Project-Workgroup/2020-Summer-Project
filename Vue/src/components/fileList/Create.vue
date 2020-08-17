<template>
	<div id="create" >
		<table id="form">
			<tr>
				<th id="head1" align="left">
					{{ teamName }}
					<img id="icon" src="../../assets/收藏.png" alt="IMG"/>
				</th>
				<th id="head2" align="left">
					创建者
				</th>
				<th id="head3" align="left">
					修改时间
				</th>
        <th id="head4">
          
        </th>
			</tr>
      <tr>
        <td>
          <el-divider></el-divider>
        </td>
        <td>
          <el-divider></el-divider>
        </td>
        <td>
          <el-divider></el-divider>
        </td>
        <td>
          <el-divider></el-divider>
        </td>
      </tr>
			<tr class="row" v-for="file in files" :key="file.name">
				<td id="blank1">{{ file.name }}</td>
				<td id="blank2">{{ file.writter }} </td>
				<td id="blank3">{{ file.time }}</td>
        <td id="blank4"><a href="" >删除记录</a></td>
			</tr>
		</table>
	</div>
</template>

<script>
	export default {
		name:"Create",
		data: function () {
			return {
        teamName: "我创建的",
				files:[
					{name:"这是一个示例文档", writter:"李书实", time:"2020-08-12"},
					{name:"这是一个示例文档有很长的标题，没错很长的标题", writter:"李书实", time:"2020-08-12"},
					{name:"这是一个示例文档", writter:"李书实", time:"2020-08-12"},
          {name:"这是一个示例文档", writter:"李书实", time:"2020-08-12"},
          {name:"这是一个示例文档有很长的标题，没错很长的标题", writter:"李书实", time:"2020-08-12"},
          {name:"这是一个示例文档", writter:"李书实", time:"2020-08-12"},
          {name:"这是一个示例文档", writter:"李书实", time:"2020-08-12"},
          {name:"这是一个示例文档有很长的标题，没错很长的标题", writter:"李书实", time:"2020-08-12"},
          {name:"这是一个示例文档", writter:"李书实", time:"2020-08-12"},{name:"这是一个示例文档", writter:"李书实", time:"2020-08-12"},
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
          {name:"这是一个示例文档", writter:"李书实", time:"2020-08-12"},
          {name:"这是一个示例文档有很长的标题，没错很长的标题", writter:"李书实", time:"2020-08-12"},
          {name:"这是一个示例文档", writter:"李书实", time:"2020-08-12"},{name:"这是一个示例文档", writter:"李书实", time:"2020-08-12"},
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
          {name:"这是一个示例文档", writter:"李书实", time:"2020-08-12"},
          {name:"这是一个示例文档有很长的标题，没错很长的标题", writter:"李书实", time:"2020-08-12"},
          {name:"这是一个示例文档", writter:"李书实", time:"2020-08-12"},{name:"这是一个示例文档", writter:"李书实", time:"2020-08-12"},
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
	#blank1 {
		flex-basis: 800px;
		flex-grow: 1;
		flex-shrink: 4;
    font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB",
      "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 25px;
    line-height: 33px;
    color: rgba(97, 97, 97, 1);
	}
	
	#blank2 {
		flex-basis: 150px;
		flex-grow: 0;
		flex-shrink: 1;
    font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB",
      "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 26px;
    color: rgba(97, 97, 97, 1);
	}
	
	#blank3 {
		flex-basis: 150px;
		flex-grow: 0;
		flex-shrink: 1;
    font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB",
      "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 26px;
    color: rgba(97, 97, 97, 1);
	}
	
  #blank4 {
    flex-basis: 100px;
    flex-grow: 0;
    flex-shrink: 1;
    font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB",
      "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 26px;
    color: #54A193;
  }
	#collect {
		display: -webkit-flex;
		flex-direction: column;
    width: 75rem;
    height: 49.875rem;
    background-color: #FFFFFF;
    overflow-y: auto;
	}
	
	#head1 {
    flex-basis: 800px;
		font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
		font-style: normal;
		font-weight: normal;
		font-size: 28px;
		color: rgba(97, 97, 97, 1);
		align: left;
	}
	
	#head2 {
    flex-basis: 150px;
		font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
		font-style: normal;
		font-weight: normal;
		font-size: 16px;
		color: #CFCFCF;
		align-self: flex-start;
	}
	
	#head3 {
    flex-basis: 150px;
		font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
		font-style: normal;
		font-weight: normal;
		font-size: 16px;
		color: #CFCFCF;
	}
  
  #head4 {
    flex-basis: 100px;
    font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    color: #CFCFCF;
  }
  .row {
    display: -webkit-flex;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-between;
  }
</style>
