// purgecss.config.js

module.exports = {
  // These are the files that Purgecss will search through
  content: ["../dist/site/**/*.html"],

  // These are the stylesheets that will be subjected to the purge
  css: ["../dist/site/css/*.css"]
};
