import sgMail from '@sendgrid/mail';

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { email, otp } = req.body;

  if (!email || !otp) {
    return res.status(400).json({ message: 'Missing email or OTP' });
  }

  const msg = {
    to: email,
    from: process.env.FROM_EMAIL,
    subject: 'Your OTP Code',
    text: `Your OTP code is: ${otp}`,
    html: `<strong>Your OTP code is: ${otp}</strong>`,
  };

  try {
    await sgMail.send(msg);
    res.status(200).json({ message: 'OTP sent successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to send OTP' });
  }
}
