// pages/book/book.js
import{BookModel}from'../../models/book.js'
const bookModel = new BookModel

Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

    const hotList = bookModel.getHotList()
    hotList.then(
      res => {
        console.log("调用成功",res)
        bookModel.getMyBookCount()

    },
    )
    bookModel.getMyBookCount()
      .then(res=>{
        console.log(res)
        return bookModel.getMyBookCount()
      })//第一次调用api
      .then(res=>{
        console.log(res)
        return bookModel.getMyBookCount()
      })//第二次调用api
      .then(res=>{
        console.log('获取返回值')
        console.log(res)
      })//这里获取返回值

    // const promise = new Promise((resolve,reject)=>{
    //   wx.getSystemInfo({
    //     success: (res) => resolve(res),
    //     fail:(error) => reject(error)
    //   })
    // })
    // promise.then(
    //   res => console.log("调用成功",res),
    //   error => console.log("调用失败",error)
    // )
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})