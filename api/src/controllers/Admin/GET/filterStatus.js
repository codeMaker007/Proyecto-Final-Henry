const { Order } = require('../../../db')

const filterStatus = async (req, res) => {
    const status = req.params.status

    try {
        switch (status) {
            case 'created':
                let orders = await Order.findAll({
                    where: {
                        payment_status: status
                    }
                })
                return res.send(orders)

            case 'processing':
                let orders1 = await Order.findAll({
                    where: {
                        payment_status: status
                    }
                })
                return res.send(orders1)

            case 'approved':
                let orders2 = await Order.findAll({
                    where: {
                        payment_status: status
                    }
                })
                return res.send(orders2)

            case 'canceled':
                let orders3 = await Order.findAll({
                    where: {
                        payment_status: status
                    }
                })
                return res.send(orders3)


            default:
                break;
        }
    } catch (e) {
        res.send(e)
    }
}

module.exports = {
    filterStatus
}
