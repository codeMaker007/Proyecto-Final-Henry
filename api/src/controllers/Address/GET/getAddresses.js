const {Address, User} = require('../../../db');

async function getAddresses(UserId) {
    let where = {id: UserId};
    let user = await User.findAll({where});
    if (!user) throw new Error('El usuario no existe en la base de datos.');
    where = {UserId};
    const addressList = await Address.findAll({where});
    return addressList;
}
module.exports = getAddresses;