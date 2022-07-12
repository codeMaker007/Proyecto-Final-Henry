const {Product} = require("../../../db")
const {getScore} = require("../../Review/GET/getProductReviews");

const getProductById = async (req, res) => {
    const {idProduct} = req.params
    try {
        let prod = await Product.findByPk(idProduct)
        if(prod) {
            let score = await getScore(idProduct);
            return res.json({...prod.dataValues, numReviews: score.numReviews, averageScore: score.averageScore})
        } else res.status(404).send("Producto no encontrado")
    } catch (error) {
        res.status(404).send(error)
    }
}

module.exports = {getProductById}