import type { APIRoute } from 'astro';
import { env } from '../../lib/env';

export const POST: APIRoute = async ({ request }) => {
    try {
        console.log('📧 API: Processing request');
        
        const data = await request.formData();
        const name = data.get('name')?.toString();
        const email = data.get('email')?.toString();
        const subject = data.get('subject')?.toString();
        const message = data.get('message')?.toString();

        if (!name || !email || !subject || !message) {
            return new Response(JSON.stringify({ success: false, error: 'Missing required fields' }), { status: 400 });
        }

        const API_KEY = env.RESEND_API_KEY;
        
        // This should now log TRUE because of the hardcoded fix
        console.log('🔑 Key Check:', !!API_KEY);

        const emailResponse = await fetch('https://api.resend.com/emails', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${API_KEY}`
            },
            body: JSON.stringify({
                from: 'Verdant Acres <verdantacreslimited.com>',
                to: ['testemail@verdantacreslimited.com'], 
                reply_to: email,
                subject: `New Contact: ${subject} from ${name}`,
                html: `<p><strong>Name:</strong> ${name}</p>
                       <p><strong>Email:</strong> ${email}</p>
                       <p><strong>Message:</strong> ${message}</p>`,
            })
        });

        const result = await emailResponse.json();

        if (emailResponse.ok) {
            console.log('🚀 Email sent successfully!');
            return new Response(JSON.stringify({ success: true }), { status: 200 });
        } else {
            // This is critical for debugging Resend's strict onboarding rules
            console.error('❌ Resend Error Details:', JSON.stringify(result));
            return new Response(JSON.stringify({ success: false, error: result.message || 'Resend API Error' }), { status: 500 });
        }

    } catch (error) {
        console.error('❌ Server Error:', error);
        return new Response(JSON.stringify({ success: false, error: 'Internal Server Error' }), { status: 500 });
    }
};