<script
    setup
    lang='ts'
>
const props = defineProps({
    options: {
        default: () => []
    },
    selected: String
})
const emits = defineEmits(['onSelect'])
const { selected } = toRefs(props)


const onChange = (inValue: Event) => {
    emits('onSelect', inValue?.target.value)
}


</script>
<template>
    <select
        class="form-select"
        aria-label="Default select example"
        v-model="selected"
        @change="onChange"
    >
        <option selected>{{ $t('select') }}</option>
        <option
            v-for="opt in options"
            :key="opt.value"
            :value="opt.value"
        >{{ opt.label }}</option>
    </select>
</template>
<style scoped></style>