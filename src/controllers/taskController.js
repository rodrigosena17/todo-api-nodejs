const Task = require('../models/task')

exports.getTasks = async (req, res) => {
  try { 
    
    const tasks = await Task.getAll()
    
    return res.json(tasks)
  } catch (error) {
    res.status(500).json({ error: 'Error fetching tasks' })
  }
}

exports.getTaskById = async (req, res) => {
  try {
    const task = await Task.getById(req.params.id)
    res.json(task)
  } catch (error) {
    res.status(500).json({ error: 'Error fetching task' })
  }
}

exports.createTask = async (req, res) => {
  try {
    const { title, description } = req.body
    const task = await Task.create(title, description)
    res.status(201).json(task)
  } catch (error) {
    res.status(500).json({ error: 'Error creating task' })
  }
}

exports.updateTask = async (req, res) => {
  try {
    const { title, description, status } = req.body
    const task = await Task.update(
      req.params.id,
      title,
      description,
      status
    )
    res.json(task)
  } catch (error) {
    res.status(500).json({ error: 'Error updating task' })
  }
}

exports.deleteTask = async (req, res) => {
  try {
    await Task.delete(req.params.id)
    res.json({ message: 'Task deleted' })
  } catch (error) {
    res.status(500).json({ error: 'Error deleting task' })
  }
}