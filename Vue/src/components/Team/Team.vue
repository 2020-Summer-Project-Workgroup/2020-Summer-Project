<template>
  <div id="titles">
    <div class="container1">
      <ul class="title-container">
        <li v-for="(q,index) in titles" :key="index">
          <p class="fc-dgray fz-t">
            {{q.title}}
            <span
                :class="['arrow','bottom-arrow',q.showDetail?'active':'']"
                @click="showHide(index)"
            ></span>
          </p>
          <div class="content_inner" :id="q.pid">
            <p class="fc-blue fz-fo">{{q.content_inner}}</p>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      titles: [
        {
          title: "团队空间",
          content_inner:
              "金刚石文档团队"
        }
      ],
      act: 0
    };
  },
  components: {

  },
  mounted() {
    this.titles = this.titles.map((v, index) => {
      return { ...v, showDetail: false, pid: "itemPId" + index };
    });
  },
  methods: {
    showHide(index) {
      var obj = this.titles[index];
      obj.showDetail = !obj.showDetail;
      setTimeout(function() {
        var pid = "itemPId" + index;
        var pdom = document.getElementById(pid);
        if (obj.showDetail) {
          pdom.style.height = pdom.scrollHeight + "px";
        } else {
          pdom.style.height = 0;
        }
      }, 1);
    },
  }
};
</script>

<style scoped>
.title-container {
  margin-top: 83px;
}
.title-container li {
  padding: 37px 40px;
  border-bottom: 1px solid rgba(13, 52, 106, 0.49);
}
.title-container li p:first-child {
  line-height: 22px;
}
/*箭头,默认朝右,灰色*/

.arrow:before {
  content: " ";
  display: inline-block;
  height: 10px;
  width: 10px;
  border-width: 1.5px 1.5px 0 0;
  border-color: #ccc;
  border-style: solid;
  transform: rotate(45deg);
}


/*左箭头*/

.arrow.left-arrow:before {
  transform: rotate(-135deg);
}


/*上箭头*/

.arrow.top-arrow:before {
  transform: rotate(-45deg);
}


/*下箭头*/

.arrow.bottom-arrow:before {
  transform: rotate(135deg);
}
.bottom-arrow {
  padding: 5px 10px;
  float: right;
  cursor: pointer;
}
.bottom-arrow:before {
  border-color: #f33a16;
  transition: 0.5s;
}
.bottom-arrow.active:before {
  -webkit-transform: rotateZ(-45deg);
  transform: rotateZ(-45deg);
  transition: transform 0.5s;
}
.content_inner{
  box-sizing: border-box;
  height: 0;
  transition: height 0.5s;
  overflow: hidden;
}
.content_inner p{
  line-height: 25px;
  padding: 32px 0 0 0;
}
</style>