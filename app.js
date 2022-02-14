const express = require("express")
const morgan = require("morgan")
const bodyParser = require("body-parser")
const favicon = require("serve-favicon")
const sequelize = require("./src/db/sequelize")
const cors = require("cors")

const app = express()
const port = 3000

app
  .use(favicon(__dirname + "/favicon.ico"))
  .use(morgan("dev"))
  .use(bodyParser.json())
  .use(cors())

sequelize.initDb()

require("./src/routes/initial")(app)
require("./src/routes/login")(app)
require("./src/routes/register")(app)

app.use(({res}) =>{
  const message = "Impossible de trouver la ressource demandée ! Veuillez essayer une autre URL."
  res.status(404).json({message})
})

app.listen(port, () => console.log(`App démarrée sur: localhost:${port}`))
