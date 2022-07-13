const {User} = require('../../../db');

async function getShoppingCart(userId) {
    const user = await User.findByPk(userId);
    if (!user) throw new Error('El usuario no existe en la base de datos.');
    return user.getCartItems();
}

module.exports = getShoppingCart;