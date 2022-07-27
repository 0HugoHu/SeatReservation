
/* CopyRight 胡亚东 20190623*/
/*
  本界面为我的消息界面
*/
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    title1:'?',
    content1:'?',
    time1:'?',
    title2: '?',
    content2: '?',
    time2: '?',
    title0:'',
    content0:'',
    time0:'',
  },

  navigationButton:function(){
wx.switchTab({
  url: '../../pages/my/my',
})
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

    var that = this;
    this.setData({
      navH: app.globalData.navHeight
    })

    const db = wx.cloud.database();
    db.collection('message').where({
      _id: '5d0e1545900f80f3a62cff24'
    }).get({
      success: function (res) {
        that.setData({
          title1: res.data[0].m1_title,
          title2: res.data[0].m2_title,
          content1: res.data[0].m1_content,
          content2: res.data[0].m2_content,
          time1: res.data[0].m1_time,
          time2: res.data[0].m2_time,
    })
      }
    })


    db.collection('message').where({
      _id: '5d0e1545900f80f3a62cff24'
    }).get({
      success: function (res) {
        that.setData({
          title1: res.data[0].m1_title,
          title2: res.data[0].m2_title,
          content1: res.data[0].m1_content,
          content2: res.data[0].m2_content,
          time1: res.data[0].m1_time,
          time2: res.data[0].m2_time,
        })
      }
    })

    db.collection('userData').where({
      _id: '5d0e1545900f80f3a62cff24'
    }).get({
      success: function (res) {
        that.setData({
          title1: res.data[0].m1_title,
          title2: res.data[0].m2_title,
          content1: res.data[0].m1_content,
          content2: res.data[0].m2_content,
          time1: res.data[0].m1_time,
          time2: res.data[0].m2_time,
        })
      }
    })
    var userID='';
    try {
      var value = wx.getStorageSync('userData')
      if (value) {
        userID=value[0];
        const db = wx.cloud.database();
        db.collection('userData').where({
          userId: userID
        })
          .get({
            success: function (res) {
              that.setData({
                title0: res.data[0].message_Title,
                content0: res.data[0].message_Content,
                time0: res.data[0].message_Time,
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