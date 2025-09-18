<script>
	export default {
		globalData: {
			imEngine: null,
			rtcEngine:null,
		},
		onLaunch: function() {
			console.log('App Launch');
			console.log('App globalData 已初始化:', this.globalData);
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
	/*每个页面公共css */
</style>
