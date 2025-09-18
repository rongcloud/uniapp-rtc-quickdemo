import { RCRTCAudioConfig, RCRTCCustomLayout, RCRTCEngineSetup, RCRTCLocalAudioStats, RCRTCLocalVideoStats, RCRTCNetworkStats, RCRTCRemoteAudioStats, RCRTCRemoteVideoStats, RCRTCRoomSetup, RCRTCVideoConfig, RCRTCAudioMixingMode, RCRTCCamera, RCRTCCameraCaptureOrientation, RCRTCLiveMixLayoutMode, RCRTCLiveMixRenderMode, RCRTCMediaType, OnAudioEffectCreatedResult, OnAudioEffectFinishedResult, OnCancelJoinSubRoomRequestReceivedResult, OnCustomStreamPublishedResult, OnCustomStreamPublishFinishedResult, OnCustomStreamSubscribedResult, OnCustomStreamUnpublishedResult, OnCustomStreamUnsubscribedResult, OnCameraEnabledResult, OnErrorResult, OnJoinSubRoomRequestCanceledResult, OnJoinSubRoomRequestedResult, OnJoinSubRoomRequestReceivedResult, OnJoinSubRoomRequestRespondedResult, OnJoinSubRoomRequestResponseReceivedResult, OnKickedResult, OnLiveCdnAddedResult, OnLiveCdnRemovedResult, OnLiveMixAudioBitrateSetResult, OnLiveMixCustomAudiosSetResult, OnLiveMixCustomLayoutsSetResult, OnLiveMixLayoutModeSetResult, OnLiveMixMemberAudioStatsResult, OnLiveMixMemberCustomAudioStatsResult, OnLiveMixRenderModeSetResult, OnLiveMixSubscribedResult, OnLiveMixUnsubscribedResult, OnLiveMixVideoBitrateSetResult, OnLiveMixVideoFpsSetResult, OnLiveMixVideoResolutionSetResult, OnLocalCustomAudioStatsResult, OnLocalCustomVideoStatsResult, OnPublishedResult, OnRemoteAudioStatsResult, OnRemoteCustomAudioStatsResult, OnRemoteCustomStreamFirstFrameResult, OnRemoteCustomStreamPublishedResult, OnRemoteCustomStreamUnpublishedResult, OnRemoteCustomVideoStatsResult, OnRemoteFirstFrameResult, OnRemoteLiveMixFirstFrameResult, OnRemoteLiveMixPublishedResult, OnRemoteLiveMixUnpublishedResult, OnRemotePublishedResult, OnRemoteStateChangedResult, OnRemoteUnpublishedResult, OnRemoteVideoStatsResult, OnRoomJoinedResult, OnRoomLeftResult, OnSubRoomBandedResult, OnSubRoomDisbandResult, OnSubRoomJoinedResult, OnSubRoomLeftResult, OnSubscribedResult, OnCameraSwitchedResult, OnUnpublishedResult, OnUnsubscribedResult, OnUserJoinedResult, OnUserLeftResult, OnUserOfflineResult, OnRemoteCustomStreamStateChangedResult, BaseCallback, OnLiveMixBackgroundColorSetResult, OnNetworkProbeUpLinkStatsResult, OnNetworkProbeDownLinkStatsResult, OnLiveRoleSwitchedResult, OnRemoteLiveRoleSwitchedResult, RCRTCVideoFps } from './RCRTCDefines';
import { RCRTCEngineEventsInterface, RCRTCStatsEventsInterface } from './RCRTCEvents';
import { OnLiveMixInnerCdnStreamEnabledResult, OnLiveMixInnerCdnStreamSubscribedResult, OnLiveMixInnerCdnStreamUnsubscribedResult, OnLiveMixSeiReceivedResult, OnLocalLiveMixInnerCdnVideoFpsSetResult, OnLocalLiveMixInnerCdnVideoResolutionSetResult, OnNetworkProbeFinishedResult, OnNetworkProbeStartedResult, OnNetworkProbeStoppedResult, OnRemoteLiveMixInnerCdnStreamPublishedResult, OnRemoteLiveMixInnerCdnStreamUnpublishedResult, OnSeiEnabledResult, OnSeiReceivedResult, OnWatermarkRemovedResult, OnWatermarkSetResult, RCRTCRole } from './RCRTCDefines';
export default class RCRTCEngine implements RCRTCEngineInterface, RCRTCEngineEventsInterface, RCRTCStatsEventsInterface {
    /**
     * 初始化
     *
     * @param setup 配置项
     * @memberof RCRTCEngineInterface
     */
    static create(setup: RCRTCEngineSetup): RCRTCEngine | null;
    destroy(): number;
    joinRoom(roomId: string, setup: RCRTCRoomSetup): number;
    leaveRoom(): number;
    publish(type: RCRTCMediaType): number;
    unpublish(type: RCRTCMediaType): number;
    subscribe(userId: string, type: RCRTCMediaType, tiny?: boolean): number;
    subscribes(userIds: string[], type: RCRTCMediaType, tiny?: boolean): number;
    unsubscribe(userId: string, type: RCRTCMediaType): number;
    unsubscribes(userIds: string[], type: RCRTCMediaType): number;
    subscribeLiveMix(type: RCRTCMediaType, tiny?: boolean): number;
    unsubscribeLiveMix(type: RCRTCMediaType): number;
    setAudioConfig(config: RCRTCAudioConfig): number;
    setVideoConfig(config: RCRTCVideoConfig, tiny?: boolean): number;
    enableMicrophone(enable: boolean): number;
    enableSpeaker(enable: boolean): number;
    adjustLocalVolume(volume: number): number;
    enableCamera(enable: boolean, camera?: RCRTCCamera): number;
    switchCamera(): number;
    whichCamera(): RCRTCCamera;
    isCameraFocusSupported(): boolean;
    isCameraExposurePositionSupported(): boolean;
    setCameraFocusPositionInPreview(x: number, y: number): number;
    setCameraExposurePositionInPreview(x: number, y: number): number;
    setCameraCaptureOrientation(orientation: RCRTCCameraCaptureOrientation): number;
    setLocalView(ref: string, callback: (code: number) => {}): void;
    removeLocalView(callback: (code: number) => {}): void;
    setRemoteView(userId: string, ref: string, callback: (code: number) => {}): void;
    removeRemoteView(userId: string, callback: (code: number) => {}): void;
    setLiveMixView(ref: string, callback: (code: number) => {}): void;
    removeLiveMixView(callback: (code: number) => {}): void;
    muteLocalStream(type: RCRTCMediaType, mute: boolean): number;
    muteRemoteStream(userId: string, type: RCRTCMediaType, mute: boolean): number;
    muteLiveMixStream(type: RCRTCMediaType, mute: boolean): number;
    addLiveCdn(url: string): number;
    removeLiveCdn(url: string): number;
    setLiveMixLayoutMode(mode: RCRTCLiveMixLayoutMode): number;
    setLiveMixRenderMode(mode: RCRTCLiveMixRenderMode): number;
    setLiveMixBackgroundColor(red: number, green: number, blue: number): number;
    setLiveMixCustomLayouts(layouts: RCRTCCustomLayout[]): number;
    setLiveMixCustomAudios(userIds: string[]): number;
    setLiveMixAudioBitrate(bitrate: number): number;
    setLiveMixVideoBitrate(bitrate: number, tiny?: boolean): number;
    setLiveMixVideoResolution(width: number, height: number, tiny?: boolean): number;
    setLiveMixVideoFps(fps: RCRTCVideoFps, tiny?: boolean): number;
    createAudioEffect(path: string, effectId: number): number;
    releaseAudioEffect(effectId: number): number;
    playAudioEffect(effectId: number, volume: number, loop?: number): number;
    pauseAudioEffect(effectId: number): number;
    pauseAllAudioEffects(): number;
    resumeAudioEffect(effectId: number): number;
    resumeAllAudioEffects(): number;
    stopAudioEffect(effectId: number): number;
    stopAllAudioEffects(): number;
    adjustAudioEffectVolume(effectId: number, volume: number): number;
    getAudioEffectVolume(effectId: number): number;
    adjustAllAudioEffectsVolume(volume: number): number;
    startAudioMixing(path: string, mode: RCRTCAudioMixingMode, playback?: boolean, loop?: number): number;
    stopAudioMixing(): number;
    pauseAudioMixing(): number;
    resumeAudioMixing(): number;
    adjustAudioMixingVolume(volume: number): number;
    adjustAudioMixingPlaybackVolume(volume: number): number;
    getAudioMixingPlaybackVolume(): number;
    adjustAudioMixingPublishVolume(volume: number): number;
    getAudioMixingPublishVolume(): number;
    setAudioMixingPosition(position: number): number;
    getAudioMixingPosition(): number;
    getAudioMixingDuration(): number;
    getSessionId(): string;
    createCustomStreamFromFile(path: string, tag: string, replace: boolean, playback: boolean): number;
    setCustomStreamVideoConfig(tag: string, config: RCRTCVideoConfig): number;
    muteLocalCustomStream(tag: string, mute: boolean): number;
    setLocalCustomStreamView(tag: string, ref: string, callback: (code: number) => {}): void;
    removeLocalCustomStreamView(tag: string, callback: (code: number) => {}): void;
    publishCustomStream(tag: string): number;
    unpublishCustomStream(tag: string): number;
    muteRemoteCustomStream(userId: string, tag: string, type: RCRTCMediaType, mute: boolean): number;
    setRemoteCustomStreamView(userId: string, tag: string, ref: string, callback: (code: number) => {}): void;
    removeRemoteCustomStreamView(userId: string, tag: string, callback: (code: number) => {}): void;
    subscribeCustomStream(userId: string, tag: string, type: RCRTCMediaType, tiny: boolean): number;
    unsubscribeCustomStream(userId: string, tag: string, type: RCRTCMediaType): number;
    requestJoinSubRoom(roomId: string, userId: string, autoLayout: boolean, extra?: string): number;
    cancelJoinSubRoomRequest(roomId: string, userId: string, extra?: string): number;
    responseJoinSubRoomRequest(roomId: string, userId: string, agree: boolean, autoLayout: boolean, extra?: string): number;
    joinSubRoom(roomId: string): number;
    leaveSubRoom(roomId: string, disband: boolean): number;
    setLiveMixInnerCdnStreamView(ref: string, callback: (code: number) => {}): void;
    setWatermark(path: string, positionX: number, positionY: number, zoom: number): number;
    startNetworkProbe(): number;
    private _getFullEventName;
    private _invokeMethod;
    private _setListener;
    setOnErrorListener(callback?: (result: OnErrorResult) => void): void;
    setOnKickedListener(callback?: (result: OnKickedResult) => void): void;
    setOnRoomJoinedListener(callback?: (result: OnRoomJoinedResult) => void): void;
    setOnRoomLeftListener(callback?: (result: OnRoomLeftResult) => void): void;
    setOnPublishedListener(callback?: (result: OnPublishedResult) => void): void;
    setOnUnpublishedListener(callback?: (result: OnUnpublishedResult) => void): void;
    setOnSubscribedListener(callback?: (result: OnSubscribedResult) => void): void;
    setOnUnsubscribedListener(callback?: (result: OnUnsubscribedResult) => void): void;
    setOnLiveMixSubscribedListener(callback?: (result: OnLiveMixSubscribedResult) => void): void;
    setOnLiveMixUnsubscribedListener(callback?: (result: OnLiveMixUnsubscribedResult) => void): void;
    setOnCameraEnabledListener(callback?: (result: OnCameraEnabledResult) => void): void;
    setOnCameraSwitchedListener(callback?: (result: OnCameraSwitchedResult) => void): void;
    setOnLiveCdnAddedListener(callback?: (result: OnLiveCdnAddedResult) => void): void;
    setOnLiveCdnRemovedListener(callback?: (result: OnLiveCdnRemovedResult) => void): void;
    setOnLiveMixLayoutModeSetListener(callback?: (result: OnLiveMixLayoutModeSetResult) => void): void;
    setOnLiveMixRenderModeSetListener(callback?: (result: OnLiveMixRenderModeSetResult) => void): void;
    setOnLiveMixBackgroundColorSetListener(callback?: BaseCallback<OnLiveMixBackgroundColorSetResult>): void;
    setOnLiveMixCustomAudiosSetListener(callback?: (result: OnLiveMixCustomAudiosSetResult) => void): void;
    setOnLiveMixCustomLayoutsSetListener(callback?: (result: OnLiveMixCustomLayoutsSetResult) => void): void;
    setOnLiveMixAudioBitrateSetListener(callback?: (result: OnLiveMixAudioBitrateSetResult) => void): void;
    setOnLiveMixVideoBitrateSetListener(callback?: (result: OnLiveMixVideoBitrateSetResult) => void): void;
    setOnLiveMixVideoResolutionSetListener(callback?: (result: OnLiveMixVideoResolutionSetResult) => void): void;
    setOnLiveMixVideoFpsSetListener(callback?: (result: OnLiveMixVideoFpsSetResult) => void): void;
    setOnAudioEffectCreatedListener(callback?: (result: OnAudioEffectCreatedResult) => void): void;
    setOnAudioEffectFinishedListener(callback?: (result: OnAudioEffectFinishedResult) => void): void;
    setOnAudioMixingStartedListener(callback?: (result: void) => void): void;
    setOnAudioMixingPausedListener(callback?: (result: void) => void): void;
    setOnAudioMixingStoppedListener(callback?: (result: void) => void): void;
    setOnAudioMixingFinishedListener(callback?: (result: void) => void): void;
    setOnUserJoinedListener(callback?: (result: OnUserJoinedResult) => void): void;
    setOnUserOfflineListener(callback?: (result: OnUserOfflineResult) => void): void;
    setOnUserLeftListener(callback?: (result: OnUserLeftResult) => void): void;
    setOnRemotePublishedListener(callback?: (result: OnRemotePublishedResult) => void): void;
    setOnRemoteUnpublishedListener(callback?: (result: OnRemoteUnpublishedResult) => void): void;
    setOnRemoteLiveMixPublishedListener(callback?: (result: OnRemoteLiveMixPublishedResult) => void): void;
    setOnRemoteLiveMixUnpublishedListener(callback?: (result: OnRemoteLiveMixUnpublishedResult) => void): void;
    setOnRemoteStateChangedListener(callback?: (result: OnRemoteStateChangedResult) => void): void;
    setOnRemoteFirstFrameListener(callback?: (result: OnRemoteFirstFrameResult) => void): void;
    setOnRemoteLiveMixFirstFrameListener(callback?: (result: OnRemoteLiveMixFirstFrameResult) => void): void;
    setOnCustomStreamPublishedListener(callback?: (result: OnCustomStreamPublishedResult) => void): void;
    setOnCustomStreamUnpublishedListener(callback?: (result: OnCustomStreamUnpublishedResult) => void): void;
    setOnCustomStreamPublishFinishedListener(callback?: (result: OnCustomStreamPublishFinishedResult) => void): void;
    setOnRemoteCustomStreamPublishedListener(callback?: (result: OnRemoteCustomStreamPublishedResult) => void): void;
    setOnRemoteCustomStreamUnpublishedListener(callback?: (result: OnRemoteCustomStreamUnpublishedResult) => void): void;
    setOnRemoteCustomStreamStateChangedListener(callback?: (result: OnRemoteCustomStreamStateChangedResult) => void): void;
    setOnRemoteCustomStreamFirstFrameListener(callback?: (result: OnRemoteCustomStreamFirstFrameResult) => void): void;
    setOnCustomStreamSubscribedListener(callback?: (result: OnCustomStreamSubscribedResult) => void): void;
    setOnCustomStreamUnsubscribedListener(callback?: (result: OnCustomStreamUnsubscribedResult) => void): void;
    setOnJoinSubRoomRequestedListener(callback?: (result: OnJoinSubRoomRequestedResult) => void): void;
    setOnJoinSubRoomRequestCanceledListener(callback?: (result: OnJoinSubRoomRequestCanceledResult) => void): void;
    setOnJoinSubRoomRequestRespondedListener(callback?: (result: OnJoinSubRoomRequestRespondedResult) => void): void;
    setOnJoinSubRoomRequestReceivedListener(callback?: (result: OnJoinSubRoomRequestReceivedResult) => void): void;
    setOnCancelJoinSubRoomRequestReceivedListener(callback?: (result: OnCancelJoinSubRoomRequestReceivedResult) => void): void;
    setOnJoinSubRoomRequestResponseReceivedListener(callback?: (result: OnJoinSubRoomRequestResponseReceivedResult) => void): void;
    setOnSubRoomJoinedListener(callback?: (result: OnSubRoomJoinedResult) => void): void;
    setOnSubRoomLeftListener(callback?: (result: OnSubRoomLeftResult) => void): void;
    setOnSubRoomBandedListener(callback?: (result: OnSubRoomBandedResult) => void): void;
    setOnSubRoomDisbandListener(callback?: (result: OnSubRoomDisbandResult) => void): void;
    setOnNetworkStatsListener(callback?: (result: RCRTCNetworkStats) => void): void;
    setOnLocalAudioStatsListener(callback?: (result: RCRTCLocalAudioStats) => void): void;
    setOnLocalVideoStatsListener(callback?: (result: RCRTCLocalVideoStats) => void): void;
    setOnRemoteAudioStatsListener(callback?: (result: OnRemoteAudioStatsResult) => void): void;
    setOnRemoteVideoStatsListener(callback?: (result: OnRemoteVideoStatsResult) => void): void;
    setOnLiveMixAudioStatsListener(callback?: (result: RCRTCRemoteAudioStats) => void): void;
    setOnLiveMixVideoStatsListener(callback?: (result: RCRTCRemoteVideoStats) => void): void;
    setOnLiveMixMemberAudioStatsListener(callback?: (result: OnLiveMixMemberAudioStatsResult) => void): void;
    setOnLiveMixMemberCustomAudioStatsListener(callback?: (result: OnLiveMixMemberCustomAudioStatsResult) => void): void;
    setOnLocalCustomAudioStatsListener(callback?: (result: OnLocalCustomAudioStatsResult) => void): void;
    setOnLocalCustomVideoStatsListener(callback?: (result: OnLocalCustomVideoStatsResult) => void): void;
    setOnRemoteCustomAudioStatsListener(callback?: (result: OnRemoteCustomAudioStatsResult) => void): void;
    setOnRemoteCustomVideoStatsListener(callback?: (result: OnRemoteCustomVideoStatsResult) => void): void;
    /**
     * 网络检测上行回调
     */
    setOnNetworkProbeUpLinkStatsListener(callback?: (res: OnNetworkProbeUpLinkStatsResult) => void): void;
    /**
     * 网络检测下行回调
     */
    setOnNetworkProbeDownLinkStatsListener(callback?: (res: OnNetworkProbeDownLinkStatsResult) => void): void;
    /**
     * 角色切换回调
     */
    setOnLiveRoleSwitchedListener(callback?: (res: OnLiveRoleSwitchedResult) => void): void;
    /**
     * 远端角色切换回调
     */
    setOnRemoteLiveRoleSwitchedListener(callback?: (res: OnRemoteLiveRoleSwitchedResult) => void): void;
    /**
     * 停止所有远端音频数据渲染
     * @param mute   true: 不渲染 false: 渲染
     * @return 0: 成功, 非0: 失败
     */
    muteAllRemoteAudioStreams(mute: boolean): number;
    /**
     * 切换直播角色
     * @return 0: 成功, 非0: 失败
     */
    switchLiveRole(role: RCRTCRole): number;
    /**
     * 开启直播内置 cdn 功能
     * @param enable
     * @return 0: 成功, 非0: 失败
     */
    enableLiveMixInnerCdnStream(enable: boolean): number;
    /**
     * 订阅直播内置 cdn 流
     * @return 0: 成功, 非0: 失败
     */
    subscribeLiveMixInnerCdnStream(): number;
    /**
     * 取消订阅直播内置 cdn 流
     * @return 0: 成功, 非0: 失败
     */
    unsubscribeLiveMixInnerCdnStream(): number;
    /**
     * 移除直播内置 cdn 流预览窗口
     * @return 0: 成功, 非0: 失败
     */
    removeLiveMixInnerCdnStreamView(): number;
    /**
     * 观众端 设置订阅 cdn 流的分辨率
     * @param width    分辨率宽
     * @param height   高
     * @return 接口调用状态码 0: 成功, 非0: 失败
     */
    setLocalLiveMixInnerCdnVideoResolution(width: number, height: number): number;
    /**
     * 观众端设置订阅 cdn 流的帧率
     * @param fps   帧率
     * @return 接口调用状态码 0: 成功, 非0: 失败
     */
    setLocalLiveMixInnerCdnVideoFps(fps: RCRTCVideoFps): number;
    /**
     * 观众端禁用或启用融云内置 CDN 流
     * @param mute  true: 停止资源渲染，false: 恢复资源渲染
     * @return 接口调用状态码 0: 成功, 非0: 失败
     */
    muteLiveMixInnerCdnStream(mute: boolean): number;
    /**
     * 移除水印
     * @return 接口调用状态码 0: 成功, 非0: 失败
     */
    removeWatermark(): number;
    /**
     * 停止网络探测
     * @return 接口调用状态码 0: 成功, 非0: 失败
     */
    stopNetworkProbe(): number;
    /**
     * 开始麦克风&扬声器检测
     * @param timeInterval 麦克风录制时间
     * @return 接口调用状态码 0: 成功, 非0: 失败
     */
    startEchoTest(timeInterval: number): number;
    /**
     * 停止麦克风&扬声器检测，结束检测后必须手动调用停止方法
     * @return 接口调用状态码 0: 成功, 非0: 失败
     */
    stopEchoTest(): number;
    /**
     * 开启 SEI 功能，观众身份调用无效
     * @param enable 是否开启
     * @return 接口调用状态码 0: 成功, 非0: 失败
     */
    enableSei(enable: boolean): number;
    /**
     * 发送 SEI 信息，需开启 SEI 功能之后调用
     * @param sei SEI 信息
     * @return 接口调用状态码 0: 成功, 非0: 失败
     */
    sendSei(sei: string): number;
    /**
     * 预链接到媒体服务器
     * @return 接口调用状态码 0: 成功, 非0: 失败
     */
    preconnectToMediaServer(): number;
    /**
     * 开启直播内置 cdn 结果回调
     */
    setOnLiveMixInnerCdnStreamEnabledListener(callback?: (res: OnLiveMixInnerCdnStreamEnabledResult) => void): void;
    /**
 *
      直播内置 cdn 资源发布回调
     
 */
    setOnRemoteLiveMixInnerCdnStreamPublishedListener(callback?: (res: OnRemoteLiveMixInnerCdnStreamPublishedResult) => void): void;
    /**
 *
      直播内置 cdn 资源取消发布回调
     
 */
    setOnRemoteLiveMixInnerCdnStreamUnpublishedListener(callback?: (res: OnRemoteLiveMixInnerCdnStreamUnpublishedResult) => void): void;
    /**
     * 订阅直播内置 cdn 资源回调
     */
    setOnLiveMixInnerCdnStreamSubscribedListener(callback?: (res: OnLiveMixInnerCdnStreamSubscribedResult) => void): void;
    /**
     * 取消订阅直播内置 cdn 资源回调
     */
    setOnLiveMixInnerCdnStreamUnsubscribedListener(callback?: (res: OnLiveMixInnerCdnStreamUnsubscribedResult) => void): void;
    /**
     * 观众端设置订阅 cdn 流的分辨率的回调
     */
    setOnLocalLiveMixInnerCdnVideoResolutionSetListener(callback?: (res: OnLocalLiveMixInnerCdnVideoResolutionSetResult) => void): void;
    /**
     * 观众端 设置订阅 cdn 流的帧率的回调
     */
    setOnLocalLiveMixInnerCdnVideoFpsSetListener(callback?: (res: OnLocalLiveMixInnerCdnVideoFpsSetResult) => void): void;
    /**
     * 设置水印的回调
     */
    setOnWatermarkSetListener(callback?: (res: OnWatermarkSetResult) => void): void;
    /**
     * 移除水印的回调
     */
    setOnWatermarkRemovedListener(callback?: (res: OnWatermarkRemovedResult) => void): void;
    /**
     * 开启网络探测结果回调
     */
    setOnNetworkProbeStartedListener(callback?: (res: OnNetworkProbeStartedResult) => void): void;
    /**
     * 关闭网络探测结果回调
     */
    setOnNetworkProbeStoppedListener(callback?: (res: OnNetworkProbeStoppedResult) => void): void;
    /**
     * 开启 SEI 功能结果回调
     */
    setOnSeiEnabledListener(callback?: (res: OnSeiEnabledResult) => void): void;
    /**
     * 收到 SEI 信息回调
     */
    setOnSeiReceivedListener(callback?: (res: OnSeiReceivedResult) => void): void;
    /**
     * 观众收到合流 SEI 信息回调
     */
    setOnLiveMixSeiReceivedListener(callback?: (res: OnLiveMixSeiReceivedResult) => void): void;
    setOnNetworkProbeFinishedListener(callback?: (res: OnNetworkProbeFinishedResult) => void): void;
}
/**
 * Engine 方法定义
 *
 * @interface RCRTCEngineInterface
 */
export interface RCRTCEngineInterface {
    /**
     * 销毁实例
     * @return {*}  {number} 错误码
     * @memberof RCRTCEngineInterface
     */
    destroy(): number;
    /**
     * 加入房间
     *
     * @param {string} roomId 房间id
     * @param {RCRTCRoomSetup} setup 房间配置
     * @return {*}  {number} 错误码
     * @memberof RCRTCEngineInterface
     */
    joinRoom(roomId: string, setup: RCRTCRoomSetup): number;
    /**
     * 离开房间
     *
     * @return {*}  {number} 错误码
     * @memberof RCRTCEngineInterface
     */
    leaveRoom(): number;
    /**
     * 加入房间后, 发布本地资源
     *
     * @param {RCRTCMediaType} type 媒体资源类型
     * @return {*}  {number} 错误码
     * @memberof RCRTCEngineInterface
     */
    publish(type: RCRTCMediaType): number;
    /**
     * 加入房间后, 取消发布已经发布的本地资源
     *
     * @param {RCRTCMediaType} type 媒体资源类型
     * @return {*}  {number} 错误码
     * @memberof RCRTCEngineInterface
     */
    unpublish(type: RCRTCMediaType): number;
    /**
     *
     * @param userId 远端用户 userId
     * @param type 媒体资源类型
     * @param tiny 视频小流, true:订阅视频小流 false:订阅视频大流
     * @returns number 错误码
     * @memberof RCRTCEngineInterface
     */
    subscribe(userId: string, type: RCRTCMediaType, tiny: boolean): number;
    /**
     * 加入房间后, 订阅远端多个用户发布的资源
     *
     * @param {string[]} userIds 远端用户 userId 数组
     * @param {RCRTCMediaType} type 媒体资源类型
     * @param {boolean} tiny 是否视频小流 true:订阅视频小流 false:订阅视频大流
     * @return {*}  {number} 错误码
     * @memberof RCRTCEngineInterface
     */
    subscribes(userIds: string[], type: RCRTCMediaType, tiny: boolean): number;
    /**
     * 加入房间后, 取消订阅远端单个用户发布的资源
     *
     * @param {string} userId 远端用户 userId
     * @param {RCRTCMediaType} type 媒体资源类型
     * @return {*}  {number} 错误码
     * @memberof RCRTCEngineInterface
     */
    unsubscribe(userId: string, type: RCRTCMediaType): number;
    /**
     * 加入房间后, 取消订阅远端多个用户发布的资源
     *
     * @param {string[]} userIds 远端用户 userId 数组
     * @param {RCRTCMediaType} type 媒体资源类型
     * @return {*}  {number} 错误码
     * @memberof RCRTCEngineInterface
     */
    unsubscribes(userIds: string[], type: RCRTCMediaType): number;
    /**
     * 订阅主播合流资源, 仅供直播观众用户使用
     *
     * @param {RCRTCMediaType} type 媒体资源类型
     * @param {boolean} tiny 是否视频小流 true:订阅视频小流 false:订阅视频大流
     * @return {*}  {number} 错误码
     * @memberof RCRTCEngineInterface
     */
    subscribeLiveMix(type: RCRTCMediaType, tiny: boolean): number;
    /**
     * 取消订阅主播合流资源, 仅供直播观众用户使用
     *
     * @param {RCRTCMediaType} type 媒体资源类型
     * @return {*}  {number} 错误码
     * @memberof RCRTCEngineInterface
     */
    unsubscribeLiveMix(type: RCRTCMediaType): number;
    /**
     * 设置默认音频参数, 仅供会议用户或直播主播用户使用
     *
     * @param {RCRTCAudioConfig} config 音频配置
     * @return {*}  {number} 错误码
     * @memberof RCRTCEngineInterface
     */
    setAudioConfig(config: RCRTCAudioConfig): number;
    /**
     * 设置默认视频参数, 仅供会议用户或直播主播用户使用
     *
     * @param {RCRTCVideoConfig} config 视频配置
     * @param {false} [tiny] 是否小流 true:视频小流 false:视频大流
     * @return {*}  {number} 错误码
     * @memberof RCRTCEngineInterface
     */
    setVideoConfig(config: RCRTCVideoConfig, tiny: boolean): number;
    /**
     * 打开/关闭麦克风
     *
     * @param {boolean} enable true 打开, false 关闭
     * @return {*}  {number} 错误码
     * @memberof RCRTCEngineInterface
     */
    enableMicrophone(enable: boolean): number;
    /**
     * 打开/关闭外放
     *
     * @param {boolean} enable true 打开, false 关闭
     * @return {*}  {number} 错误码
     * @memberof RCRTCEngineInterface
     */
    enableSpeaker(enable: boolean): number;
    /**
     * 设置麦克风的音量
     *
     * @param {number} volume 0 ~ 100, 默认值: 100
     * @return {*}  {number} 错误码
     * @memberof RCRTCEngineInterface
     */
    adjustLocalVolume(volume: number): number;
    /**
     * 打开/关闭摄像头
     *
     * @param {boolean} enable true：打开， false：关闭
     * @param {RCRTCCamera} camera 摄像头类型
     * @return {*}  {number} 错误码
     * @memberof RCRTCEngineInterface
     */
    enableCamera(enable: boolean, camera: RCRTCCamera): number;
    /**
     * 切换前后摄像头
     *
     * @return {*}  {number} 错误码
     * @memberof RCRTCEngineInterface
     */
    switchCamera(): number;
    /**
     * 获取当前使用摄像头位置
     *
     * @return {*}  {RCRTCCamera} 摄像头类型
     * @memberof RCRTCEngineInterface
     */
    whichCamera(): RCRTCCamera;
    /**
     * 获取摄像头是否支持区域对焦
     *
     * @return {*}  {boolean} true: 支持  false: 不支持
     * @memberof RCRTCEngineInterface
     */
    isCameraFocusSupported(): boolean;
    /**
     * 获取摄像头是否支持区域测光
     *
     * @return {*}  {boolean} true: 支持  false: 不支持
     * @memberof RCRTCEngineInterface
     */
    isCameraExposurePositionSupported(): boolean;
    /**
     * 设置在指定点区域对焦
     *
     * @param {number} x 对焦点，视图上的 x 轴坐标
     * @param {number} y 对焦点，视图上的 y 轴坐标
     * @return {*}  {number}
     * @memberof RCRTCEngineInterface
     */
    setCameraFocusPositionInPreview(x: number, y: number): number;
    /**
     * 设置在指定点区域测光
     *
     * @param {number} x 曝光点，视图上的 x 轴坐标
     * @param {number} y 曝光点，视图上的 y 轴坐标
     * @return {*}  {number}
     * @memberof RCRTCEngineInterface
     */
    setCameraExposurePositionInPreview(x: number, y: number): number;
    /**
     * 设置摄像头采集方向
     *
     * @param {RCRTCCameraCaptureOrientation} orientation 默认以 Portrait 角度进行采集
     * @return {*}  {number}
     * @memberof RCRTCEngineInterface
     */
    setCameraCaptureOrientation(orientation: RCRTCCameraCaptureOrientation): number;
    /**
     * 设置本地视频渲染窗口
     *
     * @param {string} ref 视频预览组件的 ref 值
     * @param {(code: number) => {}} callback
     * @memberof RCRTCEngineInterface
     */
    setLocalView(ref: string, callback: (code: number) => {}): void;
    /**
     * 移除本地视频渲染窗口
     *
     * @param {(code: number) => {}} callback
     * @memberof RCRTCEngineInterface
     */
    removeLocalView(callback: (code: number) => {}): void;
    /**
     * 设置远端视频窗口
     *
     * @param {string} userId 远端用户 userId
     * @param {string} ref 视频预览组件的 ref 值
     * @param {(code: number) => {}} callback
     * @memberof RCRTCEngineInterface
     */
    setRemoteView(userId: string, ref: string, callback: (code: number) => {}): void;
    /**
     * 移除远端视频窗口
     *
     * @param {string} userId 远端用户 userId
     * @param {(code: number) => {}} callback
     * @memberof RCRTCEngineInterface
     */
    removeRemoteView(userId: string, callback: (code: number) => {}): void;
    /**
     * 设置合流视频窗口
     *
     * @param {string} ref 视频预览组件的 ref 值
     * @param {(code: number) => {}} callback
     * @memberof RCRTCEngineInterface
     */
    setLiveMixView(ref: string, callback: (code: number) => {}): void;
    /**
     * 移除合流视频窗口
     *
     * @param {(code: number) => {}} callback
     * @memberof RCRTCEngineInterface
     */
    removeLiveMixView(callback: (code: number) => {}): void;
    /**
     * 停止本地音视频数据发送
     *
     * @param {RCRTCMediaType} type 媒体类型
     * @param {boolean} mute true: 不发送 false: 发送
     * @return {*}  {number} 错误码
     * @memberof RCRTCEngineInterface
     */
    muteLocalStream(type: RCRTCMediaType, mute: boolean): number;
    /**
     * 停止远端用户音视频数据的接收
     *
     * @param {string} userId 远端用户 userId
     * @param {RCRTCMediaType} type 媒体类型
     * @param {boolean} mute true: 不发送 false: 发送
     * @return {*}  {number} 错误码
     * @memberof RCRTCEngineInterface
     */
    muteRemoteStream(userId: string, type: RCRTCMediaType, mute: boolean): number;
    /**
     * 设置 CDN 直播推流地址, 仅供直播主播用户使用
     *
     * @param {string} url 推流地址
     * @return {*}  {number} 错误码
     * @memberof RCRTCEngineInterface
     */
    addLiveCdn(url: string): number;
    /**
     * 移除 CDN 直播推流地址, 仅供直播主播用户使用
     *
     * @param {string} url 推流地址
     * @return {*}  {number} 错误码
     * @memberof RCRTCEngineInterface
     */
    removeLiveCdn(url: string): number;
    /**
     * 设置直播合流布局类型, 仅供直播主播用户使用
     *
     * @param {RCRTCLiveMixLayoutMode} mode 布局类型
     * @return {*}  {number} 错误码
     * @memberof RCRTCEngineInterface
     */
    setLiveMixLayoutMode(mode: RCRTCLiveMixLayoutMode): number;
    /**
     * 设置直播合流布局填充类型, 仅供直播主播用户使用
     *
     * @param {RCRTCLiveMixRenderMode} mode 填充类型
     * @return {*}  {number} 错误码
     * @memberof RCRTCEngineInterface
     * @memberof RCRTCEngineInterface
     */
    setLiveMixRenderMode(mode: RCRTCLiveMixRenderMode): number;
    /**
     * 设置直播合流布局背景颜色 仅供直播主播用户使用
     *
     * @param {number} red 取值范围: 0 ~ 255
     * @param {number} green 取值范围: 0 ~ 255
     * @param {number} blue 0 ~ 255
     * @return {*}  {number} 错误码
     * @memberof RCRTCEngineInterface
     */
    setLiveMixBackgroundColor(red: number, green: number, blue: number): number;
    /**
     * 设置直播混流布局配置, 仅供直播主播用户使用
     *
     * @param {RCRTCCustomLayout[]} layouts 混流布局列表
     * @return {*}  {number}
     * @memberof RCRTCEngineInterface
     */
    setLiveMixCustomLayouts(layouts: RCRTCCustomLayout[]): number;
    /**
     * 设置直播自定义音频流列表, 仅供直播主播用户使用
     *
     * @param {string[]} userIds 音频流列表
     * @return {*}  {number} 错误码
     * @memberof RCRTCEngineInterface
     */
    setLiveMixCustomAudios(userIds: string[]): number;
    /**
     * 设置直播合流音频码率, 仅供直播主播用户使用
     *
     * @param {number} bitrate 音频码率 单位：kbps
     * @return {*}  {number}
     * @memberof RCRTCEngineInterface
     */
    setLiveMixAudioBitrate(bitrate: number): number;
    /**
     * 设置直播合流视频码率, 仅供直播主播用户使用
     *
     * @param {number} bitrate 音频码率 单位：kbps
     * @param {false} [tiny] 是否小流 true:视频小流 false:视频大流，默认值 false
     * @return {*}  {number}
     * @memberof RCRTCEngineInterface
     */
    setLiveMixVideoBitrate(bitrate: number, tiny: boolean): number;
    /**
     * 设置直播合流视频分辨率, 仅供直播主播用户使用
     *
     * @param {number} width 视频宽度
     * @param {number} height 视频高度
     * @param {false} tiny 是否小流 true:视频小流 false:视频大流，默认值 false
     * @return {*}  {number}
     * @memberof RCRTCEngineInterface
     */
    setLiveMixVideoResolution(width: number, height: number, tiny: boolean): number;
    /**
     * 设置直播合流视频帧率, 仅供直播主播用户使用
     *
     * @param {RCRTCVideoFps} fps 帧率
     * @param {false} tiny 是否小流 true:视频小流 false:视频大流，默认值 false
     * @return {*}  {number}
     * @memberof RCRTCEngineInterface
     */
    setLiveMixVideoFps(fps: RCRTCVideoFps, tiny: boolean): number;
    /**
     * 创建音效文件缓存, 仅供会议用户或直播主播用户使用
     *
     * @param {string} path 本地文件地址
     * @param {number} effectId 自定义全局唯一音效Id
     * @return {*}  {number}
     * @memberof RCRTCEngineInterface
     */
    createAudioEffect(path: string, effectId: number): number;
    /**
     * 释放音效文件缓存, 仅供会议用户或直播主播用户使用
     *
     * @param {number} effectId 自定义全局唯一音效Id
     * @return {*}  {number}
     * @memberof RCRTCEngineInterface
     */
    releaseAudioEffect(effectId: number): number;
    /**
     * 播放音效文件, 仅供会议用户或直播主播用户使用
     *
     * @param {number} effectId 自定义全局唯一音效Id
     * @param {number} volume 音效文件播放音量
     * @param {boolean} loop 循环播放次数 默认：1次
     * @return {*}  {number}
     * @memberof RCRTCEngineInterface
     */
    playAudioEffect(effectId: number, volume: number, loop: number): number;
    /**
     * 暂停音效文件播放, 仅供会议用户或直播主播用户使用
     *
     * @param {number} effectId 自定义全局唯一音效Id
     * @return {*}  {number} 错误码
     * @memberof RCRTCEngineInterface
     */
    pauseAudioEffect(effectId: number): number;
    /**
     * 暂停全部音效文件播放, 仅供会议用户或直播主播用户使用
     *
     * @return {*}  {number} 错误码
     * @memberof RCRTCEngineInterface
     */
    pauseAllAudioEffects(): number;
    /**
     * 恢复音效文件播放, 仅供会议用户或直播主播用户使用
     *
     * @param {number} effectId 自定义全局唯一音效Id
     * @return {*}  {number} 错误码
     * @memberof RCRTCEngineInterface
     */
    resumeAudioEffect(effectId: number): number;
    /**
     * 恢复全部音效文件播放, 仅供会议用户或直播主播用户使用
     *
     * @return {*}  {number} 错误码
     * @memberof RCRTCEngineInterface
     */
    resumeAllAudioEffects(): number;
    /**
     * 停止音效文件播放, 仅供会议用户或直播主播用户使用
     *
     * @param {number} effectId 自定义全局唯一音效Id
     * @return {*}  {number} 错误码
     * @memberof RCRTCEngineInterface
     */
    stopAudioEffect(effectId: number): number;
    /**
     * 停止全部音效文件播放, 仅供会议用户或直播主播用户使用
     *
     * @return {*}  {number} 错误码
     * @memberof RCRTCEngineInterface
     */
    stopAllAudioEffects(): number;
    /**
     * 设置音效文件播放音量, 仅供会议用户或直播主播用户使用
     *
     * @param {number} effectId 自定义全局唯一音效Id
     * @param {number} volume 音量 0~100, 默认 100
     * @return {*}  {number} 错误码
     * @memberof RCRTCEngineInterface
     */
    adjustAudioEffectVolume(effectId: number, volume: number): number;
    /**
     * 获取音效文件播放音量, 仅供会议用户或直播主播用户使用
     *
     * @param {number} effectId 自定义全局唯一音效Id
     * @return {*}  {number} 音量，如果小于 0，则是错误码，错误码对应 number
     * @memberof RCRTCEngineInterface
     */
    getAudioEffectVolume(effectId: number): number;
    /**
     * 设置全局音效文件播放音量, 仅供会议用户或直播主播用户使用
     *
     * @param {number} volume 音量 0~100, 默认 100
     * @return {*}  {number} 错误码
     * @memberof RCRTCEngineInterface
     */
    adjustAllAudioEffectsVolume(volume: number): number;
    /**
     * 开始混音, 仅支持混合本地音频文件数据, 仅供会议用户或直播主播用户使用
     *
     * @param {string} path 仅支持本地音频文件
     * @param {RCRTCAudioMixingMode} mode  混音行为模式
     * @param {boolean} playback 是否本地播放， 默认 true
     * @param {number} loop 循环混音或者播放次数，默认播放 1 次
     * @return {*}  {number} 错误码
     * @memberof RCRTCEngineInterface
     * @category 混音
     */
    startAudioMixing(path: string, mode: RCRTCAudioMixingMode, playback: boolean, loop: number): number;
    /**
     * 停止混音, 仅供会议用户或直播主播用户使用
     *
     * @return {*}  {number} 错误码
     * @memberof RCRTCEngineInterface
     * @category 混音
     */
    stopAudioMixing(): number;
    /**
     * 暂停混音, 仅供会议用户或直播主播用户使用
     *
     * @return {*}  {number} 错误码
     * @memberof RCRTCEngineInterface
     * @category 混音
     */
    pauseAudioMixing(): number;
    /**
     * 恢复混音, 仅供会议用户或直播主播用户使用
     *
     * @return {*}  {number} 错误码
     * @memberof RCRTCEngineInterface
     */
    resumeAudioMixing(): number;
    /**
     * 设置混音输入音量, 包含本地播放和发送音量, 仅供会议用户或直播主播用户使用
     *
     * @param {number} volume 音量 0~100, 默认 100
     * @return {*}  {number}
     * @memberof RCRTCEngineInterface
     */
    adjustAudioMixingVolume(volume: number): number;
    /**
     * 设置混音本地播放音量, 仅供会议用户或直播主播用户使用
     *
     * @param {number} volume  音量 0~100, 默认 100
     * @return {*}  {number} 错误码
     * @memberof RCRTCEngineInterface
     */
    adjustAudioMixingPlaybackVolume(volume: number): number;
    /**
     * 获取混音本地播放音量, 仅供会议用户或直播主播用户使用
     *
     * @return {*}  {number} 音量，如果小于 0，则是错误码，错误码对应 number
     * @memberof RCRTCEngineInterface
     */
    getAudioMixingPlaybackVolume(): number;
    /**
     * 设置混音发送音量, 仅供会议用户或直播主播用户使用
     *
     * @param {number} volume 音量 0~100, 默认 100
     * @return {*}  {number}
     * @memberof RCRTCEngineInterface
     */
    adjustAudioMixingPublishVolume(volume: number): number;
    /**
     * 获取混音发送音量, 仅供会议用户或直播主播用户使用
     *
     * @return {*}  {number} 音量，如果小于 0，则是错误码，错误码对应 number
     * @memberof RCRTCEngineInterface
     */
    getAudioMixingPublishVolume(): number;
    /**
     * 设置混音文件合流进度, 仅供会议用户或直播主播用户使用
     *
     * @param {number} position 进度 0~1
     * @return {*}  {number}
     * @memberof RCRTCEngineInterface
     */
    setAudioMixingPosition(position: number): number;
    /**
     * 获取音频文件合流进度, 仅供会议用户或直播主播用户使用
     *
     * @return {*}  {number} 合流进度 0~1
     * @memberof RCRTCEngineInterface
     */
    getAudioMixingPosition(): number;
    /**
     * 获取音频文件时长, 单位:秒, 仅供会议用户或直播主播用户使用
     *
     * @return {*}  {number}  音频文件时长, 如果小于 0，则是错误码，错误码对应 number
     * @memberof RCRTCEngineInterface
     */
    getAudioMixingDuration(): number;
    /**
     * 获取当前房间的 SessionId, 仅在加入房间成功后可获取
     * 每次加入房间所得到的 SessionId 均不同
     *
     * @return {*}  {string} 获取到的 sessionId
     * @memberof RCRTCEngineInterface
     */
    getSessionId(): string;
    /**
     * 从视频文件创建自定义流, 仅供会议用户或直播主播用户使用
     *
     * @param {string} path 本地文件地址
     * @param {string} tag 自定义流全局唯一标签
     * @param {boolean} replace 是否替换音频流  true: 替换  false: 不替换
     * @param {boolean} playback 是否本地回放音频流  true: 回放  false: 不回放
     * @return {*}  {number} 错误码
     * @memberof RCRTCEngineInterface
     */
    createCustomStreamFromFile(path: string, tag: string, replace: boolean, playback: boolean): number;
    /**
     * 设置自定义流参数, 仅供会议用户或直播主播用户使用
     *
     * @param {string} tag 自定义流全局唯一标签
     * @param {RCRTCVideoConfig} config 视频参数
     * @return {*}  {number} 错误码
     * @memberof RCRTCEngineInterface
     */
    setCustomStreamVideoConfig(tag: string, config: RCRTCVideoConfig): number;
    /**
     * 停止自定义流发送, 仅供会议用户或直播主播用户使用
     *
     * @param {string} tag 自定义流全局唯一标签
     * @param {boolean} mute true: 不发送 false: 发送
     * @return {*}  {number} 错误码
     * @memberof RCRTCEngineInterface
     */
    muteLocalCustomStream(tag: string, mute: boolean): number;
    /**
     * 设置自定义流预览窗口, 仅供会议用户或直播主播用户使用
     *
     * @param {string} tag 自定义流全局唯一标签
     * @param {string} ref 视频预览组件的 ref 值
     * @param {(code: number) => {}} callback 调用完成的回调
     * @memberof RCRTCEngineInterface
     */
    setLocalCustomStreamView(tag: string, ref: string, callback: (code: number) => {}): void;
    /**
     * 移除自定义流预览窗口, 仅供会议用户或直播主播用户使用
     *
     * @param {string} tag 自定义流全局唯一标签
     * @param {(code: number) => {}} callback 调用完成的回调
     * @memberof RCRTCEngineInterface
     */
    removeLocalCustomStreamView(tag: string, callback: (code: number) => {}): void;
    /**
     * 发布自定义流, 仅供会议用户或直播主播用户使用
     *
     * @param {string} tag 自定义流全局唯一标签
     * @return {*}  {number} 错误码
     * @memberof RCRTCEngineInterface
     */
    publishCustomStream(tag: string): number;
    /**
     * 取消发布自定义流, 仅供会议用户或直播主播用户使用
     *
     * @param {string} tag 自定义流全局唯一标签
     * @return {*}  {number} 错误码
     * @memberof RCRTCEngineInterface
     */
    unpublishCustomStream(tag: string): number;
    /**
     * 停止远端用户自定义流数据的接收
     *
     * @param {string} userId 远端用户 userId
     * @param {string} tag 自定义流全局唯一标签
     * @param {RCRTCMediaType} type 远端自定义流类型
     * @param {boolean} mute true: 不接收 false: 接收
     * @return {*}  {number} 错误码
     * @memberof RCRTCEngineInterface
     */
    muteRemoteCustomStream(userId: string, tag: string, type: RCRTCMediaType, mute: boolean): number;
    /**
     * 设置远端自定义流View
     *
     * @param {string} userId 远端用户 userId
     * @param {string} tag 自定义流全局唯一标签
     * @param {string} ref 视频预览组件的 ref 值
     * @param {(code: number) => {}} callback 调用完成的回调
     * @memberof RCRTCEngineInterface
     */
    setRemoteCustomStreamView(userId: string, tag: string, ref: string, callback: (code: number) => {}): void;
    /**
     * 移除远端自定义流View
     *
     * @param {string} userId 远端用户 userId
     * @param {string} tag 自定义流全局唯一标签
     * @param {(code: number) => {}} callback 调用完成的回调
     * @memberof RCRTCEngineInterface
     */
    removeRemoteCustomStreamView(userId: string, tag: string, callback: (code: number) => {}): void;
    /**
     * 加入房间后, 订阅远端用户发布的自定义流
     *
     * @param {string} userId 远端用户 userId
     * @param {string} tag 自定义流全局唯一标签
     * @param {RCRTCMediaType} type 远端自定义流类型
     * @param {boolean} tiny true: 小流 false: 大流
     * @return {*}  {number} 错误码
     * @memberof RCRTCEngineInterface
     */
    subscribeCustomStream(userId: string, tag: string, type: RCRTCMediaType, tiny: boolean): number;
    /**
     * 加入房间后, 取消订阅远端用户发布的自定义流
     *
     * @param {string} userId 远端用户 userId
     * @param {string} tag 自定义流全局唯一标签
     * @param {RCRTCMediaType} type 远端自定义流类型
     * @return {*}  {number} 错误码
     * @memberof RCRTCEngineInterface
     */
    unsubscribeCustomStream(userId: string, tag: string, type: RCRTCMediaType): number;
    /**
     * 向指定用户发送跨房间连麦请求
     *
     * @param {string} roomId 房间 roomId
     * @param {string} userId 远端用户 userId
     * @param {boolean} autoLayout 是否将邀请人音视频资源发送到被邀请人房间中合流
     * @param {string} extra 附加信息, 可随消息发送给被邀请人
     * @return {*}  {number} 错误码
     * @memberof RCRTCEngineInterface
     */
    requestJoinSubRoom(roomId: string, userId: string, autoLayout: boolean, extra?: string): number;
    /**
     * 取消正在进行中的跨房间连麦请求
     *
     * @param {string} roomId 房间 roomId
     * @param {string} userId 远端用户 userId
     * @param {string} extra 附加信息, 可随消息发送给被邀请人
     * @return {*}  {number} 错误码
     * @memberof RCRTCEngineInterface
     */
    cancelJoinSubRoomRequest(roomId: string, userId: string, extra?: string): number;
    /**
     * 响应跨房间连麦请求
     *
     * @param {string} roomId 房间 roomId
     * @param {string} userId 远端用户 userId
     * @param {boolean} agree 是否同意加入副房间
     * @param {boolean} autoLayout 是否将邀请人音视频资源发送到被邀请人房间中合流
     * @param {string} extra 附加信息, 可随消息发送给被邀请人
     * @return {*}  {number} 错误码
     * @memberof RCRTCEngineInterface
     */
    responseJoinSubRoomRequest(roomId: string, userId: string, agree: boolean, autoLayout: boolean, extra?: string): number;
    /**
     * 连麦邀请后加入副房间
     *
     * @param {string} roomId 房间 roomId
     * @return {*}  {number} 错误码
     * @memberof RCRTCEngineInterface
     */
    joinSubRoom(roomId: string): number;
    /**
     * 离开副房间，此方法仅供连麦离开副房间使用
     *
     * @param {string} roomId 房间 roomId
     * @param {boolean} disband 是否通知所有连麦用户结束, true:通知  false:不通知
     * @return {*}  {number} 错误码
     * @memberof RCRTCEngineInterface
     */
    leaveSubRoom(roomId: string, disband: boolean): number;
    /**
     * 设置直播内置 cdn 流预览窗口
     *
     * @param {string} ref 视频预览组件的 ref 值
     * @param {(code: number) => {}} callback 调用完成的回调
     * @return 0: 成功, 非0: 失败
     */
    setLiveMixInnerCdnStreamView(ref: string, callback: (code: number) => {}): void;
    /**
     * 设置水印
     * @param path 水印图片
     * @param positionX  水印的位置,x坐标,参数取值范围 0 ~ 1，浮点型
     * @param positionY  水印的位置,y坐标,参数取值范围 0 ~ 1，浮点型
     * @param zoom  图片缩放系数,参数取值范围 0 ~ 1
     * SDK 内部会根据视频分辨率计算水印实际的像素位置和尺寸。
     * @return 接口调用状态码 0: 成功, 非0: 失败
     */
    setWatermark(path: string, positionX: number, positionY: number, zoom: number): number;
    /**
     * 开始网络探测
     * @return 接口调用状态码 0: 成功, 非0: 失败
     */
    startNetworkProbe(): number;
}
