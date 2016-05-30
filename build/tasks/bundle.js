    
var gulp = require('gulp');
var bundler = require('aurelia-bundler');

var config = {
  force: true,
  baseURL: '.',                   // baseURL of the application
  configPath: './config.js',      // config.js file. Must be within `baseURL`
  bundles: {
    "dist/app-build": {           // bundle name/path. Must be within `baseURL`. Final path is: `baseURL/dist/app-build.js`.
      includes: [
        '[*.js]',
        '*.html!text',
        '*.css!text',        
      ],
      options: {
        inject: true,
        minify: true
      }
    },
    "dist/vendor-build": {
      includes: [
      'aurelia-framework',
      'aurelia-bootstrapper',
      'aurelia-router',
      'aurelia-fetch-client',
      'aurelia-validation',
      'bootstrap',
      'font-awesome'
      ],
      options: {
        inject: true,
        minify: true
      }
    }
  }
};

//gulp.task('bundle', function() {
//  return bundle(config);
//});

gulp.task('bundle', function() {  
 return bundler.bundle(config);
});

gulp.task('unbundle', function() {  
 return bundler.unbundle(config);
});