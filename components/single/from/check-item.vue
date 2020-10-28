<template>
	<view class="bg-white padding-sm">
		<view class="margin-left-sm text-bold text-black">{{title}}</view>
		<view class="grid col-3 margin-top-sm">
			<view v-for="(item, index) in items" :key="index" class="flex justify-center">
				<view class="cu-btn btn-item margin-xs" :class="item.checked == true ? style0 : style1"
					@click="onItemClick" :data-checked="item.checked" :data-index="index">{{item.name}}</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default{
		data() {
			return{
				items: [],
				style0: '',
				style1: ''
			}
		},
		props: {
			datas: {},
			title: {
				default: '多选网格列表',
			},
			fill: {
				default: false
			},
			round: {
				default: false
			},
			back: {
				default: 'black'
			}
		},
		created() {
			this.items = this.datas
			this.style0 = this.fill ? 'bg-' + this.back : 'lines-' + this.back
			this.style0 += this.round ? ' round' : ''
			this.style1 = this.round ? 'line-gray round' : 'line-gray'
		},
		methods: {
			initItem() {
				let aItems = []
				for(var s in this.datas){
					aItems.push({
						name: this.datas[s].name,
						checked: false
					})
				}
				this.items = aItems
			},
			onItemClick(e) {
				if(!this.items[0].hasOwnProperty('checked')){ 
					this.initItem()
				}
				var a = e.currentTarget.dataset.index
				var b = e.currentTarget.dataset.checked
				this.items[a].checked = !b
				this.$emit("onclick", this.getCheckItem())
			},
			getCheckItem() {
				var checkItem = []
				for(var item in this.items){
					if(this.items[item].checked == true){
						checkItem.push(this.items[item].name)
					}
				}
				return checkItem
			}
		}
	}
</script>

<style scoped>
	.btn-item{
		padding: 36upx 0upx;
		min-width: 210upx;
	}
	.round{
		border-radius: 99upx;
	}
</style>