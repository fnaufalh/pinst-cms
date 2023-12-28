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
  // "netlify-deployments": {
  //   enabled: true,
  //   config: {
  //     accessToken: env.NETLIFY_DEPLOYMENTS_PLUGIN_ACCESS_TOKEN,
  //     // accessToken: "nfp_Rtv4XCC8WPHa3MjLZDTVmcXBikVvWwyt6c17",
  //     sites: [
  //       {
  //         name: "Pinst CMS",
  //         id: "0cba3a29-1b47-4b9c-b3ba-2f73f54c3670",
  //         buildHook:
  //           "https://api.netlify.com/build_hooks/658df7e9541fd53d22004e94",
  //         branch: "main", // optional
  //       },
  //     ],
  //   },
  // },
  // ...
});
