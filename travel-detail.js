// pages/travel-detail/travel-detail.js
Page({
  data: {
    routeId: ''
  },

  onLoad(options) {
    this.setData({
      routeId: options.id || '1'
    });
  }
});

