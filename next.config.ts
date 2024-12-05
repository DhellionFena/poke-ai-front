import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [{
      hostname: 'avatars.githubusercontent.com'
    },
    {
      hostname: "oaidalleapiprodscus.blob.core.windows.net"
    },
    {
      hostname: "archives.bulbagarden.net"
    }
  ]
  }
};

export default nextConfig;
