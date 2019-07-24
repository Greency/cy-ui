<template>
	<div class="container">
		<cy-button type="primary" @click="showNotice('success', '成功啦！')">成功</cy-button>
		<cy-button type="warning" @click="showNotice('warning', '警告警告警告警告警告警告警告警告警告警告警告警告警告警告警告警告警告')">警告</cy-button>
		<cy-button type="danger" @click="showNotice('danger', '危险')">危险</cy-button>
	</div>
</template>

<script>
export default {
	name: 'Test',
	methods: {
		showNotice(type, content) {
			this.$showNotice({
				type,
				content
			});
		}
	}
}
</script>
