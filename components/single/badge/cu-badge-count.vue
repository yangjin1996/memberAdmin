<template>
	<view class="cu-capsules">
		<view class="cu-capsule padding" :class="{ round: round }">
			<view class="cu-capsule-left">
				<text class="margin-right-xs" v-if="icon != ''" :class="['cuIcon-' + icon]"></text>
				{{ ltext }}
			</view>
			<view class="cu-capsule-right">
				<view class="cu-tag radius bg-white">{{ hours }}</view>
				:
				<view class="cu-tag radius bg-white">{{ minutes }}</view>
				:
				<view class="cu-tag radius bg-white">{{ seconds }}</view>
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
		time: {
			type: Number,
			default: 0
		},
		ltext: {
			type: String,
			default: ''
		},
		icon: {
			type: String,
			default: 'emoji'
		},
		bgcolor: {
			type: String,
			default: 'red'
		},
		round: {
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
		init() {
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
.cu-tags {
	display: flex;
}
.cu-capsule {
	padding: 20upx 30upx;
	display: flex;
	background-color: #ff0000;
	width: 65%;
	text-align: center;
	margin: auto;
}
.cu-capsule-left,
.cu-capsule-right {
	margin-left: 6upx;
	margin-right: 6upx;
	width: 50%;
}
.cu-capsules {
	text-align: center;
	display: flex;
}
</style>
