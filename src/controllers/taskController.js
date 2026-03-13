const pool = require('../database/connection')

exports.createTask = async (req, res) => {
  const { title, description } = req.body

  const result = await pool.query(
    'INSERT INTO tasks (title, description) VALUES ($1,$2) RETURNING *',
    [title, description]
  )

  res.json(result.rows[0])
}

exports.getTasks = async (req, res) => {
  const result = await pool.query('SELECT * FROM tasks')
  res.json(result.rows)
}

exports.getTaskById = async (req, res) => {
  const { id } = req.params

  const result = await pool.query(
    'SELECT * FROM tasks WHERE id=$1',
    [id]
  )

  res.json(result.rows[0])
}

exports.updateTask = async (req, res) => {
  const { id } = req.params
  const { title, description, status } = req.body

  const result = await pool.query(
    `UPDATE tasks
     SET title=$1, description=$2, status=$3
     WHERE id=$4
     RETURNING *`,
    [title, description, status, id]
  )

  res.json(result.rows[0])
}

exports.deleteTask = async (req, res) => {
  const { id } = req.params

  await pool.query(
    'DELETE FROM tasks WHERE id=$1',
    [id]
  )

  res.json({ message: "Task deletada" })
}
