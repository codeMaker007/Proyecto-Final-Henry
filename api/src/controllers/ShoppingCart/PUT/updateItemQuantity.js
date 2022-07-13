const {CartItem} = require('../../../db');

async function updateItemQuantity (UserId, ProductId, quantity) {
    const where = {UserId, ProductId};
    let cartItem = await CartItem.findOne({where});
    if (!cartItem) throw new Error('El producto no se encuentra en el carrito');
    cartItem.set({quantity});
    return await cartItem.save();
}

module.exports = updateItemQuantity;