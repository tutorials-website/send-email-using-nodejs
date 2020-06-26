var express = require('express');
var router = express.Router();

router.get("/sendemail",function(req,res,next){

        "use strict";
const nodemailer = require("nodemailer");

// async..await is not allowed in global scope, must use a wrapper

async function main() {
 
  let testAccount = await nodemailer.createTestAccount();

  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: "smtp.ethereal.email",  // Replace with your live SMTP server
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: "Your SMTP User ID", 
      pass: "Your SMTP Password", 
    },
  });

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: '"Tutorialswebsite 👻" <info@youremailid.com>', // sender address
    to: "youremailid@gmail.com", // list of receivers
    subject: "Hello ✔", // Subject line
    html: "<b>Hello world?</b>", // html body
  });

  if(info.messageId){
    res.send("email sent");
  }else{
      res.send("Error with sending email");
  }
  console.log("Message sent: %s", info.messageId);
}

main().catch(console.error);
      
    });

module.exports=router;
