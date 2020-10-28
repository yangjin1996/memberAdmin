<template>
	<view>
		<view v-for="(item, index) in datas" :key="index" v-if="type == 0">
			<view class="margin-top-sm padding-left-lg padding-right-lg bg-white padding-xs flex">
				<view class="align-center flex flex-sub">
					<text class="cuIcon cuIcon-shop text-black"></text>
					<text class="text-sm text-bold margin-sm">{{ item.name }}</text>
				</view>
				<view class="justify-end flex flex-sub">
					<text class="margin-sm" v-if="item.status != null">{{ item.status == 0 ? '待使用' : '已失效' }}</text>
					<text class="margin-sm" v-if="item.is_used != null">{{ item.is_used == 0 ? '待使用' : '已失效' }}</text>
					</view>
			</view>
			<view class="h-line"></view>
			<view class="bg-white padding-top-sm"  @click="onClickItem" :data-index="index">
				<view class="flex align-center">
					<view class="flex flex-sub align-center justify-center margin-left-lg" style="width: 175px; height: 100%">
						<image
							src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1571133034277&di=d086afe829e746b2ba0782a8e026f3a9&imgtype=0&src=http%3A%2F%2Fphotocdn.sohu.com%2F20151120%2FImg427311599.jpg"
							mode="widthFix"
						></image>
					</view>
					<view class="flex-treble margin-left-sm">
						<view>
							<text class="text-bold">{{ item.name }}</text>
							<text class="margin-left-lg">优惠券</text>
						</view>
						<view >抵用金额：￥{{ item.price }}</view>
						<view v-if="item.emoney!=null">付款金额：￥{{ item.emoney }}</view>
						<view >到期时间：{{ item.e_time }}</view>
					</view>
					<view class="flex-sub center text-xl text-center">
						<text class="block text-red text-bold" v-if="item.code != null">{{ item.code }}</text>
						<text class="block text-size-26">兑换码</text>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {};
	},
	props: {
		datas: Array,
		type: {
			type: Number,
			default: 0
		}
	},
	methods: {
		onClickItem: function(e) {
			let index = e.currentTarget.dataset.index;
			this.$emit('onclick', index);
		}
	}
};
</script>

<style scoped>
.cuIcon {
	font-size: 175%;
}
.h-line {
	width: 94%;
	height: 1px;
	background-color: #656565;
	margin: auto auto;
}
image {
	width: 100%;
	height: 100%;
}
.center {
	margin: auto 32upx;
}
</style>
