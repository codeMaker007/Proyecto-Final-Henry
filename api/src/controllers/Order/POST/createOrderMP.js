const {Order} = require('../../../db')

const createOrderMP = async(req, res) => {
    const { payment_status, merchant_order_id, userId } = req.body
    try {
        let newOrder = await Order.create({
            payment_status,
            merchant_order_id,
        })
        newOrder.addUser(userId)
        res.send("Orden Creada")
    } catch (error) {
        res.status(404).send(error)
    }
}

module.exports = { createOrderMP }