import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    
    // For now, just log the form data and return success
    // Replace this with actual email sending logic
    console.log('Contact form submission:', body)
    
    // You can integrate with your preferred email service here:
    // - AWS SES
    // - SendGrid
    // - Nodemailer
    // - etc.
    
    return NextResponse.json({ message: 'Email sent successfully' })
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    )
  }
}

export async function OPTIONS() {
  return new NextResponse(null, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  })
}