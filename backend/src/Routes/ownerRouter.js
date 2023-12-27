const express = require('express');
const UserController = require('../Controller/UsuarioController');
const CrudRouter = require('./Router');

const userRouter = new CrudRouter(new UserController());

module.exports = userRouter.getRouter();
