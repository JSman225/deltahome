import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider"
import Nav from "@/components/nav";

export default function RootLayout({ children }) {
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <head />
        <body>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>

          <Nav></Nav>
        </body>
      </html>
    </>
  )
}
