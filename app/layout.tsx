
import "./globals.css";


export const metadata = {
  title: "Codeloom"
}



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className='bg-slate-50'>{children}</body>
    </html>
  );
}
