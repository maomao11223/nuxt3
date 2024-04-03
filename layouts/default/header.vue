<script
    setup
    lang='ts'
>
import BaseSelect from '~/components/common/select/base.vue'
import { ref } from 'vue'
const { setLocale } = useI18n();

const { $bootstrap } = useNuxtApp();

const localeOpts = ref([{
    value: 'en',
    label: 'English'
}, {
    value: 'zh-tw',
    label: '中文'
}])

const selectedLocale = useCookie('i18n_redirected')

if (!selectedLocale.value) {
    selectedLocale.value = localeOpts.value[0].value
}

const getSelected = async (inValue) => {
    console.log(inValue);
    selectedLocale.value = inValue;

    await setLocale(inValue);
}

const menuList = ref([
    {
        name: 'todo',
        routerName: '/todo',
        children: []
    }
])




</script>
<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
            <a
                class="navbar-brand"
                href="#"
            >Navbar</a>
            <div class="col-auto">
                <base-select
                    :options="localeOpts"
                    :selected="selectedLocale"
                    @onSelect="getSelected"
                ></base-select>
            </div>
            <button
                class="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span class="navbar-toggler-icon"></span>
            </button>
            <div
                class="collapse navbar-collapse"
                id="navbarSupportedContent"
            >
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li
                        class="nav-item"
                        v-for="m in menuList"
                        :key="m.routerName"
                    >
                        <NuxtLink
                            class="nav-link"
                            :to="m.routerName"
                        >{{ $t(m.name) }}</NuxtLink>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>
<style scoped></style>