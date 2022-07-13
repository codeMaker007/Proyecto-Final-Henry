const {Product, User} = require('../../../db');
const getFavourites = require("../GET/getFavourites");

async function addFavourite(userId, productId) {
    const user = await User.findByPk(userId);
    const product = await Product.findByPk(productId);
    if (!user) throw new Error('El usuario no existe en la base de datos.');
    if (!product) throw new Error('El producto no existe en la base de datos.');
    await user.addProduct(product);
    return getFavourites(userId);
}

module.exports = addFavourite;