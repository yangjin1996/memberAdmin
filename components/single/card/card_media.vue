<template>
	<view class="cu-card bg-white margin-line">
		<view
			@click="onClickItem"
			:data-id="index"
			v-for="(item, index) in datas"
			:key="index"
			class="cu-item bg-img shadow-blur"
			:style="[{ backgroundImage: 'url(https://image.weilanwl.com/color2.0/plugin/qpct2148.jpg)' }]"
			v-if="item.is_geted != 1"
		>
			<view class="cardTitle">
				<text class="padding-left text-size-28 ">{{ item.name }}抵用劵</text>
				<text v-if="item.emoney > 0" class="padding-left text-size-30 ">{{ item.emoney }}—到店优惠-</text>
				<text class="padding-left text-size-50 ">{{ item.price }}</text>
			</view>
			<text v-if="selectId == index" class="cuIcon-roundcheckfill text-red"></text>
		</view>
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
		emoney: {
			type: [Boolean, String],
			default: false
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
