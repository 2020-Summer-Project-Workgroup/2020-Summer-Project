<template>
	<div id="app" >
		<table>
			<tr>
				<th id="head1" align="left">
					我收藏的
					<img id="icon" src="../../assets/收藏.png" alt="IMG"/>
				</th>
				<th id="head2" align="left">
					创建者
				</th>
				<th id="head3" align="left">
					修改时间
				</th>
			</tr>
			<hr id="line" color="#cfcfcf" size="1px" width="100%" />
			<tr v-for="file in files" :key="file.name">
				<td id="blank1">{{ file.name }}</td>
				<td id="blank2">{{ file.writter }} </td>
				<td id="blank3">{{ file.time }}</td>
			</tr>
		</table>
	</div>
</template>

<script>
	export default {
		name:"FileList",
		data: function () {
			return {
				files:[
					{name:"lss11111111111111111111111111", writter:"LSS1111111111111111111111111111", time:"2020-08-121111111111111111111"},
					{name:"lss2", writter:"LSS", time:"2020-08-13"},
					{name:"lss3", writter:"LSS", time:"2020-08-14"},
				]
			}	
		}
	}
</script>

<style>
	#blank1 {
		flex-basis: 25rem;
		flex-grow: 1;
		flex-shrink: 4;
	}
	
	#blank2 {
		flex-basis: 5rem;
		flex-grow: 0;
		flex-shrink: 1;
	}
	
	#blank3 {
		flex-basis: 5rem;
		flex-grow: 0;
		flex-shrink: 1;
	}
	
	#app {
		display: -webkit-flex;
		flex-direction: column;
	}
	
	#head1 {
		font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
		font-style: normal;
		font-weight: normal;
		font-size: 28px;
		color: rgba(97, 97, 97, 1);
		align: left;
	}
	
	#head2 {
		font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
		font-style: normal;
		font-weight: normal;
		font-size: 16px;
		color: #CFCFCF;
		align-self: flex-start;
	}
	
	#head3 {
		font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
		font-style: normal;
		font-weight: normal;
		font-size: 16px;
		color: #CFCFCF;
	}
</style>
