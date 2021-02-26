// pages/demo13/demo13.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    gender:""
  },
  handlechange(e){
    // 1 获取单选框中的值
    console.log(e);
    let gender=e.detail.value;
    // 2 把值 赋值给 data中的数据
    this.setData({
      gender
    })
  }
})