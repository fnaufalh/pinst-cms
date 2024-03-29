module.exports = ({ env }) => ({
  host: env("HOST", "0.0.0.0"),
  port: env.int("PORT", "1337"),
  // url: env("URL", ''),
  app: {
    keys: env.array("APP_KEYS"),
  },
  admin: {
    url: env("ADMIN_URL", "/admin"),
  },
  webhooks: {
    populateRelations: env.bool("WEBHOOKS_POPULATE_RELATIONS", false),
  },
  // settings: {
  //   cors: {
  //     origin: [env.array("CORS_ORIGIN")],
  //     // Add any other relevant CORS settings
  //   },
  // },
});
