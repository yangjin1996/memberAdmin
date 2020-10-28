<template>
	<view>
		<view class="cu-form-group">
			<view class="title">地址选择</view>
			<picker mode="region" @change="RegionChange" :value="region">
				<view class="picker">
					{{region[0]}}，{{region[1]}}，{{region[2]}}
				</view>
			</picker>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				region: ['广东省', '广州市', '海珠区']
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
			},
			RegionChange(e) {
				this.region = e.detail.value
			}
		}
	}
</script>

<style scoped>
	
</style>
