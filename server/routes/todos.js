const router = require('express').Router()
let Todo = require('../model/todo.model')
router.route('/').get((req, res) => {
    Todo.find()
        .then(todo => res.json(todo))
        .catch(err => res.status(400).json('Error: ' + err))
})
router.route('/add').post((req, res) => {
    const todo = req.body.text
    const newTodo = new Todo({ todo })
    newTodo.save()
        .then(() => res.json("Todo Added"))
        .catch(err => res.status(400).json('Error: ' + err))
})
router.route('/:id').delete((req, res) => {
    Todo.findByIdAndDelete(req.params.id)
        .then(() => res.json('Todo Deleted.'))
        .catch(err => res.status(400).json('Error: ' + err))
})
module.exports = router