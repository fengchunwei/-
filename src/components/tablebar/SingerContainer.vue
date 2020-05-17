<template>
  <div>
    <ul class="mui-table-view">
      <li class="mui-table-view-cell mui-media" v-for="item in singerList" :key="item.id">
        <router-link href="javascript:;" :to="'Musicers/'+item.ting_uid">
          <img class="mui-media-object mui-pull-left" :src="item.avatar_s500" />
          <div class="mui-media-body">
            <p class="mui-ellipsis">{{item.name}}</p>
          </div>
        </router-link>
      </li>
    </ul>

  </div>
</template> 
<script>
export default {
  data() {
    return {
      singeridList: ["2517"  ,"7994","1091","45561","2507","245815","1077","1204","1117","82366"],
      singerList:[]
    };
  },
  created() {
    this.getmusicerList();
    document.title = this.$route.meta.musictitle
  },
  methods: {
    getmusicerList() {
      for(let item of this.singeridList){
        const musicerList =
        this.HOST +
        "v1/restserver/ting?method=baidu.ting.artist.getInfo&tinguid="+item;
      this.$axios
        .get(musicerList)
        .then(result => {
          // console.log(result)
          const infoObj = {}
          infoObj.name = result.data.name;
          infoObj.avatar_s500 = result.data.avatar_s500;
          infoObj.ting_uid = result.data.ting_uid
          this.singerList.push(infoObj)
        })
        .catch();
      }
    },
  }
};
</script>
<style scoped>
li {
  line-height: 42px;
}
.mui-table-view img {
  border-radius: 50%;
}
</style>