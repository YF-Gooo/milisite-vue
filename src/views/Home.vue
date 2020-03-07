<template>
  <div class="home">
    <div class="top">
      <el-row :gutter="20">
        <el-col :xs="24" :sm="8" :md="8" v-for="image in images" :key="image.id">
          <el-card class="image-card" @click.native="goImage(image)">
            <img class="image-avatar" :src="image.avatar">
            <div>
              <div class="image-title">{{image.title}}</div>
              <div class="image-bottom clearfix">
                <span class="image-info">{{image.info.substring(0, 40)}}</span>
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
import * as API from '@/api/image/';
export default {
  name: 'home',
  data() {
    return {
      images: [],
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
      API.getImages(this.start, this.limit).then((res) => {
        this.images = res.data.items;
        this.total = res.data.total;
      });
    },
    goImage(image) {
      this.$router.push({ name: 'showImage', params: { imageID: image.id } });
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
.image-avatar {
  width: 100%;
}
.image-title {
  margin: 4px 0px 4px 0px;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
}
.image-bottom {
  margin-top: 4px;
}
.image-info {
  color: #909399;
}
.image-card {
  margin-bottom: 14px;
  cursor: pointer;
}
</style>
