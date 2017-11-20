// pages/game/fb-ql/fb-ql.js
var base_page = require('../../base_page.js')

base_page.register({
  /**
   * 页面的初始数据
   */
  data: {
    url: 'https://gifer.cn/games/fb-ql'
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    return {
      title: 'Flappy Bird AI',
      path: '/pages/game/fb-ql'
    }
  }
})