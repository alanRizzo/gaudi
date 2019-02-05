// using SendGrid's v3 Node.js Library
// https://github.com/sendgrid/sendgrid-nodejs
import { setApiKey, send } from '@sendgrid/mail';
const msg = {
  to: 'alan.rizzo@gmail.com.com',
  from: 'test@example.com',
  subject: 'Sending with SendGrid is Fun',
  text: 'and easy to do anywhere, even with Node.js',
  html: '<strong>and easy to do anywhere, even with Node.js</strong>',
};
setApiKey(process.env.SENDGRID_API_KEY);
console.log("mail send");
send(msg);
