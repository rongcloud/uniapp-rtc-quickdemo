import { RCRTCLocalAudioStats, RCRTCLocalVideoStats, RCRTCNetworkStats, RCRTCRemoteAudioStats, RCRTCRemoteVideoStats, BaseCallback, OnAudioEffectCreatedResult, OnAudioEffectFinishedResult, OnCancelJoinSubRoomRequestReceivedResult, OnCustomStreamPublishedResult, OnCustomStreamPublishFinishedResult, OnCustomStreamSubscribedResult, OnCustomStreamUnpublishedResult, OnCustomStreamUnsubscribedResult, OnCameraEnabledResult, OnErrorResult, OnJoinSubRoomRequestCanceledResult, OnJoinSubRoomRequestedResult, OnJoinSubRoomRequestReceivedResult, OnJoinSubRoomRequestRespondedResult, OnJoinSubRoomRequestResponseReceivedResult, OnKickedResult, OnLiveCdnAddedResult, OnLiveCdnRemovedResult, OnLiveMixAudioBitrateSetResult, OnLiveMixCustomAudiosSetResult, OnLiveMixCustomLayoutsSetResult, OnLiveMixLayoutModeSetResult, OnLiveMixMemberAudioStatsResult, OnLiveMixMemberCustomAudioStatsResult, OnLiveMixRenderModeSetResult, OnLiveMixSubscribedResult, OnLiveMixUnsubscribedResult, OnLiveMixVideoBitrateSetResult, OnLiveMixVideoFpsSetResult, OnLiveMixVideoResolutionSetResult, OnLocalCustomAudioStatsResult, OnLocalCustomVideoStatsResult, OnPublishedResult, OnRemoteAudioStatsResult, OnRemoteCustomAudioStatsResult, OnRemoteCustomStreamFirstFrameResult, OnRemoteCustomStreamPublishedResult, OnRemoteCustomStreamStateChangedResult, OnRemoteCustomStreamUnpublishedResult, OnRemoteCustomVideoStatsResult, OnRemoteFirstFrameResult, OnRemoteLiveMixFirstFrameResult, OnRemoteLiveMixPublishedResult, OnRemoteLiveMixUnpublishedResult, OnRemotePublishedResult, OnRemoteStateChangedResult, OnRemoteUnpublishedResult, OnRemoteVideoStatsResult, OnRoomJoinedResult, OnRoomLeftResult, OnSubRoomBandedResult, OnSubRoomDisbandResult, OnSubRoomJoinedResult, OnSubRoomLeftResult, OnSubscribedResult, OnCameraSwitchedResult, OnUnpublishedResult, OnUnsubscribedResult, OnUserJoinedResult, OnUserLeftResult, OnUserOfflineResult, OnLiveMixBackgroundColorSetResult } from './RCRTCDefines';
export interface RCRTCEngineEventsInterface {
    /**
     * 本地用户操作错误回调
     *
     * @param {CodeWithMessageCallback} [callback] 回调函数，不传值表示移除当前事件的所有监听
     * @memberof RCRTCEngineEventsInterface
     */
    setOnErrorListener(callback?: BaseCallback<OnErrorResult>): void;
    /**
     * 本地用户被踢出房间回调
     * @param callback 回调函数，不传值表示移除当前事件的所有监听。
     * @memberof RCRTCEngineEventsInterface
     */
    setOnKickedListener(callback?: BaseCallback<OnKickedResult>): void;
    /**
     * 本地用户加入房间回调
     * @param callback 回调函数，不传值表示移除当前事件的所有监听。
     * @memberof RCRTCEngineEventsInterface
     */
    setOnRoomJoinedListener(callback?: BaseCallback<OnRoomJoinedResult>): void;
    /**
     * 本地用户离开房间回调
     * @param callback 回调函数，不传值表示移除当前事件的所有监听。
     * @memberof RCRTCEngineEventsInterface
     */
    setOnRoomLeftListener(callback?: BaseCallback<OnRoomLeftResult>): void;
    /**
     * 本地用户发布资源回调
     * @param callback 回调函数，不传值表示移除当前事件的所有监听。
     * @memberof RCRTCEngineEventsInterface
     */
    setOnPublishedListener(callback?: BaseCallback<OnPublishedResult>): void;
    /**
     * 本地用户取消发布资源回调
     * @param callback 回调函数，不传值表示移除当前事件的所有监听。
     * @memberof RCRTCEngineEventsInterface
     */
    setOnUnpublishedListener(callback?: BaseCallback<OnUnpublishedResult>): void;
    /**
     * 订阅远端用户发布的资源操作回调, 仅供会议用户或直播主播用户使用
     * @param callback 回调函数，不传值表示移除当前事件的所有监听。
     * @memberof RCRTCEngineEventsInterface
     */
    setOnSubscribedListener(callback?: BaseCallback<OnSubscribedResult>): void;
    /**
     * 取消订阅远端用户发布的资源, 仅供会议用户或直播主播用户使用
     * @param callback 回调函数，不传值表示移除当前事件的所有监听。
     * @memberof RCRTCEngineEventsInterface
     */
    setOnUnsubscribedListener(callback?: BaseCallback<OnUnsubscribedResult>): void;
    /**
     * 订阅合流资源操作回调, 仅供直播观众用户使用
     * @param callback 回调函数，不传值表示移除当前事件的所有监听。
     * @memberof RCRTCEngineEventsInterface
     */
    setOnLiveMixSubscribedListener(callback?: BaseCallback<OnLiveMixSubscribedResult>): void;
    /**
     * 取消订阅合流资源操作回调, 仅供直播观众用户使用
     * @param callback 回调函数，不传值表示移除当前事件的所有监听。
     * @memberof RCRTCEngineEventsInterface
     */
    setOnLiveMixUnsubscribedListener(callback?: BaseCallback<OnLiveMixUnsubscribedResult>): void;
    /**
     * 本地用户开关摄像头操作回调
     * @param callback 回调函数，不传值表示移除当前事件的所有监听。
     * @memberof RCRTCEngineEventsInterface
     */
    setOnCameraEnabledListener(callback?: BaseCallback<OnCameraEnabledResult>): void;
    /**
     * 本地用户切换前后置摄像头操作回调
     * @param callback 回调函数，不传值表示移除当前事件的所有监听。
     * @memberof RCRTCEngineEventsInterface
     */
    setOnCameraSwitchedListener(callback?: BaseCallback<OnCameraSwitchedResult>): void;
    /**
     * 添加旁路推流URL操作回调, 仅供直播主播用户使用
     * @param callback 回调函数，不传值表示移除当前事件的所有监听。
     * @memberof RCRTCEngineEventsInterface
     */
    setOnLiveCdnAddedListener(callback?: BaseCallback<OnLiveCdnAddedResult>): void;
    /**
     * 移除旁路推流URL操作回调, 仅供直播主播用户使用
     * @param callback 回调函数，不传值表示移除当前事件的所有监听。
     * @memberof RCRTCEngineEventsInterface
     */
    setOnLiveCdnRemovedListener(callback?: BaseCallback<OnLiveCdnRemovedResult>): void;
    /**
     * 设置合流布局类型操作回调, 仅供直播主播用户使用
     * @param callback 回调函数，不传值表示移除当前事件的所有监听。
     * @memberof RCRTCEngineEventsInterface
     */
    setOnLiveMixLayoutModeSetListener(callback?: BaseCallback<OnLiveMixLayoutModeSetResult>): void;
    /**
     * 设置合流布局填充类型操作回调, 仅供直播主播用户使用
     * @param callback 回调函数，不传值表示移除当前事件的所有监听。
     * @memberof RCRTCEngineEventsInterface
     */
    setOnLiveMixRenderModeSetListener(callback?: BaseCallback<OnLiveMixRenderModeSetResult>): void;
    /**
     * 设置合流布局背景颜色操作回调, 仅供直播主播用户使用
     * @param callback 回调函数，不传值表示移除当前事件的所有监听。
     * @memberof RCRTCEngineEventsInterface
     */
    setOnLiveMixBackgroundColorSetListener(callback?: BaseCallback<OnLiveMixBackgroundColorSetResult>): void;
    /**
     * 设置需要合流音频操作回调, 仅供直播主播用户使用
     * @param callback 回调函数，不传值表示移除当前事件的所有监听。
     * @memberof RCRTCEngineEventsInterface
     */
    setOnLiveMixCustomAudiosSetListener(callback?: BaseCallback<OnLiveMixCustomAudiosSetResult>): void;
    /**
     * 设置合流自定义布局操作回调, 仅供直播主播用户使用
     * @param callback 回调函数，不传值表示移除当前事件的所有监听。
     * @memberof RCRTCEngineEventsInterface
     */
    setOnLiveMixCustomLayoutsSetListener(callback?: BaseCallback<OnLiveMixCustomLayoutsSetResult>): void;
    /**
     * 设置合流音频码率操作回调, 仅供直播主播用户使用
     * @param callback 回调函数，不传值表示移除当前事件的所有监听。
     * @memberof RCRTCEngineEventsInterface
     */
    setOnLiveMixAudioBitrateSetListener(callback?: BaseCallback<OnLiveMixAudioBitrateSetResult>): void;
    /**
     * 设置默认视频合流码率操作回调, 仅供直播主播用户使用
     * @param callback 回调函数，不传值表示移除当前事件的所有监听。
     * @memberof RCRTCEngineEventsInterface
     */
    setOnLiveMixVideoBitrateSetListener(callback?: BaseCallback<OnLiveMixVideoBitrateSetResult>): void;
    /**
     * 设置默认视频分辨率操作回调, 仅供直播主播用户使用
     * @param callback 回调函数，不传值表示移除当前事件的所有监听。
     * @memberof RCRTCEngineEventsInterface
     */
    setOnLiveMixVideoResolutionSetListener(callback?: BaseCallback<OnLiveMixVideoResolutionSetResult>): void;
    /**
     * 设置默认视频帧率操作回调, 仅供直播主播用户使用
     * @param callback 回调函数，不传值表示移除当前事件的所有监听。
     * @memberof RCRTCEngineEventsInterface
     */
    setOnLiveMixVideoFpsSetListener(callback?: BaseCallback<OnLiveMixVideoFpsSetResult>): void;
    /**
     * 创建音效操作回调, 仅供会议用户或直播主播用户使用
     * @param callback 回调函数，不传值表示移除当前事件的所有监听。
     * @memberof RCRTCEngineEventsInterface
     */
    setOnAudioEffectCreatedListener(callback?: BaseCallback<OnAudioEffectCreatedResult>): void;
    /**
     * 播放音效结束, 仅供会议用户或直播主播用户使用
     * @param callback 回调函数，不传值表示移除当前事件的所有监听。
     * @memberof RCRTCEngineEventsInterface
     */
    setOnAudioEffectFinishedListener(callback?: BaseCallback<OnAudioEffectFinishedResult>): void;
    /**
     * 开始本地音频数据合流操作回调, 仅供会议用户或直播主播用户使用
     * @param callback 回调函数，不传值表示移除当前事件的所有监听。
     * @memberof RCRTCEngineEventsInterface
     */
    setOnAudioMixingStartedListener(callback?: BaseCallback<void>): void;
    /**
     * 暂停本地音频数据合流操作回调, 仅供会议用户或直播主播用户使用
     * @param callback 回调函数，不传值表示移除当前事件的所有监听。
     * @memberof RCRTCEngineEventsInterface
     */
    setOnAudioMixingPausedListener(callback?: BaseCallback<void>): void;
    /**
     * 停止本地音频文件数据合流操作回调, 仅供会议用户或直播主播用户使用
     * @param callback 回调函数，不传值表示移除当前事件的所有监听。
     * @memberof RCRTCEngineEventsInterface
     */
    setOnAudioMixingStoppedListener(callback?: BaseCallback<void>): void;
    /**
     * 结束本地音频文件数据合流操作回调, 仅供会议用户或直播主播用户使用
     * @param callback 回调函数，不传值表示移除当前事件的所有监听。
     * @memberof RCRTCEngineEventsInterface
     */
    setOnAudioMixingFinishedListener(callback?: BaseCallback<void>): void;
    /**
     * 远端用户加入房间操作回调, 仅供会议用户或直播主播用户使用
     * @param callback 回调函数，不传值表示移除当前事件的所有监听。
     * @memberof RCRTCEngineEventsInterface
     */
    setOnUserJoinedListener(callback?: BaseCallback<OnUserJoinedResult>): void;
    /**
     * 远端用户因离线离开房间操作回调, 仅供会议用户或直播主播用户使用
     * @param callback 回调函数，不传值表示移除当前事件的所有监听。
     * @memberof RCRTCEngineEventsInterface
     */
    setOnUserOfflineListener(callback?: BaseCallback<OnUserOfflineResult>): void;
    /**
     * 远端用户离开房间操作回调, 仅供会议用户或直播主播用户使用
     * @param callback 回调函数，不传值表示移除当前事件的所有监听。
     * @memberof RCRTCEngineEventsInterface
     */
    setOnUserLeftListener(callback?: BaseCallback<OnUserLeftResult>): void;
    /**
     * 远端用户发布资源操作回调, 仅供会议用户或直播主播用户使用
     * @param callback 回调函数，不传值表示移除当前事件的所有监听。
     * @memberof RCRTCEngineEventsInterface
     */
    setOnRemotePublishedListener(callback?: BaseCallback<OnRemotePublishedResult>): void;
    /**
     * 远端用户取消发布资源操作回调, 仅供会议用户或直播主播用户使用
     * @param callback 回调函数，不传值表示移除当前事件的所有监听。
     * @memberof RCRTCEngineEventsInterface
     */
    setOnRemoteUnpublishedListener(callback?: BaseCallback<OnRemoteUnpublishedResult>): void;
    /**
     * 远端用户发布直播资源操作回调, 仅供直播观众用户使用
     * @param callback 回调函数，不传值表示移除当前事件的所有监听。
     * @memberof RCRTCEngineEventsInterface
     */
    setOnRemoteLiveMixPublishedListener(callback?: BaseCallback<OnRemoteLiveMixPublishedResult>): void;
    /**
     * 远端用户取消发布直播资源操作回调, 仅供直播观众用户使用
     * @param callback 回调函数，不传值表示移除当前事件的所有监听。
     * @memberof RCRTCEngineEventsInterface
     */
    setOnRemoteLiveMixUnpublishedListener(callback?: BaseCallback<OnRemoteLiveMixUnpublishedResult>): void;
    /**
     * 远端用户开关麦克风或摄像头操作回调
     * @param callback 回调函数，不传值表示移除当前事件的所有监听。
     * @memberof RCRTCEngineEventsInterface
     */
    setOnRemoteStateChangedListener(callback?: BaseCallback<OnRemoteStateChangedResult>): void;
    /**
     * 收到远端用户第一个音频或视频关键帧回调, 仅供会议用户或直播主播用户使用
     * @param callback 回调函数，不传值表示移除当前事件的所有监听。
     * @memberof RCRTCEngineEventsInterface
     */
    setOnRemoteFirstFrameListener(callback?: BaseCallback<OnRemoteFirstFrameResult>): void;
    /**
     * 收到远端用户第一个音频或视频关键帧回调, 仅供直播观众用户使用
     * @param callback 回调函数，不传值表示移除当前事件的所有监听。
     * @memberof RCRTCEngineEventsInterface
     */
    setOnRemoteLiveMixFirstFrameListener(callback?: BaseCallback<OnRemoteLiveMixFirstFrameResult>): void;
    /**
     * 本地用户发布本地自定义流操作回调
     *
     * @param {BaseCallback<OnCustomStreamPublishedResult>} [callback]
     * @memberof RCRTCStatsEventsInterface
     */
    setOnCustomStreamPublishedListener(callback?: BaseCallback<OnCustomStreamPublishedResult>): void;
    /**
     * 本地用户取消发布本地自定义流操作回调
     *
     * @param {BaseCallback<OnCustomStreamUnpublishedResult>} [callback]
     * @memberof RCRTCStatsEventsInterface
     */
    setOnCustomStreamUnpublishedListener(callback?: BaseCallback<OnCustomStreamUnpublishedResult>): void;
    /**
     * 本地自定义流发布结束回调
     *
     * @param {BaseCallback<OnCustomStreamPublishFinishedResult>} [callback]
     * @memberof RCRTCStatsEventsInterface
     */
    setOnCustomStreamPublishFinishedListener(callback?: BaseCallback<OnCustomStreamPublishFinishedResult>): void;
    /**
     * 远端用户发布自定义流操作回调, 仅供会议用户或直播主播用户使用
     *
     * @param {BaseCallback<OnRemoteCustomStreamPublishedResult>} [callback]
     * @memberof RCRTCStatsEventsInterface
     */
    setOnRemoteCustomStreamPublishedListener(callback?: BaseCallback<OnRemoteCustomStreamPublishedResult>): void;
    /**
     * 远端用户取消发布自定义流操作回调, 仅供会议用户或直播主播用户使用
     *
     * @param {BaseCallback<OnRemoteCustomStreamUnpublishedResult>} [callback]
     * @memberof RCRTCStatsEventsInterface
     */
    setOnRemoteCustomStreamUnpublishedListener(callback?: BaseCallback<OnRemoteCustomStreamUnpublishedResult>): void;
    /**
     * 远端用户开关自定义流操作回调
     *
     * @param {BaseCallback<OnRemoteCustomStreamStateChanged>} [callback]
     * @memberof RCRTCStatsEventsInterface
     */
    setOnRemoteCustomStreamStateChangedListener(callback?: BaseCallback<OnRemoteCustomStreamStateChangedResult>): void;
    /**
     * 收到远端用户自定义流第一个关键帧回调, 仅供会议用户或直播主播用户使用
     *
     * @param {BaseCallback<OnRemoteCustomStreamFirstFrameResult>} [callback]
     * @memberof RCRTCStatsEventsInterface
     */
    setOnRemoteCustomStreamFirstFrameListener(callback?: BaseCallback<OnRemoteCustomStreamFirstFrameResult>): void;
    /**
     * 订阅远端用户发布的自定义流操作回调, 仅供会议用户或直播主播用户使用
     *
     * @param {BaseCallback<OnCustomStreamSubscribedResult>} [callback]
     * @memberof RCRTCStatsEventsInterface
     */
    setOnCustomStreamSubscribedListener(callback?: BaseCallback<OnCustomStreamSubscribedResult>): void;
    /**
     * 取消订阅远端用户发布的自定义流操作回调, 仅供会议用户或直播主播用户使用
     *
     * @param {BaseCallback<OnCustomStreamUnsubscribedResult>} [callback]
     * @memberof RCRTCStatsEventsInterface
     */
    setOnCustomStreamUnsubscribedListener(callback?: BaseCallback<OnCustomStreamUnsubscribedResult>): void;
    /**
     * 请求加入子房间回调, 仅供直播主播用户使用
     *
     * @param {BaseCallback<OnJoinSubRoomRequestedResult>} [callback]
     * @memberof RCRTCStatsEventsInterface
     */
    setOnJoinSubRoomRequestedListener(callback?: BaseCallback<OnJoinSubRoomRequestedResult>): void;
    /**
     * 取消请求加入子房间回调, 仅供直播主播用户使用
     *
     * @param {BaseCallback<OnJoinSubRoomRequestCanceledResult>} [callback]
     * @memberof RCRTCStatsEventsInterface
     */
    setOnJoinSubRoomRequestCanceledListener(callback?: BaseCallback<OnJoinSubRoomRequestCanceledResult>): void;
    /**
     * 响应请求加入子房间回调, 仅供直播主播用户使用
     *
     * @param {BaseCallback<OnJoinSubRoomRequestRespondedResult>} [callback]
     * @memberof RCRTCStatsEventsInterface
     */
    setOnJoinSubRoomRequestRespondedListener(callback?: BaseCallback<OnJoinSubRoomRequestRespondedResult>): void;
    /**
     * 收到加入请求回调, 仅供直播主播用户使用
     *
     * @param {BaseCallback<OnJoinSubRoomRequestReceivedResult>} [callback]
     * @memberof RCRTCStatsEventsInterface
     */
    setOnJoinSubRoomRequestReceivedListener(callback?: BaseCallback<OnJoinSubRoomRequestReceivedResult>): void;
    /**
     * 收到取消加入请求回调, 仅供直播主播用户使用
     *
     * @param {BaseCallback<OnCancelJoinSubRoomRequestReceivedResult>} [callback]
     * @memberof RCRTCStatsEventsInterface
     */
    setOnCancelJoinSubRoomRequestReceivedListener(callback?: BaseCallback<OnCancelJoinSubRoomRequestReceivedResult>): void;
    /**
     * 收到加入请求响应回调 仅供直播主播用户使用
     *
     * @param {BaseCallback<OnJoinSubRoomRequestResponseReceivedResult>} [callback]
     * @memberof RCRTCStatsEventsInterface
     */
    setOnJoinSubRoomRequestResponseReceivedListener(callback?: BaseCallback<OnJoinSubRoomRequestResponseReceivedResult>): void;
    /**
     * 加入子房间回调, 仅供直播主播用户使用
     *
     * @param {BaseCallback<OnSubRoomJoinedResult>} [callback]
     * @memberof RCRTCStatsEventsInterface
     */
    setOnSubRoomJoinedListener(callback?: BaseCallback<OnSubRoomJoinedResult>): void;
    /**
     * 离开子房间回调, 仅供直播主播用户使用
     *
     * @param {BaseCallback<OnSubRoomLeftResult>} [callback]
     * @memberof RCRTCStatsEventsInterface
     */
    setOnSubRoomLeftListener(callback?: BaseCallback<OnSubRoomLeftResult>): void;
    /**
     * 连麦中的子房间回调, 仅供直播主播用户使用
     *
     * @param {BaseCallback<OnSubRoomBandedResult>} [callback]
     * @memberof RCRTCStatsEventsInterface
     */
    setOnSubRoomBandedListener(callback?: BaseCallback<OnSubRoomBandedResult>): void;
    /**
     * 子房间结束连麦回调, 仅供直播主播用户使用
     *
     * @param {BaseCallback<OnSubRoomDisbandResult>} [callback]
     * @memberof RCRTCStatsEventsInterface
     */
    setOnSubRoomDisbandListener(callback?: BaseCallback<OnSubRoomDisbandResult>): void;
}
export interface RCRTCStatsEventsInterface {
    /**
     * 上报网络状态统计信息
     * @param callback 回调函数，不传值表示移除当前事件的所有监听。
     * @memberof RCRTCEngineEventsInterface
     */
    setOnNetworkStatsListener(callback?: BaseCallback<RCRTCNetworkStats>): void;
    /**
     * 上报本地音频统计信息
     * @param callback 回调函数，不传值表示移除当前事件的所有监听。
     * @memberof RCRTCEngineEventsInterface
     */
    setOnLocalAudioStatsListener(callback?: BaseCallback<RCRTCLocalAudioStats>): void;
    /**
     * 上报本地视频统计信息
     * @param callback 回调函数，不传值表示移除当前事件的所有监听。
     * @memberof RCRTCEngineEventsInterface
     */
    setOnLocalVideoStatsListener(callback?: BaseCallback<RCRTCLocalVideoStats>): void;
    /**
     * 上报远端音频统计信息
     * @param callback 回调函数，不传值表示移除当前事件的所有监听。
     * @memberof RCRTCEngineEventsInterface
     */
    setOnRemoteAudioStatsListener(callback?: BaseCallback<OnRemoteAudioStatsResult>): void;
    /**
     * 上报远端视频统计信息
     * @param callback 回调函数，不传值表示移除当前事件的所有监听。
     * @memberof RCRTCEngineEventsInterface
     */
    setOnRemoteVideoStatsListener(callback?: BaseCallback<OnRemoteVideoStatsResult>): void;
    /**
     * 上报远端合流音频统计信息
     *
     * @param callback 回调函数，不传值表示移除当前事件的所有监听。
     * @memberof RCRTCStatsEventsInterface
     */
    setOnLiveMixAudioStatsListener(callback?: BaseCallback<RCRTCRemoteAudioStats>): void;
    /**
     * 上报远端合流视频统计信息
     *
     * @param callback 回调函数，不传值表示移除当前事件的所有监听。
     * @memberof RCRTCStatsEventsInterface
     */
    setOnLiveMixVideoStatsListener(callback?: BaseCallback<RCRTCRemoteVideoStats>): void;
    /**
     * 上报远端分流音频统计信息
     *
     * @param callback 回调函数，不传值表示移除当前事件的所有监听。
     * @memberof RCRTCStatsEventsInterface
     */
    setOnLiveMixMemberAudioStatsListener(callback?: BaseCallback<OnLiveMixMemberAudioStatsResult>): void;
    /**
     * 上报远端分流自定义音频统计信息
     *
     * @param callback 回调函数，不传值表示移除当前事件的所有监听。
     * @memberof RCRTCStatsEventsInterface
     */
    setOnLiveMixMemberCustomAudioStatsListener(callback?: BaseCallback<OnLiveMixMemberCustomAudioStatsResult>): void;
    /**
     * 上报本地自定义音频统计信息
     *
     * @param callback 回调函数，不传值表示移除当前事件的所有监听。
     * @memberof RCRTCStatsEventsInterface
     */
    setOnLocalCustomAudioStatsListener(callback?: BaseCallback<OnLocalCustomAudioStatsResult>): void;
    /**
     * 上报本地自定义视频统计信息
     *
     * @param callback 回调函数，不传值表示移除当前事件的所有监听。
     * @memberof RCRTCStatsEventsInterface
     */
    setOnLocalCustomVideoStatsListener(callback?: BaseCallback<OnLocalCustomVideoStatsResult>): void;
    /**
     * 上报远端自定义音频统计信息
     *
     * @param callback 回调函数，不传值表示移除当前事件的所有监听。
     * @memberof RCRTCStatsEventsInterface
     */
    setOnRemoteCustomAudioStatsListener(callback?: BaseCallback<OnRemoteCustomAudioStatsResult>): void;
    /**
     * 上报远端自定义视频统计信息
     *
     * @param callback 回调函数，不传值表示移除当前事件的所有监听。
     * @memberof RCRTCStatsEventsInterface
     */
    setOnRemoteCustomVideoStatsListener(callback?: BaseCallback<OnRemoteCustomVideoStatsResult>): void;
}
