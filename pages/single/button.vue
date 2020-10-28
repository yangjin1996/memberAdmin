<template>
	<view class="container">
		<cu-bar2 bgColor="bg-gradual-blue" :isBack="true"><block slot="content" class="page-name">操作条</block></cu-bar2>
		<view class="contents">
			<button class="cu-btn block line-orange lg" open-type="getPhoneNumber" @getphonenumber="onPhoneNumber">
				<text class="cuIcon-phone"></text>
				获取手机号
			</button>
			<button class="cu-btn block line-orange lg" open-type="getUserInfo" lang="zh_CN" @getuserinfo="bindGetUserInfo">
				<text class="cuIcon-send"></text>
				授权登录
			</button>
			<button class="cu-btn block line-orange lg" open-type="contact" bindcontact="handleContact">
				<text class="cuIcon-service"></text>
				微信客服
			</button>
			<button class="cu-btn block line-orange lg" @click="seedMsg">
				<text class="cuIcon-message"></text>
				订阅消息
			</button>
			<button class="cu-btn block line-orange lg" open-type="share">
				<text class="cuIcon-share"></text>
				分享好友
			</button>
			<button class="cu-btn block line-orange lg" open-type="openSetting" @opensetting="closeSetting">
				<text class="cuIcon-settings"></text>
				授权设置
			</button>
			<button class="cu-btn block line-orange lg" open-type="feedback" >
				<text class="cuIcon-favor"></text>
				意见反馈
			</button>
			
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
			code:"",
			canIUse: uni.canIUse('button.open-type.getUserInfo'),
			userinfo:{},
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
	onLoad() {
		this.wxLogin();
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
		onPhoneNumber:function(e) {
			console.log(e.detail.errMsg);
			console.log(e.detail.iv);
			console.log(e.detail.encryptedData);
			var that = this;
			this.$controller.decryptPhone(e.detail.encryptedData,e.detail.iv,that.code,1, function(data, error, msg) {
				console.log(data);
				if (error == 0) {
					//保存注册信息
					//执行登录跳转
					//that.gotoHome(data, that.userinfo);
				}
			});
		},
		seedMsg: function() {
			wx.requestSubscribeMessage({
				tmplIds: ['Ix1my15FnEkdRKfHFyW4gyXLKwQUhQgLufnaEvMDiAQ', 'yOEILPZ9H48Hn0IWQcYgI9Ijxoedfbs3dqajccXWAw4', 'xWEUCgAh_YDQyCr9qWuJILiQ4j9fsPgIPuJIw2XLO0E'],
				success(res) {
					console.log('success:' + res);
				},
				fail(res) {
					console.log('fail:' + res);
				},
				complete(res) {
					console.log('complete:' + res);
				}
			});
		},
		handleContact(e) {
			console.log(e.detail.path);
			console.log(e.detail.query);
		},
		//授权
		bindGetUserInfo: function(e) {
			if (e.detail.userInfo) {
				//用户按了允许授权按钮
				var that = this;
				// 获取到用户的信息了，打印到控制台上看下
				that.userinfo = e.detail.userInfo;
				console.log(e.detail.userInfo);
				that.wxLogin();
			} else {
				//用户按了拒绝按钮
				uni.showModal({
					title: '警告',
					content: '您点击了拒绝授权，将无法进入小程序，请授权之后再进入!!!',
					showCancel: false,
					confirmText: '返回授权',
					success: function(res) {
						// 用户没有授权成功，不需要改变 isHide 的值
						if (res.confirm) {
							console.log('用户点击了“返回授权”');
						}
					}
				});
			}
		},
		wxLogin: function() {
			var that = this;
			uni.login({
				provider: 'weixin',
				success: function(res) {
					console.log(res.code);
					that.code=res.code
					//that.getOpenid(res.code);
					uni.getUserInfo({
						provider: 'weixin',
						success: function(infoRes) {
							console.log('用户昵称为：' + infoRes.userInfo.nickName);
						}
					});
				}
			});
		},
		getOpenid: function(code) {
			var that = this;
			this.$controller.getOpenid(code, that.userinfo, 1, function(data, error, msg) {
				console.log(data);
				if (error == 0) {
					//保存注册信息
					//执行登录跳转
					//that.gotoHome(data, that.userinfo);
				}
			});
		},closeSetting:function(e){
			
		}
	}
};
</script>

<style scoped>
	.contents button{
		margin: 20upx;
	}
</style>
