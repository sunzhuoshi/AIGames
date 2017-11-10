//app.js
App({
  onLaunch: function () {
  },
  globalData: {
    currentGameUrl: '',
    gameList: [
      {
        id: '2048-ai',
        name: '2048 AI',
        icon_url: 'images/2048-ai.png',
        desc: '2048 AI版，使用了Expectimax与Pure Monte Carlo算法。',
        game_url: 'https://gifer.cn/games/2048-ai'
      },
      {
        id: 'fb-ql',
        name: 'Flappy Bird AI',
        icon_url: 'images/fb-ql.png',
        desc: 'Flappy Bird AI版，使用了Q Learning算法。',
        game_url: 'https://gifer.cn/games/fb-ql'
      },
      {
        id: 'card_duel',
        name: 'Card Duel',
        icon_url: 'images/card_duel.png',
        desc: '一款简单的在线卡牌对战游戏，使用了Pure Monte Carlo算法。',
        game_url: 'https://gifer.cn/games/card_duel'
      },      
    ]
  }
})