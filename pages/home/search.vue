<template>
	<view class="container">
		<cu-bar2 bgColor="bg-gradual-blue" :isBack="true"><block slot="content" class="page-name">搜索页</block></cu-bar2>
		<view class="contents">
			<search @oninput="onChange" @onclick="onSeeker" mold="true" hint="请输入搜索关键字"></search>
			<view class="padding-left  bg-white">
				<text class="text-sm text-orange">最近搜索</text>
			</view>
			<grids-tags :datas="tags"></grids-tags>
			<view class="padding-left bg-white">
				<text class="text-sm text-orange">搜索发现</text>
			</view>
			<grids-tags :datas="tags"></grids-tags>
			<view class="padding bg-white">
				<text class="text-sm text-orange">热搜榜</text>
			</view>
			<cell-item :datas="lists" arrow="false"></cell-item>
		</view>
		<cu-more title="已没有更多内容咯"></cu-more>
	</view>
</template>

<script>
import { mapState, mapMutations } from 'vuex';
import search from '../../components/single/search/cu-search.vue';
import cuBar from '../../components/single/bar/cu-bar.vue';
import gridsTags from '../../components/single/grid/grids-tags.vue';
import cellItem from '../../components/single/cell/cell-item.vue';
export default {
	computed: {
		...mapState(['hasLogin', 'forcedLogin', 'userinfo'])
	},
	components: {
		search,
		cuBar,
		gridsTags,
		cellItem
	},
	data() {
		return {
			shareinfo: {
				title: '未来家装饰',
				desc: '邀请您体验透明装修',
				path: 'https://www.homeeyes.cn/app/livedemo/downloadapk.html',
				logo: 'https://www.homeeyes.cn/app/images/icon_logo.png'
			},
			tags: this.ColorList,
			lists: [
				{
					icon: 'title',
					color: 'red',
					title: '拯救发际线',
					hint: '新'
				},
				{
					icon: 'title',
					color: 'red',
					title: '冬日保暖',
					hint: '新'
				},
				{
					icon: 'title',
					color: 'red',
					title: '2020年货购',
					hint: '新'
				},
				{
					icon: 'title',
					color: 'red',
					title: '2020新春购物节',
					hint: '热门100'
				},
				{
					icon: 'title',
					color: 'red',
					title: '智能家居',
					hint: '热门100'
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
		this.onInit();
	},
	methods: {
		...mapMutations(['logout', 'login', 'loginsoure']),
		onInit: function() {
			let that = this;
			this.$controller.onHome(this.pageNo, this.$store.state, type, function(data, error, msg) {
				console.log(data);
				if (error == 0) {
				}
			});
		},
		onChange: function(e) {
			console.log(e);
		},
		onClickUser: function(e) {
			
			
		},
		onSeeker: function(e) {
			console.log(e);
			let param={
					title: e,
					name: 'red',
					color: '#e54d42'
				
			}
			console.log(param);
			this.tags.push(param)
		}
	}
};
</script>

<style scoped></style>
