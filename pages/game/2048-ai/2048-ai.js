// pages/game/2048-ai/2048-ai.js
var base_page = require('../../base_page.js')

base_page.register({
  /**
   * 页面的初始数据
   */
  data: {
    url: 'https://gifer.cn/games/2048-ai'
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    return {
      title: '2048 AI',
      path: '/pages/game/2048-ai'
    }
  }  
})