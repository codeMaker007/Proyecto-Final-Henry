const {User} = require('../../../db');

async function updateUserInfo(id, userData) {
    const where = {id};
    const {name, dni, celphone, picture} = userData;
    let user = await User.findOne({where});
    if (!user) throw new Error('El usuario no existe en la base de datos.');
    user.set({name, dni, celphone, picture});
    return await user.save();
}

module.exports = updateUserInfo;