const Task = require('../models/Tasks')
const asyncWrapper = require('../middleware/async')



const getAllTasks = asyncWrapper(async (req, res) => {

        const allTask = await Task.find({})
        res.status(201).json({ allTask })

   
})
const createTask =  asyncWrapper(async (req, res) => {

        const task = await Task.create(req.body)
        res.status(201).json({ task })
  
})
const getSingleTask = asyncWrapper (async (req, res) => {

        const { id: taskID } = req.params
        const task = await Task.findOne({ _id: taskID })
        if (!task) {
            return res.status(404).json({ error: `Task not found  with id ${taskID}` })
        }
        res.status(200).json({ task })
   
})
const updateTask = async (req, res) => {
    try {
        const { id: taskID } = req.params

        const task = await Task.findOneAndUpdate({ _id: taskID }, req.body, { new: true, runValidator: true })
        if (!task) {
            return res.status(404).json({ error: `Task not found  with id ${taskID}` })
        }
        res.status(200).json({ task })
    } catch (error) {
        res.status(502).json({ msg: error })
    }

}
const deleteTask = async (req, res) => {
    try {
        const { id: taskID } = req.params
        const task = await Task.findOneAndDelete({ _id: taskID })
        if (!task) {
            return res.status(404).json({ error: `Task not found  with id ${taskID}` })
        }
        res.status(200).json({ msg: "Task deleted Successfully" })

    } catch (error) {

        res.status(502).json({ msg: error })
    }
}




module.exports = {
    getAllTasks,
    createTask,
    getSingleTask,
    updateTask,
    deleteTask
} 