# Talon Software


Main site for Talon Software - Built with Next.js, React, TypeScript, and Tailwind CSS.

## Features

- ⚡ Next.js 14 with App Router
- ⚛️ React 18 with TypeScript
- 🎨 Tailwind CSS for styling
- 📧 Contact form with SendGrid integration
- 🌙 Dark mode support

## Getting Started

### Prerequisites

- Node.js 18+ and npm (or yarn/pnpm)

### Installation

1. Install dependencies:
```bash
npm install
```

2. Set up environment variables:

Create a `.env.local` file in the root directory with the following variables:

```env
SENDGRID_API_KEY=your_sendgrid_api_key_here
SENDGRID_FROM_EMAIL=noreply@talonsoftware.com
CONTACT_EMAIL=contact@talonsoftware.com
```

**Getting your SendGrid API Key:**
1. Sign up for a [SendGrid account](https://sendgrid.com/)
2. Go to Settings > API Keys
3. Create a new API key with "Mail Send" permissions
4. Copy the API key to your `.env.local` file

**Email Configuration:**
- `SENDGRID_FROM_EMAIL`: The email address that will appear as the sender (must be verified in SendGrid)
- `CONTACT_EMAIL`: The email address where contact form submissions will be sent

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
├── app/
│   ├── api/
│   │   └── contact/
│   │       └── route.ts      # SendGrid API route
│   ├── globals.css            # Global styles with Tailwind
│   ├── layout.tsx             # Root layout
│   └── page.tsx               # Home page
├── components/
│   └── ContactForm.tsx        # Contact form component
├── public/                    # Static assets
└── ...config files
```

## Building for Production

```bash
npm run build
npm start
```

## Technologies Used

- **Next.js 14** - React framework with App Router
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first CSS framework
- **SendGrid** - Email delivery service

## License

Private - Talon Software
