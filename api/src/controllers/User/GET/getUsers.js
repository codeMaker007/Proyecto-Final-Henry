const { User } = require('../../../db');

async function getUsers() {
    const userList = await User.findAll();
    return userList;
}

module.exports = getUsers;