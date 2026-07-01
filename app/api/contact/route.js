import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req) {
  try {
    const { name, email, subject, message } = await req.json()

    if (!name || !email || !subject || !message) {
      return Response.json({ error: 'All fields are required.' }, { status: 400 })
    }

    await resend.emails.send({
      from: 'Portfolio Contact <onboarding@resend.dev>',
      to: 'alemayehubethelhem12@gmail.com',
      replyTo: email,
      subject: `[Portfolio] ${subject}`,
      html: `
        <div style="font-family:sans-serif;max-width:600px;margin:0 auto;padding:24px">
          <h2 style="color:#c5852a;margin:0 0 4px">New message from your portfolio</h2>
          <hr style="border:none;border-top:1px solid #e5e7eb;margin:16px 0"/>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
          <p><strong>Subject:</strong> ${subject}</p>
          <hr style="border:none;border-top:1px solid #e5e7eb;margin:16px 0"/>
          <p style="white-space:pre-wrap">${message}</p>
        </div>
      `,
    })

    return Response.json({ ok: true })
  } catch (err) {
    console.error('[contact]', err)
    return Response.json({ error: 'Failed to send. Please try again.' }, { status: 500 })
  }
}
