<template>
	<div
		:class="['cy-toast', bem('toast', mode === 'success' || mode === 'fail' ? 'complex': 'simple')]"
	>
		<svg
			v-if="mode === 'success'"
			xmlns="http://www.w3.org/2000/svg"
			xmlns:xlink="http://www.w3.org/1999/xlink"
			t="1559633902956"
			class="cy-toast-icon"
			style
			viewBox="0 0 1024 1024"
			version="1.1"
			p-id="7668"
			width="48"
			height="48"
		>
			<path
				d="M912 190h-69.9c-9.8 0-19.1 4.5-25.1 12.2L404.7 724.5 207 474c-6.1-7.7-15.3-12.2-25.1-12.2H112c-6.7 0-10.4 7.7-6.3 12.9l273.9 347c12.8 16.2 37.4 16.2 50.3 0l488.4-618.9c4.1-5.1 0.4-12.8-6.3-12.8z"
				p-id="7669"
				fill="#ffffff"
			></path>
		</svg>
		<svg
			v-if="mode === 'fail'"
			t="1559634016170"
			class="cy-toast-icon"
			style
			viewBox="0 0 1024 1024"
			version="1.1"
			xmlns="http://www.w3.org/2000/svg"
			p-id="7827"
			xmlns:xlink="http://www.w3.org/1999/xlink"
			width="48"
			height="48"
		>
			<path d="M512 804m-64 0a64 64 0 1 0 128 0 64 64 0 1 0-128 0Z" p-id="7828" fill="#ffffff"></path>
			<path
				d="M480 636h64c4.4 0 8-3.6 8-8V164c0-4.4-3.6-8-8-8h-64c-4.4 0-8 3.6-8 8v464c0 4.4 3.6 8 8 8z"
				p-id="7829"
				fill="#ffffff"
			></path>
		</svg>
		<div class="cy-toast-content">{{content}}</div>
	</div>
</template>

<script>
import Bem from '../mixins/bem';

export default {
	name: 'Toast',
	mixins: [Bem],
	data() {
		return {
			mode: '',
			content: '',
			duration: 2000
		}
	},
	created() {
		setTimeout(()=>{
			document.body.removeChild(this.$el);
			this.$destroy('Toast');
		}, this.duration);
	},
}
</script>

<style lang="stylus">
.cy-toast {
	box-sizing: border-box;
	display: inline-flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	position: fixed;
	padding: 10px;
	font-size: 14px;
	color: white;
	background-color: rgba(0, 0, 0, 0.5);
	border-radius: 4px;

	&--complex {
		top: 50%;
		left: 50%;
		width: 100px;
		min-height: 100px;
		transform: translate(-50%, -50%);
	}

	&--simple {
		left: 50%;
		bottom: 30%;
		max-width: 90%;
		transform: translate(-50%, 0);
	}

	&-icon {
		margin-bottom: 5px;
	}

	&-content {
		text-align: center;
	}
}
</style>
