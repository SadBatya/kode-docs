import { Footer, Layout, Navbar } from "nextra-theme-docs";
import { Banner, Head } from "nextra/components";
import { getPageMap } from "nextra/page-map";
import "./globals.css";
import "nextra-theme-docs/style.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kode Docs",
  description: "Техническая документация для новых сотрудников компании KODE",
};
const banner = (
  <Banner storageKey="kode-docs-0.2-beta">
    Kode Docs v0.2 (бета) — разрабатывается Frontend Team 🎉
  </Banner>
);
const navbar = <Navbar logo={<b className="underline">KODE DOCS</b>} />;
const footer = <Footer>Kode Docs {new Date().getFullYear()} © Nextra.</Footer>;

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru" dir="ltr" suppressHydrationWarning>
      <Head></Head>
      <body>
        <Layout
          banner={banner}
          navbar={navbar}
          pageMap={await getPageMap()}
          docsRepositoryBase="https://github.com/shuding/nextra/tree/main/docs"
          footer={footer}
          editLink={null}
          feedback={{
            content: "Есть идея по документации? Напиши в Telegram",
            link: "https://t.me/skripnik_vladimir_skriv",
          }}
          // ... Your additional layout options
        >
          {children}
        </Layout>
      </body>
    </html>
  );
}
