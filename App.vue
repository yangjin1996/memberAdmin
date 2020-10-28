<script>
import Vue from 'vue';
import main from './main.js'
import {mapMutations } from 'vuex';
export default {
	onLaunch: function() {
		console.log('App Launch');
		console.log('main',main);
		uni.getSystemInfo({
			success: function(e) {
				// console.log("小程序")
				// console.log(e)
				// #ifndef MP
				Vue.prototype.StatusBar = e.statusBarHeight;
				if (e.platform == 'android') {
					Vue.prototype.CustomBar = e.statusBarHeight + 50;
				} else {
					Vue.prototype.CustomBar = e.statusBarHeight + 45;
				}
				// #endif

				// #ifdef MP-WEIXIN
				Vue.prototype.StatusBar = e.statusBarHeight;
				let custom = wx.getMenuButtonBoundingClientRect();
				Vue.prototype.Custom = custom;
				let navbar=custom.bottom + custom.top - e.statusBarHeight;
				Vue.prototype.CustomBar = navbar;
				//console.log('width:',e.windowWidth);
				Vue.prototype.Devwidth = e.windowWidth;
				Vue.prototype.DevHeight = e.screenHeight-navbar;
				// #endif

				// #ifdef MP-ALIPAY
				Vue.prototype.StatusBar = e.statusBarHeight;
				Vue.prototype.CustomBar = e.statusBarHeight + e.titleBarHeight;
				// #endif
				//#ifdef MP-TOUTIAO
				
				Vue.prototype.StatusBar = e.statusBarHeight;
				Vue.prototype.CustomBar = e.statusBarHeight + 45;
				
				//#endif
				Vue.prototype.ScreenHeight = e.windowHeight;
				console.log("设备：",e);
			}
		});
		
		this.loadStorage();
	
		Vue.prototype.ColorList = [
			{
				title: '嫣红',
				name: 'red',
				color: '#e54d42'
			},
			{
				title: '桔橙',
				name: 'orange',
				color: '#f37b1d'
			},
			{
				title: '明黄',
				name: 'yellow',
				color: '#fbbd08'
			},
			{
				title: '橄榄',
				name: 'olive',
				color: '#8dc63f'
			},
			{
				title: '森绿',
				name: 'green',
				color: '#39b54a'
			},
			{
				title: '天青',
				name: 'cyan',
				color: '#1cbbb4'
			},
			{
				title: '海蓝',
				name: 'blue',
				color: '#0081ff'
			},
			{
				title: '姹紫',
				name: 'purple',
				color: '#6739b6'
			},
			{
				title: '木槿',
				name: 'mauve',
				color: '#9c26b0'
			},
			{
				title: '桃粉',
				name: 'pink',
				color: '#e03997'
			},
			{
				title: '棕褐',
				name: 'brown',
				color: '#a5673f'
			},
			{
				title: '玄灰',
				name: 'grey',
				color: '#8799a3'
			},
			{
				title: '草灰',
				name: 'gray',
				color: '#aaaaaa'
			},
			{
				title: '墨黑',
				name: 'black',
				color: '#333333'
			},
			{
				title: '雅白',
				name: 'white',
				color: '#ffffff'
			}
		];
	},
	onShow: function() {
		console.log('App Show');
		
	},
	onHide: function() {
		console.log('App Hide');
	},
	methods: {
		...mapMutations(['updatePushMessage', 'loadStorage'])
	}
};
</script>

<style>
@import 'colorui/main.css';
@import 'colorui/icon.css';
@import url('css/page.css');
@import url('css/uinorm.css');
</style>
