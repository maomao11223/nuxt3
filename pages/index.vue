<script
    setup
    lang="ts"
>
const { $wow } = useNuxtApp();
const title = ref("學習筆記")

useHead({
    title: 'Learning Notes',
    meta: [
        { name: 'description', content: 'My Learning Notes' }
    ]
})



onMounted(async () => {
    $wow().init();
})

</script>

<template>
    <div class="content home-header container pt-4 text-white">
        <h1 class="xyz-in" xyz="fade up big">{{ title }}</h1>
        <p>{{ $t('hello') }}</p>
        <p>努力看到天花板!</p>
    </div>

</template>
