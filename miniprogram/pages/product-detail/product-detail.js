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
      },
      'xianju_yangmeijiu': {
        id: 'xianju_yangmeijiu',
        name: '仙居杨梅酒',
        price: 80,
        unit: '瓶',
        image: '/image/xianjujiu.png',
        description: '仙居杨梅酒采用当地优质杨梅精心酿制，口感醇厚，果香浓郁。传统工艺与现代技术相结合，保留了杨梅的天然风味和营养成分。',
        origin: '浙江省仙居县',
        weight: '500ml',
        shelfLife: '24个月',
        package: '玻璃瓶装'
      },
      'sanhuangji': {
        id: 'sanhuangji',
        name: '三黄鸡',
        price: 29,
        unit: '只',
        image: '/image/sanhuangji.png',
        description: '三黄鸡是传统优质鸡种，肉质鲜嫩，营养丰富。采用生态散养方式，保证鸡肉的天然品质和健康安全。',
        origin: '浙江省',
        weight: '1-1.5kg',
        shelfLife: '冷冻保存',
        package: '真空包装'
      },
      'chansibei': {
        id: 'chansibei',
        name: '蚕丝被',
        price: 200,
        unit: '床',
        image: '/image/chansibei.png',
        description: '优质蚕丝被，采用100%天然蚕丝填充，柔软舒适，透气保暖。传统工艺制作，品质保证，是理想的床上用品。',
        origin: '浙江省',
        weight: '2-3kg',
        shelfLife: '长期保存',
        package: '精美包装'
      },
      'qingtian_yugan': {
        id: 'qingtian_yugan',
        name: '青田鱼干',
        price: 28,
        unit: '包',
        image: '/image/qingtianyugan.png',
        description: '青田鱼干采用稻鱼共生系统中的优质鱼类制作，传统晾晒工艺，保留了鱼类的鲜美和营养。',
        origin: '浙江省青田县',
        weight: '200g',
        shelfLife: '12个月',
        package: '真空包装'
      },
      'xianju_yangmeigan': {
        id: 'xianju_yangmeigan',
        name: '仙居杨梅干',
        price: 35,
        unit: '袋',
        image: '/image/xianjuyangmeigan.png',
        description: '仙居杨梅干采用新鲜杨梅制作，酸甜可口，保留了杨梅的天然风味。是理想的休闲零食。',
        origin: '浙江省仙居县',
        weight: '250g',
        shelfLife: '12个月',
        package: '密封包装'
      },
      'xianju_chaye': {
        id: 'xianju_chaye',
        name: '仙居茶叶',
        price: 60,
        unit: '罐',
        image: '/image/xianjuchaye.png',
        description: '仙居高山茶叶，品质优良，茶香浓郁。采用传统制茶工艺，保留了茶叶的天然香气和营养成分。',
        origin: '浙江省仙居县',
        weight: '100g',
        shelfLife: '24个月',
        package: '铁罐装'
      },
      'xianju_fengmi': {
        id: 'xianju_fengmi',
        name: '仙居蜂蜜',
        price: 50,
        unit: '罐',
        image: '/image/xianjufengmi.png',
        description: '纯天然蜂蜜，来自仙居山区优质蜜源。无添加，保留蜂蜜的天然营养和独特风味。',
        origin: '浙江省仙居县',
        weight: '500g',
        shelfLife: '24个月',
        package: '玻璃瓶装'
      },
      'nanxun_huacha': {
        id: 'nanxun_huacha',
        name: '南浔桑花茶',
        price: 45,
        unit: '盒',
        image: '/image/nanxunhuacha.png',
        description: '南浔桑花茶采用优质桑花制作，具有独特的香气和口感。传统工艺，品质保证。',
        origin: '浙江省南浔区',
        weight: '100g',
        shelfLife: '18个月',
        package: '精美礼盒'
      },
      'nanxun_xunyu': {
        id: 'nanxun_xunyu',
        name: '南浔熏鱼',
        price: 32,
        unit: '盒',
        image: '/image/nanxunxunyu.png',
        description: '南浔传统熏鱼，采用优质鱼类和传统熏制工艺制作，风味独特，是当地特色美食。',
        origin: '浙江省南浔区',
        weight: '200g',
        shelfLife: '6个月',
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

