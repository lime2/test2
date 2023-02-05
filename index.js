const express = require('express')
const app = express()
const path = require('path')

app.use(express.static(path.join(__dirname,'public')))

app.get('/', function (req, res, next) {
    var options = {
      root: path.join(__dirname, 'public'),
      dotfiles: 'deny',
      headers: {
        'x-timestamp': Date.now(),
        'x-sent': true
      }
    }
    console.log(__dirname)
    res.sendFile('index.html', options)
})

var port = process.env.PORT || 3000
app.listen(port,() => {
    console.log(`listening on port ${port}`)
})