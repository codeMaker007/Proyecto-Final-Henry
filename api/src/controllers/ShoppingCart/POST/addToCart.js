const {CartItem, Product, User} = require('../../../db');
const getShoppingCart = require("../GET/getShoppingCart");

async function addToCart(userId, productId, quantity) {
    const user = await User.findByPk(userId);
    const product = await Product.findByPk(productId);
    if (!user) throw new Error('El usuario no existe en la base de datos.');
    if (!product) throw new Error('El producto no existe en la base de datos.');

    const newCartItem = await CartItem.create({quantity});
    await user.add(newCartItem);
    await product.add(newCartItem);
    return getShoppingCart(userId);
}

module.exports = addToCart;