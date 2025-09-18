import { LogL } from '@rongcloud/imlib-next';

interface PushInitOptions {
    /**
     * 日志输出等级，默认值 `LogL.WARN(2)`
     */
    logLevel?: LogL;
}
interface Result<T = any> {
    /**
     * 状态码 0 成功，-1 失败
     */
    code: PushErrorCode;
    /**
     * 数据
     */
    data?: T;
    /**
     * 错误信息
     */
    message?: string;
}
/**
 * errorCode 错误码
 */
declare enum PushErrorCode {
    /**
     * 成功
     */
    SUCCESS = 0,
    /**
     * 未知错误
     */
    UNKNOWN = -1
}
/**
 * 推送类型
 */
declare enum PushType {
    /**
     * 苹果
     */
    IOS = "iOS",
    /**
     * 未知
     */
    UNKNOWN = "unknown",
    /**
     * 华为
     */
    HUAWEI = "huawei",
    /**
     * 小米
     */
    XIAOMI = "xiaomi",
    /**
     * 魅族
     */
    MEIZU = "meizu",
    /**
     * VIVO
     */
    VIVO = "vivo",
    /**
     * OPPO
     */
    OPPO = "oppo",
    /**
     * 荣耀
     */
    HONOR = "honor"
}
/**
 * 推送 token 信息
 */
interface PushTokenInfo {
    pushType: PushType;
    token: string;
}
interface NotificationInfo {
    pushType: PushType;
    message: NotificationMessage;
}
interface PushTokeReportInfo {
    pushType: PushType;
}
/**
 * 推送通知消息内容
 */
interface NotificationMessage {
    pushId: string;
    senderId: string;
    toId: string;
    targetId: string;
    busChannelId?: string;
    conversationType: number;
    receivedTime: number;
    objectName: string;
    pushTitle: string;
    pushContent: string;
    pushData: string;
    extra: string;
}
/**
 * 注册推送
 * 在 WebLib 初始化之后，连接 IM 之前调用此方法
 * 注意: 在一个 App 生命周期内只能调用一次此方法。App 会自动处理用户登录切换的情况，无需手动重置
 * @returns 返回注册结果的 Promise
 */
declare function registerPush(options?: PushInitOptions): Promise<Result>;
/**
 * 设置推送点击事件
 */
declare function setOnNotificationClickedListener(listener: (res: Result<NotificationInfo>) => void): void;
/**
 * 移除推送点击事件
 */
declare function removeOnNotificationClickedListener(): void;
/**
 * 设置获取推送 token 事件
 */
declare function setOnPushTokenReceivedListener(listener: (res: Result<PushTokenInfo>) => void): void;
/**
 * 移除获取推送 token 事件
 */
declare function removeOnPushTokenReceivedListener(): void;
/**
 * 设置推送 token 上报结果事件，仅在 Android 端会触发
 */
declare function setOnPushTokenReportResultListener(listener: (res: Result<PushTokeReportInfo>) => void): void;
/**
 * 移除推送 token 上报结果事件
 */
declare function removeOnPushTokenReportResultListener(): void;

export { NotificationInfo, NotificationMessage, PushErrorCode, PushInitOptions, PushTokeReportInfo, PushTokenInfo, PushType, Result, registerPush, removeOnNotificationClickedListener, removeOnPushTokenReceivedListener, removeOnPushTokenReportResultListener, setOnNotificationClickedListener, setOnPushTokenReceivedListener, setOnPushTokenReportResultListener };
