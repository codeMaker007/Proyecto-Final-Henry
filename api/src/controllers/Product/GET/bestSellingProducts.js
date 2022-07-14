const { Product } = require('../../../db')
const {Op} = require('sequelize')
const {getScore} = require("../../Review/GET/getProductReviews");

const bestSellingProducts = async (req, res) => {
    try {
        let products = await Product.findAll({
            where: {
                [Op.and]: [
                    {amountSold: {
                        [Op.ne]: 0,
                    }},
                    {disabled: false},
                ]
            }
        })
        products.sort((a, b) => {
            if(a.amountSold > b.amountSold) return -1
            if(a.amountSold < b.amountSold) return 1
        })
        if(products.length > 5){
            let topSellingProducts = products.slice(0, 5)
            return res.json(topSellingProducts)
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
        res.send("No se pudieron obtener productos más vendidos")
    }
}

module.exports = {bestSellingProducts}