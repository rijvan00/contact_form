const { error } = require('console');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const nodemailer = require("nodemailer");
const { request } = require('http');
const { getMaxListeners } = require('process');

const port = process.env.PORT || 5000;


app.use(express.static(__dirname+'/public'));
app.use(express.static(__dirname+'/public'));
app.use(express.static(__dirname+'/public/js'));


app.use(express.json());
app.get('/' , (req, res)=>{
    res.sendFile(__dirname+'/public/index.html')

});

app.post('/', (req, res)=>{
    console.log(req.body);

  const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
          user: 'youremail@example.com',
          pass: '<password>'
      }
  })
  const text = ` ${req.body.email} ||  ${req.body.message}`;
  const subject = `Message from ${req.body.username}: ${req.body.contact_no}`;
  const mailOptions ={

        from: 'youremail@example.com',
        to:'<password>',
       
        subject: subject,
        text: text
  }
transporter.sendMail(mailOptions, (error, info)=>{     
    if(error){
        console.log(error);
        res.send('error');
    }else{
        console.log("email sent")
        res.send("success");
    }
})
});

app.listen(port, () => {
    console.log('server is listening on port '+ port)
});
