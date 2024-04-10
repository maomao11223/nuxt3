<script
  setup
  lang='ts'
>
import Header from './default/header.vue'

</script>
<template>
  <div>
    <Header>
    </Header>
    <div class="bg-dark" style="height:calc(100vh - 56px)">

      <slot />
    </div>
  </div>
</template>

<style scoped></style>../utils