// page/swipecell/swipecell.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        touchStartX: 0, //开始坐标X
        touchStartY: 0, //开始坐标y
        list: [{
            Selection: false
        }, {
            Selection: false
        }, {
            Selection: false
        }, {
            Selection: false
        }, {
            Selection: false
        }]
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {

    },
    // 这里先储存开始的X轴的值 用于滑动的时候判断
    touchStart: function (e) {
        console.log(e.changedTouches[0])
        if (e.changedTouches[0]){
            let { clientX, clientY } = e.changedTouches[0]
            this.setData({
                touchStartX: clientX,
                touchStartY: clientY
            })
        }
    },
    /**
     * 触摸滑动
     */
    touchmove: function (e) {
        console.log(e)
        let { touchStartX ,touchStartY, list } = this.data
        //当前所滑动的区域是那一块的X轴
        let { clientX: X, clientY:Y } = e.changedTouches[0]
        //当前所滑动的区域是那一块的下标
        let index = e.currentTarget.dataset.index
        console.log(touchStartX)
        console.log(X)
        if (touchStartX > X) {
            if (!list[index].Selection){
                console.log('左滑')
                list.map((item)=>{
                    item.Selection = false
                })
                list[index].Selection = true
                this.setData({
                    list
                })
            }
        } else {
            console.log('右滑')
            list[index].Selection = false
            this.setData({
                list
            })
        }
    },
    /**
     * 操作
     */
    operation:function(e){
        wx.showModal({
            title: '提示类型',
            content: String(e.currentTarget.dataset.type),
        })
    },
    clickHideOperation:function(){
        let { list } = this.data
        list.map((item) => {
            item.Selection = false
        })
        this.setData({
            list
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