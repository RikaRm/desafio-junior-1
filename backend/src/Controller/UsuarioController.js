const useCase = () => { } // require("")
const validation = () => { } // require("")
class Controller {
    async get(httpRequest) {
        const user = await useCase(httpRequest.params.id)
        return user
    }

    async getAll(httpRequest) {
        const user = await useCase(httpRequest.query)
        return user
    }

    async create(httpRequest) {
        const user = await useCase(httpRequest.body)
        return user
    }

    async update(httpRequest) {
        const user = await useCase(httpRequest.params.id, httpRequest.body)
        return user
    }

    async remove(httpRequest) {
        const user = await useCase(httpRequest.params.id)
        return user
    }
}

module.exports = Controller