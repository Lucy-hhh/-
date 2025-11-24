// pages/profile/profile.js
const CartManager = require('../../utils/cart.js');
const app = getApp();

Page({
  data: {
    sceneCount: 0,
    favoriteCount: 0,
    orderCount: 0,
    orderStats: {
      pending_payment: 0,
      pending_shipment: 0,
      pending_receive: 0,
      completed: 0
    }
  },

  onLoad() {
    this.loadData();
  },

  onShow() {
    this.loadData();
  },

  // 加载数据
  loadData() {
    // 加载订单统计
    const stats = CartManager.getOrderStats();
    this.setData({
      orderStats: stats,
      orderCount: stats.completed
    });

    // 加载收藏数量
    const favorites = wx.getStorageSync('user_favorites') || [];
    this.setData({
      favoriteCount: favorites.length
    });
  },

  // 显示编辑资料
  showEditProfile() {
    wx.showToast({
      title: '编辑资料功能开发中',
      icon: 'none'
    });
  },

  // 退出登录
  handleLogout() {
    wx.showModal({
      title: '提示',
      content: '确定要退出登录吗？',
      success: (res) => {
        if (res.confirm) {
          app.logout();
        }
      }
    });
  },

  // 显示场景
  showScenes() {
    wx.showToast({
      title: '体验场景功能开发中',
      icon: 'none'
    });
  },

  // 显示收藏
  showFavorites() {
    wx.showToast({
      title: '我的收藏功能开发中',
      icon: 'none'
    });
  },

  // 显示所有订单
  showAllOrders() {
    wx.showToast({
      title: '订单列表功能开发中',
      icon: 'none'
    });
  },

  // 显示指定状态的订单
  showOrdersByStatus(e) {
    const status = e.currentTarget.dataset.status;
    wx.showToast({
      title: `订单列表功能开发中（${status}）`,
      icon: 'none'
    });
  },

  // 显示行程
  showItinerary() {
    wx.showToast({
      title: '我的行程功能开发中',
      icon: 'none'
    });
  },

  // 显示设置
  showSettings() {
    wx.showToast({
      title: '设置功能开发中',
      icon: 'none'
    });
  },

  // 显示客服中心
  showCustomerService() {
    wx.showToast({
      title: '客服中心功能开发中',
      icon: 'none'
    });
  }
});

