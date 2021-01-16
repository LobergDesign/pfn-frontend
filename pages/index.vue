<template>
	<div>
		<HeroComponent
			:heroHeadline="data.pageHeadline"
			:heroBodytext="data.bodytext"
			:heroImage="data.image"
			:heroSubtitle="data.subtitle"
		/>
		<!-- {{ data }} -->
	</div>
</template>

<script src="./index.ts"></script>
