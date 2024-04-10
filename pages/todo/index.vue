<script
  setup
  lang='ts'
>
import * as yup from 'yup'

import CardList from '@/components/business/todo/list/index.vue';
import { useForm } from 'vee-validate';

import { useTodoStore } from '@/stores/todoStore'

const todoStore = useTodoStore();

const { todoList } = storeToRefs(todoStore)

const schema = {
  content: 'required',
  id: ''
}


const removeHandler = (inItem: Object) => {
  todoList.value = todoList.value.filter(item => {
    return item !== inItem
  })
}


const submitHandler = (value) => {
  console.log("🚀 ~ value:", value);
  todoList.value.push({ content: value.content })


}


</script>
<template>
  <div class="container pt-4">
    <div class="card mb-4 bg-transparent border-0">
      <div class="card-body">
        <VeeForm
          @submit="submitHandler"
          v-slot="{ isSubmitting }"
          :validation-schema="schema"
          class="d-flex justify-content-between"
        >
          <div class="col-11">
            <VeeField
              class="form-control w-100"
              name="content"
              type=""
            ></VeeField>
            <VeeErrorMessage
              class="text-danger"
              name="content"
            ></VeeErrorMessage>
          </div>
          <div>
            <button
              class="btn btn-primary text-nowrap"
              type="submit"
              :disable="isSubmitting"
            >
              <span
                class="spinner"
                v-show="isSubmitting"
              ></span>
              {{ $t('submit') }}
            </button>
          </div>
        </VeeForm>
      </div>
    </div>
    <CardList @removeRow="removeHandler"></CardList>
  </div>
</template>
<style scoped>
.content {
  background-color: yellow;
}
</style>