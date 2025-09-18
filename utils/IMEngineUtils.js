import appConfig from '@/config/RCConfig.js'
import RCIMIWEngine from "@/uni_modules/RongCloud-IMWrapper-V2/js_sdk/RCIMEngine";
const globalState = {
	// 设置 IM 引擎
	setIMEngine(engine) {
		try {
			const app = getApp();
			if (!app.globalData) {
				app.globalData = {};
			}
			app.globalData.imEngine = engine;
			console.log('全局 IM 引擎已设置:', engine);
		} catch (e) {
			console.error('设置 IM 引擎失败:', e);
		}
	},

	// 获取 IM 引擎
	async getIMEngine() {
		try {
			const app = getApp();
			let engine = app.globalData?.imEngine;
			if (!engine) {
				console.log(engine)
				const options = {}  //  IM  引擎配置 参考文档：https://docs.rongcloud.cn/uni-app-imlib/engine_config
				engine = await RCIMIWEngine.create(appConfig.appKey, options)
				console.log(engine)
			}
			engine.changeLogLevel(4)
			console.log('从globalData获取 IM 引擎:', engine);
			return engine;
		} catch (e) {
			console.error('获取 IM 引擎失败:', e);
			return null;
		}
	},

	// 清理所有状态
	clear() {
		try {
			uni.removeStorageSync('loginInfo')
			const app = getApp();
			if (app.globalData) {
				app.globalData.imEngine = null;
			}
			console.log('全局状态已清理');
		} catch (e) {
			console.error('清理全局状态失败:', e);
		}
	},

	// 连接 IM
	async connectIM(token,userId) {
		const imEngine = await this.getIMEngine();
		if (imEngine) {
			try {
				let callback = {
					onDatabaseOpened:(res) => {
						console.log('数据库打开回调:', res);
					},
					onConnected:(res) => {
						console.log('连接回调:', res);
						if (res.code == 0){
							uni.showToast({
								title: '登录成功',
								icon: 'none'
							})
							let loginInfo = {
								userId: userId,
								token: token
							}
							uni.setStorageSync('loginInfo', loginInfo)
							
							// 延迟跳转，确保状态保存完成
							setTimeout(() => {
								uni.navigateBack({
									delta:1
								})
							}, 200);
							return
						} else {
							uni.showToast({
								title: '连接失败: ' + res.code,
								icon: 'error'
							})
						}
					}
				};
				const code = await imEngine.connect(token, 10, callback);
				console.log('IM 连接结果:', code);
				return code;
			} catch (error) {
				console.error('连接 IM 失败:', error);
				throw error;
			}
		} else {
			throw new Error('IM 引擎未初始化');
		}
	},

	// 断开 IM 连接
	async disconnectIM() {
		const imEngine = await this.getIMEngine();
		if (imEngine) {
			try {
			 await imEngine.disconnect(false);
			 this.clear()
			} catch (error) {
				console.error('断开 IM 连接失败:', error);
			}
		}
	},
};

export default globalState;