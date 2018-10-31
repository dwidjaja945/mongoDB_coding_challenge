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

router.post('/addItem', (req, res) => {
    const newItem = new Item({
        // can't read body, but i bodyParser();
        name: req.body.name
    });

    newItem
        .save()
        .then(item => res.json(item))
        .catch(err => console.log(err));

});

// @route DELETE api/delete-item
// @desc Delete a item
// @access Public 

router.delete('/delete_item', (req, res) => {
    const id = req.body._id;
    Item.remove({ _id: id })
        .exec()
        .then(item => res.status(200).json({sucess: true, _id: id}))
        .catch(err => res.status(404).json({success: false}))
})  

// @route Update api/updateItem
// @desc Update a item
// @access Public

router.patch('/updateItem', (req, res) => {
    const id = req.body._id;
    const name = req.body.name;
    // const updateOptions = {};
    // for (const options of req.body) {
    //   updateOptions[options.propName] = options.value;
    // }
    // Item.update({ _id: id }, { $set: updateOptions })
    Item.update({ _id: id }, { name: name })
        .then(result => res.status(200).json({succes: true}))
        .catch(err => res.status(404).json({success: false}))
})  

module.exports = router;