const bcrypt = require('bcryptjs')

module.exports = {
  register: async(req, res) => {
    const {username, email, password, admin} = req.body
    const db = req.app.get('db')

    const [foundUser] = await db.users.check_user(email)
    if(foundUser){
      return res.status(400).send('Email is already in use, please register with a different email.')
    }
    let salt = bcrypt.genSaltSync(10)
    const hash = bcrypt.hashSync(password, salt)

    const [newUser] = await db.users.register_user(username, email, hash, admin)

    req.session.user = newUser
    res.status(201).send(req.session.user)
  },
  login: async(req, res) => {
    const {email, password} = req.body
    const db = req.app.get('db')
    const [foundUser] = await db.users.check_user(email)
    if(!foundUser){
      return res.status(400).send('Email is not associated with an account.')
    }
    const authenticated = bcrypt.compareSync(password, foundUser.password)
    if(!authenticated){
      return res.status(401).send('Password is incorrect, please try again.')
    }
    delete foundUser.password
    req.session.user = foundUser
    res.status(202).send(req.session.user)
  },
  logout: (req, res) => {
    req.session.destroy()
    res.sendStatus(200)
  }
}
// took email out of {} on line 8, 15, 23 because it's passing an object and expecting it to be === to $1.