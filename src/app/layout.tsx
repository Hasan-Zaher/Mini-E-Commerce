
'use client';

 
import "./globals.css";
import { ThemeProvider } from "@mui/material";
import theme from "@/lib/theme";
import { Providers } from "@/redux/Providers";

 
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider theme={theme}>
          <Providers>{children}</Providers>
        </ThemeProvider>
      </body>
    </html>
  );
}
