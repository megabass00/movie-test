# Movie Test Project

Test project with movie list and detail with fake login. Build with Angular 1.4, Bootstrap 3, Jade, Gulp and Bower.

## To use

To clone and run this repository you'll need [Git](https://git-scm.com) and [Node.js](https://nodejs.org/en/download/) installed on your computer which comes with [npm](http://npmjs.com). You will need [bower](https://bower.io/) also.
~~~~
# Clone this repository
git clone https://github.com/megabass00/movie-test

# Install bower, gulp and http-serve globally
npm install -g bower
npm install -g gulp
npm install -g http-server

# Enter to project directory
cd movie-test

# Download dependencies
npm install && bower install

# Build project
gulp

# ...also with npm
npm build

# Open project in your browser
cd dist && http-server -o
~~~~

If you wish to expand the project you can use gulp task for development:
~~~~
# Build sass files
gulp css

# Build javascript files
gulp js

# Build fonts
gulp fonts

# Build jade template files
gulp templates

# Build entire project and watch for files changes
gulp watch
~~~~

## Test access data

Test user data for login:
- Username: *user1*
- Password: *gfi*
