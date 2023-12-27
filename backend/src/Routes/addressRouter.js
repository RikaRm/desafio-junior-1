const router = require('express').Router()
const DTO = require('../DTO/RequestDTO')

//todo: CRUD

router.get('/', (req, res)=>{
    const httpRequest = DTO.requestDTO(req)
    console.log(httpRequest)
    res.send('getAll')
})

router.get('/:id', (req, res)=>{
    const httpRequest = DTO.requestDTO(req)
    console.log(httpRequest)
    res.send('get by id')
})

router.post('/', (req, res)=>{
    const httpRequest = DTO.requestDTO(req)
    console.log(httpRequest)
    res.send('create new owner')
})

router.patch('/:id', (req, res)=>{
    const httpRequest = DTO.requestDTO(req)
    console.log(httpRequest)
    res.send('update owner')
})

router.delete('/:id', (req, res)=>{
    const httpRequest = DTO.requestDTO(req)
    console.log(httpRequest)
    res.send('delete owner')
})

module.exports = router