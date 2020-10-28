<template>
	<view class="header">
		<view class="title">{{title}}</view>
		<view class="user-info">
			<view class="menber-avatar" @click="onClick">
				<image v-if="leftContent" class="avatar" src="../../static/card.png" mode=""></image>
				<view v-else class="">{{leftContent}}</view>
			</view>
			<view class="nickname" @click="onClicks">
				<image v-if="rightContent" class="avatar" src="../../static/card.png" mode=""></image>
				<view v-else class="">{{rightContent}}</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props:{
			title:{
				type:String,
				default:'标题'
			},
			leftContent:{
				type:String,
				default:'111'
			},
			rightContent:{
				type:String,
				default:'2222'
			},
		},
		methods:{
			onClick(){
				this.$emit('onClick','left')
			},
			onClicks(){
				this.$emit('onClicks','right')
			}
		}
	}
</script>

<style>
	.header{
		width:100%;
		height:100rpx;
		background-color: #f5f5f5;
		display: flex;
		justify-content: center;
		align-items: center;
		position: fixed;
		left: 0;
		top:0;
		z-index: 999;
	}
	.title{
		font-size: 34rpx;
	}
	.user-info{
		position: absolute;
		right:20rpx;
		display: flex;
		align-items: center;
	}
	.menber-avatar{
		width:76rpx;
		height:76rpx;
		border-radius: 50%;
		overflow: hidden;
	}
	.avatar{
		width:100%;
		height:100%;
	}
	.nickname{
		margin-left: 20rpx;
	}
</style>
