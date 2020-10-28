<template>
	<view class="container">
		<cu-bar2 bgColor="bg-gradual-blue" :isBack="true"><block slot="content" class="page-name">操作条</block></cu-bar2>
		<cu-bar title="网格列表" isTop="true" Bgcolor="green" icon="title" modal="0"></cu-bar>
		<view class="contents"><cu-grid :datas="cuIconList" :cols="5"></cu-grid></view>
		<cu-bar title="网格大图" isTop="true" Bgcolor="green" icon="title" modal="0"></cu-bar>
		<view class="contents"><typelist :datas="types" :height="200"></typelist></view>
		<cu-bar title="案例列表" isTop="true" Bgcolor="green" icon="title" modal="0"></cu-bar>
		<view class="contents"><cases :datas="caselist" ></cases></view>
		<cu-bar title="案例列表" isTop="true" Bgcolor="green" icon="title" modal="0"></cu-bar>
		<view class="contents"><caseslist :datas="caselist" ></caseslist></view>
		<cu-bar title="卡片介绍"  Bgcolor="green" icon="title" modal="0"></cu-bar>
		<view class="contents"><item-live :datas="caselist" ></item-live></view>
		<cu-bar title="人物列表" isTop="true" Bgcolor="green" icon="title" modal="0"></cu-bar>
		<view class="contents margin-line"><designers :datas="designers" ></designers></view>
		<cu-bar title="人物列表" isTop="true" Bgcolor="green" icon="title" modal="0"></cu-bar>
		<view class="contents"><designerlist :datas="designers" ></designerlist></view>
		
		<cu-more title="已没有更多内容咯"></cu-more>
	</view>
</template>

<script>
import cuGrid from '../../components/single/grid/cu-grid.vue';
import typelist from '../../components/single/grid/classify-list.vue';
import cuBar from '../../components/single/bar/cu-bar.vue';
import cases from '../../components/single/grid/item_case2.vue';
import caseslist from '../../components/single/grid/item_case.vue';
import designers from '../../components/single/grid/item_designer2.vue';
import designerlist from '../../components/single/grid/item_designer.vue';
import itemLive from '../../components/single/grid/item_live.vue';
export default {
	computed: {},
	components: {
		cuGrid,
		typelist,
		cuBar,
		cases,
		caseslist,
		designers,
		designerlist,
		itemLive
	},
	data() {
		return {
			types: [
				{
					img:
						'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1578029520227&di=ff3955c66b5a560c2e7c24778ca2dc4a&imgtype=0&src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fimages%2F20180719%2F7d91117ef0e243db94f03ec927bf26a2.jpeg',
					name: '人工智能',
					e_name: 'AI'
				},
				{
					img:
						'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1578030059908&di=2e391f8a3a53636ecbcb4246ef55055b&imgtype=0&src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fimages%2F20180912%2Fca4ed1b60667454a94fa4d9da82701a6.jpeg',
					name: '数据分析',
					e_name: 'Data Analysis'
				},
				{
					img:
						'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1578030249455&di=972b656faed671ad3ce7cf122046ac85&imgtype=0&src=http%3A%2F%2Fwww.shwzzz.cn%2Fd%2Ffile%2F2018-10-26%2Fdcd81dbe6d0e6ec45b9ca53dcc627d02.jpg',
					name: '爬虫',
					e_name: 'Spider'
				},
				{
					img:
						'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1578030367710&di=91bcf02e41e8eca48bb5a0447d60a140&imgtype=0&src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fimages%2F20190219%2F79f12e6d269248e6a808d57966151719.jpeg',
					name: '少儿编程',
					e_name: 'Children Coding'
				}
			],
			cuIconList: [
				{
					cuIcon: 'cardboardfill',
					color: 'red',
					badge: 120,
					name: 'VR'
				},
				{
					cuIcon: 'recordfill',
					color: 'orange',
					badge: 1,
					name: '录像'
				},
				{
					cuIcon: 'picfill',
					color: 'yellow',
					badge: 0,
					name: '图像'
				},
				{
					cuIcon: 'noticefill',
					color: 'olive',
					badge: 22,
					name: '通知'
				},
				{
					cuIcon: 'upstagefill',
					color: 'cyan',
					badge: 0,
					name: '排行榜'
				},
				{
					cuIcon: 'clothesfill',
					color: 'blue',
					badge: 0,
					name: '皮肤'
				},
				{
					cuIcon: 'discoverfill',
					color: 'purple',
					badge: 0,
					name: '发现'
				},
				{
					cuIcon: 'questionfill',
					color: 'mauve',
					badge: 0,
					name: '帮助'
				},
				{
					cuIcon: 'commandfill',
					color: 'purple',
					badge: 0,
					name: '问答'
				},
				{
					cuIcon: 'brandfill',
					color: 'mauve',
					badge: 0,
					name: '版权'
				}
			],
			caselist: [
				{
					photo: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big84000.jpg',
					title: 'HPISD华派国际设计-觅得一隅',
					area: 120,
					style: '简约风格',
					zan: 123,
					is_zan: 1
				},
				{
					photo: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big84000.jpg',
					title: 'HPISD华派国际设计-觅得一隅',
					area: 120,
					style: '简约风格',
					zan: 123,
					is_zan: 1
				},
				{
					photo: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big84000.jpg',
					title: 'HPISD华派国际设计-觅得一隅',
					area: 120,
					style: '简约风格',
					zan: 123,
					is_zan: 1
				},
				{
					photo: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big84000.jpg',
					title: 'HPISD华派国际设计-觅得一隅',
					area: 120,
					style: '简约风格',
					zan: 123,
					is_zan: 1
				}
			],
			designers: [
				{
					avatar: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big10001.jpg',
					position: '工程师',
					name: '张三丰',
					cases_number:12,
					cases_image:[
						{
							id:1,
							photo:'https://ossweb-img.qq.com/images/lol/web201310/skin/big25011.jpg',
							url:''
						},
						{
							id:2,
							photo:'https://ossweb-img.qq.com/images/lol/web201310/skin/big84000.jpg',
							url:''
						},
						{
							id:3,
							photo:'https://ossweb-img.qq.com/images/lol/web201310/skin/big37006.jpg',
							url:''
						}
						
					]
				},
				{
					avatar: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big10001.jpg',
					position: '设计师',
					name: '张可儿',
					cases_number:12,
					cases_image:[
						{
							id:1,
							photo:'https://ossweb-img.qq.com/images/lol/web201310/skin/big84000.jpg',
							url:''
						},
						{
							id:2,
							photo:'https://ossweb-img.qq.com/images/lol/web201310/skin/big84000.jpg',
							url:''
						},
						{
							id:3,
							photo:'https://ossweb-img.qq.com/images/lol/web201310/skin/big84000.jpg',
							url:''
						}
						
					]
				},
				{
					avatar: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big10001.jpg',
					position: '产品经理',
					name: '张叁',
					cases_number:12,
					cases_image:[
						{
							id:1,
							photo:'https://ossweb-img.qq.com/images/lol/web201310/skin/big84000.jpg',
							url:''
						},
						{
							id:2,
							photo:'https://ossweb-img.qq.com/images/lol/web201310/skin/big84000.jpg',
							url:''
						},
						{
							id:3,
							photo:'https://ossweb-img.qq.com/images/lol/web201310/skin/big84000.jpg',
							url:''
						}
						
					]
				},
				{
					avatar: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big10001.jpg',
					position: '项目经理',
					name: '王五',
					cases_number:12,
					cases_image:[
						{
							id:1,
							photo:'https://ossweb-img.qq.com/images/lol/web201310/skin/big84000.jpg',
							url:''
						},
						{
							id:2,
							photo:'https://ossweb-img.qq.com/images/lol/web201310/skin/big84000.jpg',
							url:''
						},
						{
							id:3,
							photo:'https://ossweb-img.qq.com/images/lol/web201310/skin/big84000.jpg',
							url:''
						}
						
					]
				},
				{
					avatar: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big10001.jpg',
					position: 'UI设计师',
					name: '张叁',
					cases_number:12,
					cases_image:[
						{
							id:1,
							photo:'https://ossweb-img.qq.com/images/lol/web201310/skin/big84000.jpg',
							url:''
						},
						{
							id:2,
							photo:'https://ossweb-img.qq.com/images/lol/web201310/skin/big84000.jpg',
							url:''
						},
						{
							id:3,
							photo:'https://ossweb-img.qq.com/images/lol/web201310/skin/big84000.jpg',
							url:''
						}
						
					]
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
