<template>
  <div class="body">
    <div class="header">
      <div style="float:left;width:33%">
        <router-link to="/HomeContainer" class="mui-icon mui-icon-home-filled"></router-link>
      </div>
      <div style="float:left;width:33%;text-align:center">
        <p style="margin-bottom:0">{{titleTop.title}}</p>
        <p>{{titleTop.author}}</p>
      </div>
      <div style="float:right;">
        <i class="mui-icon mui-icon-search"></i>
      </div>
    </div>
    <div class="con">
      <img :src="imgObj.pic_big" alt />
    </div>
    <!-- 歌词 -->
    <div>
      <Lyric :lrcUrl="playData.songinfo.lrclink"></Lyric>
    </div>
    <div>
      <div style="float:left; " @click="toggleColor">
        <i class="mui-icon-extra mui-icon-extra-heart-filled" ref="changeColor"></i>
      </div>
      <div style="float:right">
        <i class="mui-icon mui-icon-download"></i>
      </div>
    </div>
    <audio
      controls
      loop
      muted
      style="margin-top:20px"
      :src="playData.bitrate.show_link"
      ref="audio"
    ></audio>
  </div>
</template>
<script>
import Lyric from "../lyric/Lyric.vue";
export default {
  components: {
    Lyric
  },
  data() {
    return {
      flag: true,
      playData: {
        bitrate: {
          show_link: ""
        },
        songinfo: {
          title: "",
          lrclink: ""
        }
      },
      imgObj: {
        pic_big: ""
      },
      titleTop: {
        title: "",
        author: ""
      },
      musicList: []
    };
  },
  created() {
    this.getMusic();
  },
  mounted() {
    //每次时间更新触发这个函数
    this.$refs.audio.addEventListener("timeupdate", () => {
      // console.log(this.$refs.audio.currentTime)
      this.$store.commit("changeCurrentTime", {
        currentTime: this.$refs.audio.currentTime
      });
    });
  },
  methods: {
    //获取歌曲接口
    getMusic() {
      // console.log(this.$route.params.song_id)
      const musicUrl =
        "/url/v1/restserver/ting?method=baidu.ting.song.playAAC&songid=" +
        this.$route.params.song_id;
      this.$axios
        .get(musicUrl)
        .then(result => {
          // console.log(result);
          this.playData = result.data;
          this.imgObj.pic_big = result.data.songinfo.pic_big;
          this.titleTop.title = result.data.songinfo.title;
          this.titleTop.author = result.data.songinfo.author;
        })
        .catch();
    },

    //切换红心颜色
    toggleColor() {
      if (this.flag) {
        this.$refs.changeColor.style.color = "red";
        this.flag = false;
      } else {
        this.$refs.changeColor.style.color = "#ccc";
        this.flag = true;
      }
    }
  },
  computed: {
    prossTime() {
      return this.$store.state.prossTime;
    }
  },
  watch: {
    prossTime() {
      this.$refs.audio.currentTime = this.prossTime;
    }
  }
};
</script>
<style scoped>
.body {
  padding: 20px;
}
.con {
  text-align: center;
}
</style>