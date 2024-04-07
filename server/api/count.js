let count = 0;

export default defineEventHandler(async () => {
    await new Promise((resolve, reject) => setTimeout(resolve, 2000));


    return {data: 1}


})