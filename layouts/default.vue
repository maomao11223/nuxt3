<script
  setup
  lang='ts'
>
import BaseSelect from '../components/common/select/baseSelect.vue'
import { getCookie, setCookie } from '../utils/cookie'
const { locale, setLocale } = useI18n();


const localeOpts = ref([{
  value: 'en',
  label: 'English'
}, {
  value: 'zh-tw',
  label: '中文'
}])

const selectedLocale = ref<string>('')

if (getCookie('i18n_redirected')) {

  selectedLocale.value = getCookie('i18n_redirected')
}


const getSelected = async (inValue) => {
  console.log(inValue);
  selectedLocale.value = inValue;
  setCookie('i18n_redirected', inValue, 1)
  await setLocale(inValue);
}

</script>
<template>
  <header>
    <nav class="navbar navbar-expand navbar-light bg-light">
      <div
        class="collapse navbar-collapse"
        id="navbarNav"
      >

        <ul class="navbar-nav">
          <li class="nav-item active">
            <NuxtLink
              class="nav-link"
              to="/"
            >Home</NuxtLink>
          </li>
          <li class="nav-item">
            <NuxtLink
              class="nav-link"
              to="/about"
            >关于</NuxtLink>
          </li>
          <li class="nav-item">
            <NuxtLink
              class="nav-link"
              to="/posts/1"
            >文章1</NuxtLink>
          </li>
          <li class="nav-item">
            <NuxtLink
              class="nav-link"
              to="/posts/2"
            >文章2</NuxtLink>
          </li>
        </ul>
        <div class="col-1">
          <base-select
            :options="localeOpts"
            :selected="selectedLocale"
            @onSelect="getSelected"
          ></base-select>
        </div>
      </div>
    </nav>
    <slot />
  </header>

</template>

<style scoped></style>../utils