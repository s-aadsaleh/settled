# settled

![settled homepage](public/og.png)

A modern web application that enables unrestricted credit card payments via UPI and IMPS/NEFT, bypassing BBPS limitations.

## 🎯 Problem & Solution

### The Problem
The Bharat Bill Payment System (BBPS) restricts credit card payments to the generated bill amount. This creates issues when:
- You need to make large purchases exceeding your available credit limit
- You want to clear your outstanding balance before the billing cycle to reduce credit utilization
- You need to free up credit limit for upcoming transactions

For example:
- Credit Limit: ₹1,00,000
- Previous Bill: ₹15,000
- Current Outstanding: ₹70,000
- BBPS Payment Limit: ₹15,000 (bill amount)
- **Total Payable via Traditional Methods: ₹15,000**

In this scenario, you have ₹30,000 of available credit, but BBPS allows you to pay only ₹15,000 based on the current bill. This means the maximum amount you can free up through BBPS is ₹45,000. If you need to make a transaction exceeding ₹60,000, you will be unable to use the credit card because you're constrained by the BBPS payment limit.

### The Solution
settled allows you to:
- Make direct payments to your credit card via UPI or IMPS/NEFT
- Pay any amount regardless of your billing cycle
- Clear your outstanding balance as needed
- Free up your credit limit easily

## ✨ Features

- 🏦 Support for major Indian banks
- 🔒 Secure card number validation
- 📱 Mobile-responsive design
- 🌓 Dark/Light mode
- 🎨 Modern, minimalist UI
- ⚡ Instant QR code generation
- 🛡️ Input validation and error handling

## 🛠️ Tech Stack

- **Framework:** [Next.js 15](https://nextjs.org/)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **UI Components:** [shadcn/ui](https://ui.shadcn.com/)
- **Animations:** 
  - [Framer Motion](https://www.framer.com/motion/)
  - [React Spring](https://react-spring.dev/)
- **Form Handling:** React Hook Form
- **Email Service:** EmailJS
- **Deployment:** [Vercel](https://vercel.com)
- **Analytics:** Vercel Analytics


## 📱 Supported Banks

- American Express
- AU Small Finance Bank
- Axis Bank
- Bank of Baroda
- DBS Bank
- HDFC Bank
- HSBC Bank
- ICICI Bank
- IDBI Bank
- IDFC First Bank
- IndusInd Bank
- Kotak Mahindra
- OneCard
- Punjab National Bank
- Standard Chartered
- State Bank of India
- Union Bank of India
- Yes Bank

## 🔐 Security

- No data is stored
- Client-side validation only
- Direct UPI payment links
- Secure input handling
- Entire process to do it yourself is available on the website if you want to do it yourself

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🌐 Live Demo

Visit [https://ssettled.vercel.app](https://ssettled.vercel.app)

## 📧 Contact

For issues, suggestions, or feedback, please use the contact form on the website.