import type { Metadata } from "next";
import { Outfit, Quicksand } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

const quicksand = Quicksand({
  variable: "--font-quicksand",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://kyara2005.github.io/BeautyNails"),
  title: "Beauty Nails | Nail Studio en Quito",
  description:
    "Nail studio en Quito. Manicura y pedicura en el Centro Histórico — San Blas. Previa reserva.",
  openGraph: {
    title: "Beauty Nails | Nail Studio en Quito",
    description:
      "Manicura y pedicura en el Centro Histórico de Quito. Previa reserva.",
    images: ["/logo.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${outfit.variable} ${quicksand.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}
