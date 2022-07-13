const {User, Product} = require('../../../db');

async function removeFavourite(UserId, ProductId) {
    const user = await User.findByPk(UserId);
    const product = await Product.findByPk(ProductId);
    if (!user || !product ) return 0;
    await user.removeProduct(product);
    return getFavourites(UserId);
}

module.exports = removeFavourite;