module.exports = {
  devIndicators: {
    autoPrerender: true,
  },
  reactStrictMode: false,
  images: {
    domains: ["https://sdb-storage.s3.us-east-2.amazonaws.com"],
    unoptimized: true,
  },
  // exportPathMap: async function (defaultPathMap) {
  //   // 🚩the only difference is here, we spread the default pathMap
  //   const pathMap = { ...defaultPathMap };
  //   for (const [path, config] of Object.entries(defaultPathMap)) {
  //     if (path === "/") {
  //       pathMap[path] = config;
  //     } else {
  //       pathMap[`${path}/index`] = config;
  //     }
  //   }

  //   return pathMap;
  // },
  trailingSlash: true,
};
