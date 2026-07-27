import { useRouter } from 'next/router'
import { useConfig } from 'nextra-theme-docs'
import type { DocsThemeConfig } from 'nextra-theme-docs'

const COMPANY = 'KODE'

const config: DocsThemeConfig = {
  logo: (
    <span style={{ fontWeight: 700, fontSize: '1.1rem', letterSpacing: '-0.02em' }}>
      {COMPANY}{' '}
      <span style={{ fontWeight: 400, opacity: 0.6 }}>Docs</span>
    </span>
  ),

  project: {
    link: 'https://gitlab.com/your-org/kode-docs',
  },

  docsRepositoryBase: 'https://gitlab.com/your-org/kode-docs/-/blob/main',

  useNextSeoProps() {
    const { asPath } = useRouter()
    if (asPath !== '/') {
      return { titleTemplate: `%s – ${COMPANY} Docs` }
    }
    return { titleTemplate: `${COMPANY} Docs` }
  },

  head() {
    const { frontMatter } = useConfig()
    return (
      <>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          property="og:title"
          content={frontMatter.title ? `${frontMatter.title} – ${COMPANY} Docs` : `${COMPANY} Docs`}
        />
        <meta
          property="og:description"
          content={frontMatter.description ?? 'Внутренняя документация компании KODE'}
        />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
      </>
    )
  },

  sidebar: {
    defaultMenuCollapseLevel: 1,
    toggleButton: true,
  },

  toc: {
    title: 'На этой странице',
    backToTop: true,
  },

  search: {
    placeholder: 'Поиск по документации…',
  },

  navigation: {
    prev: true,
    next: true,
  },

  editLink: {
    text: 'Редактировать на GitLab →',
  },

  feedback: {
    content: 'Нашли ошибку? Сообщите нам →',
    labels: 'feedback',
  },

  footer: {
    text: (
      <span style={{ opacity: 0.6, fontSize: '0.85rem' }}>
        © {new Date().getFullYear()} {COMPANY}. Для внутреннего использования.
      </span>
    ),
  },

  gitTimestamp({ timestamp }) {
    return (
      <span>
        Обновлено {timestamp.toLocaleDateString('ru-RU', { dateStyle: 'long' })}
      </span>
    )
  },
}

export default config
