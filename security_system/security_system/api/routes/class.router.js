const express = require("express");
const Controller = require("../controller/class.controller");
const Router = express.Router();

/**
 * @swagger
 * /class:
 *  get:
 *      tags:
 *          - CLASS
 *      name: class
 *      produces:
 *          - application/json
 *      consumes:
 *          - application/json
 *      summary: This should get all classes.
 *      responses:
 *          200:
 *              description: Received classes.
 */
Router.get("/", [Controller.getAll]);

/**
 * @swagger
 * /class:
 *  post:
 *      tags:
 *          - CLASS
 *      name: Class
 *      produces:
 *          - application/json
 *      consumes:
 *          - application/json
 *      summary: This should add new class.
 *      requestBody:
 *         content:
 *            application/json:
 *               schema:
 *                  type: object
 *                  properties:
 *                     className:
 *                        type: string
 *      responses:
 *          '200':
 *              description: New Parent created.
 */
Router.post("/", [Controller.addNew]);

/**
 * @swagger
 * /class/{classId}:
 *  get:
 *      tags:
 *          - CLASS
 *      name: Parent
 *      produces:
 *          - application/json
 *      consumes:
 *          - application/json
 *      summary: This should get single Teachers.
 *      parameters:
 *          - name: classId
 *            in: path
 *            type: integer
 *            require: true
 *      responses:
 *          200:
 *              description: Received Parents.
 */
Router.get("/:classId", [Controller.getSingle]);

/**
 * @swagger
 * /class/{classId}:
 *  put:
 *      tags:
 *          - CLASS
 *      name: Class
 *      produces:
 *          - application/json
 *      consumes:
 *          - application/json
 *      summary: This should get single Class.
 *      parameters:
 *          - name: classId
 *            in: path
 *            type: integer
 *            require: true
 *      requestBody:
 *         content:
 *            application/json:
 *               schema:
 *                  type: object
 *                  properties:
 *                     className:
 *                        type: string
 *      responses:
 *          200:
 *              description: Received class.
 */
Router.put("/:classId", [Controller.updateClass]);

/**
 * @swagger
 * /class:
 *  delete:
 *      tags:
 *          - CLASS
 *      name: Class
 *      produces:
 *          - application/json
 *      consumes:
 *          - application/json
 *      summary: This should delete class by id.
 *      parameters:
 *          - name: classId
 *            in: query
 *            type: integer
 *            require: true
 *      responses:
 *          '200':
 *              description: Parent Deleted.
 */
Router.delete("/", [Controller.deleteClass]);

module.exports = Router;
