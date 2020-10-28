<template>
	<view class="cu-card case">
		<view v-for="(item,index) in datas" :key="index" :data-index="index" @click="onClickItem" class="cu-item shadow">
			<view class="cu-bar"  @click="toPage">
				<view class='action'>
					<text class='icon-title text-pink'></text>{{item.name!=null?item.name:item.mac}}
				</view>
				<view class='action'>
					<text class='text-state'>{{item.status==1?"在线":"不在线"}}</text>
				</view>
			</view>
			<view class='image'>
				<image class="loading image-live" lazy-load="true" :src="item.picUrlimage!=null?item.picUrlimage:baseImg" mode="scaleToFill"></image>
				<view class="cu-tag bg-orange" v-if="item.staff_share==1">共享</view>
			</view>
		</view>
	</view>

</template>

<script>
	export default {
		name: 'journal',
		data() {
			return {
				old: {
					scrollTop: 0
				},
				baseImg:'https://www.homeeyes.cn/app/images/live_base.jpg'
				
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
				var index = e.currentTarget.dataset.index;
				this.$emit('onclickitem', index);
			},
			previewImage: function(e) {
				var current = e.target.dataset.src;
				var imgs = this.datas.image;
				uni.previewImage({
					current: current,
					urls: imgs
				})
			},
			openUrl: function(e) {
				var src = e.target.dataset.src;
				if (this.util.isExist(src)) {
					var url = '../pulicpage/webview/webview?url=' + src;
					uni.navigateTo({
						url
					});
				} else {
					var id = e.target.dataset.id;
				}
			}
		}
	}
</script>
<!-- StarbbUI -->
<style scoped>
	.text-state {
		background-color: #00CD76;
		padding: 10upx 20upx;
		border-radius: 10upx;
		color: white
	}
	.image{
		height: 300upx;
	}
	.image-live{
		height: 300upx;
		width: 100%;
	}
</style>
