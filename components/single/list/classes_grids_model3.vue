<template>
	<view class="cu-list menu-avatar">
		<block v-for="(item, index) in datas" :key="index">
			<view class="cu-item" @click="onClickItem" :data-index="index">
				<view class="cu-avatar round lg" :style="[{ backgroundImage: 'url(' + (item.avatar!=null?item.avatar:basephoto) + ');' }]"></view>
				<view class="content">
					<view class="text-pink">
						<view class="text-cut">{{ item.name }}</view>
					</view>
					<view class="text-gray text-sm flex">
						<view class="text-cut">
							累计积分：
							<text class="text-size-22 text-end-day text-red">{{ item.profit_num }}</text>
						</view>
					</view>
				</view>
				<view class="action">
					<view class="text-grey text-xs">人脉</view>
					<view class="cu-tag round bg-red sm">{{ item.child.length }}</view>
				</view>
			</view>
			<view class="cu-list menu" v-if="showindex==index">
				<view class="cu-item" v-for="(childitem, index) in item.child" :key="index">
					<view class="content">
						<image :src="childitem.avatar!=null?childitem.avatar:basephoto" class="png" mode="aspectFit"></image>
						<text class="text-grey">{{childitem.name}}</text>
					</view>
					<view class="action"><text class="text-red text-sm">+{{childitem.profit_num}}</text></view>
				</view>
			</view>
		</block>
	</view>
</template>

<script>
import photo from '../../../static/logo.png'
export default {
	name: 'journal',
	data() {
		return {
			showindex:-1,
			basephoto:photo
		};
	},
	props: {
		datas: {},
		iscustom: {
			type: [Boolean, String],
			default: false
		}
	},
	methods: {
		onClickItem(e) {
			//console.log(this.datas);
			var index = e.currentTarget.dataset.index;
			if(this.showindex==index){
				this.showindex=-1;
			}else{
				this.showindex=index;
			}
			
			this.$emit('onclickitem', index);
		},
		previewImage: function(e) {
			var current = e.target.dataset.src;
			var imgs = this.datas.image;
			uni.previewImage({
				current: current,
				urls: imgs
			});
		}
	}
};
</script>
<!-- StarbbUI -->
<style scoped></style>
