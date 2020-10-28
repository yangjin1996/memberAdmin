<template>
	<view>

		<view class="uni-list">
			<view class="uni-list-cell">
				<view class="uni-list-cell-left">
					选择日期
				</view>
				<view class="uni-list-cell-db">
					<picker mode="date" :value="date" :start="startDate" :end="endDate" @change="bindDateChange">
						<view class="uni-input">{{date}}</view>
					</picker>
				</view>
			</view>
			<view class="uni-list-cell">
				<view class="uni-list-cell-left">
					选择时间
				</view>
				<view class="uni-list-cell-db">
					<picker mode="time" :value="time" start="09:01" end="21:01" @change="bindTimeChange">
						<view class="uni-input">{{time}}</view>
					</picker>
				</view>
			</view>
		</view>


		<!-- <view class="uni-list">
		<button type="primary" @click="selecttime">确认选择</button>
		</view> -->
	</view>
</template>
<script>
	export default {
		data() {
			const currentDate = this.getDate({
				format: true
			});
			return {
				title: 'picker',
				date: currentDate,
				time: '12:01'
			}
		},
		computed: {
			startDate() {
				return this.getDate('start');
			},
			endDate() {
				return this.getDate('end');
			}
		},
		methods: {
			selecttime: function() {
				var datetime = this.date + " " + this.time+":00";
				this.$emit('onselect', datetime);
			},
			bindDateChange: function(e) {
				
				this.date = e.target.value;
				this.selecttime();
			},
			bindTimeChange: function(e) {
				
				this.time = e.target.value;
				this.selecttime();
		
			},
			getDate(type) {
				const date = new Date();

				let year = date.getFullYear();
				let month = date.getMonth() + 1;
				let day = date.getDate();

				if (type === 'start') {
					year = year - 60;
				} else if (type === 'end') {
					year = year + 2;
				}
				month = month > 9 ? month : '0' + month;;
				day = day > 9 ? day : '0' + day;

				return `${year}-${month}-${day}`;
			}
		}
	}
</script>

<style scoped>
	.uni-list {
		padding: 20upx;
	}

	.uni-list-cell {
		padding: 10upx;
		align-items: center;

	}

	.uni-input {
		height: 60upx;
	}
</style>
