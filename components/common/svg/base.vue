<script
    setup
    lang='ts'
>

const props = defineProps(
    {
        size: {
            type: String,
            default: "20"
        },
        fontColor: {
            type: String,
            default: 'text-primary'
        },
        name: {
            default: 'ic:round-check-circle-outline',
            type: String,
        }

    }
)
</script>
<template>
    <Icon
        :size="props.size"
        :class="props.fontColor"
        :name="props.name"
    ></Icon>
</template>
<style scoped></style>