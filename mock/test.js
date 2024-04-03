import Mock from 'mockjs/dist/mock'
const data = Mock.mock('puge/test', "get", {
    pugetest: [
        { name: 'tom', position: 'taiwan' }
    ]
})

export default [{ data }]