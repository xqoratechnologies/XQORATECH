import { Resend } from "resend";

async function testResend() {
  const RESEND_API_KEY = process.env.RESEND_API_KEY;
  if (!RESEND_API_KEY) {
    console.error("Missing RESEND_API_KEY");
    return;
  }

  const resend = new Resend(RESEND_API_KEY);

  console.log("Sending email...");
  const response = await resend.emails.send({
    from: "XQORA Careers <careers@xqora.com>",
    to: "xqoratechnologies@gmail.com",
    subject: "Test",
    html: "<p>Test</p>",
  });

  console.log("Resend Response:");
  console.dir(response, { depth: null });
}

testResend();
