module.exports = {
  createInvoice: (req, res) => {
    // console.log(req.params)
    // console.log(req.body)
    const {art_invoice_id} = req.params;
    const {billingName, billingAddress, billingCity, billingState, billingZipcode, token, amount} = req.body;
    const db = req.app.get('db')
    const stripe = req.app.get('stripe')
    
    stripe.charges.create({
      amount, currency: 'usd', source: token.id, description: 'description'
    }, (error, charge) => {
      if(error){
        console.log(error.message)
        return res.sendStatus(500)
      }
      console.log(charge)
      db.invoice.create_invoice(billingName, billingAddress, billingCity, billingState, billingZipcode, art_invoice_id)
        .then(() => res.sendStatus(200))
        .catch(err => res.status(500).send(err))
    })

  
  }
}
