async function getTodoList(): Promise{
    const response = $fetch('/api/Todo/getList', {
        method:'GET'
    })

    return response;
}