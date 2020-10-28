<template>
	<view class="box">
		<view class="cu-bar tabbar " :class="[bgColor,{'foot':isBottom}]" >
			<view class="action "  v-for="(item, index) in elements" :key="index" @click="onClick" :data-index="index" :class="[{'add-action':isOut&&index==2},selectIndex==index?'text-green':'text-gray']">
				<button v-if="isOut&&index==2" class="cu-btn bg-green shadow" :class="['cuIcon-' + item.cuIcon]"></button>
				<view v-else-if="item.image != null" class="cuIcon-cu-image">
					<image :src="item.image"></image>
					<view class="cu-tag badge" v-if="item.badge > 0">{{ item.badge }}</view>
				</view>
				<view v-else :class="['cuIcon-' + item.cuIcon]">
					<view class="cu-tag badge" v-if="item.badge > 0">{{ item.badge }}</view>
				</view>
				<view :class="[selectIndex==index?'text-green':'text-gray']">{{ item.title }}</view>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			elements: [
				{
					title: '首页',
					out: false,
					badge: 0,
					image: "../../../static/icon_company.png",
					cuIcon: 'homefill'
				},
				{
					title: '分类',
					out: false,
					badge: 10,
					image: null,
					cuIcon: 'similar'
				},
				{
					title: '发布',
					out: true,
					badge: 0,
					image: null,
					cuIcon: 'add'
				},
				{
					title: '消息',
					out: false,
					badge: 99,
					image: null,
					cuIcon: 'comment'
				},
				{
					title: '我的',
					out: false,
					badge: 0,
					image: null,
					cuIcon: 'my'
				}
			]
		};
	},
	name: 'cu-custom',
	computed: {
		style() {
			var style = '';
			return style;
		}
	},
	props: {
		datas: {},
		selectIndex:{
			type:Number,
			default:0
		},
		bgColor: {
			type: String,
			default: 'bg-white'
		},
		isOut: {
			type: [Boolean, String],
			default: false
		},
		isBottom: {
			type: [Boolean, String],
			default: false
		}
	},
	methods: {
		onClick(e) {
			let index=e.currentTarget.dataset.index;
			this.$emit('onswitch', index);
		},
		onRight() {
			this.$emit('onright', true);
		}
	}
};
</script>

<style scoped>
	
	.box {
		margin:50upx 0;
	}
	
	.box view.cu-bar {
		margin-top: 20upx;
	}
</style>
