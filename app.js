const express = require('express')
const app = express()
const path = require('node:path')
const indexRouter = require('./routes/indexRouter')

app.set("views", path.join(__dirname, "views"))
app.set("view engine", "ejs")

app.use(express.urlencoded({ extended: true }));
app.use("/", indexRouter)

// port listener

const PORT = 3000
app.listen(PORT, (error) => {
    if (error) {
        throw error
    }
    console.log(`Mini Messaging App - listening on port ${PORT}`)
})

