import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://giovane-geromini.vercel.app"),
  title: {
    default: "Giovane Geromini | Portfólio",
    template: "%s | Giovane Geromini",
  },
  description:
    "Portfólio de Giovane Geromini, Analista de Logística em transição para tecnologia, com projetos em SQL, Power BI, automação, Next.js, TypeScript e desenvolvimento de soluções.",
  keywords: [
    "Giovane Geromini",
    "portfólio",
    "analista de logística",
    "dados",
    "BI",
    "automação",
    "SQL",
    "Power BI",
    "Next.js",
    "TypeScript",
    "Supabase",
    "desenvolvimento web",
    "PlantaCheck",
  ],
  authors: [{ name: "Giovane Geromini" }],
  creator: "Giovane Geromini",
  publisher: "Giovane Geromini",
  applicationName: "Portfólio Giovane Geromini",
  category: "technology",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Giovane Geromini | Portfólio",
    description:
      "Portfólio com projetos, experiência e evolução profissional em dados, automação e desenvolvimento de soluções.",
    url: "https://giovane-geromini.vercel.app",
    siteName: "Giovane Geromini | Portfólio",
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Giovane Geromini | Portfólio",
    description:
      "Projetos, experiência e evolução profissional em dados, automação e desenvolvimento de soluções.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}