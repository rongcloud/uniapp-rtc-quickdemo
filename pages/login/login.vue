<template>
	<view class="login-container">
		<view class="login-box">
			<view class="logo-area">
				<text class="app-title">融云RTC演示</text>
			</view>
			
			<view class="input-area">
				<view class="input-group">
					<text class="label">选择用户</text>
					<view class="custom-select" @click="toggleDropdown">
						<view class="select-display">
							<view class="user-info">
								<text class="user-avatar">{{ selectedUser.avatar }}</text>
								<view class="user-details">
									<text class="user-name">{{ selectedUser.name }}</text>
									<text class="user-id">ID: {{ selectedUser.id }}</text>
								</view>
							</view>
							<view class="select-arrow" :class="{ 'rotated': isDropdownOpen }">
								▼
							</view>
						</view>
						
						<!-- 下拉选项 -->
						<view class="dropdown-options" v-if="isDropdownOpen">
							<view 
								v-for="(user, index) in userOptions" 
								:key="user.id"
								class="dropdown-option"
								:class="{ 'active': index === selectedUserIndex }"
								@click.stop="selectUser(index)"
							>
								<text class="option-avatar">{{ user.avatar }}</text>
								<view class="option-details">
									<text class="option-name">{{ user.name }}</text>
									<text class="option-id">ID: {{ user.id }}</text>
									<text class="option-desc">{{ user.description }}</text>
								</view>
							</view>
						</view>
					</view>
				</view>
			</view>
			
			<view class="button-area">
				<button 
					class="login-btn" 
					@click="handleLogin"
					:loading="isLoading"
				>
					{{ isLoading ? '连接中...' : '连接' }}
				</button>
			</view>
		</view>
	</view>
</template>

<script>

import appConfig from '@/config/RCConfig.js'
import IMEngineUtils from '@/utils/IMEngineUtils.js'
import RCIMIWEngine from "@/uni_modules/RongCloud-IMWrapper-V2/js_sdk/RCIMEngine";

export default {
	data() {
		return {
			selectedUserIndex: 0,
			userOptions: [],
			isDropdownOpen: false,
			isLoading: false,
			imEngine: null,
			rtcEngine: null,
			engine:null
		}
	},
	onLoad() {
		this.initUserOptions();
	},
	
	onShow() {
		// 页面显示时关闭下拉框
		this.isDropdownOpen = false;
	},
	
	computed: {
		selectedUser() {
			return this.userOptions[this.selectedUserIndex] || {};
		}
	},
	methods: {
		initUserOptions() {
			// 从配置文件获取用户列表
			this.userOptions = appConfig.testUsers.map(user => ({
				...user,
				userId: user.id // 保持兼容性
			}));
			console.log('初始化用户选项:', this.userOptions);
		},
		
		toggleDropdown() {
			this.isDropdownOpen = !this.isDropdownOpen;
		},
		
		selectUser(index) {
			this.selectedUserIndex = index;
			this.isDropdownOpen = false;
			console.log('选择用户:', this.userOptions[index]);
		},
		
		async handleLogin() {
			await this.connectIM()
		},
		
		//连接IM
		async connectIM(){
			try {
				const selectedUser = this.userOptions[this.selectedUserIndex];
				const token = selectedUser.token;
				const userId = selectedUser.userId;
				
				console.log('选择的用户信息:', selectedUser);
				console.log('使用的Token:', token);
				console.log('用户ID:', userId);

				// 设置加载状态
				this.isLoading = true;
				// 调用connect方法
				await IMEngineUtils.connectIM(token,userId);
				
			} catch (error) {
				console.error('连接IM时发生错误:', error);
				uni.showToast({
					title: '连接失败: ' + error.message,
					icon: 'error'
				})
			} finally {
				this.isLoading = false;
			}
		},
	}
}
</script>

<style scoped>
.login-container {
	min-height: 100vh;
	background: linear-gradient(135deg, #667eea 0%, #0195ff 100%);
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 40rpx;
}

.login-box {
	background: white;
	border-radius: 20rpx;
	padding: 60rpx 40rpx;
	width: 100%;
	max-width: 600rpx;
	box-shadow: 0 20rpx 40rpx rgba(0, 0, 0, 0.1);
}

.logo-area {
	text-align: center;
	margin-bottom: 60rpx;
}

.logo {
	width: 120rpx;
	height: 120rpx;
	margin-bottom: 20rpx;
}

.app-title {
	font-size: 36rpx;
	font-weight: bold;
	color: #333;
}

.input-area {
	margin-bottom: 60rpx;
}

.input-group {
	margin-bottom: 30rpx;
}

.label {
	display: block;
	font-size: 28rpx;
	color: #666;
	margin-bottom: 15rpx;
}

.input {
	width: 100%;
	height: 80rpx;
	border: 2rpx solid #e0e0e0;
	border-radius: 10rpx;
	padding: 0 20rpx;
	font-size: 28rpx;
	background: #f8f9fa;
	box-sizing: border-box;
}

.input:focus {
	border-color: #667eea;
	background: white;
}

/* 自定义下拉框样式 */
.custom-select {
	position: relative;
	width: 100%;
}

.select-display {
	display: flex;
	align-items: center;
	justify-content: space-between;
	width: 100%;
	height: 80rpx;
	border: 2rpx solid #e0e0e0;
	border-radius: 10rpx;
	background: #f8f9fa;
	padding: 0 20rpx;
	box-sizing: border-box;
	cursor: pointer;
	transition: all 0.3s ease;
}

.select-display:hover {
	border-color: #667eea;
	background: white;
	box-shadow: 0 4rpx 12rpx rgba(102, 126, 234, 0.15);
}

.user-info {
	display: flex;
	align-items: center;
	flex: 1;
}

.user-avatar {
	font-size: 32rpx;
	margin-right: 16rpx;
}

.user-details {
	display: flex;
	flex-direction: column;
}

.user-name {
	font-size: 28rpx;
	color: #333;
	font-weight: 500;
	line-height: 1.2;
}

.user-id {
	font-size: 22rpx;
	color: #666;
	line-height: 1.2;
	margin-top: 4rpx;
}

.select-arrow {
	font-size: 20rpx;
	color: #999;
	transition: transform 0.3s ease;
}

.select-arrow.rotated {
	transform: rotate(180deg);
}

/* 下拉选项样式 */
.dropdown-options {
	position: absolute;
	top: 100%;
	left: 0;
	right: 0;
	background: white;
	border: 2rpx solid #e0e0e0;
	border-top: none;
	border-radius: 0 0 10rpx 10rpx;
	box-shadow: 0 8rpx 24rpx rgba(0, 0, 0, 0.12);
	z-index: 1000;
	max-height: 400rpx;
	overflow-y: auto;
}

.dropdown-option {
	display: flex;
	align-items: center;
	padding: 20rpx;
	border-bottom: 1rpx solid #f0f0f0;
	transition: background-color 0.2s ease;
	cursor: pointer;
}

.dropdown-option:last-child {
	border-bottom: none;
}

.dropdown-option:hover {
	background-color: #f8f9fa;
}

.dropdown-option.active {
	background-color: #e8f0fe;
	border-left: 4rpx solid #667eea;
}

.option-avatar {
	font-size: 28rpx;
	margin-right: 16rpx;
}

.option-details {
	display: flex;
	flex-direction: column;
	flex: 1;
}

.option-name {
	font-size: 26rpx;
	color: #333;
	font-weight: 500;
	line-height: 1.2;
}

.option-id {
	font-size: 20rpx;
	color: #666;
	line-height: 1.2;
	margin-top: 4rpx;
}

.option-desc {
	font-size: 18rpx;
	color: #999;
	line-height: 1.2;
	margin-top: 4rpx;
	font-style: italic;
}

.button-area {
	text-align: center;
}

.login-btn {
	width: 100%;
	height: 80rpx;
	background: linear-gradient(135deg, #667eea 0%, #0195ff 100%);
	color: white;
	border: none;
	border-radius: 10rpx;
	font-size: 32rpx;
	font-weight: bold;
}

.login-btn:disabled {
	background: #ccc;
	color: #999;
}

.login-btn:not(:disabled):active {
	transform: scale(0.98);
}
</style> 