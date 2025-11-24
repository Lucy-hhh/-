// pages/shop/shop.js
const CartManager = require('../../utils/cart.js');

Page({
  data: {
    products: [
      {
        id: 'qingtian_daoyumi',
        name: '青田稻鱼米',
        price: 35,
        unit: '包',
        image: 'https://ai-public.mastergo.com/ai/img_res/b50e0c1876cd3d1948be4c287097d5a7.jpg'
      },
      {
        id: 'xianju_yangmeijiu',
        name: '仙居杨梅酒',
        price: 80,
        unit: '瓶',
        image: '/image/xianjujiu.png'
      },
      {
        id: 'sanhuangji',
        name: '三黄鸡',
        price: 29,
        unit: '只',
        image: '/image/sanhuangji.png'
      },
      {
        id: 'chansibei',
        name: '蚕丝被',
        price: 200,
        unit: '床',
        image: '/image/chansibei.png'
      },
      {
        id: 'qingtian_yugan',
        name: '青田鱼干',
        price: 28,
        unit: '包',
        image: '/image/qingtianyugan.png'
      },
      {
        id: 'xianju_yangmeigan',
        name: '仙居杨梅干',
        price: 35,
        unit: '袋',
        image: '/image/xianjuyangmeigan.png'
      },
      {
        id: 'xianju_chaye',
        name: '仙居茶叶',
        price: 60,
        unit: '罐',
        image: '/image/xianjuchaye.png'
      },
      {
        id: 'xianju_fengmi',
        name: '仙居蜂蜜',
        price: 50,
        unit: '罐',
        image: '/image/xianjufengmi.png'
      },
      {
        id: 'nanxun_huacha',
        name: '南浔桑花茶',
        price: 45,
        unit: '盒',
        image: '/image/nanxunhuacha.png'
      },
      {
        id: 'nanxun_xunyu',
        name: '南浔熏鱼',
        price: 32,
        unit: '盒',
        image: '/image/nanxunxunyu.png'
      }
    ],
    cartCount: 0
  },

  onLoad() {
    this.updateCartCount();
  },

  onShow() {
    this.updateCartCount();
  },

  // 更新购物车数量
  updateCartCount() {
    const count = CartManager.getCartCount();
    this.setData({
      cartCount: count
    });
  },

  // 搜索点击
  onSearchTap() {
    wx.showToast({
      title: '搜索功能开发中',
      icon: 'none'
    });
  },

  // 导航到分类
  navigateToCategory(e) {
    const type = e.currentTarget.dataset.type;
    wx.showToast({
      title: '分类功能开发中',
      icon: 'none'
    });
  },

  // 导航到商品详情
  navigateToDetail(e) {
    const id = e.currentTarget.dataset.id;
    wx.navigateTo({
      url: `/pages/product-detail/product-detail?id=${id}`
    });
  },

  // 立即购买
  buyNow(e) {
    e.stopPropagation();
    const id = e.currentTarget.dataset.id;
    wx.navigateTo({
      url: `/pages/product-detail/product-detail?id=${id}`
    });
  },

  // 显示购物车
  showCart() {
    wx.showToast({
      title: '购物车功能开发中',
      icon: 'none'
    });
  }
});

