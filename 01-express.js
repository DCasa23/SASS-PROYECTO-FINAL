const express = require('express')
const app = express()
const port=3005 

//Motor de Plantillas
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
//Middleware
app.use(express.static(__dirname + '/public'));

//Llamadas a las rutas:
app.get('/', (req, res) => {
  res.render("index")
})



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
