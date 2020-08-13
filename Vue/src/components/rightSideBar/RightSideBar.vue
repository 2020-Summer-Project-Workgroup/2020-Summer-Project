<template>
	<div id="RBar">
		<div class="button greenButton" id="newFile" @mouseenter="me1" @mouseleave="ml1" @click="cl1" :style="newStyle">
			<!--待加入跳转链接-->
			<span class="text">
				新建
			</span>
		</div>
		<br />
		<div class="button stdButton" id="From" @mouseenter="me2" @mouseleave="ml2" @click="cl2" :style="newStyle">
			<span class="text">
				从模板新建
			</span>
		</div>
		<br />
		<div id="down">
			<span class="stdFont">
				最近浏览
			</span>
			&nbsp;
			<span id="detail">
				<a href="" /> 详情
			</span>
			<br />
			<hr id="line" color="#cfcfcf" size="1px" width="80%" />
			<br />
			<table>
				<tbody>
					<tr v-for="file in files" :key="file.name">
						<img :src="'../../assets/' + file.type + '.png'" /> {{ file.name }} <img id="setBut" src="../../assets/setting.png" alt="IMG" />
					</tr>
				</tbody>
			</table>
		</div>
	</div>
</template>

<script>
	export default {
		data:function () {
			
			return {
				files: [{
						type: "个人",
						name: "示例文档"
					},
					{
						type: "团队",
						name: "LSS"
					},
					{
						type: "收藏",
						name: "qwertyuiasdfghjkzxvcbnm"
					},
				],
			}
		},
		methods:{
			// add:function (fileType, fileName) {
			// 	this.files.push({type: fileType, name: fileNmae});
			// }
		}
	}
</script>

<style scoped>
	.button {
		width: 241px;
		height: 48px;
		border-radius: 5px;
	}

	.stdButton {
		background: linear-gradient(180deg, #FFFFFF 0%, rgba(255, 255, 255, 0) 100%), #E5E5E5;
	}

	.greenButton {
		background: linear-gradient(180deg, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0) 100%), #54A293;
	}

	.text {
		line-height: 48px;
	}

	.stdFont {
		font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
		font-style: normal;
		font-weight: normal;
		font-size: 20px;
		color: rgba(97, 97, 97, 1);
	}

	#newFile {
		font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
		font-style: normal;
		font-weight: normal;
		font-size: 20px;
		text-align: center;
		color: rgb(255, 255, 255);
	}

	#RBar {
		display: -webkit-flex;
		flex-flow: column wrap;
		justify-content: center;
		align-content: center;
		width: 437px;
		height: 798px;
	}

	#From {
		font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
		font-style: normal;
		font-weight: normal;
		font-size: 20px;
		text-align: center;
		color: rgba(97, 97, 97, 1);
		align-content: center;
		align-items: center;
	}

	#detail {
		font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
		font-style: normal;
		font-weight: normal;
		font-size: 16px;
		color: #54A293;
	}
	
	#setBut {
		align-self: flex-end;
	}
</style>
