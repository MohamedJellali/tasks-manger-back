const Task = require('../models/Task.model')

class tasks {
    constructor() {
    }

    save(req, res, next) {
        let {description} = req.body;
        let task = new Task({description : description});
        task.save()
            .then(result => {
                res.send({
                    status : 200,
                    message : "Task saved in DB"
                })
            })
            .catch(err => {
                res.status(500)
                    .send({
                    message: 'Cannot save the task !',
                        error : err
                });
            })
    }

    find(req, res, next) {
        Task.find({})
            .then(allTasks => {
                res.send({
                    status : 200,
                    message : "Success",
                    data : allTasks
                })
            })
            .catch(err => {
                res.status(500)
                    .send({
                        message: 'Cannot read from DB !',
                        error : err
                    });
            })
    }

    findById(req, res, next) {
        let {task_id} = req.body
        Task.findById(task_id)
            .then(task => {
                res.send({
                    status : 200,
                    message : "Success",
                    data : task
                })
            })
            .catch(err => {
                res.status(500)
                    .send({
                        message: 'Cannot read from DB !',
                        error : err
                    });
            })
    }

    update(req, res, next) {
        let {task_id, description} = req.body;
        Task.findByIdAndUpdate(task_id, {description : description})
            .then(result => {
                res.send({
                    status : 200,
                    message : "Task updated"
                })
            })
            .catch(err => {
                res.status(500)
                    .send({
                        message: 'Cannot update the task !',
                        error : err
                    });
            })
    }

    delete(req, res, next) {
        let {task_id} = req.body;
        Task.deleteOne({_id : task_id})
            .then(result => {
                res.send({
                    status : 200,
                    message : "Task deleted"
                })
            })
            .catch(err => {
                res.status(500)
                    .send({
                        message: 'Cannot delete the task !',
                        error : err
                    });
            })
    }

}

module.exports = tasks;
