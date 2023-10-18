const UserModel = require("../models/users.model");

async function fetchingUsers(req, res) {
    try {
        const data = await UserModel.find();
        return res.status(200).json({
            status: true,
            data: data
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            status: false,
            message: 'Internal Server Error'
        });
    }
}

async function addingUsers(req, res) {
    try {
        const { name, className, marks } = req.body;
        const user = new UserModel({ name, className, marks });
        await user.save();
        return res.status(201).json(user);
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            status: false,
            message: 'Internal Server Error'
        });
    }
}

async function updatingUsers(req, res) {
    try {
        const { id } = req.params;
        const updatedData = req.body;
        const user = await UserModel.findByIdAndUpdate(id, updatedData);
        return res.status(200).json(user);
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            status: false,
            message: 'Internal Server Error'
        });
    }
}

async function deletingUsers(req, res) {
    try {
        const { id } = req.params;
        await UserModel.findByIdAndDelete(id);
        return res.status(204).send();
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            status: false,
            message: 'Internal Server Error'
        });
    }
}

module.exports = { fetchingUsers, addingUsers, updatingUsers, deletingUsers };
