//
//  WXCustomEventModule.m
//  WeexDemo
//
//  Created by 黄龙 on 2019/3/13.
//  Copyright © 2019年 taobao. All rights reserved.
//

#import "WXCustomEventModule.h"

@implementation WXCustomEventModule

WX_EXPORT_METHOD(@selector(showParams:)) //添加打印的方法，通过 WX_EXPORT_METHOD 暴露该方法 expose method to JavaScript


-(void)showParams:(NSString *)param{
    if (!param) {
        return;
    }
    NSLog(@"%@",param);
}


@end
