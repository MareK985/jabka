import express from "express";
import nodemailer from "nodemailer";

import dotenv from "dotenv";
dotenv.config();

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.post("/", (req, res) => {
  const { prihod, odhod, odrasli, otroci, email } = req.body;
  console.log(prihod);

  const attributes = ["prihod", "odhod", "odrasli", "otroci", "email"]; // Our five form fields, all required

  //   // Map each attribute name to the validated and sanitized equivalent (false if validation failed)
  //   const sanitizedAttributes = attributes.map((n) =>
  //     validateAndSanitize(n, req.body[n]),
  //   );

  //   // True if some of the attributes new values are false -> validation failed
  //   const someInvalid = sanitizedAttributes.some((r) => !r);

  //   if (someInvalid) {
  //     // Throw a 422 with a neat error message if validation failed
  //     return res.status(422).json({ error: "Ugh.. That looks unprocessable!" });
  //   }
  sendMail(prihod, odhod, odrasli, otroci, email);
  res.status(200).json({ message: "OH YEAH" });
});

// const validateAndSanitize = (key, value) => {
//   const rejectFunctions = new Map([
//     // ["prihod", (v) => v.length < 1],
//     // ["odhod", (v) => v.length < 0],
//     // ["odrasli", (v) => v.length < 1],
//     // ["otroci", (v) => v.length < 0],
//     ["email", (v) => !validator.isEmail(v)],
//   ]);
//   // If map has key and function returns false, return sanitized input. Else, return false
//   return (
//     rejectFunctions.has(key) &&
//     !rejectFunctions.get(key)(value) &&
//     xssFilters.inHTMLData(value)
//   );
// };

const sendMail = (prihod, odhod, odrasli, otroci, email) => {
  console.log("sending mail");

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
    subject: "Povpraševanje za najem posestva Svetina",
    text:
      `prihod: ${prihod}\n` +
      `odhod: ${odhod}\n` +
      `odrasli: ${odrasli}\n` +
      `otroci: ${otroci}\n` +
      `email: ${email}`,
  };

  transporter.sendMail(mailOption, function(err, data) {
    if (err) {
      console.log(err);
    } else {
      console.log("Message sent!!!");
    }
  });
};

export default {
  path: "/api/contact",
  handler: app,
};

// FTP dostop
// ftp1user@svetina-ranch.com
// mQXLuf4Ex2IYKk7r
