const Users = require("../models/userModel")
const messages = require("../constants/messages")

const getUsers = async (req, res) => {
    try {
        const users = await Users.find({}, { __v: 0 })
        res.status(201).json({ ...messages.DATA_RETRIVED, users })
    } catch (error) {
        console.log({ ...error });
        res.status(500).json({ ...messages.SERVER_ERROR })
    }
}

const addUser = async (req, res) => {
    try {
        console.log(req.body);

        const user = new Users(req.body)
        const createdUser = await user.save()

        if (!createdUser) {
            return res.status(400).json({ ...messages.BAD_REQUEST, })
        }
        console.log({ ...messages.USER_CREATED, msg: `Account for ${req.body.email} created successfully.` });
        res.status(201).json({ ...messages.USER_CREATED, msg: `Account for ${req.body.email} created successfully.` })
    } catch (error) {
        console.log({ ...error });
        res.status(500).json({ ...messages.SERVER_ERROR })
    }
}

const updateUsers = async (req, res) => {
    try {
        const { userId } = req.params
        await Users.findOneAndUpdate({ _id: userId }, { $set: { ...req.body } })

        console.log({ ...messages.USER_UPDATED, msg: `Account for ${req.body.email} updated successfully.` });
        res.status(200).json({ ...messages.USER_UPDATED, msg: `Account for ${req.body.email} updated successfully.` })
    } catch (error) {
        console.log({ ...error });
        res.status(500).json({ ...messages.SERVER_ERROR })
    }
}

const deleteUsers = async (req, res) => {
    try {
        const { userId } = req.params
        const deletedUser = await Users.findOneAndDelete({ _id: userId })
        console.log(" : : > ", deletedUser);
        if(!deletedUser){
            return res.status(404).json({ ...messages.NOT_FOUND })
        }
        console.log({ ...messages.USER_DELETED, msg: `Account for ${req.body.email} deleted successfully.` });
        res.status(200).json({ ...messages.USER_DELETED, msg: `Account for ${req.body.email} deleted successfully.` })
    } catch (error) {
        console.log({ ...error });
        res.status(500).json({ ...messages.SERVER_ERROR })
    }
}

module.exports = {
    addUser,
    getUsers,
    updateUsers,
    deleteUsers
}