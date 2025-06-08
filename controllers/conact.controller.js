// @desc Get all contacts
// @route GET /api/contacts
// @access public
const getContact = (req, res) => {
    res.status(200).json({ message: "Get all contacts"});
};

// @desc Create New contacts
// @route POST /api/contacts
// @access public
const createContact = (req, res) => {
    res.status(200).json({ message: "Create contacts"});
};

// @desc Update contacts
// @route PUT /api/contacts/:id
// @access public
const updateContactbyId = (req, res) => {
    res.status(200).json({ message: `Update contact for ${req.params.id}`});
};

// @desc Get contacts
// @route GET /api/contacts/:id
// @access public
const getContactbyId = (req, res) => {
    res.status(200).json({ message: `Get contact for ${req.params.id}`});
};

// @desc Delete contact
// @route DELETE /api/contacts/:id
// @access public
const deleteContactbyId = (req, res) => {
    res.status(200).json({ message: `Delete contact for ${req.params.id}`});
};


module.exports = {getContact,createContact,getContactbyId,updateContactbyId,deleteContactbyId};