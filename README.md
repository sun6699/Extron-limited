# Extron Nigeria Limited Website

Engineering Excellence & Project Management Services

## Setup Instructions

### Prerequisites
- Node.js (v14 or higher)
- npm

### Installation

1. Clone the repository
```bash
git clone https://github.com/sun6699/Extron-limited.git
cd Extron-limited
```

2. Install dependencies
```bash
npm install
```

3. Configure Email Settings

#### For Gmail:
1. Enable 2-Factor Authentication on your Gmail account
2. Generate an App Password:
   - Go to Google Account settings
   - Navigate to Security
   - Enable 2-Step Verification if not already enabled
   - Generate App Password for "Mail" and "Windows Computer"
   - Copy the generated 16-character password

3. Create a `.env` file in the root directory:
```
EMAIL_USER=morak6@yahoo.co.uk
EMAIL_PASSWORD=your_16_character_app_password
CONTACT_EMAIL=morak6@yahoo.co.uk
PORT=3000
```

4. Start the server
```bash
npm start
```

The server will run on http://localhost:3000

## Email Features

### Contact Form
Visitors can submit a contact form that:
- Sends the message to your primary email (morak6@yahoo.co.uk)
- Sends a confirmation email to the visitor
- Validates all required fields

### Newsletter Subscription
Visitors can subscribe to the newsletter:
- Subscription notifications are sent to your email
- Confirmation message displayed to the visitor

## Project Structure

```
├── index.html                  # Home page
├── contact.html               # Contact page with forms
├── about.html                 # About page
├── services.html              # Services page
├── [other pages]              # Additional pages
├── server.js                  # Express server with email API
├── script.js                  # Client-side form handling
├── styles.css                 # Styling
├── package.json               # Dependencies
└── .env                       # Environment variables
```

## Deployment

### For Heroku, Vercel, or other platforms:
1. Set environment variables in your hosting platform
2. Deploy the repository
3. Update the email credentials for your production email service

### Environment Variables Required:
- `EMAIL_USER`: Your email address
- `EMAIL_PASSWORD`: App password or SMTP password
- `CONTACT_EMAIL`: Where to receive contact form submissions
- `PORT`: Server port (usually set by hosting platform)

## Troubleshooting

### Email not sending:
1. Check that `EMAIL_PASSWORD` is correct (use app password for Gmail, not your regular password)
2. Verify 2-Factor Authentication is enabled on Gmail
3. Check server logs for error messages
4. Ensure `.env` file exists in the root directory

### Form validation issues:
1. Check browser console for JavaScript errors
2. Ensure all required fields are filled
3. Verify email format is valid

## Support

For inquiries, contact:
- Email: morak6@yahoo.co.uk
- Phone: +234 7036662572
- Office: Port Harcourt, Rivers State, Nigeria
