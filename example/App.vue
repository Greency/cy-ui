<template>
	<router-view></router-view>
	<!--<router-link :to="{ name: 'index'}">User</router-link>-->
</template>

<script>
export default {
	name: 'app',
	created(){
		console.log('APP created!');
	}
}
</script>

<style lang="stylus">
@font-face {
	font-family: 'iconfont';
	src: url('//at.alicdn.com/t/font_1250118_iml9f6kittd.eot');
	src: url('//at.alicdn.com/t/font_1250118_iml9f6kittd.eot?#iefix') format('embedded-opentype'), url('//at.alicdn.com/t/font_1250118_iml9f6kittd.woff2') format('woff2'), url('//at.alicdn.com/t/font_1250118_iml9f6kittd.woff') format('woff'), url('//at.alicdn.com/t/font_1250118_iml9f6kittd.ttf') format('truetype'), url('//at.alicdn.com/t/font_1250118_iml9f6kittd.svg#iconfont') format('svg');
}

body {
	font-family: 'PingFang SC', Helvetica, 'STHeiti STXihei', 'Microsoft YaHei', Tohoma, Arial, sans-serif;
	margin: 15px;
}

ul {
	list-style: none;
	margin: 0;
	padding: 0;
}
</style>
