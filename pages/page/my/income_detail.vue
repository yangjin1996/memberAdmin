<template>
	<scroll-view>
		
		<view class="bg-white margin-top-sm padding-bottom-sm">
			<view class="text-center padding-top-xl padding-bottom-xl">
				<view class="text-red text-bold" style="font-size: 64upx;">32123</view>
				<view>总积分</view>
			</view>
			<view class="h-line"></view>
			<view class="margin-top-sm margin-bottom-sm text-bold margin-left text-lg">收益明细</view>
			<view class="h-line"></view>
			<view v-for="(item, index) in income_list" :key="index" class="flex align-center margin-left-sm margin-top-xs">
				<view class="flex-twice">{{item.date}}</view>
				<view class="flex-twice">{{item.who}}</view>
				<view class="text-red flex-sub">+{{item.price}}</view>
			</view>
		</view>
		
	</scroll-view>
</template>

<script>
	export default{
		data() {
			return{
				income_list: [
					{
						date: '2019-10-16 17:13:57',
						who: 'AAA查看了分享',
						price: '213'
					},
					{
						date: '2019-10-16 17:13:57',
						who: 'AAA查看了分享',
						price: '213'
					},
					{
						date: '2019-10-16 17:13:57',
						who: 'AAA查看了分享',
						price: '213'
					},
					{
						date: '2019-10-16 17:13:57',
						who: 'AAA查看了分享',
						price: '213'
					},
					{
						date: '2019-10-16 17:13:57',
						who: 'AAA查看了分享',
						price: '213'
					},
					{
						date: '2019-10-16 17:13:57',
						who: 'AAA查看了分享',
						price: '213'
					}
				]
			}
		}
	}
</script>

<style>
	.h-line{
		width: 98%;
		height: 1px;
		background-color: #656565;
		margin: auto auto;
	}
</style>
