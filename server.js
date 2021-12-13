const { createApp } = require('@unleash/proxy');

const port = process.env.UNLEASH_PROXY_PORT;

const app = createApp({
    unleashUrl: process.env.UNLEASH_URL,
    unleashApiToken: process.env.UNLEASH_API_TOKEN,
    proxySecrets: process.env.UNLEASH_PROXY_SECRETS,
    refreshInterval: process.env.UNLEASH_REFRESH_INTERVAL,
    environment: process.env.UNLEASH_ENVIRONMENT,
});

app.listen(port, () =>
    // eslint-disable-next-line no-console
    console.log(`Unleash Proxy listening on http://localhost:${port}/proxy`),
);