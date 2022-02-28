const express = require("express");
const Controller = require("../controller/parent.controller");
// const ErrorHandler = require('../middleware/errorhandler');

const Router = express.Router();

/**
 * @swagger
 * /parent:
 *  get:
 *      tags:
 *          - PARENT
 *      name: Parent
 *      produces:
 *          - application/json
 *      consumes:
 *          - application/json
 *      summary: This should get all Parent.
 *      responses:
 *          200:
 *              description: Received Parents.
 */
Router.get("/", [Controller.getAllParent]);

/**
 * @swagger
 * /parent:
 *  post:
 *      tags:
 *          - PARENT
 *      name: Parent
 *      produces:
 *          - application/json
 *      consumes:
 *          - application/json
 *      summary: This should add new parent.
 *      requestBody:
 *         content:
 *            application/json:
 *               schema:
 *                  type: object
 *                  properties:
 *                     parentFullName:
 *                        type: string
 *                     email:
 *                        type: string
 *                     password:
 *                        type: string
 *                     phoneNo:
 *                        type: string
 *      responses:
 *          '200':
 *              description: New Parent created.
 */
Router.post("/", [Controller.postParent]);

/**
 * @swagger
 * /teacher/{parentId}:
 *  get:
 *      tags:
 *          - PARENT
 *      name: Parent
 *      produces:
 *          - application/json
 *      consumes:
 *          - application/json
 *      summary: This should get single Teachers.
 *      parameters:
 *          - name: parentId
 *            in: path
 *            type: integer
 *            require: true
 *      responses:
 *          200:
 *              description: Received Parents.
 */
Router.get("/:parentId", [Controller.getSingleParent]);

/**
 * @swagger
 * /parent/{parentId}:
 *  put:
 *      tags:
 *          - PARENT
 *      name: Parent
 *      produces:
 *          - application/json
 *      consumes:
 *          - application/json
 *      summary: This should update the parent information.
 *      parameters:
 *          - name: parentId
 *            in: path
 *            type: integer
 *            require: true
 *      requestBody:
 *         content:
 *            application/json:
 *               schema:
 *                  type: object
 *                  properties:
 *                     parentFullName:
 *                        type: string
 *                     email:
 *                        type: string
 *                     password:
 *                        type: string
 *                     phoneNo:
 *                        type: string
 *      responses:
 *          '200':
 *              description: Block User is updated.
 */
Router.put("/:parentId", [Controller.parentUpdate]);

/**
 * @swagger
 * /parent:
 *  delete:
 *      tags:
 *          - PARENT
 *      name: Parent
 *      produces:
 *          - application/json
 *      consumes:
 *          - application/json
 *      summary: This should Parent by id.
 *      parameters:
 *          - name: parentId
 *            in: query
 *            type: integer
 *            require: true
 *      responses:
 *          '200':
 *              description: Parent Deleted.
 */
Router.delete("/", [Controller.parentDelete]);

module.exports = Router;
