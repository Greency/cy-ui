<template>
	<cy-popup class="cy-popup" v-model="show">
		<div class="cy-picker" :style="{height: `${itemHeight * (visibleCount + 1 )}px`}">
			<div
				class="cy-picker-focus-line"
				:style="{height: `${itemHeight}px`, top: `${baseOffset + itemHeight}px`}"
			></div>
			<div class="cy-picker-header" :style="{height: `${itemHeight}px`}">
				<cy-button class="cancel btn" @click="handleClose">取消</cy-button>
				<cy-button class="submit btn" @click="handleSubmit">确定</cy-button>
			</div>
			<div class="cy-picker-columns-container">
				<cy-picker-column
					class="cy-picker-column"
					v-model="result[index]"
					:itemHeight="itemHeight"
					:visibleCount="visibleCount"
					:baseOffset="baseOffset"
					:keyVal="keyVal"
					:column="item"
					:count="item.length"
					:key="index"
					v-for="(item, index) in columns"
				></cy-picker-column>
			</div>
		</div>
	</cy-popup>
</template>

<script>
import Popup from '../../popup';
import PickerColumn from './pickerColumn';
import Button from '../../button';

export default {
	name: 'Picker',
	components: {
		'cy-popup': Popup,
		'cy-picker-column': PickerColumn,
		'cy-button': Button
	},
	props: {
        value: Boolean,
		columns: Array,
        keyVal: String,
        showMask: {
            type: Boolean,
            default: true
        },
		itemHeight: {
			type: Number,
			default: 40
		},
		visibleCount: {
			type: Number,
			default: 5
		},
		focusPosition: {
			type: String,
			default: 'top',
		}
	},
	data() {
		return {
			show: this.value,
			result: [],
			baseOffset: 0
		}
	},
	watch: {
		show(val) {
            this.$emit('input', val);
            if (val && this.showMask)
                this.$showMask();
		},
		value(val) {
			this.show = val;
		},
		columns(val) {
			let result = [];
			val.forEach((item) => {
				result.push(0);
			});

			this.result = result;
		}
	},
	created() {
		let { focusPosition, baseOffset, visibleCount, itemHeight, columns, show, showMask } = this,
            result = [];
            
		switch (focusPosition) {
			case 'top': baseOffset = 0; break;
			case 'middle': baseOffset = Math.floor(visibleCount / 2) * itemHeight; break;
			case 'bottom': baseOffset = (visibleCount - 1) * itemHeight; break;
			default: console.error('focusPosition的值必须为top, middle, bottom其中之一');
		}

		columns.forEach((item) => {
			result.push(0);
        });

        if (show && showMask)
            this.$showMask();

		this.baseOffset = baseOffset;
		this.result = result;
	},
	methods: {
		handleClose() {
            this.$hideMask();
            this.show = false;
            this.$emit('input', false);
            this.$emit('close');
		},
		handleSubmit() {
            this.$emit('submit', this.result);
            this.handleClose();
		}
	}
}
</script>

<style lang="stylus">
.cy-popup {
	width: 100%;
}

.cy-picker {
	position: relative;
	background-color: white;

	.cy-picker-focus-line {
		position: absolute;
		left: 0;
		width: 100%;
		border-top: 1px solid #ebedf0;
		border-bottom: 1px solid #ebedf0;
	}

	.cy-picker-header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		border-top: 1px solid #ebedf0;
		border-bottom: 1px solid #ebedf0;

		.btn {
			height: 100%;
			line-height: 100%;
			border-color: white;
		}

		.submit {
			color: #1989fa;
		}

		.cancel {
			color: #cccccc;
		}
	}

	.cy-picker-columns-container {
		display: flex;
		overflow: hidden;

		.cy-picker-column {
			flex-grow: 1;
		}
	}
}
</style>
