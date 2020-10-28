<template>
	<view class="container">
		<cu-bar2 bgColor="bg-gradual-blue" :isBack="false"><block slot="content" class="page-name">组合组件</block></cu-bar2>
		<view class="contents">
			<view class="nav-list margin-top">
				<view
					v-for="(item, index) in elements"
					:key="index"
					hover-class="none"
					:data-url="'/pages/group/' + item.name"
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
import { mapState, mapMutations } from 'vuex';
export default {
	computed: {
		...mapState(['hasLogin', 'forcedLogin', 'userinfo'])
	},
	components: {},
	data() {
		return {
			uid: 0,
			cid: 0,
			pageNo: 0,
			elements: [
				{
					title: '上传',
					name: 'upload',
					color: 'cyan',
					cuIcon: 'pullup'
				},
				{
					title: '模态框',
					name: 'modal',
					color: 'blue',
					cuIcon: 'send'
				},
				{
					title: '编辑框',
					name: 'editor',
					color: 'purple',
					cuIcon: 'edit'
				},
				{
					title: '地图 ',
					name: 'map',
					color: 'mauve',
					cuIcon: 'location'
				},
				{
					title: '表格',
					name: 'table',
					color: 'pink',
					cuIcon: 'text'
				},
				{
					title: '日历',
					name: 'calendar',
					color: 'brown',
					cuIcon: 'remind'
				},
				{
					title: '二维码',
					name: 'recode',
					color: 'red',
					cuIcon: 'qrcode'
				},
				{
					title: '海报',
					name: 'poster',
					color: 'orange',
					cuIcon: 'activity'
				},
				{
					title: '绘图',
					name: 'drawing',
					color: 'olive',
					cuIcon: 'colorlens'
				},
				{
					title: '图表',
					name: 'chart',
					color: 'green',
					cuIcon: 'rank'
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
			this.$controller.onHome(this.pageNo, this.$store.state, type, function(data, error, msg) {
				console.log(data);
				if (error == 0) {
				}
			});
		},
		toPage: function(e) {
			let url = e.currentTarget.dataset.url;
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

<style scoped></style>
