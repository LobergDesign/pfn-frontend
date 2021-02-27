<template>
	<footer class="footer">
		<div class="grid-r">
			<div class="grid-c-10">
				<span class="footer__header">Kontakt</span>
				<span v-if="data.phonenumber"
					>Tlf: <a :href="'tel:' + data.phonenumber">{{ data.phonenumber }}</a></span
				>
				<span v-if="data.email"
					>Mail: <a :href="'mailto:' + data.email">{{ data.email }}</a></span
				>
				<span class="footer__header">Adresse</span>
				<span v-if="data.adresse">{{ data.adresse }}</span>
				<span v-if="data.zipcodeAndCity">{{ data.zipcodeAndCity }}</span>
			</div>
			<div class="grid-c-6">
				<div v-if="data.footerText" v-html="toHtmlString(data.footerText.json)"></div>
				<ul>
					<li v-if="data.facebook">
						<a :href="data.facebook">
							{{ data.facebook }}
						</a>
					</li>

					<li v-if="data.linkedIn">
							<a :href="data.facebook">
							{{ data.facebook }}
						</a>
					</li>
					<li v-if="data.youTube">
							<a :href="data.youTube">
							{{ data.youTube }}
						</a>}</li>
					<li v-if="data.instagram">
							<a :href="data.instagram">
							{{ data.instagram }}
						</a>
					</li>
				</ul>
			</div>
		</div>
	</footer>
</template>
<style lang="scss" src="./footerComponent.scss"></style>
<script src="./footerComponent.ts"></script>
