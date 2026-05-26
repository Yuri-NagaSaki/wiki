import { localizedPath } from '@/lib/i18n';
import {
  ArrowRight,
  BookOpen,
  CheckCircle2,
  Cookie,
  ExternalLink,
  FileKey2,
  Globe2,
  RadioTower,
  SearchCheck,
  ShieldCheck,
} from 'lucide-react';
import Link from 'next/link';

const syncGuides = [
  {
    slug: 'bangumi',
    icon: Cookie,
    title: { zh: '萌番组', en: 'Bangumi.moe' },
    description: {
      zh: 'Cookie、发布身份和 Team ID 的完整填写流程。',
      en: 'Cookie, publisher identity, and Team ID setup.',
    },
    meta: { zh: 'Cookie', en: 'Cookie' },
    tone: 'pink',
  },
  {
    slug: 'mikan',
    icon: FileKey2,
    title: { zh: '蜜柑计划', en: 'Mikan' },
    description: {
      zh: 'API Token、字幕组 ID 与发布组 ID 获取方式。',
      en: 'API Token, subgroup ID, and publish group ID.',
    },
    meta: { zh: 'API Token', en: 'API Token' },
    tone: 'teal',
  },
  {
    slug: 'acgnx',
    icon: RadioTower,
    title: { zh: '末日站', en: 'ACGNX' },
    description: {
      zh: 'UID 与 API Token 的账户 API 设置入口。',
      en: 'UID and API Token from account API settings.',
    },
    meta: { zh: 'UID', en: 'UID' },
    tone: 'yellow',
  },
  {
    slug: 'acgrip',
    icon: SearchCheck,
    title: { zh: 'ACG.rip', en: 'ACG.rip' },
    description: {
      zh: '只复制真正的 API Token，不带 tpx:// 前缀。',
      en: 'Copy only the API Token, without the tpx:// prefix.',
    },
    meta: { zh: 'Token', en: 'Token' },
    tone: 'violet',
  },
  {
    slug: 'nyaa',
    icon: ShieldCheck,
    title: { zh: 'Nyaa', en: 'Nyaa' },
    description: {
      zh: 'session Cookie 需要手动加前缀并定期更新。',
      en: 'Session cookie setup with the required prefix.',
    },
    meta: { zh: 'Session', en: 'Session' },
    tone: 'blue',
  },
] as const;

const workflow = [
  {
    title: { zh: '找到凭据', en: 'Find Credentials' },
    description: {
      zh: '从资源站后台、DevTools 或 Cookie 面板取出同步所需信息。',
      en: 'Collect sync credentials from site settings, DevTools, or cookies.',
    },
  },
  {
    title: { zh: '填入 AniBT', en: 'Save in AniBT' },
    description: {
      zh: '把 Cookie、Token、UID 和组 ID 填进对应站点同步设置。',
      en: 'Save cookies, tokens, UIDs, and group IDs in the matching sync form.',
    },
  },
  {
    title: { zh: '测试连接', en: 'Test Connection' },
    description: {
      zh: '确认连接成功后，后续资源同步就能稳定进入发布流程。',
      en: 'Confirm the connection before relying on the automated release flow.',
    },
  },
] as const;

const screenshots = [
  {
    src: '/images/site-sync/bangumi-cookie-header.webp',
    alt: {
      zh: '萌番组 Cookie 请求标头截图',
      en: 'Bangumi.moe cookie request header screenshot',
    },
    title: { zh: '从请求里拿 Cookie', en: 'Cookie From Request Headers' },
  },
  {
    src: '/images/site-sync/mikan-api-token.webp',
    alt: {
      zh: '蜜柑计划 API Token 页面截图',
      en: 'Mikan API Token page screenshot',
    },
    title: { zh: '自动查询组 ID', en: 'Resolve Group IDs' },
  },
  {
    src: '/images/site-sync/bangumi-connection-success.webp',
    alt: {
      zh: 'AniBT 连接成功截图',
      en: 'AniBT connection success screenshot',
    },
    title: { zh: '保存后测试连接', en: 'Save and Test' },
  },
] as const;

export default async function HomePage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const isChinese = lang === 'zh-CN';
  const docsHref = localizedPath(lang, '/docs/site-sync/bangumi');
  const allDocsHref = localizedPath(lang, '/docs');

  return (
    <main className="anibt-wiki-home flex flex-1 flex-col">
      <section className="anibt-wiki-hero">
        <div className="anibt-hero-image" aria-hidden="true" />
        <div className="anibt-hero-scrim" aria-hidden="true" />

        <div className="relative mx-auto grid w-full max-w-6xl gap-10 px-5 py-14 sm:px-8 lg:min-h-[calc(82vh-3.5rem)] lg:grid-cols-[minmax(0,1.05fr)_minmax(18rem,0.95fr)] lg:items-center lg:py-16">
          <div className="max-w-2xl">
            <p className="anibt-kicker">
              {isChinese ? 'AniBT Wiki / 新番资源同步手册' : 'AniBT Wiki / Anime Resource Sync Manual'}
            </p>
            <h1 className="anibt-hero-title">
              {isChinese
                ? '把资源站同步，调成自动追番的节奏。'
                : 'Tune every source into AniBT’s anime release rhythm.'}
            </h1>
            <p className="mt-5 max-w-xl text-base leading-7 text-[var(--anibt-text-secondary)] sm:text-lg">
              {isChinese
                ? '这里不是冷冰冰的设置说明。我们把 Cookie、Token、组 ID 和常见坑按资源站拆好，照着截图走，字幕组资源就能顺利回到 AniBT。'
                : 'A visual guide for cookies, tokens, group IDs, and source-specific sync details, organized for subtitle teams and anime release workflows.'}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link
                href={docsHref}
                className="anibt-button anibt-button-primary"
              >
                <BookOpen className="size-4" aria-hidden="true" />
                {isChinese ? '开始配置同步' : 'Start Sync Setup'}
                <ArrowRight className="size-4" aria-hidden="true" />
              </Link>
              <Link
                href={allDocsHref}
                className="anibt-button anibt-button-secondary"
              >
                {isChinese ? '浏览全部文档' : 'Browse Docs'}
              </Link>
              <a
                href="https://anibt.net"
                target="_blank"
                rel="noreferrer"
                className="anibt-button anibt-button-ghost"
              >
                {isChinese ? '打开 AniBT' : 'Open AniBT'}
                <ExternalLink className="size-4" aria-hidden="true" />
              </a>
            </div>

            <div className="anibt-signal-strip" aria-label={isChinese ? '同步特性' : 'Sync highlights'}>
              <span>{isChinese ? '5 个资源站' : '5 sources'}</span>
              <span>{isChinese ? '本地截图' : 'local screenshots'}</span>
              <span>{isChinese ? 'Cookie / Token / UID' : 'cookie / token / UID'}</span>
            </div>
          </div>

          <div className="anibt-hero-console" aria-label={isChinese ? '同步流程预览' : 'Sync flow preview'}>
            <div className="anibt-console-top">
              <span className="anibt-dot anibt-dot-pink" />
              <span className="anibt-dot anibt-dot-teal" />
              <span className="anibt-dot anibt-dot-yellow" />
              <span className="ml-auto text-xs text-[var(--anibt-text-tertiary)]">
                {isChinese ? '同步状态' : 'sync status'}
              </span>
            </div>
            <div className="anibt-console-body">
              <div>
                <p className="text-sm font-semibold text-[var(--anibt-text-primary)]">
                  {isChinese ? '站点同步' : 'Site sync'}
                </p>
                <p className="mt-1 text-xs leading-5 text-[var(--anibt-text-secondary)]">
                  {isChinese
                    ? '从外部资源站取回发布身份、订阅和凭据，统一接进 AniBT。'
                    : 'Connect source credentials and publisher identity back into AniBT.'}
                </p>
              </div>
              <div className="space-y-2">
                {syncGuides.slice(0, 4).map((guide) => (
                  <div key={guide.slug} className="anibt-console-row">
                    <span className={`anibt-guide-mark anibt-guide-mark-${guide.tone}`} />
                    <span>{guide.title[isChinese ? 'zh' : 'en']}</span>
                    <CheckCircle2 className="ml-auto size-4 text-[var(--anibt-accent-secondary)]" aria-hidden="true" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="anibt-section anibt-section-paper">
        <div className="mx-auto w-full max-w-6xl px-5 py-12 sm:px-8 sm:py-16">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="anibt-kicker">{isChinese ? 'Source Guide' : 'Source Guide'}</p>
              <h2 className="mt-3 text-3xl font-black text-[var(--anibt-text-primary)] sm:text-4xl">
                {isChinese ? '按资源站进入配置。' : 'Pick a source and configure it.'}
              </h2>
            </div>
            <p className="max-w-md text-sm leading-6 text-[var(--anibt-text-secondary)]">
              {isChinese
                ? '每个入口都对应真实截图和字段说明，优先解决最容易填错的 Cookie、Token、UID 和组 ID。'
                : 'Each guide focuses on the fields that are easiest to get wrong: cookies, tokens, UIDs, and group IDs.'}
            </p>
          </div>

          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
            {syncGuides.map((guide) => {
              const Icon = guide.icon;
              return (
                <Link
                  key={guide.slug}
                  href={localizedPath(lang, `/docs/site-sync/${guide.slug}`)}
                  className={`anibt-guide-card anibt-guide-card-${guide.tone}`}
                >
                  <div className="flex items-center justify-between gap-3">
                    <span className="anibt-guide-icon">
                      <Icon className="size-5" aria-hidden="true" />
                    </span>
                    <span className="anibt-guide-meta">{guide.meta[isChinese ? 'zh' : 'en']}</span>
                  </div>
                  <h3 className="mt-5 text-lg font-bold text-[var(--anibt-text-primary)]">
                    {guide.title[isChinese ? 'zh' : 'en']}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-[var(--anibt-text-secondary)]">
                    {guide.description[isChinese ? 'zh' : 'en']}
                  </p>
                  <span className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-[var(--anibt-accent-primary)]">
                    {isChinese ? '查看教程' : 'Read guide'}
                    <ArrowRight className="size-4" aria-hidden="true" />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section className="anibt-section">
        <div className="mx-auto grid w-full max-w-6xl gap-10 px-5 py-12 sm:px-8 sm:py-16 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <p className="anibt-kicker">{isChinese ? 'Workflow' : 'Workflow'}</p>
            <h2 className="mt-3 text-3xl font-black text-[var(--anibt-text-primary)] sm:text-4xl">
              {isChinese ? '从复制凭据到连接成功。' : 'From copied credentials to a working sync.'}
            </h2>
            <p className="mt-4 text-sm leading-6 text-[var(--anibt-text-secondary)]">
              {isChinese
                ? '首页只保留真正有用的路径：先选站点，再照截图拿凭据，最后回到 AniBT 保存测试。'
                : 'The homepage keeps the path direct: choose a source, follow screenshots, then save and test in AniBT.'}
            </p>
            <div className="mt-7 space-y-3">
              {workflow.map((item, index) => (
                <div key={item.title.en} className="anibt-step">
                  <span className="anibt-step-number">{index + 1}</span>
                  <div>
                    <h3 className="font-bold text-[var(--anibt-text-primary)]">
                      {item.title[isChinese ? 'zh' : 'en']}
                    </h3>
                    <p className="mt-1 text-sm leading-6 text-[var(--anibt-text-secondary)]">
                      {item.description[isChinese ? 'zh' : 'en']}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
            {screenshots.map((shot) => (
              <figure key={shot.src} className="anibt-shot-card">
                <img src={shot.src} alt={shot.alt[isChinese ? 'zh' : 'en']} />
                <figcaption>{shot.title[isChinese ? 'zh' : 'en']}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="anibt-section anibt-section-final">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-5 px-5 py-10 sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <div>
            <p className="text-sm font-semibold text-[var(--anibt-accent-primary)]">
              {isChinese ? 'AniBT Wiki' : 'AniBT Wiki'}
            </p>
            <h2 className="mt-2 text-2xl font-black text-[var(--anibt-text-primary)]">
              {isChinese
                ? '需要排查时，从这里回到完整文档。'
                : 'When something fails, jump back into the full docs.'}
            </h2>
            <p className="mt-2 max-w-2xl text-sm leading-6 text-[var(--anibt-text-secondary)]">
              {isChinese
                ? '所有截图都存放在本站，部署不依赖外部图床；文档也会继续围绕 AniBT 的发布、订阅和同步流程补齐。'
                : 'Screenshots are stored locally, and future guides can keep expanding around AniBT release, subscription, and sync workflows.'}
            </p>
          </div>
          <Link href={allDocsHref} className="anibt-button anibt-button-primary shrink-0">
            <Globe2 className="size-4" aria-hidden="true" />
            {isChinese ? '进入文档库' : 'Open Docs'}
          </Link>
        </div>
      </section>
    </main>
  );
}
