<template>
	<view>
		<view class="cu-timeline">
			<view class="cu-time">06-17</view>
			<view class="cu-item " :class="['cuIcon-' + icon,'text-' + bgColor]">
				<view class="content shadow-blur" :class="['bg-' + bgColor]">
					<slot name="content"></slot>
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
			icon: {
				type: String,
				default: ''
			},
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
