// pages/game/card_duel/card_duel.js
var base_page = require('../../base_page.js')

base_page.register({
  /**
   * 页面的初始数据
   */
  data: {
    url: 'https://gifer.cn/games/card_duel'
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    return {
      title: 'Card Duel',
      path: '/pages/game/card_duel'
    }
  }
})