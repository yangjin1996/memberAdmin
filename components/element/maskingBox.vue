<template>
	<view id="masking" class="masking" v-if="isshow" @click="commitExit">
		<view class="toast" v-show="isend">最后一张图</view>
		<!--显示图片-->
		<image class="masking-img" :src="showimg" mode="aspectFit"></image>
		<view class="del_click" @click.stop="commitExit">
			关闭
		</view>
		<view class="controler">
			<!--左移-->
			<image @click.stop="onLeft" class="controler_icon contro-left" src="https://www.homeeyes.cn/app/images/icon_left.png" ></image>
			<!--右移-->
			<image @click.stop="onRight" class="controler_icon contro-right" src="https://www.homeeyes.cn/app/images/icon_right.png" ></image>
		</view>
	</view>
</template>

<script>
	export default {
		name: 'masking',
		data() {
			return {
				showimg: "",
				showindex: 0,
				baseimgs: [],
				isend: false
			}
		},
		created() {
			//初始化显示状态
			this.isshow = false;
		},
		//接受父对象传递数据
		props: {
			imgs: Array,
			isshow: false
		},
		watch: {
			//监听图片数组
			imgs: {
				handler: function(val, oldval) {
					if(val != oldval) {
						this.$nextTick(() => {
							if(this.isEmptry(this.imgs)) {
								//更新数组
								this.baseimgs = this.imgs;
								//初始化下标
								this.showindex = 0;
								//初始化隐藏最后一张图提示
								this.isend=false;
								//更新设置图片
								this.onUpdataImg();
							}
						})
					}
				},
				immediate: true, //关键
				deep: true
			},
		},
		methods: {
			//通知父组件关闭
			commitExit() {
				//关闭方法为onmaskclose
				this.$emit('onmaskclose', false);
			}, //左移
			onLeft: function() {
				this.showindex--;
				if(this.showindex > 0) {
					this.onUpdataImg();
				} else {
					this.showindex = 0;
					this.onUpdataImg();
				}
				//关闭最后一页提示
				if(this.isend) {
					this.isend = false;
				}

			}, //右移
			onRight: function() {
				this.showindex++;
				if(this.showindex < this.baseimgs.length) {
					this.onUpdataImg();
				} else {
					//提示最后一张图
					this.isend = true;
					//设置当前下标为数组有效下标最大值
					this.showindex = this.baseimgs.length - 1;
					//设置为最后一张图
					this.onUpdataImg();
				}

			}, //判断数组是否为空
			isEmptry: function(value) {
				if(value != undefined && value.length > 0) {
					return true;
				} else {
					return false;
				}
			},//更新设置图片
			onUpdataImg: function() {
				//判断数组
				if(this.isEmptry(this.baseimgs)) {
					this.showimg = this.baseimgs[this.showindex];
				}else{
					this.isshow = false;
					this.commitExit();
				}
			}
		}
	}
</script>

<style scoped>
	.masking {
		z-index: 999;
		width: 100%;
		height: 100%;
		position: fixed;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		background-color: #000000;
		display: inline-block;
		vertical-align: middle;
		padding: 0px;
	}
	
	.toast {
		border: solid 1px red;
		border-radius: 6px;
		position: absolute;
		bottom: 5rem;
		left: 5rem;
		right: 5rem;
		text-align: center;
		margin-left: 0;
		margin-right: 0;
		color: red;
		padding: 0.2rem;
	}
	
	.masking-img {
		width: 100%;
		height: auto;
		margin-bottom: auto;
		margin-top: auto;
		position: absolute;
		top: 0;
		bottom: 0;
		background-size: 100%;
		vertical-align: middle;
		display: inline-block;
	}
	
	.del_click {
		position: absolute;
		top: 3rem;
		right: 3rem;
		border: solid 1px #04BE02;
		color: #04BE02;
		padding: 2px 10px;
		border-radius: 6px;
		font-weight: bold;
	}
	
	.controler {
		position: absolute;
		top: 0;
		bottom: 0;
		vertical-align: middle;
		width: 100%;
		height: 40px;
		margin-bottom: auto;
		margin-top: auto;
		display: flex;
		padding: 10px;
	}
	
	.controler_icon {
		width: 1.5rem;
		height: 1.5rem;
		padding: 0.2rem;
		background-color: #CCCCCC;
	}
	
	.contro-right {
		position: absolute;
		right: 2rem;
	}
</style>