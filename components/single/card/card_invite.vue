<template>
	<view class="cards">
		<view class="cu-card case bg-white radius">
			<view class="text-gray padding-left padding-right">
				{{users.content}}
			</view>
			<view class="content padding">
				<view class="content-avatar">
					<image class="cu-avatar radius" :src="shops.image"
					 ></image>
				</view>
				<view class="content-info">
					<view class="content-info-title">{{shops.title}}</view>
					<view class="content-info-base">
						<view class="info-base">
						<view class="info-base-tag">{{shops.price}}</view>
						<view class="info-base-action">{{shops.desc}}</view>
						</view>
					</view>
				</view>
			</view>
		</view>
		<view class="cards-hd block center">
			<image class="cu-avatar round" :src="users.avatar"
			></image>
			 <view class="text-black">{{users.name}}</view>
		</view>
	</view>
</template>

<script>
export default {
	name: 'person',
	data() {
		return {};
	},
	props: {
		users: Object,
		shops: Object
	},
	methods: {
		commitExit() {
			console.log(this.users);
			this.$emit('onclickcard', false);
		},
		formateState: function(state) {}
	}
};
</script>

<style scoped="scoped">
.content {
	display: flex;
}

.cu-avatar{
	width: 120upx;
	height: 120upx;
}
.cards{
	z-index: 100;
	padding: 0upx 30upx;
}
.cards-hd image{
	margin: auto;
}
.cards-hd{
	position: absolute;
	left: 0;
	right: 0;
	top: -80upx;
	margin: auto;
	text-align: center;
}
.cards{
	position: relative;
}
.cu-card{
	padding-top: 100upx;
	margin-top: 80upx;
}
.content-info{
	position: relative;
	margin-left: 20upx;
	width: 100%;
	margin-right: 0;
}
.content-info-base{
	display: flex;
	position: absolute;
	bottom: 10upx;
	width: 100%;
}
.info-base{
	position: relative;
	width: 100%;
	display: flex;
}
.info-base-action{
	position: absolute;
	right: 0;
}
</style>
