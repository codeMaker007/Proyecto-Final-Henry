const {Product, Review, User} = require('../../../db');

async function getProductReviews(ProductId) {
    let product = await Product.findByPk(ProductId);
    if (!product) throw new Error('El producto no existe en la base de datos.');
    let where = {ProductId};
    const reviewList = await Review.findAll({
        where, 
        include: [{model: User, attributes: ['id', 'username', 'email']}]
    });
    return reviewList;
}
module.exports = getProductReviews;