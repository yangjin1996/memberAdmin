<template>
	<view>
		<view class="cu-bar" :class="{'margin-top':isTop}" @click="toPage">
			<view class='action'>
				<text v-if="isLeft" class="cu-icon-blue"></text>
				<text class="action-title text-size-34">{{title!=null?title:'标题'}}</text>
			</view>
			<view class='action text-size-28'>
				<slot name="right"></slot>
				<text v-if="isRight" class="lg text-gray cuIcon-right"></text>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			};
		},
		name: 'cu-bar',
		computed: {

		},
		props: {
			isRight: {
				type: [Boolean, String],
				default: true
			},isLeft: {
				type: [Boolean, String],
				default: true
			},isTop: {
				type: [Boolean, String],
				default: false
			},
			title: String,
			url: {
				type: String,
				default: ''
			}
			
		},
		methods: {
			toPage() {
				var url=this.url;
				if(!url){
					this.$emit('onclick', this.title);	
				}else{
					uni.navigateTo({
						url
					});
					
				}
				
			}
		}
	}
</script>

<style scoped>
	.action-title {
		font-size: 34upx;
		font-family:'黑体';
		font-weight: 400;
		color: rgba(70, 70, 70, 1);
		line-height: 32upx;
	}
	.cu-bar{
		margin-bottom: 1upx;
	}
</style>
