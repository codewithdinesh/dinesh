const isGithubActions = process.env.GITHUB_ACTIONS || false;
let assetPrefix = '';
let basePath = '';

if (isGithubActions) {
  const repo = process.env.GITHUB_REPOSITORY.replace(/.*?\//, ''); // get repository name
  assetPrefix = `/${repo}/`;
  basePath = `/${repo}`;
}

module.exports = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  assetPrefix: assetPrefix,
  basePath: basePath,
};
