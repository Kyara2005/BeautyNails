import type { Metadata } from "next";

export const siteConfig = {
  name: "Beauty Nails",
  tagline: "Nail studio en Quito",
  location: "Centro Histórico — San Blas",
  phoneDisplay: "096 394 3994",
  links: {
    instagram:
      "https://www.instagram.com/beautynailsquito?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
    reel: "https://www.instagram.com/reel/DZDYQKhBO2U/",
    post: "https://www.instagram.com/p/DaiQKBJFnc-/",
    howto: "https://www.instagram.com/reel/DXIYcgoDWje/",
    maps: "https://maps.app.goo.gl/882xCntB3hRDKwnp7",
    whatsapp: "https://wa.me/593963943994",
  },
} as const;

export const metadataExtras: Metadata = {
  title: siteConfig.name,
};
