import axios from 'axios';

// 创建照片
const postPhoto = form => axios.post('/api/v1/photos', form).then(res => res.data);

// 读照片详情
const getPhoto = id => axios.get(`/api/v1/photo/${id}`).then(res => res.data);

// 读取照片列表
const getPhotos = (start, limit) => axios.get('/api/v1/photos', { params: { start, limit } }).then(res => res.data);

export {
  getPhotos,
  getPhoto,
  postPhoto,
};
