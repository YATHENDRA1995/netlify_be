const express = require('express')

const PORT  = 8080
const app = express()
app.use(express.json())

app.get('/', (req, res) => {
  res.status(200).json({
    message: 'Hello World, This is express deployment',
  })
})

app.listen(PORT, () => { console.log(`Listening on PORT : ${PORT}`) })
