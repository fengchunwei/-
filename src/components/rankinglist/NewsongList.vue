<template>
  <div>
    <div class="topBg">
      <img
        :src="billboard.pic_s192"
        alt
      />
    </div>
    <div class="center" v-for="item in songList" :key="item.id">
      <ul>
        <li>
          <p>
            <!-- 渲染的歌名 -->
            <router-link :to="'/PlayMusic/'+item.song_id"><span>{{item.title}}</span></router-link>
          </p>
          <p>{{item.author}}</p>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      songList: [],
      billboard:{}
    };
  },
  created() {
    this.getList();
  },
  methods: {
    getList() {
      console.log(this.$route.params.type)
      let test =
        this.HOST +
        "/v1/restserver/ting?method=baidu.ting.billboard.billList&type="+this.$route.params.type;
      this.$axios
        .get(test)
        .then(res => {
          this.songList = res.data.song_list;
          this.billboard = res.data.billboard
          console.log(res)
        })
        .catch();
    }
  }
};
</script>
<style  scoped>
span {
  color: #191919;
}
ul li {
  margin-top: 10px;
  padding-bottom: 5px;
  list-style: none;
  border-bottom: 1px solid #999;
}

.topBg img {
  width: 100%;
  height: 150px;
}
.center {
  width: 80%;
  height: auto;
  margin: 0 auto;
}
li p {
  margin: 0;
  color: #191919;
  font-size: 14px;
}
p:nth-of-type(2) {
  color: #919191;
  font-size: 12px;
}
.lastLi {
  border: none;
}
</style>