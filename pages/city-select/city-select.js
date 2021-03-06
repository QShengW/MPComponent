// pages/city-select/city-select.js
Page({

    /**
     * 页面的初始数据
     */
    data: {

    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {

    },
    /**
     * 显示省市区选择
     */
    showCitySelect: function () {
        this.setData({
            show: true
        })
    },
    /**
     * 城市选择结束
     */
    cityValue: function (e) {
        console.log(e.detail.value)
        let value = e.detail.value, str = ''
        value.map((item, i) => {
            str = str + '，' + item.name
        })
        console.log(str.slice(1, str.length))
        this.setData({
            cityValue: str.slice(1, str.length),
            citySetValue: value
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