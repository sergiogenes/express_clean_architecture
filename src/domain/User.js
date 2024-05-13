class User {
  /**
   * Constructor de la clase User.
   * @param {number} id - El ID del usuario.
   * @param {string} name - El nombre del usuario.
   */
  constructor(id, name) {
    this.id = id
    this.name = name
  }

  /**
   * Método para obtener el ID del usuario.
   * @returns {number} El ID del usuario.
   */
  getId() {
    return this.id
  }

  /**
   * Método para obtener el nombre del usuario.
   * @returns {string} El nombre del usuario.
   */
  getName() {
    return this.name
  }

  /**
   * Método para establecer el nombre del usuario.
   * @param {string} name - El nuevo nombre del usuario.
   */
  setName(name) {
    this.name = name
  }

  /**
   * Método para convertir el objeto User a un objeto plano.
   * @returns {Object} Un objeto con las propiedades id y name.
   */
  toPlainObject() {
    return {
      id: this.id,
      name: this.name,
    }
  }
}

module.exports = User
