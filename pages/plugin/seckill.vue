<template>
	<view class="container">
		<cu-bar2 bgColor="bg-gradual-orange" :isBack="true"><block slot="content" class="page-name">秒杀活动</block></cu-bar2>
		<view class="contents bg-gradual-orange">
			<!-- 背景 -->
			<view class="grid-boxs">
				<view class="grid-boxs-hd">
					<view class="text-xxl text-bold padding">限时疯抢活动，今日开始中...</view>
					<cu-badge-count :time="time" round="true" icon="remind" ltext="距结束"></cu-badge-count>
				</view>
				<view class="cu-card radius margin bg-white padding-bottom-sm">
					<card-boxs-shop :datas="datas"></card-boxs-shop>
					<button class="cu-btn block bg-yellow text-red lg margin-left margin-right" open-type="share">
						<text class="cuIcon-discover cuIconfont-spin margin-right"></text>
						立即参与抢购
					</button>
				</view>
				<view class="cu-card radius margin bg-white">
					<cu-grid-avatar :time="time" :total="10" :datas="lists" cols="6"></cu-grid-avatar>
				</view>
				<view class="cu-card radius margin bg-white">
					<list-image :datas="imagelist" ></list-image>
				</view>
				<view class="margin">
					<card-rule :datas="roles" bgcolor="bg-gradual-orange"></card-rule>
				</view>
				
			</view>
		</view>
	</view>
</template>

<script>
import { mapState, mapMutations } from 'vuex';
import cuBadgeCount from '../../components/single/badge/cu-badge-count.vue';
import cardBoxsShop from '../../components/single/card/card_boxs-shop.vue';
import cuGridAvatar from '../../components/single/grid/cu-grid-avatar.vue';
import listImage from '../../components/single/list/list_image.vue'
import cardRule from '../../components/single/card/card_rule.vue'
export default {
	computed: {
		...mapState(['hasLogin', 'forcedLogin', 'userinfo'])
	},
	components: {
		cardBoxsShop,
		cuBadgeCount,
		cuGridAvatar,
		listImage,
		cardRule
	},
	data() {
		return {
			time:0,
			roles: ['用户每天登录即送1次抽奖机会，分享好友则多赠1次机会', '用户获得的奖品，可在我的道具里查看'],
			lists: [
				{
					title: '好友A',
					image: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big91012.jpg'
				},
				{
					title: '好友A',
					image: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big25002.jpg'
				},
				{
					title: '好友A',
					image: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big25002.jpg'
				},
				{
					title: '好友A',
					image: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big25002.jpg'
				},
				{
					title: '好友A',
					image: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big25002.jpg'
				},
				{
					title: '好友A',
					image: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big25002.jpg'
				},
				{
					title: '好友A',
					image: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big25002.jpg'
				},
				{
					title: '好友A',
					image: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big25002.jpg'
				},
				{
					title: '好友A',
					image: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big25002.jpg'
				},
				{
					title: '好友A',
					image: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big25002.jpg'
				}
			],
			imagelist:[
				"https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg",
				"https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg",
				"https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg"
			],
			datas:{
				number:5000,
				expend:2000,
				tag:"拼多多",
				shop:"冠奇食品官方旗舰店",
				good:"广味香肠",
				tags:["正品保证","厂家直销","新鲜出炉"],
				image:"https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg",
				price:24.89,
				original:29.9,
				mark:"秒杀价"
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
		return this.util.getSharePage('uid=3', '快来给我砍价吧', '最后还需要看0.5元', this.users.avatar);
	},
	onLoad() {
		var date=new Date();
		this.time=date.getTime();
	},
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
		},
		onMore: function(e) {
			this.util.showAlert('加载更多');
		},
		onClickItem: function(e) {
			this.util.showAlert('点击列表：' + e);
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
	padding: 30upx 10upx;
}
.grid-boxs-hd {
	text-align: center;
}
</style>
