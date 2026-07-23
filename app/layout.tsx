import type { Metadata, Viewport } from "next";
import "./globals.css";

const title = "بيلاوال لخدمات التبريد والتكييف | إصلاح مكيفات بالرياض";
const description =
  "خدمة إصلاح تكييف الهواء في الرياض: فحص وصيانة وتنظيف المكيفات، تعبئة الفريون، كشف التسربات، فك وتركيب ونقل المكيفات. اتصل ببيلاوال على 0563837128.";

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    "إصلاح مكيفات بالرياض",
    "صيانة مكيفات الرياض",
    "فني تكييف بالرياض",
    "تنظيف مكيفات سبليت",
    "تعبئة فريون مكيف",
    "خدمة إصلاح تكييف الهواء",
    "بيلاوال للتبريد والتكييف",
  ],
  applicationName: "بيلاوال لخدمات التبريد والتكييف",
  authors: [{ name: "بيلاوال لخدمات التبريد والتكييف" }],
  creator: "بيلاوال لخدمات التبريد والتكييف",
  category: "خدمة إصلاح تكييف الهواء",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    title,
    description,
    locale: "ar_SA",
    type: "website",
    siteName: "بيلاوال لخدمات التبريد والتكييف",
  },
  twitter: {
    card: "summary",
    title,
    description,
  },
  other: {
    "codex-preview": "development",
    "format-detection": "telephone=yes",
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#071b2e",
  colorScheme: "light",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl">
      <body>{children}</body>
    </html>
  );
}
