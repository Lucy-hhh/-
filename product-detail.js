// pages/product-detail/product-detail.js
const CartManager = require('../../utils/cart.js');
const app = getApp();

Page({
  data: {
    product: {
      id: 'qingtian_daoyumi',
      name: '青田稻鱼米',
      price: 35,
      unit: '包',
      image: 'https://ai-public.mastergo.com/ai/img_res/8db8a310779c25fba63822ad97e9525a.jpg',
      description: '青田稻鱼米产自浙江青田，采用千年传承的稻鱼共生系统种植。鱼为水稻除草除虫，稻为鱼提供庇护和食物，形成天然的生态循环。这种古老的农耕智慧不仅保护了环境，更孕育出了营养丰富、口感独特的优质大米。',
      origin: '浙江省青田县',
      weight: '500g',
      shelfLife: '12个月',
      package: '真空包装'
    },
    quantity: 1,
    totalPrice: 35,
    comments: [
      {
        id: 1,
        name: '李女士',
        avatar: 'https://ai-public.mastergo.com/ai/img_res/d3536d6f0b86463ecc5e9736346d69d6.jpg',
        rating: 5,
        text: '米粒饱满，煮出来的饭特别香！家人都说好吃。',
        date: '2023-10-15'
      },
      {
        id: 2,
        name: '张先生',
        avatar: 'https://ai-public.mastergo.com/ai/img_res/e631d41c89435c59d4384d2fd43ba324.jpg',
        rating: 4,
        text: '包装很好，物流也快。就是价格稍微有点贵。',
        date: '2023-10-10'
      }
    ]
  },

  onLoad(options) {
    const id = options.id;
    // 根据id加载商品数据
    this.loadProduct(id);
  },

  // 加载商品数据
  loadProduct(id) {
    // 这里应该从服务器加载商品数据
    // 暂时使用默认数据
    const products = {
      'qingtian_daoyumi': {
        id: 'qingtian_daoyumi',
        name: '青田稻鱼米',
        price: 35,
        unit: '包',
        image: 'https://ai-public.mastergo.com/ai/img_res/8db8a310779c25fba63822ad97e9525a.jpg',
        description: '青田稻鱼米产自浙江青田，采用千年传承的稻鱼共生系统种植。鱼为水稻除草除虫，稻为鱼提供庇护和食物，形成天然的生态循环。这种古老的农耕智慧不仅保护了环境，更孕育出了营养丰富、口感独特的优质大米。',
        origin: '浙江省青田县',
        weight: '500g',
        shelfLife: '12个月',
        package: '真空包装'
      }
    };
    
    const product = products[id] || this.data.product;
    this.setData({
      product: product,
      totalPrice: product.price
    });
  },

  // 返回
  goBack() {
    wx.navigateBack();
  },

  // 减少数量
  decreaseQuantity() {
    if (this.data.quantity > 1) {
      const quantity = this.data.quantity - 1;
      this.setData({
        quantity: quantity,
        totalPrice: this.data.product.price * quantity
      });
    }
  },

  // 增加数量
  increaseQuantity() {
    const quantity = this.data.quantity + 1;
    this.setData({
      quantity: quantity,
      totalPrice: this.data.product.price * quantity
    });
  },

  // 立即购买
  buyNow() {
    // 检查登录状态
    const isLoggedIn = wx.getStorageSync('isLoggedIn');
    if (!isLoggedIn) {
      wx.showModal({
        title: '提示',
        content: '请先登录',
        success: (res) => {
          if (res.confirm) {
            wx.redirectTo({
              url: '/pages/login/login'
            });
          }
        }
      });
      return;
    }

    // 创建订单
    const order = CartManager.createOrder({
      products: [{
        ...this.data.product,
        quantity: this.data.quantity
      }],
      totalAmount: this.data.totalPrice,
      address: '请选择收货地址',
      phone: '',
      receiver: ''
    });

    // 跳转到支付页面（模拟）
    wx.showModal({
      title: '确认订单',
      content: `商品：${this.data.product.name} × ${this.data.quantity}\n总计：¥${this.data.totalPrice}`,
      success: (res) => {
        if (res.confirm) {
          CartManager.payOrder(order.id).then(() => {
            wx.showToast({
              title: '支付成功',
              icon: 'success'
            });
            setTimeout(() => {
              wx.switchTab({
                url: '/pages/profile/profile'
              });
            }, 1500);
          }).catch(() => {
            wx.showToast({
              title: '支付失败，请重试',
              icon: 'none'
            });
          });
        }
      }
    });
  },

  // 加入购物车
  addToCart() {
    // 检查登录状态
    const isLoggedIn = wx.getStorageSync('isLoggedIn');
    if (!isLoggedIn) {
      wx.showModal({
        title: '提示',
        content: '请先登录',
        success: (res) => {
          if (res.confirm) {
            wx.redirectTo({
              url: '/pages/login/login'
            });
          }
        }
      });
      return;
    }

    // 添加到购物车
    CartManager.addToCart({
      ...this.data.product,
      quantity: this.data.quantity
    });

    // 同时创建待付款订单
    CartManager.createOrder({
      products: [{
        ...this.data.product,
        quantity: this.data.quantity
      }],
      totalAmount: this.data.totalPrice,
      address: '请选择收货地址',
      phone: '',
      receiver: '',
      fromCart: true
    });

    wx.showToast({
      title: '已添加到购物车',
      icon: 'success'
    });
  }
});

