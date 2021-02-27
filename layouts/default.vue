<template>
	<div class="grid-w">
		<HeaderComponent />
		<div class="main-content">
			<Nuxt />
		</div>
		<FooterComponent :footerData="footerData" />
	</div>
</template>
<script src="./default.ts"></script>