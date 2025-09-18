import { resolveComponent, openBlock, createBlock } from "vue";
function requireNativePlugin(name) {
  return weex.requireModule(name);
}
function formatAppLog(type, filename, ...args) {
  if (uni.__log__) {
    uni.__log__(type, filename, ...args);
  } else {
    console[type].apply(console, [...args, filename]);
  }
}
function resolveEasycom(component, easycom) {
  return typeof component === "string" ? easycom : component;
}
var RCRTCAudioCodecType;
(function(RCRTCAudioCodecType2) {
  RCRTCAudioCodecType2[RCRTCAudioCodecType2["OPUS"] = 0] = "OPUS";
  RCRTCAudioCodecType2[RCRTCAudioCodecType2["PCMU"] = 1] = "PCMU";
})(RCRTCAudioCodecType || (RCRTCAudioCodecType = {}));
var RCRTCAudioSource;
(function(RCRTCAudioSource2) {
  RCRTCAudioSource2[RCRTCAudioSource2["DEFAULT"] = 0] = "DEFAULT";
  RCRTCAudioSource2[RCRTCAudioSource2["MIC"] = 1] = "MIC";
  RCRTCAudioSource2[RCRTCAudioSource2["VOICE_UPLINK"] = 2] = "VOICE_UPLINK";
  RCRTCAudioSource2[RCRTCAudioSource2["VOICE_DOWNLINK"] = 3] = "VOICE_DOWNLINK";
  RCRTCAudioSource2[RCRTCAudioSource2["VOICE_CALL"] = 4] = "VOICE_CALL";
  RCRTCAudioSource2[RCRTCAudioSource2["CAMCORDER"] = 5] = "CAMCORDER";
  RCRTCAudioSource2[RCRTCAudioSource2["VOICE_RECOGNITION"] = 6] = "VOICE_RECOGNITION";
  RCRTCAudioSource2[RCRTCAudioSource2["VOICE_COMMUNICATION"] = 7] = "VOICE_COMMUNICATION";
})(RCRTCAudioSource || (RCRTCAudioSource = {}));
var RCRTCAudioSampleRate;
(function(RCRTCAudioSampleRate2) {
  RCRTCAudioSampleRate2[RCRTCAudioSampleRate2["Type8000"] = 8e3] = "Type8000";
  RCRTCAudioSampleRate2[RCRTCAudioSampleRate2["Type16000"] = 16e3] = "Type16000";
  RCRTCAudioSampleRate2[RCRTCAudioSampleRate2["Type32000"] = 32e3] = "Type32000";
  RCRTCAudioSampleRate2[RCRTCAudioSampleRate2["Type44100"] = 44100] = "Type44100";
  RCRTCAudioSampleRate2[RCRTCAudioSampleRate2["Type48000"] = 48e3] = "Type48000";
})(RCRTCAudioSampleRate || (RCRTCAudioSampleRate = {}));
var RCRTCMediaType;
(function(RCRTCMediaType2) {
  RCRTCMediaType2[RCRTCMediaType2["Audio"] = 0] = "Audio";
  RCRTCMediaType2[RCRTCMediaType2["Video"] = 1] = "Video";
  RCRTCMediaType2[RCRTCMediaType2["AudioVideo"] = 2] = "AudioVideo";
})(RCRTCMediaType || (RCRTCMediaType = {}));
var RCRTCRole;
(function(RCRTCRole2) {
  RCRTCRole2[RCRTCRole2["MeetingMember"] = 0] = "MeetingMember";
  RCRTCRole2[RCRTCRole2["LiveBroadcaster"] = 1] = "LiveBroadcaster";
  RCRTCRole2[RCRTCRole2["LiveAudience"] = 2] = "LiveAudience";
})(RCRTCRole || (RCRTCRole = {}));
var RCRTCAudioQuality;
(function(RCRTCAudioQuality2) {
  RCRTCAudioQuality2[RCRTCAudioQuality2["Speech"] = 0] = "Speech";
  RCRTCAudioQuality2[RCRTCAudioQuality2["Music"] = 1] = "Music";
  RCRTCAudioQuality2[RCRTCAudioQuality2["MusicHigh"] = 2] = "MusicHigh";
})(RCRTCAudioQuality || (RCRTCAudioQuality = {}));
var RCRTCAudioScenario;
(function(RCRTCAudioScenario2) {
  RCRTCAudioScenario2[RCRTCAudioScenario2["Normal"] = 0] = "Normal";
  RCRTCAudioScenario2[RCRTCAudioScenario2["MusicChatRoom"] = 1] = "MusicChatRoom";
  RCRTCAudioScenario2[RCRTCAudioScenario2["MusicClassRoom"] = 2] = "MusicClassRoom";
})(RCRTCAudioScenario || (RCRTCAudioScenario = {}));
var RCRTCVideoFps;
(function(RCRTCVideoFps2) {
  RCRTCVideoFps2[RCRTCVideoFps2["Fps10"] = 0] = "Fps10";
  RCRTCVideoFps2[RCRTCVideoFps2["Fps15"] = 1] = "Fps15";
  RCRTCVideoFps2[RCRTCVideoFps2["Fps24"] = 2] = "Fps24";
  RCRTCVideoFps2[RCRTCVideoFps2["Fps30"] = 3] = "Fps30";
})(RCRTCVideoFps || (RCRTCVideoFps = {}));
var RCRTCVideoResolution;
(function(RCRTCVideoResolution2) {
  RCRTCVideoResolution2[RCRTCVideoResolution2["Resolution_144x176"] = 0] = "Resolution_144x176";
  RCRTCVideoResolution2[RCRTCVideoResolution2["Resolution_180x180"] = 1] = "Resolution_180x180";
  RCRTCVideoResolution2[RCRTCVideoResolution2["Resolution_144x256"] = 2] = "Resolution_144x256";
  RCRTCVideoResolution2[RCRTCVideoResolution2["Resolution_180x240"] = 3] = "Resolution_180x240";
  RCRTCVideoResolution2[RCRTCVideoResolution2["Resolution_180x320"] = 4] = "Resolution_180x320";
  RCRTCVideoResolution2[RCRTCVideoResolution2["Resolution_240x240"] = 5] = "Resolution_240x240";
  RCRTCVideoResolution2[RCRTCVideoResolution2["Resolution_240x320"] = 6] = "Resolution_240x320";
  RCRTCVideoResolution2[RCRTCVideoResolution2["Resolution_360x360"] = 7] = "Resolution_360x360";
  RCRTCVideoResolution2[RCRTCVideoResolution2["Resolution_360x480"] = 8] = "Resolution_360x480";
  RCRTCVideoResolution2[RCRTCVideoResolution2["Resolution_360x640"] = 9] = "Resolution_360x640";
  RCRTCVideoResolution2[RCRTCVideoResolution2["Resolution_480x480"] = 10] = "Resolution_480x480";
  RCRTCVideoResolution2[RCRTCVideoResolution2["Resolution_480x640"] = 11] = "Resolution_480x640";
  RCRTCVideoResolution2[RCRTCVideoResolution2["Resolution_480x720"] = 12] = "Resolution_480x720";
  RCRTCVideoResolution2[RCRTCVideoResolution2["Resolution_480x848"] = 13] = "Resolution_480x848";
  RCRTCVideoResolution2[RCRTCVideoResolution2["Resolution_720x960"] = 14] = "Resolution_720x960";
  RCRTCVideoResolution2[RCRTCVideoResolution2["Resolution_720x1280"] = 15] = "Resolution_720x1280";
  RCRTCVideoResolution2[RCRTCVideoResolution2["Resolution_1080x1920"] = 16] = "Resolution_1080x1920";
})(RCRTCVideoResolution || (RCRTCVideoResolution = {}));
var RCRTCViewFitType;
(function(RCRTCViewFitType2) {
  RCRTCViewFitType2[RCRTCViewFitType2["Cover"] = 0] = "Cover";
  RCRTCViewFitType2[RCRTCViewFitType2["Center"] = 1] = "Center";
})(RCRTCViewFitType || (RCRTCViewFitType = {}));
var RCRTCCamera;
(function(RCRTCCamera2) {
  RCRTCCamera2[RCRTCCamera2["None"] = 0] = "None";
  RCRTCCamera2[RCRTCCamera2["Front"] = 1] = "Front";
  RCRTCCamera2[RCRTCCamera2["Back"] = 2] = "Back";
})(RCRTCCamera || (RCRTCCamera = {}));
var RCRTCCameraCaptureOrientation;
(function(RCRTCCameraCaptureOrientation2) {
  RCRTCCameraCaptureOrientation2[RCRTCCameraCaptureOrientation2["Portrait"] = 0] = "Portrait";
  RCRTCCameraCaptureOrientation2[RCRTCCameraCaptureOrientation2["PortraitUpsideDown"] = 1] = "PortraitUpsideDown";
  RCRTCCameraCaptureOrientation2[RCRTCCameraCaptureOrientation2["LandscapeRight"] = 2] = "LandscapeRight";
  RCRTCCameraCaptureOrientation2[RCRTCCameraCaptureOrientation2["LandscapeLeft"] = 3] = "LandscapeLeft";
})(RCRTCCameraCaptureOrientation || (RCRTCCameraCaptureOrientation = {}));
var RCRTCLiveMixLayoutMode;
(function(RCRTCLiveMixLayoutMode2) {
  RCRTCLiveMixLayoutMode2[RCRTCLiveMixLayoutMode2["Custom"] = 0] = "Custom";
  RCRTCLiveMixLayoutMode2[RCRTCLiveMixLayoutMode2["Suspension"] = 1] = "Suspension";
  RCRTCLiveMixLayoutMode2[RCRTCLiveMixLayoutMode2["Adaptive"] = 2] = "Adaptive";
})(RCRTCLiveMixLayoutMode || (RCRTCLiveMixLayoutMode = {}));
var RCRTCLiveMixRenderMode;
(function(RCRTCLiveMixRenderMode2) {
  RCRTCLiveMixRenderMode2[RCRTCLiveMixRenderMode2["Crop"] = 0] = "Crop";
  RCRTCLiveMixRenderMode2[RCRTCLiveMixRenderMode2["Whole"] = 1] = "Whole";
})(RCRTCLiveMixRenderMode || (RCRTCLiveMixRenderMode = {}));
var RCRTCAudioMixingMode;
(function(RCRTCAudioMixingMode2) {
  RCRTCAudioMixingMode2[RCRTCAudioMixingMode2["None"] = 0] = "None";
  RCRTCAudioMixingMode2[RCRTCAudioMixingMode2["Mixing"] = 1] = "Mixing";
  RCRTCAudioMixingMode2[RCRTCAudioMixingMode2["Replace"] = 2] = "Replace";
})(RCRTCAudioMixingMode || (RCRTCAudioMixingMode = {}));
var RCRTCNetworkType;
(function(RCRTCNetworkType2) {
  RCRTCNetworkType2[RCRTCNetworkType2["Unknown"] = 0] = "Unknown";
  RCRTCNetworkType2[RCRTCNetworkType2["WiFi"] = 1] = "WiFi";
  RCRTCNetworkType2[RCRTCNetworkType2["Mobile"] = 2] = "Mobile";
})(RCRTCNetworkType || (RCRTCNetworkType = {}));
var RCRTCVideoCodecType;
(function(RCRTCVideoCodecType2) {
  RCRTCVideoCodecType2[RCRTCVideoCodecType2["H264"] = 0] = "H264";
})(RCRTCVideoCodecType || (RCRTCVideoCodecType = {}));
var RCRTCStreamType;
(function(RCRTCStreamType2) {
  RCRTCStreamType2[RCRTCStreamType2["NotNormal"] = 0] = "NotNormal";
  RCRTCStreamType2[RCRTCStreamType2["Normal"] = 1] = "Normal";
  RCRTCStreamType2[RCRTCStreamType2["Live"] = 2] = "Live";
  RCRTCStreamType2[RCRTCStreamType2["File"] = 3] = "File";
  RCRTCStreamType2[RCRTCStreamType2["Screen"] = 4] = "Screen";
  RCRTCStreamType2[RCRTCStreamType2["CDN"] = 5] = "CDN";
})(RCRTCStreamType || (RCRTCStreamType = {}));
var RCRTCEngineEventsName;
(function(RCRTCEngineEventsName2) {
  RCRTCEngineEventsName2["OnError"] = "OnError";
  RCRTCEngineEventsName2["OnKicked"] = "OnKicked";
  RCRTCEngineEventsName2["OnRoomJoined"] = "OnRoomJoined";
  RCRTCEngineEventsName2["OnRoomLeft"] = "OnRoomLeft";
  RCRTCEngineEventsName2["OnPublished"] = "OnPublished";
  RCRTCEngineEventsName2["OnUnpublished"] = "OnUnpublished";
  RCRTCEngineEventsName2["OnSubscribed"] = "OnSubscribed";
  RCRTCEngineEventsName2["OnUnsubscribed"] = "OnUnsubscribed";
  RCRTCEngineEventsName2["OnLiveMixSubscribed"] = "OnLiveMixSubscribed";
  RCRTCEngineEventsName2["OnLiveMixUnsubscribed"] = "OnLiveMixUnsubscribed";
  RCRTCEngineEventsName2["OnCameraEnabled"] = "OnCameraEnabled";
  RCRTCEngineEventsName2["OnCameraSwitched"] = "OnCameraSwitched";
  RCRTCEngineEventsName2["OnLiveCdnAdded"] = "OnLiveCdnAdded";
  RCRTCEngineEventsName2["OnLiveCdnRemoved"] = "OnLiveCdnRemoved";
  RCRTCEngineEventsName2["OnLiveMixLayoutModeSet"] = "OnLiveMixLayoutModeSet";
  RCRTCEngineEventsName2["OnLiveMixRenderModeSet"] = "OnLiveMixRenderModeSet";
  RCRTCEngineEventsName2["OnLiveMixBackgroundColorSet"] = "OnLiveMixBackgroundColorSet";
  RCRTCEngineEventsName2["OnLiveMixCustomAudiosSet"] = "OnLiveMixCustomAudiosSet";
  RCRTCEngineEventsName2["OnLiveMixCustomLayoutsSet"] = "OnLiveMixCustomLayoutsSet";
  RCRTCEngineEventsName2["OnLiveMixAudioBitrateSet"] = "OnLiveMixAudioBitrateSet";
  RCRTCEngineEventsName2["OnLiveMixVideoBitrateSet"] = "OnLiveMixVideoBitrateSet";
  RCRTCEngineEventsName2["OnLiveMixVideoResolutionSet"] = "OnLiveMixVideoResolutionSet";
  RCRTCEngineEventsName2["OnLiveMixVideoFpsSet"] = "OnLiveMixVideoFpsSet";
  RCRTCEngineEventsName2["OnAudioEffectCreated"] = "OnAudioEffectCreated";
  RCRTCEngineEventsName2["OnAudioEffectFinished"] = "OnAudioEffectFinished";
  RCRTCEngineEventsName2["OnAudioMixingStarted"] = "OnAudioMixingStarted";
  RCRTCEngineEventsName2["OnAudioMixingPaused"] = "OnAudioMixingPaused";
  RCRTCEngineEventsName2["OnAudioMixingStopped"] = "OnAudioMixingStopped";
  RCRTCEngineEventsName2["OnAudioMixingFinished"] = "OnAudioMixingFinished";
  RCRTCEngineEventsName2["OnUserJoined"] = "OnUserJoined";
  RCRTCEngineEventsName2["OnUserOffline"] = "OnUserOffline";
  RCRTCEngineEventsName2["OnUserLeft"] = "OnUserLeft";
  RCRTCEngineEventsName2["OnRemotePublished"] = "OnRemotePublished";
  RCRTCEngineEventsName2["OnRemoteUnpublished"] = "OnRemoteUnpublished";
  RCRTCEngineEventsName2["OnRemoteLiveMixPublished"] = "OnRemoteLiveMixPublished";
  RCRTCEngineEventsName2["OnRemoteLiveMixUnpublished"] = "OnRemoteLiveMixUnpublished";
  RCRTCEngineEventsName2["OnRemoteStateChanged"] = "OnRemoteStateChanged";
  RCRTCEngineEventsName2["OnRemoteFirstFrame"] = "OnRemoteFirstFrame";
  RCRTCEngineEventsName2["OnRemoteLiveMixFirstFrame"] = "OnRemoteLiveMixFirstFrame";
  RCRTCEngineEventsName2["OnCustomStreamPublished"] = "OnCustomStreamPublished";
  RCRTCEngineEventsName2["OnCustomStreamUnpublished"] = "OnCustomStreamUnpublished";
  RCRTCEngineEventsName2["OnCustomStreamPublishFinished"] = "OnCustomStreamPublishFinished";
  RCRTCEngineEventsName2["OnRemoteCustomStreamPublished"] = "OnRemoteCustomStreamPublished";
  RCRTCEngineEventsName2["OnRemoteCustomStreamUnpublished"] = "OnRemoteCustomStreamUnpublished";
  RCRTCEngineEventsName2["OnRemoteCustomStreamStateChanged"] = "OnRemoteCustomStreamStateChanged";
  RCRTCEngineEventsName2["OnRemoteCustomStreamFirstFrame"] = "OnRemoteCustomStreamFirstFrame";
  RCRTCEngineEventsName2["OnCustomStreamSubscribed"] = "OnCustomStreamSubscribed";
  RCRTCEngineEventsName2["OnCustomStreamUnsubscribed"] = "OnCustomStreamUnsubscribed";
  RCRTCEngineEventsName2["OnJoinSubRoomRequested"] = "OnJoinSubRoomRequested";
  RCRTCEngineEventsName2["OnJoinSubRoomRequestCanceled"] = "OnJoinSubRoomRequestCanceled";
  RCRTCEngineEventsName2["OnJoinSubRoomRequestResponded"] = "OnJoinSubRoomRequestResponded";
  RCRTCEngineEventsName2["OnJoinSubRoomRequestReceived"] = "OnJoinSubRoomRequestReceived";
  RCRTCEngineEventsName2["OnCancelJoinSubRoomRequestReceived"] = "OnCancelJoinSubRoomRequestReceived";
  RCRTCEngineEventsName2["OnJoinSubRoomRequestResponseReceived"] = "OnJoinSubRoomRequestResponseReceived";
  RCRTCEngineEventsName2["OnSubRoomJoined"] = "OnSubRoomJoined";
  RCRTCEngineEventsName2["OnSubRoomLeft"] = "OnSubRoomLeft";
  RCRTCEngineEventsName2["OnSubRoomBanded"] = "OnSubRoomBanded";
  RCRTCEngineEventsName2["OnSubRoomDisband"] = "OnSubRoomDisband";
})(RCRTCEngineEventsName || (RCRTCEngineEventsName = {}));
var RCRTCStatsEventsName;
(function(RCRTCStatsEventsName2) {
  RCRTCStatsEventsName2["OnNetworkStats"] = "OnNetworkStats";
  RCRTCStatsEventsName2["OnLocalAudioStats"] = "OnLocalAudioStats";
  RCRTCStatsEventsName2["OnLocalVideoStats"] = "OnLocalVideoStats";
  RCRTCStatsEventsName2["OnRemoteAudioStats"] = "OnRemoteAudioStats";
  RCRTCStatsEventsName2["OnRemoteVideoStats"] = "OnRemoteVideoStats";
  RCRTCStatsEventsName2["OnLiveMixAudioStats"] = "OnLiveMixAudioStats";
  RCRTCStatsEventsName2["OnLiveMixVideoStats"] = "OnLiveMixVideoStats";
  RCRTCStatsEventsName2["OnLiveMixMemberAudioStats"] = "OnLiveMixMemberAudioStats";
  RCRTCStatsEventsName2["OnLiveMixMemberCustomAudioStats"] = "OnLiveMixMemberCustomAudioStats";
  RCRTCStatsEventsName2["OnLocalCustomAudioStats"] = "OnLocalCustomAudioStats";
  RCRTCStatsEventsName2["OnLocalCustomVideoStats"] = "OnLocalCustomVideoStats";
  RCRTCStatsEventsName2["OnRemoteCustomAudioStats"] = "OnRemoteCustomAudioStats";
  RCRTCStatsEventsName2["OnRemoteCustomVideoStats"] = "OnRemoteCustomVideoStats";
})(RCRTCStatsEventsName || (RCRTCStatsEventsName = {}));
var RCRTCNetworkQualityLevel;
(function(RCRTCNetworkQualityLevel2) {
  RCRTCNetworkQualityLevel2[RCRTCNetworkQualityLevel2["qualityExcellent"] = 0] = "qualityExcellent";
  RCRTCNetworkQualityLevel2[RCRTCNetworkQualityLevel2["qualityGood"] = 1] = "qualityGood";
  RCRTCNetworkQualityLevel2[RCRTCNetworkQualityLevel2["qualityPoor"] = 2] = "qualityPoor";
  RCRTCNetworkQualityLevel2[RCRTCNetworkQualityLevel2["qualityBad"] = 3] = "qualityBad";
  RCRTCNetworkQualityLevel2[RCRTCNetworkQualityLevel2["qualityVeryBad"] = 4] = "qualityVeryBad";
  RCRTCNetworkQualityLevel2[RCRTCNetworkQualityLevel2["qualityDown"] = 5] = "qualityDown";
})(RCRTCNetworkQualityLevel || (RCRTCNetworkQualityLevel = {}));
(function(RCRTCRole2) {
  RCRTCRole2[RCRTCRole2["meetingMember"] = 0] = "meetingMember";
  RCRTCRole2[RCRTCRole2["liveBroadcaster"] = 1] = "liveBroadcaster";
  RCRTCRole2[RCRTCRole2["liveAudience"] = 2] = "liveAudience";
})(RCRTCRole || (RCRTCRole = {}));
const _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _sfc_main = {
  props: {
    fitType: {
      type: Number,
      default: RCRTCViewFitType.Fill
    },
    mirror: {
      type: Boolean
    }
  },
  methods: {
    getNativeViewRef() {
      return this.$refs.nativeView.ref;
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_RongCloud_RTC_RCUniRtcView = resolveComponent("RongCloud-RTC-RCUniRtcView");
  return openBlock(), createBlock(_component_RongCloud_RTC_RCUniRtcView, {
    ref: "nativeView",
    fitType: $props.fitType,
    mirror: $props.mirror
  }, null, 8, ["fitType", "mirror"]);
}
const __easycom_0 = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
var RCIMIWPushType;
(function(RCIMIWPushType2) {
  RCIMIWPushType2[RCIMIWPushType2["iOS"] = 0] = "iOS";
  RCIMIWPushType2[RCIMIWPushType2["unknown"] = 1] = "unknown";
  RCIMIWPushType2[RCIMIWPushType2["rong"] = 2] = "rong";
  RCIMIWPushType2[RCIMIWPushType2["huawei"] = 3] = "huawei";
  RCIMIWPushType2[RCIMIWPushType2["xiaomi"] = 4] = "xiaomi";
  RCIMIWPushType2[RCIMIWPushType2["googleFCM"] = 5] = "googleFCM";
  RCIMIWPushType2[RCIMIWPushType2["googleGCM"] = 6] = "googleGCM";
  RCIMIWPushType2[RCIMIWPushType2["meizu"] = 7] = "meizu";
  RCIMIWPushType2[RCIMIWPushType2["vivo"] = 8] = "vivo";
  RCIMIWPushType2[RCIMIWPushType2["oppo"] = 9] = "oppo";
  RCIMIWPushType2[RCIMIWPushType2["honor"] = 10] = "honor";
})(RCIMIWPushType || (RCIMIWPushType = {}));
var RCIMIWImportanceHW;
(function(RCIMIWImportanceHW2) {
  RCIMIWImportanceHW2[RCIMIWImportanceHW2["normal"] = 0] = "normal";
  RCIMIWImportanceHW2[RCIMIWImportanceHW2["low"] = 1] = "low";
})(RCIMIWImportanceHW || (RCIMIWImportanceHW = {}));
var RCIMIWMessageOperationPolicy;
(function(RCIMIWMessageOperationPolicy2) {
  RCIMIWMessageOperationPolicy2[RCIMIWMessageOperationPolicy2["local"] = 0] = "local";
  RCIMIWMessageOperationPolicy2[RCIMIWMessageOperationPolicy2["remote"] = 1] = "remote";
  RCIMIWMessageOperationPolicy2[RCIMIWMessageOperationPolicy2["localRemote"] = 2] = "localRemote";
})(RCIMIWMessageOperationPolicy || (RCIMIWMessageOperationPolicy = {}));
var RCIMIWNativeCustomMessagePersistentFlag;
(function(RCIMIWNativeCustomMessagePersistentFlag2) {
  RCIMIWNativeCustomMessagePersistentFlag2[RCIMIWNativeCustomMessagePersistentFlag2["none"] = 0] = "none";
  RCIMIWNativeCustomMessagePersistentFlag2[RCIMIWNativeCustomMessagePersistentFlag2["persisted"] = 1] = "persisted";
  RCIMIWNativeCustomMessagePersistentFlag2[RCIMIWNativeCustomMessagePersistentFlag2["counted"] = 2] = "counted";
  RCIMIWNativeCustomMessagePersistentFlag2[RCIMIWNativeCustomMessagePersistentFlag2["status"] = 3] = "status";
})(RCIMIWNativeCustomMessagePersistentFlag || (RCIMIWNativeCustomMessagePersistentFlag = {}));
var RCIMIWVIVOPushType;
(function(RCIMIWVIVOPushType2) {
  RCIMIWVIVOPushType2[RCIMIWVIVOPushType2["operate"] = 0] = "operate";
  RCIMIWVIVOPushType2[RCIMIWVIVOPushType2["system"] = 1] = "system";
})(RCIMIWVIVOPushType || (RCIMIWVIVOPushType = {}));
var RCIMIWSentStatus;
(function(RCIMIWSentStatus2) {
  RCIMIWSentStatus2[RCIMIWSentStatus2["sending"] = 0] = "sending";
  RCIMIWSentStatus2[RCIMIWSentStatus2["failed"] = 1] = "failed";
  RCIMIWSentStatus2[RCIMIWSentStatus2["sent"] = 2] = "sent";
  RCIMIWSentStatus2[RCIMIWSentStatus2["received"] = 3] = "received";
  RCIMIWSentStatus2[RCIMIWSentStatus2["read"] = 4] = "read";
  RCIMIWSentStatus2[RCIMIWSentStatus2["destroyed"] = 5] = "destroyed";
  RCIMIWSentStatus2[RCIMIWSentStatus2["canceled"] = 6] = "canceled";
})(RCIMIWSentStatus || (RCIMIWSentStatus = {}));
var RCIMIWPushNotificationQuietHoursLevel;
(function(RCIMIWPushNotificationQuietHoursLevel2) {
  RCIMIWPushNotificationQuietHoursLevel2[RCIMIWPushNotificationQuietHoursLevel2["none"] = 0] = "none";
  RCIMIWPushNotificationQuietHoursLevel2[RCIMIWPushNotificationQuietHoursLevel2["mentionMessage"] = 1] = "mentionMessage";
  RCIMIWPushNotificationQuietHoursLevel2[RCIMIWPushNotificationQuietHoursLevel2["blocked"] = 2] = "blocked";
})(RCIMIWPushNotificationQuietHoursLevel || (RCIMIWPushNotificationQuietHoursLevel = {}));
var RCIMIWMessageDirection;
(function(RCIMIWMessageDirection2) {
  RCIMIWMessageDirection2[RCIMIWMessageDirection2["send"] = 0] = "send";
  RCIMIWMessageDirection2[RCIMIWMessageDirection2["receive"] = 1] = "receive";
})(RCIMIWMessageDirection || (RCIMIWMessageDirection = {}));
var RCIMIWReceivedStatus;
(function(RCIMIWReceivedStatus2) {
  RCIMIWReceivedStatus2[RCIMIWReceivedStatus2["unread"] = 0] = "unread";
  RCIMIWReceivedStatus2[RCIMIWReceivedStatus2["read"] = 1] = "read";
  RCIMIWReceivedStatus2[RCIMIWReceivedStatus2["listened"] = 2] = "listened";
  RCIMIWReceivedStatus2[RCIMIWReceivedStatus2["downloaded"] = 3] = "downloaded";
  RCIMIWReceivedStatus2[RCIMIWReceivedStatus2["retrieved"] = 4] = "retrieved";
  RCIMIWReceivedStatus2[RCIMIWReceivedStatus2["multipleReceive"] = 5] = "multipleReceive";
})(RCIMIWReceivedStatus || (RCIMIWReceivedStatus = {}));
var RCIMIWChatRoomMemberActionType;
(function(RCIMIWChatRoomMemberActionType2) {
  RCIMIWChatRoomMemberActionType2[RCIMIWChatRoomMemberActionType2["unknown"] = 0] = "unknown";
  RCIMIWChatRoomMemberActionType2[RCIMIWChatRoomMemberActionType2["join"] = 1] = "join";
  RCIMIWChatRoomMemberActionType2[RCIMIWChatRoomMemberActionType2["leave"] = 2] = "leave";
})(RCIMIWChatRoomMemberActionType || (RCIMIWChatRoomMemberActionType = {}));
var RCIMIWPushNotificationLevel;
(function(RCIMIWPushNotificationLevel2) {
  RCIMIWPushNotificationLevel2[RCIMIWPushNotificationLevel2["allMessage"] = 0] = "allMessage";
  RCIMIWPushNotificationLevel2[RCIMIWPushNotificationLevel2["none"] = 1] = "none";
  RCIMIWPushNotificationLevel2[RCIMIWPushNotificationLevel2["mention"] = 2] = "mention";
  RCIMIWPushNotificationLevel2[RCIMIWPushNotificationLevel2["mentionUsers"] = 3] = "mentionUsers";
  RCIMIWPushNotificationLevel2[RCIMIWPushNotificationLevel2["mentionAll"] = 4] = "mentionAll";
  RCIMIWPushNotificationLevel2[RCIMIWPushNotificationLevel2["blocked"] = 5] = "blocked";
})(RCIMIWPushNotificationLevel || (RCIMIWPushNotificationLevel = {}));
var RCIMIWMessageType;
(function(RCIMIWMessageType2) {
  RCIMIWMessageType2[RCIMIWMessageType2["unknown"] = 0] = "unknown";
  RCIMIWMessageType2[RCIMIWMessageType2["custom"] = 1] = "custom";
  RCIMIWMessageType2[RCIMIWMessageType2["text"] = 2] = "text";
  RCIMIWMessageType2[RCIMIWMessageType2["voice"] = 3] = "voice";
  RCIMIWMessageType2[RCIMIWMessageType2["image"] = 4] = "image";
  RCIMIWMessageType2[RCIMIWMessageType2["file"] = 5] = "file";
  RCIMIWMessageType2[RCIMIWMessageType2["sight"] = 6] = "sight";
  RCIMIWMessageType2[RCIMIWMessageType2["gif"] = 7] = "gif";
  RCIMIWMessageType2[RCIMIWMessageType2["recall"] = 8] = "recall";
  RCIMIWMessageType2[RCIMIWMessageType2["reference"] = 9] = "reference";
  RCIMIWMessageType2[RCIMIWMessageType2["command"] = 10] = "command";
  RCIMIWMessageType2[RCIMIWMessageType2["commandNotification"] = 11] = "commandNotification";
  RCIMIWMessageType2[RCIMIWMessageType2["location"] = 12] = "location";
  RCIMIWMessageType2[RCIMIWMessageType2["userCustom"] = 13] = "userCustom";
  RCIMIWMessageType2[RCIMIWMessageType2["nativeCustom"] = 14] = "nativeCustom";
  RCIMIWMessageType2[RCIMIWMessageType2["nativeCustomMedia"] = 15] = "nativeCustomMedia";
})(RCIMIWMessageType || (RCIMIWMessageType = {}));
var RCIMIWMessageBlockType;
(function(RCIMIWMessageBlockType2) {
  RCIMIWMessageBlockType2[RCIMIWMessageBlockType2["unknown"] = 0] = "unknown";
  RCIMIWMessageBlockType2[RCIMIWMessageBlockType2["global"] = 1] = "global";
  RCIMIWMessageBlockType2[RCIMIWMessageBlockType2["custom"] = 2] = "custom";
  RCIMIWMessageBlockType2[RCIMIWMessageBlockType2["thirdParty"] = 3] = "thirdParty";
})(RCIMIWMessageBlockType || (RCIMIWMessageBlockType = {}));
var RCIMIWTimeOrder;
(function(RCIMIWTimeOrder2) {
  RCIMIWTimeOrder2[RCIMIWTimeOrder2["before"] = 0] = "before";
  RCIMIWTimeOrder2[RCIMIWTimeOrder2["after"] = 1] = "after";
})(RCIMIWTimeOrder || (RCIMIWTimeOrder = {}));
var RCIMIWCustomMessagePolicy;
(function(RCIMIWCustomMessagePolicy2) {
  RCIMIWCustomMessagePolicy2[RCIMIWCustomMessagePolicy2["command"] = 0] = "command";
  RCIMIWCustomMessagePolicy2[RCIMIWCustomMessagePolicy2["normal"] = 1] = "normal";
  RCIMIWCustomMessagePolicy2[RCIMIWCustomMessagePolicy2["status"] = 2] = "status";
  RCIMIWCustomMessagePolicy2[RCIMIWCustomMessagePolicy2["storage"] = 3] = "storage";
})(RCIMIWCustomMessagePolicy || (RCIMIWCustomMessagePolicy = {}));
var RCIMIWChatRoomStatus;
(function(RCIMIWChatRoomStatus2) {
  RCIMIWChatRoomStatus2[RCIMIWChatRoomStatus2["reset"] = 0] = "reset";
  RCIMIWChatRoomStatus2[RCIMIWChatRoomStatus2["destroyManual"] = 1] = "destroyManual";
  RCIMIWChatRoomStatus2[RCIMIWChatRoomStatus2["destroyAuto"] = 2] = "destroyAuto";
})(RCIMIWChatRoomStatus || (RCIMIWChatRoomStatus = {}));
var RCIMIWConversationType;
(function(RCIMIWConversationType2) {
  RCIMIWConversationType2[RCIMIWConversationType2["invalid"] = 0] = "invalid";
  RCIMIWConversationType2[RCIMIWConversationType2["private"] = 1] = "private";
  RCIMIWConversationType2[RCIMIWConversationType2["group"] = 2] = "group";
  RCIMIWConversationType2[RCIMIWConversationType2["chatroom"] = 3] = "chatroom";
  RCIMIWConversationType2[RCIMIWConversationType2["system"] = 4] = "system";
  RCIMIWConversationType2[RCIMIWConversationType2["ultraGroup"] = 5] = "ultraGroup";
})(RCIMIWConversationType || (RCIMIWConversationType = {}));
var RCIMIWErrorCode;
(function(RCIMIWErrorCode2) {
  RCIMIWErrorCode2[RCIMIWErrorCode2["success"] = 0] = "success";
  RCIMIWErrorCode2[RCIMIWErrorCode2["paramError"] = 1] = "paramError";
  RCIMIWErrorCode2[RCIMIWErrorCode2["engineDestroyed"] = 2] = "engineDestroyed";
  RCIMIWErrorCode2[RCIMIWErrorCode2["nativeOperationError"] = 3] = "nativeOperationError";
  RCIMIWErrorCode2[RCIMIWErrorCode2["resultUnknown"] = 4] = "resultUnknown";
})(RCIMIWErrorCode || (RCIMIWErrorCode = {}));
var RCIMIWUltraGroupTypingStatus;
(function(RCIMIWUltraGroupTypingStatus2) {
  RCIMIWUltraGroupTypingStatus2[RCIMIWUltraGroupTypingStatus2["text"] = 0] = "text";
})(RCIMIWUltraGroupTypingStatus || (RCIMIWUltraGroupTypingStatus = {}));
var RCIMIWMentionedType;
(function(RCIMIWMentionedType2) {
  RCIMIWMentionedType2[RCIMIWMentionedType2["all"] = 0] = "all";
  RCIMIWMentionedType2[RCIMIWMentionedType2["part"] = 1] = "part";
})(RCIMIWMentionedType || (RCIMIWMentionedType = {}));
var RCIMIWAreaCode;
(function(RCIMIWAreaCode2) {
  RCIMIWAreaCode2[RCIMIWAreaCode2["bj"] = 0] = "bj";
  RCIMIWAreaCode2[RCIMIWAreaCode2["sg"] = 1] = "sg";
  RCIMIWAreaCode2[RCIMIWAreaCode2["na"] = 2] = "na";
  RCIMIWAreaCode2[RCIMIWAreaCode2["sgB"] = 3] = "sgB";
  RCIMIWAreaCode2[RCIMIWAreaCode2["sa"] = 4] = "sa";
})(RCIMIWAreaCode || (RCIMIWAreaCode = {}));
var RCIMIWChatRoomEntriesOperationType;
(function(RCIMIWChatRoomEntriesOperationType2) {
  RCIMIWChatRoomEntriesOperationType2[RCIMIWChatRoomEntriesOperationType2["update"] = 0] = "update";
  RCIMIWChatRoomEntriesOperationType2[RCIMIWChatRoomEntriesOperationType2["remove"] = 1] = "remove";
})(RCIMIWChatRoomEntriesOperationType || (RCIMIWChatRoomEntriesOperationType = {}));
var RCIMIWLogLevel;
(function(RCIMIWLogLevel2) {
  RCIMIWLogLevel2[RCIMIWLogLevel2["none"] = 0] = "none";
  RCIMIWLogLevel2[RCIMIWLogLevel2["error"] = 1] = "error";
  RCIMIWLogLevel2[RCIMIWLogLevel2["warn"] = 2] = "warn";
  RCIMIWLogLevel2[RCIMIWLogLevel2["info"] = 3] = "info";
  RCIMIWLogLevel2[RCIMIWLogLevel2["debug"] = 4] = "debug";
  RCIMIWLogLevel2[RCIMIWLogLevel2["verbose"] = 5] = "verbose";
})(RCIMIWLogLevel || (RCIMIWLogLevel = {}));
var RCIMIWBlacklistStatus;
(function(RCIMIWBlacklistStatus2) {
  RCIMIWBlacklistStatus2[RCIMIWBlacklistStatus2["unknown"] = 0] = "unknown";
  RCIMIWBlacklistStatus2[RCIMIWBlacklistStatus2["inBlacklist"] = 1] = "inBlacklist";
  RCIMIWBlacklistStatus2[RCIMIWBlacklistStatus2["notInBlacklist"] = 2] = "notInBlacklist";
})(RCIMIWBlacklistStatus || (RCIMIWBlacklistStatus = {}));
var RCIMIWImportanceHonor;
(function(RCIMIWImportanceHonor2) {
  RCIMIWImportanceHonor2[RCIMIWImportanceHonor2["normal"] = 0] = "normal";
  RCIMIWImportanceHonor2[RCIMIWImportanceHonor2["low"] = 1] = "low";
})(RCIMIWImportanceHonor || (RCIMIWImportanceHonor = {}));
var RCIMIWConnectionStatus;
(function(RCIMIWConnectionStatus2) {
  RCIMIWConnectionStatus2[RCIMIWConnectionStatus2["networkUnavailable"] = 0] = "networkUnavailable";
  RCIMIWConnectionStatus2[RCIMIWConnectionStatus2["connected"] = 1] = "connected";
  RCIMIWConnectionStatus2[RCIMIWConnectionStatus2["connecting"] = 2] = "connecting";
  RCIMIWConnectionStatus2[RCIMIWConnectionStatus2["unconnected"] = 3] = "unconnected";
  RCIMIWConnectionStatus2[RCIMIWConnectionStatus2["kickedOfflineByOtherClient"] = 4] = "kickedOfflineByOtherClient";
  RCIMIWConnectionStatus2[RCIMIWConnectionStatus2["tokenIncorrect"] = 5] = "tokenIncorrect";
  RCIMIWConnectionStatus2[RCIMIWConnectionStatus2["connUserBlocked"] = 6] = "connUserBlocked";
  RCIMIWConnectionStatus2[RCIMIWConnectionStatus2["signOut"] = 7] = "signOut";
  RCIMIWConnectionStatus2[RCIMIWConnectionStatus2["suspend"] = 8] = "suspend";
  RCIMIWConnectionStatus2[RCIMIWConnectionStatus2["timeout"] = 9] = "timeout";
  RCIMIWConnectionStatus2[RCIMIWConnectionStatus2["unknown"] = 10] = "unknown";
})(RCIMIWConnectionStatus || (RCIMIWConnectionStatus = {}));
RCIMIWLogLevel.info;
const isString = (value) => typeof value === "string";
const isNumber = (value) => typeof value === "number" && !Number.isNaN(value);
const isArray = (arr) => Object.prototype.toString.call(arr).indexOf("Array") !== -1;
const notEmptyString = (str) => isString(str) && str.length > 0;
const notEmptyArray = (arr) => isArray(arr) && arr.length > 0;
const isObject = (val) => Object.prototype.toString.call(val) === "[object Object]";
const isNumberArray = (value) => {
  let flag = false;
  if (notEmptyArray(value)) {
    flag = value.every((item) => isNumber(item));
  }
  return flag;
};
var AssertRules;
(function(AssertRules2) {
  AssertRules2[AssertRules2["STRING"] = 0] = "STRING";
  AssertRules2[AssertRules2["ONLY_STRING"] = 1] = "ONLY_STRING";
  AssertRules2[AssertRules2["NUMBER"] = 2] = "NUMBER";
  AssertRules2[AssertRules2["BOOLEAN"] = 3] = "BOOLEAN";
  AssertRules2[AssertRules2["OBJECT"] = 4] = "OBJECT";
  AssertRules2[AssertRules2["ARRAY"] = 5] = "ARRAY";
  AssertRules2[AssertRules2["NUMBER_ARRAY"] = 6] = "NUMBER_ARRAY";
})(AssertRules || (AssertRules = {}));
({
  [AssertRules.STRING]: "type is String and length > 0",
  [AssertRules.ONLY_STRING]: "type is string",
  [AssertRules.NUMBER]: "type is number",
  [AssertRules.BOOLEAN]: "type is Boolean",
  [AssertRules.OBJECT]: "type is Object",
  [AssertRules.ARRAY]: "type is Array",
  [AssertRules.NUMBER_ARRAY]: "type is Array and item is Number"
});
({
  [AssertRules.STRING]: notEmptyString,
  [AssertRules.ONLY_STRING]: isString,
  [AssertRules.NUMBER]: isNumber,
  [AssertRules.BOOLEAN]: (value) => typeof value === "boolean",
  [AssertRules.OBJECT]: isObject,
  [AssertRules.ARRAY]: notEmptyArray,
  [AssertRules.NUMBER_ARRAY]: isNumberArray
});
requireNativePlugin("RongCloud-IM-V2-RCUniIMV2");
Promise.resolve(RCIMIWErrorCode.paramError);
const RCUniRtc = requireNativePlugin("RongCloud-RTC-RCUniRtc");
uni.getSystemInfoSync().platform;
const EngineEventsPrefix = "Engine:";
const StatsEventsPrefix = "Stats:";
let engineInstance;
class RCRTCEngine {
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
    if (event.includes(":")) {
      return event;
    }
    let prefix = "";
    if (Object.keys(RCRTCEngineEventsName).includes(event)) {
      prefix = EngineEventsPrefix;
    } else if (Object.keys(RCRTCStatsEventsName).includes(event)) {
      prefix = StatsEventsPrefix;
    } else {
      throw new Error("EventName not support.");
    }
    return prefix + event;
  }
  _invokeMethod(name, params) {
    formatAppLog("log", "at uni_modules/RongCloud-RTCWrapper/lib/RCRTCEngine.js:312", `invokeMethod methodName: ${name}, params:${params}`);
    return new Promise((resolve, _) => {
      RCUniRtc.invokeMethod({ name, params }, (res) => {
        resolve(res);
      });
    });
  }
  _setListener(event, callback) {
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
    const eventName = "IRCRTCIWNetworkProbeListener:onNetworkProbeUpLinkStats";
    this._setListener(eventName, callback);
  }
  /**
   * 网络检测下行回调
   */
  setOnNetworkProbeDownLinkStatsListener(callback) {
    const eventName = "IRCRTCIWNetworkProbeListener:onNetworkProbeDownLinkStats";
    this._setListener(eventName, callback);
  }
  /**
   * 角色切换回调
   */
  setOnLiveRoleSwitchedListener(callback) {
    const eventName = "IRCRTCIWListener:onLiveRoleSwitched";
    this._setListener(eventName, callback);
  }
  /**
   * 远端角色切换回调
   */
  setOnRemoteLiveRoleSwitchedListener(callback) {
    const eventName = "IRCRTCIWListener:onRemoteLiveRoleSwitched";
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
    const eventName = "IRCRTCIWListener:onLiveMixInnerCdnStreamEnabled";
    this._setListener(eventName, callback);
  }
  /**
  *
       直播内置 cdn 资源发布回调
      
  */
  setOnRemoteLiveMixInnerCdnStreamPublishedListener(callback) {
    const eventName = "IRCRTCIWListener:onRemoteLiveMixInnerCdnStreamPublished";
    this._setListener(eventName, callback);
  }
  /**
  *
       直播内置 cdn 资源取消发布回调
      
  */
  setOnRemoteLiveMixInnerCdnStreamUnpublishedListener(callback) {
    const eventName = "IRCRTCIWListener:onRemoteLiveMixInnerCdnStreamUnpublished";
    this._setListener(eventName, callback);
  }
  /**
   * 订阅直播内置 cdn 资源回调
   */
  setOnLiveMixInnerCdnStreamSubscribedListener(callback) {
    const eventName = "IRCRTCIWListener:onLiveMixInnerCdnStreamSubscribed";
    this._setListener(eventName, callback);
  }
  /**
   * 取消订阅直播内置 cdn 资源回调
   */
  setOnLiveMixInnerCdnStreamUnsubscribedListener(callback) {
    const eventName = "IRCRTCIWListener:onLiveMixInnerCdnStreamUnsubscribed";
    this._setListener(eventName, callback);
  }
  /**
   * 观众端设置订阅 cdn 流的分辨率的回调
   */
  setOnLocalLiveMixInnerCdnVideoResolutionSetListener(callback) {
    const eventName = "IRCRTCIWListener:onLocalLiveMixInnerCdnVideoResolutionSet";
    this._setListener(eventName, callback);
  }
  /**
   * 观众端 设置订阅 cdn 流的帧率的回调
   */
  setOnLocalLiveMixInnerCdnVideoFpsSetListener(callback) {
    const eventName = "IRCRTCIWListener:onLocalLiveMixInnerCdnVideoFpsSet";
    this._setListener(eventName, callback);
  }
  /**
   * 设置水印的回调
   */
  setOnWatermarkSetListener(callback) {
    const eventName = "IRCRTCIWListener:onWatermarkSet";
    this._setListener(eventName, callback);
  }
  /**
   * 移除水印的回调
   */
  setOnWatermarkRemovedListener(callback) {
    const eventName = "IRCRTCIWListener:onWatermarkRemoved";
    this._setListener(eventName, callback);
  }
  /**
   * 开启网络探测结果回调
   */
  setOnNetworkProbeStartedListener(callback) {
    const eventName = "IRCRTCIWListener:onNetworkProbeStarted";
    this._setListener(eventName, callback);
  }
  /**
   * 关闭网络探测结果回调
   */
  setOnNetworkProbeStoppedListener(callback) {
    const eventName = "IRCRTCIWListener:onNetworkProbeStopped";
    this._setListener(eventName, callback);
  }
  /**
   * 开启 SEI 功能结果回调
   */
  setOnSeiEnabledListener(callback) {
    const eventName = "IRCRTCIWListener:onSeiEnabled";
    this._setListener(eventName, callback);
  }
  /**
   * 收到 SEI 信息回调
   */
  setOnSeiReceivedListener(callback) {
    const eventName = "IRCRTCIWListener:onSeiReceived";
    this._setListener(eventName, callback);
  }
  /**
   * 观众收到合流 SEI 信息回调
   */
  setOnLiveMixSeiReceivedListener(callback) {
    const eventName = "IRCRTCIWListener:onLiveMixSeiReceived";
    this._setListener(eventName, callback);
  }
  setOnNetworkProbeFinishedListener(callback) {
    const eventName = "IRCRTCIWNetworkProbeListener:onNetworkProbeFinished";
    this._setListener(eventName, callback);
  }
}
export {
  RCRTCEngine as R,
  _export_sfc as _,
  RCRTCMediaType as a,
  RCRTCRole as b,
  RCRTCCamera as c,
  __easycom_0 as d,
  RCRTCVideoFps as e,
  formatAppLog as f,
  RCRTCLiveMixLayoutMode as g,
  RCRTCAudioMixingMode as h,
  resolveEasycom as r
};
