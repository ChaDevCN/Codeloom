
import "./globals.css";


export const metadata = {
  title: "Codeloom"
}



export default function RootLayout({ children, params: { locale } }: {
  children: React.ReactNode
  params: { locale: string }
}) {
  return (
    <html lang={locale}>
      <body className='bg-slate-50'>{children}</body>
    </html>
  );
}
