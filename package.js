Package.describe({
  name: 'rikonor:env',
  version: '0.0.1',
  summary: 'Expose specific environment variables to the client',
  git: 'https://www.github.com/rikonor/meteor-env',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.1');
  api.use('ecmascript');
  api.addFiles('lib/server/env.js', 'server');
  api.export('exposeEnvVar', 'server');
});
