<template>
	<view class="cu-list menu-avatar">
		<block v-for="(item, index) in datas" :key="index">
			<view class="cu-item" @click="onClickItem" :data-index="index">
				<view class="cu-avatar round lg" :style="[{ backgroundImage: 'url(' + item.logo + ');' }]"></view>
				<view class="content">
					<view class="text-pink">
						<view class="text-cut">{{ item.name }}</view>
					</view>
					<view class="text-gray text-sm flex">
						<view class="text-cut">
							{{item.info}}
							</view>
					</view>
				</view>
				<view class="action" >
					<view class="text-grey text-xs">商品</view>
					<view class="cu-tag round bg-red sm">{{ item.is_up }}</view>
				</view>
			</view>
		</block>
	</view>
</template>

<script>
export default {
	name: 'journal',
	data() {
		return {
			showindex:-1
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
