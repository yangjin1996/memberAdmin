<template>
	<view>
		<view class="cu-bar bg-white solid-bottom margin-top">
			<view class="action">
				<text class="cuIcon-title text-orange"></text> 多级显示
			</view>
			<view class="action">
				<button class="cu-btn bg-green shadow" @tap="ScrollSteps">下一步</button>
			</view>
		</view>
		<scroll-view scroll-x class="bg-white padding response cu-steps steps-bottom" :scroll-into-view="'scroll-' + scroll"
		 scroll-with-animation>
			<view class="cu-item padding-lr-xl" :class="index>scroll?'':'text-blue'" v-for="(item,index) in 10" :key="index" :id="'scroll-' + index">
				Level {{index + 1}} <text class="num" :data-index="index + 1"></text>
			</view>
		</scroll-view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				scroll: 0
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
			ScrollSteps() {
				this.scroll= this.scroll == 9 ? 0 : this.scroll + 1				
			}
		}
	}
</script>

<style scoped>
	
</style>
