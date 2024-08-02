import { type BaseLayoutProps, type DocsLayoutProps } from 'fumadocs-ui/layout';
import { Title } from '@/app/layout.client';
import { utils } from '@/utils/source';
import { RootToggle } from 'fumadocs-ui/components/layout/root-toggle';
import { MailIcon, SproutIcon, SquareGanttChart, IndentDecrease, Layers, MonitorCheck, Webhook, FileJson } from 'lucide-react';

// shared configuration
export const baseOptions: BaseLayoutProps = {
  nav: {
    title: <Title />,
  },
};

// docs layout configuration
export const docsOptions: DocsLayoutProps = {
  ...baseOptions,
  tree: utils.pageTree,
  sidebar: {
    defaultOpenLevel: 0,
    banner: (
      <RootToggle
        options={[
          {
            title: 'Avalanche Protocol',
            description: 'Learn about Avalanche',
            icon: <SproutIcon />,
            url: '/docs/learn',
          },
          {
            title: 'Smart Contracts',
            description: 'Build Apps on Avalanche',
            icon: <SquareGanttChart />,
            url: '/docs/dapps',
          },
          {
            title: 'Avalanche L1s',
            description: 'Build Your L1 Blockchain',
            icon: <Layers />,
            url: '/docs/subnets',
          },
          {
            title: 'Virtual Machines',
            description: 'Customize Your Execution Layer',
            icon: <IndentDecrease />,
            url: '/docs/virtual-machines',
          },
          {
            title: 'Nodes & Validators',
            description: 'Participate in the Network',
            icon: <MonitorCheck />,
            url: '/docs/nodes',
          },
          {
            title: 'Interoperability',
            description: 'AWM and Teleporter',
            icon: <MailIcon />,
            url: '/docs/cross-chain',
          },
          {
            title: 'API Docs',
            description: 'Avalanche API References',
            icon: <Webhook />,
            url: '/docs/api-reference',
          },
          {
            title: 'API Playground',
            description: 'Interact with Avalanche APIs',
            icon: <FileJson />,
            url: '/docs/api-playground',
          },
        ]}
      />
    ),
  }
};
