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

async function getScore (ProductId) {
    let score = {numReviews: 0, averageScore: 0};
    let reviewList = await getProductReviews(ProductId);
    score.numReviews = reviewList.length;
    if (score.numReviews > 0)
        score.averageScore = Math.round(2*(reviewList.reduce(
                                (pre, curr) => pre + curr.score, 0)
                            )/score.numReviews)/2;
    return score;
}

module.exports = {getProductReviews, getScore};