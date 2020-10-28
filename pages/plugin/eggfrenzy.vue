<template>
	<view class="container">
		<cu-bar2 bgColor="bg-gradual-blue" :isBack="true"><block slot="content" class="page-name">跑马灯抽奖</block></cu-bar2>
		<view class="contents">
			<!-- 背景 -->
			<image src="../../static/img/bg.png" class="cont" mode=""></image>
			<view class="grid-boxs">
				<grid-egg-frenzy :datas="cuIconList" @onchange="OnStartRace"></grid-egg-frenzy>
			</view>
			<view class="margin">
				<card-rule :datas="roles"></card-rule>
			</view>
		</view>
		<cu-more title="已没有更多内容咯"></cu-more>
	</view>
</template>

<script>
import { mapState, mapMutations } from 'vuex';
import gridEggFrenzy from '../../components/single/grid/grid_egg_frenzy.vue';
import cardRule from '../../components/single/card/card_rule.vue';
export default {
	computed: {
		...mapState(['hasLogin', 'forcedLogin', 'userinfo'])
	},
	components: {
		cardRule,
		gridEggFrenzy
	},
	data() {
		return {
			roles: [
				'用户每天登录即送1次抽奖机会，分享好友则多赠1次机会',
				'用户获得的奖品，可在我的道具里查看'
			
			],
			shareinfo: {
				title: '未来家装饰',
				desc: '邀请您体验透明装修',
				path: 'https://www.homeeyes.cn/app/livedemo/downloadapk.html',
				logo: 'https://www.homeeyes.cn/app/images/icon_logo.png'
			},
			cuIconList: [
				{
					cuIcon: 'cardboardfill',
					lv: 0,
					order: 1,
					name: '谢谢惠顾'
				},
				{
					cuIcon: 'recordfill',
					lv: 0,
					order: 2,
					name: '100积分'
				},
				{
					cuIcon: 'picfill',
					lv: 0,
					order: 3,
					name: '手机'
				},
				{
					cuIcon: 'noticefill',
					lv: 0,
					order: 8,
					name: '￥100'
				},
				{
					cuIcon: 'clothesfill',
					lv: 0,
					order: 0,
					name: '开始抽奖'
				},
				{
					cuIcon: 'discoverfill',
					lv: 0,
					order: 4,
					name: '手机'
				},
				{
					cuIcon: 'questionfill',
					lv: 0,
					order: 7,
					name: '￥100'
				},
				{
					cuIcon: 'commandfill',
					lv: 0,
					order: 6,
					name: '谢谢惠顾'
				},
				{
					cuIcon: 'share',
					lv: 0,
					order: 5,
					name: '电脑'
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
		...mapMutations(['logout', 'login', 'loginsoure']),
		onInit: function() {
			let that = this;
			this.$controller.onHome(this.pageNo, this.$store.state, type, function(data, error, msg) {
				console.log(data);
				if (error == 0) {
				}
			});
		},
		OnStartRace: function(e) {
			console.log('选择：', e);
		}
	}
};
</script>

<style scoped>
.item_box {
	height: 33%;
}
.item_box image {
	height: 160upx;
}
image.cont {
	width: 750upx;
	min-height: 100vh;
	height: auto;
	position: relative;
}

image.cont {
	height: 100%;
	position: absolute;
	z-index: 0;
}
.grid-boxs {
	padding: 60upx;
}
</style>
