<template>
	<view class="container">
		<cu-bar2 bgColor="bg-gradual-orange" :isBack="true"><block slot="content" class="page-name">好友砍价</block></cu-bar2>
		<view class="contents bg-gradual-orange" >
			<!-- 背景 -->
			<!-- <image src="../../static/img/bg.png" class="cont" mode=""></image> -->
			<view class="grid-boxs ">
				<card-invite :shops="shops" :users="users"></card-invite>
				<view class="padding center">
					已砍
					<text class="text-size-38 text-yellow">123.23</text>
					元， 还差
					<text class="text-size-38 text-yellow">0.77</text>
					元
				</view>
				<button class="cu-btn block bg-yellow text-red lg margin-left margin-right" open-type="share">
					<text class="cuIcon-discover cuIconfont-spin margin-right"></text>
					喊好友砍一刀
				</button>
				<view class="padding center">
					还剩
					<text class="text-size-38 text-yellow">18:00:11 00:23:00</text>
					结束， 快来砍价吧
				</view>
				<card-boxs @onmore="onMore" bgcolor="bg-gradual-orange" title="砍价帮">
					<block slot="content">
						<cu-list-action :datas="lists" @onclick="onClickItem" bgColor="yellow"></cu-list-action>
					</block>
				</card-boxs>
				<view class="margin">
					<card-rule :datas="roles"></card-rule>
				</view>
			</view>
		</view>
		<!-- <cu-more title="已没有更多内容咯"></cu-more> -->
	</view>
</template>

<script>
import { mapState, mapMutations } from 'vuex';
import cardInvite from '../../components/single/card/card_invite.vue';
import cardBoxs from '../../components/single/card/card_boxs.vue';
import cuListAction from '../../components/single/list/cu-list-action.vue';
import cardRule from '../../components/single/card/card_rule.vue'
export default {
	computed: {
		...mapState(['hasLogin', 'forcedLogin', 'userinfo'])
	},
	components: {
		cardInvite,
		cardBoxs,
		cuListAction,
		cardRule
	},
	data() {
		return {
			roles: ['用户每天登录即送1次抽奖机会，分享好友则多赠1次机会', '用户获得的奖品，可在我的道具里查看'],
			lists: [
				{
					title: '好友A',
					image: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big91012.jpg',
					desc: "砍掉0.5元",
					content: '为了部落帮你砍一刀'
				},
				{
					title: '好友A',
					image: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big25002.jpg',
					desc: "砍掉0.5元",
					content: '为了部落帮你砍一刀'
				}
			],shops:{
				image:"https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg",
				title:"儿童初学商品成人教育",
				price:"￥123",
				desc:"227人已0元拿"
			},users:{
				avatar:"https://ossweb-img.qq.com/images/lol/web201310/skin/big25002.jpg",
				name:'小李',
				content:'我发现了一件好货，来一起砍价0元吧'
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
		return this.util.getSharePage("uid=3","快来给我砍价吧",'最后还需要看0.5元',this.users.avatar);
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
		},onMore:function(e){
			this.util.showAlert("加载更多");
		},onClickItem:function(e){
			this.util.showAlert("点击列表："+e);
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

</style>
