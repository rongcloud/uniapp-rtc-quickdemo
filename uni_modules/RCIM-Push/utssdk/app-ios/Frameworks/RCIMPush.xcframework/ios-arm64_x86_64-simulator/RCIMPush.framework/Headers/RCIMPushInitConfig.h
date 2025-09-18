//
//  RCIMPushInitConfig.h
//  RCIMPush
//
//  Created by Lang on 2025/4/25.
//

#import <Foundation/Foundation.h>

NS_ASSUME_NONNULL_BEGIN

@interface RCIMPushInitConfig : NSObject

// appKey
@property (nonatomic, copy) NSString *appKey;

// userToken
@property (nonatomic, copy) NSString *userToken;

// pushServer
@property (nonatomic, copy) NSString *pushServer;

// statisticServer
@property (nonatomic, copy) NSString *statisticServer;


@end

NS_ASSUME_NONNULL_END
