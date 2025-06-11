const express = require("express");
const {
	getClothes,
	getCloth,
	createCloth,
	updateCloth,
	deleteCloth,
} = require("../controllers/clothes");

const router = express.Router();

router.route("/").get(getClothes).post(createCloth);

router.route("/:id").get(getCloth).put(updateCloth).delete(deleteCloth);

module.exports = router;