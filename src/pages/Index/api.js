import http from '../../utils/http.js'

// 获取轮播图片
export const getSwipeData = () => http({
  url: '/home/swiper'
})