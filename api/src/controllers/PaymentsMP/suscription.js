const paymentController = require('./paymentController');
const servicePayment = require('../../services/servicesPayment');
const paymentInstance = new paymentController(new servicePayment()); 

const suscription = async (req, res, next ) => {
    const prod = req.body
    paymentInstance.getSuscriptionLink(req, res, prod);
}

module.exports = {suscription}