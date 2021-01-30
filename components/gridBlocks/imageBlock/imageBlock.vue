<template>
	<div>
		<h2>Imageblock</h2>
		<div v-for="(item, index) in imageItems.items" :key="index">
			{{ item.url }}
		</div>
		{{ fullscreen }}
	</div>
</template>
<style lang="scss" src="./imageBlock.scss"></style>
<script src="./imageBlock.ts"></script>
