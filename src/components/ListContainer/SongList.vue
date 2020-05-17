<template>
  <div>
    <div class="musicList">
      <router-link :to="'/NewsongList/'+this.type">
        <img
          :src="imgsList.pic_s192"
          alt
        />
        <ul>
          <li v-for="item in newSongList" :key="item.id">
            <span>{{item.rank}}</span>
            {{item.title}}
          </li>
        </ul>
      </router-link>
    </div>
  </div>
</template>
<script>
export default {
    data(){
        return {
            newSongList:[],
            imgsList:{}
        }
    },
    props:{
        type:String
    },
    created(){
        this.getNewList()
    },
    methods:{
        getNewList() {
      let test1 =
        this.HOST +
        `/v1/restserver/ting?method=baidu.ting.billboard.billList&type=${this.type}`;
      this.$axios
        .get(test1)
        .then(res => {
          this.newSongList = res.data.song_list;
          this.imgsList = res.data.billboard
          // console.log(res);
        })
        .catch();
    },
    }
}
</script>
<style scoped>
    .musicList {
  font-size: 16px;
  color: #999;
  margin-top: 15px;
  padding-bottom: 10px;
  border-bottom: 1px solid #999;
}
.musicList ul {
  width: 65%;
  height: 100px;
  overflow: hidden;
  float: right;
}
.musicList img {
  width: 30%;
}
.musicList ul li {
  height: 20px;
  width: 100%;
  list-style: none;
  float: left;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  margin-top: 10px;
  color: #999;
}
.musicList ul li span {
  font-weight: 800;
  font-style: italic;
  font-family: Arial, Helvetica, sans-serif;
  color: red;
  display: inline-block;
  margin: 0 10px;
}
</style>