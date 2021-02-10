const {EMAIL_TO} = process.env

module.exports = {
  sendEmail: (req, res) => {
    const transporter = req.app.get('transporter')
    const {emailFrom, content} = req.body

    transporter.sendMail({
      from: emailFrom,
      to: EMAIL_TO,
      subject: 'test subject',
      text: content
    })
    res.sendStatus(200)

  }
}