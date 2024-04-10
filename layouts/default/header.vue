<script
    setup
    lang='ts'
>

import Svg from '@/components/common/svg/base.vue'
import BaseSelect from '~/components/common/select/base.vue'
const { setLocale } = useI18n();

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
    selectedLocale.value = inValue;

    await setLocale(inValue);
}

const menuList = ref([
    {
        name: 'todo',
        routerName: '/todo',
        children: []
    }, {
        name: 'tictactoe',
        routerName: '/tictactoe',
        children: []
    }
])




</script>
<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-dark">
        <div class="container-fluid">
            <NuxtLink
                class="navbar-brand"
                to="/"
            >
                <Svg
                    name="solar:planet-bold"
                    class="text-white"
                ></Svg>
            </NuxtLink>
            <button
                class="navbar-toggler border-white"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
            <Svg
            name="material-symbols:menu"
            class="text-white"
        ></Svg>
            </button>
            <div
                class="collapse navbar-collapse"
                id="navbarSupportedContent"
            >
                <ul class="navbar-nav me-auto mb-2 mb-lg-0 w-100">
                    <li
                        class="nav-item "
                        v-for="m in menuList"
                        :key="m.routerName"
                    >
                        <NuxtLink
                            class="nav-link text-white"
                            :to="m.routerName"
                        >{{ $t(m.name) }}</NuxtLink>
                    </li>
                    <li class="ms-lg-auto col-auto">
                        <div class="">
                            <base-select
                                :options="localeOpts"
                                :selected="selectedLocale"
                                @onSelect="getSelected"
                            ></base-select>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template> 
<style></style>