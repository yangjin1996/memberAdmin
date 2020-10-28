<template>
	<view>
		<view class="cu-form-group">
			<view class="title">日期选择</view>
			<picker mode="date" :value="date" start="2015-09-01" end="2020-09-01" @change="DateChange">
				<view class="picker">{{ date }}</view>
			</picker>
			<view>
				<text class="cuIcon-add"></text>
			</view>
			<picker mode="time" :value="time" start="09:01" end="21:01" @change="TimeChange">
				<view class="picker">{{ time }}</view>
			</picker>
			<view>
				<text class="cuIcon-add"></text>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			time: '12:01',
			date: '2018-12-25'
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
		},
		DateChange(e) {
			this.date = e.detail.value;
		}
	}
};
</script>

<style scoped>
.cu-form-group picker:after {
	content: none;
}
</style>
