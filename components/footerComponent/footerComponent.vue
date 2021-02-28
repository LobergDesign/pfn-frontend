<template>
	<footer class="footer">
		<div class="grid-w">
			<div class="grid-r">
				<div class="grid-c-11">
					<address>
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
					</address>
				</div>
				<div class="grid-c-5">
					<div class="on-top footer__right-section">
						<div v-if="data.footerText" v-html="toHtmlString(data.footerText.json)"></div>
						<ul class="ul-reset footer__social">
							<li v-if="data.facebook">
								<a :href="data.facebook" target="_blank">
									<SvgFacebook />
								</a>
							</li>
							<li v-if="data.linkedIn">
								<a :href="data.linkedIn" target="_blank">
									<SvgLinkedIn />
								</a>
							</li>
							<li v-if="data.youTube">
								<a :href="data.youTube" class="flex-bottom" target="_blank">
									<SvgYoutube />
								</a>
							</li>
							<li v-if="data.instagram">
								<a :href="data.instagram" target="_blank">
									<SvgInstagram />
								</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	</footer>
</template>
<style lang="scss" src="./footerComponent.scss"></style>
<script src="./footerComponent.ts"></script>
