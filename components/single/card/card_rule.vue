<template>
	<view>
		<view class="guize" :class="bgcolor != '' ? bgcolor : ''">
			<view class="title">{{title}}</view>
			<view class="g_item" v-for="(item,index) in datas" :key="index">{{index+1}}.{{item}}</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
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
			datas:Array,
			title: {
				type: String,
				default: '规则说明'
			},
			bgcolor: {
				type: String,
				default: 'bg-gradual-orange'
			}
		},
		methods: {
			onClick() {
				this.$emit('onmore', true);
			},
			onRight() {
				this.$emit('onright', true);
			}
		}
	}
</script>

<style scoped>
	.guize {
		width: 100%;
		min-height: 360upx;
		display: flex;
		flex-direction: column;
		position: relative;
		z-index: 3;
		/* background-image: linear-gradient(-180deg, #f48549 0%, #f2642e 100%); */
		border: 18upx solid #e4431a;
		border-radius: 16px;
		margin: 20upx auto;
		padding: 48upx;
		color: #fff;
	}
	
	.guize .title {
		text-align: center;
		margin-bottom: 28upx;
	}
	
	.guize .g_item {
		font-family: PingFang-SC-Medium;
		font-size: 24upx;
		color: #ffffff;
		letter-spacing: 0.5px;
		text-align: justify;
		line-height: 20px;
	}
</style>
