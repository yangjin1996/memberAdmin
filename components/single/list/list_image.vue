<template>
	<view>
		<view v-for="(item,index) in datas" :key="index" class="cu-image" :data-index="index" @tap="ViewImage" :data-url="item">
			<image :src="item"></image>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		},
		name: 'cu-custom',
		computed: {
			style() {
				var style=""
				return style
			}
		},
		props: {
			datas:Array
		},
		methods: {
			onClick(e) {
				let index=e.currentTarget.dataset.index;
				this.$emit('onclick', index);
			},
			onRight() {
				this.$emit('onright', true);
			},
			ViewImage(e) {
				uni.previewImage({
					urls: this.datas,
					current: e.currentTarget.dataset.url
				});
			}
		}
	}
</script>

<style scoped>
	.cu-image image{
		width: 100%;
		margin: 0;
	}
	.cu-image{
		margin: 0;
		padding: 0;
	}
</style>
