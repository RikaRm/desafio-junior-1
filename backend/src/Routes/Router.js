const express = require('express');
const DTO = require('../DTO/RequestDTO');

class Router {
  constructor(controller) {
    this.router = express.Router();
    this.controller = controller;
    this.initializeRoutes();
  }

  initializeRoutes() {
    this.router.get('/', this.handleRequest(this.controller.getAll));
    this.router.get('/:id', this.handleRequest(this.controller.getById));
    this.router.post('/', this.handleRequest(this.controller.create));
    this.router.patch('/:id', this.handleRequest(this.controller.update));
    this.router.delete('/:id', this.handleRequest(this.controller.delete));
  }

  handleRequest(controllerMethod) {
    return async (request, response) => {
      const httpRequest = DTO.requestDTO(request);
      try {
        const result = await controllerMethod(httpRequest);
        response.json(result);
      } catch (error) {
        console.error(error);
        response.status(500).send('Internal Server Error');
      }
    };
  }

  getRouter() {
    return this.router;
  }
}

module.exports = Router;
