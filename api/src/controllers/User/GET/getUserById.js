const {User} = require('../../../db')

async function getUserById(id) {
    const where = {id};
    const user = await User.findOne({
        where
    });
    if (!user) throw new Error('El usuario no existe en la base de datos.');
    return user;
}

module.exports = getUserById;