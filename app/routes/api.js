let router = require("express").Router(),

taskController = require("../controllers/task.controller");

let apiRouters = function () {

    router.get("/api/task/find", taskController.find);
    router.post("/api/task/findById", taskController.findById);
    router.put("/api/task/update", taskController.update);
    router.post("/api/task/delete", taskController.delete);
    router.post("/api/task/save", taskController.save);

    return router;
};
module.exports = apiRouters;
