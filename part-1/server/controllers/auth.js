const bcrypt = require('bcryptjs')

const users = []

module.exports = {
    login: (req, res) => {
      const { username, password } = req.body
      console.log('Logging In User')
      console.log(req.body)
      for (let i = 0; i < users.length; i++) {
        const existing = bcrypt.compareSync(password, users[i].pinHash)
        if (username === users[i].username && existing) {
          res.status(200).send(users[i])
          return
        }
      }
      let usersToReturn = {...newUser}
      delete usersToReturn.pinHash
      res.status(400).send("User not found.")
    },
    register: (req, res) => {
      console.log('Registering User')
      let { username, email, firstName, lastName, password } = req.body
      
      let salt = bcrypt.genSaltSync(5)
      let pinHash = bcrypt.hashSync(password, salt)
      
      let newUser = {
        username,
        email,
        firstName,
        lastName,
        pinHash
      }
      users.push(newUser)
      console.log("new user created")
      console.log('new password', users)
      res.status(200)
    }
  }