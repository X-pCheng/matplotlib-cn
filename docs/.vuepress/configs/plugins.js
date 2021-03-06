module.exports = [
  ['@vuepress/back-to-top', true],
  ['@vuepress/pwa', {
    serviceWorker: true,
    updatePopup: {
      '/': {
        message: "更新了新内容呢！",
        buttonText: "立即刷新"
      },
      '/en/': {
        message: "New content is available.",
        buttonText: "Refresh"
      }
    }
  }],
  ['@vuepress/medium-zoom', true],
  ['container', {
    type: 'vue',
    before: '<pre class="vue-container"><code>',
    after: '</code></pre>',
  }],
  ['container', {
    type: 'upgrade',
    before: info => `<UpgradePath title="${info}">`,
    after: '</UpgradePath>',
  }],
  ['vuepress-plugin-comment', {
    choosen: 'valine', 
    // options选项中的所有参数，会传给Valine的配置
    options: {
      el: '#valine-vuepress-comment',
      appId: 'QJizjbjqtC0sNrkS4VpJEzOg-gzGzoHsz',
      appKey: 'zHW13kPdJ1Wyt6NlPM3bxw2j',
      placeholder: '评论系统公测中，👏欢迎体验！'
    }
  }]
]
