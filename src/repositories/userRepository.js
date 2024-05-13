const { Pool } = require('pg')
const { dbConfig } = require('../infrastructure/dbConfig')

const pool = new Pool(dbConfig)

/**
 * Obtiene todos los usuarios de la base de datos.
 * @returns {Promise<Array>} Un array de objetos User.
 */
exports.getAllUsers = async (User) => {
  try {
    const result = await pool.query('SELECT * FROM users ORDER BY id')
    return result.rows.map((row) => new User(row.id, row.name))
  } catch (error) {
    console.error('Error al obtener usuarios:', error)
    throw error
  }
}

/**
 * Obtiene un usuario por su ID.
 * @param {number} id - El ID del usuario.
 * @returns {Promise<User | null>} Un objeto User o null si no se encuentra.
 */
exports.getUserById = async (id, User) => {
  try {
    const result = await pool.query('SELECT * FROM users WHERE id = $1', [id])
    if (result.rows.length === 0) {
      return null
    }
    return new User(result.rows[0].id, result.rows[0].name)
  } catch (error) {
    console.error('Error al obtener usuario por ID:', error)
    throw error
  }
}

/**
 * Inserta un nuevo usuario en la base de datos.
 * @param {User} user - El objeto User a insertar.
 * @returns {Promise<number>} El ID del usuario insertado.
 */
exports.createUser = async (user) => {
  console.log('user', user)
  try {
    const result = await pool.query('INSERT INTO users (id, name) VALUES ($1 , $2) RETURNING id', [
      user.getId(),
      user.getName(),
    ])
    return result.rows[0].id
  } catch (error) {
    console.error('Error al crear usuario:', error)
    throw error
  }
}

/**
 * Actualiza un usuario existente en la base de datos.
 * @param {number} id - El ID del usuario a actualizar.
 * @param {User} user - El objeto User con los nuevos datos.
 * @returns {Promise<boolean>} True si la operación fue exitosa, false en caso contrario.
 */
exports.updateUser = async (id, user) => {
  try {
    const result = await pool.query('UPDATE users SET name = $1 WHERE id = $2 RETURNING id', [
      user.getName(),
      id,
    ])

    return result.rowCount > 0 ? `El usuario id nro ${result.rows[0].id} fue actualizado` : false
  } catch (error) {
    console.error('Error al actualizar usuario:', error)
    throw error
  }
}

/**
 * Elimina un usuario de la base de datos.
 * @param {number} id - El ID del usuario a eliminar.
 * @returns {Promise<boolean>} True si la operación fue exitosa, false en caso contrario.
 */
exports.deleteUser = async (id) => {
  try {
    const result = await pool.query('DELETE FROM users WHERE id = $1', [id])
    return result.rowCount > 0
  } catch (error) {
    console.error('Error al eliminar usuario:', error)
    throw error
  }
}
