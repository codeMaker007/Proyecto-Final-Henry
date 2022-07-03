const paymentController = require('./paymentController');
const servicePayment = require('../../services/servicesPayment');
const paymentInstance = new paymentController(new servicePayment()); 

const payments = async (req, res, next ) => {
    const prod = req.body
    paymentInstance.getPaymentLink(req, res, prod);

}

module.exports = {payments}