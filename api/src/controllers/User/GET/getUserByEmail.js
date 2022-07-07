const {User} = require('../../../db')

async function getUserByEmail(email) {
    const where = {email};
    const user = await User.findOne({
        where
    });
    return user;
}


module.exports = getUserByEmail;