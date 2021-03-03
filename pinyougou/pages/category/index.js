import { request } from "../../request/index.js"
import regeneratorRuntime from '../../lib/runtime/runtime';
Page({

  /**
   * 页面的初始数据
   */
  data: {
    //左侧菜单数组
    leftMenu:[],
    //右侧内容数组
    rightContent:[],
    currentIndex:0,
    scrollToTop:0
  },
  //接口数据
  cates:[],
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    /* 
    0 web中的本地存储和 小程序中的本地存储的区别
      1 写代码的方式不一样了 
        web: localStorage.setItem("key","value") localStorage.getItem("key")
    小程序中: wx.setStorageSync("key", "value"); wx.getStorageSync("key");
      2:存的时候 有没有做类型转换
        web: 不管存入的是什么类型的数据，最终都会先调用以下 toString(),把数据变成了字符串 再存入进去
      小程序: 不存在 类型转换的这个操作 存什么类似的数据进去，获取的时候就是什么类型
    1 先判断一下本地存储中有没有旧的数据
      {time:Date.now(),data:[...]}
    2 没有旧数据 直接发送新请求 
    3 有旧的数据 同时 旧的数据也没有过期 就使用 本地存储中的旧数据即可
     */
    const Cates=wx.getStorageSync('cates');
    if(!Cates){
      this.getCategoryList();
    }
    else{
      if(Date.now()-Cates.time > 1000 * 10){
        this.getCategoryList();
      }
      else{
        this.cates=Cates.data;
        let leftMenu=this.cates.map(v=>v.cat_name);
        let rightContent=this.cates[0].children;
        this.setData({
          leftMenu,
          rightContent
      })
      }
    }
  },
  // 获取分类数据
  async getCategoryList(){
    const res=await request({url:"/categories"});
       this.cates=res.data.message;
      wx.setStorageSync('cates', {time:Date.now(),data:this.cates})
      let leftMenu=this.cates.map(v=>v.cat_name);
        let rightContent=this.cates[0].children;
        this.setData({
          leftMenu,
          rightContent
      })
  },
  //左边菜单的点击事件
  handleItemTap(e){
    const {index}=e.currentTarget.dataset;
    let rightContent=this.cates[index].children;
    this.setData({
      currentIndex:index,
      rightContent,
      scrollToTop:0
    })
  }
})