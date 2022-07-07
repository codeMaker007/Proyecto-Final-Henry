const { User } = require('../../../db');

async function deleteUser(username) {
    const where = { username };
    let user = await User.findOne({ where });
    if (!user) throw new Error('El usuario no existe en la base de datos.');
    return await User.destroy({ where });
}

module.exports = deleteUser;