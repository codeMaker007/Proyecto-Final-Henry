const {Order, User} = require("../../../db")

const getAdminOrders = async (req,res) => {
    const orders = await Order.findAll({
        include: User
    })
    res.json(orders)
}

module.exports = { getAdminOrders }