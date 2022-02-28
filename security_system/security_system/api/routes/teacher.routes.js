const express = require("express");
const Controller = require("../controller/teacher.controller");
const Route = express.Router();

/**
 * @swagger
 * /teacher:
 *  get:
 *      tags:
 *          - TEACHER
 *      name: Teacher
 *      produces:
 *          - application/json
 *      consumes:
 *          - application/json
 *      summary: This should get all Teachers.
 *      responses:
 *          200:
 *              description: Received Parents.
 */
Route.get("/", [Controller.getAllTeachers]);

/**
 * @swagger
 * /teacher/{teacherId}:
 *  get:
 *      tags:
 *          - TEACHER
 *      name: Teacher
 *      produces:
 *          - application/json
 *      consumes:
 *          - application/json
 *      summary: This should get single Teachers.
 *      parameters:
 *          - name: teacherId
 *            in: path
 *            type: integer
 *            require: true
 *      responses:
 *          200:
 *              description: Received Parents.
 */
Route.get("/:teacherId", [Controller.getSingleTeacher]);

/**
 * @swagger
 * /teacher:
 *  post:
 *      tags:
 *          - TEACHER
 *      name: Teacher
 *      produces:
 *          - application/json
 *      consumes:
 *          - application/json
 *      summary: This should add new Teacher.
 *      requestBody:
 *         content:
 *            application/json:
 *               schema:
 *                  type: object
 *                  properties:
 *                     teacherFullName:
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
Route.post("/", [Controller.addTeacher]);

/**
 * @swagger
 * /teacher/{teacherId}:
 *  put:
 *      tags:
 *          - TEACHER
 *      name: Teacher
 *      produces:
 *          - application/json
 *      consumes:
 *          - application/json
 *      summary: This should update the teacher information.
 *      parameters:
 *          - name: teacherId
 *            in: path
 *            type: integer
 *            require: true
 *      requestBody:
 *         content:
 *            application/json:
 *               schema:
 *                  type: object
 *                  properties:
 *                     teacherFullName:
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
Route.put("/:teacherId", [Controller.parentUpdate]);

/**
 * @swagger
 * /teacher:
 *  delete:
 *      tags:
 *          - TEACHER
 *      name: Teacher
 *      produces:
 *          - application/json
 *      consumes:
 *          - application/json
 *      summary: This should Delete Single Teacher by id.
 *      parameters:
 *          - name: teacherId
 *            in: query
 *            type: integer
 *            require: true
 *      responses:
 *          '200':
 *              description: Teacher Deleted.
 */
Route.delete("/", [Controller.teacherDelete]);
Route.delete("/:teacherId", [Controller.deleteParentByParams]);


module.exports = Route;
