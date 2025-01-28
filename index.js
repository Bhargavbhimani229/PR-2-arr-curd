const express = require('express');
const app = express();
const port = 8081;
const users = [
  { id: 1, username: "john_doe", email: "john@example.com", password: "password123", phoneNumber: "1234567890" },
  { id: 2, username: "jane_smith", email: "jane@example.com", password: "qwerty456", phoneNumber: "2345678901" },
  { id: 3, username: "mike_brown", email: "mike@example.com", password: "abc123xyz", phoneNumber: "3456789012" },
  { id: 4, username: "susan_clark", email: "susan@example.com", password: "password789", phoneNumber: "4567890123" },
  { id: 5, username: "dave_wilson", email: "dave@example.com", password: "securePass1", phoneNumber: "5678901234" }
];

app.set('view engine','ejs')
app.use(express.urlencoded({extended:true}));

app.post('/',(req,res)=>{
  console.log(req.body);
  return res.send("Created")

})

app.get('/',(req,res)=>{
   res.render('index',{users})
})

app.listen(port,(err) => {
  if(!err) {
    console.log("Server is Start this Port..");
    console.log("http://localhost:"+port);
  }
})