import { Resend } from 'resend';

// Replace 're_xxxxxxxxx' with your real API key
const resend = new Resend('re_xxxxxxxxx');

async function sendTestEmail() {
  try {
    const data = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: 'xqoratechnologies@gmail.com',
      subject: 'Hello World',
      html: '<p>Congrats on sending your <strong>first email</strong>!</p>'
    });
    console.log("Email sent successfully:", data);
  } catch (error) {
    console.error("Error sending email:", error);
  }
}

sendTestEmail();
