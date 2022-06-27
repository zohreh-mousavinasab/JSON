const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('zozo&sedigh')
})
app.listen(3001, ()=> {
  console.log('Server is listening at 3001')
})


const cors = require('cors');
app.use(cors({
    origin: "*",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    preflightContinue: false}
    ));


const bodyParser = require('body-parser');
// const { json } = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// const path = require('path');
// const filename = path.basename('مسیر فایل');
// console.log(filename);

// const http = require('http');
// const fs = require('fs');
// http.createServer(function (req, res) {
  //   fs.readFile('filename ', function(err, data) {
    //     res.writeHead(200, {'Content-Type': 'text/html'});
    //     res.write(data);
    //     res.end();
    //   });
    // }).listen(3001);
    
    
// const url = require('url');
// const adr = 'http://localhost:port??/لینک کپی شده';
// const q = url.parse(adr, true);
// const qdata = q.query; //returns an object
    



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
res.json({msg:'Error'});
}
});     


