# Extron Nigeria Limited Website

Engineering Excellence & Project Management Services

## Overview

This is the official website for Extron Nigeria Limited, a company providing specialized engineering, inspection, integrity management, and project management services for oil wells and related infrastructure.

## Features

- **Responsive Design**: Mobile-friendly website that works on all devices
- **Contact Form**: Visitors can send messages directly through the contact page
- **Newsletter Subscription**: Email subscription form for updates
- **Email Integration**: Automated email delivery using Nodemailer
- **Service Pages**: Detailed information about various services offered

## Setup Instructions

### Prerequisites

- Node.js (v14 or higher)
- npm (Node Package Manager)
- Gmail account with 2-Factor Authentication enabled (for email functionality)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/sun6699/Extron-limited.git
   cd Extron-limited
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure Email Settings**

   #### For Gmail (Recommended):
   1. Enable 2-Factor Authentication on your Gmail account:
      - Go to [myaccount.google.com/security](https://myaccount.google.com/security)
      - Enable 2-Step Verification
   
   2. Generate an App Password:
      - Go to [myaccount.google.com/apppasswords](https://myaccount.google.com/apppasswords)
      - Select "Mail" and "Windows Computer"
      - Copy the generated 16-character password

   3. Create a `.env` file in the root directory:
      ```
      EMAIL_USER=morak6@yahoo.co.uk
      EMAIL_PASSWORD=your_16_character_app_password
      CONTACT_EMAIL=morak6@yahoo.co.uk
      PORT=3000
      ```

4. **Start the server**
   ```bash
   npm start
   ```

   The server will run on `http://localhost:3000`

## How It Works

### Contact Form
When a visitor submits the contact form on the contact page:
1. Form data is sent to the `/api/contact` endpoint
2. An email with the visitor's message is sent to `morak6@yahoo.co.uk`
3. A confirmation email is sent to the visitor
4. The visitor receives a success message on the website

### Newsletter Subscription
When a visitor subscribes to the newsletter:
1. Their email is sent to the `/api/newsletter` endpoint
2. A notification is sent to `morak6@yahoo.co.uk`
3. The subscriber receives a confirmation message

## Project Structure

```
├── index.html                          # Home page
├── contact.html                        # Contact page with forms
├── about.html                          # About company
├── services.html                       # Services overview
├── [service-specific pages]            # Detailed service pages
├── server.js                           # Express server with email API
├── script.js                           # Client-side form handling
├── styles.css                          # Website styling
├── package.json                        # Node dependencies
├── .env                               # Environment variables (local)
├── .env.example                       # Example env file
└── images/                            # Image assets
```

## Deployment

### For Heroku:
1. Push to Heroku remote
2. Set environment variables in Heroku dashboard:
   - `EMAIL_USER`: Your Gmail address
   - `EMAIL_PASSWORD`: Your 16-character app password
   - `CONTACT_EMAIL`: Email to receive messages

### For Vercel, AWS, or other platforms:
1. Set environment variables in platform settings
2. Deploy the repository

## Email Configuration Details

### Why App Passwords?
Gmail requires app passwords instead of regular passwords for security reasons when using external applications like Nodemailer.

### Environment Variables
- `EMAIL_USER`: The Gmail address sending emails (morak6@yahoo.co.uk)
- `EMAIL_PASSWORD`: 16-character app password generated in Gmail settings
- `CONTACT_EMAIL`: Where contact form submissions are received (morak6@yahoo.co.uk)
- `PORT`: Server port (default: 3000)

## Troubleshooting

### Email not sending:
1. Verify 2-Factor Authentication is enabled on Gmail
2. Confirm app password is correct (16 characters, all lowercase)
3. Check that `.env` file exists in root directory with correct variables
4. View server logs for error messages
5. Ensure email provider hasn't blocked the connection

### Form not submitting:
1. Open browser console (F12) for JavaScript errors
2. Verify all required fields are filled
3. Check that server is running (npm start)
4. Verify network requests in browser DevTools

### Permission errors:
1. Ensure `.env` file has correct permissions
2. Check Node.js can read environment variables
3. Verify EMAIL_PASSWORD is exactly 16 characters

## Support & Contact

- **Email**: morak6@yahoo.co.uk
- **Phone**: +234 7036662572
- **Office**: Port Harcourt, Rivers State, Nigeria

## License

© 2024 Extron Nigeria Limited. All rights reserved.
