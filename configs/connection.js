const mongoose = require('mongoose');


const connection = mongoose.connect('mongodb+srv://abhijeet:abhijeetsenguptaa@cluster0.cdgrd8h.mongodb.net/liveCoding?retryWrites=true&w=majority')


module.exports = connection;