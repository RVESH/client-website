Nexora AI — V1 Contact Form & Email Flow Guide

Purpose

The Nexora AI V1 Contact page is a marketing and lead-generation page.

The form is intentionally frontend-only for V1. It does not store submissions in a database and does not require a custom email backend.

Final V1 email flow

A visitor fills in:

Full name

Work email

Company (optional)

What they would like to automate

The visitor clicks Send enquiry.

The website validates the required fields.

The website opens a Gmail compose page with:

The Nexora sales email already in the To field.

A generated enquiry subject.

The visitor's name, work email, company and message already inserted into the email body.

The visitor reviews the email and presses Send in Gmail.

The website cannot automatically send an email or verify that the visitor pressed Gmail's Send button without a backend or external email service. That is intentionally outside V1 scope.

Why this approach is suitable for V1

This project is a five-page SaaS marketing/showcase website, not an email-processing application.

V1 therefore keeps the implementation simple:

No login system

No admin dashboard

No database

No CRM integration

No email server

No lead-management backend

No fake "message sent successfully" state

A future production implementation can replace the Gmail compose action with a real form endpoint, CRM integration, or transactional email service without redesigning the Contact UI.

Contact destinations

The Contact page keeps three direct actions:

Email us

Call us

WhatsApp

The sales email remains editable from src/data/site.js.

Client customization

For a real client, update contact values in:

src/data/site.js

Typical values include:

sales email

general email

phone number

WhatsApp number

address

business hours

Keep client contact data centralized rather than hard-coding it inside the Contact page.

UX decisions

Do not show a fake success message such as:

Your email draft is ready. Review the details and press Send.

That can make it look like the website itself submitted the enquiry.

Instead:

Use Send enquiry as the main action.

Open Gmail with the message already prepared.

Keep the actual sales email visible and clickable.

Add a small note explaining that the action opens a pre-addressed email in Gmail.

Do not claim that the enquiry was sent.

Gmail compose implementation

The recommended V1 helper builds a Gmail compose URL using the form values:

function buildGmailComposeLink(form) {
  const subject = `Nexora enquiry — ${form.company || form.name}`

  const body = [
    'Hello Nexora team,',
    '',
    'I would like to discuss my workflows and learn more about Nexora.',
    '',
    `Name: ${form.name}`,
    `Work email: ${form.email}`,
    `Company: ${form.company || 'Not provided'}`,
    '',
    'Message:',
    form.message,
    '',
    'Regards,',
    form.name,
  ].join('\n')

  return `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
    contact.emailSales,
  )}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
}

After validation:

window.location.href = buildGmailComposeLink(form)

The existing direct sales-email link can continue using the centralized email value.

Important limitation

The Gmail compose flow depends on the visitor being able to access Gmail in their browser.

For a future production deployment, the client can replace this with a real form endpoint, custom backend, CRM, or email service.

That is a future implementation choice, not required for this V1 showcase.

Recommended QA

Before freezing the project:

Open /contact.

Test validation with empty required fields.

Enter realistic sample data.

Click Send enquiry.

Confirm Gmail opens.

Confirm the To field contains the Nexora sales email.

Confirm the subject contains the company/name.

Confirm the body contains all entered form data.

Confirm the visible sales email link opens the intended destination.

Test Email, Call and WhatsApp cards.

Test approximately 360px, 390px, 768px, 1024px and desktop widths.

Run:

npm run lint && npm run build

V1 completion condition

The Contact page is complete for V1 when:

UI is responsive

validation works

Gmail compose opens with the enquiry populated

direct email/call/WhatsApp actions work

no misleading success state is shown

lint passes

production build passes

The client can later keep this flow or replace it with a full lead-capture system without changing the overall page structure.