const sgMail = require("@sendgrid/mail");
const config = require("../config/config");
require("dotenv").config();

sgMail.setApiKey(config.SENDGRID_API_KEY);

module.exports = {
  sendMail,
};

async function sendMail(maileObject, mailAddress) {
  const mail = {
    to: mailAddress, // Change to your recipient
    from: config.toMailAddress, // Change to your verified sender
    ...maileObject,
  };

  try{
    let response = await sgMail.send(mail);
    return {...response[0], status: "success"};
  } catch (e) {
    console.log(e);
    return {...e, status: "error"};
  }
}

/**
 * let mailObj = {
                recipientMailAddress: order?.outlet?.outlet_emails,
                mailBody: {
                    subject: "Your Daily Report",
                    html: `<div><p>Hi,</p><br><p>Your Daily Report is attached below.</p><br><br><br> <p>Thanks,</p> <p>Paul Singapore Team</p></div>`,
                    attachments: [
                        {
                            content: attachment, // convert attachment as base64
                            filename: `Report-Daily-${nowDateTime}.xlsx`,
                            type: "text/plain",
                            disposition: "attachment"
                        }
                    ]
                }
            }
 */
