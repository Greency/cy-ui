<template>
	<div class="cy-loading" v-if="show">
		<div class="cy-loading-icon">
			<svg
				version="1.1"
				id="loader-1"
				x="0px"
				y="0px"
				width="48"
				height="48"
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
		</div>
		<span class="cy-loading-content">{{content}}</span>
	</div>
</template>

<script>
export default {
	name: 'Loading',
	data() {
		return {
            show: true,
			mask: false,
			content: '加载中...'
		}
    }
}
</script>

<style lang="stylus">
.cy-loading {
	box-sizing: border-box;
	display: inline-flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	position: fixed;
	top: 50%;
	left: 50%;
	width: 100px;
	min-height: 100px;
	padding: 10px;
	font-size: 14px;
	color: white;
	background-color: rgba(0, 0, 0, 0.5);
	border-radius: 4px;
	transform: translate(-50%, -50%);

	&-icon {
		margin-bottom: 5px;
	}

	&-content {
		text-align: center;
	}
}
</style>
