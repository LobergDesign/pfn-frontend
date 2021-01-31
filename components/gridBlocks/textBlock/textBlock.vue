<template>
	<div class="grid-r">
		<div class="grid-c-14-offset-2">
			<div v-if="bodytext" v-html="toHtmlString(bodytext.json)"></div>
		</div>
	</div>
</template>
<script src="./textBlock.ts"></script>
