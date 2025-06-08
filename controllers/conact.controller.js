const asyncHandler = require("express-async-handler");

// @desc Get all contacts
// @route GET /api/contacts
// @access public
const getContact = asyncHandler(async (req, res) => {
    res.status(200).json({ message: "Get all contacts"});
});

// @desc Create New contacts
// @route POST /api/contacts
// @access public
const createContact = asyncHandler(async (req, res) => {
    console.log("The request body is: ", req.body);
    const {name, email, phone} = req.body;
    if(!name || !email || !phone) {
        res.status(400);
        throw new Error("All fields are mandatory !");
    }

    res.status(200).json({ message: "Create contacts"});
});

// @desc Update contacts
// @route PUT /api/contacts/:id
// @access public
const updateContactbyId = asyncHandler(async (req, res) => {
    res.status(200).json({ message: `Update contact for ${req.params.id}`});
});

// @desc Get contacts
// @route GET /api/contacts/:id
// @access public
const getContactbyId = asyncHandler(async (req, res) => {
    res.status(200).json({ message: `Get contact for ${req.params.id}`});
});

// @desc Delete contact
// @route DELETE /api/contacts/:id
// @access public
const deleteContactbyId = asyncHandler(async (req, res) => {
    res.status(200).json({ message: `Delete contact for ${req.params.id}`});
});


module.exports = {getContact,createContact,getContactbyId,updateContactbyId,deleteContactbyId};