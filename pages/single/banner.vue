<template>
	<view class="container">
		<cuBanner :bgBanner="bg" isBack="true">
			<block slot="left">
				<text class="cuIcon-back"></text>
				返回
			</block>
			<block slot="content" class="page-name">操作条</block>
		</cuBanner>
		<view class="contents">
			<banner></banner>
			<banner-shadow></banner-shadow>
		</view>
		<cu-more title="已没有更多内容咯"></cu-more>
	</view>
</template>

<script>
import cuBanner from '../../colorui/components/cu-banner.vue';
import banner from '../../components/single/swiper/banner.vue';
import bannerShadow from '../../components/single/swiper/banner_shadow.vue';
export default {
	computed: {},
	components: {
		cuBanner,
		banner,
		bannerShadow
	},
	data() {
		return {
			shareinfo: {
				title: '未来家装饰',
				desc: '邀请您体验透明装修',
				path: 'https://www.homeeyes.cn/app/livedemo/downloadapk.html',
				logo: 'https://www.homeeyes.cn/app/images/icon_logo.png'
			},
			bg: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg'
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

<style scoped></style>
