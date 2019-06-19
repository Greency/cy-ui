<template>
	<div
		:class="['cy-switch', on ? bem('switch', 'on') : '']"
		:style="{fontSize: `${size}px`}"
		@click="handleToggle"
	>
		<div :class="['cy-switch-round', on ? bem('switch-round', 'on') : '']"></div>
	</div>
</template>

<script>
import Bem from './mixins/bem';

export default {
	name: 'CySwitch',
	mixins: [Bem],
	props: {
		value: Boolean,
		size: {
			type: Number,
			default: 30
		}
	},
	data() {
		return {
			on: this.value
		}
	},
	watch: {
		value(val) {
			this.on = val;
		}
	},
	methods: {
		handleToggle() {
			this.on = !this.on;
			this.$emit('input', this.on);
		}
	}
}
</script>

<style lang="stylus">
.cy-switch {
	position: relative;
	width: 2em;
	height: 1em;
	border: 1px solid #ebedf0;
	border-radius: 1em;
	background-color: rgba(9, 187, 7, 0);
	transition: background-color 250ms ease-in;

	&-round {
		position: absolute;
		width: 1em;
		height: 1em;
		border-radius: 50%;
		background-color: white;
		border: 1px solid #ebedf0;
		transform: translate(0, 0);
		transition: transform 250ms ease-in;

		&--on {
			transform: translate(1em, 0);
		}
	}

	&--on {
		background-color: rgba(9, 187, 7, 1);
	}
}
</style>
