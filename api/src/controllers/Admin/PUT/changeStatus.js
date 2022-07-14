const { Order } = require('../../../db')

const updateOrder = async (req, res) => {
    const {idOrder} = req.params
    const {status} = req.body

    try {
        if (status) {
            let orderID = await Order.findByPk(idOrder)
            let response = await orderID.update({
                payment_status: status
            })
            res.send(response)
    }} catch (e) {
        res.status(404).send(e)
    }
}


module.exports = {
    updateOrder
}