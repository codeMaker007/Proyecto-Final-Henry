const {Address} = require('../../../db');

async function updateAddress (UserId, id, addressData) {
    const {province, zipCode, street, number, location, apartment, description} = addressData; 
    const where = {id, UserId};
    let address = await Address.findOne({where});
    if (!address) throw new Error('La dirección no existe en la base de datos.');
    if (!(province && zipCode && street && number))
        throw new Error('Falta enviar datos obligatorios de la dirección');
    address.set({province, zipCode, street, number, location, apartment, description});
    return await address.save();
}

module.exports = updateAddress;