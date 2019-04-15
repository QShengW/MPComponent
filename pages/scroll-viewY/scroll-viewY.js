// pages/scroll-viewX/scroll-viewX.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        TabCur: 0,
        scrollTop: 0,
        itemData: ["热门推荐", "手机数码", "家用电器", "电脑办公", "计生情趣", "美妆护肤", "个护清洁", "汽车生活", "某某超市", "男装", "男鞋", "女装", "女鞋", "母婴童装", "图书音像", "运动户外", "内衣配饰", "食品生鲜", "酒水饮料", "家具家装", "家居厨具", "箱包手袋", "钟表珠宝", "玩具乐器", "医药保健", "宠物生活", "礼品鲜花", "农资绿植", "生活旅行", "奢侈品", "海囤全球", "艺术邮币", "二手商品", "特产馆", "某某金融", "国际名牌", "拍卖", "房产", "工业品"]
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        wx.getSystemInfo({
            success: res => {
                console.log(res.windowHeight)
                this.setData({
                    height: res.windowHeight
                })
            }
        })
    },
    tabSelect: function (e) {
        console.log(e);
        this.setData({
            TabCur: e.currentTarget.dataset.id,
            scrollTop: (e.currentTarget.dataset.id - 7) * 45
        })
    },
    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function () {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function () {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function () {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function () {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function () {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function () {

    }
})