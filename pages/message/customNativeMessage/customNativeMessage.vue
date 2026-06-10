<template>
	<view>
		<button @click="sendExclusiveMessage">发送自定义消息</button>
	</view>
</template>

<script>
	import IMEngineUtils from '@/utils/IMEngineUtils.js'
	export default {
		data() {
			return {
				imEnging:null
			}
		},
		
		async onLoad() {
		    // 等待异步获取 IM 引擎实例
		    this.imEngine = await IMEngineUtils.getIMEngine()
		    console.log('imEngine 初始化完成:', this.imEngine)
			// 注册自定义消息，这里为了给您提供代码，特意写在一个界面了，实际场景中，你可以createEngine 之后拿到Engine对象就可以注册自定义消息
			const code = await this.imEngine.registerNativeCustomMessage(
			  'XL:exclusiveing', 1);
			  console.log('自定义消息注册'+code)
		  },
		  
		methods: {
			
			async sendExclusiveMessage() {
				  const messageIdentifier = 'XL:exclusiveing';
				  const targetId = '9996';
				  const channelId = '';
				
				  const fields = {
				    customContent: {
				      user: 'user1',
				      burnDuration: 10,
				      extra: 'extra',
				      mentionedInfo: '@all',
				      audit: 'pending',
				      otherKey: 'otherValue'
				    }
				  };
				  
				// 构建自定义消息
			const customMessage = await this.imEngine.createNativeCustomMessage(
				 1,               // 会话类型，1 = PRIVATE 等，按你文档来
				 targetId,
			     channelId,
				 messageIdentifier,
				 fields
				)
				 customMessage.expansion = {
									'customKey': 'customValue'
								 };
								 
			console.log('code111 自定义消息 =', customMessage)
				
				console.log(" code111", customMessage)
				let callback = {
					onMessageSaved: (res) => {
						console.log("onSuccess", res)
			
						//...
					},
					onMessageSent: (res) => {
						console.log("onMessageSent", res);
						//...
					}
				};
				// 发送自定义消息
				let code = await this.imEngine.sendMessage(customMessage, callback);
				console.log(code, 'code999999999999999999');
			},
		}
	}
</script>

<style>

</style>
