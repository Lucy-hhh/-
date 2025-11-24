// pages/travel-detail/travel-detail.js
Page({
  data: {
    routeId: '',
    route: null,
    adultCount: 1,
    childCount: 0,
    showPricePanel: false,
    totalPrice: 0
  },

  onLoad(options) {
    const routeId = options.id || '1';
    this.setData({
      routeId: routeId
    });
    this.loadRouteData(routeId);
  },

  // 切换路线
  loadRoute(e) {
    const id = e.currentTarget.dataset.id;
    wx.redirectTo({
      url: `/pages/travel-detail/travel-detail?id=${id}`
    });
  },

  // 加载路线数据
  loadRouteData(id) {
    const routes = {
      '1': {
        id: '1',
        title: '南浔射中村：古韵生态+艺术休闲一日游',
        tags: ['全球农业遗产', '非遗体验', '特色采摘'],
        location: '湖州南浔',
        duration: '全程约 9 小时',
        adultPrice: 198,
        childPrice: 99,
        sold: 268,
        status: '近期热销',
        schedule: [
          {
            time: '08:30 - 10:00',
            title: '宝蓄桥 → 长寿桥',
            desc: '寻迹古桥文化，看宋代+清代文保古桥，感受江南石桥美学',
            tip: '穿舒适步行鞋；清晨桥面光影适合拍照；可打听"十桥十庙"传说'
          },
          {
            time: '10:45 - 12:00',
            title: '桑基鱼塘核心区',
            desc: '了解"桑-蚕-鱼-泥"生态循环；春季可摘桑果制湖桑茶',
            tip: '需听工作人员指引和讲解'
          },
          {
            time: '12:15 - 13:45',
            title: '石村老街',
            desc: '品味乡村烟火，吃地道农家菜，逛"老街记忆"主题景观',
            tip: '老街手作店可淘特色小物件'
          },
          {
            time: '14:00 - 15:30',
            title: '朱仁民生态修复艺术馆 → 后羿射日文化打卡点',
            desc: '邂逅艺术与神话，看艺术赋能乡村作品，了解村名神话渊源',
            tip: '艺术馆内保持安静；后羿雕塑旁适合拍照打卡'
          },
          {
            time: '16:00 - 17:30',
            title: '宝溪艺术集镇 / 乡村咖啡馆 → 菜园景观 / 河边',
            desc: '休闲体验，逛乡村新业态，赏"田水相依"诗意风光',
            tip: '咖啡馆可歇脚休憩；河边步道看落日余晖后返程更惬意'
          }
        ],
        priceDetails: [
          { name: '景点门票', price: 120 },
          { name: '导览服务', price: 50 },
          { name: '基础保险', price: 10 },
          { name: '服务费', price: 18 }
        ]
      },
      '2': {
        id: '2',
        title: '青田龙现村：农遗探秘+侨乡寻味一日游',
        tags: ['全球农业遗产', '侨乡文化', '非遗体验'],
        location: '丽水青田',
        duration: '全程约 9 小时',
        adultPrice: 168,
        childPrice: 88,
        sold: 426,
        status: '近期热销',
        schedule: [
          {
            time: '08:30 - 10:00',
            title: '村口 → 吴氏旧宅 → 侨乡货币陈列馆',
            desc: '感受"联合国村"侨味，参观中西合璧古建，了解华侨侨居史',
            tip: '吴氏旧宅建议听讲解（需提前预约）；货币陈列馆可拍照记录特色外币'
          },
          {
            time: '10:15 - 11:45',
            title: '稻鱼共生核心区 → 农耕文化馆 → 十八潭瀑布群',
            desc: '体验抓田鱼、了解农遗技术，徒步观瀑布',
            tip: '抓田鱼需穿防滑鞋；十八潭雨后水量足，景观更壮观'
          },
          {
            time: '12:00 - 13:30',
            title: '渔家乐 → 稻田休憩',
            desc: '品尝红烧田鱼、稻鱼米饭等农家菜，乡村慢时光小憩',
            tip: '渔家乐建议提前1小时预约；可顺路买现做田鱼干'
          },
          {
            time: '14:00 - 15:30',
            title: '村文化广场 → 唱片馆/旗帜馆',
            desc: '体验非遗鱼灯舞，聆听海外黑胶唱片、了解国旗背后故事',
            tip: '鱼灯舞表演需提前咨询村委会；馆内保持安静'
          },
          {
            time: '16:00 - 17:30',
            title: '骑行绿道 → 乡村咖啡馆 → 村口特产店',
            desc: '骑行漫游田园，咖啡搭配农家小点，选购伴手礼',
            tip: '推荐稻鱼米、梅干菜作为伴手礼'
          }
        ],
        priceDetails: [
          { name: '景点门票', price: 100 },
          { name: '导览服务', price: 40 },
          { name: '基础保险', price: 10 },
          { name: '服务费', price: 18 }
        ]
      },
      '3': {
        id: '3',
        title: '仙居杨岸村：仙梅寻韵+溪畔休闲一日游',
        tags: ['千年杨梅', '溪畔休闲', '特色采摘'],
        location: '台州仙居',
        duration: '全程约 9 小时',
        adultPrice: 178,
        childPrice: 98,
        sold: 312,
        status: '近期热销',
        schedule: [
          {
            time: '08:30 - 10:30',
            title: '古杨梅林公园 → 古杨梅文化展示区',
            desc: '探访千年古杨梅树，了解"仙梅"文化；6月体验采摘',
            tip: '打卡树龄超1000年的"千岁梅"，可扫树身"身份证"看故事'
          },
          {
            time: '10:45 - 12:00',
            title: '天然恒温酒窖',
            desc: '参观60余吨古杨梅酒窖藏，品鉴不同年份杨梅酒',
            tip: '酒窖内保持安静，品鉴后可选购瓶装杨梅酒作伴手礼'
          },
          {
            time: '12:15 - 13:45',
            title: '"桃源人家"餐厅 → 杨岸港溪畔',
            desc: '品尝杨梅仔排、清炖仙居鸡等特色菜，溪畔休憩',
            tip: '餐厅建议提前1小时预约；溪畔散步注意脚下安全'
          },
          {
            time: '14:00 - 15:30',
            title: '杨岸港水上娱乐 → 绿道骑行/垂钓',
            desc: '体验竹筏、皮划艇；绿道骑行赏景或临溪垂钓',
            tip: '水上项目备好换洗衣物，注意安全'
          },
          {
            time: '15:45 - 17:30',
            title: '登山步道 → 露营基地 → 村口特产店',
            desc: '登高俯瞰全村全景，露营慢享山野风；采购伴手礼',
            tip: '登山穿防滑运动鞋；推荐杨梅干、杨梅蜜饯等特产'
          }
        ],
        priceDetails: [
          { name: '景点门票', price: 110 },
          { name: '导览服务', price: 45 },
          { name: '基础保险', price: 10 },
          { name: '服务费', price: 13 }
        ]
      }
    };

    const route = routes[id] || routes['1'];
    this.setData({
      route: route,
      totalPrice: route.adultPrice
    });
  },

  // 显示价格面板
  showPricePanel() {
    this.setData({
      showPricePanel: true
    });
  },

  // 关闭价格面板
  closePricePanel() {
    this.setData({
      showPricePanel: false
    });
  },

  // 更新总价
  updateTotalPrice() {
    if (!this.data.route) return;
    const total = (this.data.adultCount * this.data.route.adultPrice) + 
                  (this.data.childCount * this.data.route.childPrice);
    this.setData({
      totalPrice: total
    });
  },

  // 增加成人数量
  increaseAdult() {
    this.setData({
      adultCount: this.data.adultCount + 1
    });
    this.updateTotalPrice();
  },

  // 减少成人数量
  decreaseAdult() {
    if (this.data.adultCount > 1) {
      this.setData({
        adultCount: this.data.adultCount - 1
      });
      this.updateTotalPrice();
    }
  },

  // 增加儿童数量
  increaseChild() {
    this.setData({
      childCount: this.data.childCount + 1
    });
    this.updateTotalPrice();
  },

  // 减少儿童数量
  decreaseChild() {
    if (this.data.childCount > 0) {
      this.setData({
        childCount: this.data.childCount - 1
      });
      this.updateTotalPrice();
    }
  },

  // 确认下单
  confirmOrder() {
    const total = this.data.totalPrice;
    wx.showModal({
      title: '下单成功',
      content: `成人：${this.data.adultCount}人\n儿童：${this.data.childCount}人\n总价：￥${total}`,
      showCancel: false,
      success: () => {
        this.closePricePanel();
      }
    });
  },

  // 返回
  goBack() {
    wx.navigateBack();
  }
});
