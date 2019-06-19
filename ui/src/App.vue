<template>
	<div class="wrapper">
		<cy-button type="warning" shape size="large" @click="setting">弹一弹</cy-button>
		<cy-button type="danger" shape size="large" @click="setting2">弹一弹</cy-button>
		<cy-switch v-model="switchVal"></cy-switch>
		<!--<cy-popup v-model="show">
			<div style="width: 375px;height: 300px;background-color: red;"></div>
		</cy-popup>
		<cy-toast mode="fail" content="提交失败提交失败提交失败提交失败"></cy-toast>-->

		<cy-picker v-model="show" focusPosition="middle" :columns="columns" @submit="submitChoose"></cy-picker>
	</div>
</template>

<script>
import Popup from './packages/popup';
import Button from './packages/button';
import Picker from './packages/picker/picker';
import Switch from './packages/switch';

export default {
	name: 'app',
	components: {
		'cy-popup': Popup,
		'cy-button': Button,
		'cy-picker': Picker,
		'cy-switch': Switch
	},
	data() {
		return {
			show: false,
			switchVal: true,
			columns: [[1, 2, 3, 4, 5, 6, 7, 8, 9, 10], ['a', 'b', 'c']]
		}
	},
	watch: {
		switchVal(val){
			console.log(val);
		}
	},
	methods: {
		setting: function (e) {
			this.$dialog.alert({
				content: '这是alert框，只有一个按钮哦！',
				beforeClose: (next) => {
					console.log('beforeClose');
					setTimeout(() => {
						next();
					}, 3000);
				},
				submit: () => {
					console.log('submit');
				}
			});
			//this.show = !this.show;
		},
		setting2: function(){
			this.$dialog.confirm({
				content: '这是确认框，有两个按钮哦！',
				beforeClose: (next) => {
					console.log('beforeClose');
					setTimeout(() => {
						next();
					}, 3000);
				},
				submit: () => {
					console.log('submit');
				}
			});
		},
		submitChoose: function (data) {
			console.log('picker result: ', data);
		}
	}
}
</script>

<style>
body {
	font-family: "PingFang SC", Helvetica, "STHeiti STXihei", "Microsoft YaHei",
		Tohoma, Arial, sans-serif;
}
.wrapper::before {
	content: "\F0C1";
}
</style>
