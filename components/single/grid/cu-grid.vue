<template>
	<view>
		<view class="cu-list grid" :class="['col-' + cols, gridBorder ? '' : 'no-border']">
			<view class="cu-item text-center" v-for="(item, index) in datas" :key="index" @click="onClick" :data-index="index">
				<view :class="['cuIcon-' + item.cuIcon, 'text-' + item.color]" :style="customStyle">
					<view class="cu-tag badge" v-if="item.badge != 0">
						<block v-if="item.badge != 1">{{ item.badge > 99 ? '99+' : item.badge }}</block>
					</view>
				</view>
				<text>{{ item.name }}</text>
			</view>
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
		datas: Array,
		cols:  {
			type: Number,
			default: 3
		},
		gridBorder: {
			type: [Boolean, String],
			default: false
		},
		customStyle:''
	},
	methods: {
		onClick(e) {
			let index=e.currentTarget.dataset.index
			this.$emit('onclick', index);
		},
		onRight() {
			this.$emit('onright', true);
		}
	}
};
</script>

<style scoped></style>
