<template>
	<view class="container">
		<view class="msg-list margin-top-sm">
			<view class="title text-bold text-color-3">基础信息</view>
			<view class="msg-list-cell">
				<view class="sub-menu">昵称：</view>
				<view class="">小进进</view>
			</view>
			<view class="msg-list-cell">
				<view class="sub-menu">用户账号：</view>
				<view class="">18169356256</view>
			</view>
			<view class="msg-list-cell">
				<view class="sub-menu">用户身份：</view>
				<view class="">
					<text class="cuIcon-favorfill text-color margin-left-xs"></text>
					<text class="cuIcon-favorfill text-color margin-left-xs"></text>
					<text class="cuIcon-favorfill text-color margin-left-xs"></text>
				</view>
			</view>
			<view class="msg-list-cell">
				<view class="sub-menu">主播关系邀请人：</view>
				<view class="">小进进</view>
			</view>
			
			<view class="msg-list-cell">
				<view class="sub-menu">用户关系邀请人：</view>
				<view class="">小进进</view>
			</view>
			<view class="msg-list-cell">
				<view class="sub-menu">团队主播数：</view>
				<view class="">小进进</view>
			</view>
			<view class="msg-list-cell">
				<view class="sub-menu"></view>
				<view class="">小进进</view>
			</view>
			<view class="msg-list-cell">
				<view class="sub-menu"></view>
				<view class="">小进进</view>
			</view>
			<view class="msg-list-cell">
				<view class="sub-menu">主播关系邀请人：</view>
				<view class="">小进进</view>
			</view>
			
			<view class="msg-list-cell">
				<view class="sub-menu"></view>
				<view class="">小进进</view>
			</view>
			
			<view class="msg-list-cell">
				<view class="sub-menu"></view>
				<view class="">小进进</view>
			</view>
			<view class="msg-list-cell">
				<view class="sub-menu">邀请用户数：</view>
				<view class="">222</view>
			</view>
			<view class="msg-list-cell" v-if="finished">
				<view class="sub-menu">身份升级任务进度：</view>
				<view class="text-finish">已完成</view>
			</view>
			<view class="" v-else>
				<view class="msg-list-cell">
					<view class="sub-menu">身份升级任务进度：</view>
					<view class="">1. 还需直推X个创业主播</view>
				</view>
				<view class="msg-list-cell">
					<view class="sub-menu"></view>
					<view class="">2. 还需X个创业主播</view>
				</view>
				<view class="msg-list-cell">
					<view class="sub-menu"></view>
					<view class="">3. 还需提现X元</view>
				</view>
			</view>
		</view>
		<view class="msg-list">
			<view class="title text-bold text-color-3">交易信息</view>
			<view class="msg-list-cell">
				<view class="sub-menu">总订单：</view>
				<view class="">小进进</view>
			</view>
			<view class="msg-list-cell">
				<view class="sub-menu">本月订单：</view>
				<view class="">小进进</view>
			</view>
			<view class="msg-list-cell">
				<view class="sub-menu">团队总订单：</view>
				<view class="">小进进</view>
			</view>
			<view class="msg-list-cell">
				<view class="sub-menu">团队本月总订单：</view>
				<view class="">小进进</view>
			</view>
			<view class="msg-list-cell">
				<view class="sub-menu">总消费金额：</view>
				<view class="">小进进</view>
			</view>
			<view class="msg-list-cell">
				<view class="sub-menu">本月消费金额：</view>
				<view class="">小进进</view>
			</view>
			<view class="msg-list-cell">
				<view class="sub-menu">团队总消费金额：</view>
				<view class="">小进进</view>
			</view>
			<view class="msg-list-cell">
				<view class="sub-menu">本月消费金额：</view>
				<view class="">小进进</view>
			</view>
		</view>
		<view class="msg-list">
			<view class="title text-bold text-color-3">团队提成</view>
			<view class="msg-list-cell">
				<view class="sub-menu">团队总提成：</view>
				<view class="">12545</view>
			</view>
			<view class="msg-list-cell">
				<view class="sub-menu">团队本月总提成：</view>
				<view class="">12345</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				finished:true
			};
		},
		onLoad(option){
			this.finished = option.finished
		}
	}
</script>

<style lang="scss" scoped>
	.msg-list{
		width: 94%;
		margin: 0 auto;
		margin-top: 30rpx;
		padding:20rpx 20rpx;
		background-color: #fff;
		margin-bottom: 20rpx;
		border-radius: 16rpx;
		.title{
			line-height: 70rpx;
			font-size: 34rpx;
		}
		.msg-list-cell{
			font-size: 28rox;
			color: #333;
			line-height: 56rpx;
			display: flex;
			.sub-menu{
				width: 40%;
			}
		}
	}
</style>
