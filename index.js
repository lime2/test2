const express = require('express')
const app = express()
const path = require('path')

app.use(express.static(path.join(__dirname,'public')))

app.get('/', function (req, res) {
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

app.get('/results',function(req,res) {
  var answer = req.originalUrl
  var results = {};
  answer = answer.substring(9)
  answer = answer.split('&')
  for (var a of answer) {
    results[a.split('=')[0]] = a.split('=')[1]
  }
  if (results.bestnum == 42 && results.site == 'www.42.org' && results.eat == 'yes' && results.horse == 'bean' && results.like == 5) {
    res.send('good ye')
  } else {
    res.send('nah')
  }
})

var port = process.env.PORT || 3000
app.listen(port,() => {
    console.log(`listening on port ${port}`)
})