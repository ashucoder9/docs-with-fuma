import { cva } from 'class-variance-authority';
import type { LucideIcon } from 'lucide-react';
import {
  CpuIcon,
  BadgeDollarSign,
  Globe, MailIcon, SproutIcon, SquareGanttChart, IndentDecrease, Layers, MonitorCheck, Settings, Terminal, Cable, Webhook
} from 'lucide-react';
import Link from 'next/link';
import type { HTMLAttributes, ReactNode } from 'react';
import { cn } from '@/utils/cn';
import { CodeBlock } from '@/components/code-block';
import { File, Files, Folder } from 'fumadocs-ui/components/files';
import { DeployBlockchainAnimation } from './page.client';

const badgeVariants = cva(
  'mb-2 inline-flex size-7 items-center justify-center rounded-full bg-fd-primary font-medium text-fd-primary-foreground',
);

export default function HomePage(): React.ReactElement {
  return (
    <>
      <main className="container relative max-w-[1100px] px-2 py-4 lg:py-16">
        <div style={{ background: 'repeating-linear-gradient(to bottom, transparent, hsl(var(--secondary)/.2) 500px, transparent 1000px)' }}>
          <div className="relative">
            <Hero />
          </div>
          <Introduction />
          <Highlights />
          <Features />
        </div>
      </main>
    </>
  );
}

function Highlights(): React.ReactElement {
  return (
    <div className="grid grid-cols-1 border-r md:grid-cols-2 lg:grid-cols-3">
      <Highlight icon={SproutIcon} heading="Avalanche Protocol" link="/docs/learn">
        Learn about Avalanche Protocol and it's groundbreaking consensus algorithm.
      </Highlight>
      <Highlight icon={SquareGanttChart} heading="Smart Contracts" link="/docs/dapps">
        Your one stop shop to deploy smart contracts on the Avalanche C-Chain.
      </Highlight>
      <Highlight icon={Layers} heading="Avalanche L1s" link="/docs/subnets">
        Utilize the Avalanche tech stack to build your own L1 blockchain.
      </Highlight>
      <Highlight icon={IndentDecrease} heading="Virtual Machines" link="/docs/virtual-machines">
        Learn how to customize the EVM or build your a complete new virtual machines.
      </Highlight>
      <Highlight icon={MonitorCheck} heading="Nodes & Validators" link="/docs/nodes">
        Become an active participant in the network by running a node or validator.
      </Highlight>
      <Highlight icon={MailIcon} heading="Interoperability" link="/docs/cross-chain">
        Advanced interoperability protocols to communicate with other blockchains.
      </Highlight>
    </div>
  );
}

function Highlight({
  icon: Icon,
  heading,
  link,
  children,
}: {
  icon: LucideIcon;
  heading: ReactNode;
  link: string;
  children: ReactNode;
}): React.ReactElement {
  return (
  <a href={link}>
    <div className="border-l border-t px-6 py-12 hover:bg-accent">
      <div className="mb-4 flex flex-row items-center gap-2 text-fd-muted-foreground">
        <Icon className="size-4" />
        <h2 className="text-sm font-medium">{heading}</h2>
      </div>
      <span className="font-medium">{children}</span>
    </div>
  </a>
  );
}

function Hero(): React.ReactElement {
  return (
    <div className="container relative z-[2] flex flex-col items-center overflow-hidden border-x border-t bg-fd-background px-6 pt-12 text-center md:py-16">
      <h1 className="mb-6 text-center text-4xl font-semibold md:text-5xl">
        Avalanche Docs
      </h1>
      <p className="mb-6 h-fit text-center p-2 text-fd-muted-foreground md:max-w-[80%] md:text-xl">
        Avalanche provides the tech stack for building <b className="text-foreground font-medium">decentralized Layer 1s with blazing-fast Avalanche Consensus</b>. You can also deploy your <u>EVM-compatible smart contracts</u> on the Avalanche C-chain.
      </p>
    </div>
  );
}

function Introduction(): React.ReactElement {
  return (
    <div className="grid grid-cols-1 border-r md:grid-cols-2">
      <div className="flex flex-col border-l border-t px-6 py-12 md:py-16">
        <div className={cn(badgeVariants())}>1</div>
        <h3 className="text-xl font-bold">Configure.</h3>
        <p className="mb-8 text-fd-muted-foreground">
          Configure your blockchain using Avalanche CLI.
        </p>
        <div className="relative flex flex-col">
          <CodeBlock
            lang="bash"
            wrapper={{ className: 'absolute inset-x-2 top-0' }}
            code="avalanche blockchain create MyBlockchain"
          />
          <Files className="z-[2] mt-20 shadow-xl hide-icons">
            <Folder name="Using the above command, you can configure your:" defaultOpen>
              <File icon=<CpuIcon/> name="Virtual Machine" />
              <File icon=<Globe/> name="Chain ID" />
              <File icon=<BadgeDollarSign/> name="Token Name & Symbol" />
            </Folder>
          </Files>
        </div>
      </div>
      <div className="flex flex-col border-l border-t px-6 py-12 md:py-16">
        <div className={cn(badgeVariants())}>2</div>
        <h3 className="text-xl font-bold">Launch Your Avalanche L1.</h3>
        <p className="mb-8 text-fd-muted-foreground">
          Launch your Avalanche L1 with a single command.
        </p>
        <DeployBlockchainAnimation />
      </div>
    </div>
  );
}

function Features(): React.ReactElement {
  return (
    <div className="grid grid-cols-1 border-b border-r md:grid-cols-2">
      <Feature
        icon={Settings}
        subheading="Toolings"
        heading="Tools For Developers."
        description="We provide a suite of tools to make your development experience as smooth as possible."
      >
      <div className="mt-8 flex flex-col gap-4">
        <Link href="/docs/toolings/cli" className="rounded-xl border bg-fd-background p-4 shadow-lg transition-colors hover:bg-accent">
            <Terminal />
            <h3 className="font-semibold">Avalanche CLI</h3>
            <p className="text-sm text-fd-muted-foreground">
              Command line interface for everything Avalanche.
            </p>
        </Link>
        <Link href="https://github.com/ava-labs/avalanche-starter-kit" className="rounded-xl border bg-fd-background p-4 shadow-lg transition-colors hover:bg-accent">
          <Cable />
          <h3 className="font-semibold">Avalanche Starter Kit</h3>
          <p className="text-sm text-fd-muted-foreground">
            Quickstart your journey into Avalanche with our Starter Kit.
          </p>
        </Link>
        </div>
      </Feature>
      <Feature
        icon={Webhook}
        subheading="APIs"
        heading="API References for anything Avalanche."
        description="Well documented and interactive API documentation"
      >
      </Feature>
    </div>
  );
}

function Feature({
  className,
  icon: Icon,
  heading,
  subheading,
  description,
  ...props
}: HTMLAttributes<HTMLDivElement> & {
  icon: LucideIcon;
  subheading: ReactNode;
  heading: ReactNode;
  description: ReactNode;
}): React.ReactElement {
  return (
    <div
      className={cn('border-l border-t px-6 py-12 md:py-16', className)}
      {...props}
    >
      <div className="mb-4 inline-flex items-center gap-2 text-sm font-medium text-fd-muted-foreground">
        <Icon className="size-4" />
        <p>{subheading}</p>
      </div>
      <h2 className="mb-2 text-lg font-semibold">{heading}</h2>
      <p className="text-fd-muted-foreground">{description}</p>

      {props.children}
    </div>
  );
}