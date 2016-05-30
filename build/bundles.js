module.exports = {
  "bundles": {
    "dist/app-build": {
      "includes": [
        "[*.js]",
        "*.html!text",
        "*.css!text"
      ],
      "options": {
        "inject": true,
        "minify": true,
        "depCache": true,

      }
    },
    "dist/aurelia": {
      "includes": [
        "aurelia-framework",
        "aurelia-bootstrapper",
        "aurelia-fetch-client",
        "aurelia-router",
        'aurelia-validation',
        'bootstrap',
        "bootstrap/css/bootstrap.css!text",
        'font-awesome'

      ],
      "options": {
        "inject": true,
        "minify": false,

      }
    }
  }
};
