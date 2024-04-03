let count = 0;

export default defineEventHandler(async () => {
    await new Promise((resolve, reject) => setTimeout(resolve, 2000));

    count += 1;
    return JSON.stringify(count)


})