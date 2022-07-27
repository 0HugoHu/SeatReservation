
/* CopyRight 胡亚东 20190623*/
/*
  主界面的取消预约按钮（未完成）
*/

const app = getApp();
Page({

  data: {
    room: '教室：X3102',
    number: '3排7号',
    timeDay: '日期：2019-06-23',
    timeBegin: '开始：9:00',
    timeEnd: '结束：15:00',
    entered: '进门签到：否',
    leaved: '出门签到：否',

  },

  confirm:function(){
    this.show("该功能还在开发中哦")
  },
  navigationButton: function () {
    wx.switchTab({
      url: '../../pages/initialPage/initialPage',
    })
  },
  onLoad: function (options) {
    new app.ToastPannel();
    var that = this;
    this.setData({
      navH: app.globalData.navHeight
    })

    var userID = '';
    try {
      var value = wx.getStorageSync('userData')
      if (value) {
        userID = value[0];
        const db = wx.cloud.database();
        db.collection('userData').where({
          userId: userID
        })
          .get({
            success: function (res) {
              that.setData({
                room: res.data[0].room,
                number: '座位号' + res.data[0].number,
                timeDay: '日期：' + res.data[0].timeDay,
                timeBegin: '开始：' + res.data[0].startTime,
                timeEnd: '结束：' + res.data[0].endTime,
                entered: '进门签：' + res.data[0].entered,
                leaved: '出门签：' + res.data[0].leaved,
              })
            }
          })
      }
    } catch (e) {
    }

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