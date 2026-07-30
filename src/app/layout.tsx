import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import "./globals.css";

const raleway = Raleway({
  variable: "--font-raleway",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
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
    images: ["/brand/logo.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${raleway.variable} ${raleway.className} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-sans antialiased">{children}</body>
    </html>
  );
}
