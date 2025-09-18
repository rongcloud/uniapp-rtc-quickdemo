/** 以下是枚举值的定义 */
/**
 * 音频编译类型
 */
export var RCRTCAudioCodecType;
(function (RCRTCAudioCodecType) {
    RCRTCAudioCodecType[RCRTCAudioCodecType["OPUS"] = 0] = "OPUS";
    RCRTCAudioCodecType[RCRTCAudioCodecType["PCMU"] = 1] = "PCMU";
})(RCRTCAudioCodecType || (RCRTCAudioCodecType = {}));
/**
 * 音源类型
 */
export var RCRTCAudioSource;
(function (RCRTCAudioSource) {
    /**
     * 默认音频源
     */
    RCRTCAudioSource[RCRTCAudioSource["DEFAULT"] = 0] = "DEFAULT";
    /**
     * 麦克风
     */
    RCRTCAudioSource[RCRTCAudioSource["MIC"] = 1] = "MIC";
    /**
     * 语音呼叫上行音频源
     */
    RCRTCAudioSource[RCRTCAudioSource["VOICE_UPLINK"] = 2] = "VOICE_UPLINK";
    /**
     * 语音呼叫下行音频源
     */
    RCRTCAudioSource[RCRTCAudioSource["VOICE_DOWNLINK"] = 3] = "VOICE_DOWNLINK";
    /**
     * 语音呼叫音频源
     */
    RCRTCAudioSource[RCRTCAudioSource["VOICE_CALL"] = 4] = "VOICE_CALL";
    /**
     * 同方向的相机麦克风，若相机无内置相机或无法识别，则使用预设的麦克风
     */
    RCRTCAudioSource[RCRTCAudioSource["CAMCORDER"] = 5] = "CAMCORDER";
    /**
     * 进过语音识别后的麦克风音频源
     */
    RCRTCAudioSource[RCRTCAudioSource["VOICE_RECOGNITION"] = 6] = "VOICE_RECOGNITION";
    /**
     * 针对VoIP调整后的麦克风音频源
     */
    RCRTCAudioSource[RCRTCAudioSource["VOICE_COMMUNICATION"] = 7] = "VOICE_COMMUNICATION";
})(RCRTCAudioSource || (RCRTCAudioSource = {}));
export var RCRTCAudioSampleRate;
(function (RCRTCAudioSampleRate) {
    RCRTCAudioSampleRate[RCRTCAudioSampleRate["Type8000"] = 8000] = "Type8000";
    RCRTCAudioSampleRate[RCRTCAudioSampleRate["Type16000"] = 16000] = "Type16000";
    RCRTCAudioSampleRate[RCRTCAudioSampleRate["Type32000"] = 32000] = "Type32000";
    RCRTCAudioSampleRate[RCRTCAudioSampleRate["Type44100"] = 44100] = "Type44100";
    RCRTCAudioSampleRate[RCRTCAudioSampleRate["Type48000"] = 48000] = "Type48000";
})(RCRTCAudioSampleRate || (RCRTCAudioSampleRate = {}));
/**
 * 音视频类型
 */
export var RCRTCMediaType;
(function (RCRTCMediaType) {
    /**
     * 仅音频
     */
    RCRTCMediaType[RCRTCMediaType["Audio"] = 0] = "Audio";
    /**
     * 仅视频
     */
    RCRTCMediaType[RCRTCMediaType["Video"] = 1] = "Video";
    /**
     * 音频 + 视频
     */
    RCRTCMediaType[RCRTCMediaType["AudioVideo"] = 2] = "AudioVideo";
})(RCRTCMediaType || (RCRTCMediaType = {}));
/**
 * 角色类型
 */
export var RCRTCRole;
(function (RCRTCRole) {
    /**
     * 会议类型房间中用户
     */
    RCRTCRole[RCRTCRole["MeetingMember"] = 0] = "MeetingMember";
    /**
     * 直播类型房间中主播
     */
    RCRTCRole[RCRTCRole["LiveBroadcaster"] = 1] = "LiveBroadcaster";
    /**
     * 直播类型房间中观众
     */
    RCRTCRole[RCRTCRole["LiveAudience"] = 2] = "LiveAudience";
})(RCRTCRole || (RCRTCRole = {}));
/**
 * 音频通话质量类型
 */
export var RCRTCAudioQuality;
(function (RCRTCAudioQuality) {
    /**
     * 人声音质，编码码率最大值为 32Kbps
     */
    RCRTCAudioQuality[RCRTCAudioQuality["Speech"] = 0] = "Speech";
    /**
     * 标清音乐音质，编码码率最大值为 64Kbps
     */
    RCRTCAudioQuality[RCRTCAudioQuality["Music"] = 1] = "Music";
    /**
     * 高清音乐音质，编码码率最大值为 128Kbps
     */
    RCRTCAudioQuality[RCRTCAudioQuality["MusicHigh"] = 2] = "MusicHigh";
})(RCRTCAudioQuality || (RCRTCAudioQuality = {}));
/**
 * 音频通话模式
 */
export var RCRTCAudioScenario;
(function (RCRTCAudioScenario) {
    /**
     * 普通通话模式(普通音质模式), 满足正常音视频场景
     */
    RCRTCAudioScenario[RCRTCAudioScenario["Normal"] = 0] = "Normal";
    /**
     * 音乐聊天室模式, 提升声音质量，适用对音乐演唱要求较高的场景
     */
    RCRTCAudioScenario[RCRTCAudioScenario["MusicChatRoom"] = 1] = "MusicChatRoom";
    /**
     * 音乐教室模式，提升声音质量，适用对乐器演奏音质要求较高的场景
     */
    RCRTCAudioScenario[RCRTCAudioScenario["MusicClassRoom"] = 2] = "MusicClassRoom";
})(RCRTCAudioScenario || (RCRTCAudioScenario = {}));
/**
 * 视频帧率
 */
export var RCRTCVideoFps;
(function (RCRTCVideoFps) {
    /**
     * 每秒 10 帧
     */
    RCRTCVideoFps[RCRTCVideoFps["Fps10"] = 0] = "Fps10";
    /**
     * 每秒 15 帧
     */
    RCRTCVideoFps[RCRTCVideoFps["Fps15"] = 1] = "Fps15";
    /**
     * 每秒 24 帧
     */
    RCRTCVideoFps[RCRTCVideoFps["Fps24"] = 2] = "Fps24";
    /**
     * 每秒 30 帧
     */
    RCRTCVideoFps[RCRTCVideoFps["Fps30"] = 3] = "Fps30";
})(RCRTCVideoFps || (RCRTCVideoFps = {}));
/**
 * 视频分辨率
 */
export var RCRTCVideoResolution;
(function (RCRTCVideoResolution) {
    RCRTCVideoResolution[RCRTCVideoResolution["Resolution_144x176"] = 0] = "Resolution_144x176";
    RCRTCVideoResolution[RCRTCVideoResolution["Resolution_180x180"] = 1] = "Resolution_180x180";
    RCRTCVideoResolution[RCRTCVideoResolution["Resolution_144x256"] = 2] = "Resolution_144x256";
    RCRTCVideoResolution[RCRTCVideoResolution["Resolution_180x240"] = 3] = "Resolution_180x240";
    RCRTCVideoResolution[RCRTCVideoResolution["Resolution_180x320"] = 4] = "Resolution_180x320";
    RCRTCVideoResolution[RCRTCVideoResolution["Resolution_240x240"] = 5] = "Resolution_240x240";
    RCRTCVideoResolution[RCRTCVideoResolution["Resolution_240x320"] = 6] = "Resolution_240x320";
    RCRTCVideoResolution[RCRTCVideoResolution["Resolution_360x360"] = 7] = "Resolution_360x360";
    RCRTCVideoResolution[RCRTCVideoResolution["Resolution_360x480"] = 8] = "Resolution_360x480";
    RCRTCVideoResolution[RCRTCVideoResolution["Resolution_360x640"] = 9] = "Resolution_360x640";
    RCRTCVideoResolution[RCRTCVideoResolution["Resolution_480x480"] = 10] = "Resolution_480x480";
    RCRTCVideoResolution[RCRTCVideoResolution["Resolution_480x640"] = 11] = "Resolution_480x640";
    RCRTCVideoResolution[RCRTCVideoResolution["Resolution_480x720"] = 12] = "Resolution_480x720";
    RCRTCVideoResolution[RCRTCVideoResolution["Resolution_480x848"] = 13] = "Resolution_480x848";
    RCRTCVideoResolution[RCRTCVideoResolution["Resolution_720x960"] = 14] = "Resolution_720x960";
    RCRTCVideoResolution[RCRTCVideoResolution["Resolution_720x1280"] = 15] = "Resolution_720x1280";
    RCRTCVideoResolution[RCRTCVideoResolution["Resolution_1080x1920"] = 16] = "Resolution_1080x1920";
})(RCRTCVideoResolution || (RCRTCVideoResolution = {}));
/**
 * 视频填充模式
 */
export var RCRTCViewFitType;
(function (RCRTCViewFitType) {
    /**
     * 满屏显示, 等比例填充, 直到填充满整个视图区域, 其中一个维度的部分区域会被裁剪
     */
    RCRTCViewFitType[RCRTCViewFitType["Cover"] = 0] = "Cover";
    /**
     * 完整显示, 填充黑边, 等比例填充, 直到一个维度到达区域边界
     */
    RCRTCViewFitType[RCRTCViewFitType["Center"] = 1] = "Center";
})(RCRTCViewFitType || (RCRTCViewFitType = {}));
/**
 * 摄像头类型
 */
export var RCRTCCamera;
(function (RCRTCCamera) {
    /**
     * 无
     */
    RCRTCCamera[RCRTCCamera["None"] = 0] = "None";
    /**
     * 前置摄像头
     */
    RCRTCCamera[RCRTCCamera["Front"] = 1] = "Front";
    /**
     * 后置摄像头
     */
    RCRTCCamera[RCRTCCamera["Back"] = 2] = "Back";
})(RCRTCCamera || (RCRTCCamera = {}));
/**
 * 摄像头采集方向
 */
export var RCRTCCameraCaptureOrientation;
(function (RCRTCCameraCaptureOrientation) {
    /**
     * 竖直, home 键在下部
     */
    RCRTCCameraCaptureOrientation[RCRTCCameraCaptureOrientation["Portrait"] = 0] = "Portrait";
    /**
     * 顶部向下, home 键在上部
     */
    RCRTCCameraCaptureOrientation[RCRTCCameraCaptureOrientation["PortraitUpsideDown"] = 1] = "PortraitUpsideDown";
    /**
     * 顶部向右, home 键在左侧
     */
    RCRTCCameraCaptureOrientation[RCRTCCameraCaptureOrientation["LandscapeRight"] = 2] = "LandscapeRight";
    /**
     * 顶部向左, home 键在右侧
     */
    RCRTCCameraCaptureOrientation[RCRTCCameraCaptureOrientation["LandscapeLeft"] = 3] = "LandscapeLeft";
})(RCRTCCameraCaptureOrientation || (RCRTCCameraCaptureOrientation = {}));
/**
 * 合流布局模式
 */
export var RCRTCLiveMixLayoutMode;
(function (RCRTCLiveMixLayoutMode) {
    /**
     * 自定义布局
     */
    RCRTCLiveMixLayoutMode[RCRTCLiveMixLayoutMode["Custom"] = 0] = "Custom";
    /**
     * 悬浮布局
     */
    RCRTCLiveMixLayoutMode[RCRTCLiveMixLayoutMode["Suspension"] = 1] = "Suspension";
    /**
     * 自适应布局
     */
    RCRTCLiveMixLayoutMode[RCRTCLiveMixLayoutMode["Adaptive"] = 2] = "Adaptive";
})(RCRTCLiveMixLayoutMode || (RCRTCLiveMixLayoutMode = {}));
/**
 * 输出视频流的裁剪模式
 */
export var RCRTCLiveMixRenderMode;
(function (RCRTCLiveMixRenderMode) {
    /**
     * 自适应裁剪
     */
    RCRTCLiveMixRenderMode[RCRTCLiveMixRenderMode["Crop"] = 0] = "Crop";
    /**
     * 填充
     */
    RCRTCLiveMixRenderMode[RCRTCLiveMixRenderMode["Whole"] = 1] = "Whole";
})(RCRTCLiveMixRenderMode || (RCRTCLiveMixRenderMode = {}));
/**
 *  混音行为模式
 */
export var RCRTCAudioMixingMode;
(function (RCRTCAudioMixingMode) {
    /**
     * 对端只能听见麦克风采集的声音
     */
    RCRTCAudioMixingMode[RCRTCAudioMixingMode["None"] = 0] = "None";
    /**
     * 对端能够听到麦克风采集的声音和音频文件的声音
     */
    RCRTCAudioMixingMode[RCRTCAudioMixingMode["Mixing"] = 1] = "Mixing";
    /**
     * 对端只能听到音频文件的声音
     */
    RCRTCAudioMixingMode[RCRTCAudioMixingMode["Replace"] = 2] = "Replace";
})(RCRTCAudioMixingMode || (RCRTCAudioMixingMode = {}));
export var RCRTCNetworkType;
(function (RCRTCNetworkType) {
    RCRTCNetworkType[RCRTCNetworkType["Unknown"] = 0] = "Unknown";
    RCRTCNetworkType[RCRTCNetworkType["WiFi"] = 1] = "WiFi";
    RCRTCNetworkType[RCRTCNetworkType["Mobile"] = 2] = "Mobile";
})(RCRTCNetworkType || (RCRTCNetworkType = {}));
export var RCRTCVideoCodecType;
(function (RCRTCVideoCodecType) {
    RCRTCVideoCodecType[RCRTCVideoCodecType["H264"] = 0] = "H264";
})(RCRTCVideoCodecType || (RCRTCVideoCodecType = {}));
/**
 * 媒体流类型
 */
export var RCRTCStreamType;
(function (RCRTCStreamType) {
    RCRTCStreamType[RCRTCStreamType["NotNormal"] = 0] = "NotNormal";
    /**
     * 默认值，
     */
    RCRTCStreamType[RCRTCStreamType["Normal"] = 1] = "Normal";
    /**
     * 直播合流
     */
    RCRTCStreamType[RCRTCStreamType["Live"] = 2] = "Live";
    /**
     * 自定义
     */
    RCRTCStreamType[RCRTCStreamType["File"] = 3] = "File";
    /**
     * 屏幕共享
     */
    RCRTCStreamType[RCRTCStreamType["Screen"] = 4] = "Screen";
    /**
     * CDN
     */
    RCRTCStreamType[RCRTCStreamType["CDN"] = 5] = "CDN";
})(RCRTCStreamType || (RCRTCStreamType = {}));
/**
 * 事件监听枚举
 */
export var RCRTCEngineEventsName;
(function (RCRTCEngineEventsName) {
    RCRTCEngineEventsName["OnError"] = "OnError";
    RCRTCEngineEventsName["OnKicked"] = "OnKicked";
    RCRTCEngineEventsName["OnRoomJoined"] = "OnRoomJoined";
    RCRTCEngineEventsName["OnRoomLeft"] = "OnRoomLeft";
    RCRTCEngineEventsName["OnPublished"] = "OnPublished";
    RCRTCEngineEventsName["OnUnpublished"] = "OnUnpublished";
    RCRTCEngineEventsName["OnSubscribed"] = "OnSubscribed";
    RCRTCEngineEventsName["OnUnsubscribed"] = "OnUnsubscribed";
    RCRTCEngineEventsName["OnLiveMixSubscribed"] = "OnLiveMixSubscribed";
    RCRTCEngineEventsName["OnLiveMixUnsubscribed"] = "OnLiveMixUnsubscribed";
    RCRTCEngineEventsName["OnCameraEnabled"] = "OnCameraEnabled";
    RCRTCEngineEventsName["OnCameraSwitched"] = "OnCameraSwitched";
    RCRTCEngineEventsName["OnLiveCdnAdded"] = "OnLiveCdnAdded";
    RCRTCEngineEventsName["OnLiveCdnRemoved"] = "OnLiveCdnRemoved";
    RCRTCEngineEventsName["OnLiveMixLayoutModeSet"] = "OnLiveMixLayoutModeSet";
    RCRTCEngineEventsName["OnLiveMixRenderModeSet"] = "OnLiveMixRenderModeSet";
    RCRTCEngineEventsName["OnLiveMixBackgroundColorSet"] = "OnLiveMixBackgroundColorSet";
    RCRTCEngineEventsName["OnLiveMixCustomAudiosSet"] = "OnLiveMixCustomAudiosSet";
    RCRTCEngineEventsName["OnLiveMixCustomLayoutsSet"] = "OnLiveMixCustomLayoutsSet";
    RCRTCEngineEventsName["OnLiveMixAudioBitrateSet"] = "OnLiveMixAudioBitrateSet";
    RCRTCEngineEventsName["OnLiveMixVideoBitrateSet"] = "OnLiveMixVideoBitrateSet";
    RCRTCEngineEventsName["OnLiveMixVideoResolutionSet"] = "OnLiveMixVideoResolutionSet";
    RCRTCEngineEventsName["OnLiveMixVideoFpsSet"] = "OnLiveMixVideoFpsSet";
    RCRTCEngineEventsName["OnAudioEffectCreated"] = "OnAudioEffectCreated";
    RCRTCEngineEventsName["OnAudioEffectFinished"] = "OnAudioEffectFinished";
    RCRTCEngineEventsName["OnAudioMixingStarted"] = "OnAudioMixingStarted";
    RCRTCEngineEventsName["OnAudioMixingPaused"] = "OnAudioMixingPaused";
    RCRTCEngineEventsName["OnAudioMixingStopped"] = "OnAudioMixingStopped";
    RCRTCEngineEventsName["OnAudioMixingFinished"] = "OnAudioMixingFinished";
    RCRTCEngineEventsName["OnUserJoined"] = "OnUserJoined";
    RCRTCEngineEventsName["OnUserOffline"] = "OnUserOffline";
    RCRTCEngineEventsName["OnUserLeft"] = "OnUserLeft";
    RCRTCEngineEventsName["OnRemotePublished"] = "OnRemotePublished";
    RCRTCEngineEventsName["OnRemoteUnpublished"] = "OnRemoteUnpublished";
    RCRTCEngineEventsName["OnRemoteLiveMixPublished"] = "OnRemoteLiveMixPublished";
    RCRTCEngineEventsName["OnRemoteLiveMixUnpublished"] = "OnRemoteLiveMixUnpublished";
    RCRTCEngineEventsName["OnRemoteStateChanged"] = "OnRemoteStateChanged";
    RCRTCEngineEventsName["OnRemoteFirstFrame"] = "OnRemoteFirstFrame";
    RCRTCEngineEventsName["OnRemoteLiveMixFirstFrame"] = "OnRemoteLiveMixFirstFrame";
    RCRTCEngineEventsName["OnCustomStreamPublished"] = "OnCustomStreamPublished";
    RCRTCEngineEventsName["OnCustomStreamUnpublished"] = "OnCustomStreamUnpublished";
    RCRTCEngineEventsName["OnCustomStreamPublishFinished"] = "OnCustomStreamPublishFinished";
    RCRTCEngineEventsName["OnRemoteCustomStreamPublished"] = "OnRemoteCustomStreamPublished";
    RCRTCEngineEventsName["OnRemoteCustomStreamUnpublished"] = "OnRemoteCustomStreamUnpublished";
    RCRTCEngineEventsName["OnRemoteCustomStreamStateChanged"] = "OnRemoteCustomStreamStateChanged";
    RCRTCEngineEventsName["OnRemoteCustomStreamFirstFrame"] = "OnRemoteCustomStreamFirstFrame";
    RCRTCEngineEventsName["OnCustomStreamSubscribed"] = "OnCustomStreamSubscribed";
    RCRTCEngineEventsName["OnCustomStreamUnsubscribed"] = "OnCustomStreamUnsubscribed";
    RCRTCEngineEventsName["OnJoinSubRoomRequested"] = "OnJoinSubRoomRequested";
    RCRTCEngineEventsName["OnJoinSubRoomRequestCanceled"] = "OnJoinSubRoomRequestCanceled";
    RCRTCEngineEventsName["OnJoinSubRoomRequestResponded"] = "OnJoinSubRoomRequestResponded";
    RCRTCEngineEventsName["OnJoinSubRoomRequestReceived"] = "OnJoinSubRoomRequestReceived";
    RCRTCEngineEventsName["OnCancelJoinSubRoomRequestReceived"] = "OnCancelJoinSubRoomRequestReceived";
    RCRTCEngineEventsName["OnJoinSubRoomRequestResponseReceived"] = "OnJoinSubRoomRequestResponseReceived";
    RCRTCEngineEventsName["OnSubRoomJoined"] = "OnSubRoomJoined";
    RCRTCEngineEventsName["OnSubRoomLeft"] = "OnSubRoomLeft";
    RCRTCEngineEventsName["OnSubRoomBanded"] = "OnSubRoomBanded";
    RCRTCEngineEventsName["OnSubRoomDisband"] = "OnSubRoomDisband";
})(RCRTCEngineEventsName || (RCRTCEngineEventsName = {}));
/**
 * 状态监听枚举
 */
export var RCRTCStatsEventsName;
(function (RCRTCStatsEventsName) {
    RCRTCStatsEventsName["OnNetworkStats"] = "OnNetworkStats";
    RCRTCStatsEventsName["OnLocalAudioStats"] = "OnLocalAudioStats";
    RCRTCStatsEventsName["OnLocalVideoStats"] = "OnLocalVideoStats";
    RCRTCStatsEventsName["OnRemoteAudioStats"] = "OnRemoteAudioStats";
    RCRTCStatsEventsName["OnRemoteVideoStats"] = "OnRemoteVideoStats";
    RCRTCStatsEventsName["OnLiveMixAudioStats"] = "OnLiveMixAudioStats";
    RCRTCStatsEventsName["OnLiveMixVideoStats"] = "OnLiveMixVideoStats";
    RCRTCStatsEventsName["OnLiveMixMemberAudioStats"] = "OnLiveMixMemberAudioStats";
    RCRTCStatsEventsName["OnLiveMixMemberCustomAudioStats"] = "OnLiveMixMemberCustomAudioStats";
    RCRTCStatsEventsName["OnLocalCustomAudioStats"] = "OnLocalCustomAudioStats";
    RCRTCStatsEventsName["OnLocalCustomVideoStats"] = "OnLocalCustomVideoStats";
    RCRTCStatsEventsName["OnRemoteCustomAudioStats"] = "OnRemoteCustomAudioStats";
    RCRTCStatsEventsName["OnRemoteCustomVideoStats"] = "OnRemoteCustomVideoStats";
})(RCRTCStatsEventsName || (RCRTCStatsEventsName = {}));
export var RCRTCNetworkQualityLevel;
(function (RCRTCNetworkQualityLevel) {
    RCRTCNetworkQualityLevel[RCRTCNetworkQualityLevel["qualityExcellent"] = 0] = "qualityExcellent";
    RCRTCNetworkQualityLevel[RCRTCNetworkQualityLevel["qualityGood"] = 1] = "qualityGood";
    RCRTCNetworkQualityLevel[RCRTCNetworkQualityLevel["qualityPoor"] = 2] = "qualityPoor";
    RCRTCNetworkQualityLevel[RCRTCNetworkQualityLevel["qualityBad"] = 3] = "qualityBad";
    RCRTCNetworkQualityLevel[RCRTCNetworkQualityLevel["qualityVeryBad"] = 4] = "qualityVeryBad";
    RCRTCNetworkQualityLevel[RCRTCNetworkQualityLevel["qualityDown"] = 5] = "qualityDown";
})(RCRTCNetworkQualityLevel || (RCRTCNetworkQualityLevel = {}));
(function (RCRTCRole) {
    RCRTCRole[RCRTCRole["meetingMember"] = 0] = "meetingMember";
    RCRTCRole[RCRTCRole["liveBroadcaster"] = 1] = "liveBroadcaster";
    RCRTCRole[RCRTCRole["liveAudience"] = 2] = "liveAudience";
})(RCRTCRole || (RCRTCRole = {}));
