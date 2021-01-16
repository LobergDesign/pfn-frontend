<template>
	<section class="hero">
		<div class="grid-r">
			<div class="grid-c-11-offset-2">
				<h1 v-if="heroHeadline" v-html="toHtmlString(heroHeadline.json)"></h1>

				<h2 v-if="heroSubtitle" class="headline-3">{{ heroSubtitle }}</h2>
			</div>
			<div class="grid-c-14">
				<picture>
					<source
						:data-srcset="heroImage.url + '?w=500&fm=webp'"
						media="(max-width: 500px)"
						type="image/webp"
					/>
					<source
						:data-srcset="heroImage.url + '?w=1400&fm=webp'"
						media="(min-width: 1000px)"
						type="image/webp"
					/>
					<img
						src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
						:data-src="heroImage.url + '?w=1400'"
						:alt="heroImage.title"
						class="lazyload"
					/>
				</picture>

				<!-- <p v-if="heroImage.description" class="caption">
          {{ heroImage.description }}
        </p>
        <div v-if="heroBodytext" v-html="heroBodytext"></div> -->
			</div>
		</div>
	</section>
</template>
<style lang="scss" src="./heroComponent.scss"></style>
<script src="./heroComponent.ts"></script>
