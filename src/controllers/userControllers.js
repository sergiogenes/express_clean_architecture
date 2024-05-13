const userService = require('../services/userService')

/**
 * Obtiene todos los usuarios.
 * @returns {Promise<Array>} Un array de objetos User.
 */
exports.getAllUsers = async (req, res) => {
  try {
    const users = await userService.getAllUsers()
    res.status(200).send(users)
  } catch (error) {
    console.error(error)
    res.status(500).send('Error interno del servidor')
  }
}

/**
 * Obtiene un usuario por su ID.
 * @param {number} id - El ID del usuario.
 * @returns {Promise<User | null>} Un objeto User o null si no se encuentra.
 */
exports.getUserById = async (req, res) => {
  try {
    const user = await userService.getUserById(req.params.id)
    if (!user) {
      return res.status(404).send('Usuario no encontrado')
    }
    res.status(200).json(user)
  } catch (error) {
    console.error(error)
    res.status(500).send('Error interno del servidor')
  }
}

/**
 * Crea un nuevo usuario.
 * @param {User} user - El objeto User a crear.
 * @returns {Promise<number>} El ID del usuario creado.
 */
exports.createUser = async (req, res) => {
  try {
    const newUser = await userService.createUser(req.body)
    res.status(201).json(newUser)
  } catch (error) {
    console.error(error)
    res.status(500).send('Error interno del servidor')
  }
}

/**
 * Actualiza un usuario existente.
 * @param {number} id - El ID del usuario a actualizar.
 * @param {User} user - El objeto User con los nuevos datos.
 * @returns {Promise<boolean>} True si la operación fue exitosa, false en caso contrario.
 */
exports.updateUser = async (req, res) => {
  try {
    const updatedUser = await userService.updateUser(req.params.id, req.body)
    if (!updatedUser) {
      return res.status(404).send('Usuario no encontrado')
    }
    res.status(200).json(updatedUser)
  } catch (error) {
    console.error(error)
    res.status(500).send('Error interno del servidor')
  }
}

/**
 * Elimina un usuario.
 * @param {number} id - El ID del usuario a eliminar.
 * @returns {Promise<boolean>} True si la operación fue exitosa, false en caso contrario.
 */
exports.deleteUser = async (req, res) => {
  try {
    const deleted = await userService.deleteUser(req.params.id)
    if (!deleted) {
      return res.status(404).send('Usuario no encontrado')
    }
    res.status(200).send('Usuario eliminado')
  } catch (error) {
    console.error(error)
    res.status(500).send('Error interno del servidor')
  }
}
