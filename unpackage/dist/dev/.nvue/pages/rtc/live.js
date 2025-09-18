import { _ as _export_sfc, f as formatAppLog, R as RCRTCEngine, b as RCRTCMediaType, a as RCRTCCamera, e as RCRTCVideoFps, g as RCRTCLiveMixLayoutMode, h as RCRTCAudioMixingMode, r as resolveEasycom, d as __easycom_0 } from "../../RCRTCEngine.js";
import { resolveDynamicComponent, openBlock, createElementBlock, createElementVNode, createCommentVNode, toDisplayString, createBlock, normalizeClass } from "vue";
const _style_0 = { "rtc-container": { "": { "position": "absolute", "top": 0, "left": 0, "right": 0, "bottom": 0, "backgroundColor": "#f5f7fa", "display": "flex", "flexDirection": "column" } }, "status-bar-placeholder": { "": { "height": 44, "backgroundColor": "#667eea" } }, "header": { "": { "backgroundColor": "#667eea", "boxShadow": "0 4rpx 12rpx rgba(102, 126, 234, 0.15)" } }, "title-row": { "": { "height": "88rpx", "paddingLeft": "30rpx", "paddingRight": "30rpx", "display": "flex", "flexDirection": "row", "alignItems": "center", "position": "relative" } }, "nav-left": { "": { "display": "flex", "flexDirection": "row", "alignItems": "center", "marginRight": "30rpx" } }, "nav-left-btn": { "": { "backgroundColor": "rgba(0,0,0,0)", "borderWidth": 0, "borderColor": "#000000", "paddingTop": 0, "paddingRight": 0, "paddingBottom": 0, "paddingLeft": 0, "marginTop": 0, "marginRight": "30rpx", "marginBottom": 0, "marginLeft": 0, "display": "flex", "flexDirection": "row", "alignItems": "center" } }, "back-button-container": { "": { "position": "absolute", "top": 50, "left": "30rpx", "transform": "translateY(-10%)", "zIndex": 1e3 } }, "back-text": { "": { "fontSize": "28rpx", "color": "#FFFFFF" } }, "nav-title": { "": { "position": "absolute", "left": 0, "right": 0, "fontSize": "36rpx", "fontWeight": "bold", "color": "#FFFFFF", "textAlign": "center" } }, "room-info-text": { "": { "fontSize": "26rpx", "color": "rgba(255,255,255,0.9)", "backgroundColor": "rgba(255,255,255,0.1)", "paddingTop": "8rpx", "paddingRight": "16rpx", "paddingBottom": "8rpx", "paddingLeft": "16rpx", "borderRadius": "20rpx" } }, "user-info-text": { "": { "fontSize": "26rpx", "color": "rgba(255,255,255,0.9)", "backgroundColor": "rgba(255,255,255,0.1)", "paddingTop": "8rpx", "paddingRight": "16rpx", "paddingBottom": "8rpx", "paddingLeft": "16rpx", "borderRadius": "20rpx" } }, "video-container": { "": { "paddingTop": "32rpx", "paddingRight": "32rpx", "paddingBottom": "20rpx", "paddingLeft": "32rpx", "display": "flex", "flexDirection": "column" } }, "video-card": { "": { "backgroundColor": "#FFFFFF", "borderRadius": "20rpx", "paddingTop": "20rpx", "paddingRight": "20rpx", "paddingBottom": "20rpx", "paddingLeft": "20rpx", "marginBottom": 0, "boxShadow": "0 4rpx 12rpx rgba(0, 0, 0, 0.08)" } }, "video-card-header": { "": { "display": "flex", "flexDirection": "row", "alignItems": "center", "marginBottom": "20rpx" } }, "card-title": { "": { "fontSize": "32rpx", "color": "#333333", "fontWeight": "bold", "marginLeft": "12rpx" } }, "video-row": { "": { "display": "flex", "flexDirection": "row" } }, "video-item": { "": { "flex": 1, "display": "flex", "flexDirection": "column", "marginTop": 0, "marginRight": "10rpx", "marginBottom": 0, "marginLeft": "10rpx" } }, "video-icon": { "": { "fontSize": "24rpx", "marginRight": "12rpx" } }, "video-content": { "": { "flex": 1 } }, "video-placeholder": { "": { "height": "200rpx", "backgroundColor": "#f8f9fa", "borderRadius": "12rpx", "display": "flex", "alignItems": "center", "justifyContent": "center", "borderWidth": "1rpx", "borderStyle": "solid", "borderColor": "#dddddd" } }, "placeholder-text": { "": { "color": "#6c757d", "fontSize": "24rpx", "textAlign": "center" } }, "video-player": { "": { "flex": 1, "height": "200rpx", "borderRadius": "12rpx", "backgroundColor": "#000000" } }, "control-panel": { "": { "backgroundColor": "#FFFFFF", "paddingTop": "30rpx", "paddingRight": "30rpx", "paddingBottom": "30rpx", "paddingLeft": "30rpx", "marginTop": "20rpx", "marginRight": "32rpx", "marginBottom": "32rpx", "marginLeft": "32rpx", "borderRadius": "25rpx", "boxShadow": "0 8rpx 24rpx rgba(0, 0, 0, 0.1)", "borderWidth": "1rpx", "borderStyle": "solid", "borderColor": "rgba(255,255,255,0.8)" } }, "room-info": { "": { "flexDirection": "row", "alignItems": "center", "marginBottom": "30rpx", "backgroundColor": "#f8f9fa", "paddingTop": "20rpx", "paddingRight": "20rpx", "paddingBottom": "20rpx", "paddingLeft": "20rpx", "borderRadius": "15rpx", "borderWidth": "1rpx", "borderStyle": "solid", "borderColor": "#e9ecef" } }, "room-label": { "": { "fontSize": "28rpx", "color": "#495057", "marginRight": "20rpx", "width": "120rpx", "fontWeight": "500" } }, "room-input": { "": { "flex": 1, "height": "70rpx", "borderWidth": 0, "borderStyle": "solid", "borderColor": "#000000", "borderRadius": "12rpx", "paddingTop": 0, "paddingRight": "20rpx", "paddingBottom": 0, "paddingLeft": "20rpx", "fontSize": "28rpx", "backgroundColor": "#FFFFFF", "boxShadow": "0 2rpx 8rpx rgba(0, 0, 0, 0.05)" } }, "button-row": { "": { "display": "flex", "flexDirection": "row", "marginBottom": "24rpx" } }, "control-btn": { "": { "flex": 1, "height": "88rpx", "borderRadius": "18rpx", "borderWidth": 0, "borderStyle": "solid", "borderColor": "#000000", "position": "relative", "overflow": "hidden", "marginTop": 0, "marginRight": "8rpx", "marginBottom": 0, "marginLeft": "8rpx", "display": "flex", "alignItems": "center", "justifyContent": "center", "marginLeft:first-child": 0, "marginRight:last-child": 0 } }, "btn-text": { "": { "fontSize": 12, "fontWeight": "bold", "textAlign": "center", "color": "#FFFFFF" }, ".join-btn.disabled ": { "color": "#666666" }, ".leave-btn.disabled ": { "color": "#666666" } }, "join-btn": { "": { "backgroundColor": "#669eea", "color": "#FFFFFF", "boxShadow": "0 4rpx 12rpx rgba(102, 126, 234, 0.3)" }, ".disabled": { "backgroundColor": "#cccccc", "boxShadow": "none" } }, "leave-btn": { "": { "backgroundColor": "#ff6b6b", "color": "#FFFFFF", "boxShadow": "0 4rpx 12rpx rgba(255, 107, 107, 0.3)" }, ".disabled": { "backgroundColor": "#cccccc", "boxShadow": "none" } }, "rtc-btn": { "": { "backgroundColor": "#669eea", "color": "#FFFFFF", "boxShadow": "0 4rpx 12rpx rgba(40, 167, 69, 0.3)" } }, "debug-btn": { "": { "backgroundColor": "#6c757d", "color": "#FFFFFF", "boxShadow": "0 4rpx 12rpx rgba(108, 117, 125, 0.3)", "backgroundColor:active": "#003a6c", "boxShadow:active": "0 4rpx 12rpx rgba(73, 80, 87, 0.4)" } }, "status-bar": { "": { "backgroundColor": "#343a40", "paddingTop": "24rpx", "paddingRight": "40rpx", "paddingBottom": "24rpx", "paddingLeft": "40rpx", "marginTop": "20rpx", "marginRight": "32rpx", "marginBottom": 0, "marginLeft": "32rpx", "borderRadius": "15rpx", "boxShadow": "0 4rpx 12rpx rgba(0, 0, 0, 0.15)", "position": "relative", "overflow": "hidden" } }, "status-text": { "": { "color": "#FFFFFF", "fontSize": "26rpx", "textAlign": "center", "fontWeight": "500" } } };
const _sfc_main = {
  data() {
    return {
      currentUserId: "",
      roomId: "9991",
      isInRoom: false,
      isJoining: false,
      isAudienceJoining: false,
      isLocalVideoReady: false,
      isRemoteVideoReady: false,
      isMixRemoteVideoReady: false,
      isCameraOn: true,
      isMicrophoneOn: true,
      isSpeakerOn: true,
      statusText: "准备就绪",
      rtcEngine: null,
      _isDestroyed: false,
      _isInitialized: false,
      _isCleaning: false,
      // 添加清理标志，防止重复清理
      roomJoinedListener: null,
      remoteUserId: "",
      isRemoteStreams: false,
      isMixStreams: false,
      userRole: null,
      showBackButton: false
      // 是否显示返回按钮
    };
  },
  onLoad() {
    formatAppLog("log", "at pages/rtc/live.nvue:189", "=== Live 页面 onLoad 触发 ===");
    const platform = uni.getSystemInfoSync().platform;
    this.showBackButton = platform === "android";
    formatAppLog("log", "at pages/rtc/live.nvue:195", "当前平台:", platform, "显示返回按钮:", this.showBackButton);
    this.initRTCEngine();
    const loginInfo = uni.getStorageSync("loginInfo");
    if (loginInfo) {
      this.currentUserId = loginInfo.userId;
      formatAppLog("log", "at pages/rtc/live.nvue:207", this.currentUserId);
    }
  },
  onShow() {
    formatAppLog("log", "at pages/rtc/live.nvue:212", "onShow - 页面显示 (重新进入页面)");
    this.initRTCEngine();
  },
  onHide() {
    formatAppLog("log", "at pages/rtc/live.nvue:218", "onHide - 页面隐藏 (iOS侧滑返回会触发)");
    this.forceCleanup();
  },
  onBackPress() {
    formatAppLog("log", "at pages/rtc/live.nvue:224", "onBackPress - 拦截返回操作");
    this._isDestroyed = true;
    this.forceCleanup();
    return false;
  },
  methods: {
    /**
     * 初始化RTC引擎    具体参考文档：https://docs.rongcloud.cn/uni-app-rtclib/engine-setup
     */
    initRTCEngine() {
      try {
        formatAppLog("log", "at pages/rtc/live.nvue:237", "=== 开始初始化RTC引擎 ===");
        if (this.rtcEngine) {
          formatAppLog("log", "at pages/rtc/live.nvue:241", "清理旧的RTC引擎...");
          try {
            this.rtcEngine.destroy();
          } catch (e) {
            formatAppLog("log", "at pages/rtc/live.nvue:245", "清理旧引擎时出错:", e);
          }
          this.rtcEngine = null;
        }
        let audioSetup = {};
        let videoSetup = {
          enableTinyStream: false
        };
        let setup = {
          audioSetup,
          videoSetup
        };
        this.rtcEngine = RCRTCEngine.create(setup);
        formatAppLog("log", "at pages/rtc/live.nvue:259", "RTC引擎创建结果:", !!this.rtcEngine);
        if (this.rtcEngine) {
          this.setRoomListener();
          this.setdLiveAudienceRoomListener();
          this.setAudioMix();
          this._isDestroyed = false;
          this._isInitialized = true;
          formatAppLog("log", "at pages/rtc/live.nvue:268", "=== RTC引擎初始化完成 ===");
        } else {
          throw new Error("RTC引擎创建失败，返回null");
        }
      } catch (error) {
        formatAppLog("error", "at pages/rtc/live.nvue:274", "RTC引擎创建失败:", error);
        formatAppLog("error", "at pages/rtc/live.nvue:275", "错误详情:", error.message, error.stack);
        this.rtcEngine = null;
        this._isInitialized = false;
        this._isDestroyed = true;
        uni.showToast({
          title: "RTC引擎初始化失败",
          icon: "error"
        });
      }
    },
    /**
     * 房间事件监听
     */
    setRoomListener() {
      this.rtcEngine.setOnUserJoinedListener(({
        userId,
        roomId
      }) => {
        formatAppLog("log", "at pages/rtc/live.nvue:300", userId);
        formatAppLog("log", "at pages/rtc/live.nvue:301", roomId);
        this.remoteUserId = userId;
        uni.showToast({
          title: `${userId}加入房间`,
          icon: "none"
        });
      });
      this.rtcEngine.setOnRemotePublishedListener(({
        userId,
        roomId,
        type
      }) => {
        formatAppLog("log", "at pages/rtc/live.nvue:321", userId);
        formatAppLog("log", "at pages/rtc/live.nvue:322", roomId);
        this.isRemoteStreams = true;
        uni.showToast({
          title: `${userId}发布资源`,
          icon: "none"
        });
      });
      this.rtcEngine.setOnRemoteLiveRoleSwitchedListener(({
        roomId,
        userId,
        role
      }) => {
        this.remoteUserId = userId;
        uni.showToast({
          title: `${userId}切换身份为${role}`
        });
      });
      this.rtcEngine.setOnUserLeftListener(({
        userId,
        roomId
      }) => {
        this.isRemoteVideoReady = false;
      });
    },
    /**
     * 观众 房间状态事件设置
     */
    setdLiveAudienceRoomListener() {
      this.rtcEngine.setOnRemoteLiveMixPublishedListener(({
        type
      }) => {
        this.isMixStreams = true;
        uni.showToast({
          title: "主播发布合流",
          icon: "none"
        });
      });
      this.rtcEngine.setOnRemoteLiveMixUnpublishedListener(({
        type
      }) => {
        this.isMixStreams = false;
        uni.showToast({
          title: "主播发布合流",
          icon: "none"
        });
      });
    },
    /**
     * 混音相关回调
     */
    setAudioMix() {
      this.rtcEngine.setOnAudioMixingStartedListener(() => {
        formatAppLog("log", "at pages/rtc/live.nvue:397", "setOnAudioMixingStartedListener");
      });
      this.rtcEngine.setOnAudioMixingPausedListener(() => {
        formatAppLog("log", "at pages/rtc/live.nvue:403", "setOnAudioMixingPausedListener");
      });
      this.rtcEngine.setOnAudioMixingStoppedListener(() => {
        formatAppLog("log", "at pages/rtc/live.nvue:409", "setOnAudioMixingStoppedListener");
      });
      this.rtcEngine.setOnAudioMixingFinishedListener(() => {
        formatAppLog("log", "at pages/rtc/live.nvue:415", "setOnAudioMixingFinishedListener");
      });
    },
    /**
     * 返回上一页
     */
    goBack() {
      formatAppLog("log", "at pages/rtc/live.nvue:423", "goBack - 返回上一页");
      this.forceCleanup();
      uni.navigateBack({
        delta: 1
      });
    },
    /**
     * 加入房间    
     * role 身份
     * 会议类型身份：
     * RCRTCRole.MeetingMember     0 
     * 直播类型身份：
     * RCRTCRole.LiveBroadcaster  主播身份 1 
     * RCRTCRole.LiveAudience  观众身份  2 
     *  
     * 
     * type：媒体类型
     * RCRTCMediaType.AudioVideo  音视频
     * RCRTCMediaType.Audio  仅音频 0
     * RCRTCMediaType.Video  仅视频 1
     */
    async handleJoinRoom(role) {
      try {
        formatAppLog("log", "at pages/rtc/live.nvue:448", "=== 开始加入房间 ===");
        this.userRole = role;
        if (this._isDestroyed) {
          formatAppLog("log", "at pages/rtc/live.nvue:452", "组件已销毁，取消加入房间");
          return;
        }
        if (role === 1) {
          this.isJoining = true;
        } else if (role === 2) {
          this.isAudienceJoining = true;
        }
        this.statusText = "正在加入房间...";
        let joinType = {
          type: RCRTCMediaType.AudioVideo,
          role
        };
        if (this.roomJoinedListener) {
          this.rtcEngine.setOnRoomJoinedListener(null);
          this.roomJoinedListener = null;
        }
        this.roomJoinedListener = ({
          code,
          message
        }) => {
          if (this._isDestroyed) {
            formatAppLog("log", "at pages/rtc/live.nvue:478", "组件已销毁，忽略回调");
            return;
          }
          if (code === 0) {
            this.isInRoom = true;
            this.statusText = "已加入房间";
            if (this.userRole === 1) {
              this.rtcEngine.enableCamera(true, RCRTCCamera.Front);
              this.isLocalVideoReady = true;
              setTimeout(() => {
                if (this._isDestroyed)
                  return;
                if (this.$refs.localView && this.$refs.localView.getNativeViewRef) {
                  this.rtcEngine.setLocalView(this.$refs.localView.getNativeViewRef(), (code2) => {
                    formatAppLog("log", "at pages/rtc/live.nvue:494", "设置本地视图结果:", code2);
                    if (code2 === 0) {
                      formatAppLog("log", "at pages/rtc/live.nvue:496", "本地视图设置成功");
                    } else {
                      formatAppLog("error", "at pages/rtc/live.nvue:498", "本地视图设置失败:", code2);
                    }
                  });
                } else {
                  formatAppLog("error", "at pages/rtc/live.nvue:502", "localView 引用不存在或方法不可用");
                }
              }, 100);
            }
          } else {
            this.statusText = "加入房间失败";
            formatAppLog("error", "at pages/rtc/live.nvue:508", "加入房间失败:", code, message);
            uni.showToast({
              title: "加入房间失败",
              icon: "none"
            });
          }
          if (!this._isDestroyed) {
            this.isJoining = false;
            this.isAudienceJoining = false;
          }
        };
        this.rtcEngine.setOnRoomJoinedListener(this.roomJoinedListener);
        this.rtcEngine.joinRoom(this.roomId, joinType);
      } catch (error) {
        formatAppLog("error", "at pages/rtc/live.nvue:528", "加入房间异常:", error);
        if (!this._isDestroyed) {
          this.isJoining = false;
          this.statusText = "加入房间异常";
        }
      }
    },
    /**
     * 离开房间
     */
    async handleLeaveRoom() {
      try {
        if (this.rtcEngine) {
          this.rtcEngine.leaveRoom();
          this.isInRoom = false;
          this.isLocalVideoReady = false;
          this.isRemoteVideoReady = false;
          this.isMixRemoteVideoReady = false;
          this.statusText = "已离开房间";
          uni.showToast({
            title: "已离开房间",
            icon: "success"
          });
        }
      } catch (error) {
        formatAppLog("error", "at pages/rtc/live.nvue:555", "离开房间失败:", error);
        uni.showModal({
          title: "操作失败",
          content: "离开房间时出现异常，请重试",
          showCancel: false,
          confirmText: "确定",
          confirmColor: "#667eea"
        });
      }
    },
    /**
     * 发布资源
     */
    publishStreams() {
      if (this._isDestroyed || !this.rtcEngine) {
        formatAppLog("log", "at pages/rtc/live.nvue:571", "组件已销毁或RTC引擎未初始化，取消发布");
        return;
      }
      formatAppLog("log", "at pages/rtc/live.nvue:575", "开始发布音视频资源...");
      this.statusText = "正在发布资源...";
      try {
        this.rtcEngine.setOnPublishedListener(({
          type,
          code,
          message
        }) => {
          if (this._isDestroyed) {
            formatAppLog("log", "at pages/rtc/live.nvue:585", "组件已销毁，忽略发布回调");
            return;
          }
          if (code === 0) {
            this.rtcEngine.setLiveMixVideoBitrate(2200);
            this.rtcEngine.setLiveMixVideoResolution(720, 1280);
            this.rtcEngine.setLiveMixVideoFps(RCRTCVideoFps.Fps15);
            this.rtcEngine.setLiveMixLayoutMode(RCRTCLiveMixLayoutMode.Adaptive);
            this.statusText = "音视频发布成功";
            formatAppLog("log", "at pages/rtc/live.nvue:596", "音视频发布成功");
          } else {
            this.statusText = "音视频发布失败";
            formatAppLog("error", "at pages/rtc/live.nvue:599", "发布失败:", code, message);
          }
        });
        this.rtcEngine.publish(RCRTCMediaType.AudioVideo);
      } catch (error) {
        formatAppLog("error", "at pages/rtc/live.nvue:606", "发布资源异常:", error);
        this.statusText = "发布资源异常";
      }
    },
    /**
     * 取消发布资源
     */
    unPublishStreams() {
      if (this._isDestroyed || !this.rtcEngine) {
        formatAppLog("log", "at pages/rtc/live.nvue:616", "组件已销毁或RTC引擎未初始化，取消操作");
        return;
      }
      formatAppLog("log", "at pages/rtc/live.nvue:620", "开始取消发布音视频资源...");
      this.statusText = "正在取消发布...";
      try {
        this.rtcEngine.setOnUnpublishedListener(({
          type,
          code,
          message
        }) => {
          if (this._isDestroyed) {
            formatAppLog("log", "at pages/rtc/live.nvue:630", "组件已销毁，忽略取消发布回调");
            return;
          }
          if (code === 0) {
            this.statusText = "取消音视频发布成功";
            formatAppLog("log", "at pages/rtc/live.nvue:636", "取消音视频发布成功");
          } else {
            this.statusText = "取消音视频发布失败";
            formatAppLog("error", "at pages/rtc/live.nvue:639", "取消发布失败:", code, message);
          }
        });
        this.rtcEngine.unpublish(RCRTCMediaType.AudioVideo);
      } catch (error) {
        formatAppLog("error", "at pages/rtc/live.nvue:646", "取消发布资源异常:", error);
        this.statusText = "取消发布资源异常";
      }
    },
    /**
     * 主播订阅资源
     */
    subscribeStreams() {
      if (this.remoteUserId && this.userRole === 1) {
        formatAppLog("log", "at pages/rtc/live.nvue:656", this.remoteUserId);
        this.rtcEngine.subscribe(this.remoteUserId, RCRTCMediaType.AudioVideo);
        this.rtcEngine.setOnSubscribedListener(({
          userId,
          type,
          code,
          message
        }) => {
          if (code === 0) {
            this.enableSpeaker(true);
            formatAppLog("log", "at pages/rtc/live.nvue:669", "订阅成功");
            this.isRemoteVideoReady = true;
            setTimeout(() => {
              if (this.$refs.remoteView && this.$refs.remoteView.getNativeViewRef) {
                this.rtcEngine.setRemoteView(this.remoteUserId, this.$refs.remoteView.getNativeViewRef(), (code2) => {
                  if (code2 === 0) {
                    formatAppLog("log", "at pages/rtc/live.nvue:677", "设置远端视图成功");
                  } else {
                    formatAppLog("log", "at pages/rtc/live.nvue:680", "设置远端视图失败");
                  }
                });
              } else {
                formatAppLog("error", "at pages/rtc/live.nvue:684", "remoteView 引用不存在或方法不可用");
              }
            }, 100);
          } else {
            formatAppLog("log", "at pages/rtc/live.nvue:689", "订阅失败");
          }
        });
      } else {
        uni.showToast({
          title: "没人发布资源或者身份不对",
          icon: "error"
        });
      }
    },
    /**
     * 观众订阅合流资源
     */
    subscribeLiveMixStream() {
      formatAppLog("log", "at pages/rtc/live.nvue:707", this.isMixStreams);
      if (this.isMixStreams) {
        this.rtcEngine.subscribeLiveMix(RCRTCMediaType.AudioVideo);
        this.rtcEngine.setOnLiveMixSubscribedListener((result) => {
          formatAppLog("log", "at pages/rtc/live.nvue:712", result);
          if (result.code === 0) {
            this.enableSpeaker(true);
            this.isMixRemoteVideoReady = true;
            setTimeout(() => {
              if (this.$refs.mixRemoteView && this.$refs.mixRemoteView.getNativeViewRef) {
                this.rtcEngine.setLiveMixView(
                  this.$refs.mixRemoteView.getNativeViewRef(),
                  (code) => {
                    if (code === 0) {
                      formatAppLog("log", "at pages/rtc/live.nvue:723", "设置合流view成功");
                    } else {
                      formatAppLog("log", "at pages/rtc/live.nvue:726", "设置合流view失败" + code);
                    }
                  }
                );
              } else {
                formatAppLog("error", "at pages/rtc/live.nvue:730", "mixRemoteView 引用不存在或方法不可用");
              }
            }, 100);
          } else {
            uni.showToast({
              title: "订阅合流失败",
              icon: "none"
            });
          }
        });
      }
    },
    /**
     * 主播取消订阅资源
     */
    unSubscribeStreams() {
      this.rtcEngine.unsubscribe(this.remoteUserId, RCRTCMediaType.AudioVideo);
      this.rtcEngine.setOnUnsubscribedListener(({
        userId,
        type,
        code,
        message
      }) => {
        if (code === 0) {
          this.isRemoteVideoReady = false;
          uni.showToast({
            title: "取消订阅成功",
            icon: "none"
          });
        } else {
          uni.showToast({
            title: "取消订阅失败",
            icon: "none"
          });
        }
      });
    },
    /**
     * 观众取消订阅资源
     */
    unSubscribeLiveMix() {
      this.rtcEngine.unsubscribeLiveMix(RCRTCMediaType.AudioVideo);
      this.rtcEngine.setOnLiveMixUnsubscribedListener(({
        userId,
        type,
        code,
        message
      }) => {
        if (code === 0) {
          this.isMixRemoteVideoReady = false;
          uni.showToast({
            title: "取消合流订阅成功",
            icon: "none"
          });
        } else {
          uni.showToast({
            title: "取消合流订阅失败",
            icon: "none"
          });
        }
      });
    },
    /**
     * 上下麦   参考文档：https://docs.rongcloud.cn/uni-app-rtclib/cohost/oneroom
     */
    switchLiveRole(userRole) {
      formatAppLog("log", "at pages/rtc/live.nvue:810", userRole);
      this.rtcEngine.setOnLiveRoleSwitchedListener(({
        role,
        code,
        errMsg
      }) => {
        if (code == 0) {
          formatAppLog("log", "at pages/rtc/live.nvue:819", userRole);
          if (userRole === 2) {
            this.isRemoteVideoReady = false;
            this.isLocalVideoReady = false;
          } else if (userRole === 1) {
            formatAppLog("log", "at pages/rtc/live.nvue:824", role);
            this.rtcEngine.enableCamera(true, RCRTCCamera.Front);
            this.isLocalVideoReady = true;
            this.isMixRemoteVideoReady = false;
            this.publishStreams();
            setTimeout(() => {
              if (this._isDestroyed)
                return;
              if (this.$refs.localView && this.$refs.localView.getNativeViewRef) {
                this.rtcEngine.setLocalView(this.$refs.localView.getNativeViewRef(), (code2) => {
                  formatAppLog("log", "at pages/rtc/live.nvue:834", "设置本地视图结果:", code2);
                  if (code2 === 0) {
                    formatAppLog("log", "at pages/rtc/live.nvue:836", "本地视图设置成功");
                  } else {
                    formatAppLog("error", "at pages/rtc/live.nvue:838", "本地视图设置失败:", code2);
                  }
                });
              } else {
                formatAppLog("error", "at pages/rtc/live.nvue:842", "localView 引用不存在或方法不可用");
              }
            }, 100);
          }
          uni.showToast({
            title: "切换身份成功",
            icon: "none"
          });
        } else {
          uni.showToast({
            title: "切换身份失败",
            icon: "none"
          });
        }
      });
      this.rtcEngine.switchLiveRole(userRole);
    },
    /**
     * 播放混音    注意：支持 播放线上音频文件，也支持本地音频文件，这里以线上音频文件演示
     */
    startAudioMixing() {
      formatAppLog("log", "at pages/rtc/live.nvue:866", "startAudioMixing");
      this.statusText = "播放混音";
      let path = "http://music.163.com/song/media/outer/url?id=1306417064.mp3";
      this.rtcEngine.startAudioMixing(path, RCRTCAudioMixingMode.Mixing, true, -1);
    },
    /**
     * 停止播放混音
     */
    stopAudioMixing() {
      this.statusText = "停止播放混音";
      formatAppLog("log", "at pages/rtc/live.nvue:877", "stopAudioMixing");
      this.rtcEngine.stopAudioMixing();
    },
    /**
     * 打开/关闭摄像头    摄像头其他设置参考文档：https://docs.rongcloud.cn/uni-app-rtclib/device/camera
     */
    enableCamera(enable) {
      formatAppLog("log", "at pages/rtc/live.nvue:886", enable ? "打开摄像头" : "关闭摄像头");
      this.rtcEngine.enableCamera(enable);
      this.isCameraOn = enable;
      formatAppLog("log", "at pages/rtc/live.nvue:889", "isSpeakerOn");
      uni.showToast({
        title: enable ? "打开摄像头" : "关闭摄像头",
        icon: "none"
      });
    },
    /**
     * 打开/关闭麦克风    麦克风其他操作：https://docs.rongcloud.cn/uni-app-rtclib/device/microphone
     */
    enableMicrophone(enable) {
      formatAppLog("log", "at pages/rtc/live.nvue:900", enable ? "打开麦克风" : "关闭麦克风");
      this.isMicrophoneOn = enable;
      this.rtcEngine.enableMicrophone(enable);
      uni.showToast({
        title: enable ? "已打开麦克风" : "已关闭麦克风",
        icon: "none"
      });
    },
    /**
     * 打开/关闭扬声器     参考文档：https://docs.rongcloud.cn/uni-app-rtclib/device/speaker
     */
    enableSpeaker(enable) {
      formatAppLog("log", "at pages/rtc/live.nvue:913", enable ? "打开扬声器" : "关闭扬声器");
      this.isSpeakerOn = true;
      this.rtcEngine.enableSpeaker(enable);
      formatAppLog("log", "at pages/rtc/live.nvue:916", "isSpeakerOn");
      uni.showToast({
        title: enable ? "已打开扬声器" : "已关闭扬声器",
        icon: "none"
      });
    },
    /**
     * 强制清理所有资源
     */
    forceCleanup() {
      formatAppLog("log", "at pages/rtc/live.nvue:929", "强制清理所有资源开始...");
      this._isDestroyed = true;
      if (this.roomJoinedListener) {
        this.roomJoinedListener = null;
        formatAppLog("log", "at pages/rtc/live.nvue:937", "监听器引用已清理");
      }
      if (this.rtcEngine) {
        try {
          this.rtcEngine.setOnRoomJoinedListener(null);
          this.rtcEngine.setOnPublishedListener(null);
          this.rtcEngine.setOnUnpublishedListener(null);
          this.rtcEngine.setOnUserJoinedListener(null);
          this.rtcEngine.setOnRemotePublishedListener(null);
          this.rtcEngine.destroy();
          this.rtcEngine = null;
        } catch (e) {
          formatAppLog("log", "at pages/rtc/live.nvue:951", "移除监听器时出现异常:", e);
          this.rtcEngine.destroy();
          this.rtcEngine = null;
        }
      }
      try {
        this.isInRoom = false;
        this.isLocalVideoReady = false;
        this.isRemoteVideoReady = false;
        this.isMixRemoteVideoReady = false;
        this.isJoining = false;
        this.isAudienceJoining = false;
        this.isCameraOn = false;
        this.isMicrophoneOn = false;
        this.isSpeakerOn = false;
        this.statusText = "已清理";
        this._isInitialized = false;
        this.remoteUserId = "";
        this.isRemoteStreams = false;
      } catch (e) {
        formatAppLog("log", "at pages/rtc/live.nvue:973", "重置状态时出现异常:", e);
      }
      formatAppLog("log", "at pages/rtc/live.nvue:976", "强制清理所有资源完成");
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_RCRTCView = resolveEasycom(resolveDynamicComponent("RCRTCView"), __easycom_0);
  return openBlock(), createElementBlock("scroll-view", {
    scrollY: true,
    showScrollbar: true,
    enableBackToTop: true,
    bubble: "true",
    style: { flexDirection: "column" }
  }, [
    createElementVNode("view", { class: "rtc-container" }, [
      createCommentVNode(" 状态栏占位 "),
      createElementVNode("view", { class: "status-bar-placeholder" }),
      createElementVNode("view", { class: "header" }, [
        createElementVNode("view", { class: "title-row" }, [
          createElementVNode("u-text", { class: "nav-title" }, "音视频直播")
        ])
      ]),
      createCommentVNode(" 返回按钮 - 根据平台显示 "),
      createElementVNode("view", { class: "back-button-container" }, [
        createElementVNode("view", {
          class: "nav-left-btn",
          onClick: _cache[0] || (_cache[0] = (...args) => $options.goBack && $options.goBack(...args)),
          style: { "background-color": "rgba(102, 126, 234, 0.8)", "padding": "15rpx 25rpx", "border-radius": "15rpx", "min-width": "120rpx", "min-height": "70rpx" }
        }, [
          createElementVNode("u-text", {
            class: "back-text",
            style: { "color": "white", "font-size": "30rpx" }
          }, "返回")
        ])
      ]),
      createElementVNode("view", { class: "status-bar" }, [
        createElementVNode(
          "u-text",
          { class: "status-text" },
          toDisplayString($data.statusText),
          1
          /* TEXT */
        )
      ]),
      createElementVNode("view", { class: "video-container" }, [
        createElementVNode("view", { class: "video-card" }, [
          createElementVNode("view", { class: "video-card-header" }, [
            createElementVNode("u-text", { class: "video-icon" }, "📹"),
            createElementVNode("u-text", { class: "card-title" }, "视图渲染")
          ]),
          createElementVNode("view", { class: "video-row" }, [
            createCommentVNode(" 本地视频 "),
            createElementVNode("view", { class: "video-item" }, [
              createElementVNode("view", { class: "video-content" }, [
                !$data.isLocalVideoReady ? (openBlock(), createElementBlock("view", {
                  key: 0,
                  class: "video-placeholder"
                }, [
                  createElementVNode("u-text", { class: "placeholder-text" }, "本地视图")
                ])) : (openBlock(), createBlock(
                  _component_RCRTCView,
                  {
                    key: 1,
                    ref: "localView",
                    class: "video-player",
                    fitType: 0,
                    mirror: false
                  },
                  null,
                  512
                  /* NEED_PATCH */
                ))
              ])
            ]),
            createCommentVNode(" 远端视频 "),
            createElementVNode("view", { class: "video-item" }, [
              createElementVNode("view", { class: "video-content" }, [
                !$data.isRemoteVideoReady ? (openBlock(), createElementBlock("view", {
                  key: 0,
                  class: "video-placeholder"
                }, [
                  createElementVNode("u-text", { class: "placeholder-text" }, "远端视图")
                ])) : (openBlock(), createBlock(
                  _component_RCRTCView,
                  {
                    key: 1,
                    ref: "remoteView",
                    class: "video-player",
                    fitType: 0,
                    mirror: false
                  },
                  null,
                  512
                  /* NEED_PATCH */
                ))
              ])
            ]),
            createElementVNode("view", { class: "video-item" }, [
              createElementVNode("view", { class: "video-content" }, [
                !$data.isMixRemoteVideoReady ? (openBlock(), createElementBlock("view", {
                  key: 0,
                  class: "video-placeholder"
                }, [
                  createElementVNode("u-text", { class: "placeholder-text" }, "合流视图")
                ])) : (openBlock(), createBlock(
                  _component_RCRTCView,
                  {
                    key: 1,
                    ref: "mixRemoteView",
                    class: "video-player",
                    fitType: 0
                  },
                  null,
                  512
                  /* NEED_PATCH */
                ))
              ])
            ])
          ])
        ])
      ]),
      createElementVNode("view", { class: "control-panel" }, [
        createElementVNode("view", { class: "room-info" }, [
          createElementVNode("u-text", { class: "room-label" }, "房间号:"),
          createElementVNode("u-input", {
            class: "room-input",
            modelValue: $data.roomId,
            onInput: _cache[1] || (_cache[1] = ($event) => $data.roomId = $event.detail.value),
            placeholder: "请输入房间号",
            maxlength: "10"
          }, null, 40, ["modelValue"])
        ]),
        createCommentVNode(" 加入/离开房间 "),
        createElementVNode("view", { class: "button-row" }, [
          createElementVNode(
            "view",
            {
              class: normalizeClass(["control-btn join-btn", { "disabled": !$data.roomId.trim() || $data.isInRoom }]),
              onClick: _cache[2] || (_cache[2] = ($event) => $options.handleJoinRoom(1))
            },
            [
              createElementVNode(
                "u-text",
                { class: "btn-text" },
                toDisplayString($data.isJoining ? "加入中..." : "主播加入房间"),
                1
                /* TEXT */
              )
            ],
            2
            /* CLASS */
          ),
          createElementVNode(
            "view",
            {
              class: normalizeClass(["control-btn join-btn", { "disabled": !$data.roomId.trim() || $data.isInRoom }]),
              onClick: _cache[3] || (_cache[3] = ($event) => $options.handleJoinRoom(2))
            },
            [
              createElementVNode(
                "u-text",
                { class: "btn-text" },
                toDisplayString($data.isAudienceJoining ? "加入中..." : "观众加入房间"),
                1
                /* TEXT */
              )
            ],
            2
            /* CLASS */
          ),
          createElementVNode(
            "view",
            {
              class: normalizeClass(["control-btn leave-btn", { "disabled": !$data.isInRoom }]),
              onClick: _cache[4] || (_cache[4] = (...args) => $options.handleLeaveRoom && $options.handleLeaveRoom(...args))
            },
            [
              createElementVNode("u-text", { class: "btn-text" }, "离开房间")
            ],
            2
            /* CLASS */
          )
        ]),
        createCommentVNode(" 主播发布资源 "),
        createElementVNode("view", { class: "button-row" }, [
          createElementVNode("view", {
            class: "control-btn rtc-btn",
            onClick: _cache[5] || (_cache[5] = (...args) => $options.publishStreams && $options.publishStreams(...args))
          }, [
            createElementVNode("u-text", { class: "btn-text" }, "主播发布资源")
          ]),
          createElementVNode("view", {
            class: "control-btn rtc-btn",
            onClick: _cache[6] || (_cache[6] = (...args) => $options.unPublishStreams && $options.unPublishStreams(...args))
          }, [
            createElementVNode("u-text", { class: "btn-text" }, "主播取消发布资源")
          ])
        ]),
        createCommentVNode(" 主播订阅资源 "),
        createElementVNode("view", { class: "button-row" }, [
          createElementVNode("view", {
            class: "control-btn rtc-btn",
            onClick: _cache[7] || (_cache[7] = (...args) => $options.subscribeStreams && $options.subscribeStreams(...args))
          }, [
            createElementVNode("u-text", { class: "btn-text" }, "主播订阅资源")
          ]),
          createElementVNode("view", {
            class: "control-btn rtc-btn",
            onClick: _cache[8] || (_cache[8] = (...args) => $options.unSubscribeStreams && $options.unSubscribeStreams(...args))
          }, [
            createElementVNode("u-text", { class: "btn-text" }, "主播取消订阅资源")
          ])
        ]),
        createCommentVNode(" 观众订阅资源 "),
        createElementVNode("view", { class: "button-row" }, [
          createElementVNode("view", {
            class: "control-btn rtc-btn",
            onClick: _cache[9] || (_cache[9] = (...args) => $options.subscribeLiveMixStream && $options.subscribeLiveMixStream(...args))
          }, [
            createElementVNode("u-text", { class: "btn-text" }, "观众订阅合流")
          ]),
          createElementVNode("view", {
            class: "control-btn rtc-btn",
            onClick: _cache[10] || (_cache[10] = (...args) => $options.unSubscribeLiveMix && $options.unSubscribeLiveMix(...args))
          }, [
            createElementVNode("u-text", { class: "btn-text" }, "观众取消订阅合流")
          ])
        ]),
        createCommentVNode(" 上下麦 "),
        createElementVNode("view", { class: "button-row" }, [
          createElementVNode("view", {
            class: "control-btn rtc-btn",
            onClick: _cache[11] || (_cache[11] = ($event) => $options.switchLiveRole(1))
          }, [
            createElementVNode("u-text", { class: "btn-text" }, "观众上麦")
          ]),
          createElementVNode("view", {
            class: "control-btn rtc-btn",
            onClick: _cache[12] || (_cache[12] = ($event) => $options.switchLiveRole(2))
          }, [
            createElementVNode("u-text", { class: "btn-text" }, "主播下麦")
          ])
        ]),
        createCommentVNode(" 混音 "),
        createElementVNode("view", { class: "button-row" }, [
          createElementVNode("view", {
            class: "control-btn rtc-btn",
            onClick: _cache[13] || (_cache[13] = (...args) => $options.startAudioMixing && $options.startAudioMixing(...args))
          }, [
            createElementVNode("u-text", { class: "btn-text" }, "播放混音")
          ]),
          createElementVNode("view", {
            class: "control-btn rtc-btn",
            onClick: _cache[14] || (_cache[14] = (...args) => $options.stopAudioMixing && $options.stopAudioMixing(...args))
          }, [
            createElementVNode("u-text", { class: "btn-text" }, "停止播放混音")
          ])
        ])
      ])
    ])
  ]);
}
const live = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0]], ["__file", "/Users/yongqiming/developer/UAT/uniapp-rtc-quickdemo/pages/rtc/live.nvue"]]);
export {
  live as default
};
