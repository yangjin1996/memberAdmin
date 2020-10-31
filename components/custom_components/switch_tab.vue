<template>
	<view>
		<view class="tab-container">
			<view class="tab-cell" @click="switchTab" :data-index="0">
				<view class="tab-all" :class="{'text-on': tabIndex === 0}">全部</view>
				<view class="underline" :class="{'on': tabIndex === 0}"></view>
			</view>
			<view class="tab-cell" @click="switchTab" :data-index="1">
				<view class="tab-pay" :class="{'text-on': tabIndex === 1}">待支付</view>
				<view class="underline" :class="{'on': tabIndex === 1}"></view>
			</view>
			<view class="tab-cell" @click="switchTab" :data-index="2">
				<view class="tab-fin" :class="{'text-on': tabIndex === 2}">已支付</view>
				<view class="underline" :class="{'on': tabIndex === 2}"></view>
			</view>
			<view class="tab-cell" @click="switchTab" :data-index="3">
				<view class="tab-close" :class="{'text-on': tabIndex === 3}">已关闭</view>
				<view class="underline" :class="{'on': tabIndex === 3}"></view>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			tabIndex:0
		};
	},
	name: 'switch_tab',
	computed: {
	},
	props: {
		
	},
	methods: {
		switchTab(e){
			this.tabIndex = parseInt(e.currentTarget.dataset.index)
			this.$emit('switchTab', this.tabIndex);
		}
	}
};
</script>

<style scoped>
	.tab-container{
		height:60rpx;
		padding:0 40rpx;
		background-color: #fff;
		display: flex;
		justify-content: space-between;
		align-items: center;
		border-bottom: 2rpx solid #f5f5f5;
	}
	.tab-cell{
		height:100%;
		position: relative;
	}
	.underline{
		width: 100%;
		heiht: 4rpx;
		border: 2rpx solid #fff;
		border-radius: 2rpx;
		position: absolute;
		bottom: 0;
	}
	.on{
		border: 2rpx solid #258AFE;
	}
	.text-on{
		color: #258AFE;
	}
</style>