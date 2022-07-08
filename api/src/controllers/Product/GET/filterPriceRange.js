const { Product } = require('../../../db')
const { Op } = require('sequelize')

const filterPriceRange = async (req, res) => {
    let minPrice = req.params.minPrice
    let maxPrice = req.params.maxPrice
    
    try {
        let allProducts = await Product.findAll({
            where: {
                price: {
                    [Op.between]: [minPrice, maxPrice]
                }
            }
        })
        res.send(allProducts)
    } catch (e) {
        console.log(e)
    }
}

module.exports = {
    filterPriceRange
}