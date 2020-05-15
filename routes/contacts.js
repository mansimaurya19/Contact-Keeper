const express = require('express')
const router = express.Router()
const auth = require('../middleware/auth')
const User = require('../models/User')
const Contact = require('../models/Contact')
const check = require('express-validator').check
const validationResult = require('express-validator').validationResult

// @Route get api/contacts
//desc    Get all users contacts
// @access Public

router.get('/', auth, async (req, res) => {
    try {

        const contacts = await Contact.find({ user: req.user.id }).sort({ date: -1 })
        res.json(contacts)
    }
    catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error')
    }
})

// @Route Post api/user
//desc    Add a new   contact
// @access Private
router.post('/', [auth,
    [check('name', 'Please add name').not().isEmpty()]], async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        const { name, email, phone, type } = req.body
        try {
            const newContact = new Contact({
                name,
                email,
                phone,
                type,
                user: req.user.id
            })
            const contact = await newContact.save();

            res.json(contact)

        } catch (err) {
            console.error(err.message)
            res.status(500).send('Server Error')
        }
    }
)
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