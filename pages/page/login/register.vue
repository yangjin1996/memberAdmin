<template>
	<view class="container">
		<view class="input-boxs">
			<uni-input icon="addressbook" Bgcolor="red" hint="请输入用户昵称" @oninput="OnInput"></uni-input>
			<uni-input icon="phone" Bgcolor="red" hint="请输入手机号" @oninput="OnInput"></uni-input>
			<uni-input icon="safe" mold="verif" hint="请输入验证码" @onclick="getVerif" @oninput="OnInput"></uni-input>
			<uni-input icon="lock" Bgcolor="red" hint="密码长度6-20位" @oninput="OnInput"></uni-input>
			<uni-button title="立即注册" mold="true" BgColor="orange" @onclick="OnLogin"></uni-button>
		</view>
	</view>
</template>

<script>
import { mapState, mapMutations } from 'vuex';
import uniInput from '../../../components/single/from/uni-input.vue';
import uniButton from '../../../components/single/button/uni-button.vue';
import cuBadge from '../../../components/single/badge/cu-badge.vue';
export default {
	components: {
		uniInput,
		uniButton,
		cuBadge
	},
	computed: mapState(['forcedLogin', 'isplatform', 'inviter']),
	data() {
		return {
			canIUse: uni.canIUse('button.open-type.getUserInfo'),
			userinfo: {},
			isClickLogin: false
		};
	},
	onLoad(prop) {
		this.from = prop.from;
	},
	methods: {
		...mapMutations(['login', 'loginsoure']),
		gotoHome: function(data, user) {
			console.log(data);
			//判断用户是否为首次登录
			this.login(data);
			this.loginsoure(false);
			if (user != null) {
				switch (this.from) {
					case '0':
						uni.reLaunch({
							url: '../index/index'
						});
						break;
					case '1':
						uni.navigateBack({
							delta: 1
						});
						break;
				}
			}
		},
		onBaseLogin: function() {
			var that = this;
			this.setBack(true);
			uni.navigateBack({
				delta: 1
			});
		},OnLogin:function(e){
			this.util.showModalMsg('登录成功',"",function(){
				//this.gotoHome()
			});
		},
		getVerif:function(e){
			this.util.showModalMsg('获取验证码成功：'+e);
		},OnInput:function(e){
			console.log(e);
		}
		
	}
};
</script>

<style scoped>
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
.container {
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
.input-boxs{
	width: 100%;
	margin: auto;
}
</style>
