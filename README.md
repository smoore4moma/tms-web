# tms-web

> This is a web front-end to [tms-api](https://github.com/smoore4moma/tms-api), a REST api for The Museum System.  The architecture of this application is based on [Aurelia](http://aurelia.io), so it essentially an HTML5 app with no server-side code.  You do not need to install tms-api as static json files are included.  

NOTE: All searches return just one object for the demo!

## Running The App

To run the app, follow these steps.

1. Ensure that [NodeJS](http://nodejs.org/) is installed. This provides the platform on which the build tools runs.
2. From the project folder, execute the following command:

  ```shell
  npm install
  ```
3. Ensure that [Gulp](http://gulpjs.com/) is installed. If you need to install it, use the following command:

  ```shell
  npm install -g gulp
  ```
4. Ensure that [jspm](http://jspm.io/) is installed. If you need to install it, use the following command:

  ```shell
  npm install -g jspm
  ```
  > **Note:** jspm queries GitHub to install server packages, but GitHub has a rate limit on anonymous API requests. You can configure jspm with your GitHub credentials in order to avoid problems (i.e., `jspm registry config github`)

5. Install the client-side dependencies with jspm:

  ```shell
  jspm install
  ```
6. The code will run much faster once it is minified and bundled, execute the following command to do so (use unbundle to, um, unbundle):

  ```shell
  gulp bundle
  ```
  > Note: This app uses a new javascript release (ES 2016), so basically don't use IE.

## Screenshots

/#/search

<img src='https://github.com/smoore4moma/tms-web/blob/master/src/assets/images/screenshot1.jpg' />

/#/list?searchNumber=1600.2001

<img src='https://github.com/smoore4moma/tms-web/blob/master/src/assets/images/screenshot2.jpg' />

/#/detail/83696

<img src='https://github.com/smoore4moma/tms-web/blob/master/src/assets/images/screenshot3.jpg' />