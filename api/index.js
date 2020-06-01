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
  const { prihod, odhod, odrasli, otroci, email } = req.body;

  const attributes = ["prihod", "odhod", "odrasli", "otroci", "email"]; // Our five form fields, all required

  sendMail(prihod, odhod, odrasli, otroci, email);
  res.status(200).json({ message: "OH YEAH" });
});

const sendMail = (prihod, odhod, odrasli, otroci, email) => {
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    secure: false,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
    tls: {
      rejectUnauthorized: false,
    },
  });

  const mailOption = {
    from: "rezervacije@svetina-ranch.com",
    to: "etn@turnsek.net",
    bcc: "krajnc.mare@gmail.com",
    subject: "Povprasevanje najem posestva",
    text:
      `prihod: ${prihod}\n` +
      `odhod: ${odhod}\n` +
      `odrasli: ${odrasli}\n` +
      `otroci: ${otroci}\n` +
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
