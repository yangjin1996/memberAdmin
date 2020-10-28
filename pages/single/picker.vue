<template>
	<view class="container">
		<cu-bar2 bgColor="bg-gradual-blue" :isBack="true"><block slot="content" class="page-name">选择器</block></cu-bar2>
		<view class="contents">
			<addressPicker></addressPicker>
			<datePicker></datePicker>
			<singlePicker></singlePicker>
			<multiPicker></multiPicker>
			<timePicker></timePicker>
		</view>
		<cu-more title="已没有更多内容咯"></cu-more>
	</view>
</template>

<script>
import addressPicker from '../../components/single/picker/address-picker.vue';
import datePicker from '../../components/single/picker/date-picker.vue';
import singlePicker from '../../components/single/picker/single-picker.vue';
import multiPicker from '../../components/single/picker/multi-picker.vue';
import timePicker from '../../components/single/picker/time-picker.vue';
export default {
	computed: {},
	components: {
		addressPicker,
		datePicker,
		singlePicker,
		multiPicker,
		timePicker
	},
	data() {
		return {
			shareinfo: {
				title: '未来家装饰',
				desc: '邀请您体验透明装修',
				path: 'https://www.homeeyes.cn/app/livedemo/downloadapk.html',
				logo: 'https://www.homeeyes.cn/app/images/icon_logo.png'
			}
		};
	},
	/**
	 * 用户点击右上角分享
	 */
	onShareAppMessage: function(res) {
		if (res.from === 'button') {
			// 来自页面内分享按钮
			console.log(res.target);
		}
		return this.shareinfo;
	},
	onLoad() {},
	onShow() {
		//this.onInit();
	},
	methods: {
		onInit: function() {
			let that = this;
			this.$controller.onHome(this.pageNo, this.$store.state, type, function(data, error, msg) {
				console.log(data);
				if (error == 0) {
				}
			});
		}
	}
};
</script>

<style scoped></style>
