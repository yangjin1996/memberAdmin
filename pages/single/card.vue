<template>
	<view class="container">
		<cu-bar2 bgColor="bg-gradual-blue" :isBack="true"><block slot="content" class="page-name">卡片</block></cu-bar2>
		<view class="contents">
			<cardCase :datas="cases"></cardCase>
			<cardArticle :datas="article"></cardArticle>
			<cardDynamic :datas="dynamic" isCard="true"></cardDynamic>
		</view>
		<cu-more title="已没有更多内容咯"></cu-more>
	</view>
</template>

<script>
import cardCase from '../../components/single/card/card_case.vue';
import cardDynamic from '../../components/single/card/card_dynamic.vue';
import cardArticle from '../../components/single/card/card_article.vue';
export default {
	computed: {},
	components: {
		cardCase,
		cardDynamic,
		cardArticle
	},
	data() {
		return {
			cases: [
				{
					name: '标题1',
					tag: '最新消息',
					content: '案例介绍案例介绍案例介绍...',
					image: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg',
					photo: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg',
					auther: '作者',
					time: '2019-12-11',
					read: 23,
					like: 12,
					msg: 20
				},
				{
					name: '标题2',
					tag: '优惠案例',
					content: '案例介绍案例介绍案例介绍...',
					image: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg',
					photo: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg',
					auther: '作者',
					time: '2019-12-11',
					read: 23,
					like: 12,
					msg: 20
				}
			],
			dynamic: [
				{
					name: '标题2',
					tag: '优惠案例',
					content: '案例介绍案例介绍案例介绍...',
					images:[
						'https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg',
						'https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg',
						'https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg',
						'https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg'
					], 
					photo: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg',
					auther: '作者',
					time: '2019-12-11',
					read: 23,
					like: 12,
					msg: 20,
					comments:[
						{
							name: '作者2',
							time: '2019-12-11',
							photo: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg',
							content: '案例介绍案例介绍案例介绍...'
						},
						{
							name: '作者2',
							time: '2019-12-11',
							photo: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg',
							content: '案例介绍案例介绍案例介绍...'
						}
					]
				},
				{
					name: '标题2',
					tag: '优惠案例',
					content: '案例介绍案例介绍案例介绍...案例介绍案例介绍案例介绍...案例介绍案例介绍案例介绍...',
					images:[
						'https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg',
						'https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg',
						'https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg',
						'https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg',
						'https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg',
						'https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg'
					], 
					photo: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg',
					auther: '作者',
					time: '2019-12-11',
					read: 23,
					like: 12,
					msg: 20,
					comments:[
						{
							name: '作者2',
							time: '2019-12-11',
							photo: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg',
							content: '案例介绍案例介绍案例介绍...'
						},
						{
							name: '作者2',
							time: '2019-12-11',
							photo: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg',
							content: '案例介绍案例介绍案例介绍...'
						}
					]
				}
			],
			article: [
				{
					name: '标题1',
					tag: '最新',
					tag1: '最热',
					content: '案例介绍案例介绍案例介绍...',
					image: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg'
				},
				{
					name: '标题1',
					tag: '最新',
					tag1: '最热',
					content: '案例介绍案例介绍案例介绍...',
					image: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg'
				}
			]
		};
	},
	onLoad() {},
	onShow() {},
	methods: {}
};
</script>

<style scoped></style>
