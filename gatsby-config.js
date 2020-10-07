const sidebarCategories = {
  null: ["index", "intro/ecosystem", "intro/support"],
};

const navConfig = {
  "Hummingbot Docs": {
    url: "https://docs.hummingbot.io",
    description:
      "Documentation for Hummingbot, the open source framework that helps you build and run crypto trading bots",
    omitLandingPage: true,
  },
  "Hummingbot Miner Docs": {
    url: "https://docs.hummingbot.io/miner",
    description:
      "Documentation for Hummingbot Miner, the decentralized market making platform",
  },
  "Hummingbot Academy": {
    url: "https://hummingbot.io/academy",
    description:
      "Guides and tutorials that teach you how to use Hummingbot and Hummingbot Miner",
  },
};

const footerNavConfig = {
  "Hummingbot website": {
    href: "https://hummingbot.io",
    target: "_blank",
    rel: "noopener noreferrer",
  },
  "Hummingbot Miner": {
    href: "https://miner.hummingbot.io",
    target: "_blank",
    rel: "noopener noreferrer",
  },
  Blog: {
    href: "https://hummingbot.io/blog",
    target: "_blank",
    rel: "noopener noreferrer",
  },
};

module.exports = {
  siteMetadata: {
    headerButtonText: "Launch Hummingbot Miner",
    headerButtonLink: "https://miners.hummingbot.io/",
    discordUrl: "https://discord.hummingbot.io",
  },
  pathPrefix: "/",
  plugins: [
    {
      resolve: "gatsby-theme-apollo-docs",
      options: {
        root: __dirname,
        siteName: "Hummingbot Miner docs",
        description:
          "Documentation for Hummingbot Miner, the leading liquidity mining platform for order book exchanges",
        sidebarCategories,
        subtitle: "Hummingbot Miner Docs",
        githubRepo: "coinalpha/hummingbot-miner",
        baseUrl: "https://miner-docs.hummingbot.io",
        baseDir: "/",
        navConfig,
        footerNavConfig,
        twitterHandle: "hummingbot_io",
        youtubeUrl: "https://www.youtube.com/channel/UCxzzdEnDRbylLMWmaMjywOA",
        logoLink: "http://miner.hummingbot.io",
        /**
         * @todo Replace these two keys with own keys
         * @see https://github.com/apollographql/gatsby-theme-apollo/tree/master/packages/gatsby-theme-apollo-docs#algolia-configuration
         */
        algoliaApiKey: "768e823959d35bbd51e4b2439be13fb7",
        algoliaIndexName: "apollodata",
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "Hummingbot Miner Docs",
        short_name: "Hummingbot Miner Docs",
        start_url: "/",
        background_color: "#0D999E",
        theme_color: "#0D999E",
        icon: "src/images/brand-logo.png",
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-katex`,
            options: {
              // Add any KaTeX options from https://github.com/KaTeX/KaTeX/blob/master/docs/options.md here
              strict: `ignore`,
            },
          },
        ],
      },
    },
  ],
};
