// 购物车和订单管理工具
const Storage = require('./storage.js');

const CartManager = {
  // 添加到购物车
  addToCart(product) {
    const cart = Storage.getCart();
    const existingItem = cart.find(item => item.id === product.id);
    
    if (existingItem) {
      existingItem.quantity += product.quantity || 1;
    } else {
      cart.push({
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image,
        quantity: product.quantity || 1,
        spec: product.spec || ''
      });
    }
    
    Storage.setCart(cart);
    return cart;
  },

  // 从购物车移除
  removeFromCart(productId) {
    const cart = Storage.getCart();
    const newCart = cart.filter(item => item.id !== productId);
    Storage.setCart(newCart);
    return newCart;
  },

  // 更新购物车商品数量
  updateCartQuantity(productId, quantity) {
    const cart = Storage.getCart();
    const item = cart.find(item => item.id === productId);
    if (item) {
      if (quantity <= 0) {
        return this.removeFromCart(productId);
      }
      item.quantity = quantity;
      Storage.setCart(cart);
    }
    return cart;
  },

  // 清空购物车
  clearCart() {
    Storage.setCart([]);
  },

  // 获取购物车总数
  getCartCount() {
    const cart = Storage.getCart();
    return cart.reduce((total, item) => total + item.quantity, 0);
  },

  // 创建订单
  createOrder(orderData) {
    const orders = Storage.getOrders();
    const order = {
      id: 'ORD' + Date.now(),
      ...orderData,
      status: 'pending_payment',
      createTime: new Date().toISOString(),
      paymentTime: null,
      shipTime: null,
      receiveTime: null
    };
    
    orders.unshift(order);
    Storage.setOrders(orders);
    return order;
  },

  // 获取订单列表
  getOrders() {
    return Storage.getOrders();
  },

  // 获取订单详情
  getOrder(orderId) {
    const orders = Storage.getOrders();
    return orders.find(order => order.id === orderId);
  },

  // 更新订单状态
  updateOrderStatus(orderId, status) {
    const orders = Storage.getOrders();
    const order = orders.find(o => o.id === orderId);
    if (order) {
      order.status = status;
      const now = new Date().toISOString();
      if (status === 'pending_shipment') {
        order.paymentTime = now;
      } else if (status === 'pending_receive') {
        order.shipTime = now;
      } else if (status === 'completed') {
        order.receiveTime = now;
      }
      Storage.setOrders(orders);
    }
    return order;
  },

  // 支付订单（模拟）
  payOrder(orderId) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const order = this.updateOrderStatus(orderId, 'pending_shipment');
        if (order) {
          resolve(order);
        } else {
          reject(new Error('订单不存在'));
        }
      }, 1500);
    });
  },

  // 更新订单商品数量
  updateOrderProductQuantity(orderId, productId, quantity) {
    const orders = Storage.getOrders();
    const order = orders.find(o => o.id === orderId);
    if (order) {
      const product = order.products.find(p => p.id === productId);
      if (product) {
        if (quantity <= 0) {
          order.products = order.products.filter(p => p.id !== productId);
        } else {
          product.quantity = quantity;
        }
        order.totalAmount = order.products.reduce((total, p) => total + p.price * p.quantity, 0);
        Storage.setOrders(orders);
      }
    }
    return order;
  },

  // 删除订单
  deleteOrder(orderId) {
    const orders = Storage.getOrders();
    const newOrders = orders.filter(o => o.id !== orderId);
    Storage.setOrders(newOrders);
    return newOrders;
  },

  // 获取订单统计
  getOrderStats() {
    const orders = Storage.getOrders();
    return {
      pending_payment: orders.filter(o => o.status === 'pending_payment').length,
      pending_shipment: orders.filter(o => o.status === 'pending_shipment').length,
      pending_receive: orders.filter(o => o.status === 'pending_receive').length,
      completed: orders.filter(o => o.status === 'completed').length,
      total: orders.length
    };
  }
};

module.exports = CartManager;

