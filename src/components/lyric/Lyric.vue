<template>
  <div>
    <div class="lrcBox" ref="lrcBox">
      <div
        v-for="(item,index) in lrcObjList"
        :key="index"
        :class="{active:activeIndex == index}"
        class="lrcContainer"
        @click="playNow(item.time)"
      >{{item.content}}</div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      lrcObjList: [],
      activeIndex: 0
    };
  },
  props: {
    lrcUrl: String
  },
  created() {
  },

  methods: {
    //歌词接口
    getLyricList() {
      const lyricListUrl = `/music-url/data/song/lrc?lrc_link=${this.lrcUrl}`;
      this.$axios
        .get(lyricListUrl)
        .then(result => {
          //获取到的字符串转换成字符串数组
          const srcStrList = result.data.content.split("\n");
          //遍历字符串数组，对每一项进行处理
          srcStrList.forEach(item => {
            //用正则表达式将时间解析出来，存放到一个新数组
            let reg = /\[\d*:\d*\.\d*\]/;
            let matchList = item.match(reg);
            //遍历时间
            if (matchList == null) return;

            for (let matchStr of matchList) {
              let time = 0;
              //分钟
              let minReg = /\[\d*/;
              //   console.log(matchStr.match(minReg))
              time =
                time + Number.parseInt(matchStr.match(minReg)[0].slice(1)) * 60;

              //秒
              let secReg = /:\d*/;
              time = time + Number.parseInt(matchStr.match(secReg)[0].slice(1));
              // console.log(time)
              // 根据时间组织对象
              const content = item.replace(reg, "");
              if (content.trim("") == "") {
                return;
              }
              this.lrcObjList.push({
                time,
                content
              });
            }
          });
          //   console.log(this.lrcObjList);
        })
        .catch();
    },
    //改变歌词进度，指哪唱哪
    playNow(time){
      console.log(time)
      this.$store.commit("changeProssTime",{prossTime:time})
    }
  },
  //通过计算属性获取store里面的currentTime
  computed: {
    currentTime() {
      return this.$store.state.currentTime;
    }
  },
  watch: {
    //监听从父组件里获取的歌词，因为歌词是异步获取的，所以需要监听
    lrcUrl(newVal, oldVal) {
      if (newVal) {
        //监听完获取数据
        this.getLyricList();
      }
    },
    currentTime() {
      for (let i = 1; i < this.lrcObjList.length; i++) {
        if (this.currentTime < this.lrcObjList[i].time) {
          //已经找到歌词位置
          this.activeIndex = i - 1;
          //激活dom对象，通过dom对象的offset的属性，获取它与顶部的距离
          this.$refs.lrcBox.scrollTop =
          
            this.$refs.lrcBox.children[this.activeIndex].offsetTop-70;
          break;
        }
      }
    }
  }
};
</script>
<style scoped>
.lrcBox {
  text-align: center;
  height: 190px;
  overflow: scroll;
  position: relative;
}
.active {
  color: red;
}
.lrcContainer {
  font-size: 14px;
}
</style>