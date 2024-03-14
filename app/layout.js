import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider"
import Nav from "@/components/nav";
import { CommandMenu } from "@/components/commandMenu";

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
            <CommandMenu />
            <Nav></Nav>
            {children}
          </ThemeProvider>
        </body>
      </html>
    </>
  )
}
