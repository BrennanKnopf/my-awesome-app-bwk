const express = require('express')
const app = express()
// Simple Hello Word Node App
const APP_PORT = process.env.APP_PORT || 3000; app.get('/', (req, res) => {
    res.send('Hello World!')
}); app.listen(APP_PORT, () => {
    console.log(`Running app at port:${APP_PORT}`)
})
// The purpose of the project is to understand advanced git functions.