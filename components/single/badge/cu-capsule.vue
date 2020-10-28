<template>
	<view>
		<view class="cu-capsule radius">
			<view class="cu-tag" :class="['bg-' + bgColor]">上午</view>
			<view class="cu-tag" :class="['line-' + bgColor]">10:00</view>
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
			datas:{},
			bgColor: {
				type: String,
				default: 'red'
			}
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
