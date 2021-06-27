const env = import.meta.env.MODE || 'prod'
const EncConfig = {
    dev: {
        baseApi: '/',
        mockApi: 'https://www.fastmock.site/mock/091f0dd8445dd1bc86c0498bad219fa5/api'
    },
    test: {
        baseApi: '//',
        mockApi: 'https://www.fastmock.site/mock/091f0dd8445dd1bc86c0498bad219fa5/api'
    },
    prod: {
        baseApi: '/',
        mockApi: ''
    }
}

export default {
    env,
    mock: true,
    ...EncConfig[env]
}
