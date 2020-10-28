<template>
	<scroll-view scroll-x class="bg-white nav padding-sm">
		<view class="item" v-for="(item,index) in typelist" :key="index" :style="'height: ' + (height + 50) + 'px'"
		 @click="onclick" :data-index="index">
			<view>
				<view class="class-img bg-img" :style="'background-image: url(' + item.img + '); height: ' + height + 'px'"></view>
				<view class="flex align-center padding-left-sm" :style="'top: ' + (height-30) + 'px'"  :class="colorstyle + ' color-box-' + (color == 'colorful' ? colors[index % 9] : color)">
					<view>
						<view class="text-bold text-lg">{{item.name}}</view>
						<view class="margin-top-sm">{{item.e_name}}</view>
					</view>
				</view>
			</view>
		</view>
	</scroll-view>
</template>

<script>
	export default{
		data() {
			return {
				colors: [
					'orange',
					'red',
					'blue',
					'purple',
					'green',
					'yellow',
					'brown',
					'pink',
					'olive'
				],
				typelist: [],
				colorstyle: ''
			}
		},
		props: {
			datas: {},
			styles: {
				default: 'fill'
			},
			color: {
				default: 'colorful'
			},
			height: {
				default: 210
			}
		},
		created() {
			this.typelist = this.datas
			this.colorstyle = this.styles == 'normal' ? 'color-box-normal' : 'color-box-fill'
		},
		watch: {
			datas: (v_new, v_old) => {
				this.typelist = v_new
			}
		},
		methods: {
			onclick(e) {
				var index = e.currentTarget.dataset.index;
				this.$emit("onclick", index);
			}
		}
	}
</script>

<style scoped>
	.color-box-fill{
		position: absolute;
		color: white !important;
		border: none !important;
		border-radius: 20upx;
		width:270upx;
		height:140upx;
		box-shadow:0px 2px 4px 0px rgba(67,67,67,0.3);
	}
	
	.color-box-normal{
		position: absolute;
		background-color: white !important;
		border-radius: 20upx;
		width:270upx;
		height:140upx;
		box-shadow:0px 2px 4px 0px rgba(67,67,67,0.3);
	}
	
	.color-box-orange{
		color: orange;
		border: 8upx solid #f37b1d;
		background-color: #f37b1d;
	}
	
	.color-box-red{
		color: red;
		border: 8upx solid #e54d42;
		background-color: #e54d42;
	}
	
	.color-box-blue{
		color: blue;
		border: 8upx solid #0081ff;
		background-color: #0081ff;
	}
	
	.color-box-green{
		color: green;
		border: 8upx solid #39b54a;
		background-color: #39b54a;
	}
	
	.color-box-purple{
		color: purple;
		border: 8upx solid #6739b6;
		background-color: #6739b6;
	}
	
	.color-box-yellow{
		color: yellow;
		border: 8upx solid #fbbd08;
		background-color: #fbbd08;
	}
	
	.color-box-brown{
		color: brown;
		border: 8upx solid #a5673f;
		background-color: #a5673f;
	}
	
	.color-box-olive{
		color: brown;
		border: 8upx solid #8dc63f;
		background-color: #8dc63f;
	}
	
	.color-box-pink{
		color: brown;
		border: 8upx solid #e03997;
		background-color: #e03997;
	}
	
	.color-box-black{
		color: brown;
		border: 8upx solid #333333;
		background-color: #333333;
	}
	
	.color-box-gray{
		color: brown;
		border: 8upx solid #f0f0f0;
		background-color: #f0f0f0;
	}
	
	.nav .item {
		width: 290upx !important;
		padding: 0upx 10upx !important;
		display: inline-block;
		margin: 0 6px;
		
	}
	
	.class-img{
		width: 290upx;
		border-radius: 20upx;
	}
</style>
