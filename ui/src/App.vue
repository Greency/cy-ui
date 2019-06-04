<template>
	<div>
		<button @click="setting">setting</button>
		<cy-popup v-model="show">
			<div style="width: 375px;height: 300px;background-color: red;"></div>
		</cy-popup>
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
			this.show = !this.show;
		}
	}
}
</script>

<style>
</style>
