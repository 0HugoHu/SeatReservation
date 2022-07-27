
/* CopyRight 胡亚东 20190623*/
/*
  包含自定义Toast，获取通知栏高度，使用云函数
*/

import { ToastPannel } from './appToast/appToast'
App({
  ToastPannel,
  onLaunch: function () {

    wx.getSystemInfo({
      success: res => {
        this.globalData.navHeight = res.statusBarHeight + 46;
      }, fail(err) {
        console.log(err);
      }
    })

    if (!wx.cloud) {
      console.error('请使用 2.2.3 或以上的基础库以使用云能力')
    } else {
      wx.cloud.init({
        traceUser: true,
      })
    }

  },

  globalData: {
    userInfo: null,
    navHeight: 0
  }
})
