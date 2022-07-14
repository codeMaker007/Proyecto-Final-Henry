const {Address, User} = require('../../../db');
const getAddresses = require('../GET/getAddresses');

async function addAddress (id, addressData) {
    const where = {id};
    let user = await User.findOne({where});
    if (!user) throw new Error('El usuario no existe en la base de datos.');
    if (!(addressData.province && addressData.zipCode && addressData.street && addressData.number))
        throw new Error('Falta enviar datos obligatorios de la dirección');
    const addresses = await getAddresses(id);
    if (addresses.length === 0) addressData = {...addressData, active: true};
    const newAddress = await Address.create(addressData);
    await user.addAddress(newAddress);
    return newAddress;
}

module.exports = addAddress;