//index.js
var config = require('../../config.js')
//获取应用实例
const app = getApp()

Page({
  data: {
    gameList: app.globalData.gameList,
  },

  onLoad: function () {
  },

  viewGame: function(event) {
    if (config.USE_COMMON_PAGE) {
      wx.navigateTo({
        url: '../game/common/common' + 
          '?name=' + event.target.dataset.name + 
          '&url=' + event.target.dataset.url
      })
    }
    else {
      wx.navigateTo({
        url: '../game/' + event.target.dataset.id + '/' + event.target.dataset.id
      });
    }
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    return {
      title: '人工智能游戏',
      path: '/pages/index/index'
    }    
  }  
})
