<template>
	<view>
		<view class="padding text-center">
			<view class="padding-xl radius shadow-blur bg-red margin-top bg-img" style="background-image:url(https://ossweb-img.qq.com/images/lol/web201310/skin/big91005.jpg);">
				<view>根据背景图而改变的阴影</view>
			</view>
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
			datas:{}
		},
		methods: {
			onClick() {
				this.$emit('onclick', true);
			},
			onRight() {
				this.$emit('onright', true);
			}
		}
	}
</script>

<style scoped>
	
</style>
