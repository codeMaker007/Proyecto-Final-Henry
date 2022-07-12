const { Order, User } = require('../../../db')
const nodemailer = require("nodemailer");
const { EMAIL_PASSWORD, EMAIL } = process.env


const Main = () => {
    let transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        secure: false,
        auth: {
            user: EMAIL,
            pass: EMAIL_PASSWORD,
        },
    });
    return transporter
}


const createOrderPP = async (req, res) => {
    let { payment_status, merchant_id, items, userId } = req.body
    console.log("BODY:", req.body)
    let user = await User.findByPk(userId)
    try {
        let newOrder = await Order.create({
            payment_status,
            merchant_id
        })
        newOrder.addUser(userId)
        if (newOrder) {
            Main().sendMail({
                from: EMAIL,
                to: `${user.email}`,
                subject: "COMPRA CONFIRMADA",
                html: `<table border="0" cellpadding="40" cellspacing="0" class="nl-container" role="presentation"style="background-color: #FFFFFF;" width="100%"><tbody>
                <tr>
                    <td>
                        <table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-1"
                            style="background-color: #022335" role="presentation" width="100%">
                            <tbody>
                                <tr>
                                    <td>
                                        <table align="center" border="0" cellpadding="0" cellspacing="0"
                                            class="row-content stack" role="presentation"
                                            style="color: #000000; width: 500px;" width="500">
                                            <tbody>
                                                <tr>
                                                    <td class="column column-1"
                                                        style="font-weight: 400; text-align: left; vertical-align: top; padding-top: 5px; padding-bottom: 5px; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;"
                                                        width="100%">
                                                        <table border="0" cellpadding="0" cellspacing="0"
                                                            class="heading_block" role="presentation" width="100%">
                                                            <tr>
                                                                <td style="width:100%;text-align:center;">
                                                                    <h1
                                                                        style="margin: 0; color: #000000; font-size: 60px; font-family: Arial, Helvetica Neue, Helvetica, sans-serif; line-height: 120%; text-align: center; direction: ltr; font-weight: 700; letter-spacing: normal; margin-top: 0; margin-bottom: 0;">
                                                                        <i>
                                                                            <span class="tinyMce-placeholder"
                                                                            style="background-color: #022335; color: #ffc400;">¡Hentech!</span>
                                                                        </i>
                                                                    </h1>
                                                                </td>
                                                            </tr>
                                                        </table>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <table align="center" border="0"  cellpadding="0" cellspacing="0" class="row row-2"
                            role="presentation" width="100%">
                            <tbody>
                                <tr>
                                    <td>
                                        <table align="left" border="0" cellpadding="0" cellspacing="40"
                                            class="row-content stack" role="presentation"
                                            style="color: #000000; width: 500px;" width="500">
                                            <tbody>
                                                <tr>
                                                    <td class="column column-1"
                                                        style="font-weight: 400; text-align: left; vertical-align: top; padding-top: 5px; padding-bottom: 5px; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;"
                                                        width="100%">
                                                        <table border="0" cellpadding="0" cellspacing="0"
                                                            class="heading_block" role="presentation" width="100%">
                                                            <tr>
                                                                <td style="width:100%;text-align:center;">
                                                                    <h1
                                                                        style="margin: 0; color: #000000; font-size: 20px; font-family: Arial, Helvetica Neue, Helvetica, sans-serif; line-height: 120%; text-align: left; direction: ltr; font-weight: 700; letter-spacing: normal; margin-top: 0; margin-bottom: 0;">
                                                                        <span class="tinyMce-placeholder">Detalles de la
                                                                            compra:</span>
                                                                    </h1>
                                                                </td>
                                                            </tr>
                                                        </table>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-3"
                            role="presentation" width="100%">
                            <tbody>
                                <tr>
                                    <td>
                                        <table align="center" border="0" cellpadding="0" cellspacing="0"
                                            class="row-content stack" role="presentation"
                                            style="color: #000000; width: 500px;" width="500">
                                            <tbody>
                                                <tr>
                                                    <td class="column column-1"
                                                        style="font-weight: 400; text-align: left; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;"
                                                        width="25%">
                                                        <table border="0" cellpadding="0" cellspacing="0"
                                                            class="image_block" role="presentation" width="100%">
                                                            <tr>
                                                                <td
                                                                    style="width:100%;padding-right:0;padding-left:0;padding-top:5px;padding-bottom:5px">
                                                                    <div align="center" style="line-height:10px"><img
                                                                            src=${items[0].picture}
                                                                            style="display:block;height:auto;border:0;width:100px;max-width:100%"
                                                                            width="100" /></div>
                                                                </td>
                                                            </tr>
                                                        </table>
                                                    </td>
                                                    <td class="column column-2"
                                                        style="font-weight: 400; text-align: left; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;"
                                                        width="75%">
                                                        <table border="0" cellpadding="0" cellspacing="0" class="list_block"
                                                            role="presentation" style="word-break: break-word;"
                                                            width="100%">
                                                            <tr>
                                                                <td
                                                                    style="padding-top:15px;padding-right:10px;padding-bottom:15px;padding-left:10px;">
                                                                    <ul
                                                                        style="margin: 0; padding: 0; margin-left: 20px; list-style-type: revert; color: #000000; font-size: 16px; font-family: Arial, Helvetica Neue, Helvetica, sans-serif; font-weight: 400; line-height: 120%; text-align: left; direction: ltr; letter-spacing: 0px;">
                                                                        <li style="margin-bottom: 0px;">Nombre del producto: ${items[0].name}
                                                                        </li>
                                                                        <li style="margin-bottom: 0px;">Descripción del
                                                                            producto: ${items[0].description}</li>
                                                                        <li style="margin-bottom: 0px;">Precio del producto: ${items[0].unit_amount.value}
                                                                        </li>
                                                                        <li>Cantidad: ${items[0].quantity}</li>
                                                                    </ul>
                                                                </td>
                                                            </tr>
                                                        </table>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-8"
                            role="presentation" width="100%">
                            <tbody>
                                <tr>
                                    <td>
                            <tbody>
                                <tr>
                                    <td class="column column-1"
                                        style="font-weight: 400; text-align: left; vertical-align: top; padding-top: 5px; padding-bottom: 5px; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;"
                                        width="100%">
                                        <table border="0" style="background-color: #000000 " cellpadding="0" cellspacing="0" class="heading_block"
                                            role="presentation" width="100%">
                                            <tr>
                                                <td style="width:100%;text-align:center;">
                                                    <h1
                                                        style="margin: 0; color: #FFC400 ; font-size: 23px; font-family: Arial, Helvetica Neue, Helvetica, sans-serif; line-height: 120%; text-align: center; direction: ltr; font-weight: 700; letter-spacing: normal; margin-top: 0; margin-bottom: 0;">
                                                        <span class="tinyMce-placeholder">Gracias por su compra!</span>
                                                    </h1>
                                                </td>
                                            </tr>
                                        </table>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </td>
                </tr>
            </tbody>
        </table>
        </td>
        </tr>
        </tbody>
        </table>`
        });
        }
        res.send("orden creada")
    } catch (error) {
        res.status(404).send(error)
    }
}


module.exports = { createOrderPP }