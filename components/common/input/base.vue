<script
    setup
    lang='ts'
>

const value = defineModel('value')

const props = defineProps({
    type: {
        default: 'text'
    }
})



</script>
<template>
    <input
        v-model="value"
        :type="props.type"
        class="form-control w-100"
        aria-label="Dollar amount (with dot and two decimal places)"
        :placeholder="$t('placeholder.enter')"
    >
</template>
<style scoped></style>