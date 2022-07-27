
/* CopyRight 胡亚东 20190623*/
/*
  主界面-选择教室-选择座位界面
*/

var util = require('../../utils/util.js');
var timer;
var DATE = util.formatDate(new Date());
var TIME = util.formatTime(new Date());
var TIME_p = util.formatTime_plus1(new Date());
var Year = util.formatDay(new Date());
var Day = util.formatDay(new Date());
var Month = util.formatMonth(new Date());
const app = getApp();

Page({

  data: {
    dialogvisible: false,
    dialog2visible: false,
    options: {
      showclose: true,
      showfooter: true,
      closeonclickmodal: true,
      fullscreen: false
    },
    title: '',
    content:'',
    opacity: '0.4',
    width: '85',
    position: 'center',

    // 座位数组
    seatArr: '',
    // 已选择座位数组
    selectArr: '',
    // 不可选座位数组
    unavailableArr: '',
    // 是否显示弹窗
    isShow: false,

    //可选位置数量
    canSelected:1,

    //座位坐标y
    y:0,


    //已选时间
    hasChosenTime1:false,
    hasChosenTime2:false,

    //云数据
    cloudData:'',
    dataset1:'',
    dataset2: new Object(),
    dataset3: new Object(),
    dataset4: new Object(),
    dataset5: new Object(),

    //可移动区域大小
    movableheight: 800,
    floatwidth: 50,
    floatheight: 22,
    scale: 1.3,
    date:DATE,
    timeBegin:TIME,
    timeEnd:TIME_p,
    hour: [['07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23'], ['00', '05',  '10',  '15',  '20', '25','30','35','40','45','50','55']]
  },

  showDialog: function () {
    this.setData({
      dialogvisible: true
    })
  },
  showDialog2: function () {
    this.setData({
      dialog2visible: true
    })
  },
  handleClose: function () {},
  handleOpen: function () {},
  handleConfirm: function () {
  var that=this;
  var position=(that.data.selectArr[0].x-1)*8 + that.data.selectArr[0].y;
    const db = wx.cloud.database();
    db.collection('Studyzone_test01').where({
      seatIndex: 's'+position
    }).get({
      success: function (res) {
        var timeBEGIN = that.data.timeBegin.replace(':', '');
        var timeEND = that.data.timeEnd.replace(':', '');
        var flag=false;
        for(var i=0;i<10;i++){
          switch (i) {
            case 0:
              if (res.data[0].t1 != '')
                if ((Number(res.data[0].t1.split("-")[1]) >= Number(timeBEGIN) && Number(res.data[0].t1.split("-")[0]) <= Number(timeEND)) )
                    flag=true;
              break;
            case 1:
              if (res.data[0].t2 != '')
                if ((Number(res.data[0].t2.split("-")[1]) >= Number(timeBEGIN) && Number(res.data[0].t2.split("-")[0]) <= Number(timeEND)))
                  flag = true;
               break;
            case 2:
              if (res.data[0].t3 != '')
                if ((Number(res.data[0].t3.split("-")[1]) >= Number(timeBEGIN) && Number(res.data[0].t3.split("-")[0]) <= Number(timeEND)))
                  flag = true;
              break;
            case 3:
              if (res.data[0].t4 != '')
                if ((Number(res.data[0].t4.split("-")[1]) >= Number(timeBEGIN) && Number(res.data[0].t4.split("-")[0]) <= Number(timeEND)))
                  flag = true;
              break;
            case 4:
              if (res.data[0].t5 != '')
                if ((Number(res.data[0].t5.split("-")[1]) >= Number(timeBEGIN) && Number(res.data[0].t5.split("-")[0]) <= Number(timeEND)))
                  flag = true;
              break;
            case 5:
              if (res.data[0].t6 != '')
                if ((Number(res.data[0].t6.split("-")[1]) >= Number(timeBEGIN) && Number(res.data[0].t6.split("-")[0]) <= Number(timeEND)))
                  flag = true;
              break;
            case 6:
              if (res.data[0].t7 != '')
                if ((Number(res.data[0].t7.split("-")[1]) >= Number(timeBEGIN) && Number(res.data[0].t7.split("-")[0]) <= Number(timeEND)))
                  flag = true;
              break;
            case 7:
              if (res.data[0].t8 != '')
                if ((Number(res.data[0].t8.split("-")[1]) >= Number(timeBEGIN) && Number(res.data[0].t8.split("-")[0]) <= Number(timeEND)))
                  flag = true;
              break;
            case 8:
              if (res.data[0].t9 != '')
                if ((Number(res.data[0].t9.split("-")[1]) >= Number(timeBEGIN) && Number(res.data[0].t9.split("-")[0]) <= Number(timeEND)))
                  flag = true;
              break;
            case 9:
              if (res.data[0].t10 != '')
                if ((Number(res.data[0].t10.split("-")[1]) >= Number(timeBEGIN) && Number(res.data[0].t10.split("-")[0]) <= Number(timeEND)))
                  flag = true;
              break;
        }

        if(flag==true){
          break;
        }else{
          continue;
        }
        }
        var id=res.data[0]._id;
        console.log(id)
        if(flag==false){
          try {

            /*
            微信小程序数据库对访问权限的管控很严格，用户无法修改非自己创建的数据。因时间问题，此问题目前不做解决。这一块将不修改云数据库，以本地储存模拟数据作演示。后期通过云函数形式可以解决权限问题。
            */
            /*const db = wx.cloud.database();
            db.collection('Studyzone_test01').doc(id).update({
              data: {
                occupiedTimeNum: _.inc(1),
                t5: that.data.timeBegin.replace(':', '') + '-' + that.data.timeEnd.replace(':', '')
              },
              success: function (res) {
              
              }
            })

            */
            var value = wx.getStorageSync('userData')
            if (value) {
              var id = value[0];
              console.log(id)
              db.collection('userData').where({
                userId: id
              })
                .get({
                  success: function (res) {
                
                    var userDataId = res.data[0]._id
                    console.log(userDataId)
                    db.collection('userData').doc(userDataId).update({
                      data: {
                        timeDay: DATE,
                        startTime: that.data.timeBegin,
                        endTime: that.data.timeEnd,
                        room: 'X3102 教室',
                        number: that.data.selectArr[0].x + '-' + that.data.selectArr[0].y,
                        entered: '否',
                        leaved: '否',
                        temp0: '',
                        temp1: '',
                        temp2: '',
                      },
                      success: function (res) {
                        console.log("???")
                        wx.redirectTo({
                          url: '../../pages/chooseSeatSucceed/chooseSeatSucceed'
                        })
                      }
                    })
                  }
                })
            } else {
              wx.redirectTo({
                url: '../../pages/chooseSeatFailed/chooseSeatFailed',
              })
            }
           
          } catch (e) {
            // Do something when catch error
          }
         

      }
      }
    })
    
    
    },

  final_choose:function(){
    this.setData({
      title: '确认选座？',
      content: '选座后您可以在起始时间前15分钟内选择取消，但一天最多取消2次。\n若您没有在规定时间打卡签到，您的信用积分会降低。'
    })
    this.showDialog2();
  },

  navigationButton:function(){
    wx.redirectTo({
      url: '/pages/chooseRoom/chooseRoom'
    })
  },

  queationButton:function(){
    this.setData({
      title:'关于日期和时间的选择',
      content:'座位当前仅可预约今日和明日\n起始时间不得早于7：00\n结束时间不得晚于23：00\n每次选座最短时长1小时'
    })
    this.showDialog();
  },

  propertyButton:function(){
    this.setData({
      title: '关于座位',
      content: '座位分为三种类型：普通座位、有插座的座位和有电脑的座位。\n灰色为可选座位，红色为已被占用座位，绿色为您当前的选择。\n\n通常情况下您一次仅能预约1个位置，但当您长期维持良好信用时，可选位置可增加至2个。'
    })
    this.showDialog();
  },

  photo_360degree(){

  },

  updateData(){
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

      var flag=false;
      var timeBEGIN = this.data.timeBegin.replace(':', '');
      var timeEND = this.data.timeEnd.replace(':', '');
      try {
        var value = wx.getStorageSync('seatData01');
        var seatArr = this.data.seatArr;

        var temp_column = 0;
        var temp_line = 0;
        var num_0 = 0;

        for (var i = 0; i < 130; i++) {

          temp_line = parseInt(i / 10);
          temp_column = i % 10;

          if (seatArr[temp_line][temp_column] == 0){
            num_0++;
          }else {

            for (var j = 0; j < 10; j++) {
              if (value[i - num_0][j] != "") {
                if (Number(value[i - num_0][j].split("-")[1]) >= Number(timeBEGIN) && Number(value[i - num_0][j].split("-")[0]) <= Number(timeEND)) {
                  flag=true;
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
            if(!flag){
              if (seatArr[temp_line][temp_column].src == "s_seat_un.png")
                seatArr[temp_line][temp_column] = v;
              else if (seatArr[temp_line][temp_column].src == "s_plug_un.png")
                seatArr[temp_line][temp_column] = g;
              else if (seatArr[temp_line][temp_column].src == "s_pc_un.png")
                seatArr[temp_line][temp_column] = c;
              flag = !flag
            }
            flag = !flag
          }
        }
        this.setData({
          seatArr: seatArr
        })
 
      } catch (e) {
        // Do something when catch error
      }
  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    new app.ToastPannel();
    //app.setWatcher(this.data.hasChosenTime2);


    try {
      this.setData({
        seatArr:wx.getStorageSync('seatData02')
      });
    }catch(e){}

    this.setData({
      navH: app.globalData.navHeight
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    wx.hideLoading()
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
  //选择座位
  bindGetLocation: function (e) {
    if(this.data.hasChosenTime1==true&&this.data.hasChosenTime2==true){
    var that = this;
    var seatsrc = e.currentTarget.dataset.src;
    var seledata = {
      x: e.currentTarget.dataset.x + 1,
      y: e.currentTarget.dataset.y,
    }
    var src = 'seatArr[' + e.currentTarget.dataset.x + '][' + e.currentTarget.dataset.y + '].src'
    if (seatsrc == "s_seat_av.png" || seatsrc == "s_pc_av.png"||seatsrc == "s_plug_av.png") {
      if (that.data.selectArr.length < that.data.canSelected) {
        var arr = new Array();
        if (that.data.selectArr.length == 0) {
          arr.push(seledata)
        } else {
          arr = that.data.selectArr;
          arr.push(seledata)
        }
        if (seatsrc == "s_seat_av.png") {
          that.setData({
            [src]: "s_seat_choose.png",
            selectArr: arr,
          })
        } else if (seatsrc == "s_pc_av.png") {
          that.setData({
            [src]: "s_pc_choose.png",
            selectArr: arr,
          })
        } else{
          that.setData({
            [src]: "s_plug_choose.png",
            selectArr: arr,
          })
        }
        var y=0;
        if (e.currentTarget.dataset.y <= 2)
          y = e.currentTarget.dataset.y+1;
        else if (e.currentTarget.dataset.y > 2 && e.currentTarget.dataset.y <= 7)
         y = e.currentTarget.dataset.y;
        else if (e.currentTarget.dataset.y > 7)
         y = e.currentTarget.dataset.y - 1;
        else
          y = e.currentTarget.dataset.y
         this.setData({
           y:y
         })
        this.show((e.currentTarget.dataset.x + 1) + '排 ' + y + "座");
        
      } else {
        this.show('您当前只可选择'+that.data.canSelected+'个座位');
      }

    } else if (seatsrc == "s_seat_choose.png" || seatsrc == "s_pc_choose.png"||seatsrc == "s_plug_choose.png") {
      let arr = new Array();
      arr = that.data.selectArr;
      for (var i = 0; i < arr.length; i++) {
        if (arr[i].x == seledata.x && arr[i].y == seledata.y) {
          arr.splice(i, 1);
        }
      }
      if (seatsrc == "s_seat_choose.png") {
        that.setData({
          [src]: "s_seat_av.png",
          selectArr: arr,
        })
      } else if (seatsrc == "s_pc_choose.png") {
        that.setData({
          [src]: "s_pc_av.png",
          selectArr: arr,
        })
      } else {
        that.setData({
          [src]: "s_plug_av.png",
          selectArr: arr,
        })
      }
    } else if (seatsrc == "s_seat_un.png" || seatsrc == "s_pc_un.png"||seatsrc == "s_plug_un.png") {
      this.show('这个位置有人了哦')
    }
    }else{
      this.show("请先选择起始结束时间")
    }
  },
  //显示弹窗
  bindShowSeat: function (e) {
    this.setData({
      isShow: !this.data.isShow
    });
  },
  //关闭弹窗
  togglePopup() {
    this.setData({
      isShow: !this.data.isShow
    });
  },
  //删除门票
  binddelete: function (e) {
    var that = this;
    let arrys = that.data.seatArr;
    let arr = new Array();
    arr = that.data.selectArr;
    arr.splice(e.currentTarget.dataset.index, 1);

    if (arrys[e.currentTarget.dataset.x - 1][e.currentTarget.dataset.y].src == "s_seat_choose.png") {
      arrys[e.currentTarget.dataset.x - 1][e.currentTarget.dataset.y].src = "s_seat_av.png";
    } else if (arrys[e.currentTarget.dataset.x - 1][e.currentTarget.dataset.y].src == "s_pc_choose.png") {
      arrys[e.currentTarget.dataset.x - 1][e.currentTarget.dataset.y].src = "s_pc_av.png";
    } else if (arrys[e.currentTarget.dataset.x - 1][e.currentTarget.dataset.y].src == "s_plug_choose.png"){
      arrys[e.currentTarget.dataset.x - 1][e.currentTarget.dataset.y].src = "s_plug_av.png";
    }
    that.setData({
      seatArr: arrys,
      selectArr: arr
    })
    if (arr.length == 0) {
      that.setData({
        isShow: false
      });
    }
  },
  //移动结束
  touchend: function (e) {
    let that = this;
    timer = setTimeout(function () {
      that.setData({
        isHidden: true
      })
    }, 3500)
  },
  //横向移动
  onChange: function (e) {
    clearTimeout(timer);
    if (this.data.scale == 1.3) {
      this.setData({
        left: 10 + Math.abs(e.detail.x) * 0.2,
        top: 10 + Math.abs(e.detail.y),
        isHidden: false
      })
    } else if (this.data.scale >= 1.4 && this.data.scale <= 1.5) {
      this.setData({
        left: 10 + Math.abs(e.detail.x) * 0.25,
        top: 10 + Math.abs(e.detail.y) * 0.9,
        isHidden: false
      })
    } else if (this.data.scale >= 1.6 && this.data.scale <= 1.7) {
      this.setData({
        left: 10 + Math.abs(e.detail.x) * 0.4,
        top: 10 + Math.abs(e.detail.y) * 0.8,
        isHidden: false
      })
    } else if (this.data.scale >= 1.8 && this.data.scale <= 1.9) {
      this.setData({
        left: 10 + Math.abs(e.detail.x) * 0.43,
        top: 10 + Math.abs(e.detail.y) * 0.7,
        isHidden: false
      })
    } else if (this.data.scale >= 2.0 && this.data.scale <= 2.2) {
      this.setData({
        left: 10 + Math.abs(e.detail.x) * 0.41,
        top: 10 + Math.abs(e.detail.y) * 0.6,
        isHidden: false
      })
    } else if (this.data.scale >= 2.3 && this.data.scale <= 2.4) {
      this.setData({
        left: 10 + Math.abs(e.detail.x) * 0.5,
        top: 10 + Math.abs(e.detail.y) * 0.5,
        isHidden: false
      })
    } else if (this.data.scale >= 2.5 && this.data.scale <= 2.7) {
      this.setData({
        left: 10 + Math.abs(e.detail.x) * 0.37,
        top: 10 + Math.abs(e.detail.y) * 0.45,
        isHidden: false
      })
    } else {
      this.setData({
        left: 10 + Math.abs(e.detail.x) * 0.35,
        top: 10 + Math.abs(e.detail.y) * 0.38,
        isHidden: false
      })
    }

  },
  //放大比例
  onScale: function (e) {
    let num = (e.detail.scale - 1.2) * 10
    if (e.detail.scale <= 1.9) {
      this.setData({
        cawidth: 55 - num,
        caheigth: 280 - num * 10,
        scale: e.detail.scale
      })
    } else if (e.detail.scale >= 2.0 && e.detail.scale <= 2.4) {
      let nums = (e.detail.scale - 2.0) * 20
      this.setData({
        cawidth: 28 - nums,
        caheigth: 180 - nums * 10,
        scale: e.detail.scale
      })

    } else if (e.detail.scale >= 2.5 && e.detail.scale <= 2.6) {
      this.setData({
        cawidth: 20,
        caheigth: 140,
        scale: e.detail.scale
      })
    } else {
      this.setData({
        cawidth: 20,
        caheigth: 120,
        scale: e.detail.scale
      })

    }
  },

  dateChange: function(e){
    let value=e.detail.value;
    var date=value.replace('-','');
    date = date.replace('-', '');
    var date0 = DATE.replace('-','');
    date0 = date0.replace('-', '');
    var date1 = Number(date0) + 1;
    var date2 = Number(date0) + 70;
    var date3 = Number(date0) + 70;
    var date4 = Number(date0) + 71;
    var date5 = Number(date0) + 72;
    var date6 = Number(date0) + 73;


    if (date == date0 || date == date1 || date == date2 || date == date3 || date == date4 || date == date5 || date == date6) { this.setData({ date: value });}
    else{
      this.show('只可以预约今天和明天哦');
      this.setData({
          date:DATE
      })
    }


  },

  hourChange: function(e){

    let arrayIndex=e.detail.value;
    let array=this.data.hour;
    let value=new Array();
    for(let i=0;i<arrayIndex.length;i++){
      let k=arrayIndex[i];
      let v=array[i][k];
      value.push(v);
    }
    this.setData({ timeBegin: value.join(':')});
    this.setData({
      hasChosenTime1: true
    })
    if(this.data.hasChosenTime2=true)
      this.updateData();
  },

  hourChange2: function (e) {
    if (this.data.hasChosenTime1 == false)
      this.show("请先选择起始时间")
    else{
    let arrayIndex = e.detail.value;
    let array = this.data.hour;
    let value = new Array();
    for (let i = 0; i < arrayIndex.length; i++) {
      let k = arrayIndex[i];
      let v = array[i][k];
      value.push(v);
    }
    this.setData({ timeEnd:value.join(':') });
    if (this.data.timeEnd.replace(':',"")<this.data.timeBegin.replace(':',"")){
      this.show('结束时间不应小于起始时间');
      this.setData({ timeBegin: TIME });
      this.setData({ timeEnd: TIME_p });
    } else if (((parseInt(this.data.timeEnd.replace(':', "") / 100) - parseInt(this.data.timeBegin.replace(':', "") / 100)) * 60 + this.data.timeEnd.replace(':', "") % 100 - this.data.timeBegin.replace(':', "") % 100)<60){
      this.show('预约时间不得短于1小时');
      this.setData({ timeBegin: TIME });
      this.setData({ timeEnd: TIME_p });
    }
    this.setData({
      hasChosenTime2:true
    })
      this.updateData();
    }
  }
})