const {User} = require('../../../db');

async function getFavourites(userId) {
    const user = await User.findByPk(userId);
    if (!user) throw new Error('El usuario no existe en la base de datos.');
    return user.getProducts();
}

module.exports = getFavourites;