const { Product } = require('../../../db')
const {Op} = require('sequelize')
const {getScore} = require("../../Review/GET/getProductReviews");

const mostDiscountedProducts = async (req, res) => {
    try {
        let products = await Product.findAll({
            where: {
                [Op.and]: [
                    {discount: {
                        [Op.ne]: 0,
                    }},
                    {disabled: false},
                ]
            }
        })
        products.sort((a, b) => {
            if(a.discount > b.discount) return -1
            if(a.discount < b.discount) return 1
        })
        if(products.length > 5){
            let discountedProducts = products.slice(0, 5)
            return res.json(discountedProducts)
        } else {
            products
        }
        res.json(await Promise.all(products.map(
            async (product) => {
                let score = await getScore(product.id);
                return {...product.dataValues, numReviews: score.numReviews, averageScore: score.averageScore};
            }
        )));
    } catch (error) {
        res.send("No se pudieron obtener los productos con descuentos")
    }
}

module.exports = {mostDiscountedProducts}