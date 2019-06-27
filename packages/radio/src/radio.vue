<template>
	<div :class="['cy-radio', disabled ? bem('radio', 'disabled') : '']">
		<span
			:class="['cy-radio-icon', checked ? bem('radio-icon', 'checked') : '']"
			@click="handleToggle"
		></span>
		<span class="cy-radio-text">
			<slot></slot>
		</span>
	</div>
</template>

<script>
import Bem from '../../mixins/bem';
import FindParent from '../../mixins/findParent';

export default {
	name: 'Radio',
	mixins: [Bem, FindParent],
	props: {
		value: [Boolean, String, Number],
		disabled: Boolean
	},
	computed: {
		currentVal: {
			set(val) {
				if (this.parent) {
					this.parent.$emit('input', val);
				} else {
					if (!this.value)
						this.$emit('input', val);
				}
			},
			get() {
				return (this.parent || this).value;
			}
		},
		checked() {
			if (this.parent) {
				return this.currentVal === this.value;
			} else {
				return this.value;
			}
		}
	},
	created() {
		this.findParent('RadioGroup');
	},
	methods: {
		handleToggle() {
			if (this.disabled)
				return;

			if (this.parent) {
				this.currentVal = this.value;
			} else {
				if (!this.currentVal)
					this.currentVal = true;
			}
		}
	}
}
</script>

<style lang="stylus">
@import '../../style/index.styl';

.cy-radio {
	display: inline-flex;
	align-items: center;
	height: 24px;

	&--disabled {
		color: #c8c9cc;

		.cy-radio-icon {
			background-color: #ebedf0;
			border-color: #ebedf0;

			&--checked {
				background-color: #ebedf0;
				border-color: #ebedf0;

				&::after {
					position: absolute;
					content: '\e665';
					text-align: center;
					vertical-align: middle;
					font-family: 'iconfont';
					font-size: 20px;
					color: #c8c9cc;
				}
			}
		}
	}

	&-icon {
		position: relative;
		width: 20px;
		height: 20px;
		margin-right: 10px;
		border-radius: 50%;
		border: 1px solid #ebedf0;
		background-color: white;
		transition: all 200ms ease-in;

		&--checked {
			background-color: #09bb07;
			border-color: #09bb07;

			&::after {
				position: absolute;
				content: '\e665';
				text-align: center;
				vertical-align: middle;
				font-family: 'iconfont';
				font-size: 20px;
				color: white;
			}
		}
	}

	&-text {
		font-size: 14px;
	}
}
</style>
