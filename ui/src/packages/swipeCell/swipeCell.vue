<template>
	<div class="cy-swipe-cell">
		<div class="cy-swipe-cell-right">
			<slot name="right"></slot>
		</div>
		<div
			class="cy-swipe-cell-content"
			:style="{transform: `translate3d(${offsetX}px, 0, 0)`}"
			@touchstart="handleTouchStart"
			@touchmove.prevent="handleTouchMove"
			@touchend="handleTouchEnd"
		>
			<slot name="content"></slot>
		</div>
	</div>
</template>

<script>
import FindParent from '../mixins/findParent';

export default {
	name: 'SwipeCell',
	mixins: [FindParent],
	props: {
		index: Number
	},
	data() {
		return {
			expand: false,
			rightWidth: 100,
			startX: 0,
			offsetX: 0
		}
	},
	computed: {
		active() {
			return (this.parent || this).index === this.index;
		}
	},
	watch: {
		active(val) {
			if (!val) {
				this.expand = false;
				this.offsetX = 0;
			}
		}
	},
	created() {
		this.findParent('SwipeCellGroup');
	},
	methods: {
		handleTouchStart(e) {
			if (this.expand) {
				this.offsetX = 0;
			} else {
				this.startX = e.touches[0].clientX;
			}
		},
		handleTouchMove(e) {
			let offsetX = e.touches[0].clientX - this.startX;

			if (offsetX <= 0) {
				this.offsetX = offsetX;
			}
		},
		handleTouchEnd() {
			let { rightWidth, offsetX } = this;

			if (Math.abs(offsetX) < rightWidth / 2) {
				this.expand = false;
				this.offsetX = 0;
			} else {
				this.expand = true;
				this.offsetX = -rightWidth;
				this.startX = this.offsetX;
				if (this.parent)
					this.parent.index = this.index;
			}
		}
	}
}
</script>

<style lang="stylus">
.cy-swipe-cell {
	position: relative;
	width: 100%;
	overflow: hidden;

	&-content {
		position: relative;
		width: 100%;
		transition: all 200ms ease;
	}

	&-right {
		position: absolute;
		top: 0;
		right: 0;
		height: 100%;
	}
}
</style>
