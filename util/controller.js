import umcons from './constant.js';
import request from './request.js';
export default {
	/**首页请求
	 * @param {Object} pageNo 请求分页
	 * @param {Object} store vuex 缓存池
	 * @param {Object} flush 是否刷新
	 * @param {Object} onsuccess 请求回调函数
	 */
	onHome(pageNo, store, flush, onsuccess) {
		var params = {
			user_id: store.userinfo.uid,
			pageNo: pageNo,
			pageSize: store.pageSize,
			grade_uid: store.inviter
		};
		request.post(umcons.serviceAddress.HOME, params, flush, function(data) {
			onsuccess(data.data, data.error, data.mes);
			uni.stopPullDownRefresh();
		});
	},
	/**热门商品
	 * @param {Object} pageNo 请求分页
	 * @param {Object} label_id 商品类型
	 * @param {Object} store vuex缓存池
	 * @param {Object} flush 是否刷新
	 * @param {Object} onsuccess 请求回调
	 */
	onHotDatatls(pageNo, label_id, store, flush, onsuccess) {
		var params = {
			pageNo: pageNo,
			pageSize: store.pageSize,
			label_id: label_id
		};
		request.post(umcons.serviceAddress.HOT_DATAILS, params, flush, function(data) {
			onsuccess(data.data, data.error, data.mes);
			uni.stopPullDownRefresh();
		});
	},getOpenid(code, user, flush, onsuccess){
		var params = {
			code: code,
			headurl: user.avatarUrl,
			city: user.city,
			sex: user.gender,
			nickname: user.nickName,
			province: user.province
		};
		request.post(umcons.serviceAddress.WX_LOGIN, params, flush, function(data) {
			onsuccess(data.data, data.error, data.mes);
			uni.stopPullDownRefresh();
		});
	},
	decryptPhone(encrypted_data, iv, code, flush, onsuccess) {
		var params = {
			encrypted_data: encrypted_data,
			iv:iv,
			code: code
		};
		request.post(umcons.serviceAddress.DECRYPT_PHONE, params, flush, function(data) {
			onsuccess(data.data, data.error, data.mes);
			uni.stopPullDownRefresh();
		});
	}
};