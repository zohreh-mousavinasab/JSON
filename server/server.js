/* eslint-disable no-param-reassign */


const express = require('express');
const fs = require('fs');
const bodyParser = require('body-parser');
const path = require('path');
const { json } = require('body-parser');
const app = express();
app.set('port', (process.env.API_PORT || 3001));
app.use(function (req, res, next) {

  // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', '*');

  // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

  // Request headers you wish to allow
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader('Access-Control-Allow-Credentials', true);

  // Pass to next layer of middleware
  next();
});
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.post('/api/parseJson', (req, res) => {
  
  let jsonObj = JSON.parse(JSON.stringify(req.body));
  
  let jsonText = jsonObj.msg;


  
  try{
  const obj = JSON.parse(jsonText);
  if(typeof obj === "object") 
  {
    console.log('right');
    res.json({msg:"right json"})
  }else{
    console.log('wrong');
    res.json({msg:'wrong json'});
  }
}catch(e){
  console.log('error');
  res.json({msg:'ERROR'});
}
});


app.listen(app.get('port'), () => {
  console.log(`Find the server at: http://localhost:${app.get('port')}/`); // eslint-disable-line no-console
});
