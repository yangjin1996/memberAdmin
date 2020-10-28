<template>
	<view class="container box-white bg-img">
		<view class="percents" :style="[{ height: height == 0 ? '100%' : height + 'px' }]">
			<view class="percents-boxs">
				<view class="percent-head text-green text-bold">彩虹堂艺校</view>
				<view class="percent-content flex justify-center">
					<view class="text-green text-bold">
						<view>快乐彩虹堂</view>
						<view>童年我最棒</view>
					</view>
				</view>
				<view class="percent-image"><image src="../../../static/prize.jpg"></image></view>
			</view>
		</view>
		<view class="ab">
			<button class="btn0 bg-green text-white flex justify-center align-center" open-type="getUserInfo" @getuserinfo="bindGetUserInfo">登录</button>
			<button class="btn1 lines-gray text-gray flex justify-center align-center" @click="onBaseLogin">拒绝</button>
			<view class="text-sm" style="color: #2DAD3F;">
				<view class="text-center">登录后可查看机构私有分享内容</view>
				<view class="text-center">提示：登录后系统将自动保存您的微信昵称和头像</view>
			</view>
		</view>
	</view>
</template>

<script>
import { mapState, mapMutations } from 'vuex';
export default {
	computed: mapState(['forcedLogin', 'isplatform', 'isBack']),
	data() {
		return {
			height: this.ScreenHeight,
			canIUse: uni.canIUse('button.open-type.getUserInfo'),
			userinfo: {},
			username: '',
			isClickLogin: false,
			from: 0,
			background: '/static/background.png'
		};
	},
	onLoad(prop) {
		this.username = prop.username;
		this.from = prop.from;
	},
	methods: {
		...mapMutations(['login', 'loginsoure', 'setteacher', 'setBack']),
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
					that.getOpenid(res.code);
					uni.getUserInfo({
						provider: 'weixin',
						success: function(infoRes) {}
					});
				}
			});
		},
		getOpenid: function(code) {
			var that = this;
			var user = that.userinfo;
			var params = {
				code: code,
				headurl: user.avatarUrl,
				city: user.city,
				sex: user.gender,
				nickname: user.nickName,
				province: user.province
			}; //要传的数组对象
			console.log('上传参数：');
			console.log(params);

			this.$axios.post(
				this.umcons.serviceAddress.WX_LOGIN,
				params,
				function(res, state) {
					console.log(res);
					if (state == 0) {
						that.gotoHome(res, user);
					}
				},
				function(error) {
					console.log(error);
				}
			);
		},
		gotoHome: function(data, user) {
			console.log('打开首页');
			//判断用户是否为首次登录
			this.login(data);
			//设置身份
			if (data.identity == 1) {
				this.setteacher(true);
			} else {
				this.setteacher(false);
			}

			this.loginsoure(false);
			switch (this.from) {
				case '2':
					uni.redirectTo({
						url: '../../home/home'
					});
				case '1':
					uni.navigateBack({
						delta: 1
					});
					break;
				case '0':
				default:
					uni.reLaunch({
						url: '../../home/home'
					});
					break;
			}
		},
		onBaseLogin: function() {
			this.setBack(true);
			uni.navigateBack({
				delta:1
			})
		},
		loginSucceed: function(data) {
			var that = this;
			that.isClickLogin = false;
			console.log(data);
			if (data != null && data != undefined) {
				try {
					that.config.selectPro = 0;
					that.initUser();
					that.login(data);
				} catch (e) {
					//TODO handle the exception
				}
				if (data.is_old == 0) {
					//注册
					that.util.showModalMsg(
						'默认密码为手机号后6位，为了您的账户安全，请前往个人中心修改密码！',
						'进入应用',
						'前往修改',
						function() {
							uni.switchTab({
								url: '../../user/user'
							});
						},
						function() {
							uni.navigateTo({
								url: '../pulicpage/updatapassword/updatapassword'
							});
						}
					);
				} else {
					//登录
					uni.showLoading({
						title: '登录成功'
					});
					that.loginsoure(false);
					setTimeout(function() {
						uni.hideLoading();
						if (that.isplatform) {
							uni.reLaunch({
								url: '/pages/index/index',
								function() {},
								function() {
									uni.switchTab({
										url: '/pages/index/index'
									});
								}
							});
						} else {
							uni.reLaunch({
								url: '/pages/home/home'
							});
						}
					}, 1500);
				}
			} else {
				that.util.showToastModal('登录失败，请检查账号密码后重试');
			}
		}
	}
};
</script>

<style scoped>
.ab {
	position: absolute;
	width: 100%;
	bottom: 30upx;
}

.percent-head {
	text-align: center;
	position: relative;
	font-size: 340%;
}

.percent-content {
	width: 100%;
	position: relative;
	font-size: 240%;
	letter-spacing: 10upx;
}

.btn0 {
	font-size: 32upx;
	color: white;
	background: linear-gradient(-87deg, rgba(179, 234, 187, 1), rgba(77, 193, 93, 1));
	width: 560upx;
	height: 98upx;
	border-radius: 99upx;
	margin: 20upx auto;
}

.btn1 {
	border: 4upx solid #2dad3f;
	background-color: rgba(0, 0, 0, 0);
	border-radius: 99upx;
	width: 560upx;
	height: 98upx;
	font-size: 32upx;
	color: #2dad3f;
	margin: 20upx auto;
}

.pages-auth {
	margin: auto;
	text-align: center;
	border-radius: 20upx;
	background-color: #ffffff;
	padding: 50upx;
}

.content-desc {
	padding: 0.5rem;
	line-height: 30upx;
	font-size: 30upx;
}

.contents {
	background-image: url(https://www.homeeyes.cn/app/images/bgstart.png);
	background-size: 100% 100%;
	margin: 0;
	padding: 50upx;
	width: 100%;
	height: 100%;
	position: fixed;
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;
	z-index: 9999;
	background-color: #02be6d;
	display: flex;
}
.bottom-btn {
	margin-top: 30upx;
	margin-bottom: 20upx;
}
.no-login {
	float: right;
}
.w-90 {
	width: 90%;
}
.w-100 {
	width: 100%;
}
.login_avatar {
	margin-top: 210upx !important;
}
.v-center {
	margin: auto auto;
}
.back-img {
	height: 720upx;
}
.cu-btn[class*='line']::after {
	border-radius: 20upx;
}
.percent-image{
	text-align: center;
	margin-top: 20upx;
}
.percent-image image{
	border-radius: 50%;
}
.percents-boxs{
	margin: auto;
	margin-top: 20%;
}
.percents{
	display: flex;
}
</style>
