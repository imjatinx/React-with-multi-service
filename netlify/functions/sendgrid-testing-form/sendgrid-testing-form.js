const sgMail = require("@sendgrid/mail")

function sendEmail(sgMail, fname, lname, email, phone, address, senderEmail, recieverEmail, senderName) {
  return new Promise((fulfill, reject) => {
    const mailBody = {
      from: {
        email: senderEmail,
        name: senderName
      },
      subject: `sendgrid automation testing Mail | ${senderName}`,
      to: recieverEmail,
      html: `Name : ${fname, ' ', lname} <br/> Email : ${email} <br/> Phone : ${phone} <br/> Address : ${address}`
    }

    sgMail
      .send(mailBody)
      .then(([response, mailBody]) => {
        fulfill(response)
      })
      .catch(error => reject(error))
  })
}

exports.handler = function (event, callback) {
  const {
    REACT_APP_SENDGRID_KEY,
    REACT_APP_SENDER_EMAIL,
    REACT_APP_SENDGRID_RECIEVER_EMAIL,
    REACT_APP_SENDGRID_SENDER_NAME
  } = process.env

  const body = JSON.parse(event.body)
  const fname = body.fname
  const lname = body.lname
  const email = body.email
  const phone = body.phone
  const address = body.address

  sgMail.setApiKey(REACT_APP_SENDGRID_KEY)

  sendEmail(
    sgMail,
    fname,
    lname,
    email,
    phone,
    address,
    REACT_APP_SENDER_EMAIL,
    REACT_APP_SENDGRID_RECIEVER_EMAIL,
    REACT_APP_SENDGRID_SENDER_NAME
  )
    .then(response => callback({
      statusCode: response.statusCode
    })
    )
    .catch(err => callback(err))
}