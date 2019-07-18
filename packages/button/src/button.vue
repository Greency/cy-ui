<template>
	<button
		:class="['cy-button', bem('button', type), bem('button', size), bem('button', shape), disabled ? bem('button', 'disabled') : '']"
		:disabled="disabled"
		@click="handleClick"
	>
		<svg
			v-if="loading"
			class="small-loading-icon"
			version="1"
			x="0px"
			y="0px"
			width="16"
			height="16"
			viewBox="0 0 50 50"
			style="enable-background:new 0 0 50 50;"
			xml:space="preserve"
		>
			<path
				fill="white"
				d="M43.935,25.145c0-10.318-8.364-18.683-18.683-18.683c-10.318,0-18.683,8.365-18.683,18.683h4.068c0-8.071,6.543-14.615,14.615-14.615c8.072,0,14.615,6.543,14.615,14.615H43.935z"
			>
				<animateTransform
					attributeType="xml"
					attributeName="transform"
					type="rotate"
					from="0 25 25"
					to="360 25 25"
					dur="0.6s"
					repeatCount="indefinite"
				></animateTransform>
			</path>
		</svg>
		<slot></slot>
	</button>
</template>

<script>
import Bem from '../../mixins/bem';

export default {
	name: 'Button',
	mixins: [Bem],
	props: {
		disabled: Boolean,
		loading: Boolean,
		shape: String,
		type: {
			type: String,
			default: 'default'
		},
		size: {
			type: String,
			default: 'normal'
		}
	},
	methods: {
		handleClick(e) {
			this.$emit('click', e);
		}
	}
}
</script>

<style lang="stylus">
.cy-button {
	box-sizing: border-box;
	display: inline-block;
	position: relative;
	padding: 0;
	font-size: 16px;
	border: 1px solid transparent; // 自定义边框
	border-radius: 2px;
	outline: none; // 消除默认点击蓝色边框效果
	overflow: hidden;

	.small-loading-icon {
		margin-right: 5px;
		vertical-align: -1px;
	}

	&::before {
		content: ' ';
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-color: black;
		opacity: 0;
	}

	&:active::before {
		opacity: 0.15;
	}

	&--disabled {
		opacity: 0.5;
	}

	// 下面是颜色
	&--default {
		color: black;
		background-color: white;
		border: 1px solid #ebedf0;
	}

	&--primary {
		color: white;
		background-color: #07c160;
		border: 1px solid #07c160;
	}

	&--info {
		color: white;
		background-color: #1989fa;
		border: 1px solid #1989fa;
	}

	&--warning {
		color: white;
		background-color: #ff976a;
		border: 1px solid #ff976a;
	}

	&--danger {
		color: white;
		background-color: #f44;
		border: 1px solid #f44;
	}

	&--normal {
		height: 48px;
		padding-left: 15px;
		padding-right: 15px;
		line-height: 48px;
	}

	&--large {
		width: 100%;
		height: 50px;
		line-height: 50px;
	}

	// 下面是形状
	&--square {
		border-radius: 0;
	}

	&--round {
		border-radius: 10em;
	}
}
</style>
