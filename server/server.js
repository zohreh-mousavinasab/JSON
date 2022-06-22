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
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');

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
app.get('/api/parseJson', (req, res) => {
  console.log(req.query.data);
  try{
  const obj = JSON.parse(req.query.data);
  if(typeof obj === "object") 
  {
    res.json({msg:obj})
  }else{
    res.json({msg:'wrong json'});
  }
}catch(e){
  res.json({msg:'error json'});
}
});
app.post('/api/parseJson', (req, res) => {
  console.log("Server First Step:" , req.body);
  let jsonObj = JSON.parse(JSON.stringify(req.body));
  console.log("Server Second Step:" , jsonObj);
  let jsonText = jsonObj.msg;
  console.log("Server Third Step:" , jsonText);

  
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
  res.json({msg:'ERRORJSON'});
}
});


app.listen(app.get('port'), () => {
  console.log(`Find the server at: http://localhost:${app.get('port')}/`); // eslint-disable-line no-console
});
