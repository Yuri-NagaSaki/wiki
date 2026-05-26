import { localizedPath } from '@/lib/i18n';
import { ArrowRight, ExternalLink } from 'lucide-react';
import Link from 'next/link';

const copy = {
  zh: {
    tagline: '面向使用者与字幕组维护者的手册',
    enter: '进入文档',
    site: '主站',
  },
  en: {
    tagline: 'Handbook for users and subtitle teams',
    enter: 'Enter docs',
    site: 'Main site',
  },
} as const;

export default async function HomePage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const t = copy[lang === 'zh-CN' ? 'zh' : 'en'];

  return (
    <main className="anibt-home">
      <div className="anibt-home-card">
        <img
          src="/favicon.png"
          alt=""
          className="anibt-home-logo"
          aria-hidden="true"
        />
        <h1 className="anibt-home-title">AniBT Wiki</h1>
        <p className="anibt-home-tagline">{t.tagline}</p>

        <div className="anibt-home-actions">
          <Link
            href={localizedPath(lang, '/docs')}
            className="anibt-home-btn anibt-home-btn-primary"
          >
            {t.enter}
            <ArrowRight className="size-4" aria-hidden="true" />
          </Link>
          <a
            href="https://anibt.net"
            target="_blank"
            rel="noreferrer"
            className="anibt-home-btn anibt-home-btn-ghost"
          >
            {t.site}
            <ExternalLink className="size-3.5" aria-hidden="true" />
          </a>
        </div>
      </div>
    </main>
  );
}
