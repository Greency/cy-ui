<template>
	<div class="wrapper">
		<button @click="setting">setting</button>
		<cy-popup v-model="show">
			<div style="width: 375px;height: 300px;background-color: red;"></div>
		</cy-popup>
		<!--<cy-toast mode="fail" content="提交失败提交失败提交失败提交失败"></cy-toast>-->
	</div>
</template>

<script>
import Popup from './packages/popup';

export default {
	name: 'app',
	components: {
		'cy-popup': Popup
	},
	data() {
		return {
			show: false
		}
	},
	methods: {
		setting: function(){
			//this.show = !this.show;
			this.$showToast({
				mode: 'fail',
				content: '提交成功'
			});
		}
	}
}
</script>

<style>
body {
	font-family: 'PingFang SC', Helvetica, 'STHeiti STXihei', 'Microsoft YaHei', Tohoma, Arial, sans-serif;
}
.wrapper::before {
	content: "\F0C1";
}
</style>
