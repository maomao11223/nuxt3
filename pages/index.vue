<script
    setup
    lang="ts"
>

import Api from '@/apis/index'
const title = ref('你好，世界')

const res = ref<string>('')

const getHello =async () => {
     res.value = await Api.hello.getHello(); 
    // res.value = await $fetch('/api/hello') 
    console.log(res.value)


}

onMounted(async () => {
    await getHello();
})
 
</script>

<template>
    <div class="content home-header">
        <h1 class="animte_animated animate__bounce">{{ title }}</h1>
        <p>{{ $t('hello') }}</p>

        {{ res }}
    </div>

</template>
<style scope>
.content {
    background-color: aqua;
}
</style>~/apis/todo