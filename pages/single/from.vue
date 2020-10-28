<template>
	<view class="container">
		<cu-bar2 bgColor="bg-gradual-blue" :isBack="true"><block slot="content" class="page-name">操作条</block></cu-bar2>
		<view class="contents">
			<view class="from-group">
				<cuBar title="输入框" Bgcolor="green" icon='title' modal='0'></cuBar>
				<uniInput title="手机号码" mold="phone" hint="请输入手机号"></uniInput>
				<uniInput title="选择地址" mold="address" hint="请输入地址"></uniInput>
				<uniInput title="验证码" mold="verif" hint="请输入验证码"></uniInput>
				<cuBar title="单选框" Bgcolor="orange" modal='1'></cuBar>
				<uniRadio title="选择性别" :datas="radios" Bgcolor="orange" @onchange="onRadio"></uniRadio>
				<uniRadio title="选择性别" :datas="radios" mold="true" Bgcolor="red" @onchange="onRadio"></uniRadio>
				<cuBar title="开关切换" modal='2' hint="switch"></cuBar>
				<uniSwitch title="切换类型" Bgcolor="red" @onchange="onSwitch"></uniSwitch>
				<uniSwitch title="切换类型" mold="true" Bgcolor="red" @onchange="onSwitch"></uniSwitch>
				<uniSwitch title="选择性别" modal="sex" Bgcolor="red" @onchange="onSwitch"></uniSwitch>
				<cuBar title="多选框" hint="Modal" modal='3'></cuBar>
				<uniCheckbox mold="false" :datas="checkboxs" Bgcolor="blue" @onchange="onCheckbox"></uniCheckbox>
				<checkitem :datas="checkitems" @onclick="oncheckitemclick"></checkitem>
				<checkitem :datas="checkitems" @onclick="oncheckitemclick" title="多选网格列表(填充)" :fill="true"></checkitem>
				<checkitem :datas="checkitems" @onclick="oncheckitemclick" title="多选网格列表(圆角)" :round="true"></checkitem>
				<checkitem :datas="checkitems" @onclick="oncheckitemclick" title="多选网格列表(自定义颜色)" back="green"></checkitem>
				<cuBar title="图片选择" hint="Modal" modal='3'></cuBar>
				<uniUploader></uniUploader>
			</view>
		</view>
		<cu-more title="已没有更多内容咯"></cu-more>
	</view>
</template>

<script>
import uniInput from '../../components/single/from/uni-input.vue';
import uniRadio from '../../components/single/from/uni-radio.vue';
import uniSwitch from '../../components/single/from/uni-switch.vue';
import uniCheckbox from '../../components/single/from/uni-checkbox.vue';
import cuBar from '../../components/single/bar/cu-bar.vue';
import uniUploader from '../../components/single/upload/uni-uploader.vue'
import checkitem from '../../components/single/from/check-item.vue'
export default {
	computed: {},
	components: {
		uniInput,
		uniRadio,
		uniSwitch,
		uniCheckbox,
		cuBar,
		uniUploader,
		checkitem
	},
	data() {
		return {
			shareinfo: {
				title: '未来家装饰',
				desc: '邀请您体验透明装修',
				path: 'https://www.homeeyes.cn/app/livedemo/downloadapk.html',
				logo: 'https://www.homeeyes.cn/app/images/icon_logo.png'
			},
			radios: [
				{
					name: '男',
					value: 1
				},
				{
					name: '女',
					value: 2
				}
			],
			checkboxs: [
				{
					title: '西瓜',
					value: 'A',
					checked: true
				},
				{
					title: '苹果',
					value: 'B',
					checked: false
				},
				{
					title: '香蕉',
					value: 'C',
					checked: false
				}
			],
			checkitems: [
				{name: '选项一'},
				{name: '选项二'},
				{name: '选项三'}
			]
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
		},
		onRadio: function(e) {
			console.log(e);
		},
		onSwitch: function(e) {
			console.log(e);
		},
		onCheckbox: function(e) {
			console.log(e);
		},
		oncheckitemclick: function(e){
			console.log(e)
		}
	}
};
</script>

<style scoped>

</style>
