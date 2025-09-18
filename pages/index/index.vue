<template>
	<view class="content">
		<view class="header">
			<text class="title">融云RTC演示</text>
		</view>
		
		<view class="user-info">
			<text class="welcome">欢迎回来！</text>
			<text class="user-id">用户ID: {{currentUserId}}</text>
		</view>
		
		<view class="feature-cards">
			<view class="card primary-card" @click="goToMeeting">
				<view class="card-content">
					<view class="card-icon">🎤</view>
					<text class="card-title">音视频会议</text>
					<text class="card-desc">多人音视频会议</text>
				</view>
				<view class="card-arrow">></view>
			</view>
			
			<view class="card secondary-card" @click="goToLive">
				<view class="card-content">
					<view class="card-icon">🎥</view>
					<text class="card-title">音视频直播</text>
					<text class="card-desc">实时音视频直播</text>
				</view>
				<view class="card-arrow">></view>
			</view>
		</view>
		
		<view class="action-buttons">
			<button class="secondary-btn" @click="handleLogout">
				退出登录
			</button>
		</view>
	</view>
</template>

<script>
	import requestAndroidPermissions from '@/utils/permission.js'
	import IMEngineUtils from '@/utils/IMEngineUtils.js'
	import RCIMIWEngine from '@/uni_modules/RongCloud-IMWrapper-V2/js_sdk/RCIMEngine'
	import { RCIMIWConversationType } from '@/uni_modules/RongCloud-IMWrapper-V2/js_sdk/RCIMDefines.js' 
	export default {
		data() {
			return {
				currentUserId: '',
				imEngine:null
			}
		},
		onLoad() {
			// 检查登录状态
		 this.checkLoginStatus();
		},
		
		onShow() {
			const loginInfo = uni.getStorageSync('loginInfo');
			this.currentUserId = loginInfo.userId;
		},
		
		
		methods: {
			async checkLoginStatus() {
				try {
					const loginInfo = uni.getStorageSync('loginInfo')
					if (loginInfo) {
						this.currentUserId = loginInfo.userId;
						let token = loginInfo.token;
						let userId = loginInfo.userId;
						console.log(this.token);
					     await IMEngineUtils.connectIM(token,userId);
						 
					} else {
						console.log('checkLoginStatus');
						// 未登录，跳转到登录页
						uni.navigateTo({
							url: '/pages/login/login'
						})
					}
				} catch (error) {
					console.error('检查登录状态失败:', error)
					uni.navigateTo({
						url: '/pages/login/login'
					})
				}
			},
					
			/**
			 * 会议
			 */
			async goToMeeting() {
				console.log('开始权限申请...');
				
				try {
					// 申请权限
					const systemInfo = uni.getSystemInfoSync();
					const platform = systemInfo.platform; // 
					if (platform === 'android'){
						await requestAndroidPermissions();
					}
					console.log('权限申请完成，跳转到RTC页面');
					
					// 直接跳转到RTC页面，让系统自然处理权限问题
					uni.navigateTo({
						url: '/pages/rtc/meeting'
					});
				} catch (error) {
					console.error('权限申请异常：', error);
					// 即使有异常也跳转，让系统处理
					uni.navigateTo({
						url: '/pages/rtc/meeting'
					});
				}
			},
			
			/**
			 * 直播
			 */
			async goToLive() {
				try {
					// 申请权限
					const systemInfo = uni.getSystemInfoSync();
					const platform = systemInfo.platform; // 
					if (platform === 'android'){
						await requestAndroidPermissions();
					}
					console.log('权限申请完成，跳转到RTC页面');
					
					// 直接跳转到RTC页面，让系统自然处理权限问题
					uni.navigateTo({
						url: '/pages/rtc/live'
					});
				} catch (error) {
					console.error('权限申请异常：', error);
					// 即使有异常也跳转，让系统处理
					uni.navigateTo({
						url: '/pages/rtc/live'
					});
				}
			},
			
		/**
		 * 断开 IM 连接
		 */
		async handleLogout() {
				uni.showModal({
					title: '确认退出',
					content: '确定要退出登录吗？',
					success: async (res) => {
						if (res.confirm) {
							console.log(this.imEngine)
							await IMEngineUtils.disconnectIM();
							uni.showToast({
								title: '已退出登录',
								icon: 'success'
							})
							// 跳转到登录页
							uni.navigateTo({
								url: '/pages/login/login'
							})
						}
					}
				})
			},

		}
	}
</script>

<style>
	.content {
		height: 100vh;
		background: linear-gradient(135deg, #667eea 0%, #0195ff 100%);
		padding: 40rpx;
		display: flex;
		flex-direction: column;
		overflow: hidden;
		box-sizing: border-box;
	}

	.header {
		text-align: center;
		margin-bottom: 50rpx;
		margin-top: 60rpx;
	}

	.title {
		font-size: 48rpx;
		color: white;
		font-weight: bold;
		text-shadow: 0 4rpx 8rpx rgba(0, 0, 0, 0.2);
		letter-spacing: 2rpx;
	}

	.user-info {
		background: rgba(255, 255, 255, 0.15);
		backdrop-filter: blur(10rpx);
		border-radius: 20rpx;
		padding: 25rpx;
		margin-bottom: 50rpx;
		text-align: center;
		border: 1rpx solid rgba(255, 255, 255, 0.2);
		box-shadow: 0 8rpx 32rpx rgba(0, 0, 0, 0.1);
	}

	.welcome {
		font-size: 32rpx;
		color: white;
		font-weight: bold;
		display: block;
		margin-bottom: 12rpx;
		text-shadow: 0 2rpx 4rpx rgba(0, 0, 0, 0.2);
	}

	.user-id {
		font-size: 26rpx;
		color: rgba(255, 255, 255, 0.9);
		background: rgba(255, 255, 255, 0.1);
		padding: 8rpx 16rpx;
		border-radius: 20rpx;
		display: inline-block;
	}

	.feature-cards {
		display: flex;
		flex-direction: column;
		gap: 20rpx;
		margin-bottom: 10rpx;
	}

	.primary-card {
		background: linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(255, 255, 255, 0.9) 100%);
		border-radius: 20rpx;
		box-shadow: 0 12rpx 40rpx rgba(0, 0, 0, 0.15);
		transition: all 0.3s ease;
		border: 1rpx solid rgba(255, 255, 255, 0.3);
		display: flex;
		align-items: center;
		height: 320rpx;
	}


	.secondary-card {
		background: rgba(255, 255, 255, 0.9);
		border-radius: 18rpx;
		box-shadow: 0 8rpx 24rpx rgba(0, 0, 0, 0.12);
		transition: all 0.3s ease;
		border: 1rpx solid rgba(255, 255, 255, 0.3);
		display: flex;
		align-items: center;
		height: 320rpx;
	}


	.primary-card:active,
	.secondary-card:active {
		transform: scale(0.98);
		box-shadow: 0 8rpx 24rpx rgba(0, 0, 0, 0.2);
	}

	/* 箭头样式 */
	.card-arrow {
		font-size: 50rpx;
		color: #667eea;
		font-weight: bold;
		margin-right: 50rpx;
		transition: all 0.3s ease;
	}

	.primary-card:active .card-arrow,
	.secondary-card:active .card-arrow {
		transform: translateX(10rpx);
		color: #764ba2;
	}

	/* 卡片内容容器 */
	.card-content {
		flex: 1;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		padding: 40rpx 0;
	}

	.card-icon {
		font-size: 80rpx;
		margin-bottom: 20rpx;
		text-align: center;
		filter: drop-shadow(0 4rpx 8rpx rgba(0, 0, 0, 0.1));
	}

	.card-title {
		font-size: 36rpx;
		color: #333;
		font-weight: bold;
		display: block;
		margin-bottom: 12rpx;
		text-align: center;
	}

	.card-desc {
		font-size: 28rpx;
		color: #666;
		text-align: center;
		line-height: 1.3;
		display: block;
	}

	.action-buttons {
		display: flex;
		flex-direction: column;
		gap: 20rpx;
		margin-top: 150rpx;
	}

	.secondary-btn {
		background: rgba(255, 255, 255, 0.15);
		color: white;
		border: 2rpx solid rgba(255, 255, 255, 0.3);
		border-radius: 15rpx;
		height: 90rpx;
		width: 100%;
		font-size: 30rpx;
		backdrop-filter: blur(10rpx);
		transition: all 0.3s ease;
	}

	.secondary-btn:active {
		transform: scale(0.98);
		background: rgba(255, 255, 255, 0.25);
		border-color: rgba(255, 255, 255, 0.5);
	}
</style>
