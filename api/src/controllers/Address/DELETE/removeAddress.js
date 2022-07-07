const {Address} = require('../../../db');

async function removeAddress(UserId, id) {
    const where = {id, UserId};
    let address = await Address.findOne({where});
    if (!address) return 0;
    return await Address.destroy({ where });
}

module.exports = removeAddress;