<template>
  <section class="container">
    <h3>{{ pageData.title }}</h3>

    <div>
      <h1>Some title</h1>
      <p>
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
        voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
        clita kasd gubergren, no sea takimata sanctus est Lorem ipsum
      </p>
    </div>

    <ul>
      <li>
        <a :href="'tel:' + pageData.phonenumber">
          Tlf: {{ pageData.phonenumber }}
        </a>
      </li>
      <li>
        <a :href="'tel:' + pageData.phonenumber">
          Tlf: {{ pageData.phonenumber }}
        </a>
      </li>
      <li>
        <a :href="'tel:' + pageData.phonenumber">
          Tlf: {{ pageData.phonenumber }}
        </a>
      </li>
      <li>
        <a :href="'tel:' + pageData.phonenumber">
          Tlf: {{ pageData.phonenumber }}
        </a>
      </li>
    </ul>
  </section>
</template>
<script src="./index.ts"></script>