<template>
	<view class="container">
		<cu-bar2 bgColor="bg-gradual-blue" :isBack="true"><block slot="content" class="page-name">操作条</block></cu-bar2>
		<view class="contents">
			<cuBar title="Header" modal='2'></cuBar>
			<cuheader icon="back" title="首页" :actions="actions" @onmore="onMore"></cuheader>
			<cuheader icon="back" bgColor='bg-blue' title="首页"></cuheader>
			<cuheader isLeft="true" :icon="iconSrc" title="首页" @onmore="onMore" @onback="onBack" :actions="actions2"></cuheader>
			<cuBar title="Search" modal='2'></cuBar>
			<search @oninput="onChange" @onclick="onSeeker"></search>
			<search bgColor="bg-red" @onuser="onClickUser" @onclick="onSeeker" @oninput="onChange"  :image="iconSrc"></search>
			<search bgColor="bg-blue" @onuser="onClickUser" @onclick="onSeeker" @oninput="onChange" mold="true" :image="iconSrc"></search>
			<bottomSearch ></bottomSearch>
		</view>
		<cu-more title="已没有更多内容咯"></cu-more>
	</view>
</template>

<script>
import cuheader from '../../components/single/bar/header.vue';
import search from '../../components/single/search/cu-search.vue';
import cuBar from '../../components/single/bar/cu-bar.vue';
import bottomSearch from '../../components/single/bar/bottom-search.vue'
export default {
	computed: {},
	components: {
		cuheader,
		search,
		cuBar,
		bottomSearch
	},
	data() {
		return {
			shareinfo: {
				title: '未来家装饰',
				desc: '邀请您体验透明装修',
				path: 'https://www.homeeyes.cn/app/livedemo/downloadapk.html',
				logo: 'https://www.homeeyes.cn/app/images/icon_logo.png'
			},
			iconSrc: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big91012.jpg',
			actions: [
				{
					icon: 'cardboardfill',
					color: 'red'
				},
				{
					icon: 'recordfill',
					color: 'orange'
				}
			],
			actions2: [
				{
					icon: 'more',
					color: 'grey'
				}
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
		onMore: function(e) {
			console.log(e);
		},
		onBack: function(e) {
			console.log(e);
		},
		onChange:function(e){
			console.log(e);
		},
		onClickUser:function(e){
			console.log(e);
		},onSeeker:function(e){
			console.log(e);
		}	
	}
};
</script>

<style scoped></style>
