<template>
	<scroll-view>
		
		<!-- 导航栏 -->
		<scroll-view scroll-x class="bg-white nav margin-top-xs">
			<view class="flex text-center">
				<view class="cu-item flex-sub text-shadow" :class="item.onclick?'text-yellow cur':''" v-for="(item,index) in nav_list" :key="index" @click="onItemClick(nav_list, index)">
					{{item.name}}
				</view>
			</view>
		</scroll-view>
		
		<!-- 分享列表 -->
		<scroll-view class="bg-white">
			<view v-for="(item, index) in order_list" :key="index">
				<view class="bg-white padding-top-sm padding-bottom-sm" style="height: 175upx;" @click="toGoods(item.img)">
					<view class="flex align-center">
						<view class="flex flex-sub align-center justify-center margin-left-lg" style="width: 175px; height: 100%">
							<image :src="item.img" mode="widthFix"></image>
						</view>
						<view class="flex-treble margin-left-sm">
							<text class="text-bold">{{item.name}}</text>
							<view class="text-sm margin-top-xs">
								<view>访问人数：{{item.view}}</view>
								<view>达成成交：{{item.ok}}</view>
								<view>分享时间：{{item.date}}</view>
							</view>
						</view>
						<view class="flex-sub center">
							<view class="text-xl text-red text-bold">￥{{item.price}}</view>
							<view class="grey text-center">收益</view>
						</view>
					</view>
				</view>
			</view>
		</scroll-view>
		
	</scroll-view>
</template>

<script>
	export default{
		data() {
			return{
				nav_list: [
					{name: '全部', onclick: true},
					{name: '收益最多', onclick: false},
					{name: '访问活跃', onclick: false}
				],
				order_list: [
					{
						name: '大自然地板A款',
						img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1571133034277&di=d086afe829e746b2ba0782a8e026f3a9&imgtype=0&src=http%3A%2F%2Fphotocdn.sohu.com%2F20151120%2FImg427311599.jpg',
						date_limit: '2011-03-09',
						price: 3128,
						view: 312,
						ok: 213,
						date: '2019-10-16 16:28:52'
					},
					{
						name: '大自然地板A款',
						img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1571133034277&di=d086afe829e746b2ba0782a8e026f3a9&imgtype=0&src=http%3A%2F%2Fphotocdn.sohu.com%2F20151120%2FImg427311599.jpg',
						date_limit: '2011-03-09',
						price: 3128,
						view: 312,
						ok: 213,
						date: '2019-10-16 16:28:52'
					}
				]
			}
		},
		methods: {
			onItemClick(list, number) {
				for(let l = 0; l < list.length; l++){
					list[l].onclick = false
				}
				list[number].onclick = true
			},
			toGoods(img) {
				var u_img = encodeURIComponent(img)
				uni.navigateTo({
					url: "../index/goods_detail?" + "img=" + u_img
				})
			}
		}
	}
</script>

	
<style>
	.cuIcon{
		font-size: 175%;
	}
	.h-line{
		width: 94%;
		height: 1px;
		background-color: #656565;
		margin: auto auto;
	}
	image{
		width: 100%;
		height: 100%;
	}
	.center{
		margin: auto 32upx;
	}
</style>
