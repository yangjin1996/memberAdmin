<template>
	<view>
	
		<view class="cu-bar input">
			<view class="action">
				<text class="cuIcon-sound text-grey"></text>
			</view>
			<input @focus="InputFocus" @blur="InputBlur" @input="onInput" :value="inputValue" :placeholder="hint" :adjust-position="false" class="solid-bottom" maxlength="300" cursor-spacing="10"></input>
			<view class="action">
				<text class="cuIcon-emojifill text-grey"></text>
			</view>
			<button v-if="inputValue.length>0" class="cu-btn bg-green shadow-blur" @click="onClick">发送</button>
			<view v-else class="action" @click="onClose">
				<text class="cuIcon-roundaddfill text-grey"></text>
			</view>
			
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				InputBottom: 0,
				inputValue:''
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
			}
		},
		methods: {
			onClick() {
				if(this.inputValue.length>0){
					this.$emit('onclick', this.inputValue);
				}
			},
			InputFocus(e) {
				this.InputBottom = e.detail.height
			},
			InputBlur(e) {
				this.InputBottom = 0
			},onClose(e) {
				this.inputValue =''
				this.$emit('oninput', this.inputValue);
			},
			onInput(e){
				this.inputValue = e.target.value
				this.$emit('oninput', this.inputValue);
			}
		}
	}
</script>

<style scoped>
	
</style>
