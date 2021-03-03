//Page Object
import { request } from "../../request/index.js"
Page({
  data: {
    //轮播图数组
    swiperList:[],
    //导航数组
    catesList:[],
    //楼层数组
    floorList:[]
  },
  onLoad: function(options){
    // 1 发送异步请求获取轮播图数据 优化的手段可以通过es6的 Promise

    // var reqTask = wx.request({
    //   url: 'https://api-hmugo-web.itheima.net/api/public/v1/home/swiperdata',
    //   success: (result) => {
    //     console.log(result);
    //     this.setData({
    //       swiperList:result.data.message 
    //   }
    // });
    this.getSwiperList();
    this.getCatesList();
    this.getFloorList();
  },
  getSwiperList(){
    request({ url: '/home/swiperdata'})
      .then(result => {
        this.setData({
          swiperList:result.data.message
        })
      })
  },
  getCatesList(){
    request({ url: '/home/catitems'})
      .then(result => {
        this.setData({
          catesList:result.data.message
        })
      })
  },
  getFloorList(){
    request({ url: '/home/floordata'})
      .then(result => {
        this.setData({
          floorList:result.data.message
        })
      })
  }
});