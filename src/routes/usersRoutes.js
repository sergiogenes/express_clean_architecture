const express = require('express')
const router = express.Router()
const userController = require('../controllers/userControllers')

// Ruta para obtener todos los usuarios
router.get('/', async (req, res) => {
  return await userController.getAllUsers(req, res)
})

// Ruta para obtener un usuario por su ID
router.get('/:id', async (req, res) => {
  return await userController.getUserById(req, res)
})

// Ruta para crear un nuevo usuario
router.post('/', async (req, res) => {
  return await userController.createUser(req, res)
})

// Ruta para actualizar un usuario existente
router.put('/:id', async (req, res) => {
  return userController.updateUser(req, res)
})

// Ruta para eliminar un usuario
router.delete('/:id', async (req, res) => {
  return await userController.deleteUser(req, res)
})

module.exports = router
