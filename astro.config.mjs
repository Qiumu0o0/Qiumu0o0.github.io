// @ts-check
import { defineConfig } from 'astro/config';
import { unified } from '@astrojs/markdown-remark';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

import preact from "@astrojs/preact";
import remarkGitDate from './remark-git-date.mjs';

// https://astro.build/config
export default defineConfig({
  site: "https://qiumu0o0.github.io/",
  markdown: {
    processor: unified({
      remarkPlugins: [remarkGitDate, remarkMath],
      rehypePlugins: [[rehypeKatex, {
        trust: true,
        strict: false,
        macros: {
          '\\varowedge': '\\htmlClass{varowedge-symbol}{\\ltimes}',
        },
      }]],
    }),
    shikiConfig: {
      themes: {
        light: 'github-light',
        dark: 'github-dark',
      },
      defaultColor: 'light',
      langAlias: { systemverilog: 'system-verilog' },
    },
  },
  integrations: [preact()]
});
