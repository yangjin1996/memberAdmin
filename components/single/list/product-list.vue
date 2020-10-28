<template>
	<view class="bg-white padding padding-top-xs padding-bottom-xs" v-if="productlist.length != 0">
		<view class="flex m-shadow item-img item-info margin-top-sm margin-bottom-sm" v-for="(item, index) in productlist" :key="index" 
		 @click="onClickItem" :data-index="index">
			<view class="flex-twice item-img bg-img" :style="'background-image: url(' + item.img + ')'"></view>
			<view class="flex-treble padding-sm padding-left item-info">
				<view class="text-xl text-bold">{{item.name}}</view>
				<view class="text-grey margin-top-xs">
					<text><text class="text-bold">{{firstTitle}}：</text>{{item.introduce}}</text>
				</view>
				<view class="text-grey margin-top-sm"><text class="text-xl text-bold" :style="'color: ' + color">{{item.number}}</text><text class="text-bold margin-left-xs">{{secondTitle}}</text></view>
				<view>
					<view class="text-grey margin-top-xs inline"><text class="text-bold">{{thirdTitle}}：</text>{{item.from}}</view>
					<view class="cuIcon cuIcon-right inline fr text-white" :style="'background-color: ' + color"></view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default{
		data() {
			return{
				productlist: {}
			}
		},
		props: {
			products: {},
			firstTitle: {
				default: '产品简介'
			},
			secondTitle: {
				default: '元/件'
			},
			thirdTitle:{
				default: '产品来源'
			},
			color: {
				default: '#2DAD3F'
			},
			introlimit: {
				default: 40
			}
		},
		created() {
			this.productlist = this.products
			this.trim()
		},
		watch: {
			classes: function(v_new, v_old){
				this.productlist = v_new
				this.trim()
			}
		},
		methods: {
			trim() {
				for(let t in this.productlist){
					if(this.productlist[t].introduce.length > this.introlimit){
					    this.productlist[t].introduce = this.productlist[t].introduce.substr(0, this.introlimit) + '...'
					}
				}
			},
			onClickItem(e) {
				var index = e.currentTarget.dataset.index
				this.$emit('onclickitem', index)
			}
		}
	}
</script>

<style scoped>
	.m-shadow{
		box-shadow: 0px 4px 21px 0px rgba(67,67,67,0.14);
	}
	.inline{
		display: inline-block;
	}
	.item-img{
		border-top-left-radius: 20upx;
		border-bottom-left-radius: 20upx;
	}
	.item-info{
		border-top-right-radius: 20upx;
		border-bottom-right-radius: 20upx;
	}
	.cuIcon{
		font-size: 125%;
		padding: 10upx 10upx;
		border-radius: 8upx;
	}
</style>
