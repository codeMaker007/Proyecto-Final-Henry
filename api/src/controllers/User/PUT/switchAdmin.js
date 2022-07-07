const {User} = require('../../../db');

async function switchAdmin(id) {
    const where = {id};
    console.log(id);
    let user = await User.findOne({where});
    if (!user) throw new Error('El usuario no existe en la base de datos.');
    user.set({isAdmin: !user.isAdmin});
    return await user.save();
}

module.exports = switchAdmin;