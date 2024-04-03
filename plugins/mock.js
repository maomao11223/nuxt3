import Mock from 'mockjs'

Mock.mock('GetTodoList', {
    "data|1-10": [
        {
            "id|+1": 1
        }
    ]
})

Mock.mock('/api/Todo/GetTodoList', 'post', (options) => {
    return {
        status: 200,
        data: options
    }
})