<template>
	<view class="padding">
		<view class="cu-card radius" :class="bgcolor!=''?bgcolor:''">
			<view class="title">{{title}}</view>
			<view class="content">
				<slot name="content"></slot>
			</view>
			<view class="bottom" @click="onClick">查看更多</view>
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
			bgcolor: {
				type:String,
				default: 'bg-white'
			},
			title: {
				type:String,
				default: '标题'
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
	.title {
		text-align: center;
		line-height: 80upx;
		font-size: 36upx;
		margin-top: 10upx;
		font-weight: 700;
	}
	.bottom{
		text-align: center;
		line-height: 60upx;
		font-size: 26upx;
	}
</style>
