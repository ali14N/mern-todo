const router = require('express').Router()
let Todo = require('../model/todo.model')
router.route('/').get((req, res) => {
    User.find()
        .then(users => res.json(todo))
        .catch(err => res.status(400).json('Error: ' + err))
})
router.route('/add').post((req, res) => {
    const todo = req.body.todo
    const newTodo = new Todo({ todo })
    newTodo.save()
        .then(() => res.json("Todo Added"))
        .catch(err => res.status(400).json('Error: ' + err))
})
module.exports = router