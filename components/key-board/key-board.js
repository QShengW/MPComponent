// components/key-board.js
/**
 * 一个6位数键盘
 */
Component({
    /**
     * 组件的属性列表
     */
    properties: {
        open: {  // 打开键盘
            type: Boolean,
            value: false
        },
        logo: {  // 公司logo项目logo
            type: String,
            value: ''
        },
        objname: { // 公司名字项目名字
            type: String,
        },
        keyError: { // 提示错误
            type: String,
            value: '对不起，您的支付密码不正确，请重新输入。'
        }
    },
    /**
     * 组件的初始数据
     */
    data: {
        numberArr: [
            [1, 2, 3],
            [4, 5, 6],
            [7, 8, 9],
        ],
        open: false,
        psValue: '',//密码
        keyVal:[],//模拟黑点
        isIphoneX: ''
    },
    lifetimes: {
        // 生命周期函数，可以为函数，或一个在methods段中定义的方法名
        attached: function () {
            const { open, logo } = this.properties
            this.setData({
                open, logo
            })
            /**
             * 判断手机是否为 iPhone X
             */
            wx.getSystemInfo({
                success: res => {
                    const modelmes = res.model;
                    this.setData({
                        isIphoneX: (modelmes.search('iPhone X') != -1 || modelmes.search('iPhone11') != -1) ? true : false
                    })
                }
            })
        }
    },
    /**
     * 监听事件
     */
    observers: {
        'open': function (open) {
            console.log(open)
            if (!open) {
                this.setData({
                    psValue: '',
                    keyVal: []
                })
            }
        }
    },
    /**
     * 组件的方法列表
     */
    methods: {
        /**
         * 输入使用密码
         */
        keyValue: function (e) {
            let value = this.data.psValue + e.currentTarget.dataset.num, arr = []
            value.split('').map((item,i)=>{
                arr.push(i)
            })
            this.setData({
                psValue: value,
                keyVal: arr
            },()=>{
                console.log(this.data.psValue)
                if (this.data.psValue.length == 6){
                    this.triggerEvent('keyBoard', {
                        value: this.data.psValue
                    })
                }
            })
        },
        /**
         * 删除
         */
        keyDeleteValue: function (e) {
            let { psValue } = this.data, keyVal = []
            psValue = psValue.substr(0, psValue.length - 1)
            psValue.split('').map((item, i) => {
                keyVal.push(i)
            })
            this.setData({
                psValue,
                keyVal
            })
        },
        /**
         * 关闭||开启 安全键盘
         */
        openAndClose: function () {
            this.setData({
                open: !this.data.open
            })
        }
    }
})
