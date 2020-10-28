import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const store = new Vuex.Store({
	state: {
		mData: [],
		pageSize: 10,
		baseUrl: 'https://zs.homeeyes.cn/',
		pushMessage: {},
		isplatform: false,
		forcedLogin: false,
		hasLogin: false,
		isteacher: false,
		inviter: 0,
		isBack: false,
		userinfo: {
			uid: -1,
			openid: '',
			phone: '',
			name: '',
			city: '',
			avatar: '',
			sex: '',
			province: ''
		},
		label: [{
				id: 0,
				title: '热销专区',
				name: 'hot',
				color: 'red',
				cuIcon: 'colorlens',
				url: './discount_list',
				show: false
			},
			{
				id: 1,
				title: '特惠精品',
				name: 'discount',
				color: 'orange',
				cuIcon: 'vipcard',
				url: './discount_list',
				show: false
			},
			{
				id: 2,
				title: '爆款专柜',
				name: 'explode',
				color: 'pink',
				cuIcon: 'btn',
				url: './discount_list',
				show: false
			},
			{
				id: 3,
				title: '入驻品牌',
				name: 'brand',
				color: 'green',
				cuIcon: 'newsfill',
				url: './brand_list',
				show: false
			}
		],
		tabars: [{
			id: 0,
			name: '全部',
			is_up: 1,
			created_at: '2019-10-18 16:18:20',
			updated_at: '2019-10-18 16:18:20'
		}],
		orderlist: [],
		shops: []
	},
	mutations: {
		updatePushMessage(state, message) {
			/**
			 * 注意：这里为了方便预览查看效果，始终对 payload 做了序列化的处理。
			 * 实际开发期中，请自行调整代码并注意发送的 payload 消息格式。
			 */
			let payload = message.payload;
			if (typeof payload !== 'string') {
				message.payload = JSON.stringify(payload);
			}
			state.pushMessage = message || {};
		},
		login(state, data) {
			state.userinfo = data;
			state.userinfo.uid = data.id;
			state.hasLogin = true;
			try {
				uni.setStorageSync('uid', data.id);
				uni.setStorageSync('openid', data.openid);
				//uni.setStorageSync('phone', data.phone);
				uni.setStorageSync('name', data.name);
				uni.setStorageSync('sex', data.sex);
				uni.setStorageSync('avatar', data.avatar);
				uni.setStorageSync('city', data.city);
				uni.setStorageSync('province', data.province);
			} catch (e) {
				//TODO handle the exception
			}

		},
		loginsoure(state, status) {
			state.forcedLogin = status;
		},
		setteacher(state, status) {
			state.isteacher = status;
		},
		logout(state) {
			state.userinfo = {};
			state.hasLogin = false;
			try {
				uni.clearStorageSync();
			} catch (e) {
				//TODO handle the exception
			}
		},
		loadStorage(state) {
			try {
				let uid = uni.getStorageSync('uid');
				if (uid) {
					state.userinfo.uid = uni.getStorageSync('uid');
					state.hasLogin = true;
				} else {
					state.hasLogin = false;
				}
				state.userinfo.openid = uni.getStorageSync('openid');
				//state.userinfo.phone = uni.getStorageSync('phone');
				state.userinfo.name = uni.getStorageSync('name');
				state.userinfo.avatar = uni.getStorageSync('avatar');
				state.userinfo.city = uni.getStorageSync('city');
				state.userinfo.province = uni.getStorageSync('province');
			} catch (e) {
				console.log(e);
			}
		},
		updataLab(state, status) {
			state.label = status;
		},
		updataTabs(state, status) {
			let tabars = state.tabars;
			if (tabars.length == 1) {
				tabars = tabars.concat(status.shop_fl);
				state.tabars = tabars;
			}
		},
		setinviter(state, status) {
			state.inviter = status;
			if (!state.hasLogin) {
				state.userinfo.uid = status;
			}
		},
		setOrderList(state, status) {
			state.orderlist = status;
		},
		setShopList(state, status) {
			state.shops = status;
		},
		setBack(state, status) {
			state.isBack = status;
		}
	}
});
export default store;
