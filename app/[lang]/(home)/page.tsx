import { localizedPath } from '@/lib/i18n';
import { ArrowRight, BookOpen, ExternalLink, Search } from 'lucide-react';
import Link from 'next/link';

const entryLinks = [
  {
    key: 'docs',
    href: '/docs',
    label: { zh: '文档库', en: 'Docs' },
    description: {
      zh: '查阅 AniBT 的使用手册与配置说明。',
      en: 'Read the AniBT manuals and configuration notes.',
    },
  },
  {
    key: 'search',
    href: '/docs',
    label: { zh: '快速查找', en: 'Find Answers' },
    description: {
      zh: '进入文档后使用顶部搜索定位问题。',
      en: 'Use the docs search to jump straight to an answer.',
    },
  },
] as const;

export default async function HomePage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const isChinese = lang === 'zh-CN';
  const docsHref = localizedPath(lang, '/docs');

  return (
    <main className="anibt-home">
      <section className="anibt-home-hero">
        <div className="anibt-home-art" aria-hidden="true" />
        <div className="anibt-home-wash" aria-hidden="true" />

        <div className="anibt-home-inner">
          <div className="anibt-home-copy">
            <p className="anibt-home-label">
              {isChinese ? 'AniBT Documentation' : 'AniBT Documentation'}
            </p>
            <h1 className="anibt-home-title">AniBT Wiki</h1>
            <p className="anibt-home-subtitle">
              {isChinese
                ? '给 AniBT 使用者和字幕组维护者看的轻量手册。安静、清晰，像新番档案一样随手可查。'
                : 'A quiet field guide for AniBT users and subtitle teams, shaped like an anime archive you can actually find your way through.'}
            </p>

            <div className="anibt-home-actions">
              <Link href={docsHref} className="anibt-home-button anibt-home-button-primary">
                <BookOpen className="size-4" aria-hidden="true" />
                {isChinese ? '进入文档' : 'Open Docs'}
                <ArrowRight className="size-4" aria-hidden="true" />
              </Link>
              <a
                href="https://anibt.net"
                target="_blank"
                rel="noreferrer"
                className="anibt-home-button anibt-home-button-secondary"
              >
                {isChinese ? '返回主站' : 'Open AniBT'}
                <ExternalLink className="size-4" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>

        <div className="anibt-home-dock" aria-label={isChinese ? '首页入口' : 'Homepage entries'}>
          <div className="anibt-home-dock-inner">
            {entryLinks.map((entry) => (
              <Link
                key={entry.key}
                href={localizedPath(lang, entry.href)}
                className="anibt-home-entry"
              >
                <span className="anibt-home-entry-icon">
                  {entry.key === 'search' ? (
                    <Search className="size-4" aria-hidden="true" />
                  ) : (
                    <BookOpen className="size-4" aria-hidden="true" />
                  )}
                </span>
                <span>
                  <span className="block font-bold text-[var(--anibt-text-primary)]">
                    {entry.label[isChinese ? 'zh' : 'en']}
                  </span>
                  <span className="mt-1 block text-sm leading-5 text-[var(--anibt-text-secondary)]">
                    {entry.description[isChinese ? 'zh' : 'en']}
                  </span>
                </span>
                <ArrowRight className="ml-auto size-4 shrink-0 text-[var(--anibt-accent-primary)]" aria-hidden="true" />
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
