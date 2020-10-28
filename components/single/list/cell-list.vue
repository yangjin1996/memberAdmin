<template>
	<view class="cu-list menu">
		<view class="cu-item " v-for="(item,index) in datas" :key="index"  @click="onClickItem" :data-index="index">
			<view class="content">
				<text class="cuIcon-moneybagfill text-orange"></text>
				<text class="text-grey" v-if="item.type!=0">{{item.type}}产生</text>
				<text class="text-grey">{{item.name}}</text>
				
			</view>
			<view class="action"><text class="text-red text-sm">+{{item.profit_num}}</text></view>
		</view>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		},props: {
			datas: {}
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

<style>

</style>
