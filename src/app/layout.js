import './globals.css';

export const metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'),
  title: {
    default: 'Vaishnavi Desai — Full Stack Developer & AI Engineer',
    template: '%s | Vaishnavi Desai',
  },
  description:
    'Portfolio of Vaishnavi Desai — Full Stack Developer, AI Engineer, Python Developer, and Algo Trading Developer.',
  openGraph: {
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <head>
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>VD</text></svg>"
        />
      </head>
      <body className="bg-neural-900 text-slate-100 font-sans antialiased min-h-screen flex flex-col">
        <div className="bg-grid fixed inset-0 pointer-events-none z-0" aria-hidden="true" />
        <div className="relative z-10 flex flex-col min-h-screen">{children}</div>
      </body>
    </html>
  );
}
