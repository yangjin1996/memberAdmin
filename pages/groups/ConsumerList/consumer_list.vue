<template>
	<view class="container">
		<view class="header">
			<view class="title">用户列表</view>
			<view class="user-info">
				<view class="img-icon" @click="search">
					<image class="img" src="https://img02.mockplus.cn/idoc/ps/2020-10-28/aed0dfd0-1929-11eb-ac86-07ce5f71c012.png" mode=""></image>
				</view>
				<view class="img-icon img-icons" @click="showModal" data-target="DrawerModalR">
					<image class="img" src="https://img02.mockplus.cn/idoc/ps/2020-10-28/aed12df0-1929-11eb-ac86-07ce5f71c012.png" mode=""></image>
				</view>
			</view>
		</view>
		<view class="user-container">
			<view class="user-msg-cell" v-for="(item,index) of userMsgList" :keys="index">
				<view class="user-info text-color-3">{{item.definition}}</view>
				<view class="user-info-msg text-color-3" v-if="!!item.isStar">
					<text class="cuIcon-favorfill text-color margin-left-xs" v-for="(item,index) of item.isStar" :keys="index"></text>
				</view>
				<view class="user-info-msg" :class="{'text-finish':item.finish}" v-else>{{item.value}}</view>
			</view>
			<view class="uer-info-detail text-center text-color-9" @click="toDetail">
				查看详细信息<text class="cuIcon-right margin-left-xs"></text>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				modalName: null,
				refresh:false,
				userMsgList:[
					{
						definition:'用户昵称：',
						value:'小进进'
					},
					{
						definition:'用户账号：',
						value:'59875455666588'
					},
					{
						definition:'用户身份：',
						value:'小进进',
						isStar:4
					},
					{
						definition:'主播关系邀请人：',
						value:'张三'
					},
					{
						definition:'用户关系邀请人：',
						value:'李四'
					},
					{
						definition:'邀请用户数：',
						value:'123'
					},
					{
						definition:'身份升级任务进度：',
						value:'已完成',
						finish:true
					},
					{
						definition:'总贡献提成：',
						value:'4526'
					},
					{
						definition:'本月贡献值提成：',
						value:'123'
					}
				]
			};
		},
		onShow(){
			if(this.refresh){
				console.log('初始化数据')
			}
		},
		onLoad(option){
			if(Object.keys(option).length > 0){
				this.refresh = true
			}
		},
		methods:{
			toDetail(){
				// 携带是否完成任务参数finished
				uni.navigateTo({
					url:`../../groups/UserMsg/user_msg?finished=1`
				});
			},
			showModal(e) {
				// this.modalName = e.currentTarget.dataset.target
				uni.navigateTo({
					// url:'../../groups/UserMsg/user_msg',
					url:'../../groups/userScreen/user-screen',
				});
			},
			search(){
				uni.navigateTo({
					url:'../../groups/searchUser/search-user?type=user',
				});
			}
		}
	}
</script>

<style lang="scss" scoped>
	.container{
		width: 94%;
		margin: 0 auto;
		margin-top:30rpx;
		font-weight: bold;
		border-radius: 16rpx;
		background-color: #fff;
		.header{
			width:92%;
			height:80rpx;
			background-color: #fff;
			display: flex;
			justify-content: center;
			align-items: center;
			position: fixed;
			right: 0;
			top:0;
			z-index: 999;
			.title{
				font-size: 34rpx;
			}
			.user-info{
				font-size: 28rpx;
				position: absolute;
				right:20rpx;
				display: flex;
				align-items: center;
				.img-icon{
					width:32rpx;
					height:32rpx;
					overflow: hidden;
					.img{
						width:100%;
						height:100%;
					}
				}
				.img-icons{
					margin-left: 30rpx;
				}
			}
		}
		.user-container{
			padding:30rpx 20rpx;
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
				margin-top:40rpx;
				font-size: 24rpx;
			}
		}
		
	}
</style>
