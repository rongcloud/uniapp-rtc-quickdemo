/**
 * Copyright (c) 2014-2023, RongCloud.
 * All rights reserved.
 */

// RCErrorCode.h
// 融云 IM 错误码
// 本文件由 ErrorCodeGenerator 自动生成，请勿擅自修改

#import <Foundation/Foundation.h>

#ifndef RCIMPushErrorCode_h
#define RCIMPushErrorCode_h

typedef NS_ENUM(NSInteger, RCIMPushErrorCode) {
    
    /// 未知错误
    ///
    ERRORCODE_UNKNOWN = -1,
    
    /// 成功
    /// 
    RC_SUCCESS = 0,
    
    /// 开发者调用接口传入的 appKey 参数错误
    ///
    INVALID_PARAMETER_APP_KEY = 34257,

    /// 开发者调用接口传入的 token 参数错误
    INVALID_PARAMETER_USER_TOKEN = 31004,

    /// 开发者调用接口传入的 pushServer 参数错误
    ///
    INVALID_PARAMETER_PUSH_SERVER = 34341,
    
    /// 开发者调用接口传入的 statisticServer 参数错误
    INVALID_PARAMETER_STATISTIC_SERVER = 34342,
    
    /// 开发者调用接口传入的 pushToken 参数错误
    INVALID_PARAMETER_PUSH_TOKEN = 34343
};

#endif /* RCErrorCode_h */
