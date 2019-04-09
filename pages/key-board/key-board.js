// pages/key-board/key-board.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        open: false,
        keyError: ''
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {

    },
    /**
     * 开启键盘
     */
    thisKeyBoardOpen:function(){
        this.setData({
            open: true
        })
    },
    /**
     * 绑定事件
     * 获取6位数密码
     */
    keyBoard: function (e) {
        console.log(e.detail.value)
        wx.showLoading({
            title: '验证支付密码',
        })
        if(true){
            setTimeout(() => {
                this.setData({
                    open: false,
                    keyError: ""
                })
                wx.showToast({
                    title: '验证成功',
                })
                wx.hideLoading()
            }, 1000)
        }else{
            this.setData({
                keyError: "支付密码错误"
            })
        }
        
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