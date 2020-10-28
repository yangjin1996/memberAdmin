<template>
	<view>
		<view class="cu-bar bg-white solid-bottom margin-top">
			<view class="action">
				<text class="cuIcon-title text-orange"></text> 数字完成
			</view>
			<view class="action">
				<button class="cu-btn bg-green shadow" @tap="NumSteps">下一步</button>
			</view>
		</view>
		<view class="bg-white padding">
			<view class="cu-steps">
				<view class="cu-item" :class="index>num?'':'text-blue'" v-for="(item,index) in numList" :key="index">
					<text class="num" :class="index==2?'err':''" :data-index="index + 1"></text> {{item.name}}
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				numList: [{
					name: '开始'
				}, {
					name: '等待'
				}, {
					name: '错误'
				}, {
					name: '完成'
				}, ],
				num: 0
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
			NumSteps() {
				this.num= this.num == this.numList.length - 1 ? 0 : this.num + 1				
			}
		}
	}
</script>

<style scoped>
	
</style>
