let webutil = undefined;

function getToken() {
	try {
		const token = uni.getStorageSync('token');
		return token;
	} catch (e) {
		console.log(e);
		// error
	}
}

function getAppkey() {
	try {
		const appkey = uni.getStorageSync('appkey');
		return appkey;
	} catch (e) {
		console.log(e);
		// error
	}
}

function isExist(value) {
	if (value !== null && value !== undefined && value.length > 0) {
		return true;
	} else {
		console.log(value);
		return false;
	}
}
/**
 * 初始化native
 * @param {Object} data
 */
function initNative(data) {
	try {
		if (isExist(data.value)) {
			uni.setStorageSync('token', data.value);
		}
		if (isExist(data.appkey)) {
			uni.setStorageSync('appkey', data.appkey);
		}
	} catch (e) {
		// error
	}
	initSDK(data.value, data.appkey);
}
/**
 * 创建导入原生接口类
 */
function getWebUtil() {
	if (webutil == undefined) {
		switch (uni.getSystemInfoSync().platform) {
			case 'android':
				var WebUtil = plus.android.importClass('com.yueyou.homeeye.WebUtil');
				//导入后可以使用new方法创建类的实例对象
				webutil = new WebUtil();
				break;
			case 'ios':
				// iOS平台导入NSNotificationCenter类
				var WebUtil = plus.ios.importClass('WebUtil');
				webutil = new WebUtil();
				console.log('运行iOS上');
				break;
			default:
				console.log('运行在开发者工具上');
				break;
		}
	}
	return webutil;
}
/**
 * 初始化萤石组件
 * @param {Object} token
 */
function initSDK(token, appkey) {
	switch (uni.getSystemInfoSync().platform) {
		case 'android':
			plus.android.invoke(getWebUtil(), 'initYZ', token, appkey);
			break;
		case 'ios':
			plus.ios.invoke(getWebUtil(), "initYZ:appkey:", token, appkey);
			break;
		default:
			console.log('运行在开发者工具上');
			break;
	}
}
/**
 * 打开直播
 * @param {Object} json
 */
function openplay(json) {
	try {
		const msg = JSON.stringify(json);
		switch (uni.getSystemInfoSync().platform) {
			case 'android':
				var main = plus.android.runtimeMainActivity();
				plus.android.invoke(getWebUtil(), 'onOpenActivity', main, msg);
				break;
			case 'ios':
				var wv = plus.ios.currentWebview();
				//getWebUtil().defaultCenter().postNotificationNameobject("onOpenActivity",msg);
				//plus.ios.invoke(getWebUtil(), 'onOpenActivity', wv, msg);
				plus.ios.invoke(getWebUtil(), "onOpenActivity:", msg);
				//openWeb(msg);
				break;
			default:
				console.log('运行在开发者工具上');
				break;
		}
	} catch (e) {
		console.log(e);
	}
}
function openWeb(device) {
	var mac = device.mac;
	var cid = 1000 + device.cid;
	var address = 'https://www.homeeyes.cn/app/livedemo/liveplay.html?mac=' + mac + '&invitation=' + cid;
	var live = encodeURIComponent(address);
	var url = '../pulicpage/webview/webview?url=' + live;
	uni.navigateTo({
		url
	});
}
function onShare(type, data) {
	type=parseInt(type);
	// #ifdef APP-PLUS
	try {
		switch (uni.getSystemInfoSync().platform) {
			case 'android':
				var main = plus.android.runtimeMainActivity();
				plus.android.invoke(getWebUtil(), 'onWxShare', main, type, data.title, data.desc, data.path, data.logo);
				break;
			case 'ios':
				//var wv = plus.ios.currentWebview();
				plus.ios.invoke(getWebUtil(), "onWxShare:title:desc:path:logo:",type, data.title, data.desc, data.path, data.logo);
				break;
			default:
				console.log('运行在开发者工具上');
				break;
		}
	} catch (e) {
		console.log(e);
	}
	// #endif
}
/**
 * 初始化萤石组件
 * @param {Object} token
 */
function updata() {
	switch (uni.getSystemInfoSync().platform) {
		case 'android':
			let androidurl = 'https://www.homeeyes.cn/app/livedemo/downloadapk.html';
			var main = plus.android.runtimeMainActivity();
			plus.android.invoke(getWebUtil(), 'updataVersion', main, androidurl);
			break;
		case 'ios':
			let iosurl = 'https://itunes.apple.com/us/app/%E5%AE%B6%E8%A7%86%E8%A3%85%E4%BF%AE%E7%9B%B4%E6%92%AD/id1439192101?mt=8&uo=4';
			var wv = plus.ios.currentWebview();
			plus.ios.invoke(getWebUtil(), 'updataVersion', wv, iosurl);
			break;
		default:
			console.log('运行在开发者工具上');
			break;
	}
}
function getKeyWordHeight() {
	let height = 0;
	switch (uni.getSystemInfoSync().platform) {
		case 'android':
			var main = plus.android.runtimeMainActivity();
			height = plus.android.invoke(getWebUtil(), 'getKeyWordHeight', main);
			return height;
		case 'ios':
			var wv = plus.ios.currentWebview();
			height = plus.ios.invoke(getWebUtil(), 'getKeyWordHeight', wv);
			return height;
		default:
			console.log('运行在开发者工具上');
			return height;
	}
}
function getVersionCode() {
	let version = 0;
	switch (uni.getSystemInfoSync().platform) {
		case 'android':
			var main = plus.android.runtimeMainActivity();
			version = plus.android.invoke(getWebUtil(), 'getVersionCode', main);
			return version;
		case 'ios':
			var wv = plus.ios.currentWebview();
			version = plus.ios.invoke(getWebUtil(), 'getVersionCode', wv);
			return version;
		default:
			console.log('运行在开发者工具上');
			return version;
	}
}
function getVersionCodeName() {
	let version = '1.1.0';
	switch (uni.getSystemInfoSync().platform) {
		case 'android':
			var main = plus.android.runtimeMainActivity();
			version = plus.android.invoke(getWebUtil(), 'getVersionCodeName', main);
			return version;
		case 'ios':
			var wv = plus.ios.currentWebview();
			version = plus.ios.invoke(getWebUtil(), 'getVersionCodeName', wv);
			return version;
		default:
			console.log('运行在开发者工具上');
			return version;
	}
}
function downFiles(url, isProgress) {
	let that = this;
	const downloadTask = uni.downloadFile({
		url: url,
		success: res => {
			if (res.statusCode === 200) {
				console.log('下载成功');
				if (isProgress) {
					uni.hideLoading();
				}
				let filePath = res.tempFilePath;
				that.installApk(filePath);
			}
		}
	});

	downloadTask.onProgressUpdate(res => {
		console.log('下载进度' + res.progress);
		console.log('已经下载的数据长度' + res.totalBytesWritten);
		console.log('预期需要下载的数据总长度' + res.totalBytesExpectedToWrite);
		if (isProgress) {
			let msg = '下载' + res.progress;
			uni.showLoading({
				title: msg
			});
		}
		// 测试条件，取消下载任务。
		if (res.progress > 50) {
			downloadTask.abort();
		}
	});
}
function statyUpdata(url, isProgress) {
	switch (uni.getSystemInfoSync().platform) {
		case 'android':
			this.downFiles(url, isProgress);
			break;
		case 'ios':
			this.updata();
			break;
		default:
			console.log('运行在开发者工具上');
			break;
	}
}
function installApk(path) {
	if (uni.getSystemInfoSync().platform == 'android') {
		var main = plus.android.runtimeMainActivity();
		version = plus.android.invoke(getWebUtil(), 'instalApk', main, path);
	}
}
export default {
	openplay,
	initSDK,
	getWebUtil,
	getToken,
	getAppkey,
	initNative,
	updata,
	onShare,
	getKeyWordHeight,
	getVersionCode,
	statyUpdata,
	installApk,
	downFiles,
	openWeb,
	getVersionCodeName
};