const {User} = require('../../../db');

async function switchBan(id) {
    const where = {id};
    let user = await User.findOne({where});
    if (!user) throw new Error('El usuario no existe en la base de datos.');
    user.set({banned: !user.banned});
    return await user.save();
}

module.exports = switchBan;