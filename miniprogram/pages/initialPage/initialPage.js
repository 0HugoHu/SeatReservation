
/* CopyRight 胡亚东 20190623*/
/*
  本界面为选项卡的“首页”
*/

var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  scanQRCode:function(){
    var that = this;
    var show;
    wx.scanCode({
      success: (res) => {
        this.show = "结果:" + res.result + "二维码类型:" + res.scanType + "字符集:" + res.charSet + "路径:" + res.path;
        that.setData({
          show: this.show
        })
        wx.showToast({
          title: '成功',
          icon: 'success',
          duration: 2000
        })
      },
      fail: (res) => {
        wx.showToast({
          title: '失败',
          icon: 'none',
          duration: 2000
        })
      },
      complete: (res) => {
      }
    })
  },

  toChooseSeat:function(){
    wx.redirectTo({
      url: '/pages/chooseRoom/chooseRoom'
    })
  },

  toRecord:function(){
    wx.redirectTo({
      url: '/pages/record/record'
    })
  },

  toCancel: function () {
    wx.redirectTo({
      url: '/pages/cancel/cancel'
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      navH: app.globalData.navHeight
    })

    try {
      var value = wx.getStorageSync('userData')
      if (value) {
        // Do something with return value
      }else{
        wx.redirectTo({
          url: '../../pages/login/login',
        })
      }
    } catch (e) {
      // Do something when catch error
    }
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