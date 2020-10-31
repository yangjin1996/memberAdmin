<template>
	<view class="container bg-color-white" :style="{'height':screenHeight + 'px'}">
		<view class="headpiece">
			<image class="bg-img" src="https://img02.mockplus.cn/idoc/ps/2020-10-28/7420aed0-1927-11eb-ac86-07ce5f71c012.png" mode=""></image>
			<view class="seat-box bg-color-white"></view>
		</view>
		<view class="main-content">
			<view class="title-container">
				<view class="text-bold title">欢迎登录</view>
				<view class="title-s margin-top-sm">Welcome to login</view>
			</view>
			<view class="input-container margin-bottom-lg">
				<view class="input-box">
					<image class="input-icon" src="https://img02.mockplus.cn/idoc/ps/2020-10-28/742060b0-1927-11eb-ac86-07ce5f71c012.png" mode=""></image>
					<input class="input" type="text" @focus="focusOn(1)" @blur="blur(1)" v-model="account" :placeholder="inputDefault1" placeholder-class="placeholder-sty" />
				</view>
				<view class="input-box">
					<image class="input-icon" src="https://img02.mockplus.cn/idoc/ps/2020-10-28/741f7650-1927-11eb-ac86-07ce5f71c012.png" mode=""></image>
					<input class="input" type="text" @focus="focusOn(2)" @blur="blur(2)" v-model="psd" password="true" :placeholder="inputDefault2" placeholder-class="placeholder-sty"/>
				</view>
				<button class="login margin-top bg-color" type="default" @click="login">登录</button>
			</view>
		</view>
		
	</view>
</template>

<script>
	import Util from '../../../common/util.js'
	export default {
		data() {
			return {
				screenHeight:0,
				account:'',
				psd:'',
				inputDefault1:'请输入账号',
				inputDefault2:'请输入密码'
			};
		},
		onShow(){
			uni.getSystemInfo({
				success:(res) => {
					this.screenHeight = res.screenHeight
					console.log(this.screenHeight)
				}
			})
		},
		methods:{
			focusOn(e){
				if(e === 1 && this.account.trim() === ''){
					this.inputDefault1 = ''
					return
				}
				if(e === 2 && this.psd.trim() === ''){
					this.inputDefault2 = ''
					return
				}
			},
			blur(e){
				if(e === 1 && this.account.trim() === ''){
					this.account = '';
					this.inputDefault1 = '请输入账号';
					return
				}
				if(e === 2 && this.psd.trim() === ''){
					this.psd = '';
					this.inputDefault2 = '请输入密码'
					return
				}
			},
			login(){
				// setTimeout(function(){
				// 	console.log(222)
				// },3000)
				if(this.verifyData(this.account,this.psd)){
					uni.redirectTo({
						url:'../../homes/index/index'
					})
				}
			},
			verifyData(account,psd){
				if(account === ''){
					Util.showToast({
						title:'请输入千马账号'
					})
					return false
				}
				if(psd === ''){
					Util.showToast({
						title:'请输入登录密码'
					})
					return false
				}
				return true
			}
		}
	}
</script>

<style lang="scss" scoped>
	.container{
		width:100vw;
		display: flex;
		flex-direction: column;
		.headpiece{
			width: 100%;
			height: 25%;
			background: linear-gradient(to bottom,#258AFE, #89B5FE);
			position: relative;
			.bg-img{
				width: 90%;
				height: 90%;
				position: absolute;
				right: 0;
				bottom: 0;
			}
			.seat-box{
				width: 100%;
				height: 80rpx;
				border-radius: 40rpx 40rpx 0 0;
				position: absolute;
				left: 0;
				bottom: 0;
			}
		}
		.main-content{
			width: 100%;
			// height: 0;
			padding: 40rpx 80rpx;
			background-color: #fff;
			display: flex;
			// flex: 1;
			flex-direction: column;
			.title-container{
				height:160rpx;
				.title{
					font-size: 46rpx;
					color: #333;
				}
				.title-s{
					font-size: 30rpx;
					color: #999;
				}
			}
			.input-container{
				height: 500rpx;
				margin-top:100rpx;
				display: flex;
				flex-direction: column;
				justify-content: space-between;
				.input-box{
					width:100%;
					height:98rpx;
					background-color: #f7f7f7;
					border-radius: 12rpx;
					display: flex;
					align-items: center;
					position: relative;
					.input-icon{
						width: 28rpx;
						height: 30rpx;
						position: absolute;
						left: 40rpx;
						// top: 34rpx;
					}
					.input{
						width:100%;
						height: 100%;
						padding-left: 88rpx;
					}
				}
				.login{
					width:100%;
					height:98rpx;
					line-height: 98rpx;
					color: #fff;
					font-size: 34rpx;
				}
				.login:after{
					border: none;
				}
			}
		}
	}
</style>
