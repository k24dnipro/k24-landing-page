import {
  NextRequest,
  NextResponse,
} from 'next/server';

const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN || '8375912165:AAH6hGtPkICLLhhlFrz3CRtySqvc75FOe9U';
const TELEGRAM_API_URL = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}`;

export async function POST(request: NextRequest) {
  try {
    const { name, phone, message, chatId } = await request.json();

    // Validate required fields
    if (!name || !phone) {
      return NextResponse.json(
        { error: 'Name and phone are required' },
        { status: 400 }
      );
    }

    // Format the message
    const telegramMessage = `
🚗 *Нова заявка з сайту K24*

👤 *Ім'я:* ${name}
📞 *Телефон:* ${phone}
${message ? `💬 *Повідомлення:*\n${message}` : ''}

⏰ *Час:* ${new Date().toLocaleString('uk-UA', { timeZone: 'Europe/Kiev' })}
    `.trim();

    // Send message to Telegram
    const response = await fetch(`${TELEGRAM_API_URL}/sendMessage`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        chat_id: chatId,
        text: telegramMessage,
        parse_mode: 'Markdown',
      }),
    });

    const data = await response.json();

    if (!data.ok) {
      console.error('Telegram API error:', data);
      return NextResponse.json(
        { error: 'Failed to send message to Telegram' },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true, message: 'Message sent successfully' });
  } catch (error) {
    console.error('Error sending message:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

