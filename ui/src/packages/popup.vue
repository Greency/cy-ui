<template>
	<transition :name="name">
		<div class="cy-transition" v-if="inited">
			<slot></slot>
		</div>
	</transition>
</template>

<script>
export default {
	name: 'Popup',
	props: {
		value: Boolean,
		name: {
			type: String,
			default: 'cy'
		}
	},
	data() {
		return {
			inited: this.value
		}
	},
	watch: {
		value(val) {
			this.inited = val;
		}
	}
}
</script>

<style lang="stylus">
.cy-transition {
	position: fixed;
	left: 0;
	bottom: 0;
	transition: all 200ms ease-out;
	transform: translate3d(0, 0, 0);
}

.cy-enter {
	transform: translate3d(0, 100%, 0);
}

.cy-leave-active {
    transform: translate3d(0, 100%, 0);
}
</style>
