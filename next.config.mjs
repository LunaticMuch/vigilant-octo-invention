// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
// }

// const withNextra = require('nextra')({
//   theme: 'nextra-theme-docs',
//   themeConfig: './theme.config.tsx'
// })
 
// module.exports = withNextra()

// module.exports = nextConfig
import nextra from "nextra";

const replaceMdxPluginNames = (node) => {
  if (node.type === "text") {
    Object.entries(pluginNamePatterns).forEach(([key, pattern]) => {
      const match = node.value.match(pattern);
      if (match) {
        node.value = node.value.replace(pattern, "postgresql"); // default to postgresql
      }
    });
  }
  if (node.children !== undefined) {
    node.children.forEach(replaceMdxPluginNames);
  }
  return;
};

const replaceMdxCodeVersions = (node) => {
  if (node.type === "text") {
    Object.entries(patterns).forEach(([key, pattern]) => {
      const match = node.value.match(pattern);
      if (match && match.length >= 1) {
        const name = match[1].toLowerCase();
        const version = versions[key][name] || "Unpublished";
        node.value = node.value.replace(pattern, version);
      }
    });
  }
  if (node.children !== undefined) {
    node.children.forEach(replaceMdxCodeVersions);
  }
  return;
};


const withNextra = nextra({
  defaultShowCopyCode: true,
  theme: "nextra-theme-docs",
  themeConfig: "./theme.config.tsx",
  mdxOptions: {
    rehypePrettyCodeOptions: {
      theme: "nord",
      // onVisitLine: (node) => {
      //   replaceMdxCodeVersions(node);
      //   replaceMdxPluginNames(node);
      // },
    },
  },
});

export default withNextra({
  reactStrictMode: true,
  experimental: {
    legacyBrowsers: false,
    // default is 128KB
    largePageDataBytes: 512 * 1000,
  }})