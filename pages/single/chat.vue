<template>
	<view class="container">
		<cu-bar2 bgColor="bg-gradual-blue" :isBack="true"><block slot="content" class="page-name">对话气泡</block></cu-bar2>
		<view class="contents">
			<cardchat :datas="chatlist"></cardchat>
		</view>
		<cu-more title="已没有更多内容咯"></cu-more>
	</view>
</template>

<script>
import cardchat from '../../components/single/card/card_chat.vue';
export default {
	computed: {
	
	},
	components: {
		cardchat
	},
	data() {
		return {
			shareinfo: {
				title: '未来家装饰',
				desc: '邀请您体验透明装修',
				path: 'https://www.homeeyes.cn/app/livedemo/downloadapk.html',
				logo: 'https://www.homeeyes.cn/app/images/icon_logo.png'
			},
			chatlist:[
				{
					avatar:"https://ossweb-img.qq.com/images/lol/web201310/skin/big107000.jpg",
					content:"你好呀",
					time:"2019-10-12",
					type:'left'
				},
				{
					avatar:"https://ossweb-img.qq.com/images/lol/web201310/skin/big107000.jpg",
					content:"你好呀",
					time:"2019-10-12",
					type:'right'
				},
				{
					avatar:"https://ossweb-img.qq.com/images/lol/web201310/skin/big107000.jpg",
					img:"https://ossweb-img.qq.com/images/lol/web201310/skin/big106000.jpg",
					time:"2019-10-12",
					type:'left'
				}
			]
		};
	},
	/**
	 * 用户点击右上角分享
	 */
	onShareAppMessage: function(res) {
		if (res.from === 'button') {
			// 来自页面内分享按钮
			console.log(res.target);
		}
		return this.shareinfo;
	},
	onLoad() {},
	onShow() {
		//this.onInit();
	},
	methods: {
		onInit: function() {
			let that = this;
			this.$controller.onHome(this.pageNo, this.$store.state, type, function(data, error, msg) {
				console.log(data);
				if (error == 0) {
				}
			});
		}
	}
};
</script>

<style scoped>
	
</style>
