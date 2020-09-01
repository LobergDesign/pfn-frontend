<template>
 <section class="container">
    <div class="grid grid-cols-1">
      <div class="col-span-1">
        <h3 class="text-xl mb-4">{{pageData.title}}</h3>
      </div>
      <div class="col-span-1">
        
          <h1 class="text-5xl pb-2">Some title</h1>
          <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum</p>
      
      </div>
      <div class="col-span-1">
        <ul>
          <li>
            <a :href="'tel:' + pageData.phonenumber">
              Tlf: {{pageData.phonenumber}}
            </a>
          </li>
          <li>
            <a :href="'tel:' + pageData.phonenumber">
              Tlf: {{pageData.phonenumber}}
            </a>
          </li>
          <li>
            <a :href="'tel:' + pageData.phonenumber">
              Tlf: {{pageData.phonenumber}}
            </a>
          </li>
          <li>
            <a :href="'tel:' + pageData.phonenumber">
              Tlf: {{pageData.phonenumber}}
            </a>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({})
</script>

<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
@apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family:
    'Quicksand',
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>


<script src="./index.ts"></script>