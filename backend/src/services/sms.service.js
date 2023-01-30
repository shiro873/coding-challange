const config = require("../config/config");
require("dotenv").config();

const twilio = require("twilio");
const client = twilio(
  config.TWILIO_ACCOUNT_SID,
  config.TWILIO_AUTH_TOKEN
);

module.exports = {
  sendSMS,
};

function sendSMS(to, body) {
  const from = process.env.tWILIO_SMS_NUMBER;
  console.log(`sending sms ${from} to ${to}. Message body: ${body}`);
  client.messages.create({ from, to, body }).then((message) => {
    console.log(
      `SMS message sent from ${from} to ${to}. Message SID: ${message.sid}`
    );
  });
}

