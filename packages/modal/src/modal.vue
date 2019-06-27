<template>
	<div class="cy-modal" v-if="show">
		<header class="cy-modal-title">{{title}}</header>
		<div class="cy-modal-content" v-html="content"></div>
		<div class="cy-modal-content-extend">
			<slot></slot>
		</div>
		<div class="cy-button-group" v-if="type === 'Confirm'">
			<cy-button shape="square" :style="cancelStyle" @click="handleCancel">{{cancelText}}</cy-button>
			<cy-button
				:class="['cy-button-submit', submitPosition === 'Left' ? 'cy-button-left' : '']"
				shape="square"
				:style="submitStyle"
				@click="handleSubmit"
			>{{submitText}}</cy-button>
		</div>
		<cy-button
			class="cy-button-submit"
			v-else
			shape="square"
			size="large"
			@click="handleSubmit"
		>{{submitText}}</cy-button>
	</div>
</template>

<script>
import Button from '../../button';

export default {
	name: 'Modal',
	components: {
		'cy-button': Button
	},
	props: {
		value: Boolean,
		content: String,
		beforeClose: Function,
		cancel: Function,
		submit: Function,
		submitStyle: Object,
		cancelStyle: Object,
		mask: {
			type: Boolean,
			default: true
		},
		submitPosition: {
			type: String,
			default: 'Right'
		},
		type: {
			type: String,
			default: 'Confirm'
		},
		title: {
			type: String,
			default: '提示'
		},
		submitText: {
			type: String,
			default: '确定'
		},
		cancelText: {
			type: String,
			default: '取消'
		}
	},
	data() {
		return {
			handling: false,
			show: this.value
		}
	},
	watch: {
		value(val) {
			this.show = val;
			if (this.mask) {
				if (val) {
					this.$showMask();
				} else {
					this.$hideMask();
				}
			}
		}
	},
	created() {
		if (this.show && this.mask)
			this.$showMask();
	},
	methods: {
		handleSubmit() {
			let { beforeClose } = this;

			if (this.handling)
				return;

			this.handling = true;
			if (beforeClose) {
				beforeClose(this.handleSubmitAndClose);
			} else {
				this.handleSubmitAndClose();
			}
		},
		handleCancel() {
			this.cancel && this.cancel();
			this.closeAll();
		},
		closeAll() {
			this.show = false;
			this.$emit('input', false);
		},
		handleSubmitAndClose() {
			this.submit && this.submit();
			this.closeAll();
		}
	}
}
</script>

<style lang="stylus">
.cy-modal {
	position: fixed;
	top: 50%;
	left: 50%;
	z-index: 999;
	width: 75%;
	padding-top: 10px;
	transform: translate(-50%, -50%);
	background-color: white;
	border-radius: 2px;
	overflow: hidden;

	&-title {
		text-align: center;
		font-size: 18px;
	}

	&-content {
		padding: 15px 10px;
		text-align: center;
		font-size: 15px;
	}

	.cy-button-group {
		display: flex;

		button {
			width: 50%;

			&:first-child {
				border-right: 1px solid #ebedf0;
			}
		}
	}

	.cy-button {
		&-submit {
			color: #09bb07;
		}

		&-left {
			order: -1;
		}
	}

	button {
		border-left-width: 0;
		border-right-width: 0;
		border-bottom-width: 0;
	}
}
</style>
