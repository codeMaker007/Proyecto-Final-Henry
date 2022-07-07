const { User } = require('../../../db');

async function updateUser(id, userData) {
    const where = { id };
    let user = await User.findOne({ where });
    if (!user) throw new Error('El usuario no existe en la base de datos.');
    user.set(userData);
    return await user.save();
}

module.exports = updateUser;