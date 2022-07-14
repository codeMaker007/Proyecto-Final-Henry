const {Address} = require('../../../db');
const getAddresses = require('../GET/getAddresses');
const setActiveAddress = require('../PUT/setActiveAddress')

async function removeAddress(UserId, id) {
    const where = {id, UserId};
    let address = await Address.findOne({where});
    if (!address) return 0;
    if (address.active) {
        const addresses = await getAddresses(UserId);
        if (addresses.length > 0) await setActiveAddress(UserId, addresses[0].id);
    }
    return await Address.destroy({ where });
    return 0;
}

module.exports = removeAddress;