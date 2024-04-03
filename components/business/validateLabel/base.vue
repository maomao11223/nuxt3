<script
    setup
    lang='ts'
>


const props = defineProps({
    'label': {
        type: String,
        default: ''
    },
    'errors': { default: '' },
    'required': { type: Boolean, default: true },
})

</script>
<template>
    <div class="row">
        <div class="col-auto">
            <label
                for="exampleInputEmail1"
                class="col-form-label font-expand "
                :class="{ 'required': props.required }"
            >{{ $t(props.label) }}</label>
        </div>
        <slot name="inputField"></slot>
    </div>

    <template v-if="props.errors">
        <div class="text-danger">{{ props.errors[props.label] }}</div>
    </template>
</template>
<style scoped></style>