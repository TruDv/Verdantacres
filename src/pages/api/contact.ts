// src/pages/api/contact.ts
import type { APIRoute } from 'astro';

export const POST: APIRoute = async ({ request }) => {
    try {
        const data = await request.formData();
        const name = data.get('name')?.toString();
        const email = data.get('email')?.toString();
        const subject = data.get('subject')?.toString();
        const message = data.get('message')?.toString();

        // Validate required fields
        if (!name || !email || !subject || !message) {
            return new Response(
                JSON.stringify({ 
                    success: false, 
                    error: 'Missing required fields' 
                }),
                { 
                    status: 400,
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }
            );
        }

        // Validate email format
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return new Response(
                JSON.stringify({ 
                    success: false, 
                    error: 'Invalid email format' 
                }),
                { 
                    status: 400,
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }
            );
        }

        // Using Resend (recommended)
        // Sign up at https://resend.com
        const RESEND_API_KEY = import.meta.env.RESEND_API_KEY;
        
        if (!RESEND_API_KEY) {
            console.error('RESEND_API_KEY is not set');
            return new Response(
                JSON.stringify({ 
                    success: false, 
                    error: 'Server configuration error' 
                }),
                { 
                    status: 500,
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }
            );
        }

        // Prepare email content
        const emailContent = `
            <h2>New Contact Form Submission</h2>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Subject:</strong> ${subject}</p>
            <p><strong>Message:</strong></p>
            <p>${message.replace(/\n/g, '<br>')}</p>
            <hr>
            <p><em>Sent from Verdant Acres Limited contact form</em></p>
        `;

        // Send email using Resend
        const emailResponse = await fetch('https://api.resend.com/emails', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${RESEND_API_KEY}`
            },
            body: JSON.stringify({
                from: 'Verdant Acres <verdantacreslimited.com>', // Update this with your verified domain
                to: ['info@verdantacreslimited.com'], // Your target email
                reply_to: email,
                subject: `New Contact Form: ${subject} from ${name}`,
                html: emailContent,
                text: `
New Contact Form Submission

Name: ${name}
Email: ${email}
Subject: ${subject}
Message: ${message}

---
Sent from Verdant Acres Limited contact form
                `
            })
        });

        const emailResult = await emailResponse.json();

        if (emailResponse.ok) {
            return new Response(
                JSON.stringify({ 
                    success: true,
                    message: 'Email sent successfully' 
                }),
                { 
                    status: 200,
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }
            );
        } else {
            console.error('Resend API error:', emailResult);
            return new Response(
                JSON.stringify({ 
                    success: false, 
                    error: 'Failed to send email. Please try again later.' 
                }),
                { 
                    status: 500,
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }
            );
        }

    } catch (error) {
        console.error('Contact form error:', error);
        return new Response(
            JSON.stringify({ 
                success: false, 
                error: 'An unexpected error occurred. Please try again.' 
            }),
            { 
                status: 500,
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        );
    }
};