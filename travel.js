// pages/travel/travel.js
Page({
  data: {
    
  },

  onLoad() {
    
  },

  // 滚动到路线区域
  scrollToRoutes() {
    wx.pageScrollTo({
      selector: '#recommendedSection',
      duration: 300
    });
  },

  // 导航到路线详情
  navigateToDetail(e) {
    const id = e.currentTarget.dataset.id;
    wx.navigateTo({
      url: `/pages/travel-detail/travel-detail?id=${id}`
    });
  }
});

