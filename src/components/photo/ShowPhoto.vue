<template>
  <div class="post-photo">
    <div class="photo-header">
      <h2>{{photo.title}}</h2>
      <div class="photo-data">
        {{photo.created_at | moment("YYYY-MM-DD h:mm:ss") }}创建 ·
        {{photo.view}}观赏
      </div>
    </div>
    <div class="photo-info">
        <el-card class="photo-card">
          <img class="photo-image" :src="photo.image">
        </el-card>
        <p>{{photo.info}}</p>
    </div>
  </div>
</template>

<script>
import * as API from '@/api/photo/';
export default {
  name: 'ShowPhoto',
  data() {
    return {
      photo: {},
    };
  },
  methods: {
    load() {
      API.getPhoto(this.$route.params.photoID).then((res) => {
        this.photo = res.data;
      });

    },
  },
  beforeMount() {
    this.load();
  },
};
</script>

<style>
.post-photo{
  margin: 0 30%;
  
}
.photo-header {
  margin-bottom: 16px;
}
.photo-header h2{
  margin-bottom: 0px;
  font-size: 18px;
  font-weight: 500;
  color: #212121;
  line-height: 26px;
  height: 26px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.photo-data {
  margin-top: 6px;
  font-size: 12px;
  color: #999;
}
.photo-info {
  color: #111;
}

</style>
