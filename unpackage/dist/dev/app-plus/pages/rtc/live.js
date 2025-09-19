"use weex:vue";

if (typeof Promise !== 'undefined' && !Promise.prototype.finally) {
  Promise.prototype.finally = function(callback) {
    const promise = this.constructor
    return this.then(
      value => promise.resolve(callback()).then(() => value),
      reason => promise.resolve(callback()).then(() => {
        throw reason
      })
    )
  }
};

if (typeof uni !== 'undefined' && uni && uni.requireGlobal) {
  const global = uni.requireGlobal()
  ArrayBuffer = global.ArrayBuffer
  Int8Array = global.Int8Array
  Uint8Array = global.Uint8Array
  Uint8ClampedArray = global.Uint8ClampedArray
  Int16Array = global.Int16Array
  Uint16Array = global.Uint16Array
  Int32Array = global.Int32Array
  Uint32Array = global.Uint32Array
  Float32Array = global.Float32Array
  Float64Array = global.Float64Array
  BigInt64Array = global.BigInt64Array
  BigUint64Array = global.BigUint64Array
};


(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));
  var __async = (__this, __arguments, generator) => {
    return new Promise((resolve, reject) => {
      var fulfilled = (value) => {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      };
      var rejected = (value) => {
        try {
          step(generator.throw(value));
        } catch (e) {
          reject(e);
        }
      };
      var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
      step((generator = generator.apply(__this, __arguments)).next());
    });
  };

  // vue-ns:vue
  var require_vue = __commonJS({
    "vue-ns:vue"(exports, module) {
      module.exports = Vue;
    }
  });

  // ../../../../../../Users/yongqiming/developer/android/project/rongcloud/uniapp-rtc-quickdemo/unpackage/dist/dev/.nvue/RCRTCEngine.js
  var import_vue = __toESM(require_vue());
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
  var _export_sfc = (sfc, props) => {
    const target = sfc.__vccOpts || sfc;
    for (const [key, val] of props) {
      target[key] = val;
    }
    return target;
  };
  var _sfc_main = {
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
    const _component_RongCloud_RTC_RCUniRtcView = (0, import_vue.resolveComponent)("RongCloud-RTC-RCUniRtcView");
    return (0, import_vue.openBlock)(), (0, import_vue.createBlock)(_component_RongCloud_RTC_RCUniRtcView, {
      ref: "nativeView",
      fitType: $props.fitType,
      mirror: $props.mirror
    }, null, 8, ["fitType", "mirror"]);
  }
  var __easycom_0 = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/Users/yongqiming/developer/android/project/rongcloud/uniapp-rtc-quickdemo/uni_modules/RongCloud-RTCWrapper/components/RCRTCView.nvue"]]);
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
  var isString = (value) => typeof value === "string";
  var isNumber = (value) => typeof value === "number" && !Number.isNaN(value);
  var isArray = (arr) => Object.prototype.toString.call(arr).indexOf("Array") !== -1;
  var notEmptyString = (str) => isString(str) && str.length > 0;
  var notEmptyArray = (arr) => isArray(arr) && arr.length > 0;
  var isObject = (val) => Object.prototype.toString.call(val) === "[object Object]";
  var isNumberArray = (value) => {
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
  var RCUniRtc = requireNativePlugin("RongCloud-RTC-RCUniRtc");
  uni.getSystemInfoSync().platform;
  var EngineEventsPrefix = "Engine:";
  var StatsEventsPrefix = "Stats:";
  var engineInstance;
  var RCRTCEngine = class _RCRTCEngine {
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
          engineInstance = new _RCRTCEngine();
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
  };

  // ../../../../../../Users/yongqiming/developer/android/project/rongcloud/uniapp-rtc-quickdemo/unpackage/dist/dev/.nvue/pages/rtc/live.js
  var import_vue2 = __toESM(require_vue());
  var _style_0 = { "rtc-container": { "": { "position": "absolute", "top": 0, "left": 0, "right": 0, "bottom": 0, "backgroundColor": "#f5f7fa", "display": "flex", "flexDirection": "column" } }, "status-bar-placeholder": { "": { "height": 44, "backgroundColor": "#667eea" } }, "header": { "": { "backgroundColor": "#667eea", "boxShadow": "0 4rpx 12rpx rgba(102, 126, 234, 0.15)" } }, "title-row": { "": { "height": "88rpx", "paddingLeft": "30rpx", "paddingRight": "30rpx", "display": "flex", "flexDirection": "row", "alignItems": "center", "position": "relative" } }, "nav-left": { "": { "display": "flex", "flexDirection": "row", "alignItems": "center", "marginRight": "30rpx" } }, "nav-left-btn": { "": { "backgroundColor": "rgba(0,0,0,0)", "borderWidth": 0, "borderColor": "#000000", "paddingTop": 0, "paddingRight": 0, "paddingBottom": 0, "paddingLeft": 0, "marginTop": 0, "marginRight": "30rpx", "marginBottom": 0, "marginLeft": 0, "display": "flex", "flexDirection": "row", "alignItems": "center" } }, "back-button-container": { "": { "position": "absolute", "top": 50, "left": "30rpx", "transform": "translateY(-10%)", "zIndex": 1e3 } }, "back-text": { "": { "fontSize": "28rpx", "color": "#FFFFFF" } }, "nav-title": { "": { "position": "absolute", "left": 0, "right": 0, "fontSize": "36rpx", "fontWeight": "bold", "color": "#FFFFFF", "textAlign": "center" } }, "room-info-text": { "": { "fontSize": "26rpx", "color": "rgba(255,255,255,0.9)", "backgroundColor": "rgba(255,255,255,0.1)", "paddingTop": "8rpx", "paddingRight": "16rpx", "paddingBottom": "8rpx", "paddingLeft": "16rpx", "borderRadius": "20rpx" } }, "user-info-text": { "": { "fontSize": "26rpx", "color": "rgba(255,255,255,0.9)", "backgroundColor": "rgba(255,255,255,0.1)", "paddingTop": "8rpx", "paddingRight": "16rpx", "paddingBottom": "8rpx", "paddingLeft": "16rpx", "borderRadius": "20rpx" } }, "video-container": { "": { "paddingTop": "32rpx", "paddingRight": "32rpx", "paddingBottom": "20rpx", "paddingLeft": "32rpx", "display": "flex", "flexDirection": "column" } }, "video-card": { "": { "backgroundColor": "#FFFFFF", "borderRadius": "20rpx", "paddingTop": "20rpx", "paddingRight": "20rpx", "paddingBottom": "20rpx", "paddingLeft": "20rpx", "marginBottom": 0, "boxShadow": "0 4rpx 12rpx rgba(0, 0, 0, 0.08)" } }, "video-card-header": { "": { "display": "flex", "flexDirection": "row", "alignItems": "center", "marginBottom": "20rpx" } }, "card-title": { "": { "fontSize": "32rpx", "color": "#333333", "fontWeight": "bold", "marginLeft": "12rpx" } }, "video-row": { "": { "display": "flex", "flexDirection": "row" } }, "video-item": { "": { "flex": 1, "display": "flex", "flexDirection": "column", "marginTop": 0, "marginRight": "10rpx", "marginBottom": 0, "marginLeft": "10rpx" } }, "video-icon": { "": { "fontSize": "24rpx", "marginRight": "12rpx" } }, "video-content": { "": { "flex": 1 } }, "video-placeholder": { "": { "height": "200rpx", "backgroundColor": "#f8f9fa", "borderRadius": "12rpx", "display": "flex", "alignItems": "center", "justifyContent": "center", "borderWidth": "1rpx", "borderStyle": "solid", "borderColor": "#dddddd" } }, "placeholder-text": { "": { "color": "#6c757d", "fontSize": "24rpx", "textAlign": "center" } }, "video-player": { "": { "flex": 1, "height": "200rpx", "borderRadius": "12rpx", "backgroundColor": "#000000" } }, "control-panel": { "": { "backgroundColor": "#FFFFFF", "paddingTop": "30rpx", "paddingRight": "30rpx", "paddingBottom": "30rpx", "paddingLeft": "30rpx", "marginTop": "20rpx", "marginRight": "32rpx", "marginBottom": "32rpx", "marginLeft": "32rpx", "borderRadius": "25rpx", "boxShadow": "0 8rpx 24rpx rgba(0, 0, 0, 0.1)", "borderWidth": "1rpx", "borderStyle": "solid", "borderColor": "rgba(255,255,255,0.8)" } }, "room-info": { "": { "flexDirection": "row", "alignItems": "center", "marginBottom": "30rpx", "backgroundColor": "#f8f9fa", "paddingTop": "20rpx", "paddingRight": "20rpx", "paddingBottom": "20rpx", "paddingLeft": "20rpx", "borderRadius": "15rpx", "borderWidth": "1rpx", "borderStyle": "solid", "borderColor": "#e9ecef" } }, "room-label": { "": { "fontSize": "28rpx", "color": "#495057", "marginRight": "20rpx", "width": "120rpx", "fontWeight": "500" } }, "room-input": { "": { "flex": 1, "height": "70rpx", "borderWidth": 0, "borderStyle": "solid", "borderColor": "#000000", "borderRadius": "12rpx", "paddingTop": 0, "paddingRight": "20rpx", "paddingBottom": 0, "paddingLeft": "20rpx", "fontSize": "28rpx", "backgroundColor": "#FFFFFF", "boxShadow": "0 2rpx 8rpx rgba(0, 0, 0, 0.05)" } }, "button-row": { "": { "display": "flex", "flexDirection": "row", "marginBottom": "24rpx" } }, "control-btn": { "": { "flex": 1, "height": "88rpx", "borderRadius": "18rpx", "borderWidth": 0, "borderStyle": "solid", "borderColor": "#000000", "position": "relative", "overflow": "hidden", "marginTop": 0, "marginRight": "8rpx", "marginBottom": 0, "marginLeft": "8rpx", "display": "flex", "alignItems": "center", "justifyContent": "center", "marginLeft:first-child": 0, "marginRight:last-child": 0 } }, "btn-text": { "": { "fontSize": 12, "fontWeight": "bold", "textAlign": "center", "color": "#FFFFFF" }, ".join-btn.disabled ": { "color": "#666666" }, ".leave-btn.disabled ": { "color": "#666666" } }, "join-btn": { "": { "backgroundColor": "#669eea", "color": "#FFFFFF", "boxShadow": "0 4rpx 12rpx rgba(102, 126, 234, 0.3)" }, ".disabled": { "backgroundColor": "#cccccc", "boxShadow": "none" } }, "leave-btn": { "": { "backgroundColor": "#ff6b6b", "color": "#FFFFFF", "boxShadow": "0 4rpx 12rpx rgba(255, 107, 107, 0.3)" }, ".disabled": { "backgroundColor": "#cccccc", "boxShadow": "none" } }, "rtc-btn": { "": { "backgroundColor": "#669eea", "color": "#FFFFFF", "boxShadow": "0 4rpx 12rpx rgba(40, 167, 69, 0.3)" } }, "debug-btn": { "": { "backgroundColor": "#6c757d", "color": "#FFFFFF", "boxShadow": "0 4rpx 12rpx rgba(108, 117, 125, 0.3)", "backgroundColor:active": "#003a6c", "boxShadow:active": "0 4rpx 12rpx rgba(73, 80, 87, 0.4)" } }, "status-bar": { "": { "backgroundColor": "#343a40", "paddingTop": "24rpx", "paddingRight": "40rpx", "paddingBottom": "24rpx", "paddingLeft": "40rpx", "marginTop": "20rpx", "marginRight": "32rpx", "marginBottom": 0, "marginLeft": "32rpx", "borderRadius": "15rpx", "boxShadow": "0 4rpx 12rpx rgba(0, 0, 0, 0.15)", "position": "relative", "overflow": "hidden" } }, "status-text": { "": { "color": "#FFFFFF", "fontSize": "26rpx", "textAlign": "center", "fontWeight": "500" } } };
  var _sfc_main2 = {
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
        statusText: "\u51C6\u5907\u5C31\u7EEA",
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
    /**
     * 麦克风，摄像头，扬声器 操作已经 meeting 里面做了演示，这里不再做演示，参考 meeting即可
     */
    onLoad() {
      formatAppLog("log", "at pages/rtc/live.nvue:193", "=== Live \u9875\u9762 onLoad \u89E6\u53D1 ===");
      const platform = uni.getSystemInfoSync().platform;
      this.showBackButton = platform === "android";
      formatAppLog("log", "at pages/rtc/live.nvue:199", "\u5F53\u524D\u5E73\u53F0:", platform, "\u663E\u793A\u8FD4\u56DE\u6309\u94AE:", this.showBackButton);
      this.initRTCEngine();
      const loginInfo = uni.getStorageSync("loginInfo");
      if (loginInfo) {
        this.currentUserId = loginInfo.userId;
        formatAppLog("log", "at pages/rtc/live.nvue:211", this.currentUserId);
      }
    },
    onShow() {
      formatAppLog("log", "at pages/rtc/live.nvue:216", "onShow - \u9875\u9762\u663E\u793A (\u91CD\u65B0\u8FDB\u5165\u9875\u9762)");
      this.initRTCEngine();
    },
    onHide() {
      formatAppLog("log", "at pages/rtc/live.nvue:222", "onHide - \u9875\u9762\u9690\u85CF (iOS\u4FA7\u6ED1\u8FD4\u56DE\u4F1A\u89E6\u53D1)");
      this.forceCleanup();
    },
    onBackPress() {
      formatAppLog("log", "at pages/rtc/live.nvue:228", "onBackPress - \u62E6\u622A\u8FD4\u56DE\u64CD\u4F5C");
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
          formatAppLog("log", "at pages/rtc/live.nvue:241", "=== \u5F00\u59CB\u521D\u59CB\u5316RTC\u5F15\u64CE ===");
          if (this.rtcEngine) {
            formatAppLog("log", "at pages/rtc/live.nvue:245", "\u6E05\u7406\u65E7\u7684RTC\u5F15\u64CE...");
            try {
              this.rtcEngine.destroy();
            } catch (e) {
              formatAppLog("log", "at pages/rtc/live.nvue:249", "\u6E05\u7406\u65E7\u5F15\u64CE\u65F6\u51FA\u9519:", e);
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
          formatAppLog("log", "at pages/rtc/live.nvue:263", "RTC\u5F15\u64CE\u521B\u5EFA\u7ED3\u679C:", !!this.rtcEngine);
          if (this.rtcEngine) {
            this.setRoomListener();
            this.setdLiveAudienceRoomListener();
            this.setAudioMix();
            this._isDestroyed = false;
            this._isInitialized = true;
            formatAppLog("log", "at pages/rtc/live.nvue:272", "=== RTC\u5F15\u64CE\u521D\u59CB\u5316\u5B8C\u6210 ===");
          } else {
            throw new Error("RTC\u5F15\u64CE\u521B\u5EFA\u5931\u8D25\uFF0C\u8FD4\u56DEnull");
          }
        } catch (error) {
          formatAppLog("error", "at pages/rtc/live.nvue:278", "RTC\u5F15\u64CE\u521B\u5EFA\u5931\u8D25:", error);
          formatAppLog("error", "at pages/rtc/live.nvue:279", "\u9519\u8BEF\u8BE6\u60C5:", error.message, error.stack);
          this.rtcEngine = null;
          this._isInitialized = false;
          this._isDestroyed = true;
          uni.showToast({
            title: "RTC\u5F15\u64CE\u521D\u59CB\u5316\u5931\u8D25",
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
          formatAppLog("log", "at pages/rtc/live.nvue:304", userId);
          formatAppLog("log", "at pages/rtc/live.nvue:305", roomId);
          this.remoteUserId = userId;
          uni.showToast({
            title: `${userId}\u52A0\u5165\u623F\u95F4`,
            icon: "none"
          });
        });
        this.rtcEngine.setOnRemotePublishedListener(({
          userId,
          roomId,
          type
        }) => {
          formatAppLog("log", "at pages/rtc/live.nvue:325", userId);
          formatAppLog("log", "at pages/rtc/live.nvue:326", roomId);
          this.isRemoteStreams = true;
          uni.showToast({
            title: `${userId}\u53D1\u5E03\u8D44\u6E90`,
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
            title: `${userId}\u5207\u6362\u8EAB\u4EFD\u4E3A${role}`
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
            title: "\u4E3B\u64AD\u53D1\u5E03\u5408\u6D41",
            icon: "none"
          });
        });
        this.rtcEngine.setOnRemoteLiveMixUnpublishedListener(({
          type
        }) => {
          this.isMixStreams = false;
          uni.showToast({
            title: "\u4E3B\u64AD\u53D1\u5E03\u5408\u6D41",
            icon: "none"
          });
        });
      },
      /**
       * 混音相关回调
       */
      setAudioMix() {
        this.rtcEngine.setOnAudioMixingStartedListener(() => {
          formatAppLog("log", "at pages/rtc/live.nvue:401", "setOnAudioMixingStartedListener");
        });
        this.rtcEngine.setOnAudioMixingPausedListener(() => {
          formatAppLog("log", "at pages/rtc/live.nvue:407", "setOnAudioMixingPausedListener");
        });
        this.rtcEngine.setOnAudioMixingStoppedListener(() => {
          formatAppLog("log", "at pages/rtc/live.nvue:413", "setOnAudioMixingStoppedListener");
        });
        this.rtcEngine.setOnAudioMixingFinishedListener(() => {
          formatAppLog("log", "at pages/rtc/live.nvue:419", "setOnAudioMixingFinishedListener");
        });
      },
      /**
       * 返回上一页
       */
      goBack() {
        formatAppLog("log", "at pages/rtc/live.nvue:427", "goBack - \u8FD4\u56DE\u4E0A\u4E00\u9875");
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
      handleJoinRoom(role) {
        return __async(this, null, function* () {
          try {
            formatAppLog("log", "at pages/rtc/live.nvue:452", "=== \u5F00\u59CB\u52A0\u5165\u623F\u95F4 ===");
            this.userRole = role;
            if (this._isDestroyed) {
              formatAppLog("log", "at pages/rtc/live.nvue:456", "\u7EC4\u4EF6\u5DF2\u9500\u6BC1\uFF0C\u53D6\u6D88\u52A0\u5165\u623F\u95F4");
              return;
            }
            if (role === 1) {
              this.isJoining = true;
            } else if (role === 2) {
              this.isAudienceJoining = true;
            }
            this.statusText = "\u6B63\u5728\u52A0\u5165\u623F\u95F4...";
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
                formatAppLog("log", "at pages/rtc/live.nvue:482", "\u7EC4\u4EF6\u5DF2\u9500\u6BC1\uFF0C\u5FFD\u7565\u56DE\u8C03");
                return;
              }
              if (code === 0) {
                this.isInRoom = true;
                this.statusText = "\u5DF2\u52A0\u5165\u623F\u95F4";
                if (this.userRole === 1) {
                  this.rtcEngine.enableCamera(true, RCRTCCamera.Front);
                  this.isLocalVideoReady = true;
                  setTimeout(() => {
                    if (this._isDestroyed)
                      return;
                    if (this.$refs.localView && this.$refs.localView.getNativeViewRef) {
                      this.rtcEngine.setLocalView(this.$refs.localView.getNativeViewRef(), (code2) => {
                        formatAppLog("log", "at pages/rtc/live.nvue:498", "\u8BBE\u7F6E\u672C\u5730\u89C6\u56FE\u7ED3\u679C:", code2);
                        if (code2 === 0) {
                          formatAppLog("log", "at pages/rtc/live.nvue:500", "\u672C\u5730\u89C6\u56FE\u8BBE\u7F6E\u6210\u529F");
                        } else {
                          formatAppLog("error", "at pages/rtc/live.nvue:502", "\u672C\u5730\u89C6\u56FE\u8BBE\u7F6E\u5931\u8D25:", code2);
                        }
                      });
                    } else {
                      formatAppLog("error", "at pages/rtc/live.nvue:506", "localView \u5F15\u7528\u4E0D\u5B58\u5728\u6216\u65B9\u6CD5\u4E0D\u53EF\u7528");
                    }
                  }, 100);
                }
              } else {
                this.statusText = "\u52A0\u5165\u623F\u95F4\u5931\u8D25";
                formatAppLog("error", "at pages/rtc/live.nvue:512", "\u52A0\u5165\u623F\u95F4\u5931\u8D25:", code, message);
                uni.showToast({
                  title: "\u52A0\u5165\u623F\u95F4\u5931\u8D25",
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
            formatAppLog("error", "at pages/rtc/live.nvue:532", "\u52A0\u5165\u623F\u95F4\u5F02\u5E38:", error);
            if (!this._isDestroyed) {
              this.isJoining = false;
              this.statusText = "\u52A0\u5165\u623F\u95F4\u5F02\u5E38";
            }
          }
        });
      },
      /**
       * 离开房间
       */
      handleLeaveRoom() {
        return __async(this, null, function* () {
          try {
            if (this.rtcEngine) {
              this.rtcEngine.leaveRoom();
              this.isInRoom = false;
              this.isLocalVideoReady = false;
              this.isRemoteVideoReady = false;
              this.isMixRemoteVideoReady = false;
              this.statusText = "\u5DF2\u79BB\u5F00\u623F\u95F4";
              uni.showToast({
                title: "\u5DF2\u79BB\u5F00\u623F\u95F4",
                icon: "success"
              });
            }
          } catch (error) {
            formatAppLog("error", "at pages/rtc/live.nvue:559", "\u79BB\u5F00\u623F\u95F4\u5931\u8D25:", error);
            uni.showModal({
              title: "\u64CD\u4F5C\u5931\u8D25",
              content: "\u79BB\u5F00\u623F\u95F4\u65F6\u51FA\u73B0\u5F02\u5E38\uFF0C\u8BF7\u91CD\u8BD5",
              showCancel: false,
              confirmText: "\u786E\u5B9A",
              confirmColor: "#667eea"
            });
          }
        });
      },
      /**
       * 发布资源
       */
      publishStreams() {
        if (this._isDestroyed || !this.rtcEngine) {
          formatAppLog("log", "at pages/rtc/live.nvue:575", "\u7EC4\u4EF6\u5DF2\u9500\u6BC1\u6216RTC\u5F15\u64CE\u672A\u521D\u59CB\u5316\uFF0C\u53D6\u6D88\u53D1\u5E03");
          return;
        }
        formatAppLog("log", "at pages/rtc/live.nvue:579", "\u5F00\u59CB\u53D1\u5E03\u97F3\u89C6\u9891\u8D44\u6E90...");
        this.statusText = "\u6B63\u5728\u53D1\u5E03\u8D44\u6E90...";
        try {
          this.rtcEngine.setOnPublishedListener(({
            type,
            code,
            message
          }) => {
            if (this._isDestroyed) {
              formatAppLog("log", "at pages/rtc/live.nvue:589", "\u7EC4\u4EF6\u5DF2\u9500\u6BC1\uFF0C\u5FFD\u7565\u53D1\u5E03\u56DE\u8C03");
              return;
            }
            if (code === 0) {
              this.rtcEngine.setLiveMixVideoBitrate(2200);
              this.rtcEngine.setLiveMixVideoResolution(720, 1280);
              this.rtcEngine.setLiveMixVideoFps(RCRTCVideoFps.Fps15);
              this.rtcEngine.setLiveMixLayoutMode(RCRTCLiveMixLayoutMode.Adaptive);
              this.statusText = "\u97F3\u89C6\u9891\u53D1\u5E03\u6210\u529F";
              formatAppLog("log", "at pages/rtc/live.nvue:600", "\u97F3\u89C6\u9891\u53D1\u5E03\u6210\u529F");
            } else {
              this.statusText = "\u97F3\u89C6\u9891\u53D1\u5E03\u5931\u8D25";
              formatAppLog("error", "at pages/rtc/live.nvue:603", "\u53D1\u5E03\u5931\u8D25:", code, message);
            }
          });
          this.rtcEngine.publish(RCRTCMediaType.AudioVideo);
        } catch (error) {
          formatAppLog("error", "at pages/rtc/live.nvue:610", "\u53D1\u5E03\u8D44\u6E90\u5F02\u5E38:", error);
          this.statusText = "\u53D1\u5E03\u8D44\u6E90\u5F02\u5E38";
        }
      },
      /**
       * 取消发布资源
       */
      unPublishStreams() {
        if (this._isDestroyed || !this.rtcEngine) {
          formatAppLog("log", "at pages/rtc/live.nvue:620", "\u7EC4\u4EF6\u5DF2\u9500\u6BC1\u6216RTC\u5F15\u64CE\u672A\u521D\u59CB\u5316\uFF0C\u53D6\u6D88\u64CD\u4F5C");
          return;
        }
        formatAppLog("log", "at pages/rtc/live.nvue:624", "\u5F00\u59CB\u53D6\u6D88\u53D1\u5E03\u97F3\u89C6\u9891\u8D44\u6E90...");
        this.statusText = "\u6B63\u5728\u53D6\u6D88\u53D1\u5E03...";
        try {
          this.rtcEngine.setOnUnpublishedListener(({
            type,
            code,
            message
          }) => {
            if (this._isDestroyed) {
              formatAppLog("log", "at pages/rtc/live.nvue:634", "\u7EC4\u4EF6\u5DF2\u9500\u6BC1\uFF0C\u5FFD\u7565\u53D6\u6D88\u53D1\u5E03\u56DE\u8C03");
              return;
            }
            if (code === 0) {
              this.statusText = "\u53D6\u6D88\u97F3\u89C6\u9891\u53D1\u5E03\u6210\u529F";
              formatAppLog("log", "at pages/rtc/live.nvue:640", "\u53D6\u6D88\u97F3\u89C6\u9891\u53D1\u5E03\u6210\u529F");
            } else {
              this.statusText = "\u53D6\u6D88\u97F3\u89C6\u9891\u53D1\u5E03\u5931\u8D25";
              formatAppLog("error", "at pages/rtc/live.nvue:643", "\u53D6\u6D88\u53D1\u5E03\u5931\u8D25:", code, message);
            }
          });
          this.rtcEngine.unpublish(RCRTCMediaType.AudioVideo);
        } catch (error) {
          formatAppLog("error", "at pages/rtc/live.nvue:650", "\u53D6\u6D88\u53D1\u5E03\u8D44\u6E90\u5F02\u5E38:", error);
          this.statusText = "\u53D6\u6D88\u53D1\u5E03\u8D44\u6E90\u5F02\u5E38";
        }
      },
      /**
       * 主播订阅资源
       */
      subscribeStreams() {
        if (this.remoteUserId && this.userRole === 1) {
          formatAppLog("log", "at pages/rtc/live.nvue:660", this.remoteUserId);
          this.rtcEngine.subscribe(this.remoteUserId, RCRTCMediaType.AudioVideo);
          this.rtcEngine.setOnSubscribedListener(({
            userId,
            type,
            code,
            message
          }) => {
            if (code === 0) {
              this.enableSpeaker(true);
              formatAppLog("log", "at pages/rtc/live.nvue:673", "\u8BA2\u9605\u6210\u529F");
              this.isRemoteVideoReady = true;
              setTimeout(() => {
                if (this.$refs.remoteView && this.$refs.remoteView.getNativeViewRef) {
                  this.rtcEngine.setRemoteView(this.remoteUserId, this.$refs.remoteView.getNativeViewRef(), (code2) => {
                    if (code2 === 0) {
                      formatAppLog("log", "at pages/rtc/live.nvue:681", "\u8BBE\u7F6E\u8FDC\u7AEF\u89C6\u56FE\u6210\u529F");
                    } else {
                      formatAppLog("log", "at pages/rtc/live.nvue:684", "\u8BBE\u7F6E\u8FDC\u7AEF\u89C6\u56FE\u5931\u8D25");
                    }
                  });
                } else {
                  formatAppLog("error", "at pages/rtc/live.nvue:688", "remoteView \u5F15\u7528\u4E0D\u5B58\u5728\u6216\u65B9\u6CD5\u4E0D\u53EF\u7528");
                }
              }, 100);
            } else {
              formatAppLog("log", "at pages/rtc/live.nvue:693", "\u8BA2\u9605\u5931\u8D25");
            }
          });
        } else {
          uni.showToast({
            title: "\u6CA1\u4EBA\u53D1\u5E03\u8D44\u6E90\u6216\u8005\u8EAB\u4EFD\u4E0D\u5BF9",
            icon: "error"
          });
        }
      },
      /**
       * 观众订阅合流资源
       */
      subscribeLiveMixStream() {
        formatAppLog("log", "at pages/rtc/live.nvue:711", this.isMixStreams);
        if (this.isMixStreams) {
          this.rtcEngine.subscribeLiveMix(RCRTCMediaType.AudioVideo);
          this.rtcEngine.setOnLiveMixSubscribedListener((result) => {
            formatAppLog("log", "at pages/rtc/live.nvue:716", result);
            if (result.code === 0) {
              this.enableSpeaker(true);
              this.isMixRemoteVideoReady = true;
              setTimeout(() => {
                if (this.$refs.mixRemoteView && this.$refs.mixRemoteView.getNativeViewRef) {
                  this.rtcEngine.setLiveMixView(
                    this.$refs.mixRemoteView.getNativeViewRef(),
                    (code) => {
                      if (code === 0) {
                        formatAppLog("log", "at pages/rtc/live.nvue:727", "\u8BBE\u7F6E\u5408\u6D41view\u6210\u529F");
                      } else {
                        formatAppLog("log", "at pages/rtc/live.nvue:730", "\u8BBE\u7F6E\u5408\u6D41view\u5931\u8D25" + code);
                      }
                    }
                  );
                } else {
                  formatAppLog("error", "at pages/rtc/live.nvue:734", "mixRemoteView \u5F15\u7528\u4E0D\u5B58\u5728\u6216\u65B9\u6CD5\u4E0D\u53EF\u7528");
                }
              }, 100);
            } else {
              uni.showToast({
                title: "\u8BA2\u9605\u5408\u6D41\u5931\u8D25",
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
              title: "\u53D6\u6D88\u8BA2\u9605\u6210\u529F",
              icon: "none"
            });
          } else {
            uni.showToast({
              title: "\u53D6\u6D88\u8BA2\u9605\u5931\u8D25",
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
              title: "\u53D6\u6D88\u5408\u6D41\u8BA2\u9605\u6210\u529F",
              icon: "none"
            });
          } else {
            uni.showToast({
              title: "\u53D6\u6D88\u5408\u6D41\u8BA2\u9605\u5931\u8D25",
              icon: "none"
            });
          }
        });
      },
      /**
       * 上下麦   参考文档：https://docs.rongcloud.cn/uni-app-rtclib/cohost/oneroom
       */
      switchLiveRole(userRole) {
        formatAppLog("log", "at pages/rtc/live.nvue:814", userRole);
        this.rtcEngine.setOnLiveRoleSwitchedListener(({
          role,
          code,
          errMsg
        }) => {
          if (code == 0) {
            formatAppLog("log", "at pages/rtc/live.nvue:823", userRole);
            if (userRole === 2) {
              this.isRemoteVideoReady = false;
              this.isLocalVideoReady = false;
            } else if (userRole === 1) {
              formatAppLog("log", "at pages/rtc/live.nvue:828", role);
              this.rtcEngine.enableCamera(true, RCRTCCamera.Front);
              this.isLocalVideoReady = true;
              this.isMixRemoteVideoReady = false;
              this.publishStreams();
              setTimeout(() => {
                if (this._isDestroyed)
                  return;
                if (this.$refs.localView && this.$refs.localView.getNativeViewRef) {
                  this.rtcEngine.setLocalView(this.$refs.localView.getNativeViewRef(), (code2) => {
                    formatAppLog("log", "at pages/rtc/live.nvue:838", "\u8BBE\u7F6E\u672C\u5730\u89C6\u56FE\u7ED3\u679C:", code2);
                    if (code2 === 0) {
                      formatAppLog("log", "at pages/rtc/live.nvue:840", "\u672C\u5730\u89C6\u56FE\u8BBE\u7F6E\u6210\u529F");
                    } else {
                      formatAppLog("error", "at pages/rtc/live.nvue:842", "\u672C\u5730\u89C6\u56FE\u8BBE\u7F6E\u5931\u8D25:", code2);
                    }
                  });
                } else {
                  formatAppLog("error", "at pages/rtc/live.nvue:846", "localView \u5F15\u7528\u4E0D\u5B58\u5728\u6216\u65B9\u6CD5\u4E0D\u53EF\u7528");
                }
              }, 100);
            }
            uni.showToast({
              title: "\u5207\u6362\u8EAB\u4EFD\u6210\u529F",
              icon: "none"
            });
          } else {
            uni.showToast({
              title: "\u5207\u6362\u8EAB\u4EFD\u5931\u8D25",
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
        formatAppLog("log", "at pages/rtc/live.nvue:870", "startAudioMixing");
        this.statusText = "\u64AD\u653E\u6DF7\u97F3";
        let path = "http://music.163.com/song/media/outer/url?id=1306417064.mp3";
        this.rtcEngine.startAudioMixing(path, RCRTCAudioMixingMode.Mixing, true, -1);
      },
      /**
       * 停止播放混音
       */
      stopAudioMixing() {
        this.statusText = "\u505C\u6B62\u64AD\u653E\u6DF7\u97F3";
        formatAppLog("log", "at pages/rtc/live.nvue:881", "stopAudioMixing");
        this.rtcEngine.stopAudioMixing();
      },
      /**
       * 打开/关闭摄像头    摄像头其他设置参考文档：https://docs.rongcloud.cn/uni-app-rtclib/device/camera
       */
      enableCamera(enable) {
        formatAppLog("log", "at pages/rtc/live.nvue:890", enable ? "\u6253\u5F00\u6444\u50CF\u5934" : "\u5173\u95ED\u6444\u50CF\u5934");
        this.rtcEngine.enableCamera(enable);
        this.isCameraOn = enable;
        formatAppLog("log", "at pages/rtc/live.nvue:893", "isSpeakerOn");
        uni.showToast({
          title: enable ? "\u6253\u5F00\u6444\u50CF\u5934" : "\u5173\u95ED\u6444\u50CF\u5934",
          icon: "none"
        });
      },
      /**
       * 打开/关闭麦克风    麦克风其他操作：https://docs.rongcloud.cn/uni-app-rtclib/device/microphone
       */
      enableMicrophone(enable) {
        formatAppLog("log", "at pages/rtc/live.nvue:904", enable ? "\u6253\u5F00\u9EA6\u514B\u98CE" : "\u5173\u95ED\u9EA6\u514B\u98CE");
        this.isMicrophoneOn = enable;
        this.rtcEngine.enableMicrophone(enable);
        uni.showToast({
          title: enable ? "\u5DF2\u6253\u5F00\u9EA6\u514B\u98CE" : "\u5DF2\u5173\u95ED\u9EA6\u514B\u98CE",
          icon: "none"
        });
      },
      /**
       * 打开/关闭扬声器     参考文档：https://docs.rongcloud.cn/uni-app-rtclib/device/speaker
       */
      enableSpeaker(enable) {
        formatAppLog("log", "at pages/rtc/live.nvue:917", enable ? "\u6253\u5F00\u626C\u58F0\u5668" : "\u5173\u95ED\u626C\u58F0\u5668");
        this.isSpeakerOn = true;
        this.rtcEngine.enableSpeaker(enable);
        formatAppLog("log", "at pages/rtc/live.nvue:920", "isSpeakerOn");
        uni.showToast({
          title: enable ? "\u5DF2\u6253\u5F00\u626C\u58F0\u5668" : "\u5DF2\u5173\u95ED\u626C\u58F0\u5668",
          icon: "none"
        });
      },
      /**
       * 强制清理所有资源
       */
      forceCleanup() {
        formatAppLog("log", "at pages/rtc/live.nvue:933", "\u5F3A\u5236\u6E05\u7406\u6240\u6709\u8D44\u6E90\u5F00\u59CB...");
        this._isDestroyed = true;
        if (this.roomJoinedListener) {
          this.roomJoinedListener = null;
          formatAppLog("log", "at pages/rtc/live.nvue:941", "\u76D1\u542C\u5668\u5F15\u7528\u5DF2\u6E05\u7406");
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
            formatAppLog("log", "at pages/rtc/live.nvue:955", "\u79FB\u9664\u76D1\u542C\u5668\u65F6\u51FA\u73B0\u5F02\u5E38:", e);
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
          this.statusText = "\u5DF2\u6E05\u7406";
          this._isInitialized = false;
          this.remoteUserId = "";
          this.isRemoteStreams = false;
        } catch (e) {
          formatAppLog("log", "at pages/rtc/live.nvue:977", "\u91CD\u7F6E\u72B6\u6001\u65F6\u51FA\u73B0\u5F02\u5E38:", e);
        }
        formatAppLog("log", "at pages/rtc/live.nvue:980", "\u5F3A\u5236\u6E05\u7406\u6240\u6709\u8D44\u6E90\u5B8C\u6210");
      }
    }
  };
  function _sfc_render2(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_RCRTCView = resolveEasycom((0, import_vue2.resolveDynamicComponent)("RCRTCView"), __easycom_0);
    return (0, import_vue2.openBlock)(), (0, import_vue2.createElementBlock)("scroll-view", {
      scrollY: true,
      showScrollbar: true,
      enableBackToTop: true,
      bubble: "true",
      style: { flexDirection: "column" }
    }, [
      (0, import_vue2.createElementVNode)("view", { class: "rtc-container" }, [
        (0, import_vue2.createCommentVNode)(" \u72B6\u6001\u680F\u5360\u4F4D "),
        (0, import_vue2.createElementVNode)("view", { class: "status-bar-placeholder" }),
        (0, import_vue2.createElementVNode)("view", { class: "header" }, [
          (0, import_vue2.createElementVNode)("view", { class: "title-row" }, [
            (0, import_vue2.createElementVNode)("u-text", { class: "nav-title" }, "\u97F3\u89C6\u9891\u76F4\u64AD")
          ])
        ]),
        (0, import_vue2.createCommentVNode)(" \u8FD4\u56DE\u6309\u94AE - \u6839\u636E\u5E73\u53F0\u663E\u793A "),
        (0, import_vue2.createElementVNode)("view", { class: "back-button-container" }, [
          (0, import_vue2.createElementVNode)("view", {
            class: "nav-left-btn",
            onClick: _cache[0] || (_cache[0] = (...args) => $options.goBack && $options.goBack(...args)),
            style: { "background-color": "rgba(102, 126, 234, 0.8)", "padding": "15rpx 25rpx", "border-radius": "15rpx", "min-width": "120rpx", "min-height": "70rpx" }
          }, [
            (0, import_vue2.createElementVNode)("u-text", {
              class: "back-text",
              style: { "color": "white", "font-size": "30rpx" }
            }, "\u8FD4\u56DE")
          ])
        ]),
        (0, import_vue2.createElementVNode)("view", { class: "status-bar" }, [
          (0, import_vue2.createElementVNode)(
            "u-text",
            { class: "status-text" },
            (0, import_vue2.toDisplayString)($data.statusText),
            1
            /* TEXT */
          )
        ]),
        (0, import_vue2.createElementVNode)("view", { class: "video-container" }, [
          (0, import_vue2.createElementVNode)("view", { class: "video-card" }, [
            (0, import_vue2.createElementVNode)("view", { class: "video-card-header" }, [
              (0, import_vue2.createElementVNode)("u-text", { class: "video-icon" }, "\u{1F4F9}"),
              (0, import_vue2.createElementVNode)("u-text", { class: "card-title" }, "\u89C6\u56FE\u6E32\u67D3")
            ]),
            (0, import_vue2.createElementVNode)("view", { class: "video-row" }, [
              (0, import_vue2.createCommentVNode)(" \u672C\u5730\u89C6\u9891 "),
              (0, import_vue2.createElementVNode)("view", { class: "video-item" }, [
                (0, import_vue2.createElementVNode)("view", { class: "video-content" }, [
                  !$data.isLocalVideoReady ? ((0, import_vue2.openBlock)(), (0, import_vue2.createElementBlock)("view", {
                    key: 0,
                    class: "video-placeholder"
                  }, [
                    (0, import_vue2.createElementVNode)("u-text", { class: "placeholder-text" }, "\u672C\u5730\u89C6\u56FE")
                  ])) : ((0, import_vue2.openBlock)(), (0, import_vue2.createBlock)(
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
              (0, import_vue2.createCommentVNode)(" \u8FDC\u7AEF\u89C6\u9891 "),
              (0, import_vue2.createElementVNode)("view", { class: "video-item" }, [
                (0, import_vue2.createElementVNode)("view", { class: "video-content" }, [
                  !$data.isRemoteVideoReady ? ((0, import_vue2.openBlock)(), (0, import_vue2.createElementBlock)("view", {
                    key: 0,
                    class: "video-placeholder"
                  }, [
                    (0, import_vue2.createElementVNode)("u-text", { class: "placeholder-text" }, "\u8FDC\u7AEF\u89C6\u56FE")
                  ])) : ((0, import_vue2.openBlock)(), (0, import_vue2.createBlock)(
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
              (0, import_vue2.createElementVNode)("view", { class: "video-item" }, [
                (0, import_vue2.createElementVNode)("view", { class: "video-content" }, [
                  !$data.isMixRemoteVideoReady ? ((0, import_vue2.openBlock)(), (0, import_vue2.createElementBlock)("view", {
                    key: 0,
                    class: "video-placeholder"
                  }, [
                    (0, import_vue2.createElementVNode)("u-text", { class: "placeholder-text" }, "\u5408\u6D41\u89C6\u56FE")
                  ])) : ((0, import_vue2.openBlock)(), (0, import_vue2.createBlock)(
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
        (0, import_vue2.createElementVNode)("view", { class: "control-panel" }, [
          (0, import_vue2.createElementVNode)("view", { class: "room-info" }, [
            (0, import_vue2.createElementVNode)("u-text", { class: "room-label" }, "\u623F\u95F4\u53F7:"),
            (0, import_vue2.createElementVNode)("u-input", {
              class: "room-input",
              modelValue: $data.roomId,
              onInput: _cache[1] || (_cache[1] = ($event) => $data.roomId = $event.detail.value),
              placeholder: "\u8BF7\u8F93\u5165\u623F\u95F4\u53F7",
              maxlength: "10"
            }, null, 40, ["modelValue"])
          ]),
          (0, import_vue2.createCommentVNode)(" \u52A0\u5165/\u79BB\u5F00\u623F\u95F4 "),
          (0, import_vue2.createElementVNode)("view", { class: "button-row" }, [
            (0, import_vue2.createElementVNode)(
              "view",
              {
                class: (0, import_vue2.normalizeClass)(["control-btn join-btn", { "disabled": !$data.roomId.trim() || $data.isInRoom }]),
                onClick: _cache[2] || (_cache[2] = ($event) => $options.handleJoinRoom(1))
              },
              [
                (0, import_vue2.createElementVNode)(
                  "u-text",
                  { class: "btn-text" },
                  (0, import_vue2.toDisplayString)($data.isJoining ? "\u52A0\u5165\u4E2D..." : "\u4E3B\u64AD\u52A0\u5165\u623F\u95F4"),
                  1
                  /* TEXT */
                )
              ],
              2
              /* CLASS */
            ),
            (0, import_vue2.createElementVNode)(
              "view",
              {
                class: (0, import_vue2.normalizeClass)(["control-btn join-btn", { "disabled": !$data.roomId.trim() || $data.isInRoom }]),
                onClick: _cache[3] || (_cache[3] = ($event) => $options.handleJoinRoom(2))
              },
              [
                (0, import_vue2.createElementVNode)(
                  "u-text",
                  { class: "btn-text" },
                  (0, import_vue2.toDisplayString)($data.isAudienceJoining ? "\u52A0\u5165\u4E2D..." : "\u89C2\u4F17\u52A0\u5165\u623F\u95F4"),
                  1
                  /* TEXT */
                )
              ],
              2
              /* CLASS */
            ),
            (0, import_vue2.createElementVNode)(
              "view",
              {
                class: (0, import_vue2.normalizeClass)(["control-btn leave-btn", { "disabled": !$data.isInRoom }]),
                onClick: _cache[4] || (_cache[4] = (...args) => $options.handleLeaveRoom && $options.handleLeaveRoom(...args))
              },
              [
                (0, import_vue2.createElementVNode)("u-text", { class: "btn-text" }, "\u79BB\u5F00\u623F\u95F4")
              ],
              2
              /* CLASS */
            )
          ]),
          (0, import_vue2.createCommentVNode)(" \u4E3B\u64AD\u53D1\u5E03\u8D44\u6E90 "),
          (0, import_vue2.createElementVNode)("view", { class: "button-row" }, [
            (0, import_vue2.createElementVNode)("view", {
              class: "control-btn rtc-btn",
              onClick: _cache[5] || (_cache[5] = (...args) => $options.publishStreams && $options.publishStreams(...args))
            }, [
              (0, import_vue2.createElementVNode)("u-text", { class: "btn-text" }, "\u4E3B\u64AD\u53D1\u5E03\u8D44\u6E90")
            ]),
            (0, import_vue2.createElementVNode)("view", {
              class: "control-btn rtc-btn",
              onClick: _cache[6] || (_cache[6] = (...args) => $options.unPublishStreams && $options.unPublishStreams(...args))
            }, [
              (0, import_vue2.createElementVNode)("u-text", { class: "btn-text" }, "\u4E3B\u64AD\u53D6\u6D88\u53D1\u5E03\u8D44\u6E90")
            ])
          ]),
          (0, import_vue2.createCommentVNode)(" \u4E3B\u64AD\u8BA2\u9605\u8D44\u6E90 "),
          (0, import_vue2.createElementVNode)("view", { class: "button-row" }, [
            (0, import_vue2.createElementVNode)("view", {
              class: "control-btn rtc-btn",
              onClick: _cache[7] || (_cache[7] = (...args) => $options.subscribeStreams && $options.subscribeStreams(...args))
            }, [
              (0, import_vue2.createElementVNode)("u-text", { class: "btn-text" }, "\u4E3B\u64AD\u8BA2\u9605\u8D44\u6E90")
            ]),
            (0, import_vue2.createElementVNode)("view", {
              class: "control-btn rtc-btn",
              onClick: _cache[8] || (_cache[8] = (...args) => $options.unSubscribeStreams && $options.unSubscribeStreams(...args))
            }, [
              (0, import_vue2.createElementVNode)("u-text", { class: "btn-text" }, "\u4E3B\u64AD\u53D6\u6D88\u8BA2\u9605\u8D44\u6E90")
            ])
          ]),
          (0, import_vue2.createCommentVNode)(" \u89C2\u4F17\u8BA2\u9605\u8D44\u6E90 "),
          (0, import_vue2.createElementVNode)("view", { class: "button-row" }, [
            (0, import_vue2.createElementVNode)("view", {
              class: "control-btn rtc-btn",
              onClick: _cache[9] || (_cache[9] = (...args) => $options.subscribeLiveMixStream && $options.subscribeLiveMixStream(...args))
            }, [
              (0, import_vue2.createElementVNode)("u-text", { class: "btn-text" }, "\u89C2\u4F17\u8BA2\u9605\u5408\u6D41")
            ]),
            (0, import_vue2.createElementVNode)("view", {
              class: "control-btn rtc-btn",
              onClick: _cache[10] || (_cache[10] = (...args) => $options.unSubscribeLiveMix && $options.unSubscribeLiveMix(...args))
            }, [
              (0, import_vue2.createElementVNode)("u-text", { class: "btn-text" }, "\u89C2\u4F17\u53D6\u6D88\u8BA2\u9605\u5408\u6D41")
            ])
          ]),
          (0, import_vue2.createCommentVNode)(" \u4E0A\u4E0B\u9EA6 "),
          (0, import_vue2.createElementVNode)("view", { class: "button-row" }, [
            (0, import_vue2.createElementVNode)("view", {
              class: "control-btn rtc-btn",
              onClick: _cache[11] || (_cache[11] = ($event) => $options.switchLiveRole(1))
            }, [
              (0, import_vue2.createElementVNode)("u-text", { class: "btn-text" }, "\u89C2\u4F17\u4E0A\u9EA6")
            ]),
            (0, import_vue2.createElementVNode)("view", {
              class: "control-btn rtc-btn",
              onClick: _cache[12] || (_cache[12] = ($event) => $options.switchLiveRole(2))
            }, [
              (0, import_vue2.createElementVNode)("u-text", { class: "btn-text" }, "\u4E3B\u64AD\u4E0B\u9EA6")
            ])
          ]),
          (0, import_vue2.createCommentVNode)(" \u6DF7\u97F3 "),
          (0, import_vue2.createElementVNode)("view", { class: "button-row" }, [
            (0, import_vue2.createElementVNode)("view", {
              class: "control-btn rtc-btn",
              onClick: _cache[13] || (_cache[13] = (...args) => $options.startAudioMixing && $options.startAudioMixing(...args))
            }, [
              (0, import_vue2.createElementVNode)("u-text", { class: "btn-text" }, "\u64AD\u653E\u6DF7\u97F3")
            ]),
            (0, import_vue2.createElementVNode)("view", {
              class: "control-btn rtc-btn",
              onClick: _cache[14] || (_cache[14] = (...args) => $options.stopAudioMixing && $options.stopAudioMixing(...args))
            }, [
              (0, import_vue2.createElementVNode)("u-text", { class: "btn-text" }, "\u505C\u6B62\u64AD\u653E\u6DF7\u97F3")
            ])
          ])
        ])
      ])
    ]);
  }
  var live = /* @__PURE__ */ _export_sfc(_sfc_main2, [["render", _sfc_render2], ["styles", [_style_0]], ["__file", "/Users/yongqiming/developer/android/project/rongcloud/uniapp-rtc-quickdemo/pages/rtc/live.nvue"]]);

  // <stdin>
  var webview = plus.webview.currentWebview();
  if (webview) {
    const __pageId = parseInt(webview.id);
    const __pagePath = "pages/rtc/live";
    let __pageQuery = {};
    try {
      __pageQuery = JSON.parse(webview.__query__);
    } catch (e) {
    }
    live.mpType = "page";
    const app = Vue.createPageApp(live, { $store: getApp({ allowDefault: true }).$store, __pageId, __pagePath, __pageQuery });
    app.provide("__globalStyles", Vue.useCssStyles([...__uniConfig.styles, ...live.styles || []]));
    app.mount("#root");
  }
})();
