//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    gameList: app.globalData.gameList,
  },
  onLoad: function () {
  },
  viewGame: function(event) {
    app.globalData.currentGameUrl = event.currentTarget.dataset.url;

    wx.navigateTo({
      url: '../game/common/common'
    });
  }
})
