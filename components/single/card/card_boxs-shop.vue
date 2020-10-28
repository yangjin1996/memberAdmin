<template>
	<view class="padding">
		<view class="cu-card radius" :class="bgcolor != '' ? bgcolor : ''">
			<view class="cu-card-left">
				<image :src="datas.image"></image>
				<view class="cu-card-bottom">限量{{datas.number}}件</view>
				<view class="cu-tag cu-tag-top bg-red">{{datas.tag}}</view>
			</view>
			<view class="cu-card-right">
				<view class="cu-card-boxs">
					<view class="cu-card-title ">
						<text class="cuIcon-home margin-right-xs"></text>
						{{datas.shop}}
					</view>
					<view class="cu-card-title padding-xs">
						<text class="text-xl text-bold">{{datas.good}}</text>
					</view>
					<view class="cu-card-tags">
						<view class="cu-tag bg-red round text-xs" v-for="(item,index) in datas.tags" :key="index">{{item}}</view>
					</view>
					<view class="cu-card-plan">
						<view class="flex margin-top">
							<text class="cuIcon-hotfill text-red "></text>
							<view class="cu-progress round bg-orange">
								<view class="bg-red" :style="{ width: plan }">{{plan}}</view>
							</view>
							<text class="margin-left-xs text-xs">已抢{{datas.expend}}件</text>
						</view>
					</view>
					<view class="cu-card-price">
						<text class="text-red">{{datas.mark}}</text>
						<text class="text-red text-bold text-xl">￥{{datas.price}}</text>
						<text class="text-gray text-sm original">￥{{datas.original}}</text>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			plan:"0%"
			
		};
	},
	name: 'cu-custom',
	computed: {
		style() {
			var style = '';
			return style;
		}
	},
	props: {
		bgcolor: {
			type: String,
			default: 'bg-white'
		},
		title: {
			type: String,
			default: '标题'
		},datas:Object
	},
	created() {
		this.init();
	},
	watch: {
		time() {
			this.init();
		}
	},
	methods: {
		init(){
			this.plan=(this.datas.expend/this.datas.number*100)+"%";
		},
		onClick() {
			this.$emit('onmore', true);
		},
		onRight() {
			this.$emit('onright', true);
		}
	}
};
</script>

<style scoped>
.title {
	text-align: center;
	line-height: 80upx;
	font-size: 36upx;
	margin-top: 10upx;
	font-weight: 700;
}
.bottom {
	text-align: center;
	line-height: 60upx;
	font-size: 26upx;
}
.cu-card {
	display: flex;
}
.cu-card-left {
	width: 40%;
	height: 280upx;
	position: relative;
}
.cu-card-left image {
	width: 100%;
	height: 100%;
}
.cu-card-bottom {
	position: absolute;
	bottom: 0;
	background-color: #ff0000;
	color: #ffffff;
	text-align: center;
	left: 0;
	right: 0;
}
.cu-tag-top {
	position: absolute;
	top: 0;
	left: 0;
}
.cu-card-right {
	width: 60%;
	padding: 5upx 20upx;
}
.cu-progress {
	width: 50%;
}
.cu-card-boxs {
	position: relative;
	height: 100%;
}
.cu-card-price {
	position: absolute;
	bottom: 0;
	text-align: left;
	left: 0;
	right: 0;
}
.cu-card-tags {
	display: flex;
}
.original{
	text-decoration: line-through;
}
</style>
