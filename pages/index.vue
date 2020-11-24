<template>
  <section class="container">
    <div>
      <div>
        <h1>
          {{ data.title }}
        </h1>
        <h2>{{ data.subtitle }}</h2>
      </div>
      <div>
        <picture>
          <source
            :data-srcset="data.image.url + '?w=500&fm=webp'"
            media="(max-width: 500px)"
            type="image/webp"
          />
          <source
            :data-srcset="data.image.url + '?w=1400&fm=webp'"
            media="(min-width: 1000px)"
            type="image/webp"
          />
          <img
            src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
            :data-src="data.image.url + '?w=1400'"
            :alt="data.image.title"
            class="lazyload"
          />
        </picture>

        <p v-if="data.image.description" class="caption">
          {{ data.image.description }}
        </p>
      </div>
    </div>
  </section>
</template>

<script src="./index.ts"></script>