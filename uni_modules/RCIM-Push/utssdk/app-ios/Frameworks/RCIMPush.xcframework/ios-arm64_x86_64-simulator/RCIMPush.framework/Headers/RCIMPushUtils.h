//
//  RCIMPushUtils.h
//  RCIMPush
//
//  Created by Lang on 2025/4/7.
//

#import <Foundation/Foundation.h>

NS_ASSUME_NONNULL_BEGIN

@interface RCIMPushUtils : NSObject

+ (NSString *)getDeviceId:(NSString *)appKey;

+ (NSString *)getHexStringForData:(NSData *)data;

+ (BOOL)isInValidAppKeyInDisk:(NSString *)appKey;

+ (void)saveInvalidAppKeyInDisk:(NSString *)appKey;

@end

NS_ASSUME_NONNULL_END
