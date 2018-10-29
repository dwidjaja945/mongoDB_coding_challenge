const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');

// Item Model
const Item = require('../../model/Item');

// @route GET api/get_list_data
// @desc Get all items
// @access Public

router.get('/get_list_data', (req, res) => {
    Item.find()
        .sort({ date: -1 })
        .then(items => res.json(items))
});

// @route POST api/addItem
// @desc Create item
// @access Public

router.post('/addItem', (req, res, next) => {
    const newItem = new Item({
        // can't read body, but i bodyParser();
        name: req.body.name
    });

    newItem
        .save()
        .then(item => res.json(item))
        .catch(err => console.log(err));

});

module.exports = router;