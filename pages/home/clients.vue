<template>
	<view class="container">
		<cu-bar2 bgColor="bg-gradual-blue" :isBack="true"><block slot="content" class="page-name">关于用户</block></cu-bar2>
		<view class="contents">
			<button class="cu-btn round bg-blue block margin-tb-sm margin-lr-xs padding" @click="onTurntable" data-url="../page/my/about">关于我们</button>
			<button class="cu-btn round bg-blue block margin-tb-sm margin-lr-xs padding" @click="onTurntable" data-url="../page/my/feedback">意见反馈</button>
			<button class="cu-btn round bg-blue block margin-tb-sm margin-lr-xs padding" @click="onTurntable" data-url="../page/invitefriends/invitefriends">邀请好友</button>
			<button class="cu-btn round bg-blue block margin-tb-sm margin-lr-xs padding" @click="onTurntable" data-url="../page/my/services">客服中心</button>
		</view>
		<cu-more title="已没有更多内容咯"></cu-more>
	</view>
</template>

<script>
import { mapState, mapMutations } from 'vuex';
export default {
	computed: {
		...mapState(['hasLogin', 'forcedLogin', 'userinfo'])
	},
	components: {},
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
		...mapMutations(['logout', 'login', 'loginsoure']),
		onInit: function() {
			let that = this;
			this.$controller.onHome(this.pageNo, this.$store.state, type, function(data, error, msg) {
				console.log(data);
				if (error == 0) {
				}
			});
		},
		onTurntable: function(e) {
			let url = e.currentTarget.dataset.url;
			console.log(url)
			uni.navigateTo({
				url:url
			})
		}
	}
};
</script>

<style scoped></style>
