<script
    setup
    lang='ts'
>

const emits = defineEmits(['onClick'])

</script>
<template>
    <button
        type="submit"
        class="btn btn-primary"
        @click="() => { emits('onClick') }"
    >{{ $t('submit') }}</button>
</template>
<style scoped></style>