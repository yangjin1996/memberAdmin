import http from "./http.js"
const modal = 1;
const baseUrl = "https://wxt.homeeyes.cn/";
let responses = null;
let requestUrl =null;
let result = {
	data: {},
	url: "",
	params: {},
}
/**
 * 显示异常
 * @param {Object} msg
 */
function showtoast(msg) {
	uni.showToast({
		title: msg,
		mask: true,
		duration: 1000
	});
	setTimeout(function() {
		uni.hideToast();
	}, 1500);
}

function init(url) {
	if (url.indexOf("login") != -1) {
		responses = null;
	}
	if (responses == null) {
		responses = new Map();
	}
	if (!responses.has(url)) {
		responses.set(url, result);
	}
	return responses.get(url);
}

function contrast(url, params, flush,datas) {
	let val1 = JSON.stringify(datas.params);
	let val2 = JSON.stringify(params);
	if (flush != 1 && datas.url == requestUrl && val1 == val2) {
		return true;
	} else {
		return false;
	}

}
const post = (url, params, flush, callbcak) => {
	requestUrl = baseUrl + url;
	let datas=init(url);
	if (contrast(url, params, flush,datas)) {
		callbcak(datas.data);
	} else {
		datas.url = requestUrl;
		datas.params = params;
		if (modal == 1) {
			http.fly.post(requestUrl, params).then(res => {
				let data = res.data;
				if (data.error != 0) {
					if (data.mes) {
						showtoast(data.mes);
					} else {
						showtoast("网络请求异常，请稍后重试");
					}
					callbcak(datas.data);
				} else {
					datas.data = data;
					responses.set(url, datas);
					callbcak(data);
				}
			}).catch(error => {
				callbcak(datas.data);
				showtoast(error);
			});
		} else {
			uni.request({
				url: requestUrl,
				data: params,
				method: "POST",
				header: {
					"Content-Type": "application/x-www-form-urlencoded"
				},
				dataType: 'json',
				success: function(res) {
					let data = res.data;
					if (data.error != 0) {
						if (data.mes) {
							showtoast(data.mes);
						} else {
							showtoast("网络请求异常，请稍后重试");
						}
						callbcak(datas.data);
					} else {
						datas.data = data;
						responses.set(url, datas);
						callbcak(data);
					}
				},
				fail: function(err) {
					callbcak(datas.data);
					showtoast(error);
				}
			})
		}

	}
}
const get = (url, flush, callbcak) => {
	requestUrl = baseUrl + url;
	let datas=init(url);
	if (contrast(url, null, flush,datas)) {
		callbcak(datas.data);
	} else {
		if (modal == 1) {
			http.fly.get(requestUrl).then(res => {
				let data = res.data;
				if (data.error != 0) {
					if (data.mes) {
						showtoast(data.mes);
					} else {
						showtoast("网络请求异常，请稍后重试");
					}
					callbcak(datas.data);
				} else {
					datas.data = data;
					responses.set(url, datas);
					callbcak(data);
				}
			}).catch(error => {
				callbcak(datas.data);
				showtoast(error);
			});
		} else {
			uni.request({
				url: requestUrl,
				method: "GET",
				header: {
					"Content-Type": "application/x-www-form-urlencoded"
				},
				dataType: 'json',
				success: function(res) {
					let data = res.data;
					if (data.error != 0) {
						if (data.mes) {
							showtoast(data.mes);
						} else {
							showtoast("网络请求异常，请稍后重试");
						}
						callbcak(datas.data);
					} else {
						datas.data = data;
						responses.set(url, datas);
						callbcak(data);
					}
				},
				fail: function(err) {
					callbcak(datas.data);
					showtoast(error);
				}
			});
		}

	}
}


module.exports = {
	post,
	get
}
