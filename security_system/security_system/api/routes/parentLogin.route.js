const Controller = require("../controller/parentLogin.controller");
const express = require("express");
const Router = express.Router();

/**
 * @swagger
 * /parentLogin:
 *  post:
 *      tags:
 *          - PARENT LOGIN
 *      name: Parent Login
 *      produces:
 *          - application/json
 *      consumes:
 *          - application/json
 *      summary: This should check Parent exist in DB.
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
