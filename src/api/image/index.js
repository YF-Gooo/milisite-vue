import axios from 'axios';

// 创建视频
const postImage = form => axios.post('/api/v1/images', form).then(res => res.data);

// 读视频详情
const getImage = id => axios.get(`/api/v1/image/${id}`).then(res => res.data);

// 读取视频列表
const getImages = (start, limit) => axios.get('/api/v1/images', { params: { start, limit } }).then(res => res.data);

export {
  getImages,
  getImage,
  postImage,
};
