import createMDX from 'fumadocs-mdx/config';

const withMDX = createMDX();

/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/docs/build/cross-chain',
        destination: '/docs/cross-chain',
        permanent: true,
      },
      {
        source: '/docs/build/virtual-machines',
        destination: '/docs/virtual-machines',
        permanent: true,
      },
      {
        source: '/docs/build/dapps',
        destination: '/docs/dapps',
        permanent: true,
      },
      {
        source: '/docs/build/subnets',
        destination: '/docs/subnets',
        permanent: true,
      },
    ]
  },
};

export default withMDX(config);
