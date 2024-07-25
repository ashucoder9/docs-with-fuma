import { type BaseLayoutProps, type DocsLayoutProps } from 'fumadocs-ui/layout';
import { Title } from '@/app/layout.client';
import { pageTree } from '@/app/source';
import { RootToggle } from 'fumadocs-ui/components/layout/root-toggle';
import { BlocksIcon, MailIcon, SproutIcon, SquareStackIcon } from 'lucide-react';

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
  sidebar: {
    defaultOpenLevel: 0,
    banner: (
      <RootToggle
        options={[
          {
            title: 'Learn',
            description: '',
            icon: <SproutIcon />,
            url: '/docs/learn/what-is-avalanche',
          },
          {
            title: 'Multi-Chain Architecture',
            description: '',
            icon: <SquareStackIcon />,
            url: '/docs/api-reference',
          },
          {
            title: 'AWM & Teleporter',
            description: '',
            icon: <MailIcon />,
            url: '/docs/build/cross-chain/avalanche-warp-messaging/overview',
          },
          {
            title: 'Customizing EVM',
            description: '',
            icon: <BlocksIcon />,
            url: '/course/customizing-evm',
          },
        ]}
      />
    ),
  }
};
