<template>
	<view class="container">
		<cu-bar2 bgColor="bg-gradual-blue" :isBack="false">
			<block slot="content" class="page-name">独立组件</block>
		</cu-bar2>
		<view class="contents">
			<view class="nav-list margin-top">
				<view
					v-for="(item, index) in elements"
					:key="index"
					hover-class="none"
					:data-url="'/pages/single/' + item.name"
					:data-index="index"
					class="nav-li"
					:class="'bg-' + item.color"
					:style="[{ animation: 'show ' + ((index + 1) * 0.2 + 1) + 's 1' }]"
					@click="toPage">
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
import { mapState, mapMutations } from 'vuex';

export default {
	computed: {
		...mapState(['hasLogin', 'forcedLogin', 'userinfo'])
	},
	components: {

	},
	data() {
		return {
			pageNo: 0,
			elements: [
				{
					title: '操作条',
					name: 'bar',
					color: 'cyan',
					cuIcon: 'newsfill'
				},
				{
					title: '卡片',
					name: 'card',
					color: 'blue',
					cuIcon: 'card'
				},
				{
					title: '按钮',
					name: 'button',
					color: 'red',
					cuIcon: 'btn'
				},
				{
					title: '气泡',
					name: 'chat',
					color: 'purple',
					cuIcon: 'font'
				},
				{
					title: '表单 ',
					name: 'from',
					color: 'mauve',
					cuIcon: 'cuIcon'
				},
				{
					title: '选择器',
					name: 'picker',
					color: 'pink',
					cuIcon: 'btn'
				},
				{
					title: '导航栏',
					name: 'nav',
					color: 'brown',
					cuIcon: 'tagfill'
				},
				{
					title: '步骤条',
					name: 'steps',
					color: 'red',
					cuIcon: 'myfill'
				},
				{
					title: '轮播',
					name: 'swiper',
					color: 'orange',
					cuIcon: 'icloading'
				},
				{
					title: '时间线',
					name: 'timeline',
					color: 'olive',
					cuIcon: 'copy'
				},
				{
					title: '网格',
					name: 'gridlist',
					color: 'green',
					cuIcon: 'cascades'
				},
				{
					title: '列表',
					name: 'list',
					color: 'red',
					cuIcon: 'list'
				},
				{
					title: '横幅',
					name: 'banner',
					color: 'orange',
					cuIcon: 'pic'
				},
				{
					title: '条目',
					name: 'cell',
					color: 'green',
					cuIcon: 'sort'
				},
				{
					title: '进度条',
					name: 'progress',
					color: 'brown',
					cuIcon: 'rankfill'
				},
				{
					title: '树状条',
					name: 'tree',
					color: 'pink',
					cuIcon: 'magic'
				},
				{
					title: '徽章',
					name: 'badge',
					color: 'blue',
					cuIcon: 'medal'
				},
				{
					title: '分页器',
					name: 'pagination',
					color: 'green',
					cuIcon: 'loading2'
				},
				{
					title: '抽屉',
					name: 'drawer',
					color: 'cyan',
					cuIcon: 'punch'
				}
			]
		};
	},
	onLoad() {},
	onShow() {
		//this.onInit();
		
	},
	methods: {
		...mapMutations(['logout', 'login', 'loginsoure']),
		onInit: function() {
			let that = this;
			// this.$controller.onHome(this.pageNo, this.$store.state, type, function(data, error, msg) {
			// 	console.log(data);
			// 	if (error == 0) {
			// 	}
			// });
		},
		toPage:function(e){
	      	let url = e.currentTarget.dataset.url;
		   if(!url){
			   return
		   }
		   uni.navigateTo({
		   	url:url
		   })
		}
	}
};
</script>

<style scoped></style>
