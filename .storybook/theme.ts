import { create } from 'storybook/theming';

export const kurlClubTheme = create({
  base: 'dark',

  // Brand
  brandTitle: 'KurlClub UI Components',
  brandUrl: 'https://github.com/kurlclub/kurlclub-ui-components',
  brandImage: '/logo.svg',
  brandTarget: '_blank',

  // Colors
  colorPrimary: '#d3f702',
  colorSecondary: '#96af01',

  // UI
  appBg: '#282b32',
  appContentBg: '#282b32',
  appPreviewBg: '#282b32',
  appBorderColor: '#53555b',
  appBorderRadius: 8,

  // Typography
  fontBase:
    'Figtree, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
  fontCode: 'monospace',

  // Text
  textColor: '#ffffff',
  textInverseColor: '#11141c',

  // Toolbar
  barTextColor: '#ffffff',
  barSelectedColor: '#d3f702',
  barHoverColor: '#96af01',
  barBg: '#282b32',
});
