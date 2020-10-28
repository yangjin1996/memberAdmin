<template>
	<view class="element">
		<view v-for="(item,index) in datas" :key="index" class="item-cell-child" v-if="type?item.user_share==1:true" :data-id="item.id" @click="itemClick">
			<view class="item-cell-image">
				<image class="loading item-cell-img" lazy-load="true" :src="item.image"></image>
			</view>
			<view class="item-cell-content">
				<view class="title-frist">{{item.name}}</view>
				<view class="item-cell">
					<text class="item-cell-text" v-if="item.speed!=null">{{item.speed}}</text>
					<text class="item-cell-text" v-if="item.type!=null&&item.type!=0">{{item.type==1?'全包':'半包'}}</text>
					<text class="item-cell-text" v-if="item.area!=null">{{item.area}}平方米 </text>
				</view>
				<view class="item-cell">
					<text class="item-cell-tag">{{item.stage!=null?item.stage:"未开始"}}</text>

				</view>

			</view>
		</view>
	</view>

</template>

<script>
	export default {
		name: 'element',
		data() {
			return {

			}
		},
		props: {
			datas: Array,
			type:{
				type:Boolean,
				default:false
			}
		},
		methods: {
			itemClick: function(e) {
				var id = e.currentTarget.dataset.id;
				this.$emit('onitemclick', id);
			},
			formateState: function(state) {


			}

		}
	}
</script>
<!-- StarbbUI -->
<style scoped>
	
	.item-cell-child{
		background-color: #FFFFFF;
		display: flex;
		margin-top: 2upx;
		text-align: left;
		align-items: center;
		padding: 10upx;
	}
	.item-cell {
		padding-top: 10upx;
		padding-bottom: 10upx;
	}

	.item-cell-image {
		padding: 10upx;
	}

	.item-cell-img {
		width: 290upx;
		height: 200upx;
		border-radius: 10upx;
	}



	.item-cell-title,
	.item-cell-value,
	.item-cell-desc {
		font-size: 26upx;
		font-family: FZLTKHK--GBK1-0;
		font-weight: 400;
		color: rgba(146, 145, 145, 1);
	}

	.item-cell-text{
		color: rgba(146, 145, 145, 1);
		margin-right: 10upx;
	}


	.title-frist {
		font-size: 36upx;
		font-family: FZLTHK--GBK1-0;
		font-weight: 800;
		color: #333333;
		padding: 6upx;
	}

	.item-cell-tag {
		padding-left: 20upx;
		padding-right: 20upx;
		padding-top: 10upx;
		padding-bottom: 10upx;
		background-color: #00CD76;
		border-radius: 8upx;
		color: #FFFFFF;

	}
</style>
