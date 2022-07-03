const { Product } = require('../../../db')
const {Op} = require('sequelize')

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
        res.json(products)
    } catch (error) {
        res.send("No se pudieron obtener productos más vendidos")
    }
}

module.exports = {bestSellingProducts}