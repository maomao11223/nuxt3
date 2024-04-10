<script
    setup
    lang='ts'
>
//svg source: https://icones.js.org/collection/all
import Svg from '@/components/common/svg/base.vue'

import Sortable from 'sortablejs'

import { useTodoStore } from '@/stores/todoStore'


const todoStore = useTodoStore();

const { todoList } = storeToRefs(todoStore)

const emits = defineEmits(['removeRow'])

const dragList = ref(null)

const chooseCard = ref()

const setDone = async (inItem: Object) => {
    const targetItem = todoList.value.find(item => {
        return item.id === inItem.id
    })
    targetItem.done = !inItem.done

    await todoStore.updItem(inItem);

}


const removeHandler = (inItem: Object) => {
    emits('removeRow', inItem)
}

const initDragNDrop = () => {
    Sortable.create(dragList.value, {
        animation: 150,
        draggable: '.item',
        forceFallback: false,
        onChoose: function (evt) {
            chooseCard.value = todoList.value.find((item, index) => { return index === evt.oldIndex })
        },

        onEnd: function (evt) {
            if (evt.oldIndex !== evt.newIndex) {
                todoList.value.splice(evt.oldIndex, 1)
                todoList.value.splice(evt.newIndex, 0, chooseCard.value)
                console.log(chooseCard.value)
                todoStore.updItem({ id: chooseCard.value.id, title: chooseCard.value.title, content: chooseCard.value.content })
            }
        },

    })
}



onMounted(async () => {
    await todoStore.getList();
    initDragNDrop();
})
</script>
<template>
    <pre>
    </pre>
    <section ref="dragList" >
        <div
            class="card mb-2 item cursor-pointer bg-transparent border-white"
            v-for="(item, index) in todoList"
            :key="item.id"
            v-auto-animate
        >
            <div class="card-body">
                <div class="d-flex align-items-start">
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
                    <div class="flex-grow-1">
                        <p class="text-white">
                            <del v-if="item.done">
                                {{ item.content }}
                            </del>
                            <template v-else>
                                {{ item.content }}
                            </template>
                        </p>
                    </div>
                    <div class="mx-auto"><button
                            @click="removeHandler(item)"
                            class="btn btn-text p-0 pe-2"
                        >
                            <Svg
                                name="gg:remove"
                                class="text-danger"
                            ></Svg>
                        </button></div>
                </div>
            </div>
        </div>

    </section>

</template>
<style scoped></style>