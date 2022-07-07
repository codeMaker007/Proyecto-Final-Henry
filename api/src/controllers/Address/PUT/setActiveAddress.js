const {Address} = require('../../../db');

async function setActiveAddress (UserId, id) {
    let where = {id, UserId};
    let address = await Address.findOne({where});
    if (!address) throw new Error('La dirección no existe en la base de datos.');
    where = {active: true};
    let previousActiveAddress = await Address.findOne({where});
    if (previousActiveAddress) {
        previousActiveAddress.set({active: false});
        await previousActiveAddress.save();
    }
    address.set({active: true});
    return await address.save();
}

module.exports = setActiveAddress;