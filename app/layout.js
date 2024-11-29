import './globals.css';

export const metadata = {
  title: 'Era Tours - Your Travel Partner',
  description: 'Experience the best travel solutions for business and leisure',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}