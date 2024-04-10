<script
    setup
    lang='ts'
>


useSeoMeta({
    title: 'tic-tac-toe',
    ogTitle: 'tic-tac-toe',
    description: 'tic-tac-toe',
    ogDescription: 'tic-tac-toe',
})

const player = ref('X')
const square = ref([
    ['', '', ''],
    ['', '', ''],
    ['', '', ''],
])

const history = ref([])

const winner = computed(() => {
    return calculateWinner(square.value.flat())
})

const move = (x, y) => {
    if (winner.value) return
    square.value[x][y] = player.value;
    player.value = player.value === 'O' ? 'X' : 'O'

}

const calculateWinner = (square) => {
    console.log("🚀 ~ square:", square);
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ]

    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i]
        // console.log(a, b, c,'+++)')
        // console.log(square[a], square[b], square[c])
        if (square[a] && square[a] === square[b] && square[a] === square[c]) {
            return square[a]
        }
    }
    return null;
}

const reset = () => {
    player.value = 'X';
    square.value = [
        ['', '', ''],
        ['', '', ''],
        ['', '', ''],
    ]
}

watch(winner, (current, previous) => {
    console.log("🚀 ~ current:", current);
    if (current && !previous) {
        history.value.push(current)
        localStorage.setItem('history', JSON.stringify(history.value))
    }
})

onMounted(() => {
    history.value = JSON.parse(localStorage.getItem('history')) ?? []
})

</script>
<template>
    <div class="d-flex flex-column pt-5">
        <section class="mx-auto mb-5 d-flex flex-column">
            <h2
                class="status"
                v-if="winner"
            >Winner: {{ winner }}</h2>
            <h2
                class="status"
                v-else
            >Player Move: {{ player }}</h2>
            <button
                @click="reset"
                class="btn btn-danger ms-auto"
            >Reset</button>
        </section>
        <section class="mx-auto">
            <div
                v-for="(_, x) in 3"
                :key="x"
                class="d-flex border-row"
            >
                <button
                    class="square"
                    v-for="(_, y) in 3"
                    :key="y"
                    @click="move(x, y)"
                >{{ square[x][y] }}</button>

            </div>
        </section>
        <section class="mx-auto">
            <h2 class="mt-5">History</h2>
            <div
                v-for="(game, index) in history"
                :key="index"
            >
                Game: {{ game }} won
            </div>
        </section>
    </div>
</template>
<style scoped>
section {
    color: white
}

.square {
    background: #fff;
    border: 1px solid #999;
    float: left;
    font-size: 24px;
    font-weight: bold;
    line-height: 34px;
    margin-right: -1px;
    margin-top: -1px;
    padding: 0;
    text-align: center;
    height: 50px;
    width: 50px;
}

.board-row:after {
    clear: both;
    content: '';
    display: table;
}

.status {
    margin-bottom: 10px;
}

.game {
    display: flex;
    flex-direction: row;
}

.game-info {
    margin-left: 20px;
}
</style>