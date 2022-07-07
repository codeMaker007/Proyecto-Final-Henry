const {User} = require('../../../db')

async function getBannedUsers() {
    const where = {banned: true};
    const userList = await User.findAll({where});
    return userList;
}

module.exports = getBannedUsers;