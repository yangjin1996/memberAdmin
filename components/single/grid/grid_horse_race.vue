<template>
	<view>
		<view class="cu-list grid" :class="['col-' + cols, gridBorder ? '' : 'no-border']">
			<view class="cu-item" :class="[selectIndex == item.order?'bg-orange':'bg-yellow']" v-for="(item, index) in datas" :key="index" @click="onClick" :data-order="item.order" :data-index="index">
				<view :class="['cuIcon-' + item.cuIcon, 'text-' + item.color]"></view>
				<text :class="{ 'text-white': selectIndex == item.order }">{{ item.name }}</text>
			</view>
			
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			selectIndex: 1
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
			default: true
		}
	},
	methods: {
		onClick(e) {
			let order=e.currentTarget.dataset.order;
			if(order==0){
				this.selectIndex=1;
				this.OnStartRace();
			}
		},
		onRight() {
			this.$emit('onright', true);
		},
		OnStartRace: function() {
			var that = this;
			let total=that.datas.length;
			let plan=1;//控制轮转下标
			let size=total+Math.floor(Math.random()*10);//控制轮转总次数
			var timer = setInterval(function() {
				let index= that.selectIndex + 1;
				plan++;
				//当轮转单圈
				if(index==total){
					that.selectIndex =1;
				}else{
					that.selectIndex =index;
				}
				//当轮转全部
				if(plan==size){
					for (var i = 0; i < total; i++) {
						var item= that.datas[i];
						if(item.order==index){
							that.$emit('onchange', item);
							break;
						}
					}
					clearInterval(timer);
				}
			}, 500);
		}
	}
};
</script>

<style scoped></style>
