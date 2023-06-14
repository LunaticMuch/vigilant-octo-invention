import { DocsThemeConfig } from "nextra-theme-docs";

const theme: DocsThemeConfig = {
  project: {
    link: "https://github.com/cloudquery/cloudquery",
    icon: (
      <img
        alt="CloudQuery Github repo stars"
        src="https://img.shields.io/github/stars/cloudquery/cloudquery?style=social"
      />
    ),
  },
  sidebar: {
    defaultMenuCollapseLevel: 1,
  },
}

export default theme;