<template>
	<view>
		<view class="cu-form-group">
			<view class="title">时间选择</view>
			<picker mode="time" :value="time" start="09:01" end="21:01" @change="TimeChange">
				<view class="picker">{{ time }}</view>
			</picker>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			time: '12:01'
		};
	},
	name: 'cu-custom',
	computed: {
		style() {
			var style = '';
			return style;
		}
	},
	props: {
		datas: {}
	},
	methods: {
		onClick() {
			this.$emit('onclick', true);
		},
		onRight() {
			this.$emit('onright', true);
		},
		TimeChange(e) {
			this.time = e.detail.value;
		}
	}
};
</script>

<style scoped></style>
