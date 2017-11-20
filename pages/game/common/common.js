// pages/game/common/common.js
var base_page = require('../../base_page.js')

base_page.register({
  /**
   * 页面的初始数据
   */
  data: {
    name: '',
    url: ''
  },

  onLoad: function (options) {
    this.setData({
      name: options.name,
      url: options.url
    })
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    return {
      title: this.data.name,
      path: '/pages/game/common/commom' + 
        '?name=' + this.data.name + 
        '&url=' + this.data.url
    }
  }
})

