const { Product } = require('../../../db')

const orderByName = async (req, res) => {
    let nameOrder = req.params.nameOrder;
    const allProducts = await Product.findAll()

    try {
        nameOrder === 'A-Z' ?
            allProducts.sort(function (a, b) {
                if (a.name > b.name) {
                    return 1;
                }
                if (b.name > a.name) {
                    return -1;
                }
                return 0;
            }) :
            allProducts.sort(function (a, b) {
                if (a.name > b.name) {
                    return -1;
                }
                if (b.name > a.name) {
                    return 1;
                }
                return 0;
            })
        res.send(allProducts)
    } catch (e) {
        console.log(e)
    }
}

module.exports = {
    orderByName
}

