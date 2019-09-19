Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 首页导航数据
    navList:[],

    // 被点击首页导航菜单的索引
    currentIndexNav: 0,
    // 轮播图数据
    swiperList:[],
    // 视频列表数据
    videosList: []

  },
  // 点击首页导航按钮

  activeNav(e) {
    // console.log(123);
    this.setData({
      currentIndexNav: e.target.dataset.index
    })
  },

  /*获取首页导航数据
   */
   getNavList(){
    let that = this
     wx.request({
       url:"https://mockapi.eolinker.com/7b7NMB9c75d613bc39c8f16e4e03a3d4a8f951750079dc5/navList",
      success(res){
        //  console.log(res);
        if (res.statusCode===200){
          // console.log(res.data.data.navList)
         that.setData({
           navList: res.data.data.navList
          })
         }
     }
     })
   },

  /*获取轮播图数据 */
  getSwiperList(){
    let that = this;
    wx.request({
      url: 'https://mockapi.eolinker.com/7b7NMB9c75d613bc39c8f16e4e03a3d4a8f951750079dc5/Swiper',
      success(res){
        // console.log(res);
        if (res.statusCode===200){
          that.setData({
            swiperList:res.data.data.swiperList
          })
        }
      }
    })
  },
  /*获取视频列表数据 */
  getVideosList() {
    let that = this;
    wx.request({
      url: 'https://mockapi.eolinker.com/7b7NMB9c75d613bc39c8f16e4e03a3d4a8f951750079dc5/videoList',
      success(res) {
        // console.log(res);
        if (res.statusCode === 200) {
          that.setData({
            videosList: res.data
          })
        }
      }

    })
    
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    // 1.获取首页导航数据
    this.getNavList()
    // 获取轮播图的数据
    this.getSwiperList()
    // 获取视频数据
    this.getVideosList()
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})