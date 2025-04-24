import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import CustomCursor from "./components/CustomCursor";

const poppins = Poppins({
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});
export const metadata: Metadata = {
  title: "Aymen Dellas | Frontend Developer",
  description:
    "Experienced frontend developer specializing in React, Next.js, and modern web technologies. View my portfolio showcasing responsive web applications and interactive UI designs.",
  keywords:
    "frontend developer, web developer, React, Next.js, JavaScript, UI/UX, portfolio",
  robots: "index, follow",
  openGraph: {
    title: "Aymen Dellas | Frontend Developer Portfolio",
    description:
      "Creative frontend developer with expertise in building responsive and interactive web applications using modern technologies.",
    type: "website",
    url: "https://aymendellas.live",
    images: [
      {
        url: "/images/portfolio-thumbnail.jpg",
        width: 1200,
        height: 630,
        alt: "Aymen Dellas - Frontend Developer Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Aymen Dellas | Frontend Developer",
    description:
      "Check out my frontend development portfolio featuring React and Next.js projects",
    images: ["/images/portfolio-thumbnail.jpg"],
  },
  authors: [{ name: "Aymen Dellas", url: "https://aymendellas.live" }],
  creator: "Aymen Dellas",
  publisher: "Aymen Dellas",
  formatDetection: {
    telephone: false,
  },
  viewport: "width=device-width, initial-scale=1.0",
  themeColor: "#00A3FF",
  icons: {
    icon: [{ url: "/favicon.ico" }, { url: "/icon.png", type: "image/png" }],
    apple: [{ url: "/apple-icon.png" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="overflow-x-hidden scroll-smooth lg:cursor-none ">
      <body className={`${poppins.variable} antialiased font-popping`}>
        <div className="absolute top-0 z-[-2] h-screen w-screen bg-transparent bg-[radial-gradient(100%_50%_at_50%_0%,rgba(0,163,255,0.13)_0,rgba(0,163,255,0)_50%,rgba(0,163,255,0)_100%)]"></div>
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
