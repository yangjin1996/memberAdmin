<template>
	<view class="cu-chat">
		<block v-for="(item, index) in datas" :key="index">
			<view class="cu-item self" v-if="item.type == 'left'">
				<view class="main">
					<image v-if="item.content==null" :data-src="item.img" :data-index="index" @tap="previewImage" :src="item.img" class="radius" mode="widthFix"></image>
					<view v-else class="content bg-green shadow"><text>{{item.content}}</text></view>
				</view>
				<view class="cu-avatar radius" :style="{backgroundImage:'url('+item.avatar+');'}"></view>
				<view class="date">{{item.time}}</view>
			</view>
			<view class="cu-item" v-else>
				<view class="cu-avatar radius" :style="{backgroundImage:'url('+item.avatar+');'}"></view>
				<view class="main">
					<image v-if="item.content==null" :data-src="item.img" :data-index="index" @tap="previewImage" :src="item.img" class="radius" mode="widthFix"></image>
					<view v-else class="content shadow"><text>{{item.content}}</text></view>
				</view>
				<view class="date ">{{item.time}}</view>
			</view>
		</block>
	</view>
</template>

<script>
export default {
	data() {
		return {
			selectId: -1
		};
	},
	props: {
		datas: Array,
		direction: {
			type: String,
			default: 'left'
		}
	},
	methods: {
		onClickItem: function(e) {
			let id = e.currentTarget.dataset.id;
			if (this.selectId != id) {
				this.selectId = id;
			} else {
				this.selectId = -1;
			}
			this.$emit('onclick', id);
		},
		previewImage: function(e) {
			console.log("查看图片")
			var current = e.target.dataset.src;
			var index = e.target.dataset.index;
			var images=new Array(this.datas[index].img)
			
			uni.previewImage({
				current: current,
				urls: images
			});
		}
	}
};
</script>

<style scoped>
.cu-item {
	position: relative;
}
.cuIcon-roundcheckfill {
	font-size: 60upx;
	position: absolute;
	right: 100upx;
	top: 70upx;
}
.text-size-28 {
	color: #ffffff;
}
.text-size-30 {
	color: #f37b1d;
}
.text-size-50 {
	color: #ff0000;
	font-weight: bold;
}
.margin-line {
	margin-top: 2upx;
}
.cardTitle {
	padding: 60upx 60upx;
}
</style>
