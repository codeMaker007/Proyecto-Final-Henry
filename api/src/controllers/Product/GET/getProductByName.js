const {Product} = require('../../../db')
const {Op} = require('sequelize')
const {getScore} = require("../../Review/GET/getProductReviews");

async function getProductByName (name) {
    let products = await Product.findAll({
        where: {
            [Op.and]: [
                {stock: {
                    [Op.ne]: 0,
                }},
                {disabled: false},
                {name:{
                    [Op.iLike]:`%${name}%`
                }}
            ]
        },
    })
    return products
}

const getProduct = async (req, res) =>{
    const {name} = req.query
    try {
        if(name){
        let product = await getProductByName(name)
        if(product) return res.json(product)
    }
    let products = await Product.findAll({
        where: {
            [Op.and]: [
                {stock: {
                    [Op.ne]: 0,
                }},
                {disabled: false},
            ]
        }
    })
    // console.log(products);

    res.json(await Promise.all(products.map(
        async (product) => {
            let score = await getScore(product.id);
            return {...product.dataValues, numReviews: score.numReviews, averageScore: score.averageScore};
        }
    ))) 
    } catch (error) {
     res.status(404).send(error.message)    
    }}


module.exports = {getProduct}