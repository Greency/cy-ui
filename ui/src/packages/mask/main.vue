<template>
	<div class="cy-mask" v-if="show" @touchmove.prevent></div>
</template>

<script>
export default {
	name: 'CyMask',
	data(){
		return {
			show: true
		}
	}
}
</script>

<style lang="stylus">
.cy-mask {
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background-color: rgba(0, 0, 0, 0.5);
}
</style>
