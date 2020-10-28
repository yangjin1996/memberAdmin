<template>
	<view>
		<view class="cu-bar bg-white solid-bottom">
			<view class="action">
				<text class="cuIcon-title text-orange"></text> 基本用法
			</view>
			<view class="action">
				<button class="cu-btn bg-green shadow" @tap="BasicsSteps">下一步</button>
			</view>
		</view>
		<view class="bg-white padding">
			<view class="cu-steps" :class="{'steps-arrow':arrow}">
				<view class="cu-item" :class="index>basics?'':'text-red'" v-for="(item,index) in basicsList" :key="index">
					<text :class="index>basics?'cuIcon-title':'cuIcon-' + item.cuIcon"></text> {{item.name}}
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				basicsList: [{
					cuIcon: 'usefullfill',
					name: '开始'
				}, {
					cuIcon: 'radioboxfill',
					name: '等待'
				}, {
					cuIcon: 'roundclosefill',
					name: '错误'
				}, {
					cuIcon: 'roundcheckfill',
					name: '完成'
				}, ],
				basics: 0
			};
		},
		name: 'cu-custom',
		computed: {
			style() {
				var style=""
				return style
			}
		},
		props: {
			datas:{},
			arrow:{
				type:[String,Boolean],
				default:false
			}
		},
		methods: {
			onClick() {
				this.$emit('onclick', true);
			},
			onRight() {
				this.$emit('onright', true);
			},
			BasicsSteps() {
				this.basics= this.basics == this.basicsList.length - 1 ? 0 : this.basics + 1				
			}
		}
	}
</script>

<style scoped>
	
</style>
