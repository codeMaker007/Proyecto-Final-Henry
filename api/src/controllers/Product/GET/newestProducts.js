const { Product } = require('../../../db')

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
        res.json(products)
    } catch (error) {
        res.send("No se pudieron obtener los últimos productos")
    }
}

module.exports = {newestProducts}