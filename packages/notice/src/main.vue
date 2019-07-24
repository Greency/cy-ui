<template>
	<transition name="cy-notice">
		<div :class="['cy-notice', bem('notice', type) ]" v-if="show">{{content}}</div>
	</transition>
</template>

<script>
import Bem from '../../mixins/bem';

export default {
	name: 'Notice',
	mixins: [Bem],
	data() {
		return {
			show: false,
			type: 'success',
			content: '',
			duration: 2000
		};
	},
	created() {
		setTimeout(() => {
			this.show = true;
		});

		setTimeout(() => {
			this.show = false;
		}, this.duration);
	}
}
</script>

<style lang="stylus">
.cy-notice {
	box-sizing: border-box;
	position: fixed;
	left: 0;
	top: 0;
	z-index: 999;
	width: 100%;
	padding: 10px 10px;
	color: white;
	border-radius: 0 0 2px 2px;
	transition: all 200ms ease-out;
	transform: translate3d(0, 0, 0);

	&--success {
		background-color: #07c160;
	}

	&--danger {
		background-color: #f44;
	}

	&--warning {
		background-color: #ff976a;
	}
}

.cy-notice-enter-active {
	transition: all 0ms ease-out;
	transform: translate3d(0, -100%, 0);
}

.cy-notice-leave-active {
	transform: translate3d(0, -100%, 0);
}
</style>
