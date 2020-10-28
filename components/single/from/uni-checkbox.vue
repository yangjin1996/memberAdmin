<template>
	<checkbox-group class="block margin-top margin-line" @change="CheckboxChange">
		<view class="cu-form-group" v-for="(item, index) in datas" :key="index">
			<view class="title">{{ item.title }}</view>
			<checkbox :class="[Bgcolor, { round: mold, checked: item.checked }]" :checked="item.checked ? true : false" :value="item.value"></checkbox>
		</view>
	</checkbox-group>
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
		mold: {
			type: [String, Boolean],
			default: false
		},
		Bgcolor: {
			type: String,
			default: 'red'
		}
	},
	methods: {
		CheckboxChange(e) {
			var items = this.datas,
				values = e.detail.value;
			for (var i = 0, lenI = items.length; i < lenI; ++i) {
				items[i].checked = false;
				for (var j = 0, lenJ = values.length; j < lenJ; ++j) {
					if (items[i].value == values[j]) {
						items[i].checked = true;
						break;
					}
				}
			}
			this.$emit('onchange', this.datas);
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
</style>
