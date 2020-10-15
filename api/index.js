const http = require("http");

const express = require("express");
const nodemailer = require("nodemailer");

require("dotenv").config();

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/api", (req, res) => {
  res.send("Hello World!");
});

app.post("/api/contact", (req, res) => {
  const { request, contactNumber, email } = req.body;
  console.log(email);

  const attributes = ["request", "contactNumber", "email"]; 
  sendMail(request, contactNumber, email);
  res.status(200).json({ message: "OH YEAH" });
});

const sendMail = (prequest, contactNumber, email) => {
  const transporter = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "94bba965a5d6f2",
      pass: "285f9a0705d251"

    // host: process.env.SMTP_HOST,
    // port: process.env.SMTP_PORT,
    // secure: false,
    // auth: {
    //   user: process.env.EMAIL_USER,
    //   pass: process.env.EMAIL_PASS,
    // },
    // tls: {
    //   rejectUnauthorized: false,
    // },
    }
  });

  const mailOption = {
    from: "info@jabka.si",
    to: "mitja123@gmail.com",
    bcc: "krajnc.mare@gmail.com",
    subject: "Povpraševanje - Jabka sok",
    text:
      `request: ${request}\n` +
      `contactNumber: ${contactNumber}\n` +
      `email: ${email}`,
  };

  transporter.sendMail(mailOption, function(err, data) {
    if (err) {
      console.log("Error Occurs");
    } else {
      console.log("Message sent!!!");
    }
  });
};

const httpServer = http.createServer(app);
httpServer.listen(8080);
