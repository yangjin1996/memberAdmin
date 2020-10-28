<template>
	<view class="container">
		<cu-bar2 bgColor="bg-gradual-blue" :isBack="true">
			<block slot="content" class="page-name">列表</block>
		</cu-bar2>
		<cu-bar title="滑动消息" isTop="true" Bgcolor="green" icon="title" modal="0"></cu-bar>
		<view class="contents margin-line">
			<cu-list :datas="lists" :isscroll="isscroll" @ondelete="ondelete"></cu-list>
		</view>
		<cu-bar title="人物简介" isTop="true" Bgcolor="green" icon="title" modal="0"></cu-bar>
		<view class="contents">
			<peoplelist :datas="peopleInfos"></peoplelist>
		</view>
		<cu-bar title="普通消息" isTop="true" Bgcolor="green" icon="title" modal="0"></cu-bar>
		<view class="contents">
			<messagelist :datas="messageInfos" @onclick="onMessageListClick"></messagelist>
		</view>
		<cu-bar title="卡片列表" isTop="true" Bgcolor="green" icon="title" modal="0"></cu-bar>
		<view class="contents margin-line">
			<productlist :products="products1" firstTitle="课程简介" secondTitle="元/人" thirdTitle="任课老师" :introlimit="20" color="#123456"></productlist>
		</view>
		<cu-more title="已没有更多内容咯"></cu-more>
	</view>
</template>

<script>
	import cuList from '../../components/single/list/cu-list.vue';
	import peoplelist from '../../components/single/list/people-introduce.vue'
	import messagelist from '../../components/single/list/message-list.vue'
	import productlist from '../../components/single/list/product-list.vue'
	import cuBar from '../../components/single/bar/cu-bar.vue';
	export default {
		computed: {},
		components: {
			cuList,
			peoplelist,
			messagelist,
			productlist,
			cuBar
		},
		data() {
			return {
				lists: [{
						title: '系统消息',
						tag: "最新",
						number: 4,
						content: '你有一条新消息',
						image: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big81020.jpg',
						size: 99,
						time: "2019-12-24"
					},
					{
						title: '好友消息',
						tag: "最新",
						number: 4,
						content: '你有一条新消息',
						image: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big81020.jpg',
						size: 99,
						time: "2019-12-24"
					},
					{
						title: '好友消息',
						tag: "最新",
						number: 4,
						content: '你有一条新消息',
						image: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big81020.jpg',
						size: 99,
						time: "2019-12-24"
					}
				],
				peopleInfos: [{
						avatar: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1577796382555&di=591bef69f0c1e5ddf447f47e2041dcb6&imgtype=0&src=http%3A%2F%2Fpic.qiantucdn.com%2F58pic%2F26%2F13%2F55%2F58c2b7eced474_1024.jpg',
						name: '虹彩老师',
						tag1: '计算机',
						tag2: '10年项目经验',
						introduce: '虹彩老师是个很厉害的老师虹彩老师是个很厉害的老师虹彩老师是个很厉害的老师虹彩老师是个很厉害的老师'
					},
					{
						avatar: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1577796382555&di=591bef69f0c1e5ddf447f47e2041dcb6&imgtype=0&src=http%3A%2F%2Fpic.qiantucdn.com%2F58pic%2F26%2F13%2F55%2F58c2b7eced474_1024.jpg',
						name: '虹彩老师',
						tag1: '计算机',
						tag2: '10年项目经验',
						introduce: '虹彩老师是个很厉害的老师虹彩老师是个很厉害的老师虹彩老师是个很厉害的老师虹彩老师是个很厉害的老师'
					},
					{
						avatar: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1577796382555&di=591bef69f0c1e5ddf447f47e2041dcb6&imgtype=0&src=http%3A%2F%2Fpic.qiantucdn.com%2F58pic%2F26%2F13%2F55%2F58c2b7eced474_1024.jpg',
						name: '虹彩老师',
						tag1: '计算机',
						tag2: '10年项目经验',
						introduce: '虹彩老师是个很厉害的老师虹彩老师是个很厉害的老师虹彩老师是个很厉害的老师虹彩老师是个很厉害的老师'
					}
				],
				messageInfos: [{
						name: '系统公告',
						type: 0,
						image: 'https://wxt.homeeyes.cn/app/images/message_public.png',
						newMsg: 0,
						info: '今天的作业是证明1+1=3，要求至少写1000000字的证明，每页只能写2个字'
					},
					{
						name: '老师通知',
						type: 1,
						image: 'https://wxt.homeeyes.cn/app/images/message_broadcast.png',
						newMsg: 666,
						info: ''
					},
					{
						name: '作业通知',
						type: 2,
						image: 'https://wxt.homeeyes.cn/app/images/message_broadcast.png',
						newMsg: 81,
						info: '今天的作业是抄<<C++ Prime Plus>>1000000遍，要求每页只能抄10个字'
					}
				],
				products1: [
					{
						img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1577947798992&di=079263dabb4de085e166aba224abbf00&imgtype=0&src=http%3A%2F%2Fimg.sccnn.com%2Fbimg%2F338%2F49176.jpg',
						name: 'Python大数据分析',
						introduce: '大数据（big data），IT行业术语，是指无法在一定时间范围内用常规软件工具进行捕捉、管理和处理的数据集合，是需要新处理模式才能',
						number: '98765',
						from: '虹彩老师'
					},
					{
						img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1577948722663&di=2c9b4c4fc18d8d835cafa39ce5f3e13d&imgtype=0&src=http%3A%2F%2Fa1.huanqiu.cn%2Fimages%2Fe7b161f7ed7e4b9fc5132dd025ce0ea8.jpeg',
						name: 'Python机器学习',
						introduce: '机器学习是一门多领域交叉学科，涉及概率论、统计学、逼近论、凸分析、算法复杂度理论等多门学科。专门研究计算机怎样模拟或实现人类的学习行为，以获取新的',
						number: '56789',
						from: '虹彩老师'
					}
				],
				isscroll: 0
			};
		},
		onPageScroll(e) {
			var that = this;
			that.isscroll = 1;
			setTimeout(function() {
				that.isscroll = 0;
			}, 500);
		},
		onLoad() {

		},
		onShow() {

		},
		methods: {
			ondelete(index) {
				console.log("deleted message's index is " + index);
			},
			onMessageListClick(type) {
				console.log("clicked message type is " + type)
			}
		}
	};
</script>

<style scoped>

</style>
