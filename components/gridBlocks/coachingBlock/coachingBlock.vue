<template>
	<div class="list-block">
		<div class="grid-r">
			<div class="grid-c-10-offset-2 grid-remove-offset-sm"></div>
			<div class="grid-c-16"></div>
		</div>
		<ul class="reset-ul grid-r">
			<li v-for="(item, index) in items" :key="index" class="grid-c-16 grid-c-sm-8 grid-c-md-4 list-block__item">
				<nuxt-link :to="'coaching/' + item.slug + '/'">
					<h3 class="list-block__item-headline">{{ item.title }}</h3>
					<div v-if="item.bodytext" v-html="toHtmlString(item.bodytext.json)"></div>
				</nuxt-link>
			</li>
			<li class="grid-c-16 grid-c-sm-8 grid-c-md-4 list-block__item list-block__item--last">
				<nuxt-link :to="'coaching/'">
					<span class="list-block__item-headline" v-if="blockData.title">{{ blockData.title }}</span>
					<p v-if="blockData.subtitle">{{ blockData.subtitle }}</p>
					<SvgArrow />
				</nuxt-link>
			</li>
		</ul>
	</div>
</template>
<style lang="scss" src="./coachingBlock.scss"></style>
<script src="./coachingBlock.ts"></script>
