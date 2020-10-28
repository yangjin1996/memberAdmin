<template>
	<view class="cu-list menu-avatar">
		<view v-for="(item,index) in datas" :key="index" class="cu-item" @click="onClickItem" :data-index="index">
			<view class="cu-avatar radius lg" :style="[{backgroundImage:'url('+item.photo+');'}]"></view>
			<view class="content">
				<view class="text-pink"><view class="text-cut">{{item.title}}</view></view>
				<view class="text-gray text-sm flex"> 
					<view class="text-cut" v-if="!iscustom">兑换日期：<text class="text-size-22 text-end-day">{{item.desc}}</text></view>
					<view class="text-cut" v-if="iscustom"><text class="text-orange cuIcon-mail margin-lr-xs"></text>2019次打卡</view>
				</view>
			</view>
			<view class="action">
				<view class="text-grey text-xs">兑换积分</view>
				<view class="cu-tag round bg-red sm">{{item.value}}</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name: 'journal',
		data() {
			return {

			}
		},
		props: {
			datas: {},
			iscustom:{
				type: [Boolean, String],
				default: false
			}
		},
		methods: {
			onClickItem(e) {
				//console.log(this.datas);
				var index = e.currentTarget.dataset.index;
				this.$emit('onclickitem', index);
			},
			previewImage: function(e) {
				var current = e.target.dataset.src;
				var imgs = this.datas.image;
				uni.previewImage({
					current: current,
					urls: imgs
				})
			}

		}
	}
</script>
<!-- StarbbUI -->
<style scoped>

</style>
