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
const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
const monthName = months[new Date().getMonth()];

const banner = (
  <Banner storageKey="some-key">
    Kode Docs {monthName} {new Date().getFullYear()} 0.1v is released 🎉
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
          // ... Your additional layout options
        >
          {children}
        </Layout>
      </body>
    </html>
  );
}
