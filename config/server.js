module.exports = ({ env }) => ({
  host: env("HOST", "0.0.0.0"),
  port: env.int("PORT", 1337),
  app: {
    keys: env.array("APP_KEYS"),
  },
  admin: {
    url: "/admin", // This should match your Netlify deployment path
  },
  webhooks: {
    populateRelations: env.bool("WEBHOOKS_POPULATE_RELATIONS", false),
  },
  settings: {
    cors: {
      origin: [env.array("CORS_ORIGIN")],
      // Add any other relevant CORS settings
    },
  },
});
