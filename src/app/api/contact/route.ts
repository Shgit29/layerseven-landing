import { NextResponse } from "next/server";
import { Resend } from "resend";

const resendApiKey = process.env.RESEND_API_KEY;
const resendFromEmail =
  process.env.RESEND_FROM_EMAIL || "Layer7Solutions <hello@layer7solution.com>";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type ContactRequestBody = {
  fullName?: string;
  email?: string;
  companyName?: string;
  projectType?: string;
  projectBudget?: string;
  timeline?: string;
  projectDetails?: string;
};

const sanitize = (value: unknown) =>
  typeof value === "string" ? value.trim() : "";

const formatField = (label: string, value: string) =>
  `${label}: ${value || "Not provided"}`;

export async function POST(request: Request) {
  if (!resendApiKey) {
    return NextResponse.json(
      { error: "Email delivery is not configured." },
      { status: 500 },
    );
  }

  let body: ContactRequestBody;

  try {
    body = (await request.json()) as ContactRequestBody;
  } catch {
    return NextResponse.json(
      { error: "Invalid request payload." },
      { status: 400 },
    );
  }

  const fullName = sanitize(body.fullName);
  const email = sanitize(body.email);
  const companyName = sanitize(body.companyName);
  const projectType = sanitize(body.projectType);
  const projectBudget = sanitize(body.projectBudget);
  const timeline = sanitize(body.timeline);
  const projectDetails = sanitize(body.projectDetails);

  if (!fullName || !email || !projectDetails) {
    return NextResponse.json(
      { error: "Name, email, and project details are required." },
      { status: 400 },
    );
  }

  if (!emailPattern.test(email)) {
    return NextResponse.json(
      { error: "Please enter a valid email address." },
      { status: 400 },
    );
  }

  const resend = new Resend(resendApiKey);

  const text = [
    "New project inquiry from Layer7Solutions website",
    "",
    formatField("Full Name", fullName),
    formatField("Email Address", email),
    formatField("Company Name", companyName),
    formatField("Project Type", projectType),
    formatField("Project Budget", projectBudget),
    formatField("Timeline", timeline),
    "",
    "Project Details:",
    projectDetails,
  ].join("\n");

  try {
    await resend.emails.send({
      from: resendFromEmail,
      to: "hello@layer7solution.com",
      replyTo: email,
      subject: "New project inquiry from Layer7Solutions website",
      text,
    });

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: "We couldn't send your message right now. Please try again." },
      { status: 500 },
    );
  }
}
