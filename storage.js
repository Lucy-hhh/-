// 存储工具函数
const Storage = {
  // 获取购物车
  getCart() {
    return wx.getStorageSync('shopping_cart') || [];
  },

  // 设置购物车
  setCart(cart) {
    wx.setStorageSync('shopping_cart', cart);
  },

  // 获取订单
  getOrders() {
    return wx.getStorageSync('user_orders') || [];
  },

  // 设置订单
  setOrders(orders) {
    wx.setStorageSync('user_orders', orders);
  },

  // 获取收藏
  getFavorites() {
    return wx.getStorageSync('user_favorites') || [];
  },

  // 设置收藏
  setFavorites(favorites) {
    wx.setStorageSync('user_favorites', favorites);
  },

  // 检查登录状态
  isLoggedIn() {
    return wx.getStorageSync('isLoggedIn') === true;
  }
};

module.exports = Storage;

