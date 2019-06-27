<template>
	<ul
		class="cy-picker-column"
		:style="{transform: `translate3d(0, ${baseOffset + offset}px, 0)`, transition: `all 200ms ease`}"
		@touchstart="handleTouchStart"
		@touchmove.prevent="handleTouchMove"
		@touchend="handleTouchEnd"
	>
		<li
			:class="['cy-picker-column-item', currentIndex === index ? bem('picker-column-item', 'active') : '']"
			:style="{height: `${itemHeight}px`, lineHeight: `${itemHeight}px`}"
			:key="index"
			v-for="(item, index) in column"
		>{{ keyVal ? item[keyVal] : item }}</li>
	</ul>
</template>

<script>
import Bem from '../mixins/bem';


function range(num, min, max) {
	return Math.min(Math.max(num, min), max);
}
export default {
	name: 'PicerColumn',
	mixins: [Bem],
	props: {
		baseOffset: Number,
		itemHeight: Number,
		visibleCount: Number,
		count: Number,
		focusPosition: String,
		column: Array,
		keyVal: String,
		value: {
			type: Number,
			default: 0
		},
	},
	data() {
		return {
			offset: 0,
			startY: 0,
			startOffsetY: 0,
			currentIndex: this.value
		}
	},
	methods: {
		handleTouchStart(e) {
			this.startY = e.touches[0].clientY;
			this.startOffsetY = this.offset;
		},
		handleTouchMove(e) {
			let deltaY = e.touches[0].clientY - this.startY;
			this.offset = range(
				this.startOffsetY + deltaY,
				-(this.count * this.itemHeight),
				this.itemHeight
			);
		},
		handleTouchEnd() {
			if (this.offset !== this.startOffsetY) {
				const index = range(Math.round(-this.offset / this.itemHeight), 0, this.count - 1);
				this.setIndex(index, true);
			}
		},
		setIndex(index, userAction) {
			index = this.adjustIndex(index) || 0;
			this.offset = -index * this.itemHeight;

			if (index !== this.currentIndex) {
				this.currentIndex = index;
				userAction && this.$emit('input', index);
			}
		},
		adjustIndex(index) {
			index = range(index, 0, this.count);
			for (let i = index; i < this.count; i++) {
				return i;
			}
			for (let i = index - 1; i >= 0; i--) {
				return i;
			}
		}
	}
}
</script>

<style lang="stylus">
ul {
	margin: 0;
	padding: 0;
	list-style: none;
}

.cy-picker-column-item {
	text-align: center;

	&--active {
		font-weight: bold;
	}
}
</style>
