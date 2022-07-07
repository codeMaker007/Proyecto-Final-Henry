const {Product} = require('../../../db')

const updateProduct = async (req, res) => {
    const {idProduct} = req.params
    const {quantity} = req.body
    const product = req.body

    try {
        if(quantity){
            let p = await Product.findByPk(idProduct)
            let prod = await Product.update({
                stock: p.stock - quantity,
                amountSold: p.amountSold + quantity
            }, {
                where: {
                    id: idProduct
                }
            })
        } else {
            let prod = await Product.update(product, ({
                where: {
                    id: idProduct
                }
            }))
        }
        if(product.disabled === true){
            res.send(`Producto Deshabilitado`)
        }else{
            res.send(`Producto actualizado`)
        }
    } catch (error) {
        res.status(404).send("No se pudo actualizar el producto")
    }
}

module.exports = {updateProduct}