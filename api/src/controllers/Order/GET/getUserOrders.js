const {Order, User} = require("../../../db")

const getUserOrders = async (req,res) => {
    const {userId} = req.params
    const orders = await User.findByPk(userId, {
        include: Order
    })
    res.json(orders)
}

module.exports = { getUserOrders }