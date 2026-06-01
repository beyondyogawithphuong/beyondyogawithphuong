import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  try {
    const { orderId, name, email, products, total } = await req.json()

    const webhookUrl = process.env.DISCORD_WEBHOOK_URL
    if (!webhookUrl) {
      return NextResponse.json({ ok: true })
    }

    const lines = [
      `**[DH MOI] Beyond Yoga** | Ma don: \`${orderId}\``,
      ``,
      `**Khach hang:** ${name}`,
      `**Email:** ${email}`,
      `**Tong tien:** **${total}**`,
      ``,
      `**San pham:**`,
      ...products.map((p: string) => `• ${p}`),
      ``,
      `_Kiem tra chuyen khoan va gui file trong 24h._`,
    ]

    await fetch(webhookUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ content: lines.join('\n') }),
    })

    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error('shop-order webhook error:', err)
    return NextResponse.json({ ok: false }, { status: 500 })
  }
}
