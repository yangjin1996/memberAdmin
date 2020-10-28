<template>
	<view>
		<view class="cu-list menu-avatar">
			<view class="cu-item" :class="modalName == 'move-box-' + index ? 'move-cur' : ''"
				v-for="(item, index) in datas" :key="index"
				@touchstart="ListTouchStart" @touchmove="ListTouchMove" @touchend="ListTouchEnd" @longpress="deleteMsg" :data-index="index">
				<view class="cu-avatar round lg" :style="[{ backgroundImage: 'url(' + item.image + ')' }]">
					<view class="cu-tag badge">{{ item.size }}+</view>
				</view>
				<view class="content">
					<view class="text-grey">
						<view class="text-cut">{{ item.title }}</view>
						<view class="cu-tag round bg-orange margin-left-sm">{{ item.tag }}</view>
					</view>
					<view class="text-gray text-sm flex">
						<view class="text-cut">
							<text class="cuIcon-infofill text-red  margin-right-xs"></text>
							{{ item.content }}
						</view>
					</view>
				</view>
				<view class="action">
					<view class="text-grey text-xs">{{ item.time }}</view>
					<view class="cu-tag round bg-grey sm" v-if="item.number > 0">{{ item.number }}</view>
					<view class="cuIcon-notice_forbid_fill text-gray" v-else></view>
				</view>
				<view class="move">
					<view class="bg-grey">置顶</view>
					<view class="bg-red" @click="deleteMsg" :data-index="index">删除</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			modalName: null,
			listTouchStartX: 0,
			listTouchStartY: 0,
			listTouchDirection: null,
			myicon: 'https://www.homeeyes.cn/app/images/icon_item_mymsg.png'
		};
	},
	name: 'cu-custom',
	props: {
		datas: Array
	},
	methods: {
		onClick() {
			this.$emit('onclick', true);
		},
		
		// ListTouch触摸开始
		ListTouchStart(e) {
			this.listTouchStartX = e.touches[0].pageX;
			this.listTouchStartY = e.touches[0].pageY;
		},

		// ListTouch计算方向
		ListTouchMove(e) {
			let pageX = e.touches[0].pageX;
			let pageY = e.touches[0].pageY;
			let moveX = pageX - this.listTouchStartX;
			let moveY = pageY - this.listTouchStartY;
			if (Math.abs(moveX) > Math.abs(moveY)) {
				//左右滑动
				this.listTouchDirection = moveX > 0 ? 'right' : 'left';
			} else {
				//上下滑动
				this.listTouchDirection = moveY > 0 ? 'top' : 'bottom';
			}
		},
		// ListTouch计算滚动
		ListTouchEnd(e) {
			if (this.listTouchDirection == 'left') {
				this.modalName = 'move-box-' + e.currentTarget.dataset.index;
			} else if (this.listTouchDirection == 'right') {
				this.modalName = null;
			} else if (this.listTouchDirection == 'top') {
				this.modalName = null;
			} else if (this.listTouchDirection == 'bottom') {
				this.modalName = null;
			}
			this.listTouchDirection = null;
		},
		deleteMsg(e){
			var that = this
			let index = e.currentTarget.dataset.index;
			uni.showModal({
				content: '是否要删除该信息？',
				confirmText: '确定',
				cancelText: '取消',
				success(status) {
					if(status['confirm'] == true){
						that.$emit("ondelete", index);
					}else{
						console.log("取消");
					}
				}
			})
		}
	}
};
</script>

<style scoped>
	.cu-tag{
		max-height: 36upx;
	}
	.cu-list.menu-avatar>.cu-item .action{
		width: auto;
	}
</style>