<template>
	<view class="container">
		<cu-bar2 bgColor="bg-gradual-blue" :isBack="true">
			<block slot="content" class="page-name">操作条</block>
		</cu-bar2>
		<view class="contents ">
			<bar isOut="true" isBottom="true" :selectIndex="select" @onswitch="onSwitch" data-url="../pages/test_page/index/index"></bar>
			<bar bgColor="bg-black" :selectIndex="select"></bar>
			<bar isOut="true" :selectIndex="select"></bar>
			<bottombar :datas="btns" :datas2="bottoms" btnStyle="0" @onclick="onClick"></bottombar>
			<bottombar :datas="btns" :datas2="bottoms1" btnStyle="1" @onclick="onClick"></bottombar>
			<btn-group :datas="btns" btnStyle="0" @onclick="onClick"></btn-group>
			<btn-group :datas="btns" btnStyle="1" @onclick="onClick"></btn-group>
		</view>
		<more title="已经到底咯"></more>
	</view>
</template>

<script>
import bar from '@/components/single/bar/tabbar.vue';
import bottombar from '@/components/single/bar/bottombar.vue';
import btnGroup from '@/components/single/bar/btn-group.vue';
export default {
	computed: {},
	components: {
		bar,
		bottombar,
		btnGroup
	},
	data() {
		return {
			select:0,
			btns:[{
				bg:'red',
				text:'立即分享'
			},{
				bg:'orange',
				text:'加入收藏'
			}],
			bottoms1:[{
				bg:'red',
				badge:10,
				text:'收藏',
				cuIcon:'favorfill'
			},{
				bg:'orange',
				badge:0,
				text:'分享',
				cuIcon:'share'
			}],
			bottoms:[{
				bg:'orange',
				badge:0,
				cuIcon:'share',
				text:'分享'
			}]
		};
	},
	onLoad() {},
	onShow() {},
	methods: {
		onInit: function() {
			let that = this;
		},onSwitch(index){
			// let url = e.currentTarget.dataset.url;
			this.select=index;
			console.log("switch:",index)
			// if(index === 0){
			// 	uni.navigateTo({
			// 		url: url
			// 	});
			// }
		},onClick(data){
			if(data.type==0){
				console.log("click left:",data.index)
			}else if(data.type==1){
				console.log("click right:",data.index)
			}else{
				console.log("click:",data)
			}
		}
	}
};
</script>

<style scoped></style>
