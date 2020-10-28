<template>
	<view class="uni-swipe-action">
		<view class="uni-swipe-action__container" :class="!isMoving ? 'animtion' : ''" @touchstart="touchStart" @touchmove="touchMove" @touchend="touchEnd" @touchcancel="touchEnd" @click="bindClickCont" :style="{'transform':transformX,'-webkit-transform':transformX}">
			<view class="uni-swipe-action__content">
				<view class="su-msg-item" @click="onclickmsg">
					<image class="su-msg-item-photo" :src="myicon"></image>
					<view class="su-msg-item-info">
						<view class="su-msg-item-name">{{itemdata.title}}
						<text class="su-msg-item-tag">{{itemdata.is_read==0?"未读":"已读"}}</text> 
						<text class="su-msg-item-time">{{itemdata.addtime}}</text></view>
						<view class="su-msg-item-phone">{{itemdata.content}}</view>
					</view>
				</view>
			</view>
			<view class="uni-swipe-action__btn-group" :id="elId">
				<div v-for="(item,index) in options" :key="index" class="uni-swipe-action--btn" :style="{backgroundColor: item.style && item.style.backgroundColor ? item.style.backgroundColor : '#C7C6CD',color: item.style && item.style.color ? item.style.color : '#FFFFFF',fontSize: item.style && item.style.fontSize ? item.style.fontSize : '28upx'}" @click="bindClickBtn(item,index)">
					{{item.text}}
				</div>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name: 'uni-swipe-action',
		props: {
			itemdata: {},
			isOpened: {
				type: Boolean,
				default: false
			},
			disabled: {
				type: Boolean,
				default: false
			},
			autoClose: {
				type: Boolean,
				default: true
			}
			
		},
		watch: {
			isOpened(newValue, oldValue) {
				this.isShowBtn = newValue ? true : false;
				this.endMove();
			}
		},
		data() {
			const elId = `Uni_${Math.ceil(Math.random() * 10e5).toString(36)}`
			return {
				myicon:"https://www.homeeyes.cn/app/images/icon_item_mymsg.png",
				elId: elId,
				moveLength: 0,
				isMoving: false,
				direction: '',
				startX: 0,
				startY: 0,
				isShowBtn: false,
				btnGroupWidth: 0,
				options: [{
					text: '删除',
					style: {
						backgroundColor: '#007aff'
					}
				}],
			}
		},
		// #ifdef H5
		mounted() {
			let view = uni.createSelectorQuery().select(`#${this.elId}`);
			view.fields({
				size: true
			}, data => {
				this.btnGroupWidth = data.width;
			}).exec();
			if (this.isOpened === true) {
				this.isShowBtn = true;
				this.endMove();
			}
		},
		// #endif
		// #ifndef H5
		onReady() {
			let view = uni.createSelectorQuery().select(`#${this.elId}`);
			view.fields({
				size: true
			}, data => {
				this.btnGroupWidth = data.width;
			}).exec();
			if (this.isOpened === true) {
				this.isShowBtn = true;
				this.endMove();
			}
		},
		// #endif
		computed: {
			transformX() {
				return `translateX(${this.moveLength}px)`
			}
		},
		methods: {
			onclickmsg() {
			
				this.$emit('selectmsg', this.itemdata.id);
			},
			bindClickBtn(item, index) {
				this.$emit('click', {
					text: item.text,
					style: item.style,
					index: index
				})
			},
			bindClickCont(e) {
				if (this.isShowBtn && this.autoClose === true) {
					this.isShowBtn = false;
					this.endMove();
				}
			},
			touchStart(event) {
				this.startX = event.touches[0].pageX;
				this.startY = event.touches[0].pageY;
			},
			touchMove(event) {
				if (this.direction === 'Y' || this.disabled === true) {
					return;
				}
				var moveY = event.touches[0].pageY - this.startY,
					moveX = event.touches[0].pageX - this.startX;
				if (!this.isMoving && Math.abs(moveY) > Math.abs(moveX)) { //纵向滑动
					this.direction = 'Y';
					return;
				}
				this.direction = moveX > 0 ? 'right' : 'left';
				this.isMoving = true;
			},
			touchEnd(event) {
				this.isMoving = false;
				if (this.direction !== 'right' && this.direction !== 'left') {
					this.direction = '';
					return;
				}
				if (this.direction == 'right') {
					this.isShowBtn = false
				} else {
					this.isShowBtn = true
				}
				this.endMove()
			},
			endMove() {
				if (this.direction === 'Y' || this.disabled === true) {
					this.direction = '';
					return;
				}
				if (this.isShowBtn) {
					this.moveLength = -this.btnGroupWidth;
					this.$emit('opened');
				} else {
					this.moveLength = 0;
					this.$emit('closed');
				}
				this.direction = '';
			}
		}
	}
</script>

<style>
	@charset "UTF-8";

	.uni-swipe-action {
		width: 100%;
		overflow: hidden
	}

	.uni-swipe-action__container {
		background-color: #fff;
		width: 200%;
		display: flex;
		flex-direction: row;
		flex-wrap: wrap
	}

	.uni-swipe-action__container.animtion {
		transition: transform 350ms cubic-bezier(.165, .84, .44, 1)
	}

	.uni-swipe-action__content {
		width: 50%
	}

	.uni-swipe-action__btn-group {
		display: flex;
		flex-direction: row
	}

	.uni-swipe-action--btn {
		padding: 0 32upx;
		color: #fff;
		background-color: #c7c6cd;
		font-size: 28upx;
		display: inline-flex;
		text-align: center;
		flex-direction: row;
		align-items: center
	}
	.su-msg-item-name,
	.su-msg-item-phone {
		align-items: center;
		position: relative;
		line-height: 40upx;
	}
	
	.su-msg-item-name {
		font-size: 30upx;
		font-family: FZLTHK--GBK1-0;
		font-weight: 400;
		color: rgba(112, 111, 111, 1);
	}
	
	.su-msg-item-phone {
		font-size: 26upx;
		font-family: FZLTKHK--GBK1-0;
		font-weight: 400;
		color: rgba(146, 145, 145, 1);
	}
	
	
	.su-msg-item {
		display: flex;
		width: 100%;
		align-items: center;
		padding: 0.5rem;
		position: relative;
		background-color: #FFFFFF;
	}
	
	.su-msg-item-photo {
		width: 50px;
		height: 50px;
		border-radius: 25px;
		padding: 10upx;
	}
	
	.su-msg-item-info {
		float: right;
		width: 80%;
		margin-left: 0.5rem;
	}
	
	.su-msg-item-tag {
		padding-top: 4upx;
		padding-bottom: 4upx;
		padding-left: 4upx;
		padding-right: 4upx;
		border-radius: 4upx;
		background-color: #00CD76;
		color: white;
		font-size: 24upx;
		margin-left: 10upx;
	}
	
	.su-msg-item::after {
		content: '';
		width: 100%;
		height: 1px;
		background-color: #dcdcdc;
		display: block;
		left: 0px;
		position: absolute;
		bottom: 0;
	}
	
	.su-msg-item-time {
		position: absolute;
		right: 0.5rem;
	}
</style>