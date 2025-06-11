const asyncHandler = require("express-async-handler");
const Contact = require("../models/contact.model");

// @desc Get all contacts
// @route GET /api/contacts
// @access private
const getContact = async (req, res) => {
    try {
        const contacts = await Contact.find({user_id: req.user.id});
        res.status(200).json(contacts);
    } catch (error) {
        res.status(500).json({ message: error.message || "Server Error" });
    }
};


// @desc Create New contacts
// @route POST /api/contacts
// @access private
const createContact = asyncHandler(async (req, res) => {
    console.log("The request body is: ", req.body);
    const {name, email, phone} = req.body;
    if(!name || !email || !phone) {
        res.status(400);
        throw new Error("All fields are mandatory !");
    }
    const contact = await Contact.create({
        name,
        email,
        phone,
    });

    res.status(201).json(contact);
});

// @desc Update contacts
// @route PUT /api/contacts/:id
// @access private
const updateContactbyId = asyncHandler(async (req, res) => {
    const contact = await Contact.findById(req.params.id);
    if(!contact){
        res.status(404);
        throw new Error("Contact not found");
    }
    
    const updateContact = await Contact.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true}
    );

    res.status(200).json(updateContact);
});

// @desc Get contacts
// @route GET /api/contacts/:id
// @access private
const getContactbyId = asyncHandler(async (req, res) => {
    const contact = await Contact.findById(req.params.id);
    if(!contact){
        res.status(404);
        throw new Error("Contact not found");
    }
    res.status(200).json(contact);
});

// @desc Delete contact
// @route DELETE /api/contacts/:id
// @access private
const deleteContactbyId = async (req, res) => {
    try {
        const contact = await Contact.findByIdAndDelete(req.params.id);
        if (!contact) {
            return res.status(404).json({ message: "Contact not found" });
        }
        res.status(200).json({ message: "Contact deleted successfully", contact });
    } catch (error) {
        res.status(500).json({ message: error.message || "Server Error" });
    }
};



module.exports = {getContact,createContact,getContactbyId,updateContactbyId,deleteContactbyId};