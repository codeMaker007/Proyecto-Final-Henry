const {User} = require('../../../db')

async function getAdmins() {
    const where = {isAdmin: true};
    const userList = await User.findAll({where});
    return userList;
}

module.exports = getAdmins;