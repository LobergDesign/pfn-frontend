<template>
    <section class="hero">
   <div class="grid-r">
      <div class="grid-c-11-offset-2">
        <h1>
          {{ title }}
        </h1>
        <h2>{{ subtitle }}</h2>
      </div>
      <div class="grid-c-14">
        <picture>
          <source
            :data-srcset="image.url + '?w=500&fm=webp'"
            media="(max-width: 500px)"
            type="image/webp"
          />
          <source
            :data-srcset="image.url + '?w=1400&fm=webp'"
            media="(min-width: 1000px)"
            type="image/webp"
          />
          <img
            src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
            :data-src="image.url + '?w=1400'"
            :alt="image.title"
            class="lazyload"
          />
        </picture>

        <p v-if="image.description" class="caption">
          {{ image.description }}
        </p>
        <div v-if="bodytext" v-html="bodytext"></div>
      </div>
    </div>
    </section>
</template>
<style lang="scss" src="./heroComponent.scss"></style>
<script src="./heroComponent.ts"></script>
