<template>
  <div>
    <ul class="mui-table-view">
      <router-link
        :to="'PlayMusic/'+item.song_id"
        class="mui-table-view-cell mui-media"
        v-for="item in musicNewList"
        :key="item.id"
      >
        <a href="javascript:;">
          <img class="mui-media-object mui-pull-left" :src="item.pic_big" />
          <div class="mui-media-body">
            <span>{{item.title}}</span>
            <p class="mui-ellipsis">{{item.artist_name}}</p>
          </div>
        </a>
      </router-link>
    </ul>
  </div>
</template>
<script>
import { getMusicBillList } from "../../../api/musicList.js";
export default {
  props: {
    type: String,
    size: String
  },
  data() {
    return {
      musicNewList: []
    };
  },
  created() {
    //http的封装
     getMusicBillList(this.type, this.size)
        .then(res => {
          this.musicNewList = res.song_list;
        })
        .catch();
  },
  methods: {}
};
</script>
<style scoped>
</style>