export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      
      <body><h1>HEADER</h1>{children}      <h1>FOOTER</h1></body>

    </html>
  );
}
