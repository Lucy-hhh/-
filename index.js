// pages/index/index.js
Page({
  data: {
    
  },

  onLoad() {
    // 检查登录状态
    const isLoggedIn = wx.getStorageSync('isLoggedIn');
    if (!isLoggedIn) {
      wx.redirectTo({
        url: '/pages/login/login'
      });
    }
  },

  // 搜索点击
  onSearchTap() {
    wx.showToast({
      title: '搜索功能开发中',
      icon: 'none'
    });
  },

  // 消息点击
  onMessageTap() {
    wx.showToast({
      title: '消息功能开发中',
      icon: 'none'
    });
  },

  // 导航到AR场景
  navigateToAR() {
    wx.switchTab({
      url: '/pages/ar/ar'
    });
  },

  // 导航到商城
  navigateToShop() {
    wx.switchTab({
      url: '/pages/shop/shop'
    });
  },

  // 导航到旅游
  navigateToTravel() {
    wx.switchTab({
      url: '/pages/travel/travel'
    });
  },

  // 导航到我的
  navigateToProfile() {
    wx.switchTab({
      url: '/pages/profile/profile'
    });
  },

  // 导航到百科详情
  navigateToBaikeDetail(e) {
    const type = e.currentTarget.dataset.type;
    wx.navigateTo({
      url: `/pages/baike-detail/baike-detail?type=${type}`
    });
  }
});

