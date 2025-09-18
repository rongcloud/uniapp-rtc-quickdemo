import { RCRTCCamera, RCRTCEngineEventsName, RCRTCStatsEventsName, } from './RCRTCDefines';
const RCUniRtc = uni.requireNativePlugin('RongCloud-RTC-RCUniRtc');
const Platform = uni.getSystemInfoSync().platform;
const EngineEventsPrefix = 'Engine:';
const StatsEventsPrefix = 'Stats:';
let engineInstance;
export default class RCRTCEngine {
    /**
     * 初始化
     *
     * @param setup 配置项
     * @memberof RCRTCEngineInterface
     */
    static create(setup) {
        if (!engineInstance) {
            let code = RCUniRtc.create(setup);
            if (code === 0) {
                engineInstance = new RCRTCEngine();
            }
        }
        return engineInstance;
    }
    destroy() {
        let code = RCUniRtc.destroy();
        if (code === 0) {
            engineInstance = null;
        }
        return code;
    }
    joinRoom(roomId, setup) {
        return RCUniRtc.joinRoom(roomId, setup);
    }
    leaveRoom() {
        return RCUniRtc.leaveRoom();
    }
    publish(type) {
        return RCUniRtc.publish(type);
    }
    unpublish(type) {
        return RCUniRtc.unpublish(type);
    }
    subscribe(userId, type, tiny = true) {
        return RCUniRtc.subscribe(userId, type, tiny);
    }
    subscribes(userIds, type, tiny = true) {
        return RCUniRtc.subscribe(userIds, type, tiny);
    }
    unsubscribe(userId, type) {
        return RCUniRtc.unsubscribe(userId, type);
    }
    unsubscribes(userIds, type) {
        return RCUniRtc.unsubscribes(userIds, type);
    }
    subscribeLiveMix(type, tiny = true) {
        return RCUniRtc.subscribeLiveMix(type, tiny);
    }
    unsubscribeLiveMix(type) {
        return RCUniRtc.unsubscribeLiveMix(type);
    }
    setAudioConfig(config) {
        return RCUniRtc.setAudioConfig(config);
    }
    setVideoConfig(config, tiny = false) {
        return RCUniRtc.setVideoConfig(config, tiny);
    }
    enableMicrophone(enable) {
        return RCUniRtc.enableMicrophone(enable);
    }
    enableSpeaker(enable) {
        return RCUniRtc.enableSpeaker(enable);
    }
    adjustLocalVolume(volume) {
        return RCUniRtc.adjustLocalVolume(volume);
    }
    enableCamera(enable, camera = RCRTCCamera.Front) {
        return RCUniRtc.enableCamera(enable, camera);
    }
    switchCamera() {
        return RCUniRtc.switchCamera();
    }
    whichCamera() {
        return RCUniRtc.whichCamera();
    }
    isCameraFocusSupported() {
        return RCUniRtc.isCameraFocusSupported();
    }
    isCameraExposurePositionSupported() {
        return RCUniRtc.isCameraExposurePositionSupported();
    }
    setCameraFocusPositionInPreview(x, y) {
        return RCUniRtc.setCameraFocusPositionInPreview(x, y);
    }
    setCameraExposurePositionInPreview(x, y) {
        return RCUniRtc.setCameraExposurePositionInPreview(x, y);
    }
    setCameraCaptureOrientation(orientation) {
        return RCUniRtc.setCameraCaptureOrientation(orientation);
    }
    setLocalView(ref, callback) {
        RCUniRtc.setLocalView(ref, callback);
    }
    removeLocalView(callback) {
        RCUniRtc.removeLocalView(callback);
    }
    setRemoteView(userId, ref, callback) {
        RCUniRtc.setRemoteView(userId, ref, callback);
    }
    removeRemoteView(userId, callback) {
        RCUniRtc.removeRemoteView(userId, callback);
    }
    setLiveMixView(ref, callback) {
        RCUniRtc.setLiveMixView(ref, callback);
    }
    removeLiveMixView(callback) {
        RCUniRtc.removeLiveMixView(callback);
    }
    muteLocalStream(type, mute) {
        return RCUniRtc.muteLocalStream(type, mute);
    }
    muteRemoteStream(userId, type, mute) {
        return RCUniRtc.muteRemoteStream(userId, type, mute);
    }
    muteLiveMixStream(type, mute) {
        return RCUniRtc.muteLiveMixStream(type, mute);
    }
    addLiveCdn(url) {
        return RCUniRtc.addLiveCdn(url);
    }
    removeLiveCdn(url) {
        return RCUniRtc.removeLiveCdn(url);
    }
    setLiveMixLayoutMode(mode) {
        return RCUniRtc.setLiveMixLayoutMode(mode);
    }
    setLiveMixRenderMode(mode) {
        return RCUniRtc.setLiveMixRenderMode(mode);
    }
    setLiveMixBackgroundColor(red, green, blue) {
        return RCUniRtc.setLiveMixBackgroundColor(red, green, blue);
    }
    setLiveMixCustomLayouts(layouts) {
        return RCUniRtc.setLiveMixCustomLayouts(layouts);
    }
    setLiveMixCustomAudios(userIds) {
        return RCUniRtc.setLiveMixCustomAudios(userIds);
    }
    setLiveMixAudioBitrate(bitrate) {
        return RCUniRtc.setLiveMixAudioBitrate(bitrate);
    }
    setLiveMixVideoBitrate(bitrate, tiny = false) {
        return RCUniRtc.setLiveMixVideoBitrate(bitrate, tiny);
    }
    setLiveMixVideoResolution(width, height, tiny = false) {
        return RCUniRtc.setLiveMixVideoResolution(width, height, tiny);
    }
    setLiveMixVideoFps(fps, tiny = false) {
        return RCUniRtc.setLiveMixVideoFps(fps, tiny);
    }
    createAudioEffect(path, effectId) {
        return RCUniRtc.createAudioEffect(path, effectId);
    }
    releaseAudioEffect(effectId) {
        return RCUniRtc.releaseAudioEffect(effectId);
    }
    playAudioEffect(effectId, volume, loop = 1) {
        return RCUniRtc.playAudioEffect(effectId, volume, loop);
    }
    pauseAudioEffect(effectId) {
        return RCUniRtc.pauseAudioEffect(effectId);
    }
    pauseAllAudioEffects() {
        return RCUniRtc.pauseAllAudioEffects();
    }
    resumeAudioEffect(effectId) {
        return RCUniRtc.resumeAudioEffect(effectId);
    }
    resumeAllAudioEffects() {
        return RCUniRtc.resumeAllAudioEffects();
    }
    stopAudioEffect(effectId) {
        return RCUniRtc.stopAudioEffect(effectId);
    }
    stopAllAudioEffects() {
        return RCUniRtc.stopAllAudioEffects();
    }
    adjustAudioEffectVolume(effectId, volume) {
        return RCUniRtc.adjustAudioEffectVolume(effectId, volume);
    }
    getAudioEffectVolume(effectId) {
        return RCUniRtc.getAudioEffectVolume(effectId);
    }
    adjustAllAudioEffectsVolume(volume) {
        return RCUniRtc.adjustAllAudioEffectsVolume(volume);
    }
    startAudioMixing(path, mode, playback = true, loop = 1) {
        return RCUniRtc.startAudioMixing(path, mode, playback, loop);
    }
    stopAudioMixing() {
        return RCUniRtc.stopAudioMixing();
    }
    pauseAudioMixing() {
        return RCUniRtc.pauseAudioMixing();
    }
    resumeAudioMixing() {
        return RCUniRtc.resumeAudioMixing();
    }
    adjustAudioMixingVolume(volume) {
        return RCUniRtc.adjustAudioMixingVolume(volume);
    }
    adjustAudioMixingPlaybackVolume(volume) {
        return RCUniRtc.adjustAudioMixingPlaybackVolume(volume);
    }
    getAudioMixingPlaybackVolume() {
        return RCUniRtc.getAudioMixingPlaybackVolume();
    }
    adjustAudioMixingPublishVolume(volume) {
        return RCUniRtc.adjustAudioMixingPublishVolume(volume);
    }
    getAudioMixingPublishVolume() {
        return RCUniRtc.getAudioMixingPublishVolume();
    }
    setAudioMixingPosition(position) {
        return RCUniRtc.setAudioMixingPosition(position);
    }
    getAudioMixingPosition() {
        return RCUniRtc.getAudioMixingPosition();
    }
    getAudioMixingDuration() {
        return RCUniRtc.getAudioMixingDuration();
    }
    getSessionId() {
        return RCUniRtc.getSessionId();
    }
    createCustomStreamFromFile(path, tag, replace, playback) {
        return RCUniRtc.createCustomStreamFromFile(path, tag, replace, playback);
    }
    setCustomStreamVideoConfig(tag, config) {
        return RCUniRtc.setCustomStreamVideoConfig(tag, config);
    }
    muteLocalCustomStream(tag, mute) {
        return RCUniRtc.muteLocalCustomStream(tag, mute);
    }
    setLocalCustomStreamView(tag, ref, callback) {
        RCUniRtc.setLocalCustomStreamView(tag, ref, callback);
    }
    removeLocalCustomStreamView(tag, callback) {
        RCUniRtc.removeLocalCustomStreamView(tag, callback);
    }
    publishCustomStream(tag) {
        return RCUniRtc.publishCustomStream(tag);
    }
    unpublishCustomStream(tag) {
        return RCUniRtc.unpublishCustomStream(tag);
    }
    muteRemoteCustomStream(userId, tag, type, mute) {
        return RCUniRtc.muteRemoteCustomStream(userId, tag, type, mute);
    }
    setRemoteCustomStreamView(userId, tag, ref, callback) {
        RCUniRtc.setRemoteCustomStreamView(userId, tag, ref, callback);
    }
    removeRemoteCustomStreamView(userId, tag, callback) {
        return RCUniRtc.removeRemoteCustomStreamView(userId, tag, callback);
    }
    subscribeCustomStream(userId, tag, type, tiny) {
        return RCUniRtc.subscribeCustomStream(userId, tag, type, tiny);
    }
    unsubscribeCustomStream(userId, tag, type) {
        return RCUniRtc.unsubscribeCustomStream(userId, tag, type);
    }
    requestJoinSubRoom(roomId, userId, autoLayout, extra) {
        return RCUniRtc.requestJoinSubRoom(roomId, userId, autoLayout, extra);
    }
    cancelJoinSubRoomRequest(roomId, userId, extra) {
        return RCUniRtc.cancelJoinSubRoomRequest(roomId, userId, extra);
    }
    responseJoinSubRoomRequest(roomId, userId, agree, autoLayout, extra) {
        return RCUniRtc.responseJoinSubRoomRequest(roomId, userId, agree, autoLayout, extra);
    }
    joinSubRoom(roomId) {
        return RCUniRtc.joinSubRoom(roomId);
    }
    leaveSubRoom(roomId, disband) {
        return RCUniRtc.leaveSubRoom(roomId, disband);
    }
    setLiveMixInnerCdnStreamView(ref, callback) {
        return RCUniRtc.setLiveMixInnerCdnStreamView(ref, callback);
    }
    setWatermark(path, positionX, positionY, zoom) {
        return RCUniRtc.setWatermark(path, positionX, positionY, zoom);
    }
    startNetworkProbe() {
        return RCUniRtc.startNetworkProbe();
    }
    /*  以下是事件回调相关的方法  */
    _getFullEventName(event) {
        if (event.includes(':')) {
            return event;
        }
        let prefix = '';
        if (Object.keys(RCRTCEngineEventsName).includes(event)) {
            prefix = EngineEventsPrefix;
        }
        else if (Object.keys(RCRTCStatsEventsName).includes(event)) {
            prefix = StatsEventsPrefix;
        }
        else {
            throw new Error('EventName not support.');
        }
        return prefix + event;
    }
    _invokeMethod(name, params) {
        console.log(`invokeMethod methodName: ${name}, params:${params}`);
        return new Promise((resolve, _) => {
            RCUniRtc.invokeMethod({ name, params }, (res) => {
                resolve(res);
            });
        });
    }
    _setListener(event, callback) {
        // 因为单个事件名只支持设置一个监听，所以要先移除已有的监听。
        RCUniRtc.removeAllEventListeners(this._getFullEventName(event));
        if (callback) {
            let listener = (res) => {
                callback(res.data);
            };
            RCUniRtc.addEventListener(this._getFullEventName(event), listener);
        }
    }
    // 以下为设置事件回调的方法
    setOnErrorListener(callback) {
        this._setListener(RCRTCEngineEventsName.OnError, callback);
    }
    setOnKickedListener(callback) {
        this._setListener(RCRTCEngineEventsName.OnKicked, callback);
    }
    setOnRoomJoinedListener(callback) {
        this._setListener(RCRTCEngineEventsName.OnRoomJoined, callback);
    }
    setOnRoomLeftListener(callback) {
        this._setListener(RCRTCEngineEventsName.OnRoomLeft, callback);
    }
    setOnPublishedListener(callback) {
        this._setListener(RCRTCEngineEventsName.OnPublished, callback);
    }
    setOnUnpublishedListener(callback) {
        this._setListener(RCRTCEngineEventsName.OnUnpublished, callback);
    }
    setOnSubscribedListener(callback) {
        this._setListener(RCRTCEngineEventsName.OnSubscribed, callback);
    }
    setOnUnsubscribedListener(callback) {
        this._setListener(RCRTCEngineEventsName.OnUnsubscribed, callback);
    }
    setOnLiveMixSubscribedListener(callback) {
        this._setListener(RCRTCEngineEventsName.OnLiveMixSubscribed, callback);
    }
    setOnLiveMixUnsubscribedListener(callback) {
        this._setListener(RCRTCEngineEventsName.OnLiveMixUnsubscribed, callback);
    }
    setOnCameraEnabledListener(callback) {
        this._setListener(RCRTCEngineEventsName.OnCameraEnabled, callback);
    }
    setOnCameraSwitchedListener(callback) {
        this._setListener(RCRTCEngineEventsName.OnCameraSwitched, callback);
    }
    setOnLiveCdnAddedListener(callback) {
        this._setListener(RCRTCEngineEventsName.OnLiveCdnAdded, callback);
    }
    setOnLiveCdnRemovedListener(callback) {
        this._setListener(RCRTCEngineEventsName.OnLiveCdnRemoved, callback);
    }
    setOnLiveMixLayoutModeSetListener(callback) {
        this._setListener(RCRTCEngineEventsName.OnLiveMixLayoutModeSet, callback);
    }
    setOnLiveMixRenderModeSetListener(callback) {
        this._setListener(RCRTCEngineEventsName.OnLiveMixRenderModeSet, callback);
    }
    setOnLiveMixBackgroundColorSetListener(callback) {
        this._setListener(RCRTCEngineEventsName.OnLiveMixBackgroundColorSet, callback);
    }
    setOnLiveMixCustomAudiosSetListener(callback) {
        this._setListener(RCRTCEngineEventsName.OnLiveMixCustomAudiosSet, callback);
    }
    setOnLiveMixCustomLayoutsSetListener(callback) {
        this._setListener(RCRTCEngineEventsName.OnLiveMixCustomLayoutsSet, callback);
    }
    setOnLiveMixAudioBitrateSetListener(callback) {
        this._setListener(RCRTCEngineEventsName.OnLiveMixAudioBitrateSet, callback);
    }
    setOnLiveMixVideoBitrateSetListener(callback) {
        this._setListener(RCRTCEngineEventsName.OnLiveMixVideoBitrateSet, callback);
    }
    setOnLiveMixVideoResolutionSetListener(callback) {
        this._setListener(RCRTCEngineEventsName.OnLiveMixVideoResolutionSet, callback);
    }
    setOnLiveMixVideoFpsSetListener(callback) {
        this._setListener(RCRTCEngineEventsName.OnLiveMixVideoFpsSet, callback);
    }
    setOnAudioEffectCreatedListener(callback) {
        this._setListener(RCRTCEngineEventsName.OnAudioEffectCreated, callback);
    }
    setOnAudioEffectFinishedListener(callback) {
        this._setListener(RCRTCEngineEventsName.OnAudioEffectFinished, callback);
    }
    setOnAudioMixingStartedListener(callback) {
        this._setListener(RCRTCEngineEventsName.OnAudioMixingStarted, callback);
    }
    setOnAudioMixingPausedListener(callback) {
        this._setListener(RCRTCEngineEventsName.OnAudioMixingPaused, callback);
    }
    setOnAudioMixingStoppedListener(callback) {
        this._setListener(RCRTCEngineEventsName.OnAudioMixingStopped, callback);
    }
    setOnAudioMixingFinishedListener(callback) {
        this._setListener(RCRTCEngineEventsName.OnAudioMixingFinished, callback);
    }
    setOnUserJoinedListener(callback) {
        this._setListener(RCRTCEngineEventsName.OnUserJoined, callback);
    }
    setOnUserOfflineListener(callback) {
        this._setListener(RCRTCEngineEventsName.OnUserOffline, callback);
    }
    setOnUserLeftListener(callback) {
        this._setListener(RCRTCEngineEventsName.OnUserLeft, callback);
    }
    setOnRemotePublishedListener(callback) {
        this._setListener(RCRTCEngineEventsName.OnRemotePublished, callback);
    }
    setOnRemoteUnpublishedListener(callback) {
        this._setListener(RCRTCEngineEventsName.OnRemoteUnpublished, callback);
    }
    setOnRemoteLiveMixPublishedListener(callback) {
        this._setListener(RCRTCEngineEventsName.OnRemoteLiveMixPublished, callback);
    }
    setOnRemoteLiveMixUnpublishedListener(callback) {
        this._setListener(RCRTCEngineEventsName.OnRemoteLiveMixUnpublished, callback);
    }
    setOnRemoteStateChangedListener(callback) {
        this._setListener(RCRTCEngineEventsName.OnRemoteStateChanged, callback);
    }
    setOnRemoteFirstFrameListener(callback) {
        this._setListener(RCRTCEngineEventsName.OnRemoteFirstFrame, callback);
    }
    setOnRemoteLiveMixFirstFrameListener(callback) {
        this._setListener(RCRTCEngineEventsName.OnRemoteLiveMixFirstFrame, callback);
    }
    setOnCustomStreamPublishedListener(callback) {
        this._setListener(RCRTCEngineEventsName.OnCustomStreamPublished, callback);
    }
    setOnCustomStreamUnpublishedListener(callback) {
        this._setListener(RCRTCEngineEventsName.OnCustomStreamUnpublished, callback);
    }
    setOnCustomStreamPublishFinishedListener(callback) {
        this._setListener(RCRTCEngineEventsName.OnCustomStreamPublishFinished, callback);
    }
    setOnRemoteCustomStreamPublishedListener(callback) {
        this._setListener(RCRTCEngineEventsName.OnRemoteCustomStreamPublished, callback);
    }
    setOnRemoteCustomStreamUnpublishedListener(callback) {
        this._setListener(RCRTCEngineEventsName.OnRemoteCustomStreamUnpublished, callback);
    }
    setOnRemoteCustomStreamStateChangedListener(callback) {
        this._setListener(RCRTCEngineEventsName.OnRemoteCustomStreamStateChanged, callback);
    }
    setOnRemoteCustomStreamFirstFrameListener(callback) {
        this._setListener(RCRTCEngineEventsName.OnRemoteCustomStreamFirstFrame, callback);
    }
    setOnCustomStreamSubscribedListener(callback) {
        this._setListener(RCRTCEngineEventsName.OnCustomStreamSubscribed, callback);
    }
    setOnCustomStreamUnsubscribedListener(callback) {
        this._setListener(RCRTCEngineEventsName.OnCustomStreamUnsubscribed, callback);
    }
    setOnJoinSubRoomRequestedListener(callback) {
        this._setListener(RCRTCEngineEventsName.OnJoinSubRoomRequested, callback);
    }
    setOnJoinSubRoomRequestCanceledListener(callback) {
        this._setListener(RCRTCEngineEventsName.OnJoinSubRoomRequestCanceled, callback);
    }
    setOnJoinSubRoomRequestRespondedListener(callback) {
        this._setListener(RCRTCEngineEventsName.OnJoinSubRoomRequestResponded, callback);
    }
    setOnJoinSubRoomRequestReceivedListener(callback) {
        this._setListener(RCRTCEngineEventsName.OnJoinSubRoomRequestReceived, callback);
    }
    setOnCancelJoinSubRoomRequestReceivedListener(callback) {
        this._setListener(RCRTCEngineEventsName.OnCancelJoinSubRoomRequestReceived, callback);
    }
    setOnJoinSubRoomRequestResponseReceivedListener(callback) {
        this._setListener(RCRTCEngineEventsName.OnJoinSubRoomRequestResponseReceived, callback);
    }
    setOnSubRoomJoinedListener(callback) {
        this._setListener(RCRTCEngineEventsName.OnSubRoomJoined, callback);
    }
    setOnSubRoomLeftListener(callback) {
        this._setListener(RCRTCEngineEventsName.OnSubRoomLeft, callback);
    }
    setOnSubRoomBandedListener(callback) {
        this._setListener(RCRTCEngineEventsName.OnSubRoomBanded, callback);
    }
    setOnSubRoomDisbandListener(callback) {
        this._setListener(RCRTCEngineEventsName.OnSubRoomDisband, callback);
    }
    /* 以下是 状态回调 */
    setOnNetworkStatsListener(callback) {
        this._setListener(RCRTCStatsEventsName.OnNetworkStats, callback);
    }
    setOnLocalAudioStatsListener(callback) {
        this._setListener(RCRTCStatsEventsName.OnLocalAudioStats, callback);
    }
    setOnLocalVideoStatsListener(callback) {
        this._setListener(RCRTCStatsEventsName.OnLocalVideoStats, callback);
    }
    setOnRemoteAudioStatsListener(callback) {
        this._setListener(RCRTCStatsEventsName.OnRemoteAudioStats, callback);
    }
    setOnRemoteVideoStatsListener(callback) {
        this._setListener(RCRTCStatsEventsName.OnRemoteVideoStats, callback);
    }
    setOnLiveMixAudioStatsListener(callback) {
        this._setListener(RCRTCStatsEventsName.OnLiveMixAudioStats, callback);
    }
    setOnLiveMixVideoStatsListener(callback) {
        this._setListener(RCRTCStatsEventsName.OnLiveMixVideoStats, callback);
    }
    setOnLiveMixMemberAudioStatsListener(callback) {
        this._setListener(RCRTCStatsEventsName.OnLiveMixMemberAudioStats, callback);
    }
    setOnLiveMixMemberCustomAudioStatsListener(callback) {
        this._setListener(RCRTCStatsEventsName.OnLiveMixMemberCustomAudioStats, callback);
    }
    setOnLocalCustomAudioStatsListener(callback) {
        this._setListener(RCRTCStatsEventsName.OnLocalCustomAudioStats, callback);
    }
    setOnLocalCustomVideoStatsListener(callback) {
        this._setListener(RCRTCStatsEventsName.OnLocalCustomVideoStats, callback);
    }
    setOnRemoteCustomAudioStatsListener(callback) {
        this._setListener(RCRTCStatsEventsName.OnRemoteCustomAudioStats, callback);
    }
    setOnRemoteCustomVideoStatsListener(callback) {
        this._setListener(RCRTCStatsEventsName.OnRemoteCustomVideoStats, callback);
    }
    /**
     * 网络检测上行回调
     */
    setOnNetworkProbeUpLinkStatsListener(callback) {
        const eventName = 'IRCRTCIWNetworkProbeListener:onNetworkProbeUpLinkStats';
        this._setListener(eventName, callback);
    }
    /**
     * 网络检测下行回调
     */
    setOnNetworkProbeDownLinkStatsListener(callback) {
        const eventName = 'IRCRTCIWNetworkProbeListener:onNetworkProbeDownLinkStats';
        this._setListener(eventName, callback);
    }
    /**
     * 角色切换回调
     */
    setOnLiveRoleSwitchedListener(callback) {
        const eventName = 'IRCRTCIWListener:onLiveRoleSwitched';
        this._setListener(eventName, callback);
    }
    /**
     * 远端角色切换回调
     */
    setOnRemoteLiveRoleSwitchedListener(callback) {
        const eventName = 'IRCRTCIWListener:onRemoteLiveRoleSwitched';
        this._setListener(eventName, callback);
    }
    /**
     * 停止所有远端音频数据渲染
     * @param mute   true: 不渲染 false: 渲染
     * @return 0: 成功, 非0: 失败
     */
    muteAllRemoteAudioStreams(mute) {
        return RCUniRtc.muteAllRemoteAudioStreams(mute);
    }
    /**
     * 切换直播角色
     * @return 0: 成功, 非0: 失败
     */
    switchLiveRole(role) {
        return RCUniRtc.switchLiveRole(role);
    }
    /**
     * 开启直播内置 cdn 功能
     * @param enable
     * @return 0: 成功, 非0: 失败
     */
    enableLiveMixInnerCdnStream(enable) {
        return RCUniRtc.enableLiveMixInnerCdnStream(enable);
    }
    /**
     * 订阅直播内置 cdn 流
     * @return 0: 成功, 非0: 失败
     */
    subscribeLiveMixInnerCdnStream() {
        return RCUniRtc.subscribeLiveMixInnerCdnStream();
    }
    /**
     * 取消订阅直播内置 cdn 流
     * @return 0: 成功, 非0: 失败
     */
    unsubscribeLiveMixInnerCdnStream() {
        return RCUniRtc.unsubscribeLiveMixInnerCdnStream();
    }
    /**
     * 移除直播内置 cdn 流预览窗口
     * @return 0: 成功, 非0: 失败
     */
    removeLiveMixInnerCdnStreamView() {
        return RCUniRtc.removeLiveMixInnerCdnStreamView();
    }
    /**
     * 观众端 设置订阅 cdn 流的分辨率
     * @param width    分辨率宽
     * @param height   高
     * @return 接口调用状态码 0: 成功, 非0: 失败
     */
    setLocalLiveMixInnerCdnVideoResolution(width, height) {
        return RCUniRtc.setLocalLiveMixInnerCdnVideoResolution(width, height);
    }
    /**
     * 观众端设置订阅 cdn 流的帧率
     * @param fps   帧率
     * @return 接口调用状态码 0: 成功, 非0: 失败
     */
    setLocalLiveMixInnerCdnVideoFps(fps) {
        return RCUniRtc.setLocalLiveMixInnerCdnVideoFps(fps);
    }
    /**
     * 观众端禁用或启用融云内置 CDN 流
     * @param mute  true: 停止资源渲染，false: 恢复资源渲染
     * @return 接口调用状态码 0: 成功, 非0: 失败
     */
    muteLiveMixInnerCdnStream(mute) {
        return RCUniRtc.muteLiveMixInnerCdnStream(mute);
    }
    /**
     * 移除水印
     * @return 接口调用状态码 0: 成功, 非0: 失败
     */
    removeWatermark() {
        return RCUniRtc.removeWatermark();
    }
    /**
     * 停止网络探测
     * @return 接口调用状态码 0: 成功, 非0: 失败
     */
    stopNetworkProbe() {
        return RCUniRtc.stopNetworkProbe();
    }
    /**
     * 开始麦克风&扬声器检测
     * @param timeInterval 麦克风录制时间
     * @return 接口调用状态码 0: 成功, 非0: 失败
     */
    startEchoTest(timeInterval) {
        return RCUniRtc.startEchoTest(timeInterval);
    }
    /**
     * 停止麦克风&扬声器检测，结束检测后必须手动调用停止方法
     * @return 接口调用状态码 0: 成功, 非0: 失败
     */
    stopEchoTest() {
        return RCUniRtc.stopEchoTest();
    }
    /**
     * 开启 SEI 功能，观众身份调用无效
     * @param enable 是否开启
     * @return 接口调用状态码 0: 成功, 非0: 失败
     */
    enableSei(enable) {
        return RCUniRtc.enableSei(enable);
    }
    /**
     * 发送 SEI 信息，需开启 SEI 功能之后调用
     * @param sei SEI 信息
     * @return 接口调用状态码 0: 成功, 非0: 失败
     */
    sendSei(sei) {
        return RCUniRtc.sendSei(sei);
    }
    /**
     * 预链接到媒体服务器
     * @return 接口调用状态码 0: 成功, 非0: 失败
     */
    preconnectToMediaServer() {
        return RCUniRtc.preconnectToMediaServer();
    }
    /**
     * 开启直播内置 cdn 结果回调
     */
    setOnLiveMixInnerCdnStreamEnabledListener(callback) {
        const eventName = 'IRCRTCIWListener:onLiveMixInnerCdnStreamEnabled';
        this._setListener(eventName, callback);
    }
    /**
 *
      直播内置 cdn 资源发布回调
     
 */
    setOnRemoteLiveMixInnerCdnStreamPublishedListener(callback) {
        const eventName = 'IRCRTCIWListener:onRemoteLiveMixInnerCdnStreamPublished';
        this._setListener(eventName, callback);
    }
    /**
 *
      直播内置 cdn 资源取消发布回调
     
 */
    setOnRemoteLiveMixInnerCdnStreamUnpublishedListener(callback) {
        const eventName = 'IRCRTCIWListener:onRemoteLiveMixInnerCdnStreamUnpublished';
        this._setListener(eventName, callback);
    }
    /**
     * 订阅直播内置 cdn 资源回调
     */
    setOnLiveMixInnerCdnStreamSubscribedListener(callback) {
        const eventName = 'IRCRTCIWListener:onLiveMixInnerCdnStreamSubscribed';
        this._setListener(eventName, callback);
    }
    /**
     * 取消订阅直播内置 cdn 资源回调
     */
    setOnLiveMixInnerCdnStreamUnsubscribedListener(callback) {
        const eventName = 'IRCRTCIWListener:onLiveMixInnerCdnStreamUnsubscribed';
        this._setListener(eventName, callback);
    }
    /**
     * 观众端设置订阅 cdn 流的分辨率的回调
     */
    setOnLocalLiveMixInnerCdnVideoResolutionSetListener(callback) {
        const eventName = 'IRCRTCIWListener:onLocalLiveMixInnerCdnVideoResolutionSet';
        this._setListener(eventName, callback);
    }
    /**
     * 观众端 设置订阅 cdn 流的帧率的回调
     */
    setOnLocalLiveMixInnerCdnVideoFpsSetListener(callback) {
        const eventName = 'IRCRTCIWListener:onLocalLiveMixInnerCdnVideoFpsSet';
        this._setListener(eventName, callback);
    }
    /**
     * 设置水印的回调
     */
    setOnWatermarkSetListener(callback) {
        const eventName = 'IRCRTCIWListener:onWatermarkSet';
        this._setListener(eventName, callback);
    }
    /**
     * 移除水印的回调
     */
    setOnWatermarkRemovedListener(callback) {
        const eventName = 'IRCRTCIWListener:onWatermarkRemoved';
        this._setListener(eventName, callback);
    }
    /**
     * 开启网络探测结果回调
     */
    setOnNetworkProbeStartedListener(callback) {
        const eventName = 'IRCRTCIWListener:onNetworkProbeStarted';
        this._setListener(eventName, callback);
    }
    /**
     * 关闭网络探测结果回调
     */
    setOnNetworkProbeStoppedListener(callback) {
        const eventName = 'IRCRTCIWListener:onNetworkProbeStopped';
        this._setListener(eventName, callback);
    }
    /**
     * 开启 SEI 功能结果回调
     */
    setOnSeiEnabledListener(callback) {
        const eventName = 'IRCRTCIWListener:onSeiEnabled';
        this._setListener(eventName, callback);
    }
    /**
     * 收到 SEI 信息回调
     */
    setOnSeiReceivedListener(callback) {
        const eventName = 'IRCRTCIWListener:onSeiReceived';
        this._setListener(eventName, callback);
    }
    /**
     * 观众收到合流 SEI 信息回调
     */
    setOnLiveMixSeiReceivedListener(callback) {
        const eventName = 'IRCRTCIWListener:onLiveMixSeiReceived';
        this._setListener(eventName, callback);
    }
    setOnNetworkProbeFinishedListener(callback) {
        const eventName = 'IRCRTCIWNetworkProbeListener:onNetworkProbeFinished';
        this._setListener(eventName, callback);
    }
}
