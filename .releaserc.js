module.exports = {
  branches: [
    'master',
    {
      name: 'canary',
      channel: 'canary',
      prerelease: true,
    },
  ],
  plugins: [
    '@semantic-release/commit-analyzer',
    '@semantic-release/release-notes-generator',
    '@semantic-release/npm',
    '@semantic-release/github',
    [
      '@semantic-release/git',
      {
        // eslint-disable-next-line no-template-curly-in-string -- required by `semantic-release`.
        message: 'release: ${nextRelease.version}',
      },
    ],
  ],
};
