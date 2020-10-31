<template>
	<view class="container">
		<view class="input-container bg-color-white">
			<view class="input-box">
				<view class="condition" @click="showSearch">
					<text>{{selectedText}}</text>
					<text class="text-color-3 cuIcon-unfold margin-left"></text>
				</view>
				<view class="line margin-left-xs margin-right-sm"></view>
				<input class="input" @input="inputEvent" :placeholder="placeholderText" v-model="value" type="text" value="" />
				<image class="del-icon" v-show="showDelIcon" @click="delateValue" src="https://img02.mockplus.cn/idoc/ps/2020-10-28/564d4f00-192a-11eb-ac86-07ce5f71c012.png"></image>
			</view>
			<text class="margin-left text-color-3 search-icon" @click="searchUser">搜索</text>
		</view>
		
		<view class="checkbox" @click.stop="shoSearchType = true" v-show="shoSearchType">
			<view class="checkbox-cell bg-color-white" @click.stop="changeType" data-type="nickname" :class="{'text-color':selected === 'nickname'}">
				<text>用户昵称</text>
				<text class="cuIcon-check margin-left text-bold text-color-white" :class="{'text-color':selected === 'nickname'}"></text>
			</view>
			<view class="checkbox-cell bg-color-white" @click.stop="changeType" data-type="number" :class="{'text-color':selected === 'number'}">
				<text>用户账号</text>
				<text class="cuIcon-check margin-left text-bold text-color-white" :class="{'text-color':selected === 'number'}"></text>
			</view>
		</view>
		
		<!-- 搜索内容 -->
		<view class="user-container bg-color-white" v-show="showUserDetail && !shoSearchType">
			<view class="user-msg-cell">
				<view class="user-info text-color-3">用户昵称：</view>
				<view class="user-info-msg text-color-3">哈哈哈</view>
			</view>
			<view class="user-msg-cell">
				<view class="user-info text-color-3">用户账号：</view>
				<view class="user-info-msg text-color-3">12345678952</view>
			</view>
			<view class="user-msg-cell">
				<view class="user-info text-color-3">用户身份：</view>
				<view class="user-info-msg text-color-3">
					<text class="cuIcon-favorfill text-color margin-left-xs"></text>
					<text class="cuIcon-favorfill text-color margin-left-xs"></text>
					<text class="cuIcon-favorfill text-color margin-left-xs"></text>
				</view>
			</view>
			<view class="user-msg-cell">
				<view class="user-info text-color-3">邀请人：</view>
				<view class="user-info-msg text-color-3">张三</view>
			</view>
			<view class="user-msg-cell">
				<view class="user-info text-color-3">邀请用户数：</view>
				<view class="user-info-msg text-color-3">10000</view>
			</view>
			<view class="user-msg-cell">
				<view class="user-info text-color-3">身份升级任务进度：</view>
				<view class="user-info-msg text-color-3" :class="{'text-finish':true}">已完成</view>
			</view>
			<view class="user-msg-cell">
				<view class="user-info text-color-3">总贡献分润：</view>
				<view class="user-info-msg text-color-3">4526</view>
			</view>
			<view class="user-msg-cell">
				<view class="user-info text-color-3">本月贡献分润：</view>
				<view class="user-info-msg text-color-3">123</view>
			</view>
			<view class="uer-info-detail text-center text-color-9" @click="toDetail">
				查看详细信息<text class="cuIcon-right margin-left-xs"></text>
			</view>
		</view>
		<view class="cu-load load-modal" v-show="loadModal">
			<image src="/static/logo.png" mode="aspectFit"></image>
			<view class="gray-text">加载中...</view>
		</view>
	</view>
</template>

<script>
	import Util from '../../../common/util.js'
	export default {
		data() {
			return {
				loadModal:false,
				shoSearchType:false,
				selected:'nickname',
				selectedText:'用户昵称',
				placeholderText:'请输入用户昵称',
				value:'',
				showDelIcon:false,
				showUserDetail:false
			};
		},
		methods:{
			showSearch(){
				this.shoSearchType = !this.shoSearchType
			},
			changeType(e){
				this.selected = e.currentTarget.dataset.type;
				this.selectedText = this.selected === 'nickname' ? '用户昵称' : '用户账号'
				this.placeholderText = this.selected === 'nickname' ? '请输入用户昵称' : '请输入用户账号'
				this.shoSearchType = false;
			},
			searchUser(){
				if(!this.value.trim()){
					this.value = '';
					this.showDelIcon = false;
					Util.showToast({
						title:'请输入搜索内容'
					})
				}else{
					this.loadModal = true;
					setTimeout(() => {
						this.showUserDetail = true
						this.loadModal = false;
					}, 2000)
				}
			},
			inputEvent(){
				this.showDelIcon = !!this.value;
			},
			delateValue(){
				this.value = '';
				this.showDelIcon = false;
			},
			toDetail(){
				uni.navigateTo({
					// url:'../../groups/UserMsg/user_msg',
					url:'../../groups/unFinishMsg/un-finish-msg',
				});
			}
		}
	}
</script>

<style lang="scss" scoped>
.container{
	width: 100vw;
	height: 100vh;
	display: flex;
	flex-direction: column;
	.input-container{
		width: 100%;
		height: 102rpx;
		padding: 0 30rpx;
		border-top: 1px solid #eee;
		display: flex;
		justify-content: space-between;
		align-items: center;
		.input-box{
			width: 0;
			height: 70rpx;
			padding: 10rpx 0;
			display: flex;
			flex:1;
			align-items: center;
			background-color: #f1f1f1;
			border-radius: 6rpx;
			position: relative;
			.condition{
				width: 33%;
				padding: 0 10rpx;
				display: flex;
				justify-content: space-around;
				align-items: center;
			}
			.line{
				width: 1px;
				height: 100%;
				background-color: #ccc;
			}
			.input{
				width: 0;
				display: flex;
				flex: 1;
			}
			.del-icon{
				width: 44rpx;
				height: 44rpx;
				position: absolute;
				right: 20rpx;
			}
		}
		.search-icon{
			font-size: 30rpx;
		}
	}
	.checkbox{
		width: 100%;
		background-color: red;
		height: 0;
		display: flex;
		flex-direction: column;
		flex: 1;
		background-color: rgba(0,0,0,0.4);
		transition: all 0.3s;
		.checkbox-cell{
			width: 100%;
			height: 100rpx;
			padding: 0 30rpx;
			display: flex;
			justify-content: space-between;
			align-items: center;
		}
	}
	.user-container{
		padding:30rpx 20rpx;
		margin: 30rpx;
		border-radius: 16rpx;
		.user-msg-cell{
			display: flex;
			align-items: center;
			line-height: 42rpx;
			.user-info{
				line-height: 60rpx;
				width:300rpx;
			}
		}
		.uer-info-detail{
			margin-top:60rpx;
			font-size: 24rpx;
		}
	}
}
</style>
