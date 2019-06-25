<template>
	<div class="wrapper">
		<cy-button type="warning" shape size="large" @click="setting">弹一弹</cy-button>
		<cy-button type="danger" shape size="large" @click="setting2">弹一弹</cy-button>
		<cy-button type="primary" shape size="large" @click="setting3">弹一弹</cy-button>
		<cy-switch v-model="switchVal"></cy-switch>
		<cy-radio v-model="radioVal">测试</cy-radio>

		<cy-radio-group v-model="radioGroupVal">
			<cy-radio :disabled="true" :value="1">测试1</cy-radio>
			<cy-radio :disabled="true" :value="2">测试2</cy-radio>
			<cy-radio :value="3">测试3</cy-radio>
			<cy-radio :value="4">测试4</cy-radio>
			<cy-radio :value="5">测试5</cy-radio>
		</cy-radio-group>

		<cy-checkbox v-model="checkboxVal">多选框</cy-checkbox>

		<cy-checkbox-group v-model="checkboxGroupVal">
			<cy-checkbox :value="1">多选框1</cy-checkbox>
			<cy-checkbox :disabled="true" :value="2">多选框2</cy-checkbox>
			<cy-checkbox :value="3">多选框3</cy-checkbox>
			<cy-checkbox :value="4">多选框4</cy-checkbox>
			<cy-checkbox :value="5">多选框5</cy-checkbox>
			<cy-checkbox :value="6">多选框6</cy-checkbox>
		</cy-checkbox-group>

		<cy-modal v-model="showModal" type="Alert" submitPosition="Left" content="这是手动引入modal组件的方式"></cy-modal>

		<!--<cy-popup v-model="show">
			<div style="width: 375px;height: 300px;background-color: red;"></div>
		</cy-popup>
		<cy-toast mode="fail" content="提交失败提交失败提交失败提交失败"></cy-toast>-->

		<cy-picker v-model="show" focusPosition="middle" :columns="columns" @submit="submitChoose"></cy-picker>
		<cy-swipe-cell>
			<div class="content" slot="content">content</div>
			<div class="delete" slot="right">
				删除
			</div>
		</cy-swipe-cell>
		<div class="placeholder"></div>
	</div>
</template>

<script>
import Popup from './packages/popup';
import Button from './packages/button';
import Picker from './packages/picker/picker';
import Switch from './packages/switch';
import Radio from './packages/radio/radio';
import RadioGroup from './packages/radio/radioGroup';
import Checkbox from './packages/checkbox/checkbox';
import CheckboxGroup from './packages/checkbox/checkboxGroup';
import Modal from './packages/modal';
import SwipeCell from './packages/swipeCell/swipeCell';

export default {
	name: 'app',
	components: {
		'cy-popup': Popup,
		'cy-button': Button,
		'cy-picker': Picker,
		'cy-switch': Switch,
		'cy-radio': Radio,
		'cy-radio-group': RadioGroup,
		'cy-checkbox': Checkbox,
		'cy-checkbox-group': CheckboxGroup,
		'cy-modal': Modal,
		'cy-swipe-cell': SwipeCell
	},
	data() {
		return {
			showModal: false,
			show: false,
			switchVal: true,
			radioVal: false,
			radioGroupVal: 1,
			checkboxVal: false,
			checkboxGroupVal: [2],
			columns: [[1, 2, 3, 4, 5, 6, 7, 8, 9, 10], ['a', 'b', 'c']]
		}
	},
	watch: {
		switchVal(val){
			console.log(val);
		},
		radioVal(val){
			console.log('radio: ', val);
		},
		radioGroupVal(val){
			console.log('radioGroupVal', val);
		},
		checkboxVal(val){
			console.log('checkboxVal', val);
		},
		checkboxGroupVal(val){
			console.log('checkboxGroupVal', val);
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
		setting3: function(){
			this.showModal = true;
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

.placeholder {
	height: 800px;
}

.content {
	height: 100px;
	background-color: red;
}

.delete {
	height: 100%;
	background-color: blue;
}
</style>
