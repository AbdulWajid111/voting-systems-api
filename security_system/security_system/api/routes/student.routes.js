const Controller = require("../controller/student.controller");
const express = require("express");
const Router = express.Router();

/**
 * @swagger
 * /student:
 *  get:
 *      tags:
 *          - STUDENT
 *      name: Student
 *      produces:
 *          - application/json
 *      consumes:
 *          - application/json
 *      summary: This should get all Student.
 *      responses:
 *          200:
 *              description: Received Parents.
 */
Router.get("/", [Controller.getAllStudent]);

/**
 * @swagger
 * /student/{studentId}:
 *  get:
 *      tags:
 *          - STUDENT
 *      name: Student
 *      produces:
 *          - application/json
 *      consumes:
 *          - application/json
 *      summary: This should get single Student.
 *      parameters:
 *          - name: studentId
 *            in: path
 *            type: integer
 *            require: true
 *      responses:
 *          200:
 *              description: Received Parents.
 */
Router.get("/:studentId", [Controller.getSingleStudent]);

/**
 * @swagger
 * /student:
 *  post:
 *      tags:
 *          - STUDENT
 *      name: Student
 *      produces:
 *          - application/json
 *      consumes:
 *          - application/json
 *      summary: This should add new Student.
 *      requestBody:
 *         content:
 *            application/json:
 *               schema:
 *                  type: object
 *                  properties:
 *                     studentFullName:
 *                        type: string
 *                     email:
 *                        type: string
 *                     parentId:
 *                        type: integer
 *                     phoneNo:
 *                        type: string
 *      responses:
 *          '200':
 *              description: New Student created.
 */
Router.post("/", [Controller.addStudent]);

/**
 * @swagger
 * /student/{studentId}:
 *  put:
 *      tags:
 *          - STUDENT
 *      name: Student
 *      produces:
 *          - application/json
 *      consumes:
 *          - application/json
 *      summary: This should update the teacher information.
 *      parameters:
 *          - name: studentId
 *            in: path
 *            type: integer
 *            require: true
 *      requestBody:
 *         content:
 *            application/json:
 *               schema:
 *                  type: object
 *                  properties:
 *                     studentFullName:
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
Router.put("/:studentId", [Controller.studentUpdate]);

/**
 * @swagger
 * /student:
 *  delete:
 *      tags:
 *          - STUDENT
 *      name: Student
 *      produces:
 *          - application/json
 *      consumes:
 *          - application/json
 *      summary: This should Delete Single Teacher by id.
 *      parameters:
 *          - name: studentId
 *            in: query
 *            type: integer
 *            require: true
 *      responses:
 *          '200':
 *              description: Student Deleted.
 */
Router.delete("/", [Controller.studentDelete]);

module.exports = Router;
