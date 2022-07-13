const {Address, User} = require('../../../db');

async function addAddress (id, addressData) {
    const {province, zipCode, street, number, location, apartment, description} = addressData; 
    const where = {id};
    let user = await User.findOne({where});
    if (!user) throw new Error('El usuario no existe en la base de datos.');
    if (!(province && zipCode && street && number))
        throw new Error('Falta enviar datos obligatorios de la dirección');
    const newAddress = await Address.create({province, zipCode, street, number, location, apartment, description});
    await user.addAddress(newAddress);
    return newAddress;
}

module.exports = addAddress;