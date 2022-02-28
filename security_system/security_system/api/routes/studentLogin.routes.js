const Controller = require("../controller/studentLogin.controller");
const express = require("express");
const Router = express.Router();

/**
 * @swagger
 * /studentLogin:
 *  post:
 *      tags:
 *          - STUDENT LOGIN
 *      name: Student Login
 *      produces:
 *          - application/json
 *      consumes:
 *          - application/json
 *      summary: This should check Student exist in DB.
 *      requestBody:
 *         content:
 *            application/json:
 *               schema:
 *                  type: object
 *                  properties:
 *                     email:
 *                        type: string
 *                     password:
 *                        type: string
 *      responses:
 *          '200':
 *              description: Success.
 */
Router.post("/", [Controller.login]);

module.exports = Router;
