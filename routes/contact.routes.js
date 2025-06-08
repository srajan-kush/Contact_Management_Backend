const express = require("express");
const router = express.Router();
const {getContact,createContact,getContactbyId,updateContactbyId,deleteContactbyId} = require("../controllers/conact.controller")

router.route("/").get(getContact).post(createContact);
router.route("/:id").get(getContactbyId).put(updateContactbyId).delete(deleteContactbyId);

module.exports = router;
