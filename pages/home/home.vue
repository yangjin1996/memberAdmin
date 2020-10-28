<template>
	<view class="container">
		<cu-bar2 bgColor="bg-gradual-blue" :isBack="false"><block slot="content" class="page-name">示例页面</block></cu-bar2>
		<view class="contents ">
			<view class="nav-list margin-top">
				<view
					v-for="(item, index) in elements"
					:key="index"
					hover-class="none"
					:data-url="'/pages/home/' + item.name"
					:data-index="index"
					class="nav-li"
					:class="'bg-' + item.color"
					:style="[{ animation: 'show ' + ((index + 1) * 0.2 + 1) + 's 1' }]"
					@click="toPage"
				>
					<view class="nav-title">{{ item.title }}</view>
					<view class="nav-name">{{ item.name }}</view>
					<text :class="'cuIcon-' + item.cuIcon"></text>
				</view>
			</view>
		</view>
		<cu-more title="已没有更多内容咯"></cu-more>
	</view>
</template>

<script>
import grids from '../../components/single/grid/grids.vue';
export default {
	computed: {},
	components: {
		grids
	},
	data() {
		return {
			elements: [
				{
					title: '网络请求',
					name: 'network',
					color: 'cyan',
					cuIcon: 'newsfill'
				},
				{
					title: '媒体播放',
					name: 'media',
					color: 'blue',
					cuIcon: 'card'
				},
				{
					title: '联动分类',
					name: 'classify',
					color: 'red',
					cuIcon: 'btn'
				},
				{
					title: '搜索页',
					name: 'search',
					color: 'purple',
					cuIcon: 'font'
				},
				{
					title: '分享海报 ',
					name: 'poster',
					color: 'mauve',
					cuIcon: 'cuIcon'
				},
				{
					title: '产品体验',
					name: 'experience',
					color: 'pink',
					cuIcon: 'btn'
				},
				{
					title: '签到活动',
					name: 'check-ins',
					color: 'brown',
					cuIcon: 'tagfill'
				},
				{
					title: '抽奖活动',
					name: 'lottery',
					color: 'red',
					cuIcon: 'myfill'
				},
				{
					title: '助力活动',
					name: 'cheating',
					color: 'orange',
					cuIcon: 'icloading'
				},
				{
					title: '商品活动',
					name: 'commodity',
					color: 'olive',
					cuIcon: 'copy'
				},
				{
					title: '用户相关',
					name: 'clients',
					color: 'green',
					cuIcon: 'cascades'
				},
				{
					title: '异常页面',
					name: 'errors',
					color: 'red',
					cuIcon: 'list'
				},
				{
					title: '个人中心',
					name: 'users',
					color: 'orange',
					cuIcon: 'pic'
				},
				{
					title: '商品相关',
					name: 'shops',
					color: 'green',
					cuIcon: 'sort'
				},
				{
					title: '消息相关',
					name: 'message',
					color: 'brown',
					cuIcon: 'rankfill'
				},
				{
					title: '联动列表',
					name: 'linkage',
					color: 'blue',
					cuIcon: 'medal'
				}
			]
		};
	},
	onLoad() {},
	onShow() {},
	methods: {
		toPage: function(e) {
			let url = e.currentTarget.dataset.url;
			console.log(url)
			if (!url) {
				return;
			}
			uni.navigateTo({
				url: url
			});
		}
	}
};
</script>

<style scoped>
.grid.col-2.grid-square view {
	padding: 30upx;
	height: 100upx;
	align-items: center;
	text-align: center;
	font-size: 30upx;
}
</style>
