module.exports = {
    requestDTO(request) {
        const httpRequest = {}
        if (Object.keys(request.body).length >= 1) {
            httpRequest.body = request.body
        }

        if (Object.keys(request.params).length >= 1) {
            httpRequest.params = request.params
        }

        if (Object.keys(request.query).length >= 1) {
            httpRequest.query = request.query
        }

        return httpRequest
    }
}
