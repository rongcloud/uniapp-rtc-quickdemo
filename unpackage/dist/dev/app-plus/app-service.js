if (typeof Promise !== "undefined" && !Promise.prototype.finally) {
  Promise.prototype.finally = function(callback) {
    const promise = this.constructor;
    return this.then(
      (value) => promise.resolve(callback()).then(() => value),
      (reason) => promise.resolve(callback()).then(() => {
        throw reason;
      })
    );
  };
}
;
if (typeof uni !== "undefined" && uni && uni.requireGlobal) {
  const global = uni.requireGlobal();
  ArrayBuffer = global.ArrayBuffer;
  Int8Array = global.Int8Array;
  Uint8Array = global.Uint8Array;
  Uint8ClampedArray = global.Uint8ClampedArray;
  Int16Array = global.Int16Array;
  Uint16Array = global.Uint16Array;
  Int32Array = global.Int32Array;
  Uint32Array = global.Uint32Array;
  Float32Array = global.Float32Array;
  Float64Array = global.Float64Array;
  BigInt64Array = global.BigInt64Array;
  BigUint64Array = global.BigUint64Array;
}
;
if (uni.restoreGlobal) {
  uni.restoreGlobal(Vue, weex, plus, setTimeout, clearTimeout, setInterval, clearInterval);
}
(function(vue) {
  "use strict";
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
  function requestAndroidPermissions() {
    return new Promise((resolve) => {
      if (typeof plus === "undefined") {
        formatAppLog("error", "at utils/permission.js:9", "当前环境不支持plus API（请使用自定义调试基座）");
        resolve(false);
        return;
      }
      const platform = plus.os.name.toLowerCase();
      formatAppLog("log", "at utils/permission.js:16", "当前平台：", platform);
      if (platform === "android") {
        requestAndroidCameraAndMicrophone().then(resolve);
      } else if (platform === "ios") {
        requestIOSCameraAndMicrophone().then(resolve);
      } else {
        formatAppLog("log", "at utils/permission.js:25", "不支持的平台，默认返回true");
        resolve(true);
      }
    });
  }
  function requestAndroidCameraAndMicrophone() {
    return new Promise((resolve) => {
      formatAppLog("log", "at utils/permission.js:36", "开始简化权限申请...");
      const permissions = [
        "android.permission.CAMERA",
        "android.permission.RECORD_AUDIO"
      ];
      const checkPermission = (perm) => {
        return plus.android.checkPermission(perm) === 0;
      };
      const initialStatus = permissions.map((perm) => ({
        name: perm,
        granted: checkPermission(perm)
      }));
      formatAppLog("log", "at utils/permission.js:54", "初始权限状态：", initialStatus);
      if (initialStatus.every((p) => p.granted)) {
        formatAppLog("log", "at utils/permission.js:58", "所有权限已授予");
        resolve(true);
        return;
      }
      const needRequest = permissions.filter((perm) => !checkPermission(perm));
      formatAppLog("log", "at utils/permission.js:65", "需要申请的权限：", needRequest);
      if (needRequest.length > 0) {
        formatAppLog("log", "at utils/permission.js:69", "直接申请权限：", needRequest);
        plus.android.requestPermissions(
          needRequest,
          (result) => {
            formatAppLog("log", "at utils/permission.js:74", "权限申请结果：", result);
            resolve(true);
          },
          (err) => {
            formatAppLog("error", "at utils/permission.js:79", "权限申请失败：", err);
            resolve(true);
          }
        );
      } else {
        resolve(true);
      }
    });
  }
  function requestIOSCameraAndMicrophone() {
    return new Promise((resolve) => {
      formatAppLog("log", "at utils/permission.js:237", "iOS平台权限申请");
      const checkCameraPermission = () => {
        return new Promise((resolve2) => {
          plus.camera.getCamera().then(() => {
            resolve2(true);
          }).catch(() => {
            resolve2(false);
          });
        });
      };
      const checkMicrophonePermission = () => {
        return new Promise((resolve2) => {
          if (plus.audio && plus.audio.Recorder) {
            plus.audio.getRecorder();
            resolve2(true);
          } else {
            resolve2(true);
          }
        });
      };
      Promise.all([checkCameraPermission(), checkMicrophonePermission()]).then(([cameraGranted, micGranted]) => {
        formatAppLog("log", "at utils/permission.js:266", "iOS权限检查结果：", { camera: cameraGranted, microphone: micGranted });
        if (cameraGranted && micGranted) {
          formatAppLog("log", "at utils/permission.js:269", "iOS所有权限已授予");
          resolve(true);
        } else {
          const deniedPermissions = [];
          if (!cameraGranted)
            deniedPermissions.push("相机");
          if (!micGranted)
            deniedPermissions.push("麦克风");
          uni.showModal({
            title: "权限申请",
            content: `需要 ${deniedPermissions.join("、")} 权限才能使用音视频功能，请在设置中开启。`,
            confirmText: "去设置",
            cancelText: "取消",
            success: (res) => {
              if (res.confirm) {
                plus.runtime.openURL("app-settings:");
              }
              resolve(false);
            }
          });
        }
      });
    });
  }
  const appConfig = {
    // 融云AppKey - 请替换为您的实际AppKey
    appKey: "p5tvi9dspl334",
    // 测试用户列表 - 可以方便地添加更多用户
    testUsers: [
      {
        id: "",
        name: "",
        token: "",
        avatar: "👤",
        description: "主要测试账户"
      },
      {
        id: "",
        name: "测试用户2",
        token: "",
        avatar: "👤",
        description: "备用测试账户"
      },
      {
        id: "",
        name: "测试用户3",
        token: "",
        avatar: "👤",
        description: "备用测试账户"
      }
    ]
  };
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
  var RCIMIWGroupReadReceiptVersion;
  (function(RCIMIWGroupReadReceiptVersion2) {
    RCIMIWGroupReadReceiptVersion2[RCIMIWGroupReadReceiptVersion2["unknown"] = 0] = "unknown";
    RCIMIWGroupReadReceiptVersion2[RCIMIWGroupReadReceiptVersion2["version1"] = 1] = "version1";
    RCIMIWGroupReadReceiptVersion2[RCIMIWGroupReadReceiptVersion2["version2"] = 2] = "version2";
    RCIMIWGroupReadReceiptVersion2[RCIMIWGroupReadReceiptVersion2["version4"] = 3] = "version4";
    RCIMIWGroupReadReceiptVersion2[RCIMIWGroupReadReceiptVersion2["version5"] = 4] = "version5";
  })(RCIMIWGroupReadReceiptVersion || (RCIMIWGroupReadReceiptVersion = {}));
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
  var RCIMIWReadReceiptStatus;
  (function(RCIMIWReadReceiptStatus2) {
    RCIMIWReadReceiptStatus2[RCIMIWReadReceiptStatus2["read"] = 0] = "read";
    RCIMIWReadReceiptStatus2[RCIMIWReadReceiptStatus2["unread"] = 1] = "unread";
  })(RCIMIWReadReceiptStatus || (RCIMIWReadReceiptStatus = {}));
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
    RCIMIWMessageType2[RCIMIWMessageType2["stream"] = 15] = "stream";
    RCIMIWMessageType2[RCIMIWMessageType2["nativeCustomMedia"] = 16] = "nativeCustomMedia";
    RCIMIWMessageType2[RCIMIWMessageType2["groupNotification"] = 17] = "groupNotification";
    RCIMIWMessageType2[RCIMIWMessageType2["combineV2"] = 18] = "combineV2";
  })(RCIMIWMessageType || (RCIMIWMessageType = {}));
  var RCIMIWMessageBlockType;
  (function(RCIMIWMessageBlockType2) {
    RCIMIWMessageBlockType2[RCIMIWMessageBlockType2["unknown"] = 0] = "unknown";
    RCIMIWMessageBlockType2[RCIMIWMessageBlockType2["global"] = 1] = "global";
    RCIMIWMessageBlockType2[RCIMIWMessageBlockType2["custom"] = 2] = "custom";
    RCIMIWMessageBlockType2[RCIMIWMessageBlockType2["thirdParty"] = 3] = "thirdParty";
  })(RCIMIWMessageBlockType || (RCIMIWMessageBlockType = {}));
  var RCIMIWMessageAuditType;
  (function(RCIMIWMessageAuditType2) {
    RCIMIWMessageAuditType2[RCIMIWMessageAuditType2["disallow"] = 0] = "disallow";
    RCIMIWMessageAuditType2[RCIMIWMessageAuditType2["allow"] = 1] = "allow";
  })(RCIMIWMessageAuditType || (RCIMIWMessageAuditType = {}));
  var RCIMIWReadReceiptOrder;
  (function(RCIMIWReadReceiptOrder2) {
    RCIMIWReadReceiptOrder2[RCIMIWReadReceiptOrder2["descending"] = 0] = "descending";
    RCIMIWReadReceiptOrder2[RCIMIWReadReceiptOrder2["ascending"] = 1] = "ascending";
  })(RCIMIWReadReceiptOrder || (RCIMIWReadReceiptOrder = {}));
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
  let logLevel = RCIMIWLogLevel.info;
  function log(level, msg) {
    if (level <= logLevel) {
      let logStr = `${getLogLevelFlag(level)}/[RC:UniLog][IM]: ${msg}`;
      switch (level) {
        case RCIMIWLogLevel.error:
          formatAppLog("error", "at uni_modules/RongCloud-IMWrapper-V2/js_sdk/utils/RCIMLog.js:8", logStr);
          break;
        case RCIMIWLogLevel.warn:
          formatAppLog("warn", "at uni_modules/RongCloud-IMWrapper-V2/js_sdk/utils/RCIMLog.js:11", logStr);
          break;
        case RCIMIWLogLevel.info:
          formatAppLog("info", "at uni_modules/RongCloud-IMWrapper-V2/js_sdk/utils/RCIMLog.js:14", logStr);
          break;
        case RCIMIWLogLevel.debug:
          formatAppLog("debug", "at uni_modules/RongCloud-IMWrapper-V2/js_sdk/utils/RCIMLog.js:17", logStr);
          break;
        default:
          formatAppLog("log", "at uni_modules/RongCloud-IMWrapper-V2/js_sdk/utils/RCIMLog.js:20", logStr);
          break;
      }
    }
  }
  function getLogLevelFlag(level) {
    switch (level) {
      case RCIMIWLogLevel.error:
        return "E";
      case RCIMIWLogLevel.warn:
        return "W";
      case RCIMIWLogLevel.debug:
        return "D";
      default:
        return "I";
    }
  }
  const isString = (value) => typeof value === "string";
  const isNumber = (value) => typeof value === "number" && !Number.isNaN(value);
  const isArray = (arr) => Object.prototype.toString.call(arr).indexOf("Array") !== -1;
  const notEmptyString = (str) => isString(str) && str.length > 0;
  const notEmptyArray = (arr) => isArray(arr) && arr.length > 0;
  const isObject = (val) => Object.prototype.toString.call(val) === "[object Object]";
  const isUndefined = (val) => val === void 0 || Object.prototype.toString.call(val) === "[object Undefined]";
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
  const RulesDesc = {
    [AssertRules.STRING]: "type is String and length > 0",
    [AssertRules.ONLY_STRING]: "type is string",
    [AssertRules.NUMBER]: "type is number",
    [AssertRules.BOOLEAN]: "type is Boolean",
    [AssertRules.OBJECT]: "type is Object",
    [AssertRules.ARRAY]: "type is Array",
    [AssertRules.NUMBER_ARRAY]: "type is Array and item is Number"
  };
  const validators = {
    [AssertRules.STRING]: notEmptyString,
    [AssertRules.ONLY_STRING]: isString,
    [AssertRules.NUMBER]: isNumber,
    [AssertRules.BOOLEAN]: (value) => typeof value === "boolean",
    [AssertRules.OBJECT]: isObject,
    [AssertRules.ARRAY]: notEmptyArray,
    [AssertRules.NUMBER_ARRAY]: isNumberArray
  };
  const validate = (key, value, validator, required = false) => {
    let validatorFunc = validators[validator] || validator;
    const isValid = required ? validatorFunc(value) : isUndefined(value) || value == null || validatorFunc(value);
    if (!isValid) {
      console == null ? void 0 : console.error(`'${key}' is invalid: ${JSON.stringify(value)}, the supported ${RulesDesc[validator]}`);
    }
    return isValid;
  };
  const RCUniIM = requireNativePlugin("RongCloud-IM-V2-RCUniIMV2");
  const paramErrorPromise = Promise.resolve(RCIMIWErrorCode.paramError);
  let instance;
  class RCIMIWEngine {
    static _invokeMethod(name, params) {
      log(RCIMIWLogLevel.info, `invokeMethod methodName: ${name}, params:${JSON.stringify(params)}`);
      return new Promise((resolve, _) => {
        RCUniIM.invokeMethod({ name, params }, (res) => {
          resolve(res);
        });
      });
    }
    _invokeMethod(name, callback, params) {
      log(RCIMIWLogLevel.info, `invokeMethod methodName: ${name}, params:${JSON.stringify(params)}`);
      return new Promise((resolve, _) => {
        if (callback) {
          RCUniIM.invokeMethod({ name, params }, (res) => {
            resolve(res);
          }, callback);
        } else {
          RCUniIM.invokeMethod({ name, params }, (res) => {
            resolve(res);
          });
        }
      });
    }
    _setListener(eventName, callback) {
      log(RCIMIWLogLevel.info, `setListener eventName: ${eventName}, callback:${callback != null}`);
      RCUniIM.removeAllEventListeners(eventName);
      if (callback) {
        let listener = (res) => {
          callback(res.data);
        };
        RCUniIM.addEventListener(eventName, listener);
      }
    }
    /**
     * 初始化 IM 对象
     * @param appKey 融云后台申请的应用 appKey
     * @param options 全局配置项
     * @returns 创建的 IM 对象
     */
    static async create(appKey, options = {}) {
      if (instance) {
        return new Promise((resolve) => resolve(instance));
      }
      let code = await RCIMIWEngine._invokeMethod("create", { appKey, options });
      if (code === 0) {
        instance = new RCIMIWEngine();
        return instance;
      }
      return new Promise((resolve) => resolve(null));
    }
    /**
     * 销毁 IM 对象
     */
    async destroy() {
      let code = await this._invokeMethod("destroy", null);
      if (code === 0) {
        instance = null;
      }
      return code;
    }
    /**
     * 注册推送 token 给融云，用于不集成融云推送 SDK 但需使用融云消息推送能力。
     * 如果是 iOS 平台时，会忽略传入的 pushType 值，只使用 pushToken 参数。
     * 该方法需要在 IM 初始化后 3 秒再调用。
     * @param pushType 推送厂商类型
     * @param pushToken 推送 token （厂商接口 或 三方推送 SDK 提供的）
     * @returns 当次接口操作的状态码。0 代表调用成功 具体结果需要实现接口回调，非 0 代表当前接口调用操作失败，不会触发接口回调，详细错误参考错误码
     */
    registerPushToken(pushType, pushToken) {
      if (!validate("pushType", pushType, AssertRules.NUMBER, true) || !validate("pushToken", pushToken, AssertRules.STRING, true)) {
        return paramErrorPromise;
      }
      const Platform = uni.getSystemInfoSync().platform;
      if (Platform == "android" && pushType == RCIMIWPushType.iOS) {
        log(RCIMIWLogLevel.error, "pushType iOS only support iOS platform");
        return paramErrorPromise;
      }
      return this._invokeMethod("registerPushToken", null, { pushType, pushToken });
    }
    /**
     * 将 SDK 返回的本地文件拷贝到 uni _doc 目录下。一般 iOS 平台下需要调用此方法，Android 平台下不需要调用。
     * @param filePath 文件本地路径
     * @returns
     */
    async copyFileToUniDocPath(filePath) {
      let result = await this._invokeMethod("copyFileToUniDocPath", null, { filePath });
      return result;
    }
    // /**
    //  * 根据消息 id 获取消息体（本地数据库索引唯一值）。
    //  * @param messageId 消息的 messageId，可在消息对象中获取
    //  */
    // getMessageById(messageId: number): Promise<{code: number, message: RCIMIWMessage}> {
    //     return this._invokeMethod('getMessageById', {messageId});
    // }
    // /**
    //  * 通过全局唯一 id 获取消息实体。
    //  * @param messageUId 消息的 messageUid，可在消息对象中获取，且只有发送成功的消息才会有值。
    //  */
    // getMessageByUId(messageUId: string): Promise<{code: number, message: RCIMIWMessage}> {
    //     return this._invokeMethod('getMessageByUId', {messageUId});
    // }
    /**
     * 注册原生自定义普通消息
     * @param messageIdentifier 消息的唯一标识
     * @param persistentFlag    消息的存储策略
     * @return 当次接口操作的状态码。0 代表调用成功，非 0 代表当前接口调用操作失败，详细错误参考错误码
     */
    registerNativeCustomMessage(messageIdentifier, persistentFlag) {
      if (!validate("messageIdentifier", messageIdentifier, AssertRules.STRING, true) || !validate("persistentFlag", persistentFlag, AssertRules.NUMBER, true)) {
        return paramErrorPromise;
      }
      let resultCallback;
      return this._invokeMethod("registerNativeCustomMessage", resultCallback, { messageIdentifier, persistentFlag });
    }
    /**
     * 注册原生自定义媒体消息
     * @param messageIdentifier 消息的唯一标识
     * @param persistentFlag    消息的存储策略
     * @return 当次接口操作的状态码。0 代表调用成功，非 0 代表当前接口调用操作失败，详细错误参考错误码
     */
    registerNativeCustomMediaMessage(messageIdentifier, persistentFlag) {
      if (!validate("messageIdentifier", messageIdentifier, AssertRules.STRING, true) || !validate("persistentFlag", persistentFlag, AssertRules.NUMBER, true)) {
        return paramErrorPromise;
      }
      let resultCallback;
      return this._invokeMethod("registerNativeCustomMediaMessage", resultCallback, {
        messageIdentifier,
        persistentFlag
      });
    }
    /**
     * 连接融云服务器，在整个应用程序全局，只需要调用一次。调用此接口返回非业务错误码时，SDK
     * 会启动重连机制进行重连；如果仍没有连接成功，会在设备网络状态变化时再次进行重连。
     * @param token    调用 server api 获取到的 token
     * @param timeout  连接超时时间，单位：秒。
     * timeout ≤ 0，则 IM 将一直连接，直到连接成功或者无法连接（如 token 非法）
     * timeout > 0，则 IM 将最多连接 timeout 秒
     * 如果在 timeout 秒内连接成功，后面再发生了网络变化或前后台切换，SDK 会自动重连； 如果在 timeout
     * 秒无法连接成功则不再进行重连，通过 listener 告知连接超时，您需要再自行调用 connect 接口
     * @param callback 链接事件回调。SDK 从 5.3.1 版本开始支持 callback 方式回调。从 5.4.0
     * 版本废弃该接口的其他回调方式，预计将在 6.x 版本删除此其他回调方式。如果传入了 callback 参数，仅触发
     * callback 回调。
     * @return 当次接口操作的状态码。0 代表调用成功 具体结果需要实现接口回调，非 0 代表当前接口调用操作失败，不会触发接口回调，详细错误参考错误码
     * @listener 接口回调可以监听 [onConnected]
     */
    connect(token, timeout, callback) {
      if (!validate("token", token, AssertRules.STRING, true) || !validate("timeout", timeout, AssertRules.NUMBER, true)) {
        return paramErrorPromise;
      }
      let resultCallback;
      if (callback) {
        resultCallback = (res) => {
          var _a, _b;
          if (res.callbackName === "onDatabaseOpened") {
            let { code } = res;
            (_a = callback.onDatabaseOpened) == null ? void 0 : _a.call(callback, { code });
          }
          if (res.callbackName === "onConnected") {
            let { code, userId } = res;
            (_b = callback.onConnected) == null ? void 0 : _b.call(callback, { code, userId });
          }
        };
      }
      return this._invokeMethod("connect", resultCallback, { token, timeout });
    }
    /**
     * 断开链接
     * 注：因为 SDK 在前后台切换或者网络出现异常都会自动重连，保证连接可靠性。 所以除非您的 App 逻辑需要登出，否则一般不需要调用此方法进行手动断开
     * @param receivePush 退出后是否接收 push，true:断开后接收远程推送，false:断开后不再接收远程推送
     * @return 当次接口操作的状态码。0 代表调用成功 具体结果需要实现接口回调，非 0 代表当前接口调用操作失败，不会触发接口回调，详细错误参考错误码
     */
    disconnect(receivePush) {
      if (!validate("receivePush", receivePush, AssertRules.BOOLEAN, true)) {
        return paramErrorPromise;
      }
      let resultCallback;
      return this._invokeMethod("disconnect", resultCallback, { receivePush });
    }
    /**
     * 构建文本消息
     * @param type      会话类型，
     * @param targetId  会话 ID
     * @param channelId 频道 ID，仅支持超级群使用，其他会话类型传 null 即可。
     * @param text      文本内容
     * @return 文本消息实体
     */
    createTextMessage(type, targetId, channelId, text) {
      if (!validate("type", type, AssertRules.NUMBER, true) || !validate("targetId", targetId, AssertRules.STRING, true) || !validate("channelId", channelId, AssertRules.ONLY_STRING, false) || !validate("text", text, AssertRules.STRING, true)) {
        return paramErrorPromise;
      }
      let resultCallback;
      return this._invokeMethod("createTextMessage", resultCallback, { type, targetId, channelId, text });
    }
    /**
     * 构建图片消息
     * @param type      会话类型
     * @param targetId  会话 ID
     * @param channelId 频道 ID，仅支持超级群使用，其他会话类型传 null 即可。
     * @param path      图片消息的本地路径，必须为有效路径
     * @return 图片消息实体
     */
    createImageMessage(type, targetId, channelId, path) {
      if (!validate("type", type, AssertRules.NUMBER, true) || !validate("targetId", targetId, AssertRules.STRING, true) || !validate("channelId", channelId, AssertRules.ONLY_STRING, false) || !validate("path", path, AssertRules.STRING, true)) {
        return paramErrorPromise;
      }
      let resultCallback;
      return this._invokeMethod("createImageMessage", resultCallback, { type, targetId, channelId, path });
    }
    /**
     * 构建文件消息
     * @param type      会话类型
     * @param targetId  会话 ID
     * @param channelId 频道 ID，仅支持超级群使用，其他会话类型传 null 即可。
     * @param path      文件消息的本地路径，必须为有效路径
     * @return 文件消息实体
     */
    createFileMessage(type, targetId, channelId, path) {
      if (!validate("type", type, AssertRules.NUMBER, true) || !validate("targetId", targetId, AssertRules.STRING, true) || !validate("channelId", channelId, AssertRules.ONLY_STRING, false) || !validate("path", path, AssertRules.STRING, true)) {
        return paramErrorPromise;
      }
      let resultCallback;
      return this._invokeMethod("createFileMessage", resultCallback, { type, targetId, channelId, path });
    }
    /**
     * 构建小视频消息
     * @param type      会话类型
     * @param targetId  会话 ID
     * @param channelId 频道 ID，仅支持超级群使用，其他会话类型传 null 即可。
     * @param path      小视频消息的本地路径，必须为有效路径
     * @param duration  小视频消息的视频时长
     * @return 视频消息实体
     */
    createSightMessage(type, targetId, channelId, path, duration) {
      if (!validate("type", type, AssertRules.NUMBER, true) || !validate("targetId", targetId, AssertRules.STRING, true) || !validate("channelId", channelId, AssertRules.ONLY_STRING, false) || !validate("path", path, AssertRules.STRING, true) || !validate("duration", duration, AssertRules.NUMBER, true)) {
        return paramErrorPromise;
      }
      let resultCallback;
      return this._invokeMethod("createSightMessage", resultCallback, { type, targetId, channelId, path, duration });
    }
    /**
     * 构建语音消息 (高清语音)
     * @param type      会话类型
     * @param targetId  会话 ID
     * @param channelId 频道 ID，仅支持超级群使用，其他会话类型传 null 即可。
     * @param path      语音消息的本地路径，必须为有效路径
     * @param duration  语音消息的消息时长
     * @return 语音消息的实体
     */
    createVoiceMessage(type, targetId, channelId, path, duration) {
      if (!validate("type", type, AssertRules.NUMBER, true) || !validate("targetId", targetId, AssertRules.STRING, true) || !validate("channelId", channelId, AssertRules.ONLY_STRING, false) || !validate("path", path, AssertRules.STRING, true) || !validate("duration", duration, AssertRules.NUMBER, true)) {
        return paramErrorPromise;
      }
      let resultCallback;
      return this._invokeMethod("createVoiceMessage", resultCallback, { type, targetId, channelId, path, duration });
    }
    /**
     * 构建引用消息
     * @param type             会话类型
     * @param targetId         会话 ID
     * @param channelId        频道 ID，仅支持超级群使用，其他会话类型传 null 即可。
     * @param referenceMessage 引用的消息
     * @param text             引用的文本内容
     * @return 引用消息实体
     */
    createReferenceMessage(type, targetId, channelId, referenceMessage, text) {
      if (!validate("type", type, AssertRules.NUMBER, true) || !validate("targetId", targetId, AssertRules.STRING, true) || !validate("channelId", channelId, AssertRules.ONLY_STRING, false) || !validate("referenceMessage", referenceMessage, AssertRules.OBJECT, true) || !validate("text", text, AssertRules.STRING, true)) {
        return paramErrorPromise;
      }
      let resultCallback;
      return this._invokeMethod("createReferenceMessage", resultCallback, {
        type,
        targetId,
        channelId,
        referenceMessage,
        text
      });
    }
    /**
     * 构建 GIF 消息
     * @param type      会话类型
     * @param targetId  会话 ID
     * @param channelId 频道 ID，仅支持超级群使用，其他会话类型传 null 即可。
     * @param path      GIF 消息的本地路径
     * @return GIF 消息实体
     */
    createGIFMessage(type, targetId, channelId, path) {
      if (!validate("type", type, AssertRules.NUMBER, true) || !validate("targetId", targetId, AssertRules.STRING, true) || !validate("channelId", channelId, AssertRules.ONLY_STRING, false) || !validate("path", path, AssertRules.STRING, true)) {
        return paramErrorPromise;
      }
      let resultCallback;
      return this._invokeMethod("createGIFMessage", resultCallback, { type, targetId, channelId, path });
    }
    /**
     * 构建自定义消息
     * @param type              会话类型
     * @param targetId          会话 ID
     * @param channelId         频道 ID，仅支持超级群使用，其他会话类型传 null 即可。
     * @param policy            消息的存储策略
     * @param messageIdentifier 消息的标识符，需唯一
     * @param fields            消息的内容键值对
     * @return 自定义消息实体
     */
    createCustomMessage(type, targetId, channelId, policy, messageIdentifier, fields) {
      if (!validate("type", type, AssertRules.NUMBER, true) || !validate("targetId", targetId, AssertRules.STRING, true) || !validate("channelId", channelId, AssertRules.ONLY_STRING, false) || !validate("policy", policy, AssertRules.NUMBER, true) || !validate("messageIdentifier", messageIdentifier, AssertRules.STRING, true)) {
        return paramErrorPromise;
      }
      let resultCallback;
      return this._invokeMethod("createCustomMessage", resultCallback, {
        type,
        targetId,
        channelId,
        policy,
        messageIdentifier,
        fields
      });
    }
    /**
     * 构建位置消息
     * @param type          会话类型
     * @param targetId      会话 ID
     * @param channelId     频道 ID，仅支持超级群使用，其他会话类型传 null 即可。
     * @param longitude     经度
     * @param latitude      纬度
     * @param poiName       POI 信息
     * @param thumbnailPath 缩略图本地路径，必须为有效路径
     * @return 位置消息实体
     */
    createLocationMessage(type, targetId, channelId, longitude, latitude, poiName, thumbnailPath) {
      if (!validate("type", type, AssertRules.NUMBER, true) || !validate("targetId", targetId, AssertRules.STRING, true) || !validate("channelId", channelId, AssertRules.ONLY_STRING, false) || !validate("longitude", longitude, AssertRules.NUMBER, true) || !validate("latitude", latitude, AssertRules.NUMBER, true) || !validate("poiName", poiName, AssertRules.STRING, true) || !validate("thumbnailPath", thumbnailPath, AssertRules.STRING, true)) {
        return paramErrorPromise;
      }
      let resultCallback;
      return this._invokeMethod("createLocationMessage", resultCallback, {
        type,
        targetId,
        channelId,
        longitude,
        latitude,
        poiName,
        thumbnailPath
      });
    }
    /**
     * 构建原生自定义普通消息
     * @param type              会话类型
     * @param targetId          会话 ID
     * @param channelId         频道 ID，仅支持超级群使用，其他会话类型传 null 即可。
     * @param messageIdentifier 消息的标识符，需唯一
     * @param fields            消息的内容键值对
     * @return 原生自定义普通消息
     */
    createNativeCustomMessage(type, targetId, channelId, messageIdentifier, fields) {
      if (!validate("type", type, AssertRules.NUMBER, true) || !validate("targetId", targetId, AssertRules.STRING, true) || !validate("channelId", channelId, AssertRules.ONLY_STRING, false) || !validate("messageIdentifier", messageIdentifier, AssertRules.STRING, true)) {
        return paramErrorPromise;
      }
      let resultCallback;
      return this._invokeMethod("createNativeCustomMessage", resultCallback, {
        type,
        targetId,
        channelId,
        messageIdentifier,
        fields
      });
    }
    /**
     * 构建原生自定义媒体消息
     * @param type              会话类型
     * @param targetId          会话 ID
     * @param channelId         频道 ID，仅支持超级群使用，其他会话类型传 null 即可。
     * @param messageIdentifier 消息的标识符，需唯一
     * @param path              媒体文件的本地路径，必须为有效路径
     * @param fields            消息的内容键值对
     * @return 原生自定义媒体消息
     */
    createNativeCustomMediaMessage(type, targetId, channelId, messageIdentifier, path, fields) {
      if (!validate("type", type, AssertRules.NUMBER, true) || !validate("targetId", targetId, AssertRules.STRING, true) || !validate("channelId", channelId, AssertRules.ONLY_STRING, false) || !validate("messageIdentifier", messageIdentifier, AssertRules.STRING, true) || !validate("path", path, AssertRules.STRING, true)) {
        return paramErrorPromise;
      }
      let resultCallback;
      return this._invokeMethod("createNativeCustomMediaMessage", resultCallback, {
        type,
        targetId,
        channelId,
        messageIdentifier,
        path,
        fields
      });
    }
    /**
     * 发送普通消息
     * @param message  发送的消息实体
     * @param callback 发送消息的事件回调。SDK 从 5.3.1 版本开始支持 callback 方式回调。从 5.4.0
     * 版本废弃该接口的其他回调方式，预计将在 6.x 版本删除此其他回调方式。如果传入了 callback 参数，仅触发
     * callback 回调。
     * @return 当次接口操作的状态码。0 代表调用成功 具体结果需要实现接口回调，非 0 代表当前接口调用操作失败，不会触发接口回调，详细错误参考错误码
     * @listener 接口回调可以监听 [onMessageAttached],[onMessageSent]
     */
    sendMessage(message, callback) {
      if (!validate("message", message, AssertRules.OBJECT, true)) {
        return paramErrorPromise;
      }
      let resultCallback;
      if (callback) {
        resultCallback = (res) => {
          var _a, _b;
          if (res.callbackName === "onMessageSaved") {
            let { message: message2 } = res;
            (_a = callback.onMessageSaved) == null ? void 0 : _a.call(callback, { message: message2 });
          }
          if (res.callbackName === "onMessageSent") {
            let { code, message: message2 } = res;
            (_b = callback.onMessageSent) == null ? void 0 : _b.call(callback, { code, message: message2 });
          }
        };
      }
      return this._invokeMethod("sendMessage", resultCallback, { message });
    }
    /**
     * 发送媒体消息
     * @param message  发送的媒体消息实体
     * @param listener 发送媒体消息的事件监听
     * @return 当次接口操作的状态码。0 代表调用成功 具体结果需要实现接口回调，非 0 代表当前接口调用操作失败，不会触发接口回调，详细错误参考错误码
     * @listener 接口回调可以监听
     * [onMediaMessageSending],[onMediaMessageAttached],[onMediaMessageSent]
     */
    sendMediaMessage(message, listener) {
      if (!validate("message", message, AssertRules.OBJECT, true)) {
        return paramErrorPromise;
      }
      let resultCallback;
      if (listener) {
        resultCallback = (res) => {
          var _a, _b, _c, _d;
          if (res.callbackName === "onMediaMessageSaved") {
            let { message: message2 } = res;
            (_a = listener.onMediaMessageSaved) == null ? void 0 : _a.call(listener, { message: message2 });
          }
          if (res.callbackName === "onMediaMessageSending") {
            let { message: message2, progress } = res;
            (_b = listener.onMediaMessageSending) == null ? void 0 : _b.call(listener, { message: message2, progress });
          }
          if (res.callbackName === "onSendingMediaMessageCanceled") {
            let { message: message2 } = res;
            (_c = listener.onSendingMediaMessageCanceled) == null ? void 0 : _c.call(listener, { message: message2 });
          }
          if (res.callbackName === "onMediaMessageSent") {
            let { code, message: message2 } = res;
            (_d = listener.onMediaMessageSent) == null ? void 0 : _d.call(listener, { code, message: message2 });
          }
        };
      }
      return this._invokeMethod("sendMediaMessage", resultCallback, { message });
    }
    /**
     * 取消发送媒体消息
     * @param message  需要取消发送的媒体消息实体
     * @param callback 取消发送媒体消息的事件回调。SDK 从 5.3.1 版本开始支持 callback 方式回调。从 5.4.0
     * 版本废弃该接口的其他回调方式，预计将在 6.x 版本删除此其他回调方式。如果传入了 callback 参数，仅触发
     * callback 回调。
     * @return 当次接口操作的状态码。0 代表调用成功 具体结果需要实现接口回调，非 0 代表当前接口调用操作失败，不会触发接口回调，详细错误参考错误码
     * @listener 接口回调可以监听 [onSendingMediaMessageCanceled]
     */
    cancelSendingMediaMessage(message, callback) {
      if (!validate("message", message, AssertRules.OBJECT, true)) {
        return paramErrorPromise;
      }
      let resultCallback;
      if (callback) {
        resultCallback = (res) => {
          var _a;
          if (res.callbackName === "onCancelSendingMediaMessageCalled") {
            let { code, message: message2 } = res;
            (_a = callback.onCancelSendingMediaMessageCalled) == null ? void 0 : _a.call(callback, { code, message: message2 });
          }
        };
      }
      return this._invokeMethod("cancelSendingMediaMessage", resultCallback, { message });
    }
    /**
     * 下载媒体消息
     * @param message  需要下载的媒体消息实体
     * @param listener 下载媒体消息的事件监听
     * @return 当次接口操作的状态码。0 代表调用成功 具体结果需要实现接口回调，非 0 代表当前接口调用操作失败，不会触发接口回调，详细错误参考错误码
     * @listener [onMediaMessageDownloaded], [onMediaMessageDownloading]
     */
    downloadMediaMessage(message, listener) {
      if (!validate("message", message, AssertRules.OBJECT, true)) {
        return paramErrorPromise;
      }
      let resultCallback;
      if (listener) {
        resultCallback = (res) => {
          var _a, _b, _c;
          if (res.callbackName === "onMediaMessageDownloading") {
            let { message: message2, progress } = res;
            (_a = listener.onMediaMessageDownloading) == null ? void 0 : _a.call(listener, { message: message2, progress });
          }
          if (res.callbackName === "onDownloadingMediaMessageCanceled") {
            let { message: message2 } = res;
            (_b = listener.onDownloadingMediaMessageCanceled) == null ? void 0 : _b.call(listener, { message: message2 });
          }
          if (res.callbackName === "onMediaMessageDownloaded") {
            let { code, message: message2 } = res;
            (_c = listener.onMediaMessageDownloaded) == null ? void 0 : _c.call(listener, { code, message: message2 });
          }
        };
      }
      return this._invokeMethod("downloadMediaMessage", resultCallback, { message });
    }
    /**
     * 取消下载媒体消息
     * @param message  需要取消下载的媒体消息实体
     * @param callback 取消下载媒体消息的事件回调。SDK 从 5.3.1 版本开始支持 callback 方式回调。从 5.4.0
     * 版本废弃该接口的其他回调方式，预计将在 6.x 版本删除此其他回调方式。如果传入了 callback 参数，仅触发
     * callback 回调。
     * @return 当次接口操作的状态码。0 代表调用成功 具体结果需要实现接口回调，非 0 代表当前接口调用操作失败，不会触发接口回调，详细错误参考错误码
     * @listener [onDownloadingMediaMessageCanceled]
     */
    cancelDownloadingMediaMessage(message, callback) {
      if (!validate("message", message, AssertRules.OBJECT, true)) {
        return paramErrorPromise;
      }
      let resultCallback;
      if (callback) {
        resultCallback = (res) => {
          var _a;
          if (res.callbackName === "onCancelDownloadingMediaMessageCalled") {
            let { code, message: message2 } = res;
            (_a = callback.onCancelDownloadingMediaMessageCalled) == null ? void 0 : _a.call(callback, { code, message: message2 });
          }
        };
      }
      return this._invokeMethod("cancelDownloadingMediaMessage", resultCallback, { message });
    }
    /**
     * 加载某个会话
     * @param type      会话类型
     * @param targetId  会话 ID
     * @param channelId 频道 ID，仅支持超级群使用，其他会话类型传 null 即可
     * @return 当次接口操作的状态码。0 代表调用成功 具体结果需要实现接口回调，非 0 代表当前接口调用操作失败，不会触发接口回调，详细错误参考错误码
     * @listener [onConversationLoaded]
     * @deprecated 用
     * {@link #getConversation(RCIMIWConversationType, String, String, IRCIMIWGetConversationCallback)}
     * 代替， 预计将在 6.x 版本删除此接口。
     */
    loadConversation(type, targetId, channelId) {
      if (!validate("type", type, AssertRules.NUMBER, true) || !validate("targetId", targetId, AssertRules.STRING, true) || !validate("channelId", channelId, AssertRules.ONLY_STRING, false)) {
        return paramErrorPromise;
      }
      let resultCallback;
      return this._invokeMethod("loadConversation", resultCallback, { type, targetId, channelId });
    }
    /**
     * 获取某个会话
     * @param type      会话类型
     * @param targetId  会话 ID
     * @param channelId 频道 ID，仅支持超级群使用，其他会话类型传 null 即可
     * @param callback  获取会话事件回调。
     * @return 当次接口操作的状态码。0 代表调用成功 具体结果需要实现接口回调，非 0 代表当前接口调用操作失败，不会触发接口回调，详细错误参考错误码
     */
    getConversation(type, targetId, channelId, callback) {
      if (!validate("type", type, AssertRules.NUMBER, true) || !validate("targetId", targetId, AssertRules.STRING, true) || !validate("channelId", channelId, AssertRules.ONLY_STRING, false)) {
        return paramErrorPromise;
      }
      let resultCallback;
      if (callback) {
        resultCallback = (res) => {
          var _a, _b;
          if (res.callbackName === "onSuccess") {
            let { t } = res;
            (_a = callback.onSuccess) == null ? void 0 : _a.call(callback, { t });
          }
          if (res.callbackName === "onError") {
            let { code } = res;
            (_b = callback.onError) == null ? void 0 : _b.call(callback, { code });
          }
        };
      }
      return this._invokeMethod("getConversation", resultCallback, { type, targetId, channelId });
    }
    /**
     * 加载某些会话
     * @param conversationTypes 会话类型
     * @param channelId         频道 ID，仅支持超级群使用，其他会话类型传 null 即可
     * @param startTime         时间戳（毫秒），获取小于此时间戳的会话，传 0 为查询最新数据
     * @param count             查询的数量， 0 < count ≤ 50
     * @return 当次接口操作的状态码。0 代表调用成功 具体结果需要实现接口回调，非 0 代表当前接口调用操作失败，不会触发接口回调，详细错误参考错误码
     * @listener [onConversationsLoaded]
     * @deprecated 用
     * {@link #getConversations(List, String, long, int, IRCIMIWGetConversationsCallback)}
     * 代替， 预计将在 6.x 版本删除此接口。
     */
    loadConversations(conversationTypes, channelId, startTime, count) {
      if (!validate("conversationTypes", conversationTypes, AssertRules.NUMBER_ARRAY, true) || !validate("channelId", channelId, AssertRules.ONLY_STRING, false) || !validate("startTime", startTime, AssertRules.NUMBER, true) || !validate("count", count, AssertRules.NUMBER, true)) {
        return paramErrorPromise;
      }
      let resultCallback;
      return this._invokeMethod("loadConversations", resultCallback, {
        conversationTypes,
        channelId,
        startTime,
        count
      });
    }
    /**
     * 获取某些会话
     * @param conversationTypes 会话类型
     * @param channelId         频道 ID，仅支持超级群使用，其他会话类型传 null 即可
     * @param startTime         时间戳（毫秒），获取小于此时间戳的会话，传 0 为查询最新数据
     * @param count             查询的数量， 0 < count ≤ 50
     * @param callback          获取会话列表事件回调。
     * @return 当次接口操作的状态码。0 代表调用成功 具体结果需要实现接口回调，非 0 代表当前接口调用操作失败，不会触发接口回调，详细错误参考错误码
     */
    getConversations(conversationTypes, channelId, startTime, count, callback) {
      if (!validate("conversationTypes", conversationTypes, AssertRules.NUMBER_ARRAY, true) || !validate("channelId", channelId, AssertRules.ONLY_STRING, false) || !validate("startTime", startTime, AssertRules.NUMBER, true) || !validate("count", count, AssertRules.NUMBER, true)) {
        return paramErrorPromise;
      }
      let resultCallback;
      if (callback) {
        resultCallback = (res) => {
          var _a, _b;
          if (res.callbackName === "onSuccess") {
            let { t } = res;
            (_a = callback.onSuccess) == null ? void 0 : _a.call(callback, { t });
          }
          if (res.callbackName === "onError") {
            let { code } = res;
            (_b = callback.onError) == null ? void 0 : _b.call(callback, { code });
          }
        };
      }
      return this._invokeMethod("getConversations", resultCallback, {
        conversationTypes,
        channelId,
        startTime,
        count
      });
    }
    /**
     * 获取指定类型的含有未读消息的会话列表
     * @param conversationTypes 支持单聊、群聊、系统会话
     * @param callback          获取会话列表事件回调。
     * @return 当次接口操作的状态码。0 代表调用成功 具体结果需要实现接口回调，非 0 代表当前接口调用操作失败，不会触发接口回调，详细错误参考错误码
     */
    getUnreadConversations(conversationTypes, callback) {
      if (!validate("conversationTypes", conversationTypes, AssertRules.NUMBER_ARRAY, true)) {
        return paramErrorPromise;
      }
      let resultCallback;
      if (callback) {
        resultCallback = (res) => {
          var _a, _b;
          if (res.callbackName === "onSuccess") {
            let { t } = res;
            (_a = callback.onSuccess) == null ? void 0 : _a.call(callback, { t });
          }
          if (res.callbackName === "onError") {
            let { code } = res;
            (_b = callback.onError) == null ? void 0 : _b.call(callback, { code });
          }
        };
      }
      return this._invokeMethod("getUnreadConversations", resultCallback, { conversationTypes });
    }
    /**
     * 移除某个会话
     * @param type      会话类型
     * @param targetId  会话 ID
     * @param channelId 频道 ID，仅支持超级群使用，其他会话类型传 null 即可
     * @param callback  移除会话事件回调。SDK 从 5.3.1 版本开始支持 callback 方式回调。从 5.4.0
     * 版本废弃该接口的其他回调方式，预计将在 6.x 版本删除此其他回调方式。如果传入了 callback 参数，仅触发
     * callback 回调。
     * @return 当次接口操作的状态码。0 代表调用成功 具体结果需要实现接口回调，非 0 代表当前接口调用操作失败，不会触发接口回调，详细错误参考错误码
     * @listener [onConversationRemoved]
     */
    removeConversation(type, targetId, channelId, callback) {
      if (!validate("type", type, AssertRules.NUMBER, true) || !validate("targetId", targetId, AssertRules.STRING, true) || !validate("channelId", channelId, AssertRules.ONLY_STRING, false)) {
        return paramErrorPromise;
      }
      let resultCallback;
      if (callback) {
        resultCallback = (res) => {
          var _a;
          if (res.callbackName === "onConversationRemoved") {
            let { code } = res;
            (_a = callback.onConversationRemoved) == null ? void 0 : _a.call(callback, { code });
          }
        };
      }
      return this._invokeMethod("removeConversation", resultCallback, { type, targetId, channelId });
    }
    /**
     * 根据会话类型移除会话
     * @param conversationTypes 会话类型集合
     * @param channelId         频道 ID，仅支持超级群使用，其他会话类型传 null 即可。
     * @param callback          移除会话列表事件回调。SDK 从 5.3.1 版本开始支持 callback 方式回调。从 5.4.0
     * 版本废弃该接口的其他回调方式，预计将在 6.x 版本删除此其他回调方式。如果传入了 callback
     * 参数，仅触发 callback 回调。
     * @return 当次接口操作的状态码。0 代表调用成功 具体结果需要实现接口回调，非 0 代表当前接口调用操作失败，不会触发接口回调，详细错误参考错误码
     * @listener [onConversationsRemoved]
     */
    removeConversations(conversationTypes, channelId, callback) {
      if (!validate("conversationTypes", conversationTypes, AssertRules.NUMBER_ARRAY, true) || !validate("channelId", channelId, AssertRules.ONLY_STRING, false)) {
        return paramErrorPromise;
      }
      let resultCallback;
      if (callback) {
        resultCallback = (res) => {
          var _a;
          if (res.callbackName === "onConversationsRemoved") {
            let { code } = res;
            (_a = callback.onConversationsRemoved) == null ? void 0 : _a.call(callback, { code });
          }
        };
      }
      return this._invokeMethod("removeConversations", resultCallback, { conversationTypes, channelId });
    }
    /**
     * 加载某个会话的未读数
     * 注：不支持聊天室！
     * @param type      会话类型
     * @param targetId  会话 ID
     * @param channelId 频道 ID，仅支持超级群使用，其他会话类型传 null 即可。
     * @return 当次接口操作的状态码。0 代表调用成功 具体结果需要实现接口回调，非 0 代表当前接口调用操作失败，不会触发接口回调，详细错误参考错误码
     * @listener [onUnreadCountLoaded]
     * @deprecated 用
     * {@link #getUnreadCount(RCIMIWConversationType, String, String, IRCIMIWGetUnreadCountCallback)}
     * 代替， 预计将在 6.x 版本删除此接口。
     */
    loadUnreadCount(type, targetId, channelId) {
      if (!validate("type", type, AssertRules.NUMBER, true) || !validate("targetId", targetId, AssertRules.STRING, true) || !validate("channelId", channelId, AssertRules.ONLY_STRING, false)) {
        return paramErrorPromise;
      }
      let resultCallback;
      return this._invokeMethod("loadUnreadCount", resultCallback, { type, targetId, channelId });
    }
    /**
     * 获取某个会话的未读数
     * 注：不支持聊天室！
     * @param type      会话类型
     * @param targetId  会话 ID
     * @param channelId 频道 ID，仅支持超级群使用，其他会话类型传 null 即可。
     * @param callback  获取会话未读数事件回调。
     * @return 当次接口操作的状态码。0 代表调用成功 具体结果需要实现接口回调，非 0 代表当前接口调用操作失败，不会触发接口回调，详细错误参考错误码
     */
    getUnreadCount(type, targetId, channelId, callback) {
      if (!validate("type", type, AssertRules.NUMBER, true) || !validate("targetId", targetId, AssertRules.STRING, true) || !validate("channelId", channelId, AssertRules.ONLY_STRING, false)) {
        return paramErrorPromise;
      }
      let resultCallback;
      if (callback) {
        resultCallback = (res) => {
          var _a, _b;
          if (res.callbackName === "onSuccess") {
            let { t } = res;
            (_a = callback.onSuccess) == null ? void 0 : _a.call(callback, { t });
          }
          if (res.callbackName === "onError") {
            let { code } = res;
            (_b = callback.onError) == null ? void 0 : _b.call(callback, { code });
          }
        };
      }
      return this._invokeMethod("getUnreadCount", resultCallback, { type, targetId, channelId });
    }
    /**
     * 加载所有未读数
     * @param channelId 频道 ID，仅支持超级群使用，其他会话类型传 null 即可。
     * @return 当次接口操作的状态码。0 代表调用成功 具体结果需要实现接口回调，非 0 代表当前接口调用操作失败，不会触发接口回调，详细错误参考错误码
     * @listener [onTotalUnreadCountLoaded]
     * @deprecated 用
     * {@link #getTotalUnreadCount(String, IRCIMIWGetTotalUnreadCountCallback)}
     * 代替， 预计将在 6.x 版本删除此接口。
     */
    loadTotalUnreadCount(channelId) {
      if (!validate("channelId", channelId, AssertRules.ONLY_STRING, false)) {
        return paramErrorPromise;
      }
      let resultCallback;
      return this._invokeMethod("loadTotalUnreadCount", resultCallback, { channelId });
    }
    /**
     * 获取所有未读数
     * @param channelId 频道 ID，仅支持超级群使用，其他会话类型传 null 即可。
     * @param callback  获取所有未读数事件回调。
     * @return 当次接口操作的状态码。0 代表调用成功 具体结果需要实现接口回调，非 0 代表当前接口调用操作失败，不会触发接口回调，详细错误参考错误码
     */
    getTotalUnreadCount(channelId, callback) {
      if (!validate("channelId", channelId, AssertRules.ONLY_STRING, false)) {
        return paramErrorPromise;
      }
      let resultCallback;
      if (callback) {
        resultCallback = (res) => {
          var _a, _b;
          if (res.callbackName === "onSuccess") {
            let { t } = res;
            (_a = callback.onSuccess) == null ? void 0 : _a.call(callback, { t });
          }
          if (res.callbackName === "onError") {
            let { code } = res;
            (_b = callback.onError) == null ? void 0 : _b.call(callback, { code });
          }
        };
      }
      return this._invokeMethod("getTotalUnreadCount", resultCallback, { channelId });
    }
    /**
     * 加载会话中未读的 @ 消息数量。
     * 注：不支持聊天室！
     * @param type      会话类型
     * @param targetId  会话 ID
     * @param channelId 频道 ID，仅支持超级群使用，其他会话类型传 null 即可。
     * @return 当次接口操作的状态码。0 代表调用成功 具体结果需要实现接口回调，非 0 代表当前接口调用操作失败，不会触发接口回调，详细错误参考错误码
     * @listener [onUnreadMentionedCountLoaded]
     * @deprecated 用
     * {@link #getUnreadMentionedCount(RCIMIWConversationType, String, String, IRCIMIWGetUnreadMentionedCountCallback)}
     * 代替， 预计将在 6.x 版本删除此接口。
     */
    loadUnreadMentionedCount(type, targetId, channelId) {
      if (!validate("type", type, AssertRules.NUMBER, true) || !validate("targetId", targetId, AssertRules.STRING, true) || !validate("channelId", channelId, AssertRules.ONLY_STRING, false)) {
        return paramErrorPromise;
      }
      let resultCallback;
      return this._invokeMethod("loadUnreadMentionedCount", resultCallback, { type, targetId, channelId });
    }
    /**
     * 获取会话中未读的 @ 消息数量。
     * 注：不支持聊天室！
     * @param type      会话类型
     * @param targetId  会话 ID
     * @param channelId 频道 ID，仅支持超级群使用，其他会话类型传 null 即可。
     * @param callback  获取会话中未读的 @ 消息数量事件回调。
     * @return 当次接口操作的状态码。0 代表调用成功 具体结果需要实现接口回调，非 0 代表当前接口调用操作失败，不会触发接口回调，详细错误参考错误码
     */
    getUnreadMentionedCount(type, targetId, channelId, callback) {
      if (!validate("type", type, AssertRules.NUMBER, true) || !validate("targetId", targetId, AssertRules.STRING, true) || !validate("channelId", channelId, AssertRules.ONLY_STRING, false)) {
        return paramErrorPromise;
      }
      let resultCallback;
      if (callback) {
        resultCallback = (res) => {
          var _a, _b;
          if (res.callbackName === "onSuccess") {
            let { t } = res;
            (_a = callback.onSuccess) == null ? void 0 : _a.call(callback, { t });
          }
          if (res.callbackName === "onError") {
            let { code } = res;
            (_b = callback.onError) == null ? void 0 : _b.call(callback, { code });
          }
        };
      }
      return this._invokeMethod("getUnreadMentionedCount", resultCallback, { type, targetId, channelId });
    }
    /**
     * 加载当前用户加入的所有超级群会话的未读消息数的总和。
     * @return 当次接口操作的状态码。0 代表调用成功 具体结果需要实现接口回调，非 0 代表当前接口调用操作失败，不会触发接口回调，详细错误参考错误码
     * @listener [onUltraGroupAllUnreadCountLoaded]
     * @deprecated 用
     * {@link #getUltraGroupAllUnreadCount(IRCIMIWGetUltraGroupAllUnreadCountCallback)}
     * 代替， 预计将在 6.x 版本删除此接口。
     */
    loadUltraGroupAllUnreadCount() {
      let resultCallback;
      return this._invokeMethod("loadUltraGroupAllUnreadCount", resultCallback, {});
    }
    /**
     * 获取当前用户加入的所有超级群会话的未读消息数的总和。
     * @param callback 事件回调。
     * @return 当次接口操作的状态码。0 代表调用成功 具体结果需要实现接口回调，非 0 代表当前接口调用操作失败，不会触发接口回调，详细错误参考错误码
     */
    getUltraGroupAllUnreadCount(callback) {
      let resultCallback;
      if (callback) {
        resultCallback = (res) => {
          var _a, _b;
          if (res.callbackName === "onSuccess") {
            let { t } = res;
            (_a = callback.onSuccess) == null ? void 0 : _a.call(callback, { t });
          }
          if (res.callbackName === "onError") {
            let { code } = res;
            (_b = callback.onError) == null ? void 0 : _b.call(callback, { code });
          }
        };
      }
      return this._invokeMethod("getUltraGroupAllUnreadCount", resultCallback, {});
    }
    /**
     * 加载当前用户加入的所有超级群会话中的未读 @ 消息数的总和。
     * @return 当次接口操作的状态码。0 代表调用成功 具体结果需要实现接口回调，非 0 代表当前接口调用操作失败，不会触发接口回调，详细错误参考错误码
     * @listener [onUltraGroupAllUnreadMentionedCountLoaded]
     * @deprecated 用
     * {@link #getUltraGroupAllUnreadMentionedCount(IRCIMIWGetUltraGroupAllUnreadMentionedCountCallback)}
     * 代替， 预计将在 6.x 版本删除此接口。
     */
    loadUltraGroupAllUnreadMentionedCount() {
      let resultCallback;
      return this._invokeMethod("loadUltraGroupAllUnreadMentionedCount", resultCallback, {});
    }
    /**
     * 获取当前用户加入的所有超级群会话中的未读 @ 消息数的总和。
     * @param callback 事件回调。
     * @return 当次接口操作的状态码。0 代表调用成功 具体结果需要实现接口回调，非 0 代表当前接口调用操作失败，不会触发接口回调，详细错误参考错误码
     */
    getUltraGroupAllUnreadMentionedCount(callback) {
      let resultCallback;
      if (callback) {
        resultCallback = (res) => {
          var _a, _b;
          if (res.callbackName === "onSuccess") {
            let { t } = res;
            (_a = callback.onSuccess) == null ? void 0 : _a.call(callback, { t });
          }
          if (res.callbackName === "onError") {
            let { code } = res;
            (_b = callback.onError) == null ? void 0 : _b.call(callback, { code });
          }
        };
      }
      return this._invokeMethod("getUltraGroupAllUnreadMentionedCount", resultCallback, {});
    }
    /**
     * 获取指定会话的未读消息数
     * @param targetId 会话 ID
     * @return 当次接口操作的状态码。0 代表调用成功 具体结果需要实现接口回调，非 0 代表当前接口调用操作失败，不会触发接口回调，详细错误参考错误码
     * @listener [onUltraGroupUnreadCountLoaded]
     * @deprecated 用
     * {@link #getUltraGroupUnreadCount(String, IRCIMIWGetUltraGroupUnreadCountCallback)}
     * 代替， 预计将在 6.x 版本删除此接口。
     */
    loadUltraGroupUnreadCount(targetId) {
      if (!validate("targetId", targetId, AssertRules.STRING, true)) {
        return paramErrorPromise;
      }
      let resultCallback;
      return this._invokeMethod("loadUltraGroupUnreadCount", resultCallback, { targetId });
    }
    /**
     * 获取指定会话的未读消息数
     * @param targetId 会话 ID
     * @param callback 事件回调。
     * @return 当次接口操作的状态码。0 代表调用成功 具体结果需要实现接口回调，非 0 代表当前接口调用操作失败，不会触发接口回调，详细错误参考错误码
     */
    getUltraGroupUnreadCount(targetId, callback) {
      if (!validate("targetId", targetId, AssertRules.STRING, true)) {
        return paramErrorPromise;
      }
      let resultCallback;
      if (callback) {
        resultCallback = (res) => {
          var _a, _b;
          if (res.callbackName === "onSuccess") {
            let { t } = res;
            (_a = callback.onSuccess) == null ? void 0 : _a.call(callback, { t });
          }
          if (res.callbackName === "onError") {
            let { code } = res;
            (_b = callback.onError) == null ? void 0 : _b.call(callback, { code });
          }
        };
      }
      return this._invokeMethod("getUltraGroupUnreadCount", resultCallback, { targetId });
    }
    /**
     * 获取超级群会话中被 @ 的消息数
     * @param targetId 会话 ID
     * @return 当次接口操作的状态码。0 代表调用成功 具体结果需要实现接口回调，非 0 代表当前接口调用操作失败，不会触发接口回调，详细错误参考错误码
     * @listener [onUltraGroupUnreadMentionedCountLoaded]
     * @deprecated 用
     * {@link #getUltraGroupUnreadMentionedCount(String, IRCIMIWGetUltraGroupUnreadMentionedCountCallback)}
     * 代替， 预计将在 6.x 版本删除此接口。
     */
    loadUltraGroupUnreadMentionedCount(targetId) {
      if (!validate("targetId", targetId, AssertRules.STRING, true)) {
        return paramErrorPromise;
      }
      let resultCallback;
      return this._invokeMethod("loadUltraGroupUnreadMentionedCount", resultCallback, { targetId });
    }
    /**
     * 获取超级群会话中被 @ 的消息数
     * @param targetId 会话 ID
     * @param callback 事件回调。
     * @return 当次接口操作的状态码。0 代表调用成功 具体结果需要实现接口回调，非 0 代表当前接口调用操作失败，不会触发接口回调，详细错误参考错误码
     */
    getUltraGroupUnreadMentionedCount(targetId, callback) {
      if (!validate("targetId", targetId, AssertRules.STRING, true)) {
        return paramErrorPromise;
      }
      let resultCallback;
      if (callback) {
        resultCallback = (res) => {
          var _a, _b;
          if (res.callbackName === "onSuccess") {
            let { t } = res;
            (_a = callback.onSuccess) == null ? void 0 : _a.call(callback, { t });
          }
          if (res.callbackName === "onError") {
            let { code } = res;
            (_b = callback.onError) == null ? void 0 : _b.call(callback, { code });
          }
        };
      }
      return this._invokeMethod("getUltraGroupUnreadMentionedCount", resultCallback, { targetId });
    }
    /**
     * 根据会话类型加载未读数
     * 注：不支持聊天室！
     * @param conversationTypes 会话类型集合
     * @param channelId         频道 ID，仅支持超级群使用，其他会话类型传 null 即可。
     * @param contain           是否包含免打扰消息的未读消息数。
     * @return 当次接口操作的状态码。0 代表调用成功 具体结果需要实现接口回调，非 0 代表当前接口调用操作失败，不会触发接口回调，详细错误参考错误码
     * @listener [onUnreadCountByConversationTypesLoaded]
     * @deprecated 用
     * {@link #getUnreadCountByConversationTypes(List, String, boolean, IRCIMIWGetUnreadCountByConversationTypesCallback)}
     * 代替， 预计将在 6.x 版本删除此接口。
     */
    loadUnreadCountByConversationTypes(conversationTypes, channelId, contain) {
      if (!validate("conversationTypes", conversationTypes, AssertRules.NUMBER_ARRAY, true) || !validate("channelId", channelId, AssertRules.ONLY_STRING, false) || !validate("contain", contain, AssertRules.BOOLEAN, true)) {
        return paramErrorPromise;
      }
      let resultCallback;
      return this._invokeMethod("loadUnreadCountByConversationTypes", resultCallback, {
        conversationTypes,
        channelId,
        contain
      });
    }
    /**
     * 根据会话类型加载未读数
     * 注：不支持聊天室！
     * @param conversationTypes 会话类型集合
     * @param channelId         频道 ID，仅支持超级群使用，其他会话类型传 null 即可。
     * @param contain           是否包含免打扰消息的未读消息数。
     * @param callback          事件回调。
     * @return 当次接口操作的状态码。0 代表调用成功 具体结果需要实现接口回调，非 0 代表当前接口调用操作失败，不会触发接口回调，详细错误参考错误码
     */
    getUnreadCountByConversationTypes(conversationTypes, channelId, contain, callback) {
      if (!validate("conversationTypes", conversationTypes, AssertRules.NUMBER_ARRAY, true) || !validate("channelId", channelId, AssertRules.ONLY_STRING, false) || !validate("contain", contain, AssertRules.BOOLEAN, true)) {
        return paramErrorPromise;
      }
      let resultCallback;
      if (callback) {
        resultCallback = (res) => {
          var _a, _b;
          if (res.callbackName === "onSuccess") {
            let { t } = res;
            (_a = callback.onSuccess) == null ? void 0 : _a.call(callback, { t });
          }
          if (res.callbackName === "onError") {
            let { code } = res;
            (_b = callback.onError) == null ? void 0 : _b.call(callback, { code });
          }
        };
      }
      return this._invokeMethod("getUnreadCountByConversationTypes", resultCallback, {
        conversationTypes,
        channelId,
        contain
      });
    }
    /**
     * 清除某个会话中的未读消息数。
     * 注：不支持聊天室！
     * @param type      会话类型
     * @param targetId  会话 ID
     * @param channelId 频道 ID，仅支持超级群使用，其他会话类型传 null 即可。
     * @param timestamp 该会话已阅读的最后一条消息的发送时间戳，清除所有传入当前最新时间戳
     * @param callback  事件回调。SDK 从 5.3.1 版本开始支持 callback 方式回调。从 5.4.0
     * 版本废弃该接口的其他回调方式，预计将在 6.x 版本删除此其他回调方式。如果传入了 callback 参数，仅触发
     * callback 回调。
     * @return 当次接口操作的状态码。0 代表调用成功 具体结果需要实现接口回调，非 0 代表当前接口调用操作失败，不会触发接口回调，详细错误参考错误码
     * @listener [onUnreadCountCleared]
     */
    clearUnreadCount(type, targetId, channelId, timestamp, callback) {
      if (!validate("type", type, AssertRules.NUMBER, true) || !validate("targetId", targetId, AssertRules.STRING, true) || !validate("channelId", channelId, AssertRules.ONLY_STRING, false) || !validate("timestamp", timestamp, AssertRules.NUMBER, true)) {
        return paramErrorPromise;
      }
      let resultCallback;
      if (callback) {
        resultCallback = (res) => {
          var _a;
          if (res.callbackName === "onUnreadCountCleared") {
            let { code } = res;
            (_a = callback.onUnreadCountCleared) == null ? void 0 : _a.call(callback, { code });
          }
        };
      }
      return this._invokeMethod("clearUnreadCount", resultCallback, { type, targetId, channelId, timestamp });
    }
    /**
     * 保存会话草稿信息。
     * @param type      会话类型
     * @param targetId  会话 ID
     * @param channelId 频道 ID，仅支持超级群使用，其他会话类型传 null 即可。
     * @param draft     草稿的文字内容。
     * @param callback  事件回调。SDK 从 5.3.1 版本开始支持 callback 方式回调。从 5.4.0
     * 版本废弃该接口的其他回调方式，预计将在 6.x 版本删除此其他回调方式。如果传入了 callback 参数，仅触发
     * callback 回调。
     * @return 当次接口操作的状态码。0 代表调用成功 具体结果需要实现接口回调，非 0 代表当前接口调用操作失败，不会触发接口回调，详细错误参考错误码
     * @listener [onDraftMessageSaved]
     */
    saveDraftMessage(type, targetId, channelId, draft, callback) {
      if (!validate("type", type, AssertRules.NUMBER, true) || !validate("targetId", targetId, AssertRules.STRING, true) || !validate("channelId", channelId, AssertRules.ONLY_STRING, false) || !validate("draft", draft, AssertRules.STRING, true)) {
        return paramErrorPromise;
      }
      let resultCallback;
      if (callback) {
        resultCallback = (res) => {
          var _a;
          if (res.callbackName === "onDraftMessageSaved") {
            let { code } = res;
            (_a = callback.onDraftMessageSaved) == null ? void 0 : _a.call(callback, { code });
          }
        };
      }
      return this._invokeMethod("saveDraftMessage", resultCallback, { type, targetId, channelId, draft });
    }
    /**
     * 加载会话中的草稿信息。
     * @param type      会话类型
     * @param targetId  会话 ID
     * @param channelId 频道 ID，仅支持超级群使用，其他会话类型传 null 即可。
     * @return 当次接口操作的状态码。0 代表调用成功 具体结果需要实现接口回调，非 0 代表当前接口调用操作失败，不会触发接口回调，详细错误参考错误码
     * @listener [onDraftMessageLoaded]
     * @deprecated 用
     * {@link #getDraftMessage(RCIMIWConversationType, String, String, IRCIMIWGetDraftMessageCallback)}
     * 代替， 预计将在 6.x 版本删除此接口。
     */
    loadDraftMessage(type, targetId, channelId) {
      if (!validate("type", type, AssertRules.NUMBER, true) || !validate("targetId", targetId, AssertRules.STRING, true) || !validate("channelId", channelId, AssertRules.ONLY_STRING, false)) {
        return paramErrorPromise;
      }
      let resultCallback;
      return this._invokeMethod("loadDraftMessage", resultCallback, { type, targetId, channelId });
    }
    /**
     * 获取会话中的草稿信息。
     * @param type      会话类型
     * @param targetId  会话 ID
     * @param channelId 频道 ID，仅支持超级群使用，其他会话类型传 null 即可。
     * @param callback  事件回调。
     * @return 当次接口操作的状态码。0 代表调用成功 具体结果需要实现接口回调，非 0 代表当前接口调用操作失败，不会触发接口回调，详细错误参考错误码
     */
    getDraftMessage(type, targetId, channelId, callback) {
      if (!validate("type", type, AssertRules.NUMBER, true) || !validate("targetId", targetId, AssertRules.STRING, true) || !validate("channelId", channelId, AssertRules.ONLY_STRING, false)) {
        return paramErrorPromise;
      }
      let resultCallback;
      if (callback) {
        resultCallback = (res) => {
          var _a, _b;
          if (res.callbackName === "onSuccess") {
            let { t } = res;
            (_a = callback.onSuccess) == null ? void 0 : _a.call(callback, { t });
          }
          if (res.callbackName === "onError") {
            let { code } = res;
            (_b = callback.onError) == null ? void 0 : _b.call(callback, { code });
          }
        };
      }
      return this._invokeMethod("getDraftMessage", resultCallback, { type, targetId, channelId });
    }
    /**
     * 删除指定会话中的草稿信息。
     * @param type      会话类型
     * @param targetId  会话 ID
     * @param channelId 频道 ID，仅支持超级群使用，其他会话类型传 null 即可。
     * @param callback  事件回调。SDK 从 5.3.1 版本开始支持 callback 方式回调。从 5.4.0
     * 版本废弃该接口的其他回调方式，预计将在 6.x 版本删除此其他回调方式。如果传入了 callback 参数，仅触发
     * callback 回调。
     * @return 当次接口操作的状态码。0 代表调用成功 具体结果需要实现接口回调，非 0 代表当前接口调用操作失败，不会触发接口回调，详细错误参考错误码
     * @listener [onDraftMessageCleared]
     */
    clearDraftMessage(type, targetId, channelId, callback) {
      if (!validate("type", type, AssertRules.NUMBER, true) || !validate("targetId", targetId, AssertRules.STRING, true) || !validate("channelId", channelId, AssertRules.ONLY_STRING, false)) {
        return paramErrorPromise;
      }
      let resultCallback;
      if (callback) {
        resultCallback = (res) => {
          var _a;
          if (res.callbackName === "onDraftMessageCleared") {
            let { code } = res;
            (_a = callback.onDraftMessageCleared) == null ? void 0 : _a.call(callback, { code });
          }
        };
      }
      return this._invokeMethod("clearDraftMessage", resultCallback, { type, targetId, channelId });
    }
    /**
     * 加载免打扰的会话列表。
     * @param conversationTypes 会话类型集合
     * @param channelId         频道 ID，仅支持超级群使用，其他会话类型传 null 即可。
     * @return 当次接口操作的状态码。0 代表调用成功 具体结果需要实现接口回调，非 0 代表当前接口调用操作失败，不会触发接口回调，详细错误参考错误码
     * @listener [onBlockedConversationsLoaded]
     * @deprecated 用
     * {@link #getBlockedConversations(List, String, IRCIMIWGetBlockedConversationsCallback)}
     * 代替， 预计将在 6.x 版本删除此接口。
     */
    loadBlockedConversations(conversationTypes, channelId) {
      if (!validate("conversationTypes", conversationTypes, AssertRules.NUMBER_ARRAY, true) || !validate("channelId", channelId, AssertRules.ONLY_STRING, false)) {
        return paramErrorPromise;
      }
      let resultCallback;
      return this._invokeMethod("loadBlockedConversations", resultCallback, { conversationTypes, channelId });
    }
    /**
     * 获取免打扰的会话列表。
     * @param conversationTypes 会话类型集合
     * @param channelId         频道 ID，仅支持超级群使用，其他会话类型传 null 即可。
     * @param callback          事件回调。
     * @return 当次接口操作的状态码。0 代表调用成功 具体结果需要实现接口回调，非 0 代表当前接口调用操作失败，不会触发接口回调，详细错误参考错误码
     */
    getBlockedConversations(conversationTypes, channelId, callback) {
      if (!validate("conversationTypes", conversationTypes, AssertRules.NUMBER_ARRAY, true) || !validate("channelId", channelId, AssertRules.ONLY_STRING, false)) {
        return paramErrorPromise;
      }
      let resultCallback;
      if (callback) {
        resultCallback = (res) => {
          var _a, _b;
          if (res.callbackName === "onSuccess") {
            let { t } = res;
            (_a = callback.onSuccess) == null ? void 0 : _a.call(callback, { t });
          }
          if (res.callbackName === "onError") {
            let { code } = res;
            (_b = callback.onError) == null ? void 0 : _b.call(callback, { code });
          }
        };
      }
      return this._invokeMethod("getBlockedConversations", resultCallback, { conversationTypes, channelId });
    }
    /**
     * 设置会话的置顶状态。若会话不存在，调用此方法 SDK 自动创建会话并置顶。
     * @param type      会话类型
     * @param targetId  会话 ID
     * @param channelId 频道 ID，仅支持超级群使用，其他会话类型传 null 即可。
     * @param top       是否置顶
     * @param callback  事件回调。SDK 从 5.3.1 版本开始支持 callback 方式回调。从 5.4.0
     * 版本废弃该接口的其他回调方式，预计将在 6.x 版本删除此其他回调方式。如果传入了 callback 参数，仅触发
     * callback 回调。
     * @return 当次接口操作的状态码。0 代表调用成功 具体结果需要实现接口回调，非 0 代表当前接口调用操作失败，不会触发接口回调，详细错误参考错误码
     * @listener [onConversationTopStatusChanged]
     */
    changeConversationTopStatus(type, targetId, channelId, top, callback) {
      if (!validate("type", type, AssertRules.NUMBER, true) || !validate("targetId", targetId, AssertRules.STRING, true) || !validate("channelId", channelId, AssertRules.ONLY_STRING, false) || !validate("top", top, AssertRules.BOOLEAN, true)) {
        return paramErrorPromise;
      }
      let resultCallback;
      if (callback) {
        resultCallback = (res) => {
          var _a;
          if (res.callbackName === "onConversationTopStatusChanged") {
            let { code } = res;
            (_a = callback.onConversationTopStatusChanged) == null ? void 0 : _a.call(callback, { code });
          }
        };
      }
      return this._invokeMethod("changeConversationTopStatus", resultCallback, { type, targetId, channelId, top });
    }
    /**
     * 加载会话的置顶状态
     * @param type      会话类型
     * @param targetId  会话 ID
     * @param channelId 频道 ID，仅支持超级群使用，其他会话类型传 null 即可。
     * @return 当次接口操作的状态码。0 代表调用成功 具体结果需要实现接口回调，非 0 代表当前接口调用操作失败，不会触发接口回调，详细错误参考错误码
     * @listener [onConversationTopStatusLoaded]
     * @deprecated 用
     * {@link #getConversationTopStatus(RCIMIWConversationType, String, String, IRCIMIWGetConversationTopStatusCallback)}
     * 代替， 预计将在 6.x 版本删除此接口。
     */
    loadConversationTopStatus(type, targetId, channelId) {
      if (!validate("type", type, AssertRules.NUMBER, true) || !validate("targetId", targetId, AssertRules.STRING, true) || !validate("channelId", channelId, AssertRules.ONLY_STRING, false)) {
        return paramErrorPromise;
      }
      let resultCallback;
      return this._invokeMethod("loadConversationTopStatus", resultCallback, { type, targetId, channelId });
    }
    /**
     * 获取会话的置顶状态
     * @param type      会话类型
     * @param targetId  会话 ID
     * @param channelId 频道 ID，仅支持超级群使用，其他会话类型传 null 即可。
     * @param callback  事件回调。
     * @return 当次接口操作的状态码。0 代表调用成功 具体结果需要实现接口回调，非 0 代表当前接口调用操作失败，不会触发接口回调，详细错误参考错误码
     */
    getConversationTopStatus(type, targetId, channelId, callback) {
      if (!validate("type", type, AssertRules.NUMBER, true) || !validate("targetId", targetId, AssertRules.STRING, true) || !validate("channelId", channelId, AssertRules.ONLY_STRING, false)) {
        return paramErrorPromise;
      }
      let resultCallback;
      if (callback) {
        resultCallback = (res) => {
          var _a, _b;
          if (res.callbackName === "onSuccess") {
            let { t } = res;
            (_a = callback.onSuccess) == null ? void 0 : _a.call(callback, { t });
          }
          if (res.callbackName === "onError") {
            let { code } = res;
            (_b = callback.onError) == null ? void 0 : _b.call(callback, { code });
          }
        };
      }
      return this._invokeMethod("getConversationTopStatus", resultCallback, { type, targetId, channelId });
    }
    /**
     * 同步会话阅读状态。
     * @param type      会话类型
     * @param targetId  会话 ID
     * @param channelId 频道 ID，仅支持超级群使用，其他会话类型传 null 即可。
     * @param timestamp 会话中已读的最后一条消息的发送时间戳
     * @param callback  事件回调。SDK 从 5.3.1 版本开始支持 callback 方式回调。从 5.4.0
     * 版本废弃该接口的其他回调方式，预计将在 6.x 版本删除此其他回调方式。如果传入了 callback 参数，仅触发
     * callback 回调。
     * @return 当次接口操作的状态码。0 代表调用成功 具体结果需要实现接口回调，非 0 代表当前接口调用操作失败，不会触发接口回调，详细错误参考错误码
     * @listener [onConversationReadStatusSynced]
     */
    syncConversationReadStatus(type, targetId, channelId, timestamp, callback) {
      if (!validate("type", type, AssertRules.NUMBER, true) || !validate("targetId", targetId, AssertRules.STRING, true) || !validate("channelId", channelId, AssertRules.ONLY_STRING, false) || !validate("timestamp", timestamp, AssertRules.NUMBER, true)) {
        return paramErrorPromise;
      }
      let resultCallback;
      if (callback) {
        resultCallback = (res) => {
          var _a;
          if (res.callbackName === "onConversationReadStatusSynced") {
            let { code } = res;
            (_a = callback.onConversationReadStatusSynced) == null ? void 0 : _a.call(callback, { code });
          }
        };
      }
      return this._invokeMethod("syncConversationReadStatus", resultCallback, {
        type,
        targetId,
        channelId,
        timestamp
      });
    }
    /**
     * 向会话中发送正在输入的状态，目前只支持单聊。
     * @param type        会话类型
     * @param targetId    会话 ID
     * @param channelId   频道 ID，仅支持超级群使用，其他会话类型传 null 即可。
     * @param currentType 当前的状态
     * @return 当次接口操作的状态码。0 代表调用成功 具体结果需要实现接口回调，非 0 代表当前接口调用操作失败，不会触发接口回调，详细错误参考错误码
     */
    sendTypingStatus(type, targetId, channelId, currentType) {
      if (!validate("type", type, AssertRules.NUMBER, true) || !validate("targetId", targetId, AssertRules.STRING, true) || !validate("channelId", channelId, AssertRules.ONLY_STRING, false) || !validate("currentType", currentType, AssertRules.STRING, true)) {
        return paramErrorPromise;
      }
      let resultCallback;
      return this._invokeMethod("sendTypingStatus", resultCallback, { type, targetId, channelId, currentType });
    }
    /**
     * 加载历史消息
     * @param type      会话类型
     * @param targetId  会话 ID
     * @param channelId 频道 ID，仅支持超级群使用，其他会话类型传 null 即可。
     * @param sentTime  当前消息时间戳
     * @param order     获取消息的方向。BEFORE：获取 sentTime 之前的消息 （时间递减），AFTER：获取 sentTime
     * 之后的消息 （时间递增）
     * @param policy    消息的加载策略。LOCAL：只加载本地，REMOTE：只加载远端，LOCAL_REMOTE：本地远端都加载
     * @param count     获取的消息数量，0 < count ≤ 20
     * @return 当次接口操作的状态码。0 代表调用成功 具体结果需要实现接口回调，非 0 代表当前接口调用操作失败，不会触发接口回调，详细错误参考错误码
     * @listener [onMessagesLoaded]
     * @deprecated 用
     * {@link #getMessages(RCIMIWConversationType, String, String, long, RCIMIWTimeOrder, RCIMIWMessageOperationPolicy, int, IRCIMIWGetMessagesCallback)}
     * 代替， 预计将在 6.x 版本删除此接口。
     */
    loadMessages(type, targetId, channelId, sentTime, order, policy, count) {
      if (!validate("type", type, AssertRules.NUMBER, true) || !validate("targetId", targetId, AssertRules.STRING, true) || !validate("channelId", channelId, AssertRules.ONLY_STRING, false) || !validate("sentTime", sentTime, AssertRules.NUMBER, true) || !validate("order", order, AssertRules.NUMBER, true) || !validate("policy", policy, AssertRules.NUMBER, true) || !validate("count", count, AssertRules.NUMBER, true)) {
        return paramErrorPromise;
      }
      let resultCallback;
      return this._invokeMethod("loadMessages", resultCallback, {
        type,
        targetId,
        channelId,
        sentTime,
        order,
        policy,
        count
      });
    }
    /**
     * 加载历史消息
     * @param type      会话类型
     * @param targetId  会话 ID
     * @param channelId 频道 ID，仅支持超级群使用，其他会话类型传 null 即可。
     * @param sentTime  当前消息时间戳
     * @param order     获取消息的方向。BEFORE：获取 sentTime 之前的消息 （时间递减），AFTER：获取 sentTime
     * 之后的消息 （时间递增）
     * @param policy    消息的加载策略。LOCAL：只加载本地，REMOTE：只加载远端，LOCAL_REMOTE：本地远端都加载
     * @param count     获取的消息数量，0 < count ≤ 20
     * @param callback  事件回调。
     * @return 当次接口操作的状态码。0 代表调用成功 具体结果需要实现接口回调，非 0 代表当前接口调用操作失败，不会触发接口回调，详细错误参考错误码
     */
    getMessages(type, targetId, channelId, sentTime, order, policy, count, callback) {
      if (!validate("type", type, AssertRules.NUMBER, true) || !validate("targetId", targetId, AssertRules.STRING, true) || !validate("channelId", channelId, AssertRules.ONLY_STRING, false) || !validate("sentTime", sentTime, AssertRules.NUMBER, true) || !validate("order", order, AssertRules.NUMBER, true) || !validate("policy", policy, AssertRules.NUMBER, true) || !validate("count", count, AssertRules.NUMBER, true)) {
        return paramErrorPromise;
      }
      let resultCallback;
      if (callback) {
        resultCallback = (res) => {
          var _a, _b;
          if (res.callbackName === "onSuccess") {
            let { t } = res;
            (_a = callback.onSuccess) == null ? void 0 : _a.call(callback, { t });
          }
          if (res.callbackName === "onError") {
            let { code } = res;
            (_b = callback.onError) == null ? void 0 : _b.call(callback, { code });
          }
        };
      }
      return this._invokeMethod("getMessages", resultCallback, {
        type,
        targetId,
        channelId,
        sentTime,
        order,
        policy,
        count
      });
    }
    /**
     * 根据消息 id 获取消息体（本地数据库索引唯一值）。
     * @param messageId 消息的 messageId，可在消息对象中获取
     * @param callback  事件回调。SDK 从 5.3.1 版本开始支持 callback 方式回调。从 5.4.0
     * 版本废弃该接口的其他回调方式，预计将在 6.x 版本删除此其他回调方式。如果传入了 callback 参数，仅触发
     * callback 回调。
     * @return 当次接口操作的状态码。0 代表调用成功 具体结果需要实现接口回调，非 0 代表当前接口调用操作失败，不会触发接口回调，详细错误参考错误码
     */
    getMessageById(messageId, callback) {
      if (!validate("messageId", messageId, AssertRules.NUMBER, true)) {
        return paramErrorPromise;
      }
      let resultCallback;
      if (callback) {
        resultCallback = (res) => {
          var _a, _b;
          if (res.callbackName === "onSuccess") {
            let { t } = res;
            (_a = callback.onSuccess) == null ? void 0 : _a.call(callback, { t });
          }
          if (res.callbackName === "onError") {
            let { code } = res;
            (_b = callback.onError) == null ? void 0 : _b.call(callback, { code });
          }
        };
      }
      return this._invokeMethod("getMessageById", resultCallback, { messageId });
    }
    /**
     * 通过全局唯一 id 获取消息实体。
     * @param messageUId 消息的 messageUid，可在消息对象中获取，且只有发送成功的消息才会有值。
     * @param callback   事件回调。SDK 从 5.3.1 版本开始支持 callback 方式回调。从 5.4.0
     * 版本废弃该接口的其他回调方式，预计将在 6.x 版本删除此其他回调方式。如果传入了 callback 参数，仅触发
     * callback 回调。
     * @return 当次接口操作的状态码。0 代表调用成功 具体结果需要实现接口回调，非 0 代表当前接口调用操作失败，不会触发接口回调，详细错误参考错误码
     */
    getMessageByUId(messageUId, callback) {
      if (!validate("messageUId", messageUId, AssertRules.STRING, true)) {
        return paramErrorPromise;
      }
      let resultCallback;
      if (callback) {
        resultCallback = (res) => {
          var _a, _b;
          if (res.callbackName === "onSuccess") {
            let { t } = res;
            (_a = callback.onSuccess) == null ? void 0 : _a.call(callback, { t });
          }
          if (res.callbackName === "onError") {
            let { code } = res;
            (_b = callback.onError) == null ? void 0 : _b.call(callback, { code });
          }
        };
      }
      return this._invokeMethod("getMessageByUId", resultCallback, { messageUId });
    }
    /**
     * 获取会话中指定类型的消息。
     * @param type         会话类型。
     * @param targetId     会话 ID。
     * @param channelId    消息所属会话的业务标识。
     * @param messageTypes 消息类型列表。
     * @param sentTime     消息发送时间戳，0 表示最新的消息
     * @param order        获取消息的方向。BEFORE：获取 sentTime 之前的消息 （时间递减），AFTER：获取 sentTime
     * 之后的消息 （时间递增）
     * @param count        获取的消息数量
     * @param callback     获取结果回调。
     * @return 当次接口操作的状态码。0 代表调用成功 具体结果通过接口 callback 回调，非 0
     * 代表当前接口调用操作失败，不会触发接口回调，详细错误参考错误码
     */
    getLocalMessagesByMessageTypes(type, targetId, channelId, messageTypes, sentTime, order, count, callback) {
      if (!validate("type", type, AssertRules.NUMBER, true) || !validate("targetId", targetId, AssertRules.STRING, true) || !validate("channelId", channelId, AssertRules.ONLY_STRING, false) || !validate("messageTypes", messageTypes, AssertRules.NUMBER_ARRAY, true) || !validate("sentTime", sentTime, AssertRules.NUMBER, true) || !validate("order", order, AssertRules.NUMBER, true) || !validate("count", count, AssertRules.NUMBER, true)) {
        return paramErrorPromise;
      }
      let resultCallback;
      if (callback) {
        resultCallback = (res) => {
          var _a, _b;
          if (res.callbackName === "onSuccess") {
            let { t } = res;
            (_a = callback.onSuccess) == null ? void 0 : _a.call(callback, { t });
          }
          if (res.callbackName === "onError") {
            let { code } = res;
            (_b = callback.onError) == null ? void 0 : _b.call(callback, { code });
          }
        };
      }
      return this._invokeMethod("getLocalMessagesByMessageTypes", resultCallback, {
        type,
        targetId,
        channelId,
        messageTypes,
        sentTime,
        order,
        count
      });
    }
    /**
     * 加载第一条未读消息。
     * @param type      会话类型
     * @param targetId  会话 ID
     * @param channelId 频道 ID，仅支持超级群使用，其他会话类型传 null 即可。
     * @return 当次接口操作的状态码。0 代表调用成功 具体结果需要实现接口回调，非 0 代表当前接口调用操作失败，不会触发接口回调，详细错误参考错误码
     * @listener [onFirstUnreadMessageLoaded]
     * @deprecated 用
     * {@link #getFirstUnreadMessage(RCIMIWConversationType, String, String, IRCIMIWGetFirstUnreadMessageCallback)}
     * 代替， 预计将在 6.x 版本删除此接口。
     */
    loadFirstUnreadMessage(type, targetId, channelId) {
      if (!validate("type", type, AssertRules.NUMBER, true) || !validate("targetId", targetId, AssertRules.STRING, true) || !validate("channelId", channelId, AssertRules.ONLY_STRING, false)) {
        return paramErrorPromise;
      }
      let resultCallback;
      return this._invokeMethod("loadFirstUnreadMessage", resultCallback, { type, targetId, channelId });
    }
    /**
     * 获取第一条未读消息。
     * @param type      会话类型
     * @param targetId  会话 ID
     * @param channelId 频道 ID，仅支持超级群使用，其他会话类型传 null 即可。
     * @param callback  事件回调。
     * @return 当次接口操作的状态码。0 代表调用成功 具体结果需要实现接口回调，非 0 代表当前接口调用操作失败，不会触发接口回调，详细错误参考错误码
     */
    getFirstUnreadMessage(type, targetId, channelId, callback) {
      if (!validate("type", type, AssertRules.NUMBER, true) || !validate("targetId", targetId, AssertRules.STRING, true) || !validate("channelId", channelId, AssertRules.ONLY_STRING, false)) {
        return paramErrorPromise;
      }
      let resultCallback;
      if (callback) {
        resultCallback = (res) => {
          var _a, _b;
          if (res.callbackName === "onSuccess") {
            let { t } = res;
            (_a = callback.onSuccess) == null ? void 0 : _a.call(callback, { t });
          }
          if (res.callbackName === "onError") {
            let { code } = res;
            (_b = callback.onError) == null ? void 0 : _b.call(callback, { code });
          }
        };
      }
      return this._invokeMethod("getFirstUnreadMessage", resultCallback, { type, targetId, channelId });
    }
    /**
     * 加载会话中未读的 @ 消息。
     * @param type      会话类型
     * @param targetId  会话 ID
     * @param channelId 频道 ID，仅支持超级群使用，其他会话类型传 null 即可。
     * @return 当次接口操作的状态码。0 代表调用成功 具体结果需要实现接口回调，非 0 代表当前接口调用操作失败，不会触发接口回调，详细错误参考错误码
     * @listener [onUnreadMentionedMessagesLoaded]
     * @deprecated 用
     * {@link #getUnreadMentionedMessages(RCIMIWConversationType, String, String, IRCIMIWGetUnreadMentionedMessagesCallback)}
     * 代替， 预计将在 6.x 版本删除此接口。
     */
    loadUnreadMentionedMessages(type, targetId, channelId) {
      if (!validate("type", type, AssertRules.NUMBER, true) || !validate("targetId", targetId, AssertRules.STRING, true) || !validate("channelId", channelId, AssertRules.ONLY_STRING, false)) {
        return paramErrorPromise;
      }
      let resultCallback;
      return this._invokeMethod("loadUnreadMentionedMessages", resultCallback, { type, targetId, channelId });
    }
    /**
     * 获取会话中未读的 @ 消息。
     * @param type      会话类型
     * @param targetId  会话 ID
     * @param channelId 频道 ID，仅支持超级群使用，其他会话类型传 null 即可。
     * @param callback  事件回调。
     * @return 当次接口操作的状态码。0 代表调用成功 具体结果需要实现接口回调，非 0 代表当前接口调用操作失败，不会触发接口回调，详细错误参考错误码
     */
    getUnreadMentionedMessages(type, targetId, channelId, callback) {
      if (!validate("type", type, AssertRules.NUMBER, true) || !validate("targetId", targetId, AssertRules.STRING, true) || !validate("channelId", channelId, AssertRules.ONLY_STRING, false)) {
        return paramErrorPromise;
      }
      let resultCallback;
      if (callback) {
        resultCallback = (res) => {
          var _a, _b;
          if (res.callbackName === "onSuccess") {
            let { t } = res;
            (_a = callback.onSuccess) == null ? void 0 : _a.call(callback, { t });
          }
          if (res.callbackName === "onError") {
            let { code } = res;
            (_b = callback.onError) == null ? void 0 : _b.call(callback, { code });
          }
        };
      }
      return this._invokeMethod("getUnreadMentionedMessages", resultCallback, { type, targetId, channelId });
    }
    /**
     * 插入一条消息
     * @param message  插入的消息
     * @param callback 事件回调。SDK 从 5.3.1 版本开始支持 callback 方式回调。从 5.4.0
     * 版本废弃该接口的其他回调方式，预计将在 6.x 版本删除此其他回调方式。如果传入了 callback 参数，仅触发
     * callback 回调。
     * @return 当次接口操作的状态码。0 代表调用成功 具体结果需要实现接口回调，非 0 代表当前接口调用操作失败，不会触发接口回调，详细错误参考错误码
     * @listener [onMessageInserted]
     */
    insertMessage(message, callback) {
      if (!validate("message", message, AssertRules.OBJECT, true)) {
        return paramErrorPromise;
      }
      let resultCallback;
      if (callback) {
        resultCallback = (res) => {
          var _a;
          if (res.callbackName === "onMessageInserted") {
            let { code, message: message2 } = res;
            (_a = callback.onMessageInserted) == null ? void 0 : _a.call(callback, { code, message: message2 });
          }
        };
      }
      return this._invokeMethod("insertMessage", resultCallback, { message });
    }
    /**
     * 插入多条消息，不支持超级群
     * @param messages 插入的消息集合
     * @param callback 事件回调。SDK 从 5.3.1 版本开始支持 callback 方式回调。从 5.4.0
     * 版本废弃该接口的其他回调方式，预计将在 6.x 版本删除此其他回调方式。如果传入了 callback 参数，仅触发
     * callback 回调。
     * @return 当次接口操作的状态码。0 代表调用成功 具体结果需要实现接口回调，非 0 代表当前接口调用操作失败，不会触发接口回调，详细错误参考错误码
     * @listener [onMessagesInserted]
     */
    insertMessages(messages, callback) {
      if (!validate("messages", messages, AssertRules.ARRAY, true)) {
        return paramErrorPromise;
      }
      let resultCallback;
      if (callback) {
        resultCallback = (res) => {
          var _a;
          if (res.callbackName === "onMessagesInserted") {
            let { code, messages: messages2 } = res;
            (_a = callback.onMessagesInserted) == null ? void 0 : _a.call(callback, { code, messages: messages2 });
          }
        };
      }
      return this._invokeMethod("insertMessages", resultCallback, { messages });
    }
    /**
     * 清除消息
     * @param type      会话类型
     * @param targetId  会话 ID
     * @param channelId 频道 ID，仅支持超级群使用，其他会话类型传 null 即可。
     * @param timestamp 清除消息截止时间戳，0 ≤ timestamp ≤ 当前会话最后一条消息的 sentTime, 0
     * 清除所有消息，其他值清除小于等于 timestamp 的消息
     * @param policy    清除的策略
     * @param callback  事件回调。SDK 从 5.3.1 版本开始支持 callback 方式回调。从 5.4.0
     * 版本废弃该接口的其他回调方式，预计将在 6.x 版本删除此其他回调方式。如果传入了 callback 参数，仅触发
     * callback 回调。
     * @return 当次接口操作的状态码。0 代表调用成功 具体结果需要实现接口回调，非 0 代表当前接口调用操作失败，不会触发接口回调，详细错误参考错误码
     * @listener [onMessagesCleared]
     */
    clearMessages(type, targetId, channelId, timestamp, policy, callback) {
      if (!validate("type", type, AssertRules.NUMBER, true) || !validate("targetId", targetId, AssertRules.STRING, true) || !validate("channelId", channelId, AssertRules.ONLY_STRING, false) || !validate("timestamp", timestamp, AssertRules.NUMBER, true) || !validate("policy", policy, AssertRules.NUMBER, true)) {
        return paramErrorPromise;
      }
      let resultCallback;
      if (callback) {
        resultCallback = (res) => {
          var _a;
          if (res.callbackName === "onMessagesCleared") {
            let { code } = res;
            (_a = callback.onMessagesCleared) == null ? void 0 : _a.call(callback, { code });
          }
        };
      }
      return this._invokeMethod("clearMessages", resultCallback, { type, targetId, channelId, timestamp, policy });
    }
    /**
     * 删除本地消息
     * @param messages 消息集合
     * @param callback 事件回调。SDK 从 5.3.1 版本开始支持 callback 方式回调。从 5.4.0
     * 版本废弃该接口的其他回调方式，预计将在 6.x 版本删除此其他回调方式。如果传入了 callback 参数，仅触发
     * callback 回调。
     * @return 当次接口操作的状态码。0 代表调用成功 具体结果需要实现接口回调，非 0 代表当前接口调用操作失败，不会触发接口回调，详细错误参考错误码
     * @listener [onLocalMessagesDeleted]
     */
    deleteLocalMessages(messages, callback) {
      if (!validate("messages", messages, AssertRules.ARRAY, true)) {
        return paramErrorPromise;
      }
      let resultCallback;
      if (callback) {
        resultCallback = (res) => {
          var _a;
          if (res.callbackName === "onLocalMessagesDeleted") {
            let { code, messages: messages2 } = res;
            (_a = callback.onLocalMessagesDeleted) == null ? void 0 : _a.call(callback, { code, messages: messages2 });
          }
        };
      }
      return this._invokeMethod("deleteLocalMessages", resultCallback, { messages });
    }
    /**
     * 删除消息
     * @param type      会话类型
     * @param targetId  会话 ID
     * @param channelId 频道 ID，仅支持超级群使用，其他会话类型传 null 即可。
     * @param messages  消息集合
     * @param callback  事件回调。SDK 从 5.3.1 版本开始支持 callback 方式回调。从 5.4.0
     * 版本废弃该接口的其他回调方式，预计将在 6.x 版本删除此其他回调方式。如果传入了 callback 参数，仅触发
     * callback 回调。
     * @return 当次接口操作的状态码。0 代表调用成功 具体结果需要实现接口回调，非 0 代表当前接口调用操作失败，不会触发接口回调，详细错误参考错误码
     * @listener [onMessagesDeleted]
     */
    deleteMessages(type, targetId, channelId, messages, callback) {
      if (!validate("type", type, AssertRules.NUMBER, true) || !validate("targetId", targetId, AssertRules.STRING, true) || !validate("channelId", channelId, AssertRules.ONLY_STRING, false) || !validate("messages", messages, AssertRules.ARRAY, true)) {
        return paramErrorPromise;
      }
      let resultCallback;
      if (callback) {
        resultCallback = (res) => {
          var _a;
          if (res.callbackName === "onMessagesDeleted") {
            let { code, messages: messages2 } = res;
            (_a = callback.onMessagesDeleted) == null ? void 0 : _a.call(callback, { code, messages: messages2 });
          }
        };
      }
      return this._invokeMethod("deleteMessages", resultCallback, { type, targetId, channelId, messages });
    }
    /**
     * 撤回消息
     * @param message  需要被撤回的消息
     * @param callback 事件回调。SDK 从 5.3.1 版本开始支持 callback 方式回调。从 5.4.0
     * 版本废弃该接口的其他回调方式，预计将在 6.x 版本删除此其他回调方式。如果传入了 callback 参数，仅触发
     * callback 回调。
     * @return 当次接口操作的状态码。0 代表调用成功 具体结果需要实现接口回调，非 0 代表当前接口调用操作失败，不会触发接口回调，详细错误参考错误码
     * @listener [onMessageRecalled]
     */
    recallMessage(message, callback) {
      if (!validate("message", message, AssertRules.OBJECT, true)) {
        return paramErrorPromise;
      }
      let resultCallback;
      if (callback) {
        resultCallback = (res) => {
          var _a;
          if (res.callbackName === "onMessageRecalled") {
            let { code, message: message2 } = res;
            (_a = callback.onMessageRecalled) == null ? void 0 : _a.call(callback, { code, message: message2 });
          }
        };
      }
      return this._invokeMethod("recallMessage", resultCallback, { message });
    }
    /**
     * 发送某个会话中的消息阅读回执
     * @param targetId  会话 ID
     * @param channelId 频道 ID，仅支持超级群使用，其他会话类型传 null 即可。
     * @param timestamp 该会话中已读的最后一条消息的发送时间戳
     * @param callback  事件回调。SDK 从 5.3.1 版本开始支持 callback 方式回调。从 5.4.0
     * 版本废弃该接口的其他回调方式，预计将在 6.x 版本删除此其他回调方式。如果传入了 callback 参数，仅触发
     * callback 回调。
     * @return 当次接口操作的状态码。0 代表调用成功 具体结果需要实现接口回调，非 0 代表当前接口调用操作失败，不会触发接口回调，详细错误参考错误码
     * @listener [onPrivateReadReceiptMessageSent]
     */
    sendPrivateReadReceiptMessage(targetId, channelId, timestamp, callback) {
      if (!validate("targetId", targetId, AssertRules.STRING, true) || !validate("channelId", channelId, AssertRules.ONLY_STRING, false) || !validate("timestamp", timestamp, AssertRules.NUMBER, true)) {
        return paramErrorPromise;
      }
      let resultCallback;
      if (callback) {
        resultCallback = (res) => {
          var _a;
          if (res.callbackName === "onPrivateReadReceiptMessageSent") {
            let { code } = res;
            (_a = callback.onPrivateReadReceiptMessageSent) == null ? void 0 : _a.call(callback, { code });
          }
        };
      }
      return this._invokeMethod("sendPrivateReadReceiptMessage", resultCallback, { targetId, channelId, timestamp });
    }
    /**
     * 发起群聊消息已读回执请求
     * @param message  需要请求已读回执的消息
     * @param callback 事件回调。SDK 从 5.3.1 版本开始支持 callback 方式回调。从 5.4.0
     * 版本废弃该接口的其他回调方式，预计将在 6.x 版本删除此其他回调方式。如果传入了 callback 参数，仅触发
     * callback 回调。
     * @return 当次接口操作的状态码。0 代表调用成功 具体结果需要实现接口回调，非 0 代表当前接口调用操作失败，不会触发接口回调，详细错误参考错误码
     * @listener [onGroupReadReceiptRequestSent]
     */
    sendGroupReadReceiptRequest(message, callback) {
      if (!validate("message", message, AssertRules.OBJECT, true)) {
        return paramErrorPromise;
      }
      let resultCallback;
      if (callback) {
        resultCallback = (res) => {
          var _a;
          if (res.callbackName === "onGroupReadReceiptRequestSent") {
            let { code, message: message2 } = res;
            (_a = callback.onGroupReadReceiptRequestSent) == null ? void 0 : _a.call(callback, { code, message: message2 });
          }
        };
      }
      return this._invokeMethod("sendGroupReadReceiptRequest", resultCallback, { message });
    }
    /**
     * 发送群聊已读回执
     * @param targetId  会话 ID
     * @param channelId 频道 ID，仅支持超级群使用，其他会话类型传 null 即可。
     * @param messages  会话中需要发送已读回执的消息列表
     * @param callback  事件回调。SDK 从 5.3.1 版本开始支持 callback 方式回调。从 5.4.0
     * 版本废弃该接口的其他回调方式，预计将在 6.x 版本删除此其他回调方式。如果传入了 callback 参数，仅触发
     * callback 回调。
     * @return 当次接口操作的状态码。0 代表调用成功 具体结果需要实现接口回调，非 0 代表当前接口调用操作失败，不会触发接口回调，详细错误参考错误码
     * @listener [onGroupReadReceiptResponseSent]
     */
    sendGroupReadReceiptResponse(targetId, channelId, messages, callback) {
      if (!validate("targetId", targetId, AssertRules.STRING, true) || !validate("channelId", channelId, AssertRules.ONLY_STRING, false) || !validate("messages", messages, AssertRules.ARRAY, true)) {
        return paramErrorPromise;
      }
      let resultCallback;
      if (callback) {
        resultCallback = (res) => {
          var _a;
          if (res.callbackName === "onGroupReadReceiptResponseSent") {
            let { code, message } = res;
            (_a = callback.onGroupReadReceiptResponseSent) == null ? void 0 : _a.call(callback, { code, message });
          }
        };
      }
      return this._invokeMethod("sendGroupReadReceiptResponse", resultCallback, { targetId, channelId, messages });
    }
    /**
     * 更新消息扩展信息
     * 每条消息携带扩展信息键值对最大值 300个，单次设置扩展信息键值对最大值 20个
     * @param messageUId 消息的 messageUid，可在消息对象中获取，且只有发送成功的消息才会有值
     * @param expansion  要更新的消息扩展信息键值对，类型是 HashMap；Key 支持大小写英文字母、数字、部分特殊符号 + = - _
     * 的组合方式，不支持汉字。Value 可以输入空格
     * @param callback   事件回调。SDK 从 5.3.1 版本开始支持 callback 方式回调。从 5.4.0
     * 版本废弃该接口的其他回调方式，预计将在 6.x 版本删除此其他回调方式。如果传入了 callback 参数，仅触发
     * callback 回调。
     * @return 当次接口操作的状态码。0 代表调用成功 具体结果需要实现接口回调，非 0 代表当前接口调用操作失败，不会触发接口回调，详细错误参考错误码
     * @listener [onMessageExpansionUpdated]
     */
    updateMessageExpansion(messageUId, expansion, callback) {
      if (!validate("messageUId", messageUId, AssertRules.STRING, true)) {
        return paramErrorPromise;
      }
      let resultCallback;
      if (callback) {
        resultCallback = (res) => {
          var _a;
          if (res.callbackName === "onMessageExpansionUpdated") {
            let { code } = res;
            (_a = callback.onMessageExpansionUpdated) == null ? void 0 : _a.call(callback, { code });
          }
        };
      }
      return this._invokeMethod("updateMessageExpansion", resultCallback, { messageUId, expansion });
    }
    /**
     * 删除消息扩展信息中特定的键值对
     * @param messageUId 消息的 messageUid，可在消息对象中获取，且只有发送成功的消息才会有值
     * @param keys       消息扩展信息中待删除的 key 的列表，类型是 ArrayList
     * @param callback   事件回调。SDK 从 5.3.1 版本开始支持 callback 方式回调。从 5.4.0
     * 版本废弃该接口的其他回调方式，预计将在 6.x 版本删除此其他回调方式。如果传入了 callback 参数，仅触发
     * callback 回调。
     * @return 当次接口操作的状态码。0 代表调用成功 具体结果需要实现接口回调，非 0 代表当前接口调用操作失败，不会触发接口回调，详细错误参考错误码
     * @listener [onMessageExpansionForKeysRemoved]
     */
    removeMessageExpansionForKeys(messageUId, keys, callback) {
      if (!validate("messageUId", messageUId, AssertRules.STRING, true) || !validate("keys", keys, AssertRules.ARRAY, true)) {
        return paramErrorPromise;
      }
      let resultCallback;
      if (callback) {
        resultCallback = (res) => {
          var _a;
          if (res.callbackName === "onMessageExpansionForKeysRemoved") {
            let { code } = res;
            (_a = callback.onMessageExpansionForKeysRemoved) == null ? void 0 : _a.call(callback, { code });
          }
        };
      }
      return this._invokeMethod("removeMessageExpansionForKeys", resultCallback, { messageUId, keys });
    }
    /**
     * 设置消息发送状态。
     * @param messageId  消息的 messageId，可在消息对象中获取
     * @param sentStatus 要修改的状态
     * @param callback   事件回调。SDK 从 5.3.1 版本开始支持 callback 方式回调。从 5.4.0
     * 版本废弃该接口的其他回调方式，预计将在 6.x 版本删除此其他回调方式。如果传入了 callback 参数，仅触发
     * callback 回调。
     * @return 当次接口操作的状态码。0 代表调用成功 具体结果需要实现接口回调，非 0 代表当前接口调用操作失败，不会触发接口回调，详细错误参考错误码
     * @listener [onMessageSentStatusChanged]
     */
    changeMessageSentStatus(messageId, sentStatus, callback) {
      if (!validate("messageId", messageId, AssertRules.NUMBER, true) || !validate("sentStatus", sentStatus, AssertRules.NUMBER, true)) {
        return paramErrorPromise;
      }
      let resultCallback;
      if (callback) {
        resultCallback = (res) => {
          var _a;
          if (res.callbackName === "onMessageSentStatusChanged") {
            let { code } = res;
            (_a = callback.onMessageSentStatusChanged) == null ? void 0 : _a.call(callback, { code });
          }
        };
      }
      return this._invokeMethod("changeMessageSentStatus", resultCallback, { messageId, sentStatus });
    }
    /**
     * 设置消息接收状态。
     * @param messageId      消息的 messageId，可在消息对象中获取
     * @param receivedStatus 要修改的状态
     * @param callback       事件回调。SDK 从 5.3.1 版本开始支持 callback 方式回调。从 5.4.0
     * 版本废弃该接口的其他回调方式，预计将在 6.x 版本删除此其他回调方式。如果传入了 callback
     * 参数，仅触发 callback 回调。
     * @return 当次接口操作的状态码。0 代表调用成功 具体结果需要实现接口回调，非 0 代表当前接口调用操作失败，不会触发接口回调，详细错误参考错误码
     * @listener [onMessageReceiveStatusChanged]
     */
    changeMessageReceiveStatus(messageId, receivedStatus, callback) {
      if (!validate("messageId", messageId, AssertRules.NUMBER, true) || !validate("receivedStatus", receivedStatus, AssertRules.NUMBER, true)) {
        return paramErrorPromise;
      }
      let resultCallback;
      if (callback) {
        resultCallback = (res) => {
          var _a;
          if (res.callbackName === "onMessageReceiveStatusChanged") {
            let { code } = res;
            (_a = callback.onMessageReceiveStatusChanged) == null ? void 0 : _a.call(callback, { code });
          }
        };
      }
      return this._invokeMethod("changeMessageReceiveStatus", resultCallback, { messageId, receivedStatus });
    }
    /**
     * 加入聊天室。
     * @param targetId     聊天室会话 ID
     * @param messageCount 进入聊天室拉取消息数目，-1 时不拉取任何消息，0 时拉取 10 条消息，最多只能拉取 50
     * @param autoCreate   是否创建聊天室，TRUE 如果聊天室不存在，sdk 会创建聊天室并加入，如果已存在，则直接加入
     * @param callback     事件回调。SDK 从 5.3.1 版本开始支持 callback 方式回调。从 5.4.0
     * 版本废弃该接口的其他回调方式，预计将在 6.x 版本删除此其他回调方式。如果传入了 callback 参数，仅触发
     * callback 回调。
     * @return 当次接口操作的状态码。0 代表调用成功 具体结果需要实现接口回调，非 0 代表当前接口调用操作失败，不会触发接口回调，详细错误参考错误码
     * @listener [onChatRoomJoined]
     */
    joinChatRoom(targetId, messageCount, autoCreate, callback) {
      if (!validate("targetId", targetId, AssertRules.STRING, true) || !validate("messageCount", messageCount, AssertRules.NUMBER, true) || !validate("autoCreate", autoCreate, AssertRules.BOOLEAN, true)) {
        return paramErrorPromise;
      }
      let resultCallback;
      if (callback) {
        resultCallback = (res) => {
          var _a;
          if (res.callbackName === "onChatRoomJoined") {
            let { code, targetId: targetId2 } = res;
            (_a = callback.onChatRoomJoined) == null ? void 0 : _a.call(callback, { code, targetId: targetId2 });
          }
        };
      }
      return this._invokeMethod("joinChatRoom", resultCallback, { targetId, messageCount, autoCreate });
    }
    /**
     * 退出聊天室。
     * @param targetId 聊天室会话 ID
     * @param callback 事件回调。SDK 从 5.3.1 版本开始支持 callback 方式回调。从 5.4.0
     * 版本废弃该接口的其他回调方式，预计将在 6.x 版本删除此其他回调方式。如果传入了 callback 参数，仅触发
     * callback 回调。
     * @return 当次接口操作的状态码。0 代表调用成功 具体结果需要实现接口回调，非 0 代表当前接口调用操作失败，不会触发接口回调，详细错误参考错误码
     * @listener [onChatRoomLeft]
     */
    leaveChatRoom(targetId, callback) {
      if (!validate("targetId", targetId, AssertRules.STRING, true)) {
        return paramErrorPromise;
      }
      let resultCallback;
      if (callback) {
        resultCallback = (res) => {
          var _a;
          if (res.callbackName === "onChatRoomLeft") {
            let { code, targetId: targetId2 } = res;
            (_a = callback.onChatRoomLeft) == null ? void 0 : _a.call(callback, { code, targetId: targetId2 });
          }
        };
      }
      return this._invokeMethod("leaveChatRoom", resultCallback, { targetId });
    }
    /**
     * 加载聊天室历史消息记录。
     * 注：必须先开通聊天室消息云存储功能。
     * @param targetId  聊天室会话 ID
     * @param timestamp 起始的消息发送时间戳
     * @param order     拉取顺序 0:倒序，1:正序
     * @param count     要获取的消息数量，0 < count ≤ 50。
     * @return 当次接口操作的状态码。0 代表调用成功 具体结果需要实现接口回调，非 0 代表当前接口调用操作失败，不会触发接口回调，详细错误参考错误码
     * @listener [onChatRoomMessagesLoaded]
     * @deprecated 用
     * {@link #getChatRoomMessages(String, long, RCIMIWTimeOrder, int, IRCIMIWGetChatRoomMessagesCallback)}
     * 代替， 预计将在 6.x 版本删除此接口。
     */
    loadChatRoomMessages(targetId, timestamp, order, count) {
      if (!validate("targetId", targetId, AssertRules.STRING, true) || !validate("timestamp", timestamp, AssertRules.NUMBER, true) || !validate("order", order, AssertRules.NUMBER, true) || !validate("count", count, AssertRules.NUMBER, true)) {
        return paramErrorPromise;
      }
      let resultCallback;
      return this._invokeMethod("loadChatRoomMessages", resultCallback, { targetId, timestamp, order, count });
    }
    /**
     * 获取聊天室历史消息记录。
     * 注：必须先开通聊天室消息云存储功能。
     * @param targetId  聊天室会话 ID
     * @param timestamp 起始的消息发送时间戳
     * @param order     拉取顺序 0:倒序，1:正序
     * @param count     要获取的消息数量，0 < count ≤ 50。
     * @param callback  事件回调。
     * @return 当次接口操作的状态码。0 代表调用成功 具体结果需要实现接口回调，非 0 代表当前接口调用操作失败，不会触发接口回调，详细错误参考错误码
     */
    getChatRoomMessages(targetId, timestamp, order, count, callback) {
      if (!validate("targetId", targetId, AssertRules.STRING, true) || !validate("timestamp", timestamp, AssertRules.NUMBER, true) || !validate("order", order, AssertRules.NUMBER, true) || !validate("count", count, AssertRules.NUMBER, true)) {
        return paramErrorPromise;
      }
      let resultCallback;
      if (callback) {
        resultCallback = (res) => {
          var _a, _b;
          if (res.callbackName === "onSuccess") {
            let { t } = res;
            (_a = callback.onSuccess) == null ? void 0 : _a.call(callback, { t });
          }
          if (res.callbackName === "onError") {
            let { code } = res;
            (_b = callback.onError) == null ? void 0 : _b.call(callback, { code });
          }
        };
      }
      return this._invokeMethod("getChatRoomMessages", resultCallback, { targetId, timestamp, order, count });
    }
    /**
     * 设置聊天室自定义属性。
     * @param targetId       聊天室会话 ID
     * @param key            聊天室属性名称，Key 支持大小写英文字母、数字、部分特殊符号 + = - _ 的组合方式，最大长度 128
     * 个字符
     * @param value          聊天室属性对应的值，最大长度 4096 个字符
     * @param deleteWhenLeft 用户掉线或退出时，是否自动删除该 Key、Value 值
     * @param overwrite      如果当前 key 存在，是否进行覆盖
     * @param callback       事件回调。SDK 从 5.3.1 版本开始支持 callback 方式回调。从 5.4.0
     * 版本废弃该接口的其他回调方式，预计将在 6.x 版本删除此其他回调方式。如果传入了 callback
     * 参数，仅触发 callback 回调。
     * @return 当次接口操作的状态码。0 代表调用成功 具体结果需要实现接口回调，非 0 代表当前接口调用操作失败，不会触发接口回调，详细错误参考错误码
     * @listener [onChatRoomEntryAdded]
     */
    addChatRoomEntry(targetId, key, value, deleteWhenLeft, overwrite, callback) {
      if (!validate("targetId", targetId, AssertRules.STRING, true) || !validate("key", key, AssertRules.STRING, true) || !validate("value", value, AssertRules.STRING, true) || !validate("deleteWhenLeft", deleteWhenLeft, AssertRules.BOOLEAN, true) || !validate("overwrite", overwrite, AssertRules.BOOLEAN, true)) {
        return paramErrorPromise;
      }
      let resultCallback;
      if (callback) {
        resultCallback = (res) => {
          var _a;
          if (res.callbackName === "onChatRoomEntryAdded") {
            let { code } = res;
            (_a = callback.onChatRoomEntryAdded) == null ? void 0 : _a.call(callback, { code });
          }
        };
      }
      return this._invokeMethod("addChatRoomEntry", resultCallback, {
        targetId,
        key,
        value,
        deleteWhenLeft,
        overwrite
      });
    }
    /**
     * 批量设置聊天室自定义属性
     * @param targetId       聊天室会话 ID
     * @param entries        聊天室属性
     * @param deleteWhenLeft 用户掉线或退出时，是否自动删除该 Key、Value 值
     * @param overwrite      是否强制覆盖
     * @param callback       事件回调。SDK 从 5.3.1 版本开始支持 callback 方式回调。从 5.4.0
     * 版本废弃该接口的其他回调方式，预计将在 6.x 版本删除此其他回调方式。如果传入了 callback
     * 参数，仅触发 callback 回调。
     * @return 当次接口操作的状态码。0 代表调用成功 具体结果需要实现接口回调，非 0 代表当前接口调用操作失败，不会触发接口回调，详细错误参考错误码
     * @listener [onChatRoomEntriesAdded]
     */
    addChatRoomEntries(targetId, entries, deleteWhenLeft, overwrite, callback) {
      if (!validate("targetId", targetId, AssertRules.STRING, true) || !validate("deleteWhenLeft", deleteWhenLeft, AssertRules.BOOLEAN, true) || !validate("overwrite", overwrite, AssertRules.BOOLEAN, true)) {
        return paramErrorPromise;
      }
      let resultCallback;
      if (callback) {
        resultCallback = (res) => {
          var _a;
          if (res.callbackName === "onChatRoomEntriesAdded") {
            let { code, errors } = res;
            (_a = callback.onChatRoomEntriesAdded) == null ? void 0 : _a.call(callback, { code, errors });
          }
        };
      }
      return this._invokeMethod("addChatRoomEntries", resultCallback, {
        targetId,
        entries,
        deleteWhenLeft,
        overwrite
      });
    }
    /**
     * 加载聊天室单个属性。
     * @param targetId 聊天室会话 ID
     * @param key      聊天室属性键值
     * @return 当次接口操作的状态码。0 代表调用成功 具体结果需要实现接口回调，非 0 代表当前接口调用操作失败，不会触发接口回调，详细错误参考错误码
     * @listener [onChatRoomEntryLoaded]
     * @deprecated 用
     * {@link #getChatRoomEntry(String, String, IRCIMIWGetChatRoomEntryCallback)}
     * 代替， 预计将在 6.x 版本删除此接口。
     */
    loadChatRoomEntry(targetId, key) {
      if (!validate("targetId", targetId, AssertRules.STRING, true) || !validate("key", key, AssertRules.STRING, true)) {
        return paramErrorPromise;
      }
      let resultCallback;
      return this._invokeMethod("loadChatRoomEntry", resultCallback, { targetId, key });
    }
    /**
     * 获取聊天室单个属性。
     * @param targetId 聊天室会话 ID
     * @param key      聊天室属性键值
     * @param callback 事件回调。
     * @return 当次接口操作的状态码。0 代表调用成功 具体结果需要实现接口回调，非 0 代表当前接口调用操作失败，不会触发接口回调，详细错误参考错误码
     */
    getChatRoomEntry(targetId, key, callback) {
      if (!validate("targetId", targetId, AssertRules.STRING, true) || !validate("key", key, AssertRules.STRING, true)) {
        return paramErrorPromise;
      }
      let resultCallback;
      if (callback) {
        resultCallback = (res) => {
          var _a, _b;
          if (res.callbackName === "onSuccess") {
            let { t } = res;
            (_a = callback.onSuccess) == null ? void 0 : _a.call(callback, { t });
          }
          if (res.callbackName === "onError") {
            let { code } = res;
            (_b = callback.onError) == null ? void 0 : _b.call(callback, { code });
          }
        };
      }
      return this._invokeMethod("getChatRoomEntry", resultCallback, { targetId, key });
    }
    /**
     * 加载聊天室所有属性。
     * @param targetId 聊天室会话 ID
     * @return 当次接口操作的状态码。0 代表调用成功 具体结果需要实现接口回调，非 0 代表当前接口调用操作失败，不会触发接口回调，详细错误参考错误码
     * @listener [onChatRoomAllEntriesLoaded]
     * @deprecated 用
     * {@link #getChatRoomAllEntries(String, IRCIMIWGetChatRoomAllEntriesCallback)}
     * 代替， 预计将在 6.x 版本删除此接口。
     */
    loadChatRoomAllEntries(targetId) {
      if (!validate("targetId", targetId, AssertRules.STRING, true)) {
        return paramErrorPromise;
      }
      let resultCallback;
      return this._invokeMethod("loadChatRoomAllEntries", resultCallback, { targetId });
    }
    /**
     * 获取聊天室所有属性。
     * @param targetId 聊天室会话 ID
     * @param callback 事件回调。
     * @return 当次接口操作的状态码。0 代表调用成功 具体结果需要实现接口回调，非 0 代表当前接口调用操作失败，不会触发接口回调，详细错误参考错误码
     */
    getChatRoomAllEntries(targetId, callback) {
      if (!validate("targetId", targetId, AssertRules.STRING, true)) {
        return paramErrorPromise;
      }
      let resultCallback;
      if (callback) {
        resultCallback = (res) => {
          var _a, _b;
          if (res.callbackName === "onSuccess") {
            let { t } = res;
            (_a = callback.onSuccess) == null ? void 0 : _a.call(callback, { t });
          }
          if (res.callbackName === "onError") {
            let { code } = res;
            (_b = callback.onError) == null ? void 0 : _b.call(callback, { code });
          }
        };
      }
      return this._invokeMethod("getChatRoomAllEntries", resultCallback, { targetId });
    }
    /**
     * 删除聊天室自定义属性。
     * @param targetId 聊天室会话 ID
     * @param key      聊天室属性键值
     * @param force    是否强制删除
     * @param callback 事件回调。SDK 从 5.3.1 版本开始支持 callback 方式回调。从 5.4.0
     * 版本废弃该接口的其他回调方式，预计将在 6.x 版本删除此其他回调方式。如果传入了 callback 参数，仅触发
     * callback 回调。
     * @return 当次接口操作的状态码。0 代表调用成功 具体结果需要实现接口回调，非 0 代表当前接口调用操作失败，不会触发接口回调，详细错误参考错误码
     * @listener [onChatRoomEntryRemoved]
     */
    removeChatRoomEntry(targetId, key, force, callback) {
      if (!validate("targetId", targetId, AssertRules.STRING, true) || !validate("key", key, AssertRules.STRING, true) || !validate("force", force, AssertRules.BOOLEAN, true)) {
        return paramErrorPromise;
      }
      let resultCallback;
      if (callback) {
        resultCallback = (res) => {
          var _a;
          if (res.callbackName === "onChatRoomEntryRemoved") {
            let { code } = res;
            (_a = callback.onChatRoomEntryRemoved) == null ? void 0 : _a.call(callback, { code });
          }
        };
      }
      return this._invokeMethod("removeChatRoomEntry", resultCallback, { targetId, key, force });
    }
    /**
     * 批量删除聊天室自定义属性
     * @param targetId 聊天室会话 ID
     * @param keys     聊天室属性
     * @param force    是否强制覆盖
     * @param callback 事件回调。SDK 从 5.3.1 版本开始支持 callback 方式回调。从 5.4.0
     * 版本废弃该接口的其他回调方式，预计将在 6.x 版本删除此其他回调方式。如果传入了 callback 参数，仅触发
     * callback 回调。
     * @return 当次接口操作的状态码。0 代表调用成功 具体结果需要实现接口回调，非 0 代表当前接口调用操作失败，不会触发接口回调，详细错误参考错误码
     * @listener [onChatRoomEntriesRemoved]
     */
    removeChatRoomEntries(targetId, keys, force, callback) {
      if (!validate("targetId", targetId, AssertRules.STRING, true) || !validate("keys", keys, AssertRules.ARRAY, true) || !validate("force", force, AssertRules.BOOLEAN, true)) {
        return paramErrorPromise;
      }
      let resultCallback;
      if (callback) {
        resultCallback = (res) => {
          var _a;
          if (res.callbackName === "onChatRoomEntriesRemoved") {
            let { code } = res;
            (_a = callback.onChatRoomEntriesRemoved) == null ? void 0 : _a.call(callback, { code });
          }
        };
      }
      return this._invokeMethod("removeChatRoomEntries", resultCallback, { targetId, keys, force });
    }
    /**
     * 将某个用户加入黑名单。
     * 当你把对方加入黑名单后，对方再发消息时，就会提示“已被加入黑名单，消息发送失败”。 但你依然可以发消息个对方。
     * @param userId   用户 Id
     * @param callback 事件回调。SDK 从 5.3.1 版本开始支持 callback 方式回调。从 5.4.0
     * 版本废弃该接口的其他回调方式，预计将在 6.x 版本删除此其他回调方式。如果传入了 callback 参数，仅触发
     * callback 回调。
     * @return 当次接口操作的状态码。0 代表调用成功 具体结果需要实现接口回调，非 0 代表当前接口调用操作失败，不会触发接口回调，详细错误参考错误码
     * @listener [onBlacklistAdded]
     */
    addToBlacklist(userId, callback) {
      if (!validate("userId", userId, AssertRules.STRING, true)) {
        return paramErrorPromise;
      }
      let resultCallback;
      if (callback) {
        resultCallback = (res) => {
          var _a;
          if (res.callbackName === "onBlacklistAdded") {
            let { code, userId: userId2 } = res;
            (_a = callback.onBlacklistAdded) == null ? void 0 : _a.call(callback, { code, userId: userId2 });
          }
        };
      }
      return this._invokeMethod("addToBlacklist", resultCallback, { userId });
    }
    /**
     * 将某个用户从黑名单中移出。
     * @param userId   用户 Id
     * @param callback 事件回调。SDK 从 5.3.1 版本开始支持 callback 方式回调。从 5.4.0
     * 版本废弃该接口的其他回调方式，预计将在 6.x 版本删除此其他回调方式。如果传入了 callback 参数，仅触发
     * callback 回调。
     * @return 当次接口操作的状态码。0 代表调用成功 具体结果需要实现接口回调，非 0 代表当前接口调用操作失败，不会触发接口回调，详细错误参考错误码
     * @listener [onBlacklistRemoved]
     */
    removeFromBlacklist(userId, callback) {
      if (!validate("userId", userId, AssertRules.STRING, true)) {
        return paramErrorPromise;
      }
      let resultCallback;
      if (callback) {
        resultCallback = (res) => {
          var _a;
          if (res.callbackName === "onBlacklistRemoved") {
            let { code, userId: userId2 } = res;
            (_a = callback.onBlacklistRemoved) == null ? void 0 : _a.call(callback, { code, userId: userId2 });
          }
        };
      }
      return this._invokeMethod("removeFromBlacklist", resultCallback, { userId });
    }
    /**
     * 获取某用户是否在黑名单中。
     * @param userId 用户 Id
     * @return 当次接口操作的状态码。0 代表调用成功 具体结果需要实现接口回调，非 0 代表当前接口调用操作失败，不会触发接口回调，详细错误参考错误码
     * @listener [onBlacklistStatusLoaded]
     * @deprecated 用
     * {@link #getBlacklistStatus(String, IRCIMIWGetBlacklistStatusCallback)}
     * 代替， 预计将在 6.x 版本删除此接口。
     */
    loadBlacklistStatus(userId) {
      if (!validate("userId", userId, AssertRules.STRING, true)) {
        return paramErrorPromise;
      }
      let resultCallback;
      return this._invokeMethod("loadBlacklistStatus", resultCallback, { userId });
    }
    /**
     * 获取某用户是否在黑名单中。
     * @param userId   用户 Id
     * @param callback 事件回调。
     * @return 当次接口操作的状态码。0 代表调用成功 具体结果需要实现接口回调，非 0 代表当前接口调用操作失败，不会触发接口回调，详细错误参考错误码
     */
    getBlacklistStatus(userId, callback) {
      if (!validate("userId", userId, AssertRules.STRING, true)) {
        return paramErrorPromise;
      }
      let resultCallback;
      if (callback) {
        resultCallback = (res) => {
          var _a, _b;
          if (res.callbackName === "onSuccess") {
            let { t } = res;
            (_a = callback.onSuccess) == null ? void 0 : _a.call(callback, { t });
          }
          if (res.callbackName === "onError") {
            let { code } = res;
            (_b = callback.onError) == null ? void 0 : _b.call(callback, { code });
          }
        };
      }
      return this._invokeMethod("getBlacklistStatus", resultCallback, { userId });
    }
    /**
     * 加载当前用户设置的黑名单列表。
     * @return 当次接口操作的状态码。0 代表调用成功 具体结果需要实现接口回调，非 0 代表当前接口调用操作失败，不会触发接口回调，详细错误参考错误码
     * @listener [onBlacklistLoaded]
     * @deprecated 用 {@link #getBlacklist(IRCIMIWGetBlacklistCallback)} 代替， 预计将在 6.x
     * 版本删除此接口。
     */
    loadBlacklist() {
      let resultCallback;
      return this._invokeMethod("loadBlacklist", resultCallback, {});
    }
    /**
     * 获取当前用户设置的黑名单列表。
     * @param callback 事件回调。
     * @return 当次接口操作的状态码。0 代表调用成功 具体结果需要实现接口回调，非 0 代表当前接口调用操作失败，不会触发接口回调，详细错误参考错误码
     */
    getBlacklist(callback) {
      let resultCallback;
      if (callback) {
        resultCallback = (res) => {
          var _a, _b;
          if (res.callbackName === "onSuccess") {
            let { t } = res;
            (_a = callback.onSuccess) == null ? void 0 : _a.call(callback, { t });
          }
          if (res.callbackName === "onError") {
            let { code } = res;
            (_b = callback.onError) == null ? void 0 : _b.call(callback, { code });
          }
        };
      }
      return this._invokeMethod("getBlacklist", resultCallback, {});
    }
    /**
     * 根据关键字搜索指定会话中的消息。
     * @param type      会话类型
     * @param targetId  会话 ID
     * @param channelId 频道 ID，仅支持超级群使用，其他会话类型传 null 即可。
     * @param keyword   搜索的关键字
     * @param startTime 查询 beginTime 之前的消息， 传 0 时从最新消息开始搜索，从该时间往前搜索。
     * @param count     查询的数量，0 < count ≤ 50。
     * @param callback  事件回调。SDK 从 5.3.1 版本开始支持 callback 方式回调。从 5.4.0
     * 版本废弃该接口的其他回调方式，预计将在 6.x 版本删除此其他回调方式。如果传入了 callback 参数，仅触发
     * callback 回调。
     * @return 当次接口操作的状态码。0 代表调用成功 具体结果需要实现接口回调，非 0 代表当前接口调用操作失败，不会触发接口回调，详细错误参考错误码
     * @listener [onMessagesSearched]
     */
    searchMessages(type, targetId, channelId, keyword, startTime, count, callback) {
      if (!validate("type", type, AssertRules.NUMBER, true) || !validate("targetId", targetId, AssertRules.STRING, true) || !validate("channelId", channelId, AssertRules.ONLY_STRING, false) || !validate("keyword", keyword, AssertRules.STRING, true) || !validate("startTime", startTime, AssertRules.NUMBER, true) || !validate("count", count, AssertRules.NUMBER, true)) {
        return paramErrorPromise;
      }
      let resultCallback;
      if (callback) {
        resultCallback = (res) => {
          var _a, _b;
          if (res.callbackName === "onSuccess") {
            let { t } = res;
            (_a = callback.onSuccess) == null ? void 0 : _a.call(callback, { t });
          }
          if (res.callbackName === "onError") {
            let { code } = res;
            (_b = callback.onError) == null ? void 0 : _b.call(callback, { code });
          }
        };
      }
      return this._invokeMethod("searchMessages", resultCallback, {
        type,
        targetId,
        channelId,
        keyword,
        startTime,
        count
      });
    }
    /**
     * 根据关键字搜索指定会话中某个时间段的消息。
     * @param type      会话类型
     * @param targetId  会话 ID
     * @param channelId 频道 ID，仅支持超级群使用，其他会话类型传 null 即可。
     * @param keyword   搜索的关键字
     * @param startTime 开始时间
     * @param endTime   结束时间
     * @param offset    偏移量
     * @param count     返回的搜索结果数量，0 < count ≤ 50。
     * @param callback  事件回调。SDK 从 5.3.1 版本开始支持 callback 方式回调。从 5.4.0
     * 版本废弃该接口的其他回调方式，预计将在 6.x 版本删除此其他回调方式。如果传入了 callback 参数，仅触发
     * callback 回调。
     * @return 当次接口操作的状态码。0 代表调用成功 具体结果需要实现接口回调，非 0 代表当前接口调用操作失败，不会触发接口回调，详细错误参考错误码
     * @listener [onMessagesSearchedByTimeRange]
     */
    searchMessagesByTimeRange(type, targetId, channelId, keyword, startTime, endTime, offset, count, callback) {
      if (!validate("type", type, AssertRules.NUMBER, true) || !validate("targetId", targetId, AssertRules.STRING, true) || !validate("channelId", channelId, AssertRules.ONLY_STRING, false) || !validate("keyword", keyword, AssertRules.STRING, true) || !validate("startTime", startTime, AssertRules.NUMBER, true) || !validate("endTime", endTime, AssertRules.NUMBER, true) || !validate("offset", offset, AssertRules.NUMBER, true) || !validate("count", count, AssertRules.NUMBER, true)) {
        return paramErrorPromise;
      }
      let resultCallback;
      if (callback) {
        resultCallback = (res) => {
          var _a, _b;
          if (res.callbackName === "onSuccess") {
            let { t } = res;
            (_a = callback.onSuccess) == null ? void 0 : _a.call(callback, { t });
          }
          if (res.callbackName === "onError") {
            let { code } = res;
            (_b = callback.onError) == null ? void 0 : _b.call(callback, { code });
          }
        };
      }
      return this._invokeMethod("searchMessagesByTimeRange", resultCallback, {
        type,
        targetId,
        channelId,
        keyword,
        startTime,
        endTime,
        offset,
        count
      });
    }
    /**
     * 根据用户 id 搜索指定会话中的消息。
     * @param userId    用户 id
     * @param type      会话类型
     * @param targetId  会话 ID
     * @param channelId 频道 ID，仅支持超级群使用，其他会话类型传 null 即可。
     * @param startTime 查询记录的起始时间， 传 0 时从最新消息开始搜索，从该时间往前搜索。
     * @param count     返回的搜索结果数量 0 < count ≤ 50。
     * @param callback  事件回调。SDK 从 5.3.1 版本开始支持 callback 方式回调。从 5.4.0
     * 版本废弃该接口的其他回调方式，预计将在 6.x 版本删除此其他回调方式。如果传入了 callback 参数，仅触发
     * callback 回调。
     * @return 当次接口操作的状态码。0 代表调用成功 具体结果需要实现接口回调，非 0 代表当前接口调用操作失败，不会触发接口回调，详细错误参考错误码
     * @listener [onMessagesSearchedByUserId]
     */
    searchMessagesByUserId(userId, type, targetId, channelId, startTime, count, callback) {
      if (!validate("userId", userId, AssertRules.STRING, true) || !validate("type", type, AssertRules.NUMBER, true) || !validate("targetId", targetId, AssertRules.STRING, true) || !validate("channelId", channelId, AssertRules.ONLY_STRING, false) || !validate("startTime", startTime, AssertRules.NUMBER, true) || !validate("count", count, AssertRules.NUMBER, true)) {
        return paramErrorPromise;
      }
      let resultCallback;
      if (callback) {
        resultCallback = (res) => {
          var _a, _b;
          if (res.callbackName === "onSuccess") {
            let { t } = res;
            (_a = callback.onSuccess) == null ? void 0 : _a.call(callback, { t });
          }
          if (res.callbackName === "onError") {
            let { code } = res;
            (_b = callback.onError) == null ? void 0 : _b.call(callback, { code });
          }
        };
      }
      return this._invokeMethod("searchMessagesByUserId", resultCallback, {
        userId,
        type,
        targetId,
        channelId,
        startTime,
        count
      });
    }
    /**
     * 根据关键字搜索指定会话中，指定消息类型的本地历史消息。
     * @param type         会话类型。
     * @param targetId     会话 ID。
     * @param channelId    消息所属的会话标识。
     * @param messageTypes 消息类型集合。
     * @param keyword      搜索的关键字，非空。
     * @param startTime    查询 startTime 之前的消息（传 0 表示从最新消息开始搜索），单位：毫秒
     * @param count        最大的查询数量，最大 100。
     * @param callback     搜索结果的回调接口
     * @return 当次接口操作的状态码。0 代表调用成功 具体结果通过接口 callback 回调，非 0
     * 代表当前接口调用操作失败，不会触发接口回调，详细错误参考错误码
     */
    searchMessagesByMessageTypes(type, targetId, channelId, messageTypes, keyword, startTime, count, callback) {
      if (!validate("type", type, AssertRules.NUMBER, true) || !validate("targetId", targetId, AssertRules.STRING, true) || !validate("channelId", channelId, AssertRules.ONLY_STRING, false) || !validate("messageTypes", messageTypes, AssertRules.NUMBER_ARRAY, true) || !validate("keyword", keyword, AssertRules.STRING, true) || !validate("startTime", startTime, AssertRules.NUMBER, true) || !validate("count", count, AssertRules.NUMBER, true)) {
        return paramErrorPromise;
      }
      let resultCallback;
      if (callback) {
        resultCallback = (res) => {
          var _a, _b;
          if (res.callbackName === "onSuccess") {
            let { t } = res;
            (_a = callback.onSuccess) == null ? void 0 : _a.call(callback, { t });
          }
          if (res.callbackName === "onError") {
            let { code } = res;
            (_b = callback.onError) == null ? void 0 : _b.call(callback, { code });
          }
        };
      }
      return this._invokeMethod("searchMessagesByMessageTypes", resultCallback, {
        type,
        targetId,
        channelId,
        messageTypes,
        keyword,
        startTime,
        count
      });
    }
    /**
     * 根据关键字搜索会话。
     * @param conversationTypes 会话类型集合
     * @param channelId         频道 ID，仅支持超级群使用，其他会话类型传 null 即可。
     * @param messageTypes      搜索的消息类型
     * @param keyword           搜索的关键字。
     * @param callback          事件回调。SDK 从 5.3.1 版本开始支持 callback 方式回调。从 5.4.0
     * 版本废弃该接口的其他回调方式，预计将在 6.x 版本删除此其他回调方式。如果传入了 callback
     * 参数，仅触发 callback 回调。
     * @return 当次接口操作的状态码。0 代表调用成功 具体结果需要实现接口回调，非 0 代表当前接口调用操作失败，不会触发接口回调，详细错误参考错误码
     * @listener [onConversationsSearched]
     */
    searchConversations(conversationTypes, channelId, messageTypes, keyword, callback) {
      if (!validate("conversationTypes", conversationTypes, AssertRules.NUMBER_ARRAY, true) || !validate("channelId", channelId, AssertRules.ONLY_STRING, false) || !validate("messageTypes", messageTypes, AssertRules.NUMBER_ARRAY, true) || !validate("keyword", keyword, AssertRules.STRING, true)) {
        return paramErrorPromise;
      }
      let resultCallback;
      if (callback) {
        resultCallback = (res) => {
          var _a, _b;
          if (res.callbackName === "onSuccess") {
            let { t } = res;
            (_a = callback.onSuccess) == null ? void 0 : _a.call(callback, { t });
          }
          if (res.callbackName === "onError") {
            let { code } = res;
            (_b = callback.onError) == null ? void 0 : _b.call(callback, { code });
          }
        };
      }
      return this._invokeMethod("searchConversations", resultCallback, {
        conversationTypes,
        channelId,
        messageTypes,
        keyword
      });
    }
    /**
     * 屏蔽某个时间段的消息提醒
     * @param startTime   开始消息免打扰时间，格式为 HH:MM:SS
     * @param spanMinutes 需要消息免打扰分钟数，0 < spanMinutes < 1440（ 比如，您设置的起始时间是 00：00，
     * 结束时间为 01:00，则 spanMinutes 为 60 分钟。设置为 1439 代表全天免打扰 （23
     * 60 + 59 = 1439 ））
     * @param level       消息通知级别
     * @param callback    事件回调。SDK 从 5.3.1 版本开始支持 callback 方式回调。从 5.4.0
     * 版本废弃该接口的其他回调方式，预计将在 6.x 版本删除此其他回调方式。如果传入了 callback 参数，仅触发
     * callback 回调。
     * @return 当次接口操作的状态码。0 代表调用成功 具体结果需要实现接口回调，非 0 代表当前接口调用操作失败，不会触发接口回调，详细错误参考错误码
     * @listener [onNotificationQuietHoursChanged]
     */
    changeNotificationQuietHours(startTime, spanMinutes, level, callback) {
      if (!validate("startTime", startTime, AssertRules.STRING, true) || !validate("spanMinutes", spanMinutes, AssertRules.NUMBER, true) || !validate("level", level, AssertRules.NUMBER, true)) {
        return paramErrorPromise;
      }
      let resultCallback;
      if (callback) {
        resultCallback = (res) => {
          var _a;
          if (res.callbackName === "onNotificationQuietHoursChanged") {
            let { code } = res;
            (_a = callback.onNotificationQuietHoursChanged) == null ? void 0 : _a.call(callback, { code });
          }
        };
      }
      return this._invokeMethod("changeNotificationQuietHours", resultCallback, { startTime, spanMinutes, level });
    }
    /**
     * 删除已设置的全局时间段消息提醒屏蔽
     * @param callback 事件回调。SDK 从 5.3.1 版本开始支持 callback 方式回调。从 5.4.0
     * 版本废弃该接口的其他回调方式，预计将在 6.x 版本删除此其他回调方式。如果传入了 callback 参数，仅触发
     * callback 回调。
     * @return 当次接口操作的状态码。0 代表调用成功 具体结果需要实现接口回调，非 0 代表当前接口调用操作失败，不会触发接口回调，详细错误参考错误码
     * @listener [onNotificationQuietHoursRemoved]
     */
    removeNotificationQuietHours(callback) {
      let resultCallback;
      if (callback) {
        resultCallback = (res) => {
          var _a;
          if (res.callbackName === "onNotificationQuietHoursRemoved") {
            let { code } = res;
            (_a = callback.onNotificationQuietHoursRemoved) == null ? void 0 : _a.call(callback, { code });
          }
        };
      }
      return this._invokeMethod("removeNotificationQuietHours", resultCallback, {});
    }
    /**
     * 加载已设置的时间段消息提醒屏蔽
     * @return 当次接口操作的状态码。0 代表调用成功 具体结果需要实现接口回调，非 0 代表当前接口调用操作失败，不会触发接口回调，详细错误参考错误码
     * @listener [onNotificationQuietHoursLoaded]
     * @deprecated 用
     * {@link #getNotificationQuietHours(IRCIMIWGetNotificationQuietHoursCallback)}
     * 代替， 预计将在 6.x 版本删除此接口。
     */
    loadNotificationQuietHours() {
      let resultCallback;
      return this._invokeMethod("loadNotificationQuietHours", resultCallback, {});
    }
    /**
     * 获取已设置的时间段消息提醒屏蔽
     * @param callback 事件回调。
     * @return 当次接口操作的状态码。0 代表调用成功 具体结果需要实现接口回调，非 0 代表当前接口调用操作失败，不会触发接口回调，详细错误参考错误码
     */
    getNotificationQuietHours(callback) {
      let resultCallback;
      if (callback) {
        resultCallback = (res) => {
          var _a, _b;
          if (res.callbackName === "onSuccess") {
            let { startTime, spanMinutes, level } = res;
            (_a = callback.onSuccess) == null ? void 0 : _a.call(callback, { startTime, spanMinutes, level });
          }
          if (res.callbackName === "onError") {
            let { code } = res;
            (_b = callback.onError) == null ? void 0 : _b.call(callback, { code });
          }
        };
      }
      return this._invokeMethod("getNotificationQuietHours", resultCallback, {});
    }
    /**
     * 设置会话的消息提醒状态
     * 注：超级群调用该接口，channelId 为空时，相当于设置了 channelId 为空的频道的免打扰，不会屏蔽整个超级群会话下所有频道的免打扰
     * @param type      会话类型。请注意以下限制：*超级群会话类型*：如在 2022.09.01
     * 之前开通超级群业务，默认不支持为单个超级群会话*所有消息*设置免打扰级别（“所有消息”指所有频道中的消息和不属于任何频道的消息）。该接口仅设置指定超级群会话（`targetId`）中*不属于任何频道的消息*的免打扰状态级别。如需修改请提交工单。*聊天室会话类型*：不支持，因为聊天室消息默认不支持消息推送提醒。
     * @param targetId  会话 ID
     * @param channelId 超级群的会话频道 ID。其他类型传 null 即可。如果传入频道
     * ID，则针对该指定频道设置消息免打扰级别。如果不指定频道
     * ID，则对所有超级群消息生效。*注意*：2022.09.01 之前开通超级群业务的客户，如果不指定频道
     * ID，则默认传 ""
     * 空字符串，即仅针对指定超级群会话（`targetId`）中*不属于任何频道的消息*设置免打扰状态级别。如需修改请提交工单。
     * @param level     消息通知级别
     * @param callback  事件回调。SDK 从 5.3.1 版本开始支持 callback 方式回调。从 5.4.0
     * 版本废弃该接口的其他回调方式，预计将在 6.x 版本删除此其他回调方式。如果传入了 callback 参数，仅触发
     * callback 回调。
     * @return 当次接口操作的状态码。0 代表调用成功 具体结果需要实现接口回调，非 0 代表当前接口调用操作失败，不会触发接口回调，详细错误参考错误码
     * @listener [onConversationNotificationLevelChanged]
     */
    changeConversationNotificationLevel(type, targetId, channelId, level, callback) {
      if (!validate("type", type, AssertRules.NUMBER, true) || !validate("targetId", targetId, AssertRules.STRING, true) || !validate("channelId", channelId, AssertRules.ONLY_STRING, false) || !validate("level", level, AssertRules.NUMBER, true)) {
        return paramErrorPromise;
      }
      let resultCallback;
      if (callback) {
        resultCallback = (res) => {
          var _a;
          if (res.callbackName === "onConversationNotificationLevelChanged") {
            let { code } = res;
            (_a = callback.onConversationNotificationLevelChanged) == null ? void 0 : _a.call(callback, { code });
          }
        };
      }
      return this._invokeMethod("changeConversationNotificationLevel", resultCallback, {
        type,
        targetId,
        channelId,
        level
      });
    }
    /**
     * 加载会话的消息提醒状态
     * @param type      会话类型
     * @param targetId  会话 ID
     * @param channelId 频道 ID，仅支持超级群使用，其他会话类型传 null 即可。
     * @return 当次接口操作的状态码。0 代表调用成功 具体结果需要实现接口回调，非 0 代表当前接口调用操作失败，不会触发接口回调，详细错误参考错误码
     * @listener [onConversationNotificationLevelLoaded]
     * @deprecated 用
     * {@link #getConversationNotificationLevel(RCIMIWConversationType, String, String, IRCIMIWGetConversationNotificationLevelCallback)}
     * 代替， 预计将在 6.x 版本删除此接口。
     */
    loadConversationNotificationLevel(type, targetId, channelId) {
      if (!validate("type", type, AssertRules.NUMBER, true) || !validate("targetId", targetId, AssertRules.STRING, true) || !validate("channelId", channelId, AssertRules.ONLY_STRING, false)) {
        return paramErrorPromise;
      }
      let resultCallback;
      return this._invokeMethod("loadConversationNotificationLevel", resultCallback, { type, targetId, channelId });
    }
    /**
     * 获取会话的消息提醒状态
     * @param type      会话类型。请注意以下限制：*超级群会话类型*：如在 2022.09.01
     * 之前开通超级群业务，默认不支持为单个超级群会话*所有消息*设置免打扰级别（“所有消息”指所有频道中的消息和不属于任何频道的消息）。该接口仅设置指定超级群会话（`targetId`）中*不属于任何频道的消息*的免打扰状态级别。如需修改请提交工单。*聊天室会话类型*：不支持，因为聊天室消息默认不支持消息推送提醒。
     * @param targetId  会话 ID
     * @param channelId 超级群的会话频道 ID。其他类型传 null 即可。如果传入频道
     * ID，则针对该指定频道设置消息免打扰级别。如果不指定频道
     * ID，则对所有超级群消息生效。*注意*：2022.09.01 之前开通超级群业务的客户，如果不指定频道
     * ID，则默认传 ""
     * 空字符串，即仅针对指定超级群会话（`targetId`）中*不属于任何频道的消息*设置免打扰状态级别。如需修改请提交工单。
     * @param callback  事件回调。
     * @return 当次接口操作的状态码。0 代表调用成功 具体结果需要实现接口回调，非 0 代表当前接口调用操作失败，不会触发接口回调，详细错误参考错误码
     */
    getConversationNotificationLevel(type, targetId, channelId, callback) {
      if (!validate("type", type, AssertRules.NUMBER, true) || !validate("targetId", targetId, AssertRules.STRING, true) || !validate("channelId", channelId, AssertRules.ONLY_STRING, false)) {
        return paramErrorPromise;
      }
      let resultCallback;
      if (callback) {
        resultCallback = (res) => {
          var _a, _b;
          if (res.callbackName === "onSuccess") {
            let { t } = res;
            (_a = callback.onSuccess) == null ? void 0 : _a.call(callback, { t });
          }
          if (res.callbackName === "onError") {
            let { code } = res;
            (_b = callback.onError) == null ? void 0 : _b.call(callback, { code });
          }
        };
      }
      return this._invokeMethod("getConversationNotificationLevel", resultCallback, { type, targetId, channelId });
    }
    /**
     * 设置会话类型的消息提醒状态
     * 注：如要移除消息提醒状态，设置level为RCIMIWPushNotificationLevelDefault
     * @param type     会话类型
     * @param level    消息通知级别
     * @param callback 事件回调。SDK 从 5.3.1 版本开始支持 callback 方式回调。从 5.4.0
     * 版本废弃该接口的其他回调方式，预计将在 6.x 版本删除此其他回调方式。如果传入了 callback 参数，仅触发
     * callback 回调。
     * @return 当次接口操作的状态码。0 代表调用成功 具体结果需要实现接口回调，非 0 代表当前接口调用操作失败，不会触发接口回调，详细错误参考错误码
     * @listener [onConversationTypeNotificationLevelChanged]
     */
    changeConversationTypeNotificationLevel(type, level, callback) {
      if (!validate("type", type, AssertRules.NUMBER, true) || !validate("level", level, AssertRules.NUMBER, true)) {
        return paramErrorPromise;
      }
      let resultCallback;
      if (callback) {
        resultCallback = (res) => {
          var _a;
          if (res.callbackName === "onConversationTypeNotificationLevelChanged") {
            let { code } = res;
            (_a = callback.onConversationTypeNotificationLevelChanged) == null ? void 0 : _a.call(callback, { code });
          }
        };
      }
      return this._invokeMethod("changeConversationTypeNotificationLevel", resultCallback, { type, level });
    }
    /**
     * 获取会话类型的消息提醒状态
     * @param type 会话类型
     * @return [onConversationTypeNotificationLevelLoaded]
     * @deprecated 用
     * {@link #getConversationTypeNotificationLevel(RCIMIWConversationType, IRCIMIWGetConversationTypeNotificationLevelCallback)}
     * 代替， 预计将在 6.x 版本删除此接口。
     */
    loadConversationTypeNotificationLevel(type) {
      if (!validate("type", type, AssertRules.NUMBER, true)) {
        return paramErrorPromise;
      }
      let resultCallback;
      return this._invokeMethod("loadConversationTypeNotificationLevel", resultCallback, { type });
    }
    /**
     * 获取会话类型的消息提醒状态
     * @param type     会话类型
     * @param callback 事件回调。SDK 从 5.3.1 版本开始支持 callback 方式回调。从 5.4.0
     * 版本废弃该接口的其他回调方式，预计将在 6.x 版本删除此其他回调方式。如果传入了 callback 参数，仅触发
     * callback 回调。
     * @return 当次接口操作的状态码。0 代表调用成功 具体结果需要实现接口回调，非 0 代表当前接口调用操作失败，不会触发接口回调，详细错误参考错误码
     */
    getConversationTypeNotificationLevel(type, callback) {
      if (!validate("type", type, AssertRules.NUMBER, true)) {
        return paramErrorPromise;
      }
      let resultCallback;
      if (callback) {
        resultCallback = (res) => {
          var _a, _b;
          if (res.callbackName === "onSuccess") {
            let { t } = res;
            (_a = callback.onSuccess) == null ? void 0 : _a.call(callback, { t });
          }
          if (res.callbackName === "onError") {
            let { code } = res;
            (_b = callback.onError) == null ? void 0 : _b.call(callback, { code });
          }
        };
      }
      return this._invokeMethod("getConversationTypeNotificationLevel", resultCallback, { type });
    }
    /**
     * 设置超级群的默认消息状态
     * 一般由管理员设置的接口，针对超级群的所有群成员生效，针对超级群下所有频道生效，优先级较低。如果群成员自己超级群的免打扰级别，那么以群成员自己设置的为准。
     * @param targetId 会话 ID
     * @param level    消息通知级别
     * @param callback 事件回调。SDK 从 5.3.1 版本开始支持 callback 方式回调。从 5.4.0
     * 版本废弃该接口的其他回调方式，预计将在 6.x 版本删除此其他回调方式。如果传入了 callback 参数，仅触发
     * callback 回调。
     * @return 当次接口操作的状态码。0 代表调用成功 具体结果需要实现接口回调，非 0 代表当前接口调用操作失败，不会触发接口回调，详细错误参考错误码
     * @listener [onUltraGroupDefaultNotificationLevelChanged]
     */
    changeUltraGroupDefaultNotificationLevel(targetId, level, callback) {
      if (!validate("targetId", targetId, AssertRules.STRING, true) || !validate("level", level, AssertRules.NUMBER, true)) {
        return paramErrorPromise;
      }
      let resultCallback;
      if (callback) {
        resultCallback = (res) => {
          var _a;
          if (res.callbackName === "onUltraGroupDefaultNotificationLevelChanged") {
            let { code } = res;
            (_a = callback.onUltraGroupDefaultNotificationLevelChanged) == null ? void 0 : _a.call(callback, { code });
          }
        };
      }
      return this._invokeMethod("changeUltraGroupDefaultNotificationLevel", resultCallback, { targetId, level });
    }
    /**
     * 获取超级群的默认消息状态
     * @param targetId 会话 ID
     * @return 当次接口操作的状态码。0 代表调用成功 具体结果需要实现接口回调，非 0 代表当前接口调用操作失败，不会触发接口回调，详细错误参考错误码
     * @listener [onUltraGroupDefaultNotificationLevelLoaded]
     * @deprecated 用
     * {@link #getUltraGroupDefaultNotificationLevel(String, IRCIMIWGetUltraGroupDefaultNotificationLevelCallback)}
     * 代替， 预计将在 6.x 版本删除此接口。
     */
    loadUltraGroupDefaultNotificationLevel(targetId) {
      if (!validate("targetId", targetId, AssertRules.STRING, true)) {
        return paramErrorPromise;
      }
      let resultCallback;
      return this._invokeMethod("loadUltraGroupDefaultNotificationLevel", resultCallback, { targetId });
    }
    /**
     * 获取超级群的默认消息状态
     * @param targetId 会话 ID
     * @param callback 事件回调。
     * @return 当次接口操作的状态码。0 代表调用成功 具体结果需要实现接口回调，非 0 代表当前接口调用操作失败，不会触发接口回调，详细错误参考错误码
     */
    getUltraGroupDefaultNotificationLevel(targetId, callback) {
      if (!validate("targetId", targetId, AssertRules.STRING, true)) {
        return paramErrorPromise;
      }
      let resultCallback;
      if (callback) {
        resultCallback = (res) => {
          var _a, _b;
          if (res.callbackName === "onSuccess") {
            let { t } = res;
            (_a = callback.onSuccess) == null ? void 0 : _a.call(callback, { t });
          }
          if (res.callbackName === "onError") {
            let { code } = res;
            (_b = callback.onError) == null ? void 0 : _b.call(callback, { code });
          }
        };
      }
      return this._invokeMethod("getUltraGroupDefaultNotificationLevel", resultCallback, { targetId });
    }
    /**
     * 设置超级群频道的默认消息状态
     * @param targetId  会话 ID
     * @param channelId 频道 ID，仅支持超级群使用。
     * @param level     消息通知级别
     * @param callback  事件回调。SDK 从 5.3.1 版本开始支持 callback 方式回调。从 5.4.0
     * 版本废弃该接口的其他回调方式，预计将在 6.x 版本删除此其他回调方式。如果传入了 callback 参数，仅触发
     * callback 回调。
     * @return 当次接口操作的状态码。0 代表调用成功 具体结果需要实现接口回调，非 0 代表当前接口调用操作失败，不会触发接口回调，详细错误参考错误码
     * @listener [onUltraGroupChannelDefaultNotificationLevelChanged]
     */
    changeUltraGroupChannelDefaultNotificationLevel(targetId, channelId, level, callback) {
      if (!validate("targetId", targetId, AssertRules.STRING, true) || !validate("channelId", channelId, AssertRules.ONLY_STRING, false) || !validate("level", level, AssertRules.NUMBER, true)) {
        return paramErrorPromise;
      }
      let resultCallback;
      if (callback) {
        resultCallback = (res) => {
          var _a;
          if (res.callbackName === "onUltraGroupChannelDefaultNotificationLevelChanged") {
            let { code } = res;
            (_a = callback.onUltraGroupChannelDefaultNotificationLevelChanged) == null ? void 0 : _a.call(callback, { code });
          }
        };
      }
      return this._invokeMethod("changeUltraGroupChannelDefaultNotificationLevel", resultCallback, {
        targetId,
        channelId,
        level
      });
    }
    /**
     * 获取超级群频道的默认消息状态
     * @param targetId  会话 ID
     * @param channelId 频道 ID，仅支持超级群使用。
     * @return 当次接口操作的状态码。0 代表调用成功 具体结果需要实现接口回调，非 0 代表当前接口调用操作失败，不会触发接口回调，详细错误参考错误码
     * @listener [onUltraGroupChannelDefaultNotificationLevelLoaded]
     * @deprecated 用
     * {@link #getUltraGroupChannelDefaultNotificationLevel(String, String, IRCIMIWGetUltraGroupChannelDefaultNotificationLevelCallback)}
     * 代替， 预计将在 6.x 版本删除此接口。
     */
    loadUltraGroupChannelDefaultNotificationLevel(targetId, channelId) {
      if (!validate("targetId", targetId, AssertRules.STRING, true) || !validate("channelId", channelId, AssertRules.ONLY_STRING, false)) {
        return paramErrorPromise;
      }
      let resultCallback;
      return this._invokeMethod("loadUltraGroupChannelDefaultNotificationLevel", resultCallback, {
        targetId,
        channelId
      });
    }
    /**
     * 获取超级群频道的默认消息状态
     * @param targetId  会话 ID
     * @param channelId 频道 ID，仅支持超级群使用。
     * @param callback  事件回调。
     * @return 当次接口操作的状态码。0 代表调用成功 具体结果需要实现接口回调，非 0 代表当前接口调用操作失败，不会触发接口回调，详细错误参考错误码
     */
    getUltraGroupChannelDefaultNotificationLevel(targetId, channelId, callback) {
      if (!validate("targetId", targetId, AssertRules.STRING, true) || !validate("channelId", channelId, AssertRules.ONLY_STRING, false)) {
        return paramErrorPromise;
      }
      let resultCallback;
      if (callback) {
        resultCallback = (res) => {
          var _a, _b;
          if (res.callbackName === "onSuccess") {
            let { t } = res;
            (_a = callback.onSuccess) == null ? void 0 : _a.call(callback, { t });
          }
          if (res.callbackName === "onError") {
            let { code } = res;
            (_b = callback.onError) == null ? void 0 : _b.call(callback, { code });
          }
        };
      }
      return this._invokeMethod("getUltraGroupChannelDefaultNotificationLevel", resultCallback, {
        targetId,
        channelId
      });
    }
    /**
     * 设置是否显示远程推送内容详情，此功能需要从服务端开启用户设置功能。
     * @param showContent 是否显示远程推送内容
     * @param callback    事件回调。SDK 从 5.3.1 版本开始支持 callback 方式回调。从 5.4.0
     * 版本废弃该接口的其他回调方式，预计将在 6.x 版本删除此其他回调方式。如果传入了 callback 参数，仅触发
     * callback 回调。
     * @return 当次接口操作的状态码。0 代表调用成功 具体结果需要实现接口回调，非 0 代表当前接口调用操作失败，不会触发接口回调，详细错误参考错误码
     * @listener [onPushContentShowStatusChanged]
     */
    changePushContentShowStatus(showContent, callback) {
      if (!validate("showContent", showContent, AssertRules.BOOLEAN, true)) {
        return paramErrorPromise;
      }
      let resultCallback;
      if (callback) {
        resultCallback = (res) => {
          var _a;
          if (res.callbackName === "onPushContentShowStatusChanged") {
            let { code } = res;
            (_a = callback.onPushContentShowStatusChanged) == null ? void 0 : _a.call(callback, { code });
          }
        };
      }
      return this._invokeMethod("changePushContentShowStatus", resultCallback, { showContent });
    }
    /**
     * 设置推送语言
     * @param language 推送语言， 目前仅支持 en_us、zh_cn、ar_sa
     * @param callback 事件回调。SDK 从 5.3.1 版本开始支持 callback 方式回调。从 5.4.0
     * 版本废弃该接口的其他回调方式，预计将在 6.x 版本删除此其他回调方式。如果传入了 callback 参数，仅触发
     * callback 回调。
     * @return 当次接口操作的状态码。0 代表调用成功 具体结果需要实现接口回调，非 0 代表当前接口调用操作失败，不会触发接口回调，详细错误参考错误码
     * @listener [onPushLanguageChanged]
     */
    changePushLanguage(language, callback) {
      if (!validate("language", language, AssertRules.STRING, true)) {
        return paramErrorPromise;
      }
      let resultCallback;
      if (callback) {
        resultCallback = (res) => {
          var _a;
          if (res.callbackName === "onPushLanguageChanged") {
            let { code } = res;
            (_a = callback.onPushLanguageChanged) == null ? void 0 : _a.call(callback, { code });
          }
        };
      }
      return this._invokeMethod("changePushLanguage", resultCallback, { language });
    }
    /**
     * 设置是否接收远程推送。
     * 前提：移动端未在线，Web 、MAC/PC 终端在线，移动端是否接收远程推送。
     * 此功能需要从服务端开启用户设置功能。
     * @param receive  是否接收
     * @param callback 事件回调。SDK 从 5.3.1 版本开始支持 callback 方式回调。从 5.4.0
     * 版本废弃该接口的其他回调方式，预计将在 6.x 版本删除此其他回调方式。如果传入了 callback 参数，仅触发
     * callback 回调。
     * @return 当次接口操作的状态码。0 代表调用成功 具体结果需要实现接口回调，非 0 代表当前接口调用操作失败，不会触发接口回调，详细错误参考错误码
     * @listener [onPushReceiveStatusChanged]
     */
    changePushReceiveStatus(receive, callback) {
      if (!validate("receive", receive, AssertRules.BOOLEAN, true)) {
        return paramErrorPromise;
      }
      let resultCallback;
      if (callback) {
        resultCallback = (res) => {
          var _a;
          if (res.callbackName === "onPushReceiveStatusChanged") {
            let { code } = res;
            (_a = callback.onPushReceiveStatusChanged) == null ? void 0 : _a.call(callback, { code });
          }
        };
      }
      return this._invokeMethod("changePushReceiveStatus", resultCallback, { receive });
    }
    /**
     * 给指定的群成员发送消息
     * @param message  要发送的消息
     * @param userIds  群成员集合
     * @param callback 事件回调。SDK 从 5.3.1 版本开始支持 callback 方式回调。从 5.4.0
     * 版本废弃该接口的其他回调方式，预计将在 6.x 版本删除此其他回调方式。如果传入了 callback 参数，仅触发
     * callback 回调。
     * @return 当次接口操作的状态码。0 代表调用成功 具体结果需要实现接口回调，非 0 代表当前接口调用操作失败，不会触发接口回调，详细错误参考错误码
     * @listener [onGroupMessageToDesignatedUsersAttached],
     * [onGroupMessageToDesignatedUsersSent]
     */
    sendGroupMessageToDesignatedUsers(message, userIds, callback) {
      if (!validate("message", message, AssertRules.OBJECT, true) || !validate("userIds", userIds, AssertRules.ARRAY, true)) {
        return paramErrorPromise;
      }
      let resultCallback;
      if (callback) {
        resultCallback = (res) => {
          var _a, _b;
          if (res.callbackName === "onMessageSaved") {
            let { message: message2 } = res;
            (_a = callback.onMessageSaved) == null ? void 0 : _a.call(callback, { message: message2 });
          }
          if (res.callbackName === "onMessageSent") {
            let { code, message: message2 } = res;
            (_b = callback.onMessageSent) == null ? void 0 : _b.call(callback, { code, message: message2 });
          }
        };
      }
      return this._invokeMethod("sendGroupMessageToDesignatedUsers", resultCallback, { message, userIds });
    }
    /**
     * 加载指定会话的消息总数。
     * @param type      会话类型
     * @param targetId  会话 ID
     * @param channelId 频道 ID，仅支持超级群使用，其他会话类型传 null 即可。
     * @return 当次接口操作的状态码。0 代表调用成功 具体结果需要实现接口回调，非 0 代表当前接口调用操作失败，不会触发接口回调，详细错误参考错误码
     * @listener [onMessageCountLoaded]
     * @deprecated 用
     * {@link #getMessageCount(RCIMIWConversationType, String, String, IRCIMIWGetMessageCountCallback)}
     * 代替， 预计将在 6.x 版本删除此接口。
     */
    loadMessageCount(type, targetId, channelId) {
      if (!validate("type", type, AssertRules.NUMBER, true) || !validate("targetId", targetId, AssertRules.STRING, true) || !validate("channelId", channelId, AssertRules.ONLY_STRING, false)) {
        return paramErrorPromise;
      }
      let resultCallback;
      return this._invokeMethod("loadMessageCount", resultCallback, { type, targetId, channelId });
    }
    /**
     * 获取指定会话的消息总数。
     * @param type      会话类型
     * @param targetId  会话 ID
     * @param channelId 频道 ID，仅支持超级群使用，其他会话类型传 null 即可。
     * @param callback  事件回调。
     * @return 当次接口操作的状态码。0 代表调用成功 具体结果需要实现接口回调，非 0 代表当前接口调用操作失败，不会触发接口回调，详细错误参考错误码
     */
    getMessageCount(type, targetId, channelId, callback) {
      if (!validate("type", type, AssertRules.NUMBER, true) || !validate("targetId", targetId, AssertRules.STRING, true) || !validate("channelId", channelId, AssertRules.ONLY_STRING, false)) {
        return paramErrorPromise;
      }
      let resultCallback;
      if (callback) {
        resultCallback = (res) => {
          var _a, _b;
          if (res.callbackName === "onSuccess") {
            let { t } = res;
            (_a = callback.onSuccess) == null ? void 0 : _a.call(callback, { t });
          }
          if (res.callbackName === "onError") {
            let { code } = res;
            (_b = callback.onError) == null ? void 0 : _b.call(callback, { code });
          }
        };
      }
      return this._invokeMethod("getMessageCount", resultCallback, { type, targetId, channelId });
    }
    /**
     * 根据会话类型,加载置顶会话列表
     * @param conversationTypes 会话类型集合
     * @param channelId         频道 ID，仅支持超级群使用，其他会话类型传 null 即可。
     * @return 当次接口操作的状态码。0 代表调用成功 具体结果需要实现接口回调，非 0 代表当前接口调用操作失败，不会触发接口回调，详细错误参考错误码
     * @listener [onTopConversationsLoaded]
     * @deprecated 用
     * {@link #getTopConversations(List, String, IRCIMIWGetTopConversationsCallback)}
     * 代替， 预计将在 6.x 版本删除此接口。
     */
    loadTopConversations(conversationTypes, channelId) {
      if (!validate("conversationTypes", conversationTypes, AssertRules.NUMBER_ARRAY, true) || !validate("channelId", channelId, AssertRules.ONLY_STRING, false)) {
        return paramErrorPromise;
      }
      let resultCallback;
      return this._invokeMethod("loadTopConversations", resultCallback, { conversationTypes, channelId });
    }
    /**
     * 根据会话类型,获取置顶会话列表
     * @param conversationTypes 会话类型集合
     * @param channelId         频道 ID，仅支持超级群使用，其他会话类型传 null 即可。
     * @param callback          事件回调。
     * @return 当次接口操作的状态码。0 代表调用成功 具体结果需要实现接口回调，非 0 代表当前接口调用操作失败，不会触发接口回调，详细错误参考错误码
     */
    getTopConversations(conversationTypes, channelId, callback) {
      if (!validate("conversationTypes", conversationTypes, AssertRules.NUMBER_ARRAY, true) || !validate("channelId", channelId, AssertRules.ONLY_STRING, false)) {
        return paramErrorPromise;
      }
      let resultCallback;
      if (callback) {
        resultCallback = (res) => {
          var _a, _b;
          if (res.callbackName === "onSuccess") {
            let { t } = res;
            (_a = callback.onSuccess) == null ? void 0 : _a.call(callback, { t });
          }
          if (res.callbackName === "onError") {
            let { code } = res;
            (_b = callback.onError) == null ? void 0 : _b.call(callback, { code });
          }
        };
      }
      return this._invokeMethod("getTopConversations", resultCallback, { conversationTypes, channelId });
    }
    /**
     * 上报超级群的已读时间
     * @param targetId  会话 ID
     * @param channelId 频道 ID，仅支持超级群使用。
     * @param timestamp 已读时间
     * @param callback  事件回调。SDK 从 5.3.1 版本开始支持 callback 方式回调。从 5.4.0
     * 版本废弃该接口的其他回调方式，预计将在 6.x 版本删除此其他回调方式。如果传入了 callback 参数，仅触发
     * callback 回调。
     * @return 当次接口操作的状态码。0 代表调用成功 具体结果需要实现接口回调，非 0 代表当前接口调用操作失败，不会触发接口回调，详细错误参考错误码
     * @listener [onUltraGroupReadStatusSynced]
     */
    syncUltraGroupReadStatus(targetId, channelId, timestamp, callback) {
      if (!validate("targetId", targetId, AssertRules.STRING, true) || !validate("channelId", channelId, AssertRules.ONLY_STRING, false) || !validate("timestamp", timestamp, AssertRules.NUMBER, true)) {
        return paramErrorPromise;
      }
      let resultCallback;
      if (callback) {
        resultCallback = (res) => {
          var _a;
          if (res.callbackName === "onUltraGroupReadStatusSynced") {
            let { code } = res;
            (_a = callback.onUltraGroupReadStatusSynced) == null ? void 0 : _a.call(callback, { code });
          }
        };
      }
      return this._invokeMethod("syncUltraGroupReadStatus", resultCallback, { targetId, channelId, timestamp });
    }
    /**
     * 获取特定会话下所有频道的会话列表，只支持超级群
     * @param type     会话类型
     * @param targetId 会话 ID
     * @return 当次接口操作的状态码。0 代表调用成功 具体结果需要实现接口回调，非 0 代表当前接口调用操作失败，不会触发接口回调，详细错误参考错误码
     * @listener [onConversationsLoadedForAllChannel]
     * @deprecated 用
     * {@link #getConversationsForAllChannel(RCIMIWConversationType, String, IRCIMIWGetConversationsForAllChannelCallback)}
     * 代替， 预计将在 6.x 版本删除此接口。
     */
    loadConversationsForAllChannel(type, targetId) {
      if (!validate("type", type, AssertRules.NUMBER, true) || !validate("targetId", targetId, AssertRules.STRING, true)) {
        return paramErrorPromise;
      }
      let resultCallback;
      return this._invokeMethod("loadConversationsForAllChannel", resultCallback, { type, targetId });
    }
    /**
     * 获取特定会话下所有频道的会话列表，只支持超级群
     * @param type     会话类型
     * @param targetId 会话 ID
     * @param callback 事件回调。
     * @return 当次接口操作的状态码。0 代表调用成功 具体结果需要实现接口回调，非 0 代表当前接口调用操作失败，不会触发接口回调，详细错误参考错误码
     */
    getConversationsForAllChannel(type, targetId, callback) {
      if (!validate("type", type, AssertRules.NUMBER, true) || !validate("targetId", targetId, AssertRules.STRING, true)) {
        return paramErrorPromise;
      }
      let resultCallback;
      if (callback) {
        resultCallback = (res) => {
          var _a, _b;
          if (res.callbackName === "onSuccess") {
            let { t } = res;
            (_a = callback.onSuccess) == null ? void 0 : _a.call(callback, { t });
          }
          if (res.callbackName === "onError") {
            let { code } = res;
            (_b = callback.onError) == null ? void 0 : _b.call(callback, { code });
          }
        };
      }
      return this._invokeMethod("getConversationsForAllChannel", resultCallback, { type, targetId });
    }
    /**
     * 修改超级群消息
     * @param messageUId 消息的 messageUid，可在消息对象中获取，且只有发送成功的消息才会有值
     * @param message    要修改的 message
     * @param callback   事件回调。SDK 从 5.3.1 版本开始支持 callback 方式回调。从 5.4.0
     * 版本废弃该接口的其他回调方式，预计将在 6.x 版本删除此其他回调方式。如果传入了 callback 参数，仅触发
     * callback 回调。
     * @return 当次接口操作的状态码。0 代表调用成功 具体结果需要实现接口回调，非 0 代表当前接口调用操作失败，不会触发接口回调，详细错误参考错误码
     * @listener [onUltraGroupMessageModified]
     */
    modifyUltraGroupMessage(messageUId, message, callback) {
      if (!validate("messageUId", messageUId, AssertRules.STRING, true) || !validate("message", message, AssertRules.OBJECT, true)) {
        return paramErrorPromise;
      }
      let resultCallback;
      if (callback) {
        resultCallback = (res) => {
          var _a;
          if (res.callbackName === "onUltraGroupMessageModified") {
            let { code } = res;
            (_a = callback.onUltraGroupMessageModified) == null ? void 0 : _a.call(callback, { code });
          }
        };
      }
      return this._invokeMethod("modifyUltraGroupMessage", resultCallback, { messageUId, message });
    }
    /**
     * 撤回超级群消息
     * @param message      需要撤回的消息
     * @param deleteRemote 是否删除远端消息
     * @param callback     事件回调。SDK 从 5.3.1 版本开始支持 callback 方式回调。从 5.4.0
     * 版本废弃该接口的其他回调方式，预计将在 6.x 版本删除此其他回调方式。如果传入了 callback 参数，仅触发
     * callback 回调。
     * @return 当次接口操作的状态码。0 代表调用成功 具体结果需要实现接口回调，非 0 代表当前接口调用操作失败，不会触发接口回调，详细错误参考错误码
     * @listener [onUltraGroupMessageRecalled]
     */
    recallUltraGroupMessage(message, deleteRemote, callback) {
      if (!validate("message", message, AssertRules.OBJECT, true) || !validate("deleteRemote", deleteRemote, AssertRules.BOOLEAN, true)) {
        return paramErrorPromise;
      }
      let resultCallback;
      if (callback) {
        resultCallback = (res) => {
          var _a;
          if (res.callbackName === "onUltraGroupMessageRecalled") {
            let { code } = res;
            (_a = callback.onUltraGroupMessageRecalled) == null ? void 0 : _a.call(callback, { code });
          }
        };
      }
      return this._invokeMethod("recallUltraGroupMessage", resultCallback, { message, deleteRemote });
    }
    /**
     * 删除超级群指定时间之前的消息
     * @param targetId  会话 ID
     * @param channelId 频道 ID，仅支持超级群使用。
     * @param timestamp 时间戳
     * @param policy    清除策略
     * @param callback  事件回调。SDK 从 5.3.1 版本开始支持 callback 方式回调。从 5.4.0
     * 版本废弃该接口的其他回调方式，预计将在 6.x 版本删除此其他回调方式。如果传入了 callback 参数，仅触发
     * callback 回调。
     * @return 当次接口操作的状态码。0 代表调用成功 具体结果需要实现接口回调，非 0 代表当前接口调用操作失败，不会触发接口回调，详细错误参考错误码
     * @listener [onUltraGroupMessagesCleared]
     */
    clearUltraGroupMessages(targetId, channelId, timestamp, policy, callback) {
      if (!validate("targetId", targetId, AssertRules.STRING, true) || !validate("channelId", channelId, AssertRules.ONLY_STRING, false) || !validate("timestamp", timestamp, AssertRules.NUMBER, true) || !validate("policy", policy, AssertRules.NUMBER, true)) {
        return paramErrorPromise;
      }
      let resultCallback;
      if (callback) {
        resultCallback = (res) => {
          var _a;
          if (res.callbackName === "onUltraGroupMessagesCleared") {
            let { code } = res;
            (_a = callback.onUltraGroupMessagesCleared) == null ? void 0 : _a.call(callback, { code });
          }
        };
      }
      return this._invokeMethod("clearUltraGroupMessages", resultCallback, {
        targetId,
        channelId,
        timestamp,
        policy
      });
    }
    /**
     * 发送超级群输入状态
     * @param targetId     会话 ID
     * @param channelId    频道 ID，仅支持超级群使用。
     * @param typingStatus 输入状态
     * @param callback     事件回调。SDK 从 5.3.1 版本开始支持 callback 方式回调。从 5.4.0
     * 版本废弃该接口的其他回调方式，预计将在 6.x 版本删除此其他回调方式。如果传入了 callback 参数，仅触发
     * callback 回调。
     * @return 当次接口操作的状态码。0 代表调用成功 具体结果需要实现接口回调，非 0 代表当前接口调用操作失败，不会触发接口回调，详细错误参考错误码
     * @listener [onUltraGroupTypingStatusSent]
     */
    sendUltraGroupTypingStatus(targetId, channelId, typingStatus, callback) {
      if (!validate("targetId", targetId, AssertRules.STRING, true) || !validate("channelId", channelId, AssertRules.ONLY_STRING, false) || !validate("typingStatus", typingStatus, AssertRules.NUMBER, true)) {
        return paramErrorPromise;
      }
      let resultCallback;
      if (callback) {
        resultCallback = (res) => {
          var _a;
          if (res.callbackName === "onUltraGroupTypingStatusSent") {
            let { code } = res;
            (_a = callback.onUltraGroupTypingStatusSent) == null ? void 0 : _a.call(callback, { code });
          }
        };
      }
      return this._invokeMethod("sendUltraGroupTypingStatus", resultCallback, { targetId, channelId, typingStatus });
    }
    /**
     * 删除超级群所有频道指定时间之前的消息
     * @param targetId  会话 ID
     * @param timestamp 时间戳
     * @param callback  事件回调。SDK 从 5.3.1 版本开始支持 callback 方式回调。从 5.4.0
     * 版本废弃该接口的其他回调方式，预计将在 6.x 版本删除此其他回调方式。如果传入了 callback 参数，仅触发
     * callback 回调。
     * @return 当次接口操作的状态码。0 代表调用成功 具体结果需要实现接口回调，非 0 代表当前接口调用操作失败，不会触发接口回调，详细错误参考错误码
     * @listener [onUltraGroupMessagesClearedForAllChannel]
     */
    clearUltraGroupMessagesForAllChannel(targetId, timestamp, callback) {
      if (!validate("targetId", targetId, AssertRules.STRING, true) || !validate("timestamp", timestamp, AssertRules.NUMBER, true)) {
        return paramErrorPromise;
      }
      let resultCallback;
      if (callback) {
        resultCallback = (res) => {
          var _a;
          if (res.callbackName === "onUltraGroupMessagesClearedForAllChannel") {
            let { code } = res;
            (_a = callback.onUltraGroupMessagesClearedForAllChannel) == null ? void 0 : _a.call(callback, { code });
          }
        };
      }
      return this._invokeMethod("clearUltraGroupMessagesForAllChannel", resultCallback, { targetId, timestamp });
    }
    /**
     * 从服务获取批量消息
     * @param messages 获取的消息集合
     * @return 当次接口操作的状态码。0 代表调用成功 具体结果需要实现接口回调，非 0 代表当前接口调用操作失败，不会触发接口回调，详细错误参考错误码
     * @listener [onBatchRemoteUltraGroupMessagesLoaded]
     * @deprecated 用
     * {@link #getBatchRemoteUltraGroupMessages(List, IRCIMIWGetBatchRemoteUltraGroupMessagesCallback)}
     * 代替， 预计将在 6.x 版本删除此接口。
     */
    loadBatchRemoteUltraGroupMessages(messages) {
      if (!validate("messages", messages, AssertRules.ARRAY, true)) {
        return paramErrorPromise;
      }
      let resultCallback;
      return this._invokeMethod("loadBatchRemoteUltraGroupMessages", resultCallback, { messages });
    }
    /**
     * 从服务获取批量消息
     * @param messages 获取的消息集合
     * @param callback 事件回调。
     * @return 当次接口操作的状态码。0 代表调用成功 具体结果需要实现接口回调，非 0 代表当前接口调用操作失败，不会触发接口回调，详细错误参考错误码
     */
    getBatchRemoteUltraGroupMessages(messages, callback) {
      if (!validate("messages", messages, AssertRules.ARRAY, true)) {
        return paramErrorPromise;
      }
      let resultCallback;
      if (callback) {
        resultCallback = (res) => {
          var _a, _b;
          if (res.callbackName === "onSuccess") {
            let { matchedMessages, notMatchedMessages } = res;
            (_a = callback.onSuccess) == null ? void 0 : _a.call(callback, { matchedMessages, notMatchedMessages });
          }
          if (res.callbackName === "onError") {
            let { code } = res;
            (_b = callback.onError) == null ? void 0 : _b.call(callback, { code });
          }
        };
      }
      return this._invokeMethod("getBatchRemoteUltraGroupMessages", resultCallback, { messages });
    }
    /**
     * 更新超级群消息扩展信息
     * @param messageUId 消息的 messageUid，可在消息对象中获取，且只有发送成功的消息才会有值
     * @param expansion  更新的消息扩展信息键值对，类型是 HashMap；Key 支持大小写英文字母、数字、部分特殊符号 + = - _
     * 的组合方式，不支持汉字。Value 可以输入空格。
     * @param callback   事件回调。SDK 从 5.3.1 版本开始支持 callback 方式回调。从 5.4.0
     * 版本废弃该接口的其他回调方式，预计将在 6.x 版本删除此其他回调方式。如果传入了 callback 参数，仅触发
     * callback 回调。
     * @return 当次接口操作的状态码。0 代表调用成功 具体结果需要实现接口回调，非 0 代表当前接口调用操作失败，不会触发接口回调，详细错误参考错误码
     * @listener [onUltraGroupMessageExpansionUpdated]
     */
    updateUltraGroupMessageExpansion(messageUId, expansion, callback) {
      if (!validate("messageUId", messageUId, AssertRules.STRING, true)) {
        return paramErrorPromise;
      }
      let resultCallback;
      if (callback) {
        resultCallback = (res) => {
          var _a;
          if (res.callbackName === "onUltraGroupMessageExpansionUpdated") {
            let { code } = res;
            (_a = callback.onUltraGroupMessageExpansionUpdated) == null ? void 0 : _a.call(callback, { code });
          }
        };
      }
      return this._invokeMethod("updateUltraGroupMessageExpansion", resultCallback, { messageUId, expansion });
    }
    /**
     * 删除超级群消息扩展信息中特定的键值对
     * @param messageUId 消息的 messageUid，可在消息对象中获取，且只有发送成功的消息才会有值
     * @param keys       消息扩展信息中待删除的 key 的列表，类型是 ArrayList
     * @param callback   事件回调。SDK 从 5.3.1 版本开始支持 callback 方式回调。从 5.4.0
     * 版本废弃该接口的其他回调方式，预计将在 6.x 版本删除此其他回调方式。如果传入了 callback 参数，仅触发
     * callback 回调。
     * @return 当次接口操作的状态码。0 代表调用成功 具体结果需要实现接口回调，非 0 代表当前接口调用操作失败，不会触发接口回调，详细错误参考错误码
     * @listener [onUltraGroupMessageExpansionForKeysRemoved]
     */
    removeUltraGroupMessageExpansionForKeys(messageUId, keys, callback) {
      if (!validate("messageUId", messageUId, AssertRules.STRING, true) || !validate("keys", keys, AssertRules.ARRAY, true)) {
        return paramErrorPromise;
      }
      let resultCallback;
      if (callback) {
        resultCallback = (res) => {
          var _a;
          if (res.callbackName === "onUltraGroupMessageExpansionForKeysRemoved") {
            let { code } = res;
            (_a = callback.onUltraGroupMessageExpansionForKeysRemoved) == null ? void 0 : _a.call(callback, { code });
          }
        };
      }
      return this._invokeMethod("removeUltraGroupMessageExpansionForKeys", resultCallback, { messageUId, keys });
    }
    /**
     * 修改日志等级
     * @param level 日志级别
     * @return 当次接口操作的状态码。0 代表调用成功 具体结果需要实现接口回调，非 0 代表当前接口调用操作失败，不会触发接口回调，详细错误参考错误码
     */
    changeLogLevel(level) {
      if (!validate("level", level, AssertRules.NUMBER, true)) {
        return paramErrorPromise;
      }
      let resultCallback;
      return this._invokeMethod("changeLogLevel", resultCallback, { level });
    }
    /**
     * 获取本地时间与服务器时间的时间差。消息发送成功后，SDK 与服务器同步时间，消息所在数据库中存储的时间就是服务器时间。
     * System.currentTimeMillis() - getDeltaTime() 可以获取服务器当前时间。
     * @return 本地时间与服务器时间的差值
     */
    getDeltaTime() {
      let resultCallback;
      return this._invokeMethod("getDeltaTime", resultCallback, {});
    }
    /**
     * 获取 AppKey 对应的配置。
     * Get app settings for current AppKey.
     */
    getAppSettings() {
      let resultCallback;
      return this._invokeMethod("getAppSettings", resultCallback, {});
    }
    /**
     * 请求拉取流式消息
     * @param params   请求参数
     * @param callback 操作回调
     * @return 调用状态码，0 表示发起成功
     */
    requestStreamMessageContent(params, callback) {
      if (!validate("params", params, AssertRules.OBJECT, true)) {
        return paramErrorPromise;
      }
      let resultCallback;
      if (callback) {
        resultCallback = (res) => {
          var _a, _b;
          if (res.callbackName === "onSuccess") {
            (_a = callback.onSuccess) == null ? void 0 : _a.call(callback, {});
          }
          if (res.callbackName === "onError") {
            let { code } = res;
            (_b = callback.onError) == null ? void 0 : _b.call(callback, { code });
          }
        };
      }
      return this._invokeMethod("requestStreamMessageContent", resultCallback, { params });
    }
    /**
     * 发送某个会话中的消息已读回执（V5）。
     * 消息 needReceipt 为 true 时，接收方调用本接口，通知消息发送方已读。
     * 仅支持单聊和群聊会话类型。
     * @param type        会话类型，仅支持单群聊
     * @param targetId    会话目标 ID
     * @param channelId   频道 ID
     * @param messageUIds 消息 UID 列表，最多 100 条
     * @param callback    结果回调
     * @return 当次接口操作的状态码。0 代表调用成功，非 0 代表失败
     */
    sendReadReceiptResponseV5(type, targetId, channelId, messageUIds, callback) {
      if (!validate("type", type, AssertRules.NUMBER, true) || !validate("targetId", targetId, AssertRules.STRING, true) || !validate("channelId", channelId, AssertRules.ONLY_STRING, false) || !validate("messageUIds", messageUIds, AssertRules.ARRAY, true)) {
        return paramErrorPromise;
      }
      let resultCallback;
      if (callback) {
        resultCallback = (res) => {
          var _a, _b;
          if (res.callbackName === "onSuccess") {
            (_a = callback.onSuccess) == null ? void 0 : _a.call(callback, {});
          }
          if (res.callbackName === "onError") {
            let { code } = res;
            (_b = callback.onError) == null ? void 0 : _b.call(callback, { code });
          }
        };
      }
      return this._invokeMethod("sendReadReceiptResponseV5", resultCallback, {
        type,
        targetId,
        channelId,
        messageUIds
      });
    }
    /**
     * 批量获取消息已读信息（V5）。
     * @param type        会话类型
     * @param targetId    会话目标 ID
     * @param channelId   频道 ID
     * @param messageUIds 消息 UID 列表，最多 100 条
     * @param callback    结果回调
     * @return 当次接口操作的状态码。0 代表调用成功，非 0 代表失败
     */
    getMessageReadReceiptInfoV5(type, targetId, channelId, messageUIds, callback) {
      if (!validate("type", type, AssertRules.NUMBER, true) || !validate("targetId", targetId, AssertRules.STRING, true) || !validate("channelId", channelId, AssertRules.ONLY_STRING, false) || !validate("messageUIds", messageUIds, AssertRules.ARRAY, true)) {
        return paramErrorPromise;
      }
      let resultCallback;
      if (callback) {
        resultCallback = (res) => {
          var _a, _b;
          if (res.callbackName === "onSuccess") {
            let { t } = res;
            (_a = callback.onSuccess) == null ? void 0 : _a.call(callback, { t });
          }
          if (res.callbackName === "onError") {
            let { code } = res;
            (_b = callback.onError) == null ? void 0 : _b.call(callback, { code });
          }
        };
      }
      return this._invokeMethod("getMessageReadReceiptInfoV5", resultCallback, {
        type,
        targetId,
        channelId,
        messageUIds
      });
    }
    /**
     * 批量获取消息已读信息（V5，按消息标识）。
     * @param identifiers 消息标识列表，最多 100 条
     * @param callback    结果回调
     * @return 当次接口操作的状态码。0 代表调用成功，非 0 代表失败
     */
    getMessageReadReceiptInfoV5ByIdentifiers(identifiers, callback) {
      if (!validate("identifiers", identifiers, AssertRules.ARRAY, true)) {
        return paramErrorPromise;
      }
      let resultCallback;
      if (callback) {
        resultCallback = (res) => {
          var _a, _b;
          if (res.callbackName === "onSuccess") {
            let { t } = res;
            (_a = callback.onSuccess) == null ? void 0 : _a.call(callback, { t });
          }
          if (res.callbackName === "onError") {
            let { code } = res;
            (_b = callback.onError) == null ? void 0 : _b.call(callback, { code });
          }
        };
      }
      return this._invokeMethod("getMessageReadReceiptInfoV5ByIdentifiers", resultCallback, { identifiers });
    }
    /**
     * 分页获取消息已读成员列表（V5）。
     * @param type       会话类型
     * @param targetId   会话目标 ID
     * @param channelId  频道 ID
     * @param messageUId 消息 UID
     * @param option     查询条件
     * @param callback   结果回调
     * @return 当次接口操作的状态码。0 代表调用成功，非 0 代表失败
     */
    getMessagesReadReceiptUsersByPageV5(type, targetId, channelId, messageUId, option, callback) {
      if (!validate("type", type, AssertRules.NUMBER, true) || !validate("targetId", targetId, AssertRules.STRING, true) || !validate("channelId", channelId, AssertRules.ONLY_STRING, false) || !validate("messageUId", messageUId, AssertRules.STRING, true) || !validate("option", option, AssertRules.OBJECT, true)) {
        return paramErrorPromise;
      }
      let resultCallback;
      if (callback) {
        resultCallback = (res) => {
          var _a, _b;
          if (res.callbackName === "onSuccess") {
            let { t } = res;
            (_a = callback.onSuccess) == null ? void 0 : _a.call(callback, { t });
          }
          if (res.callbackName === "onError") {
            let { code } = res;
            (_b = callback.onError) == null ? void 0 : _b.call(callback, { code });
          }
        };
      }
      return this._invokeMethod("getMessagesReadReceiptUsersByPageV5", resultCallback, {
        type,
        targetId,
        channelId,
        messageUId,
        option
      });
    }
    /**
     * 批量获取用户指定消息是否已读状态（V5）。
     * @param type       会话类型
     * @param targetId   会话目标 ID
     * @param channelId  频道 ID
     * @param messageUId 消息 UID
     * @param userIds    用户 ID 列表，最多 100 个
     * @param callback   结果回调
     * @return 当次接口操作的状态码。0 代表调用成功，非 0 代表失败
     */
    getMessagesReadReceiptByUsersV5(type, targetId, channelId, messageUId, userIds, callback) {
      if (!validate("type", type, AssertRules.NUMBER, true) || !validate("targetId", targetId, AssertRules.STRING, true) || !validate("channelId", channelId, AssertRules.ONLY_STRING, false) || !validate("messageUId", messageUId, AssertRules.STRING, true) || !validate("userIds", userIds, AssertRules.ARRAY, true)) {
        return paramErrorPromise;
      }
      let resultCallback;
      if (callback) {
        resultCallback = (res) => {
          var _a, _b;
          if (res.callbackName === "onSuccess") {
            let { t } = res;
            (_a = callback.onSuccess) == null ? void 0 : _a.call(callback, { t });
          }
          if (res.callbackName === "onError") {
            let { code } = res;
            (_b = callback.onError) == null ? void 0 : _b.call(callback, { code });
          }
        };
      }
      return this._invokeMethod("getMessagesReadReceiptByUsersV5", resultCallback, {
        type,
        targetId,
        channelId,
        messageUId,
        userIds
      });
    }
    /**
     * 收到消息的监听
     */
    setOnMessageReceivedListener(callback) {
      const eventName = "IRCIMIWListener:onMessageReceived";
      this._setListener(eventName, callback);
    }
    /**
     * 网络状态变化
     */
    setOnConnectionStatusChangedListener(callback) {
      const eventName = "IRCIMIWListener:onConnectionStatusChanged";
      this._setListener(eventName, callback);
    }
    /**
     * 会话状态置顶多端同步监听
     */
    setOnConversationTopStatusSyncedListener(callback) {
      const eventName = "IRCIMIWListener:onConversationTopStatusSynced";
      this._setListener(eventName, callback);
    }
    /**
     * 会话状态免打扰多端同步监听
     */
    setOnConversationNotificationLevelSyncedListener(callback) {
      const eventName = "IRCIMIWListener:onConversationNotificationLevelSynced";
      this._setListener(eventName, callback);
    }
    /**
     * 撤回消息监听器
     */
    setOnRemoteMessageRecalledListener(callback) {
      const eventName = "IRCIMIWListener:onRemoteMessageRecalled";
      this._setListener(eventName, callback);
    }
    /**
     * 单聊中收到消息回执的回调。
     */
    setOnPrivateReadReceiptReceivedListener(callback) {
      const eventName = "IRCIMIWListener:onPrivateReadReceiptReceived";
      this._setListener(eventName, callback);
    }
    /**
     * 消息扩展信息更改的回调
     */
    setOnRemoteMessageExpansionUpdatedListener(callback) {
      const eventName = "IRCIMIWListener:onRemoteMessageExpansionUpdated";
      this._setListener(eventName, callback);
    }
    /**
     * 消息扩展信息删除的回调
     */
    setOnRemoteMessageExpansionForKeyRemovedListener(callback) {
      const eventName = "IRCIMIWListener:onRemoteMessageExpansionForKeyRemoved";
      this._setListener(eventName, callback);
    }
    /**
     * 聊天室用户进入、退出聊天室监听
     */
    setOnChatRoomMemberChangedListener(callback) {
      const eventName = "IRCIMIWListener:onChatRoomMemberChanged";
      this._setListener(eventName, callback);
    }
    /**
     * 会话输入状态发生变化。对于单聊而言，当对方正在输入时，监听会触发一次；当对方不处于输入状态时，该监听还会触发一次，但回调里输入用户列表为空。
     */
    setOnTypingStatusChangedListener(callback) {
      const eventName = "IRCIMIWListener:onTypingStatusChanged";
      this._setListener(eventName, callback);
    }
    /**
     * 同步消息未读状态监听接口。多端登录，收到其它端清除某一会话未读数通知的时候
     */
    setOnConversationReadStatusSyncMessageReceivedListener(callback) {
      const eventName = "IRCIMIWListener:onConversationReadStatusSyncMessageReceived";
      this._setListener(eventName, callback);
    }
    /**
     * 聊天室 KV 同步完成的回调
     */
    setOnChatRoomEntriesSyncedListener(callback) {
      const eventName = "IRCIMIWListener:onChatRoomEntriesSynced";
      this._setListener(eventName, callback);
    }
    /**
     * 聊天室 KV 发生变化的回调
     */
    setOnChatRoomEntriesChangedListener(callback) {
      const eventName = "IRCIMIWListener:onChatRoomEntriesChanged";
      this._setListener(eventName, callback);
    }
    /**
     * 超级群消息 kv 被更新
     */
    setOnRemoteUltraGroupMessageExpansionUpdatedListener(callback) {
      const eventName = "IRCIMIWListener:onRemoteUltraGroupMessageExpansionUpdated";
      this._setListener(eventName, callback);
    }
    /**
     * 超级群消息被更改
     */
    setOnRemoteUltraGroupMessageModifiedListener(callback) {
      const eventName = "IRCIMIWListener:onRemoteUltraGroupMessageModified";
      this._setListener(eventName, callback);
    }
    /**
     * 超级群消息被撤回
     */
    setOnRemoteUltraGroupMessageRecalledListener(callback) {
      const eventName = "IRCIMIWListener:onRemoteUltraGroupMessageRecalled";
      this._setListener(eventName, callback);
    }
    /**
     * 超级群已读的监听
     */
    setOnUltraGroupReadTimeReceivedListener(callback) {
      const eventName = "IRCIMIWListener:onUltraGroupReadTimeReceived";
      this._setListener(eventName, callback);
    }
    /**
     * 用户输入状态变化的回调
     * 当客户端收到用户输入状态的变化时，会回调此接口，通知发生变化的会话以及当前正在输入的RCUltraGroupTypingStatusInfo列表
     */
    setOnUltraGroupTypingStatusChangedListener(callback) {
      const eventName = "IRCIMIWListener:onUltraGroupTypingStatusChanged";
      this._setListener(eventName, callback);
    }
    /**
     * 发送含有敏感词消息被拦截的回调
     */
    setOnMessageBlockedListener(callback) {
      const eventName = "IRCIMIWListener:onMessageBlocked";
      this._setListener(eventName, callback);
    }
    /**
     * 聊天室状态发生变化的监听
     */
    setOnChatRoomStatusChangedListener(callback) {
      const eventName = "IRCIMIWListener:onChatRoomStatusChanged";
      this._setListener(eventName, callback);
    }
    /**
     * 收到群聊已读回执请求的监听
     */
    setOnGroupMessageReadReceiptRequestReceivedListener(callback) {
      const eventName = "IRCIMIWListener:onGroupMessageReadReceiptRequestReceived";
      this._setListener(eventName, callback);
    }
    /**
     * 收到群聊已读回执响应的监听
     */
    setOnGroupMessageReadReceiptResponseReceivedListener(callback) {
      const eventName = "IRCIMIWListener:onGroupMessageReadReceiptResponseReceived";
      this._setListener(eventName, callback);
    }
    /**
     * [connect] 的接口监听，收到链接结果的回调
     */
    setOnConnectedListener(callback) {
      const eventName = "IRCIMIWListener:onConnected";
      this._setListener(eventName, callback);
    }
    /**
     * [connect] 的接口监听，数据库打开时发生的回调
     */
    setOnDatabaseOpenedListener(callback) {
      const eventName = "IRCIMIWListener:onDatabaseOpened";
      this._setListener(eventName, callback);
    }
    /**
     * [loadConversation] 的接口监听
     */
    setOnConversationLoadedListener(callback) {
      const eventName = "IRCIMIWListener:onConversationLoaded";
      this._setListener(eventName, callback);
    }
    /**
     * [loadConversations] 的接口监听
     */
    setOnConversationsLoadedListener(callback) {
      const eventName = "IRCIMIWListener:onConversationsLoaded";
      this._setListener(eventName, callback);
    }
    /**
     * [removeConversation] 的接口监听
     */
    setOnConversationRemovedListener(callback) {
      const eventName = "IRCIMIWListener:onConversationRemoved";
      this._setListener(eventName, callback);
    }
    /**
     * [removeConversations] 的接口监听
     */
    setOnConversationsRemovedListener(callback) {
      const eventName = "IRCIMIWListener:onConversationsRemoved";
      this._setListener(eventName, callback);
    }
    /**
     * [loadTotalUnreadCount] 的接口监听
     */
    setOnTotalUnreadCountLoadedListener(callback) {
      const eventName = "IRCIMIWListener:onTotalUnreadCountLoaded";
      this._setListener(eventName, callback);
    }
    /**
     * [loadUnreadCount] 的接口监听
     */
    setOnUnreadCountLoadedListener(callback) {
      const eventName = "IRCIMIWListener:onUnreadCountLoaded";
      this._setListener(eventName, callback);
    }
    /**
     * [loadUnreadCountByConversationTypes] 的接口监听
     */
    setOnUnreadCountByConversationTypesLoadedListener(callback) {
      const eventName = "IRCIMIWListener:onUnreadCountByConversationTypesLoaded";
      this._setListener(eventName, callback);
    }
    /**
     * [loadUnreadMentionedCount] 的接口监听
     */
    setOnUnreadMentionedCountLoadedListener(callback) {
      const eventName = "IRCIMIWListener:onUnreadMentionedCountLoaded";
      this._setListener(eventName, callback);
    }
    /**
     * [loadUltraGroupAllUnreadMentionedCount] 的接口监听
     */
    setOnUltraGroupAllUnreadCountLoadedListener(callback) {
      const eventName = "IRCIMIWListener:onUltraGroupAllUnreadCountLoaded";
      this._setListener(eventName, callback);
    }
    /**
     * [loadUltraGroupAllUnreadMentionedCount] 的接口监听
     */
    setOnUltraGroupAllUnreadMentionedCountLoadedListener(callback) {
      const eventName = "IRCIMIWListener:onUltraGroupAllUnreadMentionedCountLoaded";
      this._setListener(eventName, callback);
    }
    /**
     *
     * 超级群列表同步完成的回调
     */
    setOnUltraGroupConversationsSyncedListener(callback) {
      const eventName = "IRCIMIWListener:onUltraGroupConversationsSynced";
      this._setListener(eventName, callback);
    }
    /**
     * [clearUnreadCount] 的接口监听
     */
    setOnUnreadCountClearedListener(callback) {
      const eventName = "IRCIMIWListener:onUnreadCountCleared";
      this._setListener(eventName, callback);
    }
    /**
     * [saveDraftMessage] 的接口监听
     */
    setOnDraftMessageSavedListener(callback) {
      const eventName = "IRCIMIWListener:onDraftMessageSaved";
      this._setListener(eventName, callback);
    }
    /**
     * [clearDraftMessage] 的接口监听
     */
    setOnDraftMessageClearedListener(callback) {
      const eventName = "IRCIMIWListener:onDraftMessageCleared";
      this._setListener(eventName, callback);
    }
    /**
     * [loadDraftMessage] 的接口监听
     */
    setOnDraftMessageLoadedListener(callback) {
      const eventName = "IRCIMIWListener:onDraftMessageLoaded";
      this._setListener(eventName, callback);
    }
    /**
     * [loadBlockedConversations] 的接口监听
     */
    setOnBlockedConversationsLoadedListener(callback) {
      const eventName = "IRCIMIWListener:onBlockedConversationsLoaded";
      this._setListener(eventName, callback);
    }
    /**
     * [changeConversationTopStatus] 的接口监听
     */
    setOnConversationTopStatusChangedListener(callback) {
      const eventName = "IRCIMIWListener:onConversationTopStatusChanged";
      this._setListener(eventName, callback);
    }
    /**
     * [loadConversationTopStatus] 的接口监听
     */
    setOnConversationTopStatusLoadedListener(callback) {
      const eventName = "IRCIMIWListener:onConversationTopStatusLoaded";
      this._setListener(eventName, callback);
    }
    /**
     * [syncConversationReadStatus] 的接口监听
     */
    setOnConversationReadStatusSyncedListener(callback) {
      const eventName = "IRCIMIWListener:onConversationReadStatusSynced";
      this._setListener(eventName, callback);
    }
    /**
     * [sendMessage] 的接口监听
     */
    setOnMessageAttachedListener(callback) {
      const eventName = "IRCIMIWListener:onMessageAttached";
      this._setListener(eventName, callback);
    }
    /**
     * [sendMessage] 的接口监听
     */
    setOnMessageSentListener(callback) {
      const eventName = "IRCIMIWListener:onMessageSent";
      this._setListener(eventName, callback);
    }
    /**
     * [sendMediaMessage] 的接口监听
     */
    setOnMediaMessageAttachedListener(callback) {
      const eventName = "IRCIMIWListener:onMediaMessageAttached";
      this._setListener(eventName, callback);
    }
    /**
     * [sendMediaMessage] 的接口监听
     */
    setOnMediaMessageSendingListener(callback) {
      const eventName = "IRCIMIWListener:onMediaMessageSending";
      this._setListener(eventName, callback);
    }
    /**
     * [cancelSendingMediaMessage] 的接口监听
     */
    setOnSendingMediaMessageCanceledListener(callback) {
      const eventName = "IRCIMIWListener:onSendingMediaMessageCanceled";
      this._setListener(eventName, callback);
    }
    /**
     * [sendMediaMessage] 的接口监听
     */
    setOnMediaMessageSentListener(callback) {
      const eventName = "IRCIMIWListener:onMediaMessageSent";
      this._setListener(eventName, callback);
    }
    /**
     * [downloadMediaMessage] 的接口监听
     */
    setOnMediaMessageDownloadingListener(callback) {
      const eventName = "IRCIMIWListener:onMediaMessageDownloading";
      this._setListener(eventName, callback);
    }
    /**
     * [downloadMediaMessage] 的接口监听
     */
    setOnMediaMessageDownloadedListener(callback) {
      const eventName = "IRCIMIWListener:onMediaMessageDownloaded";
      this._setListener(eventName, callback);
    }
    /**
     * [cancelDownloadingMediaMessage] 的接口监听
     */
    setOnDownloadingMediaMessageCanceledListener(callback) {
      const eventName = "IRCIMIWListener:onDownloadingMediaMessageCanceled";
      this._setListener(eventName, callback);
    }
    /**
     * [loadMessages] 的接口监听
     */
    setOnMessagesLoadedListener(callback) {
      const eventName = "IRCIMIWListener:onMessagesLoaded";
      this._setListener(eventName, callback);
    }
    /**
     * [loadUnreadMentionedMessages] 的接口监听
     */
    setOnUnreadMentionedMessagesLoadedListener(callback) {
      const eventName = "IRCIMIWListener:onUnreadMentionedMessagesLoaded";
      this._setListener(eventName, callback);
    }
    /**
     * [loadFirstUnreadMessage] 的接口监听
     */
    setOnFirstUnreadMessageLoadedListener(callback) {
      const eventName = "IRCIMIWListener:onFirstUnreadMessageLoaded";
      this._setListener(eventName, callback);
    }
    /**
     * [insertMessage] 的接口监听
     */
    setOnMessageInsertedListener(callback) {
      const eventName = "IRCIMIWListener:onMessageInserted";
      this._setListener(eventName, callback);
    }
    /**
     * [insertMessages] 的接口监听
     */
    setOnMessagesInsertedListener(callback) {
      const eventName = "IRCIMIWListener:onMessagesInserted";
      this._setListener(eventName, callback);
    }
    /**
     * [clearMessages] 的接口监听
     */
    setOnMessagesClearedListener(callback) {
      const eventName = "IRCIMIWListener:onMessagesCleared";
      this._setListener(eventName, callback);
    }
    /**
     * [deleteLocalMessages] 的接口监听
     */
    setOnLocalMessagesDeletedListener(callback) {
      const eventName = "IRCIMIWListener:onLocalMessagesDeleted";
      this._setListener(eventName, callback);
    }
    /**
     * [deleteMessages] 的接口监听
     */
    setOnMessagesDeletedListener(callback) {
      const eventName = "IRCIMIWListener:onMessagesDeleted";
      this._setListener(eventName, callback);
    }
    /**
     * [recallMessage] 的接口监听
     */
    setOnMessageRecalledListener(callback) {
      const eventName = "IRCIMIWListener:onMessageRecalled";
      this._setListener(eventName, callback);
    }
    /**
     * [sendPrivateReadReceiptMessage] 的接口监听
     */
    setOnPrivateReadReceiptMessageSentListener(callback) {
      const eventName = "IRCIMIWListener:onPrivateReadReceiptMessageSent";
      this._setListener(eventName, callback);
    }
    /**
     * [updateMessageExpansion] 的接口监听
     */
    setOnMessageExpansionUpdatedListener(callback) {
      const eventName = "IRCIMIWListener:onMessageExpansionUpdated";
      this._setListener(eventName, callback);
    }
    /**
     * [removeMessageExpansionForKeys] 的接口监听
     */
    setOnMessageExpansionForKeysRemovedListener(callback) {
      const eventName = "IRCIMIWListener:onMessageExpansionForKeysRemoved";
      this._setListener(eventName, callback);
    }
    /**
     * [changeMessageReceiveStatus] 的接口监听
     */
    setOnMessageReceiveStatusChangedListener(callback) {
      const eventName = "IRCIMIWListener:onMessageReceiveStatusChanged";
      this._setListener(eventName, callback);
    }
    /**
     * [changeMessageSentStatus] 的接口监听
     */
    setOnMessageSentStatusChangedListener(callback) {
      const eventName = "IRCIMIWListener:onMessageSentStatusChanged";
      this._setListener(eventName, callback);
    }
    /**
     * [joinChatRoom] 的接口监听
     */
    setOnChatRoomJoinedListener(callback) {
      const eventName = "IRCIMIWListener:onChatRoomJoined";
      this._setListener(eventName, callback);
    }
    /**
     * 正在加入聊天室的回调
     */
    setOnChatRoomJoiningListener(callback) {
      const eventName = "IRCIMIWListener:onChatRoomJoining";
      this._setListener(eventName, callback);
    }
    /**
     * [leaveChatRoom] 的接口监听
     */
    setOnChatRoomLeftListener(callback) {
      const eventName = "IRCIMIWListener:onChatRoomLeft";
      this._setListener(eventName, callback);
    }
    /**
     * [loadChatRoomMessages] 的接口监听
     */
    setOnChatRoomMessagesLoadedListener(callback) {
      const eventName = "IRCIMIWListener:onChatRoomMessagesLoaded";
      this._setListener(eventName, callback);
    }
    /**
     * [addChatRoomEntry] 的接口监听
     */
    setOnChatRoomEntryAddedListener(callback) {
      const eventName = "IRCIMIWListener:onChatRoomEntryAdded";
      this._setListener(eventName, callback);
    }
    /**
     * [addChatRoomEntries] 的接口监听
     */
    setOnChatRoomEntriesAddedListener(callback) {
      const eventName = "IRCIMIWListener:onChatRoomEntriesAdded";
      this._setListener(eventName, callback);
    }
    /**
     * [loadChatRoomEntry] 的接口监听
     */
    setOnChatRoomEntryLoadedListener(callback) {
      const eventName = "IRCIMIWListener:onChatRoomEntryLoaded";
      this._setListener(eventName, callback);
    }
    /**
     * [loadChatRoomAllEntries] 的接口监听
     */
    setOnChatRoomAllEntriesLoadedListener(callback) {
      const eventName = "IRCIMIWListener:onChatRoomAllEntriesLoaded";
      this._setListener(eventName, callback);
    }
    /**
     * [removeChatRoomEntry] 的接口监听
     */
    setOnChatRoomEntryRemovedListener(callback) {
      const eventName = "IRCIMIWListener:onChatRoomEntryRemoved";
      this._setListener(eventName, callback);
    }
    /**
     * [removeChatRoomEntries] 的接口监听
     */
    setOnChatRoomEntriesRemovedListener(callback) {
      const eventName = "IRCIMIWListener:onChatRoomEntriesRemoved";
      this._setListener(eventName, callback);
    }
    /**
     * [addToBlacklist] 的接口监听
     */
    setOnBlacklistAddedListener(callback) {
      const eventName = "IRCIMIWListener:onBlacklistAdded";
      this._setListener(eventName, callback);
    }
    /**
     * [removeFromBlacklist] 的接口监听
     */
    setOnBlacklistRemovedListener(callback) {
      const eventName = "IRCIMIWListener:onBlacklistRemoved";
      this._setListener(eventName, callback);
    }
    /**
     * [loadBlacklistStatus] 的接口监听
     */
    setOnBlacklistStatusLoadedListener(callback) {
      const eventName = "IRCIMIWListener:onBlacklistStatusLoaded";
      this._setListener(eventName, callback);
    }
    /**
     * [loadBlacklist] 的接口监听
     */
    setOnBlacklistLoadedListener(callback) {
      const eventName = "IRCIMIWListener:onBlacklistLoaded";
      this._setListener(eventName, callback);
    }
    /**
     * [searchMessages] 的接口监听
     */
    setOnMessagesSearchedListener(callback) {
      const eventName = "IRCIMIWListener:onMessagesSearched";
      this._setListener(eventName, callback);
    }
    /**
     * [searchMessagesByTimeRange] 的接口监听
     */
    setOnMessagesSearchedByTimeRangeListener(callback) {
      const eventName = "IRCIMIWListener:onMessagesSearchedByTimeRange";
      this._setListener(eventName, callback);
    }
    /**
     * [searchMessagesByUserId] 的接口监听
     */
    setOnMessagesSearchedByUserIdListener(callback) {
      const eventName = "IRCIMIWListener:onMessagesSearchedByUserId";
      this._setListener(eventName, callback);
    }
    /**
     * [searchConversations] 的接口监听
     */
    setOnConversationsSearchedListener(callback) {
      const eventName = "IRCIMIWListener:onConversationsSearched";
      this._setListener(eventName, callback);
    }
    /**
     * sendGroupReadReceiptRequest 的接口监听
     */
    setOnGroupReadReceiptRequestSentListener(callback) {
      const eventName = "IRCIMIWListener:onGroupReadReceiptRequestSent";
      this._setListener(eventName, callback);
    }
    /**
     * [sendGroupReadReceiptResponse] 的接口监听
     */
    setOnGroupReadReceiptResponseSentListener(callback) {
      const eventName = "IRCIMIWListener:onGroupReadReceiptResponseSent";
      this._setListener(eventName, callback);
    }
    /**
     * [changeNotificationQuietHours] 的接口监听
     */
    setOnNotificationQuietHoursChangedListener(callback) {
      const eventName = "IRCIMIWListener:onNotificationQuietHoursChanged";
      this._setListener(eventName, callback);
    }
    /**
     * [removeNotificationQuietHours] 的接口监听
     */
    setOnNotificationQuietHoursRemovedListener(callback) {
      const eventName = "IRCIMIWListener:onNotificationQuietHoursRemoved";
      this._setListener(eventName, callback);
    }
    /**
     * [loadNotificationQuietHours] 的接口监听
     */
    setOnNotificationQuietHoursLoadedListener(callback) {
      const eventName = "IRCIMIWListener:onNotificationQuietHoursLoaded";
      this._setListener(eventName, callback);
    }
    /**
     * [changeConversationNotificationLevel] 的接口监听
     */
    setOnConversationNotificationLevelChangedListener(callback) {
      const eventName = "IRCIMIWListener:onConversationNotificationLevelChanged";
      this._setListener(eventName, callback);
    }
    /**
     * [loadConversationNotificationLevel] 的接口监听
     */
    setOnConversationNotificationLevelLoadedListener(callback) {
      const eventName = "IRCIMIWListener:onConversationNotificationLevelLoaded";
      this._setListener(eventName, callback);
    }
    /**
     * [changeConversationTypeNotificationLevel] 的接口监听
     */
    setOnConversationTypeNotificationLevelChangedListener(callback) {
      const eventName = "IRCIMIWListener:onConversationTypeNotificationLevelChanged";
      this._setListener(eventName, callback);
    }
    /**
     * [loadConversationTypeNotificationLevel] 的接口监听
     */
    setOnConversationTypeNotificationLevelLoadedListener(callback) {
      const eventName = "IRCIMIWListener:onConversationTypeNotificationLevelLoaded";
      this._setListener(eventName, callback);
    }
    /**
     * [changeUltraGroupDefaultNotificationLevel] 的接口监听
     */
    setOnUltraGroupDefaultNotificationLevelChangedListener(callback) {
      const eventName = "IRCIMIWListener:onUltraGroupDefaultNotificationLevelChanged";
      this._setListener(eventName, callback);
    }
    /**
     * [loadUltraGroupDefaultNotificationLevel] 的接口监听
     */
    setOnUltraGroupDefaultNotificationLevelLoadedListener(callback) {
      const eventName = "IRCIMIWListener:onUltraGroupDefaultNotificationLevelLoaded";
      this._setListener(eventName, callback);
    }
    /**
     * [changeUltraGroupChannelDefaultNotificationLevel] 的接口监听
     */
    setOnUltraGroupChannelDefaultNotificationLevelChangedListener(callback) {
      const eventName = "IRCIMIWListener:onUltraGroupChannelDefaultNotificationLevelChanged";
      this._setListener(eventName, callback);
    }
    /**
     * [loadUltraGroupChannelDefaultNotificationLevel] 的接口监听
     */
    setOnUltraGroupChannelDefaultNotificationLevelLoadedListener(callback) {
      const eventName = "IRCIMIWListener:onUltraGroupChannelDefaultNotificationLevelLoaded";
      this._setListener(eventName, callback);
    }
    /**
     * [changePushContentShowStatus] 的接口监听
     */
    setOnPushContentShowStatusChangedListener(callback) {
      const eventName = "IRCIMIWListener:onPushContentShowStatusChanged";
      this._setListener(eventName, callback);
    }
    /**
     * [changePushLanguage] 的接口监听
     */
    setOnPushLanguageChangedListener(callback) {
      const eventName = "IRCIMIWListener:onPushLanguageChanged";
      this._setListener(eventName, callback);
    }
    /**
     * [changePushReceiveStatus] 的接口监听
     */
    setOnPushReceiveStatusChangedListener(callback) {
      const eventName = "IRCIMIWListener:onPushReceiveStatusChanged";
      this._setListener(eventName, callback);
    }
    /**
     * [loadMessageCount] 的接口监听
     */
    setOnMessageCountLoadedListener(callback) {
      const eventName = "IRCIMIWListener:onMessageCountLoaded";
      this._setListener(eventName, callback);
    }
    /**
     * [loadTopConversations] 的接口监听
     */
    setOnTopConversationsLoadedListener(callback) {
      const eventName = "IRCIMIWListener:onTopConversationsLoaded";
      this._setListener(eventName, callback);
    }
    /**
     * [sendGroupMessageToDesignatedUsers] 的接口监听
     * 消息存入数据库的回调
     */
    setOnGroupMessageToDesignatedUsersAttachedListener(callback) {
      const eventName = "IRCIMIWListener:onGroupMessageToDesignatedUsersAttached";
      this._setListener(eventName, callback);
    }
    /**
     * [sendGroupMessageToDesignatedUsers] 的接口监听
     * 消息发送完成的回调
     */
    setOnGroupMessageToDesignatedUsersSentListener(callback) {
      const eventName = "IRCIMIWListener:onGroupMessageToDesignatedUsersSent";
      this._setListener(eventName, callback);
    }
    /**
     * 流式消息请求初始化回调
     */
    setOnStreamMessageRequestInitListener(callback) {
      const eventName = "IRCIMIWListener:onStreamMessageRequestInit";
      this._setListener(eventName, callback);
    }
    /**
     * 流式消息增量数据回调
     */
    setOnStreamMessageRequestDataListener(callback) {
      const eventName = "IRCIMIWListener:onStreamMessageRequestData";
      this._setListener(eventName, callback);
    }
    /**
     * 流式消息请求结束回调
     */
    setOnStreamMessageRequestCompleteListener(callback) {
      const eventName = "IRCIMIWListener:onStreamMessageRequestComplete";
      this._setListener(eventName, callback);
    }
    /**
     * [syncUltraGroupReadStatus] 的接口监听
     */
    setOnUltraGroupReadStatusSyncedListener(callback) {
      const eventName = "IRCIMIWListener:onUltraGroupReadStatusSynced";
      this._setListener(eventName, callback);
    }
    /**
     * [loadConversationsForAllChannel] 的接口监听
     */
    setOnConversationsLoadedForAllChannelListener(callback) {
      const eventName = "IRCIMIWListener:onConversationsLoadedForAllChannel";
      this._setListener(eventName, callback);
    }
    /**
     * [loadUltraGroupUnreadMentionedCount] 的接口监听
     */
    setOnUltraGroupUnreadMentionedCountLoadedListener(callback) {
      const eventName = "IRCIMIWListener:onUltraGroupUnreadMentionedCountLoaded";
      this._setListener(eventName, callback);
    }
    /**
     * [loadUltraGroupUnreadCount] 的接口监听
     */
    setOnUltraGroupUnreadCountLoadedListener(callback) {
      const eventName = "IRCIMIWListener:onUltraGroupUnreadCountLoaded";
      this._setListener(eventName, callback);
    }
    /**
     * [modifyUltraGroupMessage] 的接口监听
     */
    setOnUltraGroupMessageModifiedListener(callback) {
      const eventName = "IRCIMIWListener:onUltraGroupMessageModified";
      this._setListener(eventName, callback);
    }
    /**
     * [recallUltraGroupMessage] 的接口监听
     */
    setOnUltraGroupMessageRecalledListener(callback) {
      const eventName = "IRCIMIWListener:onUltraGroupMessageRecalled";
      this._setListener(eventName, callback);
    }
    /**
     * [clearUltraGroupMessages] 的接口监听
     */
    setOnUltraGroupMessagesClearedListener(callback) {
      const eventName = "IRCIMIWListener:onUltraGroupMessagesCleared";
      this._setListener(eventName, callback);
    }
    /**
     * [clearUltraGroupMessagesForAllChannel] 的接口监听
     */
    setOnUltraGroupMessagesClearedForAllChannelListener(callback) {
      const eventName = "IRCIMIWListener:onUltraGroupMessagesClearedForAllChannel";
      this._setListener(eventName, callback);
    }
    /**
     * [sendUltraGroupTypingStatus] 的接口监听
     */
    setOnUltraGroupTypingStatusSentListener(callback) {
      const eventName = "IRCIMIWListener:onUltraGroupTypingStatusSent";
      this._setListener(eventName, callback);
    }
    /**
     * [loadBatchRemoteUltraGroupMessages] 的接口监听
     */
    setOnBatchRemoteUltraGroupMessagesLoadedListener(callback) {
      const eventName = "IRCIMIWListener:onBatchRemoteUltraGroupMessagesLoaded";
      this._setListener(eventName, callback);
    }
    /**
     * [updateUltraGroupMessageExpansion] 的接口监听
     */
    setOnUltraGroupMessageExpansionUpdatedListener(callback) {
      const eventName = "IRCIMIWListener:onUltraGroupMessageExpansionUpdated";
      this._setListener(eventName, callback);
    }
    /**
     * [removeUltraGroupMessageExpansionForKeys] 的接口监听
     */
    setOnUltraGroupMessageExpansionForKeysRemovedListener(callback) {
      const eventName = "IRCIMIWListener:onUltraGroupMessageExpansionForKeysRemoved";
      this._setListener(eventName, callback);
    }
    /**
     * 已读回执 V5 收到回调
     */
    setOnMessageReadReceiptV5ReceivedListener(callback) {
      const eventName = "IRCIMIWListener:onMessageReadReceiptV5Received";
      this._setListener(eventName, callback);
    }
  }
  const globalState = {
    // 设置 IM 引擎
    setIMEngine(engine) {
      try {
        const app = getApp();
        if (!app.globalData) {
          app.globalData = {};
        }
        app.globalData.imEngine = engine;
        formatAppLog("log", "at utils/IMEngineUtils.js:12", "全局 IM 引擎已设置:", engine);
      } catch (e) {
        formatAppLog("error", "at utils/IMEngineUtils.js:14", "设置 IM 引擎失败:", e);
      }
    },
    // 获取 IM 引擎
    async getIMEngine() {
      var _a;
      try {
        const app = getApp();
        let engine = (_a = app.globalData) == null ? void 0 : _a.imEngine;
        if (!engine) {
          formatAppLog("log", "at utils/IMEngineUtils.js:24", engine);
          const options = {};
          engine = await RCIMIWEngine.create(appConfig.appKey, options);
          formatAppLog("log", "at utils/IMEngineUtils.js:27", engine);
        }
        engine.changeLogLevel(4);
        formatAppLog("log", "at utils/IMEngineUtils.js:30", "从globalData获取 IM 引擎:", engine);
        return engine;
      } catch (e) {
        formatAppLog("error", "at utils/IMEngineUtils.js:33", "获取 IM 引擎失败:", e);
        return null;
      }
    },
    // 清理所有状态
    clear() {
      try {
        uni.removeStorageSync("loginInfo");
        const app = getApp();
        if (app.globalData) {
          app.globalData.imEngine = null;
        }
        formatAppLog("log", "at utils/IMEngineUtils.js:46", "全局状态已清理");
      } catch (e) {
        formatAppLog("error", "at utils/IMEngineUtils.js:48", "清理全局状态失败:", e);
      }
    },
    // 连接 IM
    async connectIM(token, userId) {
      const imEngine = await this.getIMEngine();
      if (imEngine) {
        try {
          let callback = {
            onDatabaseOpened: (res) => {
              formatAppLog("log", "at utils/IMEngineUtils.js:59", "数据库打开回调:", res);
            },
            onConnected: (res) => {
              formatAppLog("log", "at utils/IMEngineUtils.js:62", "连接回调:", res);
              if (res.code == 0) {
                uni.showToast({
                  title: "登录成功",
                  icon: "none"
                });
                let loginInfo = {
                  userId,
                  token
                };
                uni.setStorageSync("loginInfo", loginInfo);
                setTimeout(() => {
                  uni.navigateBack({
                    delta: 1
                  });
                }, 200);
                return;
              } else {
                uni.showToast({
                  title: "连接失败: " + res.code,
                  icon: "error"
                });
              }
            }
          };
          const code = await imEngine.connect(token, 10, callback);
          formatAppLog("log", "at utils/IMEngineUtils.js:90", "IM 连接结果:", code);
          return code;
        } catch (error) {
          formatAppLog("error", "at utils/IMEngineUtils.js:93", "连接 IM 失败:", error);
          throw error;
        }
      } else {
        throw new Error("IM 引擎未初始化");
      }
    },
    // 断开 IM 连接
    async disconnectIM() {
      const imEngine = await this.getIMEngine();
      if (imEngine) {
        try {
          await imEngine.disconnect(false);
          this.clear();
        } catch (error) {
          formatAppLog("error", "at utils/IMEngineUtils.js:109", "断开 IM 连接失败:", error);
        }
      }
    }
  };
  const _export_sfc = (sfc, props) => {
    const target = sfc.__vccOpts || sfc;
    for (const [key, val] of props) {
      target[key] = val;
    }
    return target;
  };
  const _sfc_main$3 = {
    data() {
      return {
        currentUserId: "",
        imEngine: null
      };
    },
    onLoad() {
      this.checkLoginStatus();
    },
    onShow() {
      const loginInfo = uni.getStorageSync("loginInfo");
      this.currentUserId = loginInfo.userId;
    },
    methods: {
      async checkLoginStatus() {
        try {
          const loginInfo = uni.getStorageSync("loginInfo");
          if (loginInfo) {
            this.currentUserId = loginInfo.userId;
            let token = loginInfo.token;
            let userId = loginInfo.userId;
            formatAppLog("log", "at pages/index/index.vue:71", this.token);
            await globalState.connectIM(token, userId);
          } else {
            formatAppLog("log", "at pages/index/index.vue:75", "checkLoginStatus");
            uni.navigateTo({
              url: "/pages/login/login"
            });
          }
        } catch (error) {
          formatAppLog("error", "at pages/index/index.vue:82", "检查登录状态失败:", error);
          uni.navigateTo({
            url: "/pages/login/login"
          });
        }
      },
      /**
       * 会议
       */
      async goToMeeting() {
        formatAppLog("log", "at pages/index/index.vue:93", "开始权限申请...");
        try {
          const systemInfo = uni.getSystemInfoSync();
          const platform = systemInfo.platform;
          if (platform === "android") {
            await requestAndroidPermissions();
          }
          formatAppLog("log", "at pages/index/index.vue:102", "权限申请完成，跳转到RTC页面");
          uni.navigateTo({
            url: "/pages/rtc/meeting"
          });
        } catch (error) {
          formatAppLog("error", "at pages/index/index.vue:109", "权限申请异常：", error);
          uni.navigateTo({
            url: "/pages/rtc/meeting"
          });
        }
      },
      /**
       * 直播
       */
      async goToLive() {
        try {
          const systemInfo = uni.getSystemInfoSync();
          const platform = systemInfo.platform;
          if (platform === "android") {
            await requestAndroidPermissions();
          }
          formatAppLog("log", "at pages/index/index.vue:128", "权限申请完成，跳转到RTC页面");
          uni.navigateTo({
            url: "/pages/rtc/live"
          });
        } catch (error) {
          formatAppLog("error", "at pages/index/index.vue:135", "权限申请异常：", error);
          uni.navigateTo({
            url: "/pages/rtc/live"
          });
        }
      },
      /**
       * 断开 IM 连接
       */
      async handleLogout() {
        uni.showModal({
          title: "确认退出",
          content: "确定要退出登录吗？",
          success: async (res) => {
            if (res.confirm) {
              formatAppLog("log", "at pages/index/index.vue:152", this.imEngine);
              await globalState.disconnectIM();
              uni.showToast({
                title: "已退出登录",
                icon: "success"
              });
              uni.navigateTo({
                url: "/pages/login/login"
              });
            }
          }
        });
      }
    }
  };
  function _sfc_render$2(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "content" }, [
      vue.createElementVNode("view", { class: "header" }, [
        vue.createElementVNode("text", { class: "title" }, "融云RTC演示")
      ]),
      vue.createElementVNode("view", { class: "user-info" }, [
        vue.createElementVNode("text", { class: "welcome" }, "欢迎回来！"),
        vue.createElementVNode(
          "text",
          { class: "user-id" },
          "用户ID: " + vue.toDisplayString($data.currentUserId),
          1
          /* TEXT */
        )
      ]),
      vue.createElementVNode("view", { class: "feature-cards" }, [
        vue.createElementVNode("view", {
          class: "card primary-card",
          onClick: _cache[0] || (_cache[0] = (...args) => $options.goToMeeting && $options.goToMeeting(...args))
        }, [
          vue.createElementVNode("view", { class: "card-content" }, [
            vue.createElementVNode("view", { class: "card-icon" }, "🎤"),
            vue.createElementVNode("text", { class: "card-title" }, "音视频会议"),
            vue.createElementVNode("text", { class: "card-desc" }, "多人音视频会议")
          ]),
          vue.createElementVNode("view", { class: "card-arrow" }, ">")
        ]),
        vue.createElementVNode("view", {
          class: "card secondary-card",
          onClick: _cache[1] || (_cache[1] = (...args) => $options.goToLive && $options.goToLive(...args))
        }, [
          vue.createElementVNode("view", { class: "card-content" }, [
            vue.createElementVNode("view", { class: "card-icon" }, "🎥"),
            vue.createElementVNode("text", { class: "card-title" }, "音视频直播"),
            vue.createElementVNode("text", { class: "card-desc" }, "实时音视频直播")
          ]),
          vue.createElementVNode("view", { class: "card-arrow" }, ">")
        ])
      ]),
      vue.createElementVNode("view", { class: "action-buttons" }, [
        vue.createElementVNode("button", {
          class: "secondary-btn",
          onClick: _cache[2] || (_cache[2] = (...args) => $options.handleLogout && $options.handleLogout(...args))
        }, " 退出登录 ")
      ])
    ]);
  }
  const PagesIndexIndex = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["render", _sfc_render$2], ["__file", "/Users/yongqiming/developer/android/project/rongcloud/uniapp-rtc-quickdemo/pages/index/index.vue"]]);
  const _sfc_main$2 = {
    data() {
      return {
        selectedUserIndex: 0,
        userOptions: [],
        isDropdownOpen: false,
        isLoading: false,
        imEngine: null,
        rtcEngine: null,
        engine: null
      };
    },
    onLoad() {
      this.initUserOptions();
    },
    onShow() {
      this.isDropdownOpen = false;
    },
    computed: {
      selectedUser() {
        return this.userOptions[this.selectedUserIndex] || {};
      }
    },
    methods: {
      initUserOptions() {
        this.userOptions = appConfig.testUsers.map((user) => ({
          ...user,
          userId: user.id
          // 保持兼容性
        }));
        formatAppLog("log", "at pages/login/login.vue:98", "初始化用户选项:", this.userOptions);
      },
      toggleDropdown() {
        this.isDropdownOpen = !this.isDropdownOpen;
      },
      selectUser(index) {
        this.selectedUserIndex = index;
        this.isDropdownOpen = false;
        formatAppLog("log", "at pages/login/login.vue:108", "选择用户:", this.userOptions[index]);
      },
      async handleLogin() {
        await this.connectIM();
      },
      showConfigMissingTips(missingFields) {
        uni.showModal({
          title: "配置缺失",
          content: `请先在 config/RCConfig.js 中配置 ${missingFields.join("、")} 后再登录。`,
          showCancel: false,
          confirmText: "知道了"
        });
      },
      isBlankConfigValue(value) {
        return value === void 0 || value === null || String(value).trim() === "";
      },
      getMissingConfigFields(selectedUser) {
        const missingFields = [];
        if (this.isBlankConfigValue(appConfig.appKey)) {
          missingFields.push("appKey");
        }
        if (!selectedUser || this.isBlankConfigValue(selectedUser.userId)) {
          missingFields.push("userId");
        }
        if (!selectedUser || this.isBlankConfigValue(selectedUser.token)) {
          missingFields.push("token");
        }
        return missingFields;
      },
      //连接IM
      async connectIM() {
        try {
          const selectedUser = this.userOptions[this.selectedUserIndex];
          const missingFields = this.getMissingConfigFields(selectedUser);
          if (missingFields.length > 0) {
            this.showConfigMissingTips(missingFields);
            return;
          }
          const token = selectedUser.token;
          const userId = selectedUser.userId;
          formatAppLog("log", "at pages/login/login.vue:159", "选择的用户信息:", selectedUser);
          formatAppLog("log", "at pages/login/login.vue:160", "使用的Token:", token);
          formatAppLog("log", "at pages/login/login.vue:161", "用户ID:", userId);
          this.isLoading = true;
          await globalState.connectIM(token, userId);
        } catch (error) {
          formatAppLog("error", "at pages/login/login.vue:169", "连接IM时发生错误:", error);
          uni.showToast({
            title: "连接失败: " + error.message,
            icon: "error"
          });
        } finally {
          this.isLoading = false;
        }
      }
    }
  };
  function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "login-container" }, [
      vue.createElementVNode("view", { class: "login-box" }, [
        vue.createElementVNode("view", { class: "logo-area" }, [
          vue.createElementVNode("text", { class: "app-title" }, "融云RTC演示")
        ]),
        vue.createElementVNode("view", { class: "input-area" }, [
          vue.createElementVNode("view", { class: "input-group" }, [
            vue.createElementVNode("text", { class: "label" }, "选择用户"),
            vue.createElementVNode("view", {
              class: "custom-select",
              onClick: _cache[0] || (_cache[0] = (...args) => $options.toggleDropdown && $options.toggleDropdown(...args))
            }, [
              vue.createElementVNode("view", { class: "select-display" }, [
                vue.createElementVNode("view", { class: "user-info" }, [
                  vue.createElementVNode(
                    "text",
                    { class: "user-avatar" },
                    vue.toDisplayString($options.selectedUser.avatar),
                    1
                    /* TEXT */
                  ),
                  vue.createElementVNode("view", { class: "user-details" }, [
                    vue.createElementVNode(
                      "text",
                      { class: "user-name" },
                      vue.toDisplayString($options.selectedUser.name),
                      1
                      /* TEXT */
                    ),
                    vue.createElementVNode(
                      "text",
                      { class: "user-id" },
                      "ID: " + vue.toDisplayString($options.selectedUser.id),
                      1
                      /* TEXT */
                    )
                  ])
                ]),
                vue.createElementVNode(
                  "view",
                  {
                    class: vue.normalizeClass(["select-arrow", { "rotated": $data.isDropdownOpen }])
                  },
                  " ▼ ",
                  2
                  /* CLASS */
                )
              ]),
              $data.isDropdownOpen ? (vue.openBlock(), vue.createElementBlock("view", {
                key: 0,
                class: "dropdown-options"
              }, [
                (vue.openBlock(true), vue.createElementBlock(
                  vue.Fragment,
                  null,
                  vue.renderList($data.userOptions, (user, index) => {
                    return vue.openBlock(), vue.createElementBlock("view", {
                      key: user.id,
                      class: vue.normalizeClass(["dropdown-option", { "active": index === $data.selectedUserIndex }]),
                      onClick: vue.withModifiers(($event) => $options.selectUser(index), ["stop"])
                    }, [
                      vue.createElementVNode(
                        "text",
                        { class: "option-avatar" },
                        vue.toDisplayString(user.avatar),
                        1
                        /* TEXT */
                      ),
                      vue.createElementVNode("view", { class: "option-details" }, [
                        vue.createElementVNode(
                          "text",
                          { class: "option-name" },
                          vue.toDisplayString(user.name),
                          1
                          /* TEXT */
                        ),
                        vue.createElementVNode(
                          "text",
                          { class: "option-id" },
                          "ID: " + vue.toDisplayString(user.id),
                          1
                          /* TEXT */
                        ),
                        vue.createElementVNode(
                          "text",
                          { class: "option-desc" },
                          vue.toDisplayString(user.description),
                          1
                          /* TEXT */
                        )
                      ])
                    ], 10, ["onClick"]);
                  }),
                  128
                  /* KEYED_FRAGMENT */
                ))
              ])) : vue.createCommentVNode("v-if", true)
            ])
          ])
        ]),
        vue.createElementVNode("view", { class: "button-area" }, [
          vue.createElementVNode("button", {
            class: "login-btn",
            onClick: _cache[1] || (_cache[1] = (...args) => $options.handleLogin && $options.handleLogin(...args)),
            loading: $data.isLoading
          }, vue.toDisplayString($data.isLoading ? "连接中..." : "连接"), 9, ["loading"])
        ])
      ])
    ]);
  }
  const PagesLoginLogin = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", _sfc_render$1], ["__scopeId", "data-v-e4e4508d"], ["__file", "/Users/yongqiming/developer/android/project/rongcloud/uniapp-rtc-quickdemo/pages/login/login.vue"]]);
  const _sfc_main$1 = {
    data() {
      return {
        imEnging: null
      };
    },
    async onLoad() {
      this.imEngine = await globalState.getIMEngine();
      formatAppLog("log", "at pages/message/customNativeMessage/customNativeMessage.vue:19", "imEngine 初始化完成:", this.imEngine);
      const code = await this.imEngine.registerNativeCustomMessage(
        "XL:exclusiveing",
        1
      );
      formatAppLog("log", "at pages/message/customNativeMessage/customNativeMessage.vue:23", "自定义消息注册" + code);
    },
    methods: {
      async sendExclusiveMessage() {
        const messageIdentifier = "XL:exclusiveing";
        const targetId = "9996";
        const channelId = "";
        const fields = {
          customContent: {
            user: "user1",
            burnDuration: 10,
            extra: "extra",
            mentionedInfo: "@all",
            audit: "pending",
            otherKey: "otherValue"
          }
        };
        const customMessage = await this.imEngine.createNativeCustomMessage(
          1,
          // 会话类型，1 = PRIVATE 等，按你文档来
          targetId,
          channelId,
          messageIdentifier,
          fields
        );
        customMessage.expansion = {
          "customKey": "customValue"
        };
        formatAppLog("log", "at pages/message/customNativeMessage/customNativeMessage.vue:56", "code111 自定义消息 =", customMessage);
        formatAppLog("log", "at pages/message/customNativeMessage/customNativeMessage.vue:58", " code111", customMessage);
        let callback = {
          onMessageSaved: (res) => {
            formatAppLog("log", "at pages/message/customNativeMessage/customNativeMessage.vue:61", "onSuccess", res);
          },
          onMessageSent: (res) => {
            formatAppLog("log", "at pages/message/customNativeMessage/customNativeMessage.vue:66", "onMessageSent", res);
          }
        };
        let code = await this.imEngine.sendMessage(customMessage, callback);
        formatAppLog("log", "at pages/message/customNativeMessage/customNativeMessage.vue:72", code, "code999999999999999999");
      }
    }
  };
  function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", null, [
      vue.createElementVNode("button", {
        onClick: _cache[0] || (_cache[0] = (...args) => $options.sendExclusiveMessage && $options.sendExclusiveMessage(...args))
      }, "发送自定义消息")
    ]);
  }
  const PagesMessageCustomNativeMessageCustomNativeMessage = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render], ["__file", "/Users/yongqiming/developer/android/project/rongcloud/uniapp-rtc-quickdemo/pages/message/customNativeMessage/customNativeMessage.vue"]]);
  __definePage("pages/index/index", PagesIndexIndex);
  __definePage("pages/login/login", PagesLoginLogin);
  __definePage("pages/message/customNativeMessage/customNativeMessage", PagesMessageCustomNativeMessageCustomNativeMessage);
  const _sfc_main = {
    globalData: {
      imEngine: null,
      rtcEngine: null
    },
    onLaunch: function() {
      formatAppLog("log", "at App.vue:8", "App Launch");
      formatAppLog("log", "at App.vue:9", "App globalData 已初始化:", this.globalData);
    },
    onShow: function() {
      formatAppLog("log", "at App.vue:12", "App Show");
    },
    onHide: function() {
      formatAppLog("log", "at App.vue:15", "App Hide");
    }
  };
  const App = /* @__PURE__ */ _export_sfc(_sfc_main, [["__file", "/Users/yongqiming/developer/android/project/rongcloud/uniapp-rtc-quickdemo/App.vue"]]);
  function createApp() {
    const app = vue.createVueApp(App);
    return {
      app
    };
  }
  const { app: __app__, Vuex: __Vuex__, Pinia: __Pinia__ } = createApp();
  uni.Vuex = __Vuex__;
  uni.Pinia = __Pinia__;
  __app__.provide("__globalStyles", __uniConfig.styles);
  __app__._component.mpType = "app";
  __app__._component.render = () => {
  };
  __app__.mount("#app");
})(Vue);
