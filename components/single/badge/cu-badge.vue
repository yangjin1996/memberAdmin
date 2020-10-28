<template>
	<view>
		<view class="cu-capsule radius" :class="{ round: round }">
			<view @click="onClick" data-type="1" class="cu-tag" :class="['bg-' + bgcolor]">
				<text v-if="icon != ''" :class="['cuIcon-' + icon]"></text>
				{{ ltext }}
			</view>
			<view @click="onClick" data-type="2" class="cu-tag line-blue" :class="['line-' + bgcolor]">{{ rtext }}</view>
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
		rtext: {
			type: String,
			default: '0'
		},
		ltext: {
			type: String,
			default: ''
		},
		icon: {
			type: String,
			default: ''
		},
		bgcolor: {
			type: String,
			default: 'red'
		},
		round: {
			type: [Boolean, String],
			default: false
		}
	},
	methods: {
		onClick(e) {
			let type=e.currentTarget.dataset.type;
			this.$emit('onclick', type);
		},
		onRight() {
			this.$emit('onright', true);
		}
	}
};
</script>

<style scoped>
.cu-list.grid.cu-item .cu-tag {
	right: auto;
	left: auto;
	margin-left: 0rpx;
}
.cu-list.grid.cu-item [class*='cuIcon'] {
	margin-top: 0rpx;
	width: 100%;
	font-size: 30rpx;
}
</style>
