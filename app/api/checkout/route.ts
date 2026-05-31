import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const { name, email, productId, productTitle, price } = await request.json()

    // Validate required fields
    if (!name || !email || !productId) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@gmail\.com$/i
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Email must be Gmail account' },
        { status: 400 }
      )
    }

    // TODO: Integrate with payment provider (Stripe, VietQR, etc.)
    console.log('Checkout:', { name, email, productId, productTitle, price })

    // TODO: Send confirmation email to user
    // TODO: Send notification to admin/Discord

    // Send Discord notification (optional)
    if (process.env.DISCORD_WEBHOOK_URL) {
      await fetch(process.env.DISCORD_WEBHOOK_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          content: `🛒 New checkout:\n**Product:** ${productTitle}\n**Price:** ${price}đ\n**Name:** ${name}\n**Email:** ${email}`,
        }),
      }).catch(() => {
        // Silently fail if Discord is unavailable
      })
    }

    return NextResponse.json(
      { message: 'Order received successfully' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Checkout error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
