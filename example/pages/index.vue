<template>
    <ul class="list">
		<li class="item" :key="index" v-for="(item, index) in componentsData" @click="navTo(item.path)">{{item.name}}</li>
	</ul>
</template>

<script>
export default {
	name: 'Index',
	data() {
		return {
			componentsData: [
				{ name: 'Button', path: 'button' },
				{ name: 'Toast', path: 'toast' },
			]
		}
	},
	created(){
		console.log('created');
	},
	methods: {
		navTo(path){
			this.$router.push({ path });
		}
	}
}
</script>

<style lang="stylus">
.list {
	.item {
		display: flex;
		align-items: center;
		position: relative;
		height: 48px;
		border-bottom: 1px solid #ebedf0;

		&::after {
			content: '\e6a5';
			position: absolute;
			right: 0;
			font-family: 'iconfont';
			color: black;
			font-size: 30px;
			transform: rotate(90deg);
		}
	}
}
</style>
