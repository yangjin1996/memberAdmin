<template>
	<view>
		<view class="cu-list grid" :class="['col-' + cols, gridBorder ? '' : 'no-border']">
			<view class="cu-item-child" v-for="(item, index) in cards" :key="index" @click="onClick" :data-index="index">
				<view class="re-box">
					<view class="re-item">
						<view class="re-item-front" v-if="item.lv==0">
							<image src="../../../static/egg.png" alt="egg"></image>
						</view>
						<view class="re-item-back" v-else-if="item.lv==1" >
							<image src="../../../static/egg1.png" alt="openegg"></image>
						</view>
						<view class="re-item-back" v-else-if="item.lv==2" >
							<image src="../../../static/egg2.png" alt="openegg"></image>
						</view>
						<view class="re-item-back padding" v-else>
							<image src="../../../static/prize.jpg" alt="openegg"></image>
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
			cards: this.datas
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
			default: 3
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
			let that = this;
			let index = e.currentTarget.dataset.index;
			if (that.radio &&that.selectIndex!=-1&&that.selectIndex != index) {
				that.util.showAlert('只能拥有一次机会');
				return;
			}
			uni.vibrateLong({
			    success: function () {
			        console.log('success');
			    }
			});
			let time=700;
			var timer=setInterval(function() {
				that.selectIndex = index;
				let lv=that.cards[index].lv;
				if(lv<3){
					lv++;
					time=1000;
					that.cards[index].lv=lv;
					that.$emit('onchange', index);
				}else{
					clearInterval(timer)
				}
				
			}, time);
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
	height: 226upx;
	cursor: pointer;
	position: relative;
	perspective: 500;
	-webkit-perspective: 500;
}
.re-item image {
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
	animation: zy 2.5s 0.15s linear infinite;
	-moz-animation: zy 2.5s 0.15s linear infinite; /* Firefox */
	-webkit-animation: zy 2.5s 0.15s linear infinite; /* Safari and Chrome */
	-o-animation: zy 2.5s 0.15s linear infinite; /* Opera */
	box-shadow: rgba(50, 50, 50, 0.2) 0 0 15px;
	overflow: hidden;
}


@-webkit-keyframes zy {
	10% {
		transform: rotate(15deg);
	}
	20% {
		transform: rotate(-10deg);
	}
	30% {
		transform: rotate(5deg);
	}
	40% {
		transform: rotate(-5deg);
	}
	50%,
	100% {
		transform: rotate(0deg);
	}
}
@-moz-keyframes zy {
	10% {
		transform: rotate(15deg);
	}
	20% {
		transform: rotate(-10deg);
	}
	30% {
		transform: rotate(5deg);
	}
	40% {
		transform: rotate(-5deg);
	}
	50%,
	100% {
		transform: rotate(0deg);
	}
}
@-o-keyframes zy {
	10% {
		transform: rotate(15deg);
	}
	20% {
		transform: rotate(-10deg);
	}
	30% {
		transform: rotate(5deg);
	}
	40% {
		transform: rotate(-5deg);
	}
	50%,
	100% {
		transform: rotate(0deg);
	}
}
@keyframes zy {
	10% {
		transform: rotate(15deg);
	}
	20% {
		transform: rotate(-10deg);
	}
	30% {
		transform: rotate(5deg);
	}
	40% {
		transform: rotate(-5deg);
	}
	50%,
	100% {
		transform: rotate(0deg);
	}
}

.cu-list.grid.cu-item {
	padding: 0rpx;
}
</style>
