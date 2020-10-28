<template>
	<view class="cu-list menu-avatar">
		<view v-for="(item,index) in datas" :key="index" class="cu-item" @click="onClickItem" :data-index="index">
			<view class="cu-avatar round lg" :style="[{backgroundImage:'url('+item.photo+');'}]"></view>
			<view class="content">
				<view class="text-pink"><view class="text-cut">{{item.title}}</view></view>
				<view class="text-gray text-sm flex"> 
					<view class="text-cut" ><text class="text-orange cuIcon-mail margin-lr-xs"></text>{{item.content}}</view>
				</view>
			</view>
			<view class="action">
				<view class="text-grey text-xs">{{item.time}}</view>
				<view class="cu-tag round bg-red sm">{{item.desc}}</view>
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
