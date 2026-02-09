import Header from "@/components/layout/Header"
import "../styles/globals.css"
import { ThemeProvider } from "@/lib/themeProvider"
import Footer from "@/components/layout/Footer"
import { getFooter } from "@/lib/strapi"

export const revalidate = 86400

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const footerData = await getFooter()

  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen flex flex-col bg-slate-950 text-foreground">
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>

          <header className="fixed top-0 left-0 right-0 z-50 h-20">
            <Header />
          </header>

          <main>
            {children}
          </main>

          <Footer footerText={footerData?.footer_text} />

        </ThemeProvider>
      </body>
    </html>
  )
}


