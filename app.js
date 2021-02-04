const express = require("express")
const app = express()
const port = 3000
app.post("/register", (req, res) => {
  const {email, password } = req.body
  const access_token
  res.status(201).json({ access_token })
})

app.listen(port, () => {
  console.log(`app listening on port ${port}`)
})