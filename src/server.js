const app = require('./app');

app.listen(app.get('port'),()=>{
  console.log(`server is listening at http://localhost:${app.get('port')}`);
});