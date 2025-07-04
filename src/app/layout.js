import "./globals.css";

export const metadata = {
  title: "Mahadik",
  description: "Mahadik Group of Companies is the parent company of JK Tourist and Transport and Eagle Cars",
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
