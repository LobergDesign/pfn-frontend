<template>
  <div class="grid-w">
    <HeaderComponent />
    <div class="grid-r">
      <div class="test-div grid-c-16">
        <h2>16 grid</h2>
        <ul>
          <li>Grid: <strong>16</strong></li>
          <li>Grid gap: <strong>3.2%</strong></li>
          <li>Grid inner padding: <strong>1.2vw</strong></li>
        </ul>
      </div>
    </div>
    <div class="grid-r">
      <div class="test-div grid-c-4">
        <h2>item</h2>
        <div class="grid-r">
          <div class="grid-c-4 test-div">col</div>
          <div class="grid-c-4 test-div">col</div>
          <div class="grid-c-4 test-div">col</div>
          <div class="grid-c-4 test-div">col</div>
        </div>
      </div>
      <div class="test-div grid-c-4">
        <h2>item</h2>
        <div class="grid-r">
          <div class="grid-c-4 test-div">col</div>
          <div class="grid-c-4 test-div">col</div>
          <div class="grid-c-4 test-div">col</div>
        </div>
      </div>
      <div class="test-div grid-c-4">
        <h2>item</h2>
        <div class="grid-r">
          <div class="grid-c-16 test-div">col</div>
        </div>
      </div>
      <div class="test-div grid-c-4">
        <h2>item</h2>
        <div class="grid-r">
          <div class="grid-c-8 test-div">col</div>
          <div class="grid-c-4 test-div">col</div>
          <div class="grid-c-4 test-div">col</div>
        </div>
      </div>
    </div>
    <div class="grid-r">
      <div class="test-div grid-c-4">
        <h2>item</h2>
      </div>
      <div class="test-div grid-c-4">
        <h2>items</h2>
        <div class="grid-r">
          <div class="grid-c-8 test-div">col</div>
          <div class="grid-c-8 test-div">col</div>
        </div>
      </div>
      <div class="test-div grid-c-8">
        <h2>item</h2>
      </div>
    </div>
    <div class="grid-r">
      <div class="test-div grid-c-16">
        <h2>item</h2>
         <div class="grid-r">
      <div class="test-div grid-c-8">
        <h2>item</h2>
      </div>
    </div>
      </div>
    </div>
    <Nuxt />
  </div>
</template>
