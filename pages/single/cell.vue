<template>
	<view class="container">
		<cu-bar2 bgColor="bg-gradual-blue" :isBack="true"><block slot="content" class="page-name">操作条</block></cu-bar2>
		<view class="contents">
			<cuBar title="标题条目" isTop="true" Bgcolor="green" icon="title" modal="0"></cuBar>
			<cuBar title="单选框" Bgcolor="orange" modal="1"></cuBar>
			<cuBar title="开关切换" modal="2" hint="switch"></cuBar>
			<cuBar title="多选框" hint="Modal" modal="3"></cuBar>
			<cuBar title="普通条目" isTop="true" Bgcolor="green" icon="title" modal="0"></cuBar>
			<cell title="普通条目" :leftImage="bgimage" bgColor="orange" @onclick="OnClickItem"></cell>
			<cell title="普通条目" leftIcon="title" bgColor="orange" arrow="true"></cell>
			<cell title="普通条目" leftIcon="title" hint="条目描述" arrow="true"></cell>
			<cuBar title="开放能力" isTop="true" Bgcolor="green" icon="title" modal="0"></cuBar>
			<cell title="好友分享" leftIcon="share" bgColor="orange" :otype="4" @onbind="OnBindData" arrow="true"></cell>
			<cell title="获取电话" leftIcon="phone" bgColor="blue" :otype="3" @onbind="OnBindData" arrow="true"></cell>
			<cell title="用户信息" leftIcon="my" bgColor="red" :otype="2" @onbind="OnBindData" arrow="true"></cell>
			<cell title="客服会话" leftIcon="service" bgColor="green" :otype="1" @onbind="OnBindData" arrow="true"></cell>
			<cell title="授权设置" leftIcon="settings" bgColor="green" :otype="5" @onbind="OnBindData" arrow="true"></cell>
			<cell title="意见反馈" hint="暂不支持" isTop="true" leftIcon="favor" bgColor="green" :otype="6" @onbind="OnBindData" arrow="true" card="true"></cell>
			<cuBar title="列表条目" isTop="true" Bgcolor="green" icon="title" modal="0"></cuBar>
			<cell-item isTop="true" :datas="lists" arrow="true" card="true"></cell-item>
			<cuBar title="列表条目-图片icon" isTop="true" Bgcolor="green" icon="title" modal="0"></cuBar>
			<cell-item isTop="true" :datas="lists2" arrow="true" card="true"></cell-item>
			<cuBar title="其他条目" isTop="true" Bgcolor="green" icon="title" modal="0"></cuBar>
			<cell-avatar title="参与人数" hint="4人" :datas="avatars" leftIcon="friend" bgColor="red" @onclick="OnClickItem" arrow="true"></cell-avatar>
			<cell-button title="好友分享" hint="分享" leftIcon="friendadd" :otype="4" bgColor="green" @onclick="OnClickItem" arrow="true"></cell-button>
			<cell-tag title="个人兴趣" :datas="tags" leftIcon="service" bgColor="green" @onclick="OnClickItem" arrow="true"></cell-tag>
			<cell-switch title="修改性别" hint="点击修改切换" leftIcon="link" bgColor="green" @onswitch="OnSwitch"></cell-switch>
		</view>
		<cu-more title="已没有更多内容咯"></cu-more>
	</view>
</template>

<script>
import cuBar from '../../components/single/bar/cu-bar.vue';
import cell from '../../components/single/cell/cell.vue';
import cellItem from '../../components/single/cell/cell-item.vue';
import cellAvatar from '../../components/single/cell/cell-avatar.vue';
import cellButton from '../../components/single/cell/cell-button.vue';
import cellTag from '../../components/single/cell/cell-tag.vue';
import cellSwitch from '../../components/single/cell/cell-switch.vue';
export default {
	computed: {},
	components: {
		cuBar,
		cell,
		cellItem,
		cellAvatar,
		cellButton,
		cellTag,
		cellSwitch
	},
	data() {
		return {
			shareinfo: {
				title: '未来家装饰',
				desc: '邀请您体验透明装修',
				path: 'https://www.homeeyes.cn/app/livedemo/downloadapk.html',
				logo: 'https://www.homeeyes.cn/app/images/icon_logo.png'
			},
			bgimage: '../../../static/icon_residence.png',
			lists: [
				{
					icon: 'title',
					color: 'red',
					title: '列表条目1',
					hint: '条目介绍1'
				},
				{
					icon: 'title',
					color: 'red',
					title: '列表条目2',
					hint: '条目介绍2'
				},
				{
					icon: 'title',
					color: 'red',
					title: '列表条目3',
					hint: '条目介绍3'
				}
			],
			lists2: [
				{
					image: '../../../static/icon_residence.png',
					color: 'red',
					title: '列表条目1'
				},
				{
					image: '../../../static/icon_residence.png',
					color: 'red',
					title: '列表条目2'
				},
				{
					image: '../../../static/icon_residence.png',
					color: 'red',
					title: '列表条目3'
				}
			],
			avatars: [
				'https://ossweb-img.qq.com/images/lol/web201310/skin/big10001.jpg',
				'https://ossweb-img.qq.com/images/lol/web201310/skin/big10001.jpg',
				'https://ossweb-img.qq.com/images/lol/web201310/skin/big10001.jpg',
				'https://ossweb-img.qq.com/images/lol/web201310/skin/big10001.jpg'
			],
			tags: [
				{
					color: 'red',
					name: '电影'
				},
				{
					color: 'blue',
					name: '旅游'
				},
				{
					color: 'orange',
					name: '美食'
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
		OnBindData: function(e) {
			console.log('binding data input:', e);
		},
		OnClickItem: function(e) {
			console.log('click linner :', e);
		},
		OnSwitch: function(e) {
			console.log('switch linner :', e);
		}
	}
};
</script>

<style scoped></style>
