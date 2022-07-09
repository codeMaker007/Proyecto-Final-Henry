const {Product, Review, User} = require('../../../db');

async function getReview(ProductId, UserId) {
    let product = await Product.findByPk(ProductId);
    if (!product) throw new Error('El producto no existe en la base de datos.');
    let user = await User.findByPk(UserId);
    if (!user) throw new Error('El usuario no existe en la base de datos.');
    let where = {ProductId, UserId};
    const review = await Review.findAll({where});
    return review;
}
module.exports = getReview;