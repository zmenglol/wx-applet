// pages/demo03/demo03.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      num:0
  },
  handleInput(e) {
    this.setData({
      num: e.detail.value
    })
  },
  handletap(e){
    const operation=e.currentTarget.dataset.operation;
    this.setData({
      num: this.data.num+operation
    })
  }
})