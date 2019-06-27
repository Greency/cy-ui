<template>
	<div class="container">
		<div class="card">
			<h3>默认样式</h3>
			<cy-button type="primary" @click="handleOperate('default')">默认样式</cy-button>
		</div>
		<div class="card">
			<h3>成功样式</h3>
			<cy-button type="primary" @click="handleOperate('success')">操作成功</cy-button>
		</div>
		<div class="card">
			<h3>失败样式</h3>
			<cy-button type="primary" @click="handleOperate('fail')">操作失败</cy-button>
		</div>
	</div>
</template>

<script>
export default {
	methods: {
		handleOperate(type) {
			switch (type) {
				case 'default': this.$showToast('这是默认样式啦！'); break;
				case 'success': this.$showToast({
					mode: 'success',
					content: '操作成功'
				}); break;
				case 'fail': this.$showToast({
					mode: 'fail',
					content: '操作失败'
				}); break;
				default: return;
			}
		}
	}
}
</script>

<style lang="stylus">
.card {
	margin-bottom: 10px;
}
</style>
