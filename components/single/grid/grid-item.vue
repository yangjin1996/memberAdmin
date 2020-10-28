<template >
	<view class="cu-item" :class="['row-' + span]">
		<slot></slot>
	</view>
</template>

<script>
export default {
	data() {
		return {};
	},
	name: 'cu-item',
	computed: {},
	props: {
		span:{
			type:[Number,String],
			default:3
		}
	},
	methods: {
		onClick(e) {
			let index = e.currentTarget.dataset.index;
			this.$emit('onclick', index);
		},
		onRight() {
			this.$emit('onright', true);
		}
	}
};
</script>

<style scoped>
	.row-1{
		width: 100%;
	}
	.row-2{
		width: 50%;
	}
	.row-3{
		width: 33%;
	}
	.row-4{
		width: 25%;
	}
	.row-5{
		width: 20%;
	}
</style>
