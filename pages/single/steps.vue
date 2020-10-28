<template>
	<view class="container">
		<cu-bar2 bgColor="bg-gradual-blue" :isBack="true"><block slot="content" class="page-name">步骤条</block></cu-bar2>
		<view class="contents">
			<uniSteps></uniSteps>
			<uniStepsNum></uniStepsNum>
			<uniStepsLevel></uniStepsLevel>
			<steps-bar :datas="lists"></steps-bar>
		</view>
		<cu-more title="已没有更多内容咯"></cu-more>
	</view>
</template>

<script>
import uniSteps from '../../components/single/steps/cu-steps.vue';
import uniStepsNum from '../../components/single/steps/cu-steps-num.vue';
import uniStepsLevel from '../../components/single/steps/cu-steps-level.vue';
import stepsBar from '../../components/single/steps/stepsBar.vue';
export default {
	computed: {},
	components: {
		uniSteps,
		uniStepsNum,
		uniStepsLevel,
		stepsBar
	},
	data() {
		return {
			shareinfo: {
				title: '未来家装饰',
				desc: '邀请您体验透明装修',
				path: 'https://www.homeeyes.cn/app/livedemo/downloadapk.html',
				logo: 'https://www.homeeyes.cn/app/images/icon_logo.png'
			},
			lists:[{
				state:1,
				name:"步骤1",
				starttime:"2019-10-21",
				endtime:"2020-10-21",
				broadcast:["https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg","https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg"]
			},
			{
				state:1,
				name:"步骤1",
				starttime:"2019-10-21",
				endtime:"2020-10-21",
				broadcast:["https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg","https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg"]
			}]
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
