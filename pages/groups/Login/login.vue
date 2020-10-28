<template>
	<view class="container">
		<view class="wrap-container">
			<input class="input" type="text" value="" @focus="focusOn" v-model="account" placeholder="请输入账号" placeholder-class="placeholder-sty" />
			<input class="input" type="text" value="" @focus="focusOn" v-model="psd" password="true" placeholder="请输入登录密码" placeholder-class="placeholder-sty"/>
			<button class="login" type="default" @click="login">登录</button>
		</view>
	</view>
</template>

<script>
	import Util from '../../../common/util.js'
	export default {
		data() {
			return {
				account:'',
				psd:''
			};
		},
		methods:{
			focusOn(){
				console.log('focus')
			},
			login(){
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
		height:80vh;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.wrap-container{
		width:100%;
		height:300rpx;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		align-items: center;
		.input{
			width:65%;
			height:60rpx;
			padding-left: 10rpx;
			border: 1px solid #ccc;
			border-radius: 10rpx;
		}
		.placeholder-sty{
			font-size: 24rpx;
		}
		.login{
			width:65%;
			height:80rpx;
			background-color: red;
		}
	}
</style>
