const express = require('express');
const router= express.Router();
const nodeFetch= require('node-fetch');

router.get('/', (req,res) => {
  res.render('home')
})

router.get('/books',(req,res) => {
  nodeFetch(`https://www.googleapis.com/books/v1/volumes?q=${req.query.title}+intitle:${req.query.title}&key=${process.env.API_KEY}`)
  .then(res=>res.json())
  .then(response=>res.send(response))
  console.log(req.query);

}
)

module.exports= router;