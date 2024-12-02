import { Source_Sans_3 } from 'next/font/google';
import "./globals.css";

const sourceSans3 = Source_Sans_3({
  subsets: ['latin'],
  weight: ['400', '600', '700', '800'],
});

export const metadata = {
  title: "Sharp",
  description: "Sharp description",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={sourceSans3.variable}>
        {children}
      </body>
    </html>
  );
}
