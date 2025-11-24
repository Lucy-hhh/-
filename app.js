// app.js
App({
  onLaunch() {
    // 检查登录状态
    this.checkLoginStatus();
    
    // 初始化购物车和订单数据
    this.initStorage();
  },

  // 检查登录状态
  checkLoginStatus() {
    const isLoggedIn = wx.getStorageSync('isLoggedIn');
    const pages = getCurrentPages();
    const currentPage = pages[pages.length - 1];
    const route = currentPage ? currentPage.route : '';
    
    // 如果未登录且不在登录页，跳转到登录页
    if (!isLoggedIn && route !== 'pages/login/login') {
      wx.redirectTo({
        url: '/pages/login/login'
      });
    }
    
    // 如果已登录且在登录页，跳转到首页
    if (isLoggedIn && route === 'pages/login/login') {
      wx.switchTab({
        url: '/pages/index/index'
      });
    }
  },

  // 初始化存储
  initStorage() {
    // 初始化购物车
    if (!wx.getStorageSync('shopping_cart')) {
      wx.setStorageSync('shopping_cart', []);
    }
    
    // 初始化订单
    if (!wx.getStorageSync('user_orders')) {
      wx.setStorageSync('user_orders', []);
    }
    
    // 初始化收藏
    if (!wx.getStorageSync('user_favorites')) {
      wx.setStorageSync('user_favorites', []);
    }
  },

  // 登录方法
  login() {
    wx.setStorageSync('isLoggedIn', true);
    wx.switchTab({
      url: '/pages/index/index'
    });
  },

  // 登出方法
  logout() {
    wx.removeStorageSync('isLoggedIn');
    wx.redirectTo({
      url: '/pages/login/login'
    });
  },

  globalData: {
    userInfo: null
  }
});

