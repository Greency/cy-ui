<template>
	<div class="cy-dialog">
		<header class="cy-dialog-title">{{options.title}}</header>
		<div class="cy-dialog-content" v-html="options.content"></div>
		<div class="cy-button-group" v-if="type === 'Confirm'">
			<cy-button shape="square" @click="handleCancel">{{options.cancelText}}</cy-button>
			<cy-button shape="square" @click="handleSubmit">{{options.submitText}}</cy-button>
		</div>
		<cy-button v-else shape="square" size="large" @click="handleSubmit">{{options.submitText}}</cy-button>
	</div>
</template>

<script>
import Button from '../button';

export default {
	name: 'Dialog',
	data() {
		return {
			handling: false,
			type: 'Confirm',
			options: {
				title: '提示',
				content: '',
				submitText: '确定',
				cancelText: '取消',
				beforeClose: null,
				cancel: null,
				submit: null
			},
		}
	},
	components: {
		'cy-button': Button
	},
	created() {
		this.$showMask();
	},
	methods: {
		handleSubmit() {
			let { beforeClose } = this.options;

			if (this.handling)
				return;

			this.handling = true;
			if (beforeClose) {
				console.log('handling', this.handling);
				beforeClose(this.handleSubmitAndClose);
				return;
			}
			this.handleSubmitAndClose();
		},
		handleCancel() {
			this.cancel && this.cancel();
			this.closeAll();
		},
		closeAll() {
			this.$hideMask();
			this.$destroy();
			document.body.removeChild(this.$el);
		},
		handleSubmitAndClose() {
			this.submit && this.submit();
			this.closeAll();
		}
	}
}
</script>

<style lang="stylus">
.cy-dialog {
	position: fixed;
	width: 75%;
	top: 50%;
	left: 50%;
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

	button {
		border-left-width: 0;
		border-right-width: 0;
		border-bottom-width: 0;
	}
}
</style>
