const Task = require('../models/Tasks')


const getAllTasks = (req, res) => {
    res.send('all item')
}
const createTask =  async (req, res) => {
    const task = await Task.create(req.body)
    res.status(201).json({task})
}
const getSingleTask = (req, res) => {
    res.json({ id:req.params.id})
}
const updateTask = (req, res) => {
    res.send('Update item') 
}
const deleteTask = (req, res) => {
    res.send('Delete item')
}




module.exports = {
    getAllTasks,
    createTask,
    getSingleTask,
    updateTask,
    deleteTask
} 