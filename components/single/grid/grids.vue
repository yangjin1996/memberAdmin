<template>
	<view>
		<view class="cu-list grid" :class="['col-' + cols, gridBorder ? '' : 'no-border']">
			<slot name="item"></slot>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {};
	},
	name: 'grids',
	computed: {
	},
	props: {
		cols:  {
			type: Number,
			default: 3
		},
		gridBorder: {
			type: [Boolean, String],
			default: false
		}
	},
	methods: {
		
	}
};
</script>

<style scoped></style>
