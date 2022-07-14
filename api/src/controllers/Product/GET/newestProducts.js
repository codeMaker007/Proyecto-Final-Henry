const { Product } = require('../../../db')
const {getScore} = require("../../Review/GET/getProductReviews");

const newestProducts = async (req, res) => {
    try {
        let products = await Product.findAll({where:{
            disabled: false
        }})
        products.sort((a, b) => {
            if(a.createdAt > b.createdAt) return -1
            if(a.createdAt < b.createdAt) return 1
        })
        if(products.length > 5){
            let newproducts = products.slice(0, 5)
            return res.json(newproducts)
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
        res.send("No se pudieron obtener los últimos productos")
    }
}

module.exports = {newestProducts}