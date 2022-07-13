const {Product, Review, User} = require('../../../db');

async function createReview (userId, productId, reviewData) {
    const {score, title, text} = reviewData; 
    let user = await User.findByPk(userId);
    if (!user) throw new Error('El usuario no existe en la base de datos.');
    let product = await Product.findByPk(productId);
    if (!product) throw new Error('El producto no existe en la base de datos.');
    if (!(score && title))
        throw new Error('Falta enviar datos obligatorios de la reseña');
    const newReview = await Review.create({score, title, text});
    await user.addReview(newReview);
    await product.addReview(newReview);
    return newReview;
}

module.exports = createReview;