const express = require('express')
const router = express.Router()

const taskController = require('../controllers/taskController')
const authMiddleware = require('../middlewares/authMiddleware');

router.post('/', authMiddleware, taskController.createTask)
router.get('/', authMiddleware, taskController.getTasks)
router.get('/:id', authMiddleware, taskController.getTaskById)
router.put('/:id', authMiddleware, taskController.updateTask)
router.delete('/:id', authMiddleware, taskController.deleteTask)

module.exports = router

/**
 * @swagger
 * /tasks:
 *   get:
 *     summary: Retorna todas as tarefas
 *     tags: [Tasks]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Lista de tarefas
 */
router.get('/', authMiddleware, taskController.getTasks)

/**
 * @swagger
 * /tasks/{id}:
 *   get:
 *     summary: Buscar tarefa por ID
 *     tags: [Tasks]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Tarefa encontrada
 */
router.get('/:id', authMiddleware, taskController.getTaskById)

/**
 * @swagger
 * /tasks:
 *   post:
 *     summary: Criar nova tarefa
 *     tags: [Tasks]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - title
 *             properties:
 *               title:
 *                 type: string
 *                 example: Estudar Node
 *               description:
 *                 type: string
 *                 example: Criar API REST
 *     responses:
 *       201:
 *         description: Tarefa criada
 */
router.post('/', authMiddleware, taskController.createTask)

/**
 * @swagger
 * /tasks/{id}:
 *   put:
 *     summary: Atualizar tarefa
 *     tags: [Tasks]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *               description:
 *                 type: string
 *               status:
 *                 type: string
 *                 example: completed
 *     responses:
 *       200:
 *         description: Tarefa atualizada
 */
router.put('/:id', authMiddleware, taskController.updateTask)

/**
 * @swagger
 * /tasks/{id}:
 *   delete:
 *     summary: Deletar tarefa
 *     tags: [Tasks]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Tarefa deletada
 */
router.delete('/:id', authMiddleware, taskController.deleteTask)