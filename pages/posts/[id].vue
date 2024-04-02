<script
    setup
    lang='ts'
>
const route = useRoute();
const id = ref(route.params.id)
console.log(route.params.id)
useHead({
    title: '我的应用123123',
    meta: [
        { name: 'description', content: '我的神奇网站。' }
    ],
    bodyAttrs: {
        class: 'test'
    },
    script: [{ innerHTML: 'console.log(\'Hello world\')' }]
})

useSeoMeta({
    title: '我的神奇网站123123',
    ogTitle: '我的神奇网站',
    description: '这是我的神奇网站，让我来告诉你关于它的一切。',
    ogDescription: '这是我的神奇网站，让我来告诉你关于它的一切。',
    ogImage: 'https://example.com/image.png',
    twitterCard: 'summary_large_image',
})

definePageMeta({
    validate: async (route) => {
        return /^\d+$/.test(route.params.id)
    }
})


</script>
<template>
    <div>
        {{ $t('id') }}:
        {{ id }}
    </div>
</template>
<style scoped></style>