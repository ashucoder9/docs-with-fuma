import createMDX from 'fumadocs-mdx/config';
import rehypeKatex from 'rehype-katex';
import remarkMath from 'remark-math';
 
const withMDX = createMDX({
  mdxOptions: {
    remarkPlugins: [remarkMath],
    rehypePlugins: (v) => [rehypeKatex, ...v],
    lastModifiedTime: 'git',
  },
});

/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/docs/build/cross-chain/avalanche-warp-messaging/:slug',
        destination: '/docs/cross-chain/avalanche-warp-messaging/:slug',
        permanent: true,
      },
      {
        source: '/docs/build/cross-chain/teleporter/:slug',
        destination: '/docs/cross-chain/teleporter/:slug',
        permanent: true,
      },
      {
        source: '/docs/build/virtual-machines/:slug',
        destination: '/docs/virtual-machines/:slug',
        permanent: true,
      },
      {
        source: '/docs/build/virtual-machines/evm-customization/:slug',
        destination: '/docs/virtual-machines/evm-customization/:slug',
        permanent: true,
      },
      {
        source: '/docs/build/virtual-machines/golang-vms/:slug',
        destination: '/docs/virtual-machines/golang-vms/:slug',
        permanent: true,
      },
      {
        source: '/docs/build/virtual-machines/rust-vms/:slug',
        destination: '/docs/virtual-machines/rust-vms/:slug',
        permanent: true,
      },
      {
        source: '/docs/build/virtual-machines/timestamp-vm/:slug',
        destination: '/docs/virtual-machines/timestamp-vm/:slug',
        permanent: true,
      },
      {
        source: '/docs/build/dapps/:slug',
        destination: '/docs/dapps/:slug',
        permanent: true,
      },
      {
        source: '/docs/build/dapps/advanced-tutorials/:slug',
        destination: '/docs/dapps/advanced-tutorials/:slug',
        permanent: true,
      },
      {
        source: '/docs/build/dapps/deploy-nft-collection/:slug',
        destination: '/docs/dapps/deploy-nft-collection/:slug',
        permanent: true,
      },
      {
        source: '/docs/build/dapps/end-to-end/:slug',
        destination: '/docs/dapps/end-to-end/:slug',
        permanent: true,
      },
      {
        source: '/docs/build/dapps/smart-contract-dev/:slug',
        destination: '/docs/dapps/smart-contract-dev/:slug',
        permanent: true,
      },
      {
        source: '/docs/build/dapps/toolchains/:slug',
        destination: '/docs/dapps/toolchains/:slug',
        permanent: true,
      },
      {
        source: '/docs/build/dapps/verify-contract/:slug',
        destination: '/docs/dapps/verify-contract/:slug',
        permanent: true,
      }, 
      {
        source: '/docs/build/subnets/:slug',
        destination: '/docs/subnets/:slug',
        permanent: true,
      },
      {
        source: '/docs/build/subnets/add-utility/:slug',
        destination: '/docs/subnets/add-utility/:slug',
        permanent: true,
      },
      {
        source: '/docs/build/subnets/deploy-a-subnet/:slug',
        destination: '/docs/subnets/deploy-a-subnet/:slug',
        permanent: true,
      },
      {
        source: '/docs/build/subnets/elastic-subnets/:slug',
        destination: '/docs/subnets/elastic-subnets/:slug',
        permanent: true,
      },
      {
        source: '/docs/build/subnets/maintain/:slug',
        destination: '/docs/subnets/maintain/:slug',
        permanent: true,
      },
      {
        source: '/docs/build/subnets/upgrade/:slug',
        destination: '/docs/subnets/upgrade/:slug',
        permanent: true,
      },
    ]
  },
};

export default withMDX(config);
