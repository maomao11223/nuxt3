<script
    setup
    lang='ts'
>
//svg source: https://icones.js.org/collection/all
import Svg from '@/components/common/svg/base.vue'

import { useTodoStore } from '@/stores/todoStore'

const todoStore = useTodoStore();

const { todoList } = storeToRefs(todoStore)

const emits = defineEmits(['editRow'])

// const list = ref([
//     { id: 1, title: '1', content: '123', done: false }
// ])

const setDone = (inItem: Object) => {
    const targetItem = todoList.value.find(item => {
        return item.id === inItem.id
    })
    targetItem.done = !inItem.done
}


const editHandler = (inItem: Object) => {
    emits('editRow', inItem)
}

</script>
<template>
    <div
        class="card mb-2"
        v-for="item in todoList"
        :key="item.id"
    >
        <div class="card-body">
            <div class="d-flex align-items-start">
                <!-- <div style="width:50px"> -->
                <template v-if="item.done">
                    <button
                        @click="setDone(item)"
                        class="btn btn-text p-0 pe-2"
                    >
                        <Svg></Svg>
                    </button>
                </template>
                <template v-else>
                    <button
                        @click="setDone(item)"
                        class="btn btn-text p-0 pe-2"
                    >
                        <Svg
                            name="ic:outline-radio-button-unchecked"
                            class="text-secondary"
                        ></Svg>
                    </button>

                </template>
                <!-- </div> -->
                <div class="flex-grow-1">
                    <p>{{ item.title }}</p>
                    <p>{{ item.content }}</p>
                </div>
                <div class="mx-auto"><button
                        @click="editHandler(item)"
                        class="btn btn-text p-0 pe-2"
                    >
                        <Svg
                            name="iconamoon:edit-light"
                            class="text-secondary"
                        ></Svg>
                    </button></div>
            </div>
        </div>
    </div>
</template>
<style scoped></style>