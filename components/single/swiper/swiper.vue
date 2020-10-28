<template>
	<view>
		<swiper
			:class="[dotStyle ? 'square-dot' : 'round-dot', typeStyle ? 'screen-swiper' : 'card-swiper']"
			:indicator-dots="dots"
			:circular="true"
			:autoplay="true"
			interval="5000"
			duration="500"
			@change="cardSwiper"
			indicator-color="#8799a3">
			<swiper-item v-for="(item, index) in swiperList" :key="index" :class="cardCur == index ? 'cur' : ''">
				<block v-if="typeStyle">
					<image :src="item.url" mode="aspectFill" v-if="item.type == 'image'"></image>
					<video :src="item.url" autoplay loop muted :show-play-btn="false" :controls="false" objectFit="cover" v-if="item.type == 'video'"></video>
				</block>
				<view v-else class="swiper-item">
					<image :src="item.url" mode="aspectFill" v-if="item.type == 'image'"></image>
					<video :src="item.url" autoplay loop muted :show-play-btn="false" :controls="false" objectFit="cover" v-if="item.type == 'video'"></video>
				</view>
			</swiper-item>
		</swiper>
	</view>
</template>

<script>
export default {
	data() {
		return {
	
			cardCur: 0,
			swiperList: [
				{
					id: 0,
					type: 'image',
					url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big84000.jpg'
				},
				{
					id: 1,
					type: 'image',
					url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big37006.jpg'
				},
				{
					id: 2,
					type: 'image',
					url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big39000.jpg'
				},
				{
					id: 3,
					type: 'image',
					url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big10001.jpg'
				},
				{
					id: 4,
					type: 'image',
					url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big25011.jpg'
				},
				{
					id: 5,
					type: 'image',
					url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big21016.jpg'
				},
				{
					id: 6,
					type: 'image',
					url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big99008.jpg'
				}
			],
			towerStart: 0,
			direction: ''
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
		datas: {},
		dotStyle: {
			type: [Boolean, String],
			default: false
		},
		typeStyle: {
			type: [Boolean, String],
			default: false
		},
		dots:{
			type: [Boolean, String],
			default: false
		}
	},
	methods: {
		onClick() {
			this.$emit('onclick', true);
		},
		onRight() {
			this.$emit('onright', true);
		},
		cardSwiper(e) {
			this.cardCur = e.detail.current;
		}
	}
};
</script>

<style scoped></style>
