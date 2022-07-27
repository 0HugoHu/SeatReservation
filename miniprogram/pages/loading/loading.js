
/* CopyRight 胡亚东 20190623*/
/*
  本界面为加载动画，附带缓存教室1的所有相关数据
*/

const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    animationData:'',
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      navH: app.globalData.navHeight
    })

    var animation = wx.createAnimation({
      duration: 800,
    })
    this.animation = animation
    var next = true;
    //连续动画关键步骤
    setInterval(function () {
      if (next) {
        this.animation.opacity(0).step()
        next = !next;
      } else {
        this.animation.opacity(1).step()
        next = !next;
      }
      this.setData({
        animationData: animation.export()
      })
    }.bind(this),800)

    const db = wx.cloud.database();
    var temp1 = new Object();
    var temp2 = new Object();
    var temp3 = new Object();
    var temp4 = new Object();
    var temp5 = new Object();
    var result = new Object();
    var temp_object_sign = '';
    var temp_time_sign = '';
    var dataBaseSource = 'Studyzone_test01';

    var occupiedSeat = new Array();                   
    for (var x = 0; x < 100; x++) {
      occupiedSeat[x] = new Array();       
      for (var y = 0; y < 20; y++) {
        occupiedSeat[x][y] = '';     
      }
    }

    db.collection(dataBaseSource).limit(20).get({
      success: function (res) {
        temp1 = res.data;
        for (var i = 0; i < Object.keys(temp1).length; i++){
          for(var j=1;j<11;j++){
            switch(j){
              case 1:
                occupiedSeat[i][j - 1] = temp1[i].t1;
                break;
              case 2:
                occupiedSeat[i][j - 1] = temp1[i].t2;
                break;
              case 3:
                occupiedSeat[i][j - 1] = temp1[i].t3;
                break;
              case 4:
                occupiedSeat[i][j - 1] = temp1[i].t4;
                break;
              case 5:
                occupiedSeat[i][j - 1] = temp1[i].t5;
                break;
              case 6:
                occupiedSeat[i][j - 1] = temp1[i].t6;
                break;
              case 7:
                occupiedSeat[i][j - 1] = temp1[i].t7;
                break;
              case 8:
                occupiedSeat[i][j - 1] = temp1[i].t8;
                break;
              case 9:
                occupiedSeat[i][j - 1] = temp1[i].t9;
                break;
              case 10:
                occupiedSeat[i][j - 1] = temp1[i].t10;
                break;
          }
          }
        }
        db.collection(dataBaseSource).skip(20).limit(20).get({
          success: function (res) {
            temp1 = res.data;
            for (var i = 20; i < Object.keys(temp1).length+20; i++) {
              for (var j = 1; j < 11; j++) {
                switch (j) {
                  case 1:
                    occupiedSeat[i][j - 1] = temp1[i-20].t1;
                    break;
                  case 2:
                    occupiedSeat[i][j - 1] = temp1[i-20].t2;
                    break;
                  case 3:
                    occupiedSeat[i][j - 1] = temp1[i-20].t3;
                    break;
                  case 4:
                    occupiedSeat[i][j - 1] = temp1[i-20].t4;
                    break;
                  case 5:
                    occupiedSeat[i][j - 1] = temp1[i-20].t5;
                    break;
                  case 6:
                    occupiedSeat[i][j - 1] = temp1[i-20].t6;
                    break;
                  case 7:
                    occupiedSeat[i][j - 1] = temp1[i-20].t7;
                    break;
                  case 8:
                    occupiedSeat[i][j - 1] = temp1[i-20].t8;
                    break;
                  case 9:
                    occupiedSeat[i][j - 1] = temp1[i-20].t9;
                    break;
                  case 10:
                    occupiedSeat[i][j - 1] = temp1[i-20].t10;
                    break;
                }
              }
            }
            db.collection(dataBaseSource).skip(40).limit(40).get({
              success: function (res) {
                temp1 = res.data;
                for (var i = 40; i < Object.keys(temp1).length+40; i++) {
                  for (var j = 1; j < 11; j++) {
                    switch (j) {
                      case 1:
                        occupiedSeat[i][j - 1] = temp1[i-40].t1;
                        break;
                      case 2:
                        occupiedSeat[i][j - 1] = temp1[i-40].t2;
                        break;
                      case 3:
                        occupiedSeat[i][j - 1] = temp1[i-40].t3;
                        break;
                      case 4:
                        occupiedSeat[i][j - 1] = temp1[i-40].t4;
                        break;
                      case 5:
                        occupiedSeat[i][j - 1] = temp1[i-40].t5;
                        break;
                      case 6:
                        occupiedSeat[i][j - 1] = temp1[i-40].t6;
                        break;
                      case 7:
                        occupiedSeat[i][j - 1] = temp1[i-40].t7;
                        break;
                      case 8:
                        occupiedSeat[i][j - 1] = temp1[i-40].t8;
                        break;
                      case 9:
                        occupiedSeat[i][j - 1] = temp1[i-40].t9;
                        break;
                      case 10:
                        occupiedSeat[i][j - 1] = temp1[i-40].t10;
                        break;
                    }
                  }
                }
                db.collection(dataBaseSource).skip(60).limit(20).get({
                  success: function (res) {
                    temp1 = res.data;
                    for (var i = 60; i < Object.keys(temp1).length+60; i++) {
                      for (var j = 1; j < 11; j++) {
                        switch (j) {
                          case 1:
                            occupiedSeat[i][j - 1] = temp1[i-60].t1;
                            break;
                          case 2:
                            occupiedSeat[i][j - 1] = temp1[i-60].t2;
                            break;
                          case 3:
                            occupiedSeat[i][j - 1] = temp1[i-60].t3;
                            break;
                          case 4:
                            occupiedSeat[i][j - 1] = temp1[i-60].t4;
                            break;
                          case 5:
                            occupiedSeat[i][j - 1] = temp1[i-60].t5;
                            break;
                          case 6:
                            occupiedSeat[i][j - 1] = temp1[i-60].t6;
                            break;
                          case 7:
                            occupiedSeat[i][j - 1] = temp1[i-60].t7;
                            break;
                          case 8:
                            occupiedSeat[i][j - 1] = temp1[i-60].t8;
                            break;
                          case 9:
                            occupiedSeat[i][j - 1] = temp1[i-60].t9;
                            break;
                          case 10:
                            occupiedSeat[i][j - 1] = temp1[i-60].t10;
                            break;
                        }
                      }
                    }
                    db.collection(dataBaseSource).skip(80).limit(20).get({
                      success: function (res) {
                        temp1 = res.data;
                        for (var i = 80; i < Object.keys(temp1).length+80; i++) {
                          for (var j = 1; j < 11; j++) {
                            switch (j) {
                              case 1:
                                occupiedSeat[i][j - 1] = temp1[i-80].t1;
                                break;
                              case 2:
                                occupiedSeat[i][j - 1] = temp1[i-80].t2;
                                break;
                              case 3:
                                occupiedSeat[i][j - 1] = temp1[i-80].t3;
                                break;
                              case 4:
                                occupiedSeat[i][j - 1] = temp1[i-80].t4;
                                break;
                              case 5:
                                occupiedSeat[i][j - 1] = temp1[i-80].t5;
                                break;
                              case 6:
                                occupiedSeat[i][j - 1] = temp1[i-80].t6;
                                break;
                              case 7:
                                occupiedSeat[i][j - 1] = temp1[i-80].t7;
                                break;
                              case 8:
                                occupiedSeat[i][j - 1] = temp1[i-80].t8;
                                break;
                              case 9:
                                occupiedSeat[i][j - 1] = temp1[i-80].t9;
                                break;
                              case 10:
                                occupiedSeat[i][j - 1] = temp1[i-80].t10;
                                break;
                            }
                          }
                        }
                        try {
                          wx.setStorageSync('seatData01', occupiedSeat)

                          //生成座位
                          var src_av = "s_seat_av.png";
                          var src_un_s = "s_seat_un.png";
                          var src_un_p = "s_plug_un.png";
                          var src_un_c = "s_pc_un.png";
                          var src_pc = "s_pc_av.png";
                          var src_pg = "s_plug_av.png";
                          var v = {};       //可选
                          var c = {};       //有电脑
                          var g = {};       //有插座
                          var u_v = {};     //不可选座位
                          var u_p = {};     //不可选插座
                          var u_c = {};     //不可选电脑
                          var o = 0;       //空位

                          v.src = src_av;
                          u_v.src = src_un_s;
                          u_p.src = src_un_p;
                          u_c.src = src_un_c;
                          c.src = src_pc;
                          g.src = src_pg;

                          var seatArr =
                            [[g, v, o, v, v, v, v, o, v, g],
                             [g, v, o, v, v, v, v, o, v, g],
                             [g, v, o, v, v, v, v, o, v, g],
                             [g, v, o, v, v, v, v, o, v, g],
                             [g, v, o, v, v, v, v, o, v, g],
                             [g, v, o, v, v, v, v, o, v, g],
                             [g, v, o, v, v, v, v, o, v, g],
                             [g, v, o, v, v, v, v, o, v, g],
                             [g, v, o, v, v, v, v, o, v, g],
                             [g, v, o, v, v, v, v, o, v, g],
                             [o, o, o, o, o, o, o, o, o, o],
                             [c, o, o, c, c, c, c, o, o, c],
                             [c, o, o, v, c, c, v, o, o, c]];


                          var temp_column = 0;
                          var temp_line = 0;
                          var num_0 =0;

                          try {
                            var value = wx.getStorageSync('seatData01')
                              for (var i = 0; i < 130; i++) {
                                temp_line = parseInt(i / 10);
                                temp_column = i % 10;
                                if (seatArr[temp_line][temp_column] == 0) 
                                  num_0++;
                                else{
                                  for (var j = 0; j < 10; j++) {
                                    if (value[i-num_0][j] != "") {
                                      if (value[i-num_0][j].split("-")[1] < 1200) {
                                        if (seatArr[temp_line][temp_column].src == "s_seat_av.png")
                                          seatArr[temp_line][temp_column] = u_v;
                                        else if (seatArr[temp_line][temp_column].src == "s_plug_av.png")
                                          seatArr[temp_line][temp_column] = u_p;
                                        else if (seatArr[temp_line][temp_column].src == "s_pc_av.png")
                                          seatArr[temp_line][temp_column] = u_c;
                                        break;
                                      }
                                    }
                                  }
                              
                                }
                              }

                              wx.setStorageSync('seatData02', seatArr)

                              wx.redirectTo({
                                url: '../chooseSeat/chooseSeat'
                              })


                          } catch (e) {
                            // Do something when catch error
                          }
                        } catch (e) {
                          console.log('error');
                         }
                       
                      }
                    });
                  }
                });
              }
            });
          }
        });
      }
    });

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