// pages/demo14/demo14.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list:[
      {
        id:1,
        name:'🍎',
        value:'apple'
      },
      {
        id:2,
        name:'🍇',
        value:'grape'
      },
      {
        id:3,
        name:'🍌',
        value:'banana'
      }
    ]
  },
  handlechange(e){
    console.log(e);
    const checkedList=e.detail.value;
    this.setData({
      checkedList
    })
  }
})