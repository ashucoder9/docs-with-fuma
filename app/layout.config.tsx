import { type BaseLayoutProps, type DocsLayoutProps } from 'fumadocs-ui/layout';
import { Title } from '@/app/layout.client';
import { pageTree } from '@/app/source';

// shared configuration
export const baseOptions: BaseLayoutProps = {
  nav: {
    title: <Title />,
  },
};

// docs layout configuration
export const docsOptions: DocsLayoutProps = {
  ...baseOptions,
  tree: pageTree,
};
