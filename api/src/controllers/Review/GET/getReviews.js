const {Product, Review, User} = require('../../../db');

async function getReviews() {
    const reviewList = await Review.findAll({
        include: [{model: User, attributes: ['id', 'username', 'email']},
                  {model: Product, attributes: ['id', 'name']}]
    });
    return reviewList;
}

module.exports = getReviews;