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

const content = ref('')


const removeHandler = (inItem: Object) => {
  todoList.value = todoList.value.filter(item => {
    return item !== inItem
  })
}


const submitHandler = () => {

  todoList.value.push({ content: content.value })


}


</script>
<template>
  <div class="container pt-4">
    <div class="card mb-4 bg-transparent border-0">
      <div class="card-body">
        <form
          @submit.prevent="submitHandler"
          class="d-flex justify-content-between"
        >
          <div class="col-11">
            <input
              type="text"
              v-model="content"
            >
          </div>
          <div>
            <button
              class="btn btn-primary text-nowrap"
              type="submit"
            >
              {{ $t('submit') }}
            </button>
          </div>
        </form>
      </div>
    </div>
    <CardList @removeRow="removeHandler"></CardList>
  </div>
</template>