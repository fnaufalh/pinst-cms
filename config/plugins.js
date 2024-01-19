module.exports = ({ env }) => ({
  // ...
  slugify: {
    enabled: true,
    config: {
      contentTypes: {
        article: {
          field: "slug",
          references: "title",
        },
      },
    },
  },
  "netlify-deployments": {
    enabled: true,
    config: {
      accessToken: process.env.NETLIFY_DEPLOYMENTS_PLUGIN_ACCESS_TOKEN,
      sites: [
        {
          name: "sunny-dango-8a1b31",
          id: "84099398-badb-471b-a9d6-f2358f2624a0",
          buildHook:
            "https://api.netlify.com/build_hooks/65a8d185d04dd1490a7a5e6e",
          branch: "main", // optional
        },
      ],
    },
  },
});
