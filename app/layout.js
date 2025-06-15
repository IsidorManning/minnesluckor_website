import "./globals.css";
import localFont from 'next/font/local'

export const metadata = {
  title: "Minnesluckor",
  description: "Köp biljetter till Minnesluckor - 40 år av galenskap med Jan Rippe och Per Fritzell.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="sv">
      <body>
        {children}
      </body>
    </html>
  );
}
