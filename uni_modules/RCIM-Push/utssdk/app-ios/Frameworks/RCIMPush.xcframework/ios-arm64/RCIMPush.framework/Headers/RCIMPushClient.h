//
//  RCIMPushClient.h
//  RCIMPush
//
//  Created by Lang on 2025/4/7.
//

#import <Foundation/Foundation.h>
#import <RCIMPush/RCIMPushInitConfig.h>
#import <RCIMPush/RCIMPushErrorCode.h>

NS_ASSUME_NONNULL_BEGIN

@protocol RCIMPushClientDelegate <NSObject>

@optional

- (void)onWriteLog :(int)level
               type:(int)type
                tag:(NSString *)tag
          timestamp:(long long)timestamp
            writeDB:(BOOL)writeDB
            content:(NSString *)content;

- (void)onPushTokenReportResult:(int)code message:(nullable NSString *)message;

@end

@interface RCIMPushClient : NSObject

@property (nonatomic, weak) id<RCIMPushClientDelegate> delegate;

/// 获取单例对象
+ (instancetype)sharedInstance;

/// 禁止使用 init 和 new 方法
- (instancetype)init NS_UNAVAILABLE;
+ (instancetype)new NS_UNAVAILABLE;

/**
 * 注册推送
 * @param config 推送初始化配置
 * @return 返回注册状态码
 *  0: 注册成功
 */
- (int)registerPush:(RCIMPushInitConfig *)config;


// 设置推送 token
- (int)setupPushToken:(NSData *)pushToken;

/// 设置远程推送 Token（字符串形式）
/// @param deviceToken  APNs 推送 Token（字符串形式）
- (int)setupPushTokenString:(NSString *)deviceToken;

/// 统计收到远程推送的事件
///
/// - Parameter userInfo: 远程推送的内容
///
/// 此方法用于统计融云推送服务的到达率。
/// 如果您需要统计推送服务的到达率，需要在 App  中实现通知扩展，并在 NotificationService  的 -didReceiveNotificationRequest: withContentHandler: 中
/// 先初始化 appkey 再调用此方法并将推送内容 userInfo 传入即可。
///
/// 如果有单独的统计服务地址，还需要在初始化之后设置独立的统计服务地址
///
/// 如：
///
/// - (void)didReceiveNotificationRequest:(UNNotificationRequest *)request withContentHandler:(void (^)(UNNotificationContent * _Nonnull))contentHandler {
/// self.contentHandler = contentHandler;
/// self.bestAttemptContent = [request.content mutableCopy];
///
/// NSDictionary *userInfo = self.bestAttemptContent.userInfo;
/// [[RCCoreClient sharedCoreClient] initWithAppKey:RONGCLOUD_IM_APPKEY];
/// if (RONGCLOUD_STATS_SERVER.length > 0) {
/// [[RCCoreClient sharedCoreClient] setStatisticServer:RONGCLOUD_STATS_SERVER];
/// }
/// [[RCCoreClient sharedCoreClient] recordReceivedRemoteNotificationEvent:userInfo];
///
/// self.contentHandler(self.bestAttemptContent);
/// }
///
/// - Remark: 高级功能
/// - Since: 5.1.3
- (void)recordReceivedRemoteNotificationEvent:(NSDictionary *)userInfo;

/// 统计远程推送的点击事件
///
/// - Parameter userInfo: 远程推送的内容
///
/// 此方法用于统计融云推送服务的点击率。
/// 杀掉 app 通过 AppDelegate 的 -application:didFinishLaunchingWithOptions: 获取远程推送内容；

/// - (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions {
///     NSDictionary *remoteNotification = launchOptions[UIApplicationLaunchOptionsRemoteNotificationKey];
///     if (remoteNotification) {
///         [[RCCoreClient sharedCoreClient] recordRemoteNotificationEvent:remoteNotification];
///     }
///     return YES;
/// }
///
/// app 在后台或者前台时，点击推送
/// 在 iOS 10 以下版本中，通过在 AppDelegate 的 -application:didReceiveRemoteNotification: 获取远程推送内容，
/// - (void)application:(UIApplication *)application didReceiveRemoteNotification:(NSDictionary *)userInfo {
///     [[RCCoreClient sharedCoreClient] recordRemoteNotificationEvent:userInfo];
/// }
/// 在 iOS 10 及以上版本中，只通过在 AppDelegate 实现 UNUserNotificationCenterDelegate 的方法 -userNotificationCenter:didReceiveNotificationResponse:withCompletionHandler:，获取 response.notification.request.content.userInfo，
/// 如：
/// - (void)userNotificationCenter:(UNUserNotificationCenter *)center
/// didReceiveNotificationResponse:(UNNotificationResponse *)response
/// withCompletionHandler:(void (^)(void))completionHandler {
///     // 不需要app层区分本地通知和远程推送，recordLocalNotificationResponseEvent内部判断只在远程推送时统计
///     [[RCCoreClient sharedCoreClient] recordLocalNotificationResponseEvent:response.notification.request.content.userInfo];
///     completionHandler();
/// }
///
/// - Remark: 高级功能
/// - Since: 5.0.0
- (void)recordRemoteNotificationEvent:(NSDictionary *)userInfo;

@end

NS_ASSUME_NONNULL_END
