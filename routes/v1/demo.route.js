const express = require("express");
const router = express.Router();
const controllers = require('../../controllers/demo.controllers');

router.route("/") // have to use /api/v1/demo
    .get(controllers.getData)
    .post(controllers.postData);

router.route("/:param") // have to use /api/v1/demo/(param)
    .delete(controllers.deleteData)
    .patch(controllers.updateData);

module.exports = router;
