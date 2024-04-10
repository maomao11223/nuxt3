<script
    setup
    lang='ts'
>

const emits = defineEmits(['onClick'])

</script>
<template>
    <button
        class="btn btn-primary"
        @click.prevent="() => {  emits('onClick') }"
    >{{ $t('submit') }}</button>
</template>
<style scoped></style>