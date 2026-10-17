import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-sans",
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#F4F5F7" },
    { media: "(prefers-color-scheme: dark)", color: "#0B0C0F" },
  ],
};

export const metadata: Metadata = {
  title: "Lucas Xavier. | Sites para prestadores de serviço e empresas",
  description:
    "Sites e landing pages rápidos para prestadores de serviço e empresas, com contato direto no WhatsApp. Paulínia, SP.",
  authors: [{ name: "Lucas Rodrigues Xavier" }],
  creator: "Lucas Xavier",
  metadataBase: new URL("https://lucasxavier.com.br"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://lucasxavier.com.br",
    siteName: "Lucas Xavier.",
    title: "Lucas Xavier. | Sites para prestadores de serviço e empresas",
    description:
      "Sites e landing pages rápidos para prestadores de serviço e empresas, com contato direto no WhatsApp. Paulínia, SP.",
    images: [
      {
        url: "/img/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Lucas Xavier. - Sites rápidos para prestadores de serviço e empresas",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Lucas Xavier. | Sites para prestadores de serviço e empresas",
    description:
      "Sites e landing pages rápidos para prestadores de serviço e empresas. Paulínia, SP.",
    images: ["/img/og-image.jpg"],
  },
  icons: {
    icon: "/icon.svg",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={plusJakartaSans.variable}>
      <head>
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/favicon.png" />
      </head>
      <body>{children}</body>
    </html>
  );
}
