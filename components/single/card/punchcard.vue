<template>
	<view>
		<view class="cu-bar bg-white solid-bottom margin-top">
			<view class="action">
				<text class="cuIcon-title text-orange "></text>
				{{ position }}月打卡统计
			</view>
			<view class="action"><button class="cu-btn bg-green shadow" @tap="showModal" data-target="gridModal">设置</button></view>
		</view>
		<view class="cu-modal" :class="modalName == 'gridModal' ? 'show' : ''" @tap="hideModal">
			<view class="cu-dialog" @tap.stop>
				<radio-group class="block" @change="Gridchange">
					<view class="cu-list menu text-left">
						<view class="cu-item" v-for="(item, index) in 12" :key="index">
							<label class="flex justify-between align-center flex-sub">
								<view class="flex-sub">{{ index + 1 }} 月份打卡</view>
								<radio class="round" :value="index + 1 + ''" :class="position == index + 1 ? 'checked' : ''" :checked="position == index + 1"></radio>
							</label>
						</view>
					</view>
				</radio-group>
			</view>
		</view>
		<view class="cu-list grid col-5 no-border">
			<view class="cu-item" v-for="(item, index) in total" :key="index">
				<view class="cu-item-content">
					<view class="cu-item-content-texts">
						<text>30</text>
						<text>/</text>
						<text>40</text>
					</view>
				</view>
				<text>{{ position + '-' + (index + 1) }}</text>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			cuIconList: [
				{
					cuIcon: 'cardboardfill',
					color: 'red',
					badge: 120,
					name: '09-01'
				}
			],
			modalName: null,
			total: 0,
			position: 0
		};
	},
	props: {
		month: {
			type: Number,
			default: 1
		},
		days: {
			type: Number,
			default: 30
		}
	},
	created: function(e) {
		this.total = this.days;
		this.position = this.month;
	},
	methods: {
		showModal(e) {
			this.modalName = e.currentTarget.dataset.target;
		},
		hideModal(e) {
			this.modalName = null;
		},
		Gridchange(e) {
			this.position = e.detail.value;
			this.modalName = null;
			this.total = this.util.getDateDays(e.detail.value);
			//console.log(day);
		}
	}
};
</script>

<style scoped>
.page {
	height: 100vh;
	width: 100vw;
}

.page.show {
	overflow: hidden;
}
.cu-item {
	text-align: center;
}
.cu-item-content {
	text-align: center;
	display: flex;
	align-items: center;
	border: solid 6upx #00cd76;
	border-radius: 50%;
	width: 100upx;
	height: 100upx;
	margin-left: auto;
	margin-right: auto;
}
.cu-item-content-texts {
	text-align: center;
	display: flex;
	margin-left: auto;
	margin-right: auto;
}
.cu-item-content-texts text {
	white-space: normal;
}
</style>
