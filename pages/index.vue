<script
    setup
    lang="ts"
>

const title = ref('你好，世界')

</script>

<template>
    <div class="content home-header">

        <h1>{{ title }}</h1>
        <p>{{ $t('hello') }}</p>
    </div>
</template>
<style scope>
.content {
    background-color: aqua;
}
</style>~/apis/todo