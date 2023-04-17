import "./globals.css";
import "./teste.css";

export const metadata = {
  title: "Spotify Clone",
  description: "Clone do site do spotify para estudos",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className="text-slate-300">{children}</body>
    </html>
  );
}
