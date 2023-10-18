const express = require('express');
const { fetchingUsers, addingUsers, updatingUsers, deletingUsers } = require('../controllers/users.controllers');

const userRouter = express.Router();

userRouter.get('/', fetchingUsers); // Route for fetching all users
userRouter.post('/', addingUsers);   // Route for adding a new user
userRouter.patch('/:id', updatingUsers);  // Route for updating a user by ID
userRouter.delete('/:id', deletingUsers); // Route for deleting a user by ID

module.exports = userRouter;
