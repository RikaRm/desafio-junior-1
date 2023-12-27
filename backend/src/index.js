require('dotenv').config()
const express = require('express')
const App = express()

// * middleware
App.use(express.json())

// * rotas

const petRouter = require('./Routes/petRouter')
const ownerRouter = require('./Routes/ownerRouter')

// App.use('/admin', adminRouter)
App.use('/pet',/** authmiddleware */ petRouter)
App.use('/owner',/** authmiddleware */ ownerRouter)



App.use((err, req, res, next) => {
    console.error(err.stack)
    res.status(500).send('Something broke!')
})

App.listen(process.env.SERVER_PORT, () => console.log('App rodando em 127.0.0.1:' + process.env.SERVER_PORT))