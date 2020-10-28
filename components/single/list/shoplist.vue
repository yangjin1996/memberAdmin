<template>
	<view class="grid col-2 margin-left-sm margin-right-sm margin-top-xs">
		<view v-for="(item, index) in datas" :key="index" class="bg-white grid-item" @click="toGoods" :data-id="item.id" v-if="type!=0?(type==item.shop_fl_id):true">
			<view class="cu-tag margin-top-xs margin-left-xs padding-xs bg-orange">{{tags[item.label_id-1].title }}</view>
			<view style="float: right;">
				<view class="br">销量{{ item.xl}}件</view>
			</view>
			<image :src="item.img" mode="aspectFill" class="margin-sm"></image>
			<view class="margin-left-sm padding-bottom-xs">
				<view class="text-bold">{{ item.name }}</view>
				<view>
					<text class="margin-right-sm text-bold text-red">￥{{ item.n_price}}</text>
					<text class="margin-right-sm text-gray" style="text-decoration: line-through;">￥{{ item.y_price }}</text>
					<view class="bg-red text-sm padding-xs padding-left-sm padding-right-sm" style="display: inline-block; border-radius: 4upx;">购买</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		},props:{
			datas:Array,
			tags:Array,
			type:0
		},methods:{
			toGoods(e) {
				let id=e.currentTarget.dataset.id;
				this.$emit('onclick',id);
			}
		}
	}
</script>

<style scoped>
image {
	width: 88%;
	height: 400upx;
}
button {
	display: inline-block;
}
.cu-tag {
	position: absolute;
	z-index: 100;
	border-radius: 9upx;
	
}
.br {
	
	text-decoration: underline;
	color: red;
	font-size: 26upx;
	padding: 0px 0px;
	border-radius: 0px;
	background: none;
	position: absolute;
	bottom: 120upx;
	right: 20upx;
	z-index: 1;
}
.grid-item{
	margin: 1%;
	border-radius: 12upx;
	position: relative;
}
.grid.col-2>view{
	width: 48%;
}
</style>
