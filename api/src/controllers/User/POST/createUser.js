const {User} = require('../../../db');

async function createUser(name, email) {
    if (!(name && email)) throw new Error('Falta enviar datos obligatorios del usuario');
    const user = await User.create({name, email});
    return await user.save();
}

module.exports = createUser;