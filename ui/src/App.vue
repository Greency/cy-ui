<template>
	<div class="wrapper">
		<cy-button  type="warning" shape="" @click="setting">弹一弹</cy-button>
		<cy-popup v-model="show">
			<div style="width: 375px;height: 300px;background-color: red;"></div>
		</cy-popup>
		<!--<cy-toast mode="fail" content="提交失败提交失败提交失败提交失败"></cy-toast>-->
	</div>
</template>

<script>
import Popup from './packages/popup';
import Button from './packages/button';

export default {
	name: 'app',
	components: {
		'cy-popup': Popup,
		'cy-button': Button
	},
	data() {
		return {
			show: false
		}
	},
	methods: {
		setting: function(e){
			console.log('e: ', e);
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
