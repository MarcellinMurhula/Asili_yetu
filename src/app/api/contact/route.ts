import { NextResponse } from 'next/server';
import { addMessage } from '@/lib/messages';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Missing fields' }, { status: 400 });
    }

    addMessage({ name, email, message });

    return NextResponse.json({ success: true, message: 'Message received' });
  } catch (error) {
    console.error('Error handling contact form submission:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
