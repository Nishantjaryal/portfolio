import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./provider";


export const metadata: Metadata = {
  title: "Nishant Singh | Software Developer",
  description:
    "Nishant Singh | Software Developer | Passionate about building scalable systems and AI-powered applications. Explore my projects, certifications, and connect with me to see how we can create impactful technology together.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
         <head>
			<link rel='icon' href='/nj.webp' />
		</head>
        <body>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
        </body>
      </html>
  );
}
