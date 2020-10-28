<template>
	<view class="inputs">
		<view class="cu-form-group margin-line">
			<view class="title">
				<text v-if="title != ''">{{ title }}</text>
				<text v-if="icon != ''" :class="['cuIcon-' + icon, 'text-' + Bgcolor]"></text>
			</view>
			<input @input="onInput" :value="inputValue" :placeholder="hint" name="value" />
			<text @click="onClose" v-if="inputValue.length > 0" class="cuIcon-close text-orange"></text>
			<text v-if="mold == 'address'" class="cuIcon-locationfill text-orange" @click="onClick" :data-value="inputValue"></text>
			<button v-if="mold == 'verif'" :disabled="isClick" class="cu-btn bg-green shadow" :class="[isClick?'bg-grey':'bg-green']" @click="onClick" :data-value="inputValue">{{ btntxt==60?"验证码":btntxt }}</button>
			<view v-if="mold == 'phone'" class="cu-capsule radius" @click="onClick" :data-value="inputValue">
				<view class="cu-tag bg-blue ">+86</view>
				<view class="cu-tag line-blue">中国大陆</view>
			</view>
		</view>
		<view class="cu-form-toast" v-if="toast.length > 0">{{ toast }}</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			inputValue: '',
			toast: '',
			timer: Object,
			btntxt:60,
			isClick:false
		};
	},
	name: 'inputs',
	computed: {
		style() {
			var style = '';
			return style;
		}
	},
	props: {
		datas: {},
		mold: {
			type: String,
			default: ''
		},
		hint: {
			type: String,
			default: '请输入内容'
		},
		title: {
			type: String,
			default: ''
		},
		icon: {
			type: String,
			default: ''
		},
		Bgcolor: {
			type: String,
			default: 'red'
		}
		
	},onHide() {
		clearInterval(this.timer);
	},
	methods: {
		onClose() {
			this.inputValue = '';
			this.toast = '';
			this.$emit('oninput', this.inputValue);
		},
		onInput(e) {
			this.inputValue = e.target.value;
			if (this.mold == 'phone') {
				if (this.inputValue.length != 11) {
					this.toast = '输入手机号错误';
				} else {
					this.toast = '';
				}
			} else if (this.mold == 'address') {
				if (this.inputValue.length < 3) {
					this.toast = '输入地址错误';
				} else {
					this.toast = '';
				}
			} else if (this.mold == 'verif') {
				if (this.inputValue.length != 4 && this.inputValue.length != 6) {
					this.toast = '输入验证码错误';
				} else {
					this.toast = '';
				}
			}
			if (this.inputValue.length == 0) {
				this.toast = '';
			}
			this.$emit('oninput', this.inputValue);
		},
		onClick: function(e) {
			let value = e.currentTarget.dataset.value;
			if (this.mold == 'verif') {
				let that=this;
				if(!this.isClick){
					that.btntxt=60;
					that.isClick=true;
					this.timer = setInterval(function() {
						if(that.btntxt>0){
							that.btntxt--;
						}else{
							that.btntxt=60;
							that.isClick=false;
							clearInterval(that.timer);
						}
						
					}, 1000);
				}
				
			}
			this.$emit('onclick', value);
		}
	}
};
</script>

<style scoped>
.cu-form-toast {
	text-align: center;
	padding: 6rpx;
	font-size: 28upx;
	color: #ff0000;
	border-top: solid 1upx #efefef;
	border-bottom: solid 1upx #efefef;
	background-color: #ffffff;
	font-weight: 800;
}
.inputs {
	width: 100%;
}
</style>
