<template>
	<scroll-view>
		<!-- 个人信息 -->
		<view class="flex bg-white padding-lg text-black margin-top-sm" @click="onClickUser" >
			<view class="flex-sub"><view class="cu-avatar round xl" :style="{backgroundImage: 'url('+ (hasLogin?userinfo.avatar:basephoto)+');'}"></view></view>
			<view class="flex-treble margin-left">
				<text>{{ hasLogin?userinfo.name:'用户未登录' }}</text>
				<view class="cu-tag round bg-orange text-white margin-left padding-left-sm padding-right-sm">V{{ vipLevel }}</view>
				<view class="margin-top">{{hasLogin?userinfo.city:'未获取信息'  }}</view>
			</view>
			<view class="flex flex-sub align-center justify-center"><text class="cuIcon cuIcon-right"></text></view>
		</view>
		<view class="center-list margin-top">
			<!-- <view class="center-list-item border-bottom" @click="toPage" data-url="../order/index">
				<image class="list-icon" src="../../static/icon_company.png"></image>
				<text class="list-text">我的订单</text>
				<text class="navigat-arrow "><text class="cuIcon-right"></text></text>
			</view> -->
			<view class="center-list-item border-bottom" @click="toPage" data-url="../order/mydiscount">
				<!-- <image class="list-icon" src="../../static/icon_invitation_code.png"></image> -->
				<text class="list-text">我的优惠券</text>
				<text class="navigat-arrow "><text class="cuIcon-right"></text></text>
			</view>
		</view>
		<view class="center-list">
			<view class="center-list-item border-bottom" @click="toPage" data-url="../invitefriends/invitefriends">
				<!-- <image class="list-icon" src="../../static/icon_friend.png"></image> -->
				<text class="list-text">邀请好友</text>
				<text class="navigat-arrow "><text class="cuIcon-right"></text></text>
			</view>
			<!-- <view class="center-list-item border-bottom" @click="toPage" data-url="./share">
				<image class="list-icon" src="../../static/icon_friend.png"></image>
				<text class="list-text">我的分享</text>
				<text class="navigat-arrow "><text class="cuIcon-right"></text></text>
			</view> -->
			<view class="center-list-item border-bottom" @click="toPage" data-url="./feedback">
				<!-- <image class="list-icon" src="../../static/icon_lock.png"></image> -->
				<text class="list-text">意见反馈</text>
				<text class="navigat-arrow "><text class="cuIcon-right"></text></text>
				
			</view>
			<view class="center-list-item border-bottom" @click="toPage" data-url="./services">
				<!-- <image class="list-icon" src="../../static/icon_updata.png"></image> -->
				<text class="list-text">在线客服</text>
				<text class="navigat-arrow "><text class="cuIcon-right"></text></text>
				
			</view>
		</view>
		<view class="center-list">
			<view class="center-list-item border-bottom" @click="toPage" data-url="./about">
				<!-- <image class="list-icon" src="../../static/icon_about.png"></image> -->
				<text class="list-text">关于我们</text>
				<text class="navigat-arrow "><text class="cuIcon-right"></text></text>
				
			</view>
		</view>
	</scroll-view>
</template>

<script>
import {
		mapState,
		mapMutations
	} from 'vuex'

	export default {
		computed: {
			...mapState(['hasLogin', 'forcedLogin','userinfo','isBack'])
		},
	data() {
		return {
			vipLevel: 321,
			uid:0,
			basephoto: '../../static/logo.png'
		};
	},
	onLoad() {
		
	},
	onShow() {
		if(!this.isBack){
			this.uid=this.userinfo.uid;
			if (!this.hasLogin) {
				uni.navigateTo({
					url: '../login/login?from=0'
				});
			} else {
				//this.onInit();
			}
		}
		
	},onUnload() {
		this.setBack(false)
	},
	onPullDownRefresh: function() {
		var that = this;
		setTimeout(function() {
			//that.onInit(1);
		}, 200);
	},
	onShareAppMessage: function(res) {
		if (res.from === 'button') {
			// 来自页面内分享按钮
			console.log(res.target);
		}
		let params="token="+this.userinfo.uid;
		return this.controller.getSharePage(params);
	},
	methods: {
		...mapMutations(['logout','login','loginsoure','setBack']),
		onClickUser:function(){
			if(this.hasLogin){
				uni.navigateTo({
					url:'./my_info'
				})
			}else{
				uni.navigateTo({
					url:'../login/login'
				})
			}
		},
		onInit: function(state) {
			var params = {
				uid: this.uid
			};
			var that = this;
			this.$axios.post(
				this.umcons.serviceAddress.GET_USER,
				params,
				function(res, code) {
					if (code == 0) {
						var data = res;
						that.login(res);
					}
					uni.stopPullDownRefresh();
				},
				function(error) {
					uni.stopPullDownRefresh();
					console.log(error);
				},state
			);
		},
		toPage(e) {
			var url = e.currentTarget.dataset.url;
			uni.navigateTo({
				url: url
			});
		}
	}
};
</script>

<style>
.cuIcon {
	font-size: 50upx;
}
.center {
	margin: auto auto;
}
.center-list {
	background-color: #ffffff;
	margin-top: 15upx;
	margin-bottom: 15upx;
	width: 100%;
	flex-direction: column;
}

.center-list-item {
	height: 90upx;
	width: 100%;
	box-sizing: border-box;
	flex-direction: row;
	padding: 0upx 20upx;
	position: relative;
	align-items: center;
}
.border-bottom {
	border-bottom-width: 1upx;
	border-color: #c8c7cc;
	border-bottom-style: solid;
}
.list-icon {
	width: 40upx;
	height: 40upx;
	line-height: 90upx;
	font-size: 34upx;
	color: #2f85fc;
	text-align: center;
	align-items: center;
	font-family: texticons;
	margin-right: 20upx;
	vertical-align: text-bottom;
}

.list-text {
	height: 90upx;
	line-height: 90upx;
	flex: 1;
	text-align: left;
	font-size: 30upx;
	font-family: FZLTKHK--GBK1-0;
	font-weight: 400;
	color: rgba(131, 131, 131, 1);
}

.navigat-arrow {
	height: 90upx;
	width: 40upx;
	line-height: 90upx;
	font-size: 34upx;
	color: #555;
	text-align: right;
	font-family: texticons;
	position: absolute;
	right: 40upx;
}
</style>
