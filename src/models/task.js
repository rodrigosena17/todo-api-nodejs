// src/models/task.js

const pool = require('../database/connection')

const Task = {
  async getAll() {
    const result = await pool.query('SELECT * FROM tasks ORDER BY id')
    return result.rows
  },

  async getById(id) {
    const result = await pool.query(
      'SELECT * FROM tasks WHERE id = $1',
      [id]
    )
    return result.rows[0]
  },

  async create(title, description) {
    const result = await pool.query(
      `INSERT INTO tasks (title, description)
       VALUES ($1, $2)
       RETURNING *`,
      [title, description]
    )
    return result.rows[0]
  },

  async update(id, title, description, status) {
    const result = await pool.query(
      `UPDATE tasks
       SET title=$1, description=$2, status=$3
       WHERE id=$4
       RETURNING *`,
      [title, description, status, id]
    )
    return result.rows[0]
  },

  async delete(id) {
    await pool.query('DELETE FROM tasks WHERE id=$1', [id])
  }
}

module.exports = Task