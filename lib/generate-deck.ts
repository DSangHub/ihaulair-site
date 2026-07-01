// Builds a small, valid single-page PDF on the fly so the
// "Download Sponsorship Deck" button works before the full deck ships.
export function buildSponsorshipDeckPdf(): Blob {
  const lines = [
    "BT /F1 30 Tf 60 730 Td (I Haul Air) Tj ET",
    "BT /F1 15 Tf 60 700 Td (National EV Sponsorship Deck - 2026) Tj ET",
    "BT /F1 12 Tf 60 660 Td (Thank you for your interest in the clean-air movement.) Tj ET",
    "BT /F1 12 Tf 60 642 Td (The full interactive deck is on the way.) Tj ET",
    "BT /F1 12 Tf 60 610 Td (Inside the complete deck:) Tj ET",
    "BT /F1 11 Tf 76 588 Td (- Sponsorship tiers & founding partner benefits) Tj ET",
    "BT /F1 11 Tf 76 570 Td (- National fleet visibility & wrap placements) Tj ET",
    "BT /F1 11 Tf 76 552 Td (- Campaign reach, impressions & media value) Tj ET",
    "BT /F1 11 Tf 76 534 Td (- Verified clean-air impact reporting) Tj ET",
    "BT /F1 12 Tf 60 494 Td (Schedule a sponsor meeting: partnerships@ihaulair.com) Tj ET",
  ].join("\n")

  const objects = [
    "<< /Type /Catalog /Pages 2 0 R >>",
    "<< /Type /Pages /Kids [3 0 R] /Count 1 >>",
    "<< /Type /Page /Parent 2 0 R /MediaBox [0 0 612 792] /Contents 4 0 R /Resources << /Font << /F1 5 0 R >> >> >>",
    `<< /Length ${lines.length} >>\nstream\n${lines}\nendstream`,
    "<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>",
  ]

  let pdf = "%PDF-1.4\n"
  const offsets: number[] = []
  objects.forEach((obj, i) => {
    offsets[i] = pdf.length
    pdf += `${i + 1} 0 obj\n${obj}\nendobj\n`
  })

  const xrefStart = pdf.length
  pdf += `xref\n0 ${objects.length + 1}\n`
  pdf += "0000000000 65535 f \n"
  offsets.forEach((offset) => {
    pdf += `${offset.toString().padStart(10, "0")} 00000 n \n`
  })
  pdf += `trailer\n<< /Size ${objects.length + 1} /Root 1 0 R >>\n`
  pdf += `startxref\n${xrefStart}\n%%EOF`

  return new Blob([pdf], { type: "application/pdf" })
}
