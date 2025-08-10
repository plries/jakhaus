// app/api/send/route.ts
import { Resend } from "resend";

const resend = new Resend(process.env.NEXT_PUBLIC_RESEND_API_KEY);
const COMPANY_EMAIL = "jakhausdev@gmail.com";

export async function POST(req: Request) {
  if (req.method !== "POST") {
    return new Response(JSON.stringify({ error: "Method Not Allowed" }), {
      status: 405,
    });
  }

  try {
    const { firstName, lastName, email, message } = await req.json();

    if (!firstName || !lastName || !email || !message) {
      return new Response(
        JSON.stringify({ error: "Missing required fields" }),
        {
          status: 400,
        },
      );
    }

    const { data, error } = await resend.emails.send({
      from: "Jakhaus Website <onboarding@resend.dev>",
      to: [COMPANY_EMAIL],
      subject: `New website inquiry from ${firstName} ${lastName} | ${email}`,
      html: `
        <div>
          <h1>New website inquiry</h1>
          <p><strong>Name:</strong> ${firstName} ${lastName}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Message:</strong> ${message}</p>
        </div>
      `,
    });

    if (error) {
      console.error("Error sending email:", error);
      return new Response(JSON.stringify({ error: error.message }), {
        status: 500,
      });
    }

    return Response.json({ success: true, data });
  } catch (err: any) {
    return new Response(JSON.stringify({ error: err.message }), {
      status: 500,
    });
  }
}
