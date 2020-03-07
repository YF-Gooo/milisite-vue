<template>
  <div class="post-image">
    <div class="image-header">
      <h2>{{image.title}}</h2>
      <div class="image-data">
        {{image.created_at | moment("YYYY-MM-DD h:mm:ss") }}创建 ·
        {{image.view}}观赏
      </div>
    </div>
    <div class="image-info">
        <el-card class="image-card">
          <img class="image-avatar" :src="image.avatar">
        </el-card>
        <p>{{image.info}}</p>
    </div>
  </div>
</template>

<script>
import * as API from '@/api/image/';
export default {
  name: 'ShowImage',
  data() {
    return {
      image: {},
    };
  },
  methods: {
    load() {
      API.getImage(this.$route.params.imageID).then((res) => {
        this.image = res.data;
      });

    },
  },
  beforeMount() {
    this.load();
  },
};
</script>

<style>
.post-image{
  margin: 0 25%;
  
}
.image-header {
  margin-bottom: 16px;
}
.image-header h2{
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
.image-data {
  margin-top: 6px;
  font-size: 12px;
  color: #999;
}
.image-info {
  color: #111;
}

</style>
