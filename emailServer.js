
const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",

  auth: {
    user: "motalanemakzen08@gmail.com",
    pass: "Mot@313$",
  }
});


const options = {
  from: "motalanemakzen08@gmail.com",
  to: "motalane.maake@sita.co.za",
  subject: "test",
  text: "hello maake",
  attachments: [
    { filename: 'document2.pdf', path: './document2.pdf' }
  ]
};

transporter.sendMail(options, function (err, info) {
  if (err) {
    console.log('error')
    console.log(err)
    
  } else {
    console.log('success')
    console.log(info);
  }

});

























// const express =  require('express');
// const bodyParser = require('body-parser');
// const app = express();

// const hbs = require('nodemailer-express-handlebars'); // for prod
// var nodemailer = require("nodemailer");

// // create application/json parser
// const jsonParser = bodyParser.json({limit: '50mb'})
// // create application/x-www-form-urlencoded parser
// const urlencodedParser = bodyParser.urlencoded({ limit: '50mb', extended: true });
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded( { extended: true } ));


// var resultsFound = {
//     "errorCode": "1",
//     "errorMessage": "Operation successful.",
//     "rowCount": "1",
//     "data": ""
// };

// var resultsNotFound = {
//     "errorCode": "0",
//     "errorMessage": "Operation not successful.",
//     "rowCount": "0",
//     "data": ""
// };

// app.get("/",  (req, res) => {
//   res.send('back from the server')
// });


// app.post('/hotline', [jsonParser], function (req, res) {
//     console.log("something touched");
//     // dbFunctions.getReport(req,res);
//     if (req.body){
//         const messageSent = sendtheHOTLINEmail(req, res, 'lodgeInci'); //sendthemail(req, res, 'lodgeInci');
//     } else {
//         resultsNotFound.errorMessage = 'NO data was found';
//         return res.send(resultsNotFound)
//     }


//     //    console.log("something sent", mail);

// });


// app.listen(4300, () => {
//   console.log("The server started on localhost:" + 4300);
// });

// function sendtheHOTLINEmail(_req, _res, fn, mailTo = 'Nyiko.Chauke@fpb.org.za') {
//   const body = _req.body;

//     // pool.getConnection(function (err, connection) {

//         body.isAnonymous = body.anonymous.toLowerCase() === "no" ? true : false;

//         let mailOptions = {
//             from: '"MobileApp" <mobileapp@fpb.org.za>', // sender address
//             // to: 'Sarah.Magagula@sita.co.za, Rinny.Ledwaba@sita.co.za', //mailTo,//req.body.to, // list of receivers
//             to: '',
//             subject: "APP Report Hotline",//req.body.subject, // Subject t=
//             template: 'hotline',
//             context: {body},
//             text: `${body.reportType}`,//req.body.body, // plain text body
//             // html: `${html}` // html body""
//         };

//         sendMail(mailOptions, fn, _req, _res);
//     // })


// }

// function sendMail(mailOptions, fn, _req, _res) {

//   const transporter = nodemailer.createTransport({
//     service: 'gmail',
//     auth: {
//       user: process.env.GMAIL_USER,
//       pass: process.env.GMAIL_PASS
//     } // Use on local machin

//     // host: process.env.PROD_SMTP_host,
//     // port: process.env.PROD_SMTP_port,
//     // secure: false,
//     // tls: {rejectUnauthorized: false}, // when getting the self signed certificate, Do not fail on invalid certs
//     // auth: {
//     //     user: process.env.PROD_SMTP_user,
//     //     pass: process.env.PROD_SMTP_pass
//     // } // Used on CIT sinced 2020/04/30


//   });

//   // pass veiw to render email
//   transporter.use('compile', hbs({
//     viewEngine: {
//       extName: '.hbs',
//       partialsDir: './views/',
//       layoutsDir: './views/',
//       defaultLayout: 'main.hbs',
//     },
//     viewPath: 'views',
//     extName: '.hbs'
//   }));

//   transporter.sendMail(mailOptions, (error, info) => {
//     // var dbFunctions = require('./models/connector');
//     if (error) {
//         console.log(error);
//         _req.body.emailError = true;
//         _req.body.emailErrorMsg = 'could not send.';
//         return dbFunctions.removeUser(_req, _res);
//     }

//     if (fn) {
//         // dbFunctions[fn](_req, _res);
//     } else {
//       console.log('success.');
//       // IF REQUEST IS FOR reset password then run the function
//       resultsFound.errorMessage = 'Request sent successfuly, please check your email.';
//       return _res.send(resultsFound);
//     }
//     // return true;
//   });
// }

