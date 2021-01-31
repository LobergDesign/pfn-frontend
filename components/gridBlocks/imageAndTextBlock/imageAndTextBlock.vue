<template>
	<div class="grid-r">
		<div class="grid-c-14-offset-2">
			<div class="grid-r">
				<div class="grid-c-16">
					{{ label }}
				</div>
				<div class="grid-c-8 grid-c-m-16 " v-if="bodytext">
					<div v-html="toHtmlString(bodytext.json)"></div>
				</div>
				<div class="grid-c-8 grid-c-m-16  flex-center-center" v-if="image">
					<picture>
						<source
							:data-srcset="image.url + '?w=500&fm=webp'"
							media="(max-width: 500px)"
							type="image/webp"
						/>
						<source
							:data-srcset="image.url + '?w=700&fm=webp'"
							media="(min-width: 1000px)"
							type="image/webp"
						/>
						<img
							src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
							:data-src="image.url + '?w=700'"
							:alt="image.title"
							class="lazyload"
						/>
					</picture>
					<span v-if="image.description">{{ image.description }}</span>
				</div>
			</div>
		</div>
	</div>
</template>
<style lang="scss" src="./imageAndTextBlock.scss"></style>
<script src="./imageAndTextBlock.ts"></script>
