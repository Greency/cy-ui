<template>
	<div class="container">
		<div class="card">
			<h3>默认类型</h3>
			<cy-button class="button" @click="test">默认按钮</cy-button>
			<cy-button class="button" type="primary">确认按钮</cy-button>
			<cy-button class="button" type="info">信息按钮</cy-button>
			<cy-button class="button" type="warning">警告按钮</cy-button>
			<cy-button class="button" type="danger">危险按钮</cy-button>
		</div>
		<div class="card">
			<h3>直角按钮</h3>
			<cy-button class="button" type="primary" shape="square">确认按钮</cy-button>
		</div>
		<div class="card">
			<h3>圆角按钮</h3>
			<cy-button class="button" type="info" shape="round">信息按钮</cy-button>
			<cy-button class="button" type="warning" shape="round">圆</cy-button>
		</div>
		<div class="card">
			<h3>加载</h3>
            <cy-button class="button" type="danger" shape="square" loading>加载中</cy-button>
            <cy-button class="button" type="danger" loading>加载中</cy-button>
			<cy-button class="button" type="danger" shape="round" loading>加载中</cy-button>
		</div>
	</div>
</template>

<script>
export default {
	name: '',
	methods: {
		test(){
			this.$showToast({
				mode: 'success',
				content: 'fsdfsdf'
			});
		}
	}
}
</script>

<style lang="stylus">
.button {
	margin-right: 10px;
	margin-bottom: 10px;
}
</style>
