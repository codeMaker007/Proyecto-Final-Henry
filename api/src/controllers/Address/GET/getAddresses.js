const {Address, User} = require('../../../db');

async function getAddresses(UserId) {
    let user = await User.findByPk(UserId);
    if (!user) throw new Error('El usuario no existe en la base de datos.');
    let where = {UserId};
    const addressList = await Address.findAll({where});
    return addressList;
}
module.exports = getAddresses;