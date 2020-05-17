<template>
  <div>
    <div class="mui-card">
      <div class="mui-card-header">
        <div style="float:left">{{title}}</div>
        <div style="float:right; font-size:12px;">
          <router-link :to="{name:'toDayList',params:{type:this.type,title:this.title}}">更多</router-link>
        </div>
      </div>
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <router-link
            :to="'PlayMusic/'+item.song_id"
            class="imgs"
            v-for="item in picList"
            :key="item.id"
            :mess="item.song_id"
          >
            <img :src="item.pic_big" alt />
            <p>{{item.title}}</p>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { getMusicBillList } from "../../../api/musicList.js";
export default {
  components: {},
  data() {
    return {
      picList: []
    };
  },
  props: {
    type: String,
    size: String,
    title: {
      type: String,
      default: "今日榜单"
    }
  },
  created() {
    getMusicBillList(this.type, this.size)
        .then(res => {
          this.picList = res.song_list;
        })
        .catch();
  },
  methods: {}
};
</script>
<style scoped>
.imgs {
  width: 33%;
  padding: 10px;
  float: left;
}
.imgs img {
  width: 100%;
}
.imgs p {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 12px;
  text-align: center;
  margin-bottom: 0;
}
</style>