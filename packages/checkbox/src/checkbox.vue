<template>
	<div :class="['cy-checkbox', disabled ? bem('checkbox', 'disabled') : '']">
		<span
			:class="['cy-checkbox-icon', checked ? bem('checkbox-icon', 'checked') : '']"
			@click="handleToggle"
		></span>
		<span class="cy-checkbox-text">
			<slot></slot>
		</span>
	</div>
</template>

<script>
import Bem from '../../mixins/bem';
import FindParent from '../../mixins/findParent';

export default {
	name: 'Checkbox',
	mixins: [Bem, FindParent],
	props: {
		value: [Boolean, String, Number],
		disabled: Boolean
	},
	computed: {
		currentVal: {
			set(val) {
				let { parent } = this;
				if (parent) {
					let value = parent.value,
						add = true;

					for (let i = 0, len = value.length; i < len; i++) {
						if (value[i] === val) {
							value.splice(i, 1);
							add = false;
							break;
						}
					}

					if (add)
						value.push(val);

					this.parent.$emit('input', value);
				} else {
					this.$emit('input', val);
				}
			},
			get() {
				return (this.parent || this).value;
			}
		},
		checked() {
			if (this.parent) {
				return this.currentVal.includes(this.value);
			} else {
				return this.value;
			}
		}
	},
	created() {
		this.findParent('CheckboxGroup');
	},
	methods: {
		handleToggle() {
			if (this.disabled)
				return;

			if (this.parent) {
				this.currentVal = this.value;
			} else {
				this.currentVal = !this.value;
			}
		}
	}
}
</script>

<style lang="stylus">
@import '../../style/index.styl';

.cy-checkbox {
	display: inline-flex;
	align-items: center;
	height: 24px;

	&--disabled {
		color: #c8c9cc;

		.cy-checkbox-icon {
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