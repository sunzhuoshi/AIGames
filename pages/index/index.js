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
    var gameId = event.currentTarget.dataset.id;

    wx.navigateTo({
      url: '../game/' + gameId + '/' + gameId
    });
  }
})
