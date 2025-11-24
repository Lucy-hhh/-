// pages/login/login.js
const app = getApp();

Page({
  data: {
    phone: '',
    code: '',
    countdown: 0
  },

  onLoad() {
    // 检查是否已登录
    const isLoggedIn = wx.getStorageSync('isLoggedIn');
    if (isLoggedIn) {
      wx.switchTab({
        url: '/pages/index/index'
      });
    }
  },

  // 手机号输入
  onPhoneInput(e) {
    this.setData({
      phone: e.detail.value
    });
  },

  // 验证码输入
  onCodeInput(e) {
    this.setData({
      code: e.detail.value
    });
  },

  // 获取验证码
  getCode() {
    const phone = this.data.phone.trim();
    
    // 验证手机号
    if (!phone || !/^1[3-9]\d{9}$/.test(phone)) {
      wx.showToast({
        title: '请输入正确的手机号码',
        icon: 'none'
      });
      return;
    }

    // 开始倒计时
    this.setData({
      countdown: 60
    });

    const timer = setInterval(() => {
      if (this.data.countdown > 0) {
        this.setData({
          countdown: this.data.countdown - 1
        });
      } else {
        clearInterval(timer);
      }
    }, 1000);

    // 模拟发送验证码
    wx.showToast({
      title: '验证码已发送（演示模式：验证码为123456）',
      icon: 'none',
      duration: 2000
    });
  },

  // 登录
  handleLogin() {
    const phone = this.data.phone.trim();
    const code = this.data.code.trim();

    // 验证手机号
    if (!phone || !/^1[3-9]\d{9}$/.test(phone)) {
      wx.showToast({
        title: '请输入正确的手机号码',
        icon: 'none'
      });
      return;
    }

    // 验证验证码
    if (!code) {
      wx.showToast({
        title: '请输入验证码',
        icon: 'none'
      });
      return;
    }

    // 演示模式：验证码为任意6位数字
    if (code.length === 6) {
      // 登录成功
      app.login();
      wx.showToast({
        title: '登录成功',
        icon: 'success'
      });
    } else {
      wx.showToast({
        title: '验证码错误（演示模式：输入任意6位数字）',
        icon: 'none'
      });
    }
  },

  // 微信登录
  handleWechatLogin() {
    wx.showModal({
      title: '提示',
      content: '是否使用微信一键登录？',
      success: (res) => {
        if (res.confirm) {
          // 模拟微信登录
          app.login();
          wx.showToast({
            title: '登录成功',
            icon: 'success'
          });
        }
      }
    });
  },

  // 注册
  handleRegister() {
    wx.showToast({
      title: '注册功能开发中',
      icon: 'none'
    });
  },

  // 显示服务协议
  showAgreement() {
    wx.showModal({
      title: '服务协议',
      content: '这里是服务协议内容...',
      showCancel: false
    });
  },

  // 显示隐私政策
  showPrivacy() {
    wx.showModal({
      title: '隐私政策',
      content: '这里是隐私政策内容...',
      showCancel: false
    });
  }
});

