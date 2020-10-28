<template>
	<view class="padding bg-white">
		<view class="flex">
			<view class="cu-progress round " :class="[{ 'active': active },{'striped':pattern}]">
				<view :class="['bg-' + bgColor]" :style="[{ width: loading ? progress + '%' : '' }]">
				{{progress}}%
				</view>
			</view>
			<text class="progress-action margin-left" v-if="title!=''">{{title}}</text>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {};
	},
	name: 'cu-custom',
	computed: {
		style() {
			var style = '';
			return style;
		}
	},
	props: {
		datas: {},
		title: {
			type: String,
			default: ''
		},
		progress: {
			type: Number,
			default: 0
		},
		loading: {
			type: [Boolean, String],
			default: true
		},
		bgColor: {
			type: String,
			default: 'red'
		},
		active: {
			type: [Boolean, String],
			default: false
		},
		pattern:{
			type: [Boolean, String],
			default: false
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
};
</script>

<style scoped>
	.progress-action{
		min-width: 60rpx;
		font-size: 26rpx;
	}
</style>
