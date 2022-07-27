
/* CopyRight 胡亚东 20190623*/
/*
  本界面为选项卡的“我的”
*/

const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    studyTime_0:'',
    studyTime_total:'',
  },


  my_message:function(){
    wx.redirectTo({
      url: '../../pages/my_message/my_message',
})
  },

  my_statistic:function(){
    this.show('该功能还在开发中哦');
  },

  my_ranking: function () {
    this.show('该功能还在开发中哦');
  },

  my_help: function () {
    wx.redirectTo({
      url: '../../pages/help/help',
    })
  },

  my_feedback: function () {
    wx.redirectTo({
      url: '../../pages/feedback/feedback',
    })
  },

  my_setting: function () {
    this.show('该功能还在开发中哦');
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      navH: app.globalData.navHeight
    })
    new app.ToastPannel();

    var that = this;
    var userID = '';
    try {
      var value = wx.getStorageSync('userData')
      if (value) {
        userID = value[0];
        const db = wx.cloud.database();
        console.log(userID)
        db.collection('userData').where({
          userId: userID
        })
          .get({
            success: function (res) {
              that.setData({
                studyTime_0: res.data[0].studyTime_0,
                studyTime_total: res.data[0].studyTime_total,
              })
            }
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