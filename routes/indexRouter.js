const { Router } = require("express")

const indexRouter = Router()

const BASE_URL = process.env.BASE_URL || '/'


// messages

const messages = [
    {
    text: "Hi there!",
    user: "Amando",
    added: new Date()
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date()
  }
]

indexRouter.get("/", (req, res) => {
    res.render('index', { title: "Messages!", messages: messages, BASE_URL: BASE_URL })
    
})

indexRouter.get('/new', (req, res) => {
    res.render('form', { BASE_URL: BASE_URL })
})
indexRouter.post('/new',(req, res) =>{
    messages.push({text: req.body.messageText, user: req.body.messageUser, added: new Date(), BASE_URL:  BASE_URL})
    res.redirect(BASE_URL)
} )
indexRouter.get('/view_messages/:index', (req, res) => {
    const selectedMessage = messages[req.params.index]
    res.render('messages/message', {selectedMessage: selectedMessage, BASE_URL: BASE_URL })
})


module.exports = indexRouter