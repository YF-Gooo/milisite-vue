<template>
  <div class="home">
    <div class="top">
      <el-row :gutter="20">
        <el-col :xs="24" :sm="8" :md="8" v-for="photo in photos" :key="photo.id">
          <el-card class="photo-card" @click.native="goPhoto(photo)">
            <img class="photo-image" :src="photo.image">
            <div>
              <div class="photo-title">{{photo.title}}</div>
              <div class="photo-bottom clearfix">
                <span class="photo-info">{{photo.info.substring(0, 40)}}</span>
              </div>
            </div>
          </el-card>
        </el-col>
      </el-row>
      <div class="block">
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :page-size="6"
          layout="prev, pager, next"
          :total="total">
        </el-pagination>
      </div>
    </div>
  </div>
</template>

<script>
import * as API from '@/api/photo/';
export default {
  name: 'home',
  data() {
    return {
      photos: [],
      start: 0,
      limit: 6,
      total: 0,
    };
  },
  methods: {
    handleCurrentChange(val) {
      this.start = this.limit * (val - 1); // val 页面
      this.load();
    },
    load() {
      API.getPhotos(this.start, this.limit).then((res) => {
        this.photos = res.data.items;
        this.total = res.data.total;
      });
    },
    goPhoto(photo) {
      this.$router.push({ name: 'showPhoto', params: { photoID: photo.id } });
    },
  },
  //vue对象中
  beforeRouteLeave (to, from, next){
    to.meta.keepAlive = true;
    next();
  },
  beforeMount() {
      this.load();
  },
};
</script>

<style>
.home .photo-image {
  width: 100%;
}
.photo-title {
  margin: 4px 0px 4px 0px;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
}
.photo-bottom {
  margin-top: 4px;
}
.photo-info {
  color: #909399;
}
.photo-card {
  margin-bottom: 14px;
  cursor: pointer;
}
</style>
