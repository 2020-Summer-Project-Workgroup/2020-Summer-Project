# 2020-summer-project

## 前端小组协作规范
前端多人协作总体上采取：拉需求 => 建分支 => 提交代码 => 提PR 这一流程
### 拉需求
从teambition软件上获得自己的任务
### 建分支
从development分支创建一个子分支进行编码，创建分支前必须先执行
```git
git checkout development
git pull
```
以保持和最新版本的dev分支同步（否则可能引发合并冲突）<br/>
然后执行`git checkout -b [昵称]-[用途]-[模块]`（其中-b参数必不可少，否则可能无法清除dev分支的提交记录）<br/>
其中分支名中的昵称应能标识开发者的身份，如：hzy, lss, melon等<br/>
用途大体上有三类：新增功能feature，修复缺陷debug，日志更新log<br/>
模块名根据具体需求命名即可<br/>
举例：工程师 h56983577 新增axios网络请求包模块的分支是`hzy-feature-network`<br/>
### 提交代码
请大家在编码过程中，每完成一个小功能就提交代码，并添加对这一改动的描述，养成良好的Git使用习惯
```
git commit -m '[Description of new changes]'
```
另外，我们的总体项目要求描述信息尽量用英语写成，以便未来可以与世界各地的开发者协作
### 提PR
如果一个分支的创建者是你，那么当你进入小学期仓库时，系统会提示你去提交PR；
如果没有，也可以手动切换至

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
