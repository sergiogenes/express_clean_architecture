const userRepository = require('../repositories/userRepository')
const User = require('../domain/User')
const { createUser } = require('../controllers/userControllers')

/**
 * Obtiene todos los usuarios.
 * @returns {Promise<Array>} Un array de objetos User.
 */
exports.getAllUsers = async () => {
  return await userRepository.getAllUsers(User)
}

/**
 * Obtiene un usuario por su ID.
 * @param {number} id - El ID del usuario.
 * @returns {Promise<User | null>} Un objeto User o null si no se encuentra.
 */
exports.getUserById = async (id) => {
  return await userRepository.getUserById(id, User)
}

/**
 * Crea un nuevo usuario.
 * @param {User} user - El objeto User a crear.
 * @returns {Promise<number>} El ID del usuario creado.
 */
exports.createUser = async ({ name }) => {
  const allUsers = await userRepository.getAllUsers(User)
  const lastUser = allUsers[allUsers.length - 1]
  const id = lastUser.getId() + 1
  const user = new User(id, name)
  return await userRepository.createUser(user)
}

/**
 * Actualiza un usuario existente.
 * @param {number} id - El ID del usuario a actualizar.
 * @param {User} user - El objeto User con los nuevos datos.
 * @returns {Promise<boolean>} True si la operación fue exitosa, false en caso contrario.
 */
exports.updateUser = async (id, userBody) => {
  const user = new User(userBody.id, userBody.name)
  return await userRepository.updateUser(id, user)
}

/**
 * Elimina un usuario.
 * @param {number} id - El ID del usuario a eliminar.
 * @returns {Promise<boolean>} True si la operación fue exitosa, false en caso contrario.
 */
exports.deleteUser = async (id) => {
  return await userRepository.deleteUser(id)
}
