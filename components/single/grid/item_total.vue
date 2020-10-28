<template>
	<view class="journal-item" id="project">
		<view class="item-box">
			<view class="item-boxs-text" @click="onClickItem" data-index="0">
				<view class="item-boxs-text-value">
					{{datas.value1}}
				</view>
				<view class="item-boxs-text-title">
					<slot name="left"></slot>
				</view>
			</view>
			<view class="item-boxs-text" @click="onClickItem" data-index="1">
				<view class="item-boxs-text-value">
					{{datas.value2}}
				</view>
				<view class="item-boxs-text-title" >
					<slot name="center"></slot>
				</view>
			</view>
			<view class="item-boxs-text" @click="onClickItem" data-index="2">
				<view class="item-boxs-text-value">
					{{datas.value3}}
				</view>
				<view class="item-boxs-text-title">
					<slot name="right"></slot>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name: 'project',
		data() {
			return {
				old: {
					scrollTop: 0
				}

			}
		},
		props: {
			datas: {}
		},
		methods: {
			scroll: function(e) {
				//console.log(e)
				this.old.scrollTop = e.detail.scrollTop
			},
			onClickItem(e) {
				//console.log(this.datas);
				var id = e.currentTarget.dataset.index;
				this.$emit('onclickitem', id);
			}


		}
	}
</script>
<!-- StarbbUI -->
<style scoped>
	.journal-item {
		
		background-color: #FFFFFF;
	}


	.item-box {
		display: flex;
		width: 100%;
		
	}

	.item-boxs-text {
		width: 32%;
		padding-top: 40upx;
		padding-bottom: 40upx;
		text-align: center;
	}

	

	.item-boxs-text-title {
		font-size: 26upx;
		color: rgba(217, 215, 215, 1);
		line-height: 32upx;
		text-align: center;
		font-family: FZLTKHK--GBK1-0;
		font-weight: 400;
	}
	.item-boxs-text-value {
		font-size: 30upx;
		font-family: FZLTKHK--GBK1-0;
		font-weight: 800;
		color: #00CD76;
		line-height: 36upx;
		padding: 10upx;
		text-align: center;
	}
</style>
