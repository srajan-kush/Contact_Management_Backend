const express = require("express");
const router = express.Router();
const {getContact,createContact,getContactbyId,updateContactbyId,deleteContactbyId} = require("../controllers/conact.controller")

router.route("/").get(getContact);
router.route("/").post(createContact);
router.route("/:id").get(getContactbyId);
router.route("/:id").put(updateContactbyId);
router.route("/:id").delete(deleteContactbyId);

module.exports = router;
