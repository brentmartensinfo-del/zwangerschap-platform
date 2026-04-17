import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Birthly – Vind de perfecte zwangerschapscursus',
  description:
    'Vergelijk onafhankelijk zwangerschapscursussen en ontdek wat het beste bij jullie past.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="nl">
      <head>
        <script
          src="https://code.iconify.design/iconify-icon/1.0.7/iconify-icon.min.js"
          defer
        />
      </head>
      <body>
        <div className="pt-[65px]">
          {children}
        </div>
      </body>
    </html>
  );
}