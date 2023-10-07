import "../styles/globals.css";

export const metadata = {
  title: "Pepe Birthday",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
