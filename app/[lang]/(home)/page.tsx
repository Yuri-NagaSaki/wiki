import { localizedPath } from '@/lib/i18n';
import { ArrowRight, RefreshCw, ShieldCheck } from 'lucide-react';
import Link from 'next/link';

export default async function HomePage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const isChinese = lang === 'zh-CN';
  const docsHref = localizedPath(lang, '/docs/site-sync/bangumi');

  return (
    <main className="flex flex-1 flex-col">
      <section className="anibt-hero border-b">
        <div className="mx-auto flex min-h-[calc(100vh-3.5rem)] w-full max-w-6xl flex-col justify-center px-5 py-16 sm:px-8">
          <p className="mb-5 text-sm font-medium text-fd-muted-foreground">
            AniBT Wiki
          </p>
          <h1 className="max-w-3xl text-4xl font-semibold tracking-normal text-fd-foreground sm:text-6xl">
            {isChinese ? '欢迎来到 AniBT' : 'Welcome to AniBT'}
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-7 text-fd-muted-foreground sm:text-lg">
            {isChinese
              ? '这里会整理 AniBT 的使用说明、站点同步配置和常见排查流程。'
              : 'Guides for using AniBT, configuring site sync, and troubleshooting common workflows.'}
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-3">
            <Link
              href={docsHref}
              className="inline-flex h-11 items-center gap-2 rounded-md bg-fd-primary px-5 text-sm font-medium text-fd-primary-foreground transition-colors hover:bg-fd-primary/90"
            >
              {isChinese ? '查看站点同步' : 'Open Site Sync'}
              <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
            <Link
              href={localizedPath(lang, '/docs')}
              className="inline-flex h-11 items-center rounded-md border px-5 text-sm font-medium transition-colors hover:bg-fd-accent"
            >
              {isChinese ? '浏览全部文档' : 'Browse Docs'}
            </Link>
          </div>
        </div>
      </section>
      <section className="border-b bg-fd-background">
        <div className="mx-auto grid w-full max-w-6xl gap-6 px-5 py-10 sm:grid-cols-2 sm:px-8">
          <div>
            <RefreshCw className="mb-4 size-5 text-fd-primary" aria-hidden="true" />
            <h2 className="text-lg font-semibold">
              {isChinese ? '站点同步' : 'Site Sync'}
            </h2>
            <p className="mt-2 text-sm leading-6 text-fd-muted-foreground">
              {isChinese
                ? '从萌番组等站点获取同步所需信息，并保存到 AniBT。'
                : 'Collect required sync credentials from supported sites and save them in AniBT.'}
            </p>
          </div>
          <div>
            <ShieldCheck className="mb-4 size-5 text-fd-primary" aria-hidden="true" />
            <h2 className="text-lg font-semibold">
              {isChinese ? '本地文档资源' : 'Local Assets'}
            </h2>
            <p className="mt-2 text-sm leading-6 text-fd-muted-foreground">
              {isChinese
                ? '文档截图已放到项目本地，后续部署不依赖外部图床。'
                : 'Documentation screenshots are stored locally so deployments do not depend on external image hosts.'}
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
