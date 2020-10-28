<template>
	<view class="container">
		<view><web-view :src="url"></web-view></view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			url: ''
		};
	},

	/**
	 * 生命周期函数--监听页面加载
	 */
	onLoad: function(options) {
		var url = decodeURIComponent(options.url);
		console.log(url);

		this.url = url;
	},
	onShareAppMessage: function(res) {
		if (res.from === 'button') {
			// 来自页面内分享按钮
			console.log(res.target);
		}
		let params = 'token=' + this.userinfo.uid + '&url=' + this.url;
		return this.controller.getSharePage(params);
	}
};
</script>

<style scoped>
.cu-bar {
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
}
web-view {
	width: 100%;
	height: 100%;
	padding: 0;
	margin: 0;
}
</style>
