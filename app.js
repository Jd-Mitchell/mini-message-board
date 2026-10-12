require('dotenv').config()
const express = require('express')
const app = express()
const path = require('node:path')
const indexRouter = require('./routes/indexRouter')


app.set("views", path.join(__dirname, "views"))
app.set("view engine", "ejs")

app.use(express.urlencoded({ extended: true }));

const BASE_URL = process.env.BASE_URL || '/'   
app.use(BASE_URL, indexRouter)




// port listener

const PORT = process.env.PORT || 3000
app.listen(PORT, (error) => {
    if (error) {
        throw error
    }
    console.log(`Mini Messaging App - ${process.env.NODE_ENV} mode, listening on port ${PORT}`)
})

