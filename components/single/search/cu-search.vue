<template>
	<view>
		<view class="cu-bar search margin-line" :class="[bgColor]">
			<view v-if="image!=''" @click="onUser" data-id="0" class="cu-avatar round" :style="[{ backgroundImage: 'url(' + image + ');' }]"></view>
			<view class="search-form round">
				<text class="cuIcon-search"></text>
				<input @input="onInput" :value="inputValue" @focus="InputFocus" @blur="InputBlur" :adjust-position="false" type="text" :placeholder="hint" confirm-type="search"></input>
				<text v-if="inputValue.length>0" @click="onClose" class="cuIcon-close"></text>
			</view>
			<view v-if="mold" class="action" @click="onClick" data-type="search">
				<button class="cu-btn bg-green shadow-blur round">搜索</button>
			</view>
			<view v-else class="action" @click="onClick" data-type="address">
				<text>广州</text>
				<text class="cuIcon-triangledownfill"></text>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				inputValue:'',
				InputBottom: 0
			};
		},
		name: 'cu-custom',
		computed: {
			style() {
				var style=""
				return style
			}
		},
		props: {
			mold: {
				type: [Boolean, String],
				default: false
			},
			image: {
				type: String,
				default: ''
			},
			bgColor: {
				type: String,
				default: 'bg-white'
			},
			hint:{
				type: String,
				default: '请输入内容'
			}
		},
		methods: {
			onUser(e) {
				let id = e.currentTarget.dataset.id;
				this.$emit('onuser', id);
			},
			onClick(e) {
				let type = e.currentTarget.dataset.type;
				this.$emit('onclick', this.inputValue);
			},
			onClose(e) {
				this.inputValue =''
				this.$emit('oninput', this.inputValue);
			},
			InputFocus(e) {
				this.InputBottom = e.detail.height
			},
			InputBlur(e) {
				this.InputBottom = 0
			},onInput(e) {
				//console.log(e)
				this.inputValue = e.target.value
				this.$emit('oninput', this.inputValue);
			}
		}
	}
</script>

<style scoped>
	
</style>
