const express = require('express');
const router = express.Router();
const nodeFetch = require('node-fetch');

router.get('/', (req, res) => {
  res.render('home')

})

router.get('/books', (req, res) => {
  reg=/^[a-zA-Z0-9]*$/ ;
  if(reg.test(req.query.title)){
   nodeFetch(`https://www.googleapis.com/books/v1/volumes?q=${req.query.title}+intitle:${req.query.title}&key=${process.env.API_KEY}`)
      .then(res => res.json())
      .then(response =>{
        const result =response.items[0];
        res.render('home',{result})
      } )
    console.log(req.query.title)
  }else {
    
  }
}

)

module.exports = router;
