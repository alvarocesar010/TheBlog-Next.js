import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "The blog - This is a blog created by Next.js",
  description: "This is the description about page",
};

type RootLayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: Readonly<RootLayoutProps>) {
  return (
    <html lang="en">
      <body>
        <header>
          <h2>Header</h2>
        </header>
        <div className="bg-red-500">{children}</div>
        <footer>
          <h3>Footer</h3>
        </footer>
      </body>
    </html>
  );
}
