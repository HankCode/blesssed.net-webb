import { ThemeProvider } from "next-themes";
import localFont from "next/font/local";
import "./globals.css";

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

export const metadata = {
  metadataBase: new URL(defaultUrl),
  title: "blesssed.net",
  description: "It is your birth right to live your dream life.",
};

const ApercuFont = localFont({
  src: [
    {
      path: "./ApercuRegular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./ApercuMedium.otf",
      weight: "500",
      style: "medium",
    },
    {
      path: "./ApercuBold.otf",
      weight: "700",
      style: "bold",
    },
    {
      path: "./ApercuLight.otf",
      weight: "300",
      style: "light",
    },
  ],
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={ApercuFont.className} suppressHydrationWarning>
      <body className="bg-background text-foreground">
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          forcedTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
