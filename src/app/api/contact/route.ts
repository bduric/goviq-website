import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    
    // For now, just simulate success (we'll add Netlify forms later)
    // In a real deployment, you'd integrate with a form service
    
    // Simulate processing delay
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    // For demo purposes, always return success
    return NextResponse.json({ message: 'Email sent successfully' })
  } catch (error) {
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 })
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