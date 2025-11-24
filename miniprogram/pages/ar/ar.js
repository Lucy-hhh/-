// pages/ar/ar.js
Page({
  data: {
    currentSceneIndex: 0,
    scenes: [
      {
        name: '稻鱼共生',
        description: '将手机镜头对准稻田，即刻体验稻鱼共生生态智慧',
        buttonText: '开始稻鱼共生 AR 体验',
        icon: 'https://ai-public.mastergo.com/ai/img_res/db7d16fc5de6a53aa7b0586fca896cb9.jpg'
      },
      {
        name: '梅-茶-鸡-蜂',
        description: '将镜头对准林地，即刻体验梅林与鸡蜂共生的生态循环',
        buttonText: '开始梅-茶-鸡-蜂 AR 体验',
        icon: 'https://ai-public.mastergo.com/ai/img_res/6351715af9c83cd8f4af2aae51ddbd32.jpg'
      },
      {
        name: '桑基鱼塘',
        description: '将镜头对准水塘，即刻体验桑基鱼塘的传统生态系统',
        buttonText: '开始桑基鱼塘 AR 体验',
        icon: 'https://ai-public.mastergo.com/ai/img_res/dc8a7f57671d3fdf8e04c4d7a118c329.jpg'
      }
    ],
    currentScene: {}
  },

  onLoad() {
    this.setData({
      currentScene: this.data.scenes[0]
    });
  },

  // 返回
  goBack() {
    wx.switchTab({
      url: '/pages/index/index'
    });
  },

  // 定位当前位置
  locateCurrent() {
    wx.showToast({
      title: '定位功能开发中',
      icon: 'none'
    });
  },

  // 切换地图类型
  toggleMapType() {
    wx.showToast({
      title: '地图切换功能开发中',
      icon: 'none'
    });
  },

  // 选择场景
  selectScene(e) {
    const index = e.currentTarget.dataset.index;
    this.setData({
      currentSceneIndex: index,
      currentScene: this.data.scenes[index]
    });
  },

  // 开始AR体验
  startAR() {
    wx.showToast({
      title: 'AR功能开发中',
      icon: 'none'
    });
  }
});

