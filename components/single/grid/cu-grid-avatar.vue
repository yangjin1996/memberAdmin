<template>
	<view>
		<view class="margin-top text-sm center flex">
			<view class="flex grid-bottom">
				已有
				<text class="text-orange text-xl text-bold">{{total}}</text>
				人拼单，
				<text class="text-orange text-xl text-bold">{{hours}}:{{minutes}}:{{seconds}}</text>
				后结束。
			</view>
		</view>
		<view class="cu-list grid" :class="['col-' + cols, gridBorder ? '' : 'no-border']">
			<view class="cu-item" v-for="(item, index) in datas" :key="index" @click="onClick" :data-index="index">
				<view class="cu-avatar  round margin-left-xs" :style="{ backgroundImage: 'url(' + item.image + ')' }"></view>
			</view>
		</view>
		<view class="padding-sm center flex">
			<view class="flex grid-bottom">
				<view class="cu-avatar sm round margin-right" :style="{ backgroundImage: 'url(' + datas[datas.length - 1].image + ')' }"></view>
				<view class="text-orange">{{ datas[datas.length - 1].title }} 6分钟前参与拼单</view>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			hours: '00',
			minutes: '00',
			seconds: '00',
			timetotal:0
		};
	},
	name: 'cu-custom',
	computed: {
		style() {
			var style = '';
			return style;
		}
	},
	created() {
		this.init();
	},
	watch: {
		time() {
			this.init();
		}
	},
	props: {
		datas: Array,
		cols: {
			type: Number,
			default: 5
		},
		gridBorder: {
			type: [Boolean, String],
			default: false
		},
		time: {
			type: Number,
			default: 0
		},
		total: {
			type: Number,
			default: 0
		}
	},
	methods: {
		onClick(e) {
			let index = e.currentTarget.dataset.index;
			this.$emit('onclick', index);
		},
		onRight() {
			this.$emit('onright', true);
		},init() {
			var that=this;
			if(this.timetotal==0){
				this.timetotal= this.time
			}
			let timer=setInterval(function(){
				var mss = that.timetotal-500;
				if(mss>0){
					that.hours= parseInt((mss % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
					that.minutes= parseInt((mss % (1000 * 60 * 60)) / (1000 * 60));
					that.seconds = parseInt((mss % (1000 * 60)) / 1000);
					if(that.hours<10){
						that.hours="0"+that.hours;
					}
					if(that.minutes<10){
						that.minutes="0"+that.minutes;
					}
					if(that.seconds<10){
						that.seconds="0"+that.seconds;
					}
					that.timetotal=mss;
				}else{
					setInterval(timer);
				}
				
			},1000);
			
		}
	}
};
</script>

<style scoped>
.grid-bottom {
	margin: auto;
}
</style>
