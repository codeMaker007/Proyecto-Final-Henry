const {CartItem} = require('../../../db');
const getShoppingCart = require("../GET/getShoppingCart");

async function removeFromCart(UserId, ProductId) {
    const where = {UserId, ProductId};
    let cartItem = await CartItem.findOne({where});
    if (!cartItem) return 0;
    await cartItem.destroy();
    return getShoppingCart(userId);
}

module.exports = removeFromCart;