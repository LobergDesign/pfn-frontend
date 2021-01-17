<template>
	<header class="header">
		<ul>
			<li v-for="(item, index) in menuItems.items" :key="index">
				<nuxt-link :to="item.slug"> 
          {{ item.slug }}
        </nuxt-link>
			</li>
		</ul>
		<div class="grid-r">
			<div class="grid-c-4">
				<nuxt-link to="/"><img src="/pfn-logo.png" class="header__logo" /></nuxt-link>
			</div>
			<div class="grid-c-12">
				<nav class="header__nav full-height">
					<ul class="reset-ul header__nav-list full-height flex-end flex-vertical-center">
						<li class="header__nav-list-item">
							<nuxt-link to="/">Forside</nuxt-link>
						</li>
						<li class="header__nav-list-item">
							<nuxt-link to="/grid/">Grid page</nuxt-link>
						</li>
						<li>
							<nuxt-link to="/kontakt/" class="btn">Book foredrag</nuxt-link>
						</li>
					</ul>
				</nav>
			</div>
		</div>
	</header>
</template>
<style lang="scss" src="./headerNavigation.scss"></style>
<script src="./headerComponent.ts"></script>
