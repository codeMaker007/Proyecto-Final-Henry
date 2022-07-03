const { Product } = require('../../../db')
const {Op} = require('sequelize')

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
        res.json(products)
    } catch (error) {
        res.send("No se pudieron obtener los productos con descuentos")
    }
}

module.exports = {mostDiscountedProducts}