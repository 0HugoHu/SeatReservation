
/* CopyRight 胡亚东 20190623*/
/*
  本界面为登录界面1
*/

Page({


  data: {

    input1: '',
    input2: '',
    isInput1:false,
    isInput2: false,
  },

  studentName: function (e) {
    this.setData({
      input1: e.detail.value,
      isInput1:true
    })
  },

  studentId: function (e) {
    this.setData({
      input2: e.detail.value,
      isInput2: true
    })
  },

  confirm:function(){
    if (this.data.isInput1 == true && this.data.isInput2 == true) {
      this.checkData();
    }
  },

  checkData(){
    const db = wx.cloud.database();
    var that = this

    db.collection('studentInfo').where({
      id: Number(that.data.input2),
      name:that.data.input1,
    })
      .get({
        success: function (res) {
          console.log(that.data.input2 + that.data.input1)
          db.collection('userData').add({
            data: {
              userId:that.data.input2,
              userName:that.data.input1,
              message_Title:'全屏公告',
              message_Content: '近日，受娄.盖胧占据海拉鲁城堡影响，城堡周围被黑雾笼罩。据知情人士透露，娄.盖胧甚至还囚禁了蔡尔达公主。',
              message_Time:'2019-6-23',
              studyTime_0:0,
              studyTime_total: 0,
              timeDay:'',
              startTime:'',
              endTime:'',
              room:'暂无记录',
              number:'',
              entered:'',
              leaved:'',
              temp0:'',
              temp1:'',
              temp2:'',
            },
            success: function (res) {
              var temp=[that.data.input2,that.data.input1,'','','',0,0,'','','','','',false,false,'','',''];
              try {
                wx.setStorageSync('userData', temp)
              } catch (e) { }
              wx.switchTab({
                url: '../../pages/initialPage/initialPage',
              })
            }
          })
        }
      })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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