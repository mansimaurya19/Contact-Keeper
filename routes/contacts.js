const express = require('express')
const router = express.Router()

// @Route Post api/contacts
//desc    Get all users contacts
// @access Public

router.get('/', (req, res) => {
    res.send('Get all contacts')
})

// @Route Post api/user
//desc    Add a new contact
// @access Private

router.post('/', (req, res) => {
    res.send('Add contact')
})

// @Route Putapi/contact/:id
//desc   Update contact
// @access Private

router.put('/:id', (req, res) => {
    res.send('Update contact')
})

// @Route Delete api/contact/:id
//desc   Update contact
// @access Private

router.delete('/:id', (req, res) => {
    res.send('delete contact')
})


module.exports = router