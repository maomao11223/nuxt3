<script
    setup
    lang='ts'
>

const value = defineModel('value')

const props = defineProps({

})



</script>
<template>
    <textarea
        v-model="value"
        class="form-control w-100"
        aria-label="Dollar amount (with dot and two decimal places)"
        :placeholder="$t('placeholder.enter')"
    ></textarea>
</template>
<style scoped></style>