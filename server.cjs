const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
const path = require('path');

// Load environment variables
const result = require('dotenv').config({ path: '.env' });
if (result.error) {
  console.log('⚠️  .env file not found, trying alternative paths...');
  require('dotenv').config({ path: '.env.local' });
  require('dotenv').config({ path: 'env.local' });
}

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors({
  origin: '*', // Allow all origins
  credentials: false, // Set to false when origin is *
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));
app.use(express.json());

// Create transporter for Gmail
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER || 'mnumanakrambhatti@gmail.com',
    pass: process.env.EMAIL_PASS || 'your-app-password-here'
  },
  tls: {
    rejectUnauthorized: false
  }
});

// Debug environment variables
console.log('🔍 Environment Variables Debug:');
console.log('📁 Current working directory:', process.cwd());
console.log('📧 EMAIL_USER:', process.env.EMAIL_USER);
console.log('🔑 EMAIL_PASS:', process.env.EMAIL_PASS ? '✅ Set (' + process.env.EMAIL_PASS.substring(0, 4) + '...)' : '❌ Not set');
console.log('🌐 PORT:', process.env.PORT);

// Check if email credentials are configured
if (!process.env.EMAIL_PASS || process.env.EMAIL_PASS === 'your-app-password-here') {
  console.log('⚠️  Warning: EMAIL_PASS not configured properly');
  console.log('📧 Please check your .env.local file');
} else {
  console.log('✅ Email credentials loaded successfully');
}

// Preflight OPTIONS handler
app.options('/api/send-email', (req, res) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  res.status(200).end();
});

// Email route
app.post('/api/send-email', async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    // Validation
    if (!name || !email || !message) {
      return res.status(400).json({ 
        success: false, 
        message: 'Please fill in all required fields' 
      });
    }

    // Email content
    const mailOptions = {
      from: process.env.EMAIL_USER || 'mnumanakrambhatti@gmail.com',
      to: 'mnumanakrambhatti@gmail.com',
      subject: `Portfolio Contact: ${subject || 'New Message from ${name}'}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #1e3a8a; border-bottom: 2px solid #f59e0b; padding-bottom: 10px;">
            New Contact Form Submission
          </h2>
          
          <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #1e3a8a; margin-top: 0;">Contact Details:</h3>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            ${subject ? `<p><strong>Subject:</strong> ${subject}</p>` : ''}
          </div>
          
          <div style="background-color: #fef3c7; padding: 20px; border-radius: 8px; border-left: 4px solid #f59e0b;">
            <h3 style="color: #92400e; margin-top: 0;">Message:</h3>
            <p style="white-space: pre-wrap; line-height: 1.6;">${message}</p>
          </div>
          
          <div style="text-align: center; margin-top: 30px; color: #6b7280; font-size: 14px;">
            <p>This email was sent from your portfolio contact form</p>
            <p>Time: ${new Date().toLocaleString()}</p>
          </div>
        </div>
      `
    };

    // Send email
    await transporter.sendMail(mailOptions);

    res.json({ 
      success: true, 
      message: 'Email sent successfully!' 
    });

  } catch (error) {
    console.error('Email error:', error);
    
    let errorMessage = 'Failed to send email. Please try again later.';
    
    if (error.code === 'EAUTH') {
      errorMessage = 'Email authentication failed. Please check your Gmail app password.';
      console.log('🔐 Authentication Error: Check your .env.local file EMAIL_PASS');
      console.log('📧 Make sure you have:');
      console.log('   1. Enabled 2-Factor Authentication on Gmail');
      console.log('   2. Generated an App Password (not your regular password)');
      console.log('   3. Updated .env.local with the correct EMAIL_PASS');
    } else if (error.code === 'ECONNECTION') {
      errorMessage = 'Connection to Gmail failed. Please check your internet connection.';
    }
    
    res.status(500).json({ 
      success: false, 
      message: errorMessage 
    });
  }
});

// Health check route
app.get('/api/health', (req, res) => {
  res.json({ 
    status: 'OK', 
    message: 'Email server is running',
    emailConfigured: !!process.env.EMAIL_PASS && process.env.EMAIL_PASS !== 'your-app-password-here'
  });
});

// Test email configuration route
app.get('/api/test-email', async (req, res) => {
  try {
    // Verify transporter configuration
    await transporter.verify();
    res.json({ 
      success: true, 
      message: 'Email configuration is valid',
      emailUser: process.env.EMAIL_USER,
      emailConfigured: !!process.env.EMAIL_PASS && process.env.EMAIL_PASS !== 'your-app-password-here'
    });
  } catch (error) {
    console.error('Email verification error:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Email configuration error: ' + error.message,
      errorCode: error.code
    });
  }
});

app.listen(PORT, () => {
  console.log(`🚀 Email server running on port ${PORT}`);
  console.log(`🔍 Health check: http://localhost:${PORT}/api/health`);
  console.log(`📧 Email endpoint: http://localhost:${PORT}/api/send-email`);
  console.log(`🌐 CORS: All origins allowed (*)`);
  console.log(`📁 Environment: ${process.env.NODE_ENV || 'development'}`);
  console.log(`📧 Email User: ${process.env.EMAIL_USER || 'mnumanakrambhatti@gmail.com'}`);
  console.log(`🔑 Email Pass: ${process.env.EMAIL_PASS ? '✅ Configured' : '❌ Not configured'}`);
});
