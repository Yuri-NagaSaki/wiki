import { localizedPath } from '@/lib/i18n';
import { ArrowRight, ExternalLink } from 'lucide-react';
import Link from 'next/link';

const copy = {
  zh: {
    tagline: '给字幕组与追番人的小册子',
    enter: '翻开手册',
    site: '回到 AniBT',
  },
  en: {
    tagline: 'A field notebook for fansubbers and trackers',
    enter: 'Open the handbook',
    site: 'Back to AniBT',
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
      <div className="anibt-home-bg" aria-hidden="true">
        <div className="anibt-home-grid" />
        <div className="anibt-home-glow anibt-home-glow-a" />
        <div className="anibt-home-glow anibt-home-glow-b" />
        <div className="anibt-home-ring" />
      </div>

      <div className="anibt-home-stage">
        <span className="anibt-home-tick" aria-hidden="true" />

        <h1 className="anibt-home-title">
          <span>Ani</span>
          <em>BT</em>
          <span>Wiki</span>
          <i className="anibt-home-title-dot" aria-hidden="true" />
        </h1>

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
