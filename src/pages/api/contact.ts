import type { APIRoute } from 'astro';
import { env } from '../../lib/env';

export const POST: APIRoute = async ({ request }) => {
    // Helper to ensure we always return JSON headers
    const jsonResponse = (data: any, status: number) => new Response(JSON.stringify(data), {
        status,
        headers: { 'Content-Type': 'application/json' }
    });

    try {
        console.log('📧 API: Processing request');
        
        const data = await request.formData();
        const name = data.get('name')?.toString();
        const email = data.get('email')?.toString();
        const subject = data.get('subject')?.toString();
        const message = data.get('message')?.toString();

        if (!name || !email || !subject || !message) {
            return jsonResponse({ success: false, error: 'Missing required fields' }, 400);
        }

        const API_KEY = env.RESEND_API_KEY;
        console.log('🔑 Key Check:', !!API_KEY);

        if (!API_KEY) {
            return jsonResponse({ success: false, error: 'API Key not configured on server' }, 500);
        }

        const emailResponse = await fetch('https://api.resend.com/emails', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${API_KEY}`
            },
            body: JSON.stringify({
                // FIXED: Added 'info@' to make this a valid email address
                from: 'Verdant Acres <testemail@verdantacreslimited.com>', 
                to: ['testemail@verdantacreslimited.com'], 
                reply_to: email,
                subject: `New Contact: ${subject} from ${name}`,
                html: `
                    <h3>New Message from Verdantcres Limited</h3>
                    <p><strong>From:</strong> ${name} (${email})</p>
                    <p><strong>Subject:</strong> ${subject}</p>
                    <p><strong>Message:</strong></p>
                    <p>${message}</p>
                `,
            })
        });

        const result = await emailResponse.json();

        if (emailResponse.ok) {
            return jsonResponse({ success: true }, 200);
        } else {
            console.error('❌ Resend Error:', result);
            return jsonResponse({ success: false, error: result.message || 'Resend failed' }, 500);
        }

    } catch (error) {
        console.error('❌ Server Crash:', error);
        return jsonResponse({ success: false, error: 'Internal Server Error' }, 500);
    }
};