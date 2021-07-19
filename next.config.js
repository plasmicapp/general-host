
const plasmic = require('@plasmicapp/loader/next');
const withPlasmic = plasmic({
  projects: ['iVF1Xpo6pdKdWJgtQcPh9j'] // An array of project ids.
});
module.exports = withPlasmic({
  eslint: {
    ignoreDuringBuilds: true,
  },
  trailingSlash: true,
  // Your NextJS config.
});
  