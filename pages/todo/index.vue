<script
  setup
  lang='ts'
>
import { ref } from 'vue';
import BaseInput from '~/components/common/input/base.vue';
import BaseTextarea from '~/components/common/textarea/base.vue';
import SubmitBtn from '~/components/business/button/submit.vue';
import ValidateLabel from '~/components/business/validateLabel/base.vue';

import * as yup from 'yup'

import CardList from '@/components/business/todo/list/index.vue';
import { useForm } from 'vee-validate';

import { useTodoStore } from '@/stores/todoStore'

const todoStore = useTodoStore();


const schema = yup.object({
  title: yup.number().required(),
})

const { values, errors, defineField } = useForm({
  validationSchema: schema,
});

const [title, titleAttrs] = defineField('title')


const formValue = ref({
  id: '0',
  content: '',
  done: false
})

const editHandler = (inItem: Object) => {
  console.log("🚀 ~ inItem:", inItem);

  title.value = inItem.title;
  formValue.value.id = inItem.id;
  formValue.value.content = inItem.content;
  formValue.value.done = inItem.done;

}


const submitHandler = () => {
  if (formValue.value.id === '0') {
    //add api
  } else {
    //edit api
    todoStore.updItem({ id: formValue.value.id, title: title, content: formValue.value.content })
  }
}


</script>
<template>
  <div class="container pt-4">
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
          <div class="mb-3">
            <ValidateLabel
              label="done"
              :required="false"
            >
              <template #inputField>
                <div class="col-auto d-flex">
                  <input
                    class="form-check-input my-auto"
                    type="checkbox"
                    :value="formValue.done"
                    id="flexCheckDefault"
                  >
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