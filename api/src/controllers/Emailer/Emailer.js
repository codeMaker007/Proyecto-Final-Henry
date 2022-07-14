const nodemailer = require("nodemailer");
const { EMAIL_PASSWORD, EMAIL } = process.env
const { Order, User } = require("../../db")


async function main() {
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

main().catch(console.error);


const getOrders = async (req, res) => {
  let orderID = req.params.orderID
  let orders = await Order.findByPk(orderID, {
    include: User
  })
  if (orders) {
    (await main()).sendMail({
      from: EMAIL,
      to: `${orders.Users[0].email}`,
      subject: "PRODUCTO DESPACHADO",
      html: `
        <table border="0" cellpadding="0" cellspacing="0" class="nl-container" role="presentation" style="background-color: #FFFFFF;" width="100%">
        <tbody>
        <tr>
        <td>
        <table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-1" role="presentation" width="100%">
        <tbody>
        <tr>
        <td>
        <table align="center" border="0" cellpadding="0" cellspacing="0" class="row-content stack" role="presentation" style="color: #000000; width: 500px;" width="500">
        <tbody>
        <tr>
        <td class="column column-1" style="font-weight: 400; text-align: left; vertical-align: top; padding-top: 5px; padding-bottom: 5px; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;" width="100%">
        <table border="0" cellpadding="0" cellspacing="0" class="heading_block" role="presentation" width="100%">
        <tr>
        <td style="width:100%;text-align:center;">
        <h1 style="margin: 0; background-color: #3a0ca3; color: #3a0ca3; font-size: 30px; font-family: Arial, Helvetica Neue, Helvetica, sans-serif; line-height: 120%; text-align: center; direction: ltr; font-weight: 700; letter-spacing: normal; margin-top: 0; margin-bottom: 0;"><span style="color: #ced4da; background-color: #3a0ca3;"><em><span class="tinyMce-placeholder">HENTECH!</span></em></span></h1>
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
        <table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-2" role="presentation" width="100%">
        <tbody>
        <tr>
        <td>
        <table align="center" border="0" cellpadding="0" cellspacing="0" class="row-content stack" role="presentation" style="color: #000000; width: 500px;" width="500">
        <tbody>
        <tr>
        <td class="column column-1" style="font-weight: 400; text-align: left; vertical-align: top; padding-top: 5px; padding-bottom: 5px; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;" width="100%">
        <table border="0" cellpadding="10" cellspacing="0" class="paragraph_block" role="presentation" style="word-break: break-word;" width="100%">
        <tr>
        <td>
        <div style="color:#000000;font-size:18px;font-family:Arial, Helvetica Neue, Helvetica, sans-serif;font-weight:400;line-height:120%;text-align:center;direction:ltr;letter-spacing:0px">
        <b><p style="margin: 0;">Su producto ha sido despachado.</p></b>
        </div>
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
        <table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-3" role="presentation" width="100%">
        <tbody>
        <tr>
        <td>
        <table align="center" border="0" cellpadding="0" cellspacing="0" class="row-content stack" role="presentation" style="color: #000000; width: 500px;" width="500">
        <tbody>
        <tr>
        <td class="column column-1" style="font-weight: 400; text-align: left; vertical-align: top; padding-top: 5px; padding-bottom: 5px; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;" width="100%">
        <table border="0" cellpadding="0" cellspacing="0" class="heading_block" role="presentation" width="100%">
        <tr>
        <td style="width:100%;text-align:center;">
        <h1 style="margin: 0; background-color: #3a0ca3; font-size: 23px; font-family: Arial, Helvetica Neue, Helvetica, sans-serif; line-height: 120%; text-align: center; direction: ltr; font-weight: 700; letter-spacing: normal; margin-top: 0; margin-bottom: 0;"><span class="tinyMce-placeholder" style="background-color: #3a0ca3; color: #ced4da;">Gracias por su compra!</span></h1>
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
        </table><!-- End -->`
    })
  }
  res.send('Email enviado')
}
module.exports = {
  getOrders
}