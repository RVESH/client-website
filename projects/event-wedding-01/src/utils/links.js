// ============================================================================
// LINK BUILDERS
// Every "send" action in this site opens the user's own email/WhatsApp/phone
// app with the message prefilled. Nothing is ever submitted to a server —
// the user always reviews and sends manually.
// ============================================================================

import { site } from '../data/site'

export function telLink() {
  return `tel:${site.contact.phone.replace(/[^+\d]/g, '')}`
}

export function mailLink(subject = '', body = '') {
  const params = new URLSearchParams()
  if (subject) params.set('subject', subject)
  if (body) params.set('body', body)
  const query = params.toString()
  return `mailto:${site.contact.email}${query ? `?${query}` : ''}`
}

/**
 * Gmail's browser compose URL — opens compose with recipient, subject and
 * body prefilled, without requiring the visitor's mail client to be
 * configured locally.
 */
export function gmailComposeLink(subject = '', body = '') {
  const params = new URLSearchParams({
    view: 'cm',
    fs: '1',
    to: site.contact.email,
    su: subject,
    body,
  })
  return `https://mail.google.com/mail/?${params.toString()}`
}

export function whatsappLink(message = '') {
  return `https://wa.me/${site.contact.whatsapp}?text=${encodeURIComponent(message)}`
}

export function directionsLink() {
  const { line1, line2 } = site.contact.address
  const query = encodeURIComponent(`${line1}, ${line2}`)
  return `https://www.google.com/maps/search/?api=1&query=${query}`
}

/**
 * Builds a readable, plain-text enquiry summary from the contact form
 * fields — shared by the mailto, Gmail, and WhatsApp links so the message
 * content is always consistent.
 */
export function buildEnquiryMessage(fields) {
  const lines = [
    `New enquiry from the Amaranth & Oak website`,
    ``,
    `Name: ${fields.name || '—'}`,
    `Email: ${fields.email || '—'}`,
    `Phone: ${fields.phone || '—'}`,
    `Event type: ${fields.eventType || '—'}`,
    `Event date: ${fields.eventDate || '—'}`,
    `Guest count: ${fields.guestCount || '—'}`,
    `Venue / location: ${fields.venue || '—'}`,
    `Budget: ${fields.budget || 'Not specified'}`,
    ``,
    `Message:`,
    fields.message || '—',
  ]
  return lines.join('\n')
}

export function buildEnquirySubject(fields) {
  return `Enquiry: ${fields.eventType || 'Event'}${fields.eventDate ? ` — ${fields.eventDate}` : ''}`
}
