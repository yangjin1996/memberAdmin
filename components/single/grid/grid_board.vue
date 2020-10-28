<template>
	<view>
		<view class="cu-list grid" :class="['col-' + cols, gridBorder ? '' : 'no-border']">
			<view class="cu-item-child" v-for="(item, index) in cards" :key="index" @click="onClick" :data-index="index">
				<view class="re-box">
					<view class="re-item">
						<view class="re-item-back" v-if="item.checked" >
							<image src="../../../static/card_front.png" alt="card"></image>
						</view>
						<view class="re-item-front" v-else>
							<image src="../../../static/card.png" alt="coser"></image>
						</view>
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
			selectIndex: -1,
			cards:this.datas
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
		datas: Array,
		cols: {
			type: Number,
			default: 2
		},
		gridBorder: {
			type: [Boolean, String],
			default: false
		},
		radio: {
			type: [Boolean, String],
			default: false
		}
	},
	methods: {
		onClick(e) {
			let that=this;
			let index=e.currentTarget.dataset.index;
			if(that.radio&&that.selectIndex>=0){
				that.util.showAlert("只能拥有一次机会")
				return;
			}
			uni.vibrateShort({
			    success: function () {
			        console.log('success');
			    }
			});
			setTimeout(function(){
				that.selectIndex=index;
				that.cards[index].checked = true;
				that.$emit('onchange', index);
			},500)
			
		},
		onRight() {
			this.$emit('onright', true);
		}
	}
};
</script>

<style scoped>
.re-item {
	width: 100%;
	height: 276upx;
	cursor: pointer;
	position: relative;
	perspective: 500;
	-webkit-perspective: 500;
}
.re-item image{
	width: 100%;
	height: 100%;
	
}


.re-item-front,
.re-item-back {
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	
	-webkit-perspective: 1000;
	/*backface-visibility: hidden;*/
	-webkit-transition: all 1.5s;
	-moz-transition: all 1.5s;
	-ms-transition: all 1.5s;
	-o-transition: all 1.5s;
	box-shadow: rgba(50, 50, 50, 0.2) 0 0 15px;
	overflow: hidden;
}

.re-item-back {
	position: relative;
	transform: rotateY(-180deg);
	-webkit-transform: rotateY(-180deg);
}

.re-item:hover .re-item-front {
	transform: rotateY(-180deg);
	-webkit-transform: rotateY(-180deg);
}

.re-item:hover{
	transform: rotateY(-360deg);
	-webkit-transform: rotateY(-360deg);
}
/* .re-item-back {
	transform: rotateY(-360deg);
	-webkit-transform: rotateY(-360deg);
} */
.cu-list.grid.cu-item{
	padding: 0rpx;
}
</style>
