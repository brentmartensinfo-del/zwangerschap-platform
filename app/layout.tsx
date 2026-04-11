import './globals.css';

export const metadata = {
  title: 'Lumi Cursussen – Vind de perfecte zwangerschapscursus',
  description:
    'Vergelijk onafhankelijk zwangerschapscursussen en ontdek wat het beste bij jullie past.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="nl">
      <head>
        <script
          src="https://code.iconify.design/iconify-icon/1.0.7/iconify-icon.min.js"
          defer
        />
      </head>
      <body>{children}</body>
    </html>
  );
}