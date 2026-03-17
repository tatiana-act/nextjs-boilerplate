# Austin City Tours

A modern Next.js web application for booking and discovering city tours in Austin. Built with React 19, TypeScript, Tailwind CSS, and next-intl for internationalization (en/ru). Includes integrations with Google Sheets to store booking, contact, and feedback submissions.

---

## Local Development & Testing

To run the application locally on your machine, follow these steps:

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Configure your environment variables:**
   Create a `.env.local` file in the root directory and populate it with the required keys (see [Environment Variables](#environment-variables) below).

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. **View the app:**
   Open [http://localhost:3000](http://localhost:3000) in your browser. The page will auto-update as you edit the files.

---

## Environment Variables

This project relies on a few secure environment variables to function correctly, particularly for integrating with the Google Sheets API. 
You have to create Google Spreadsheet and share it with a service account. Spreadsheet should have 3 sheets named `Contacts` `Reviews` and `Bookings` 
Create a `.env.local` file with the following keys for local development, and ensure these are added to your hosting provider for production:

```env
# Google Service Account Email
GOOGLE_SHEETS_CLIENT_EMAIL="your-service-account-email@your-project.iam.gserviceaccount.com"

# Google Service Account Private Key (make sure to format newlines correctly if pasting inline)
GOOGLE_SHEETS_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\n...\n-----END PRIVATE KEY-----\n"

# The specific ID of the Google Spreadsheet to use as your database
GOOGLE_SHEETS_SPREADSHEET_ID="your_spreadsheet_id_here"
```
This project uses Telegram messages for live notifications about bookings ands feedbacks. To receive messages you need to configure the Telegram Bot, and start Bot from a regular Telegram account, otherwise notifications will not be delivered  

```env
# Telegram Bot Token
TELEGRAM_BOT_TOKEN=8271068063:AAFkSq1P3hSaiTYxquYPFRY_BN8kJCNxERY

# Chat id for live notifications
TELEGRAM_BOT_CHATID=1192394950
```
---

## Deployment to Vercel

The easiest way to deploy this Next.js app is to use [Vercel](https://vercel.com/), built by the creators of Next.js.

### Steps to Deploy:

1. **Push your code to a Git repository** (GitHub, GitLab, or Bitbucket).
2. **Import the project into Vercel:**
   * Go to your Vercel dashboard and click **Add New... > Project**.
   * Connect your Git account and import the relevant repository.
3. **Configure the Project:**
   * During the import step, open the **Environment Variables** section.
   * Add the required `GOOGLE_SHEETS_CLIENT_EMAIL`, `GOOGLE_SHEETS_PRIVATE_KEY`, and `GOOGLE_SHEETS_SPREADSHEET_ID` variables identically to your `.env.local` file.
4. **Deploy:**
   * Click **Deploy**. Vercel will automatically detect that it is a Next.js application, build it, and assign a live URL.
   * For subsequent changes, Vercel will automatically redeploy whenever you push to your main branch.

For more detailed information, check out the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying).
