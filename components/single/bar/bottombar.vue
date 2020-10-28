<template>
	<view class="box">
		<view class="cu-bar tabbar border shop" :class="[bgColor, { foot: isBottom }]">
			<button class="action text-green" open-type="contact">
				<view class="cuIcon-service text-green"><view class="cu-tag badge"></view></view>
				客服
			</button>
			<view class="action" :class="['text-' + item.bg]" v-for="(item,index) in datas2" :key="index" @click="onClick" data-type="0" :data-index="index" >
				<view :class="['cuIcon-' + item.cuIcon]">
					<view class="cu-tag badge" v-if="item.badge>0">{{item.badge}}</view>
				</view>
				{{item.text}}
			</view>
			<view v-if="btnStyle==0" class="btn-group" >
				<block v-for="(item,index) in datas" :key="index" >
					<button  class="cu-btn bg-red round shadow-blur" @click="onClick" :data-index="index" data-type="1" :class="['bg-' + item.bg]">{{item.text}}</button>
				</block>
			</view>
			<block v-else v-for="(item,index) in datas" :key="index" >
				<view class="bg-red submit" @click="onClick" :data-index="index" data-type="1" :class="['bg-' + item.bg]">{{item.text}}</view>
			</block>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			
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
		datas2: Array,
		btnStyle:{
			type: Number,
			default: 0
		},
		bgColor: {
			type: String,
			default: 'bg-white'
		},
		isBottom: {
			type: [Boolean, String],
			default: false
		}
	},
	methods: {
		onClick(e) {
			//console.log("点击")
			let param={
				index:e.currentTarget.dataset.index,
				type:e.currentTarget.dataset.type
			}
			this.$emit('onclick', param);
		}
		
	}
};
</script>

<style scoped>
.box {
	margin: 50upx 0;
}

.box view.cu-bar {
	margin-top: 20upx;
}
</style>
