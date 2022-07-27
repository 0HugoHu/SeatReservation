
/* CopyRight 胡亚东 20190623*/
/*
  主界面-选择教室的界面（目前只可选择第一间教室）
*/


const app = getApp();
var util = require('../../utils/util.js');
Page({

  data: {

  },


navigationButton:function(){
  wx.switchTab({
    url: '../../pages/initialPage/initialPage',
  })
},

  onRedirect(){
    wx.redirectTo({
      url: '../../pages/loading/loading'
    })
  },

  onRedirect2() {
    this.show('当前不可选哦')
  },

  onRedirect3() {
    this.show('当前不可选哦')
  },

  content_2:function(){
    this.show('当前只有这三间教室哦')
  },

  content_3: function () {
    this.show('当前只有这三间教室哦')
  },



  onLoad: function (options) {
    this.setData({
      navH: app.globalData.navHeight
    })
    new app.ToastPannel();
  },

  onReady: function () {

  },

  onShow: function () {

  },


  onHide: function () {

  },

  onUnload: function () {

  },


  onPullDownRefresh: function () {

  },

  onReachBottom: function () {

  },

  onShareAppMessage: function () {

  }
})