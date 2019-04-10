// components/com-cityselect/com-cityselect.js

Component({
    /**
     * 组件的属性列表
     */
    properties: {
        isShow: { //显示
            type: Boolean
        },
        isArea: { //是否选择区
            type: Boolean,
            value: true
        }
    },

    /**
     * 组件的初始数据
     */
    data: {
        /**城市选择 */
        cityselect: [], //选择省市区 上面行的循环数据
        provinces: [],  //选择省
        // city: [],  //选择城市
        // regions: [],  //选择区 || 县
        crtIndex: 0,
        isShow: false,
        scrollY: false
    },
    lifetimes: {
        // 生命周期函数，可以为函数，或一个在methods段中定义的方法名
        attached: function () {
            this.getProvinces()
            const { isShow, isArea } = this.properties
            console.log(isShow, '是否打开选择')
            console.log(isArea, '是否选择区 如 省市 , 省市区')
            this.setData({
                isShow,
                isArea
            })
        },
    },
    /**
     * 组件的方法列表
     */
    methods: {
        isShow: function () {
            this.setData({
                isShow: !this.data.isShow
            })
        },
        /**
         * 头部地区切换
         */
        headerNav: function (e) {
            console.log(e.currentTarget.dataset)
            let { name, id, index } = e.currentTarget.dataset
            this.setData({
                scrollY: index == 2 ? true : false,
                crtIndex: index
            })
        },
        /**
         * 省请求
         */
        getProvinces: function () {
            this.setData({
                provinces: [{ "location_id": 1156, "location_name": "福建", "location_parent_id": 1, "location_type": "state", "location_order": 0, "location_status": "1", "location_abbr": null }] //这里是模拟数据 项目当中可以使用自己公司的数据
            })
        },
        /**
         * 省点击选择
         */
        provincesClick: function (e) {
            console.log(e.currentTarget.dataset)
            let { name, id, index } = e.currentTarget.dataset
            let { provinces, cityselect } = this.data
            provinces.map((item, i) => {
                item.click = (i == index) ? true : false
            })
            cityselect[0] = {
                name, id
            }
            cityselect[1] = {
                name: '请选择', id: 0
            }
            this.setData({
                crtIndex: 1,
                cityselect,
                provinces
            }, () => {
                this.getCitys(id)
            })
        },
        /**
         * 市数据
         */
        getCitys: function (province_id) {
            this.setData({
                city: [{ "location_id": 1171, location_name: "厦门" }]
            })
        },
        /**
         * 城市点击选择
         */
        cityClick: function (e) {
            console.log(e.currentTarget.dataset)
            let { name, id, index } = e.currentTarget.dataset
            let { city, cityselect, isArea } = this.data
            city.map((item, i) => {
                item.click = (i == index) ? true : false
            })
            cityselect[1] = { name, id }
            if (!isArea) {
                cityselect[2] = {
                    name: '请选择', id: 0
                }
            } else {
                this.triggerEvent('cityValue', {
                    value: cityselect
                })
                this.setData({
                    isShow: false
                })
            }
            this.setData({
                city,
                cityselect,
                crtIndex: !isArea ? 2 : 1,
                scrollY: !isArea ? true : false
            }, () => {
                this.getRegions(id)
            })
        },
        /**
         * 区数据
         */
        getRegions: function (city_id) {
            this.setData({
                regions: [{ "location_id": 1172, "location_name": "思明区" }]
            })
        },
        /**
         * 区点击选择
         */
        regionsClick: function (e) {
            console.log(e.currentTarget.dataset)
            let { name, id, index } = e.currentTarget.dataset
            let { regions, cityselect } = this.data
            regions.map((item, i) => {
                item.click = (i == index) ? true : false
            })
            cityselect[2] = {
                name, id
            }
            this.triggerEvent('cityValue', {
                value: cityselect
            })
            this.setData({
                cityselect, regions, isShow: false
            })
        },
    }
})