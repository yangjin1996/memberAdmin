<template>
	<view class="container">
		<cu-bar2 bgColor="bg-gradual-blue" :isBack="true"><block slot="content" class="page-name">操作条</block></cu-bar2>
		<view class="contents">
			<view class="cu-list grid col-3">
				<view class="cu-item1 "><cu-badge icon="appreciate" rtext="20"></cu-badge></view>
				<view class="cu-item1"><cu-badge icon="appreciate" rtext="20" round="true"></cu-badge></view>
				<view class="cu-item1"><cu-badge icon="appreciate" rtext="20" bgcolor="orange"></cu-badge></view>
				<view class="cu-item1 "><cu-badge icon="appreciate" rtext="20" bgcolor="orange"></cu-badge></view>
				<view class="cu-item1 "><cu-badge ltext="喜欢" rtext="20" bgcolor="orange"></cu-badge></view>
			</view>
			<grids cols="4">
				<block slot="item">
					<cu-badge icon="appreciate"  rtext="20"></cu-badge>
				</block>
				<block slot="item">
					<cu-badge  icon="appreciate" rtext="20"></cu-badge>
				</block>
				<block slot="item">
	 				<cu-badge icon="appreciate"  rtext="20"></cu-badge>
				</block>
				<block slot="item">
					<cu-badge icon="appreciate" rtext="20"></cu-badge>
				</block>
			</grids>
		</view>
		<cu-more title="已没有更多内容咯"></cu-more>
	</view>
</template>

<script>
import cuBadge from '../../components/single/badge/cu-badge.vue';
export default {
	computed: {},
	components: {
		cuBadge
		
	},
	data() {
		return {
			shareinfo: {
				title: '未来家装饰',
				desc: '邀请您体验透明装修',
				path: 'https://www.homeeyes.cn/app/livedemo/downloadapk.html',
				logo: 'https://www.homeeyes.cn/app/images/icon_logo.png'
			}
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
.cu-item1{
	padding-top: 10upx;
	padding-bottom: 10upx;
}
</style>
