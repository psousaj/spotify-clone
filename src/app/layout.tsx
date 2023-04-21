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
      <body
        style={{
          margin: 0,
          padding: 0,
          boxSizing: "border-box",
          display: "flex",
          // height: "max-content",
          height: "100%",
          flexShrink: 1,
        }}
        className="text-slate-300"
      >
        {children}
      </body>
    </html>
  );
}
