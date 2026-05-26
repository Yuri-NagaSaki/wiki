import { BookOpenText } from 'lucide-react';
import { i18n, localizedPath } from '@/lib/i18n';
import { uiTranslations } from 'fumadocs-ui/i18n';
import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';

export const translations = i18n
  .translations()
  .extend(uiTranslations())
  .add('ui', {
    'zh-CN': {
      displayName: '简体中文',
      search: '搜索文档',
      searchNoResult: '没有找到结果',
      searchOpen: '打开搜索',
      searchClose: '关闭搜索',
      toc: '本页目录',
      tocNoHeadings: '没有标题',
      tocInline: '目录',
      lastUpdate: '最后更新于',
      chooseLanguage: '选择语言',
      nextPage: '下一页',
      previousPage: '上一页',
      chooseTheme: '主题',
      editOnGithub: '在 GitHub 编辑',
      themeToggle: '切换主题',
      themeLight: '浅色',
      themeDark: '深色',
      themeSystem: '跟随系统',
      codeBlockCopy: '复制文本',
      codeBlockCopied: '已复制',
      accordionCopyAnchor: '复制链接',
      headingCopyAnchor: '复制标题链接',
      bannerClose: '关闭提示',
      menuToggle: '打开菜单',
      pageActionsCopyMarkdown: '复制 Markdown',
      pageActionsOpen: '打开',
      pageActionsOpenGitHub: '在 GitHub 打开',
      pageActionsViewMarkdown: '查看 Markdown',
      pageActionsOpenScira: '在 Scira AI 打开',
      pageActionsOpenChatGPT: '在 ChatGPT 打开',
      pageActionsOpenClaude: '在 Claude 打开',
      pageActionsOpenCursor: '在 Cursor 打开',
      pageActionsOpenInLLMPrompt: '阅读 {url}，我想基于它提问。',
      sidebarOpen: '打开侧边栏',
      sidebarCollapse: '折叠侧边栏',
      typeTableProp: '属性',
      typeTableType: '类型',
      typeTableDefault: '默认值',
      typeTableParameters: '参数',
      typeTableReturns: '返回值',
      notFoundTitle: '页面不存在',
      notFoundDescription: '你访问的页面可能已被移动、重命名或暂时不可用。',
      notFoundLink: '返回首页',
    },
    en: {
      displayName: 'English',
    },
  });

export function baseOptions(locale: string): BaseLayoutProps {
  const isChinese = locale === i18n.defaultLanguage;

  return {
    i18n: true,
    nav: {
      title: (
        <span className="inline-flex items-center gap-2 font-semibold">
          <BookOpenText className="size-5" aria-hidden="true" />
          AniBT Wiki
        </span>
      ),
      url: localizedPath(locale, '/'),
    },
    links: [
      {
        text: isChinese ? '文档' : 'Docs',
        url: localizedPath(locale, '/docs'),
        active: 'nested-url',
      },
    ],
  };
}
