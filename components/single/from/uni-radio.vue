<template>
	<radio-group class="block margin-line" @change="RadioChange">
		<view class="cu-form-group">
			<view class="title">{{ title }}</view>
			<view class="radios">
				<block v-for="(item, index) in datas" :key="index">
					<radio :class="[Bgcolor, { radio: mold, checked: radio == item.value }]" :checked="radio == item.value ? true : false" :value="item.value"></radio>
					<view class="radio-title">{{ item.name }}</view>
				</block>
			</view>
		</view>
	</radio-group>
</template>

<script>
export default {
	data() {
		return {
			radio: 'A'
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
		datas: {},
		mold: {
			type: [Boolean, String],
			default: false
		},
		title: {
			type: String,
			default: '标题'
		},
		Bgcolor: {
			type: String,
			default: 'red'
		}
	},
	methods: {
		RadioChange(e) {
			this.radio = e.detail.value;
			this.$emit('onchange', this.radio);
		}
	}
};
</script>

<style scoped>
.cu-form-toast {
	text-align: center;
	padding: 6rpx;
	font-size: 28upx;
	color: #ff0000;
	border-top: solid 1upx #efefef;
	border-bottom: solid 1upx #efefef;
	background-color: #ffffff;
	font-weight: 800;
}
.radios {
	display: flex;
}
.radio-title {
	align-items: center;
	display: flex;
	margin-left: 20upx;
	margin-right: 20upx;
}
</style>
