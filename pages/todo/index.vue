<script
    setup
    lang='ts'
>
import { ref } from 'vue';
import BaseInput from '@/components/common/input/base.vue';
import BaseTextarea from '@/components/common/textarea/base.vue';
import SubmitBtn from '@/components/business/button/submit.vue';
import ValidateLabel from '@/components/business/validateLabel/base.vue';

import * as yup from 'yup'

import CardList from '@/components/business/todo/list/index.vue';
import { useForm } from 'vee-validate';
const schema = yup.object({
    title: yup.number().required(),
})

const { values, errors, defineField } = useForm({
    validationSchema: schema,
});

const [title, titleAttrs] = defineField('title')



const formValue = ref({
    id: '0',
    content: ''
})

const editHandler = (inItem: Obejct) => {
    console.log("🚀 ~ inItem:", inItem);

    title.value = inItem.title;
    formValue.value.id = inItem.id;
    formValue.value.content = inItem.content;

}


const submitHandler = () => {
    if (formValue.value.id === '0') {
        //add api
    } else {
        //edit api
    }
}


const getData = async () => {

    const { data } = await $fetch('/api/count', {
        method: 'GET',

    })
}

getData();



</script>
<template>
    <div class="container pt-4">
        {{ data }}
        <div class="card mb-4">
            <div class="card-body">
                <form class="form">
                    <div class="mb-3">
                        <ValidateLabel
                            label="title"
                            :errors="errors"
                        >
                            <template #inputField>
                                <div class="col-auto">
                                    <BaseInput
                                        v-model:value="title"
                                        v-bind="titleAttrs"
                                    ></BaseInput>
                                </div>
                            </template>
                        </ValidateLabel>
                    </div>
                    <div class="mb-3">
                        <ValidateLabel
                            label="content"
                            :required="false"
                        >
                            <template #inputField>
                                <div class="col-auto">
                                    <BaseTextarea v-model:value="formValue.content"></BaseTextarea>
                                </div>
                            </template>
                        </ValidateLabel>
                    </div>
                    <SubmitBtn @onClick="submitHandler"></SubmitBtn>
                </form>
            </div>
        </div>
        <CardList @editRow="editHandler"></CardList>
    </div>
</template>
<style scoped>
.content {
    background-color: yellow;
}
</style>